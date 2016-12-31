import _ from 'lodash';
import React from 'react';
import firebase from 'firebase';

import VideoListItem from '../components/video_list_item';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };

    var firebaseRef = firebase.database().ref('users').child('sbokhari').child('notes').on('value', (snap) => {
      this.setState({
        notes: snap.val()
      })
    })

    const noteItems = this.state.notes.val().map(function(note) {
      return (
        <VideoListItem
          key={note.videoId}
          video={note} />
      )
    })
  }

  render() {
    return (
      <ul className="col-md-6 list-group">
        note item
      </ul>
    )
  }
}
