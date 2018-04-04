import React, { Component } from 'react';

export default class DetailedView extends Component {
    render() {
        return (
            <div>
                <h1>Detailed View</h1>
                {this.props.match.params.id}
            </div>
        );
    }
}