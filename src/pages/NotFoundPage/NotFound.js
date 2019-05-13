import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            
            <div className="alert alert-warning">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>Không tìm thấy trang </strong> 404 not found
            </div>
            
        );
    }
}

export default NotFound;
