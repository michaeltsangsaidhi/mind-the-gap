import React, { Component } from "react";
import "./App.css";
import play from './icons/play'
import speaker from './icons/speaker'
import pause from './icons/pause'
import mute from './icons/mute'
import ReactPlayer from 'react-player'

class VideosPage extends Component {
    constructor(props) {
        super(props);
        this.state = { playVideos: false, 
                       muted: false, 
                       playedOnce: false,
                       videoEnlarged1: false, 
                       videoEnlarged2: false,
                       videoEnlarged3: false,
                       videoEnlarged4: false,
                       videoEnlarged5: false, 
                       videoEnlarged6: false,
                       videoEnlarged7: false,
                       videoEnlarged8: false,
                       videoEnlarged9: false, 
                       videoEnlarged10: false,
                       videoEnlarged11: false,
                       videoEnlarged12: false,
                       videoReady1: false,
                       videoReady2: false,
                       videoReady3: false,
                       videoReady4: false,
                       videoReady5: false,
                       videoReady6: false,
                       videoReady7: false,
                       videoReady8: false,
                       videoReady9: false,
                       videoReady10: false,
                       videoReady11: false,
                       videoReady12: false };
    
        this.startPlaying = this.startPlaying.bind(this);
        this.stopPlaying = this.stopPlaying.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.increaseVideo = this.increaseVideo.bind(this);
        this.setAsReady = this.setAsReady.bind(this);
      }

      componentWillReceiveProps() {
        const { currentPage } = this.props;
         if (currentPage === "Videos") {
            this.stopPlaying();
         }
        }

      setAsReady = readyNumber => videoReadyNumber => {
        const readyLiteral = `videoReady${readyNumber}`;

        this.setState({
            [readyLiteral]: true,
        });
      }
    
      startPlaying() {
        this.setState(() => ({
            playVideos: true,
            playedOnce: true,
        }));
      }

      stopPlaying() {
        this.setState(() => ({
            playVideos: false,
        }));
      }

      changeVolume() {
        this.setState(prevState => ({
            muted: !prevState.muted,
        }));
      }

      increaseVideo = temp => videoNumber => {
        const literal = `videoEnlarged${temp}`;
        const newState = !this.state[literal];

        if (temp === 1 || temp === 2 || temp === 5 || temp === 6) {
            this.setState({
                [literal]: newState,
                videoEnlarged9: false, 
                videoEnlarged10: false,
            });
        }
        else if (temp === 3 || temp === 4 || temp === 7 || temp === 8) {
            this.setState({
                [literal]: newState,
                videoEnlarge11: false, 
                videoEnlarged12: false,
            });
        }
        else if (temp === 9 || temp === 10) {
            this.setState({
                [literal]: newState,
                videoEnlarged1: false, 
                videoEnlarged2: false,
                videoEnlarged5: false, 
                videoEnlarged6: false,
            });
        }
        else {
            this.setState({
                [literal]: newState,
                videoEnlarged3: false, 
                videoEnlarged4: false,
                videoEnlarged7: false, 
                videoEnlarged8: false,
            });
        }
        
      }

      ref = player => {
        this.player = player
      }
    
