import React, { Component } from 'react';

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
                    <button type="button" className="btn btn-large btn-block btn-success" onClick={() => this.onEdit(product)}>Edit</button>
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

    onEdit = (product) => {
        this.props.onEdit(product);
    }
}

export default ProductItem;
