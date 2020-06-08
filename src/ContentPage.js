import React, { Component } from "react";
import "./App.css";
import VideosPage from './VideosPage';

class ContentPage extends Component {
    
    render() {
      const { currentPage } = this.props;
        return (
          <div className="ContentPage">
            <div className="ContentSection">
              <VideosPage currentPage={currentPage} />
            </div>
          </div>
        )
    }
}

export default ContentPage;
