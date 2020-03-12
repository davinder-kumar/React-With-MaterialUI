class Message extends React.Component {
  
    state = {
      showPara : false
    }
    
    togglePara = () =>{
      this.setState((prevState) => {
        showPara : !prevState.showPara
      })  
    }
    
    render() {
      return (<React.Fragment>
            <a onClick={this.togglePara} >Want to buy a new car?</a>
          { this.state.showPara ? <p>Call +11 22 33 44 now!</p> : null  }
          </React.Fragment>);
    }
  }
  
  document.body.innerHTML = "<div id='root'> </div>";
    
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Message />, rootElement);