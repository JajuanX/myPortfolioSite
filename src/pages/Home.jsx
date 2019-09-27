import React from 'react'
import '../App.css'
import { Waypoint } from 'react-waypoint'
import WynHero from '../Wynhero.png'
import axios from 'axios'

const styles = {
  video : {
    height: '100vh',
    overflow: 'hidden',
    margin: '0'
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
    moreDetails:false,
    name: "",
    _replyto: "",
  }

  componentDidMount() {

  }

  slideIn = (e) => {
    this.setState({slideIn: true})
  }

  slideInRight = (e) => {
    this.setState({slideInRight: true})
  }

  moreDetails = () => {
    if (this.state.moreDetails) {
      this.setState({moreDetails: false})
    } else {
      this.setState({moreDetails: true})
    }
  }

  handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}
handleForm = e => {
    axios.post(
      "https://formspree.io/jajuan.burton@live.com",
      this.state,
      {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  }






  render() {
      console.log(this.state)
  return (
          <div id="home">
            <div style={styles.video}>
              <div className="Header">
                <div className="JajuanX">
                  The Jajuan X Portfolio Site <br></br>
                  <span id="jobTitle">
                    Full Stack Software Developer - Digital Content Creator
                  </span>
                </div>
                <div className="contact">
                  <button>Contact</button><button><a href="https://medium.com/@jajuanburton/why-i-became-a-full-stack-web-developer-rookie-season-5945d512c1df">My Story</a></button>
                </div>
              </div>
          </div>
            <iframe className="myVideo" title="Juan X Intro video" src="https://player.vimeo.com/video/304726861?autoplay=1&loop=1&autopause=0&muted=1 " frameBorder="0" allow="autoplay; fullscreen" allowFullScreen>
            </iframe>
          {// Skills *****************************************************
          }
          <div className="Skills" id="skillTitle">
            <div className="skillTitle Box">
              <h1>Skills</h1>
            </div>
            <div className="Languages Box">
              <h1>Languages</h1>
              <h3>Html5 CSS3</h3>
              <h3>JavaScript(es6)</h3>
              <h3>Ruby</h3>
            </div>
            <div className="Libraries Box">
              <h1>Libraries</h1>
              <h3>Express</h3>
              <h3>React</h3>
              <h3>Node</h3>
              <h3>Rails</h3>
              <h3>Yarn</h3>
            </div>
            <div className="Platforms Box">
              <h1>Platforms</h1>
              <h3>MAC</h3>
              <h3>AWS</h3>
              <h3>Heroku</h3>
              <h3>Github</h3>
            </div>
            <div className="Software Box">
              <h1>Software</h1>
              <h3>MongoDB</h3>
              <h3>Atom</h3>
              <h3>Postman</h3>
              <h3>PostgresGL</h3>
              <h3>Vs Code</h3>
            </div>
            <div className="Familiar Box">
              <h1>Familiar</h1>
              <h3>AWS</h3>
              <h3>Sinatra</h3>
              <h3>Firebase</h3>
            </div>
            <div className="Additional Box">
              <h1>Additional Skills</h1>
              <div>
                <h3>PhotoShop</h3>
                <h3>InDesign</h3>
                <h3>After Effects</h3>
                <h3>Adobe Illustrator</h3>
              </div>
              <div>
                <h3>Graphics Design</h3>
                <h3>Motion Design</h3>
                <h3>Premiere Pro</h3>
                <h3>SVG Creation</h3>
              </div>
            </div>
          </div>
{// Website Portfolio *****************************************************
}           <div id="websitePortfolio" className="slideIn" >
              <Waypoint
                onEnter={this.slideIn}
                bottomOffset='20%'
              />
              <div className={this.state.slideIn ? "showName": "hideName"}>
                <h1>Web Projects</h1>
                <div className="webProjectContainer">
                  <div className="websiteBox">
                    <img src={WynHero} />
                    <button onClick={this.moreDetails}  id="wynhero" style={styles.button}>
                      Details
                    </button>
                  </div>
                  <div>
                    <button style={styles.button} >Details</button>
                  </div>
                  <div >
                    <button style={styles.button} >Details</button>
                  </div>
                </div>
              </div>
            </div>
{// Videography *****************************************************
}           <div id="videoPortfolio" className="slideIn" >
              <Waypoint
                onEnter={this.slideInRight}
                bottomOffset='20%'
              />
              <div className={this.state.slideInRight ? "showVideos": "hideName"}>
                <h1>Video Projects</h1>
                <div className="projectContainer">
                  <div className="VideoBox">
                    <iframe src="https://player.vimeo.com/video/362861819" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                  </div>
                  <div className="VideoBox">
                    <iframe src="https://player.vimeo.com/video/299934773"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                    </iframe>
                  </div>
                  <div className="VideoBox">
                    <iframe src="https://player.vimeo.com/video/289128192" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
{// PhotoGraphy *****************************************************
}           <div id="photoPortfolio" className="photoPortfolio">
              <h1>PhotoGraphy</h1>
            </div>


{            // details modal
  }


              <div className={this.state.moreDetails ? 'showModal' : 'hideModal'}>
                <div className="modalItem">
                  <h1 id="WynHero">WynHero</h1>
                  <div onClick={this.moreDetails} className="close">
                    <h5>close</h5>
                    <iframe title="Super Hero Site video" src="https://player.vimeo.com/video/359654309" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>

        )
  }

}

export default Home
