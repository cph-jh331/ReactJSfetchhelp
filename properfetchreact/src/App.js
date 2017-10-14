import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super();
    this.state = { joke: "aa" }
    //this.jokeUpdater2 = this.jokeUpdater2.bind(this);
  }
  
  componentDidMount() {
    const facade = this.props.facade;

    //callbacks:
    //facade.getJokeViaCallback(this.jokeUpdater);
    //facade.getJokeWithCallback(this.jokeUpdater2);
    //observer pattern:
    facade.setObserver(this.jokeUpdater);
    facade.getJokeAndNotify();
  //  facade.getJokeContiniuesly(2000);
  }
  

  //ES7:
  /*
  async componentDidMount() {
    const facade = this.props.facade;
    const joke = await facade.fetchAsync();
    this.setState({ joke });
  }
  */


  componentWillUnmount() {
    this.props.facade.stopIntervalFetching();
  }
  //arrow function here is used to avoid using bind in the constructor.
  jokeUpdater = data => {
    //each time set state is called it re-renders the virtual dom, 
    //which then looks for changes in the DOM and updates only the
    //node that changed.
    this.setState({ joke: data });
  }

  /*
  jokeUpdater2(data){
    this.setState({joke: data});
  }
  */

  render() {
    return (
      <div className="App">
        {this.state.joke}
      </div>
    );
  }
}


export default App;
