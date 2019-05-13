import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import callApi from '../../utils/apiCaller';

class Products extends Component {

    constructor(props){
        super(props);
        this.state = {
            products : []
        };
    }

    componentDidMount () {
        callApi('products', 'GET', null).then(res => {
            this.setState({
                products : res.data
            });
        });
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
        var { products } = this.state;
        callApi(`products/${id}`, 'DELETE', null).then( res => {
            var index = this.findIndex(id);
            if (index !== -1) {
                products.splice(index, 1);
                this.setState({
                    products : products
                });
            }
            console.log(products);
        });
    }

    render() {
        var { products } = this.state;
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

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}

export default connect (mapStateToProps, null) (Products);
