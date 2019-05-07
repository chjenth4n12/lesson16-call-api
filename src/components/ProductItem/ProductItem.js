import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Iphone 7 Plus</td>
                <td>500</td>
                <td>
                    <span className="label label-warning">Label</span>
                </td>
                <td>
                    <button type="button" className="btn btn-large btn-block btn-success">Edit</button>
                    <button type="button" className="btn btn-large btn-block btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
