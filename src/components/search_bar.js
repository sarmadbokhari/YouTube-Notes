import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value) } />

        <div className="nav-menu">
          <ul>
            <li><a href="/notes">My notes</a></li>
            <li>Login</li>
            <li>Sign up</li>
          </ul>
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
