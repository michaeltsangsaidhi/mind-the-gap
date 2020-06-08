import React, { Component } from "react";
import "./App.css";
import mindTheGapLogo from "./icons/logo";
import ContentPage from "./ContentPage";
import EssayPage from "./EssayPage";
import ReactPlayer from 'react-player'

class HomePage extends Component {
  videosRef = React.createRef();
  essaysRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      displayVideos: false,
      displayEssays: false,
      displayIndexPage: true,
      currentPageDisplayed: "Index",
    };

    this.showVideos = this.showVideos.bind(this);
    this.hideVideo = this.hideVideo.bind(this);
    this.showEssays = this.showEssays.bind(this);
    this.hideEssay = this.hideEssay.bind(this);
    this.pickButtonStyles = this.pickButtonStyles.bind(this);
  }

  showVideos() {
    const isCurrentPageVideos = this.state.currentPageDisplayed === "Videos";

    if (!isCurrentPageVideos) {
      if (this.essaysRef.current) {
        this.essaysRef.current.style.zIndex = -1;
      }

      if(this.state.currentPageDisplayed !== 'Index'){
        this.setState(() => ({ displayIndexPage: false}))
      }

      if (this.videosRef.current) {
        this.videosRef.current.style.zIndex = 1;
        this.videosRef.current.classList = [];
        setTimeout(() => {
          this.videosRef.current.classList.add("slideUp");
          this.setState((prevState) => ({
            ...prevState,
            displayVideos: true,
            currentPageDisplayed: "Videos",

          }));
        }, 10);
      }
    }
  }

  hideVideo() {
    this.setState((prevState) => ({
      ...prevState,
      displayVideos: false,
      displayEssays: false,
      displayIndexPage: true,
      currentPageDisplayed: "Index",
    }));
  }

  hideEssay() {
    this.setState((prevState) => ({
      ...prevState,
      displayVideos: false,
      displayEssays: false,
      displayIndexPage: true,
      currentPageDisplayed: "Index",
    }));
  }


  showEssays() {
    const isCurrentPageEssays = this.state.currentPageDisplayed === "Essays";

    if (!isCurrentPageEssays) {
      if (this.videosRef.current) {
        this.videosRef.current.style.zIndex = -1;
      }

      if(this.state.currentPageDisplayed !== 'Index'){
        this.setState(() => ({ displayIndexPage: false}))
      }

      if (this.essaysRef.current) {
        this.essaysRef.current.style.zIndex = 1;
        this.essaysRef.current.classList = [];
        setTimeout(() => {
          this.essaysRef.current.classList.add("slideUp");
        }, 10);
      }

      this.setState((prevState) => ({
        ...prevState,
        displayEssays: true,
        currentPageDisplayed: "Essays",
       
      }));
    }
  }

  pickButtonStyles() {
    const currentPage = this.state.currentPageDisplayed;
    if (currentPage === "Index") {
      return "index-button indexPageButton";
    } else if (currentPage === "Videos") {
      return "index-button videosPageButton";
    } else if (currentPage === "Essays") {
      return "index-button essaysPageButton";
    }
    return "index-button";
  }

  render() {
    const { displayVideos, displayEssays, displayIndexPage, currentPageDisplayed } = this.state;

    return (
      <>
        
          <div className="HomePage" style={{zIndex: -6 }}>
            
           <div className="indexText" style={{zIndex: -4 }}>
           {displayIndexPage && (
            <> 
    
            <ReactPlayer className="indexBackground"
                            url="https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/index.mp4"
                                     playing
                                     controls={false} 
                                     width="100%" 
                                     height="100%" 
                                     loop={true} 
                                     volume={0} 
                                     muted
                                     config={{ file: { attributes: { playsInline: true }} }}
                                      />
              <div className="indexIcon" >{mindTheGapLogo.icon}</div>
              <div className="index-container">
                <h2 className="indexHeading">
                  Mind the Gap is an interactive video essay to rethink what our
                  commute means to us through looking back in time.
                </h2>
                <p className="homepageText">
                In a recent conversation between Ezra Klein, journalist and political commentator, and Jenny Odell, artist and writer, they talked about how working from home during COVID19 lockdown has made them feel the collapse of boundaries between work and home.
                  <br />
                  <br />
                  They are not alone.
                  <br />
                  <br />
                  From internet memes to blogs to newspaper columns, the collective experience of going through, as dubbed by Jenny Odell, “enforced prison of nothingness” has made us to discover and to pay attention to things that we have gotten used to, such as our daily commute.
                  <br />
                  <br />
                  Commuting in London, especially with public transportation, was often said to cast a negative influence on our well-being. However, when it is ripped from our lives, we start to realize there’s something that we miss - but what is it?
                </p>
                <p className="homepageText">
                Until about a decade ago, researchers Glenn Lyons and Kiron Chatterjee started looking into positive psychology in commuting on public transport. They suggested that it could provide an impermeable “protected space” away from the world and transition time for us to “shift gears”.
                  <br />
                  <br />
                  Through looking back in time, we can see that commuting has enabled us to experience crossing space physically to achieve the sense of distance and difference. The transition time created the temporal opportunity to translate, adjust or prepare ourselves for different social settings and social identity at the destination. 
                </p>
              </div></> ) }
            </div> 
            <div id="button-container" className={this.pickButtonStyles()}>
              <div id="video-button" onClick={this.showVideos}>
                VIDEO
              </div>
              <div id="essays-button" onClick={this.showEssays}>
                RESEARCH
              </div>
            </div>
          </div>
        
        <div
          id="hiddenVideos"
          ref={this.videosRef}
          className={displayVideos ? "slideUp" : ""}
        >
          <><div className="indexIconBlack" onClick={this.hideVideo}>
                {mindTheGapLogo.icon}
              </div><ContentPage currentPage={currentPageDisplayed} /></>
        </div>
        {displayEssays && (
          <div
            id="hiddenEssays"
            ref={this.essaysRef}
            className={displayEssays ? "slideUp" : ""}
          >
            <div className="indexIconBlack" onClick={this.hideEssay}>
                {mindTheGapLogo.icon}
              </div>
              <EssayPage currentPage={currentPageDisplayed} />
          </div>
        )}
      </>
    );
  }
}

export default HomePage;