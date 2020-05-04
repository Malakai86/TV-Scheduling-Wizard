import React from 'react';

class ShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      shows: [],
      selectedShowName: ''
    }
  }

  componentDidMount() {
    const url = 'http://api.tvmaze.com/shows';

    fetch(url)
    .then(shows => this.setState({ shows: shows}))
    .catch(err => console.err);
  }

  render() {
    const selectedShow = this.state.shows.find(show => show.name === this.state.selectedShowName)
  }
}
export default ShowContainer;
