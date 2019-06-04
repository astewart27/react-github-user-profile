import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Profile from './components/Profile';
import Repos from './components/Repos';

import './App.css';

class App extends Component {

  state = {
    profile : {},
    repos : []
  };

  componentDidMount = () => {
    const json = localStorage.getItem("profile");
    const reposJson = localStorage.getItem("repos");
    const profile = JSON.parse(json);
    const repos = JSON.parse(reposJson);
    this.setState({ profile, repos });
  }

  componentDidUpdate = () => {
    const profile = JSON.stringify(this.state.profile);
    const repos = JSON.stringify(this.state.repos);
    localStorage.setItem("profile", profile);
    localStorage.setItem("repos", repos);
  }

  getUserInfo = async (e) => {
    const username = e.target.elements.username.value;
    e.preventDefault();
    const request = await fetch(`https://api.github.com/users/${username}`);
    const data = await request.json();
    this.setState({profile : data});

    const repoRequest = await fetch(`https://api.github.com/users/${username}/repos`);
    const repoData = await repoRequest.json();
    this.setState({repos : repoData});
  }

  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header/>
          <Form getUserInfo={this.getUserInfo}/>
          <div className="user-profile-wrapper">
            <Profile profile={this.state.profile} />
            <Repos repos={this.state.repos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
