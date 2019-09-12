import React from 'react'
import '../App.css'
import { Waypoint } from 'react-waypoint'
import {TweenMax, Linear} from 'gsap'

const styles = {
  video : {
    height: '100vh',
    overflow: 'hidden',
    margin: '0'
  },
  projectContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '10px',
    margin: '100px auto',
    width: '80%',
    placeItems: 'center'
  },
  box: {
    display: 'grid',
    placeItems: 'end center',
    backgroundColor: 'white',
    borderRadius: '15px',
    height: '300px',
    width: '80%',
  },
  button: {
    backgroundColor: 'none',
    border: '1px solid black',
    padding: '10px',
    borderRadius: '10px',
    width: '50%',
  }
}

class Home extends React.Component{

  state = {
    slideIn: false,
    slideInRight: false,
  }

  componentDidMount() {
    TweenMax.set('#scaleThis', {transformOrigin: '50% 50%'});

  }

  slideIn = (e) => {
    if (this.state.slideIn) {
      this.setState({slideIn: false})
    } else {
      this.setState({slideIn: true})
    }
  }

  slideInRight = (e) => {
    if (this.state.slideInRight) {
      this.setState({slideInRight: false})
    } else {
      this.setState({slideInRight: true})
    }
  }




  render() {
      console.log(this.state)
  return (
          <div id="home">
            <div style={styles.video}>
              <iframe style={{ position: 'relative', bottom: '130px', width: "100vw", height: '820px'}} title="intro" src="https://player.vimeo.com/video/304726861?autoplay=1&loop=1&autopause=0" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </div>
{// Website Portfolio *****************************************************
}            <div id="websitePortfolio" className="slideIn" >
              <Waypoint
                onEnter={this.slideIn}
                onLeave={this.slideIn}
                bottomOffset='20%'
              />
              <div className={this.state.slideIn ? "showName": "hideName"}>
                <h1>Web Projects</h1>
                <div style={styles.projectContainer}>
                  <div style={styles.box}>
                    <button  style={styles.button} >Details</button>
                  </div>
                  <div style={styles.box}>
                    <button style={styles.button} >Details</button>
                  </div>
                  <div style={styles.box}>
                    <button style={styles.button} >Details</button>
                  </div>
                </div>
              </div>
            </div>
{// Videography *****************************************************
}            <div id="videoPortfolio" className="slideIn" >
              <Waypoint
                onEnter={this.slideInRight}
                onLeave={this.slideInRight}
                bottomOffset='20%'
              />
              <div className={this.state.slideInRight ? "showVideos": "hideName"}>
                <h1>Video Projects</h1>
                <div style={styles.projectContainer}>
                  <div style={styles.box}>
                    <button  style={styles.button} >Details</button>
                  </div>
                  <div style={styles.box}>
                    <button style={styles.button} >Details</button>
                  </div>
                  <div style={styles.box}>
                    <button style={styles.button} >Details</button>
                  </div>
                </div>
              </div>
            </div>
{// PhotoGraphy *****************************************************
}            <div id="photoPortfolio" className="photoPortfolio">
              <h1>PhotoGraphy</h1>
            </div>
          </div>
        )
  }

}

export default Home
