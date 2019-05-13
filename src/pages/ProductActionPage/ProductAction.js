import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import { Link } from 'react-router-dom';

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
            callApi(`products/${id}`, 'GET', null).then(res => {
                this.setState({
                    id : id,
                    txtName : res.data.name,
                    txtPrice : res.data.price,
                    chkbStatus : res.data.status
                });
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
            callApi(`products/${id}`, 'PUT', {
                name : txtName,
                price : txtPrice,
                status : chkbStatus
            }).then(res => {
                history.goBack();
            });
        } else {
            callApi('products', 'POST', {
                name : txtName,
                price : txtPrice,
                status : chkbStatus
            }).then( res => {
                history.goBack(); // quay về trang trước đó
                // history.push("/"); // quay về trang chỉ định
            });
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

export default ProductAction;
