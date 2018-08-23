import React from 'react';
import Team from '../atom/Team';
import Draw from '../atom/Draw';
import Submit from '../atom/Submit';

class Match extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            leftClicked: false,
            midClicked: false,
            rightClicked: false
        }
    }

    render() {
        const premier = this.props.premier

        return (
            <div className="btn-group d-flex justify-content-center">
                <Team id={premier.id} badge={premier.badge} zhName={premier.zhName} clicked={this.state.leftClicked} onClick={() => this.changeColor('left')} />
                <Draw clicked={this.state.midClicked} onClick={() => this.changeColor('mid')} />
                <Team id={premier.id} badge={premier.badge} zhName={premier.zhName} clicked={this.state.rightClicked} onClick={() => this.changeColor('right')} />
                <Submit />{/*  onClick={() => do something}/> */}
            </div>
        )
    }

    changeColor = (position) => {
        switch (position) {
            case 'left': this.setState({
                leftClicked: true,
                midClicked: false,
                rightClicked: false
            });
            break;
            case 'mid': this.setState({
                leftClicked: false,
                midClicked: true,
                rightClicked: false
            });
            break;
            case 'right': this.setState({
                leftClicked: false,
                midClicked: false,
                rightClicked: true
            });
            break;
            default: break;
        }
    }
}

export default Match