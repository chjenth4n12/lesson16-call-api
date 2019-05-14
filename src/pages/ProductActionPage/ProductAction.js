import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProductRequest, editProductRequest, getProductRequest } from '../../actions';

class ProductAction extends Component {

    constructor (props) {
        super(props);
        this.state = {
            id : '',
            txtName : '',
            txtPrice : '',
            chkbStatus : true
        }
    }

    componentDidMount(){
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getItemEditing(id);
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps && nextProps.product) {
            var product = nextProps.product;
            this.setState({
                id : product.id,
                txtName : product.name,
                txtPrice : product.price,
                chkbStatus : product.status
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        if (id) {
            this.props.editProductRequest({
                id : id,
                name : txtName,
                price : txtPrice,
                status : chkbStatus
            });
            history.goBack();
        } else {
            this.props.addProductRequest({
                name : txtName,
                price : txtPrice,
                status : chkbStatus
            });
            history.goBack(); // quay về trang trước đó
            // history.push("/"); // quay về trang chỉ định
        }
    }

    render() {
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        
        return (
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <legend>{id ? 'Edit Product' : 'Add Product'}</legend>
                    <div className="form-group">
                        <label>Name Product: </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Input field"
                            name="txtName"
                            value={ txtName }
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price Product: </label>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Input field" 
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input 
                                type="checkbox" 
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange}
                                checked={chkbStatus}
                            />
                            Stocking
                        </label>
                    </div>
                    <Link to="/product" className="btn btn-danger mr-10">Back</Link>
                    <button type="submit" className="btn btn-primary">Done</button>
                </form>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        product : state.productEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProductRequest : (product) => {
            dispatch(addProductRequest(product));
        },
        getItemEditing : (id) => {
            dispatch(getProductRequest(id));
        },
        editProductRequest : (product) => {
            dispatch(editProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductAction);
