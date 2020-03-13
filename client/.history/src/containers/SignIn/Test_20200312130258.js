import React, { Component } from 'react'
class Message extends Component {

    state = {
        showPara: false
    }

    togglePara = () => {
        this.setState((prevState) => {
            return {
                showPara: !prevState.showPara
            }
        })
    }

    render() {
        return (<React.Fragment>
            <a onClick={this.togglePara} >Want to buy a new car?</a>
            {this.state.showPara ? <p>Call +11 22 33 44 now!</p> : null}
        </React.Fragment>);
    }
}

export default Message