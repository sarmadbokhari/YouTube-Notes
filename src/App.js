import _ from 'lodash';
import React from 'react';
import firebase from 'firebase';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCEJL_slchux4OqH_rjCuCzZA9OPwETNEM';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      fbItems: []
    };

    this.videoSearch('ertugrul episode 1 english subtitles');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  componentDidMount() {
    this.props.firebaseRef.ref('notes').on('value', function(dataSnapshot) {
      this.setState({
        fbItems: dataSnapshot.val()
      });
    }.bind(this));
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    if (!this.state.fbItems) {
      return <div>Loading...</div>;
    }

    console.log(this.state.fbItems);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ video => this.setState({ selectedVideo: video }) }
          videos={this.state.videos} />
      </div>
    );
  }
}
