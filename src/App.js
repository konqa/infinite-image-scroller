import React, { Component } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import data from './data/watch';
import Images from './components/images';
import nextArrow from './images/next.svg';
import prevArrow from './images/previous.svg';

class App extends Component {

  state = {
    appearHome: true,
    currentWatchIndex: 0,
    currentWatch: data.watches[0],
    nextWatch: data.watches[1],
    previousWatch: data.watches[2]
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome
    })
  }

  // end of image set let's start again
  resetScroll = () => {
    // console.log('lets start again');
    this.setState({
      currentWatchIndex: 0,
      currentWatch: data.watches[0],
      nextWatch: data.watches[1],
      previousWatch: data.watches[2]
    })
  }

  // process next watch
  nextWatch = () => {
    let newWatch = this.state.currentWatchIndex + 1;
    // check if we've reached end of image set
    (this.state.currentWatchIndex === data.watches.length - 2) ? this.resetScroll() : 
    this.setState({
      currentWatchIndex: newWatch,
      currentWatch: data.watches[newWatch],
      nextWatch: data.watches[newWatch + 1],
      previousWatch: data.watches[newWatch - 1]
    })
  }

  // process previous watch
  prevWatch = () => {
    let newWatch = this.state.currentWatchIndex - 1;
    this.state.currentWatchIndex < 2 ? this.resetScroll() :
    this.setState({
      currentWatchIndex: newWatch,
      currentWatch: data.watches[newWatch],
      nextWatch: data.watches[newWatch + 1],
      previousWatch: data.watches[newWatch - 1]
    })
  }

  render() {
    const { appearHome, currentWatch, nextWatch, previousWatch } = this.state;

    return ( <CSSTransition
      in={appearHome}
      appear={true}
      timeout={1500}
      classNames="fade"
    >
      <div className="App">


          <div className="row">
            <div className="watchCloset col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="imgPrev">
                <Images watch={previousWatch} />
              </div>
              <div className="imgCurr">
                <Images watch={currentWatch} />
              </div>
              <div className="imgNext">
                <Images watch={nextWatch} />
              </div>
            </div>
          </div>
        
        <div className="row">
          <div className="scrollers col-lg-12 col-md-12 col-sm-12 col-xs-12">

            <button onClick={this.prevWatch} >
              <img src={prevArrow} alt="Previous" className="Arrow" />
            </button>

            <button onClick={this.nextWatch} >
              <img src={nextArrow} alt="Next" className="Arrow" />
            </button>

          </div>
        </div>

      </div>

      </CSSTransition>

    );
  }
}

export default App;
