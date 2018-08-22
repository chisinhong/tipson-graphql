import React from 'react';

class Submit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <button className='btn btn-success submit-btn' onClick={this.props.onClick}>
                <p>提交</p>
            </button>
        )
    }
}

export default Submit