import React from 'react';
import './App.css';

function App() {
    return (
        
        <div>
            <div className="navbar navbar-default">
                <a className="navbar-brand">CALL API</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Product</a>
                    </li>
                </ul>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-info mb-10">Add Product</button>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">List Product</h3>
                            </div>
                            <div className="panel-body">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>ID Product</th>
                                            <th>Name Product</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
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
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default App;
