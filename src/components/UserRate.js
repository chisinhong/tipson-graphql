import React from 'react';

class UserRate extends React.Component {
    render() {
        return <div className = "userRate">{this.winPercentage()}</div>
    }

    winPercentage = () => {
        const totalCount = this.props.total.count
        const winCount = this.props.win.count

        return (totalCount !== 0) ?
            Math.floor(winCount / totalCount * 100) + '%' : 0 + '%'
    }
}

export default UserRate