    render() {
        const { playVideos, muted, videoEnlarged1, playedOnce, 
            videoReady1, videoReady2, videoReady3, videoReady4, videoReady5, videoReady6,
            videoReady7, videoReady8, videoReady9, videoReady10, videoReady11, videoReady12 } = this.state;
        let readyToPlayAll = false;
        if (videoReady1 & videoReady2 & videoReady3 & videoReady4 & videoReady5 & videoReady6 &
            videoReady7 & videoReady8 & videoReady9 & videoReady10 & videoReady11 & videoReady12) {
            readyToPlayAll = true;
        }

        let videoSrc = ["https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/1.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/2.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/3.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/4.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/5.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/6.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/7.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/8.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/9.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/10.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/11.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/export+1_3.mp4"];
        
        let displayVideos = [];
        let numberOfVideo = -1;
        for (let i = 0; i < 12; i++) {
            numberOfVideo++;
            let currentEnlarged = `videoEnlarged${i+1}`;
            if(i === 0) {
                displayVideos.push(<>
                   <div onClick={this.increaseVideo(i+1)} className="videoPlayer" id={videoEnlarged1 ? "firstitemBig" : "firstitemSmall"}>
                        <ReactPlayer url={videoSrc[numberOfVideo]} 
                        ref={this.ref}
                                     playing={playVideos} 
                                     controls={false} 
                                     width="100%" 
                                     height="100%" 
                                     loop={true} 
                                     volume={0} 
                                     config={{ file: { attributes: { playsInline: true }} }}
                                     onReady={this.setAsReady(i+1)} />
                    </div>
                   {videoEnlarged1 && <div className="videoPlayer"></div>}
                </>);
            }
            else if(i === 1 || i === 4 || i === 5) {
                displayVideos.push(<>
                   <div onClick={this.increaseVideo(i+1)} className="videoPlayer" id={this.state[currentEnlarged] ? "firstitemBig" : "firstitemSmall"}>
                        <ReactPlayer url={videoSrc[numberOfVideo]} 
                                     playing={playVideos} 
                                     controls={false} 
                                     width="100%" 
                                     height="100%" 
                                     loop={true} 
                                     volume={0}
                                     onReady={this.setAsReady(i+1)}
                                     config={{ file: { attributes: { playsInline: true }} }} />
                    </div>
                   {this.state[currentEnlarged] && <div className="videoPlayer"></div>}
                </>);
            }
            else if(i === 2 || i === 3 || i === 6 || i === 7) {
                displayVideos.push(<>
                   <div onClick={this.increaseVideo(i+1)} className="videoPlayer" id={this.state[currentEnlarged] ? "seconditemBig" : "firstitemSmall"}>
                        <ReactPlayer url={videoSrc[numberOfVideo]} 
                                     playing={playVideos} 
                                     controls={false} 
                                     width="100%" 
                                     height="100%" 
                                     loop={true} 
                                     volume={0}
                                     onReady={this.setAsReady(i+1)}
                                     config={{ file: { attributes: { playsInline: true }} }} />
                    </div>
                   {this.state[currentEnlarged] && <div className="videoPlayer"></div>}
                </>);
            }
            else if(i === 8 || i === 9) {
                displayVideos.push(<>
                   <div onClick={this.increaseVideo(i+1)} className="videoPlayer" id={this.state[currentEnlarged] ? "thirditemBig" : "firstitemSmall"}>
                        <ReactPlayer url={videoSrc[numberOfVideo]} playing={playVideos} controls={false} width="100%" height="100%" loop={true} volume={0} onReady={this.setAsReady(i+1)} config={{ file: { attributes: { playsInline: true }} }} />
                    </div>
                   {this.state[currentEnlarged] && <div className="videoPlayer"></div>}
                </>);
            }
            else  {
                displayVideos.push(<>
                    <div onClick={this.increaseVideo(i+1)} className="videoPlayer" id={this.state[currentEnlarged] ? "fourthitemBig" : "firstitemSmall"}>
                         <ReactPlayer url={videoSrc[numberOfVideo]} playing={playVideos} controls={false} volume={muted ? 0 : 0.6} width="100%" height="100%" loop={true} onReady={this.setAsReady(i+1)} config={{ file: { attributes: { playsInline: true }} }} />
                     </div>
                    {this.state[currentEnlarged] && <div className="videoPlayer"></div>}
                 </>);
            }
          }
        
        return (<div className="videosBackground">
                    {!readyToPlayAll && <div className="loadingContainer"><img src={require("./images/loading.gif")} alt="Loading" className="loadingGif" /><br /><p className="loadingText">LOADING</p></div>}
                    <div className={readyToPlayAll ? "videosShow" : "videosHide"}>
                        <div className="VideosContainer">
                            {displayVideos}
                        </div>
                        <p className="enlargeParagraph">Click to enlarge a video</p>
                        {!playVideos && readyToPlayAll && <>{!playedOnce && <p className="rotateDevice">Rotate the device for best experience</p>}<div className="playIcon" onClick={this.startPlaying}>{play.icon}</div></> }
                        {playVideos && <><span className="pauseIcon" onClick={this.stopPlaying}>{pause.icon}</span>
                        {muted && <span className="speakerIcon" onClick={this.changeVolume}>{speaker.icon}</span>}
                        {!muted && <span className="speakerIcon" onClick={this.changeVolume}>{mute.icon}</span>}</> }
                    </div>
                </div>)
    }
}

export default VideosPage;
