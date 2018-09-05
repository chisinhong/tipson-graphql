import React from 'react';
import Box from '../atom/Box';

class Boxes extends React.Component {
    render() {
        return <div className="d-flex justify-content-center profile-record">
            <div className="total">
                <Box title={this.props.total.title} count={this.props.total.count} />
            </div>
            <div className="win">
                <Box className="win" title={this.props.win.title} count={this.props.win.count} />
            </div>
            <div className="rate">
                <Box className="rate" title={this.props.rate.title} count={this.winPercentage()} />
            </div>
        </div>
    }

    winPercentage = () => {
        const totalCount = this.props.total.count
        const winCount = this.props.win.count

        return (totalCount !== 0) ?
            Math.floor(winCount / totalCount * 100) + '%' : 0 + '%'
    }
}

export default Boxes