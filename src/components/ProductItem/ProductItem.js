import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        var statusClassname = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{ index + 1}</td>
                <td>{ product.id}</td>
                <td>{ product.name }</td>
                <td>{ product.price } $</td>
                <td>
                    <span className={`label label-${statusClassname}`}>{product.status ? 'con hang' : 'het hang'}</span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-large btn-block btn-success">Edit</Link>
                    <button type="button" className="btn btn-large btn-block btn-danger" onClick={() => this.onDelete(product.id)}>Delete</button>
                </td>
            </tr>
        );
    }

    onDelete = (id) => {
        if (confirm("Do you want to remove it?")) { //eslint-disable-line
            console.log(id);
            this.props.onDelete(id);
        }
    }
}

export default ProductItem;
