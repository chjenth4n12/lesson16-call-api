import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProductsRequest, deleteProductRequest } from './../../actions/index';

class Products extends Component {

    componentDidMount () {
        this.props.getAllProductsRequest();
    }

    findIndex (id) {
        var result = -1;
        this.state.products.forEach((product, index) => {
            if (id === product.id) {
                result = index;
            }
        });
        return result;
    }

    onDelete = (id) => {
        this.props.deleteProductRequest(id);
    }

    render() {
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='/product/add' className="btn btn-info mb-10">Add Product</Link>
                <ProductList>
                    { this.showProduct(products) }
                </ProductList>
            </div>
        );
    }

    showProduct = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                        onEdit={this.onEdit}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllProductsRequest : () => {
            dispatch(getAllProductsRequest());
        },
        deleteProductRequest : (id) => {
            dispatch(deleteProductRequest(id));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Products);
