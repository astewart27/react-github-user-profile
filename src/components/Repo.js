import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Repo extends Component {

    state = {
        activeRepo: [],
        repo: null
    }

    componentDidMount = async () => {
        const repo = this.props.location.state.repos;
        const user = this.props.location.state.reposOwner;
        const req = await fetch(`https://api.github.com/repos/${user}/${repo}/commits`);
        const res = await req.json();
        
        this.setState({ activeRepo: res, repo });
        console.log(this.state.activeRepo);
    }

    render() {
        const commits = this.state.activeRepo;
        return (
            <div>
                <div className="commits-header">
                    <h1>Viewing Commits for Repo: {this.state.repo}</h1>
                </div>
                { this.state.activeRepo.length > 0 && 
                    <div className="commits-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Committer</th>
                                    <th>Date</th>
                                    <th>Message</th>
                                    <th>URL/SHA ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                { commits.map((instance) => {
                                    return (
                                        <tr key={instance.sha}>
                                            <td>{instance.commit.committer.name}</td>
                                            <td>{instance.commit.committer.date}</td>
                                            <td>{instance.commit.message}</td>
                                            <td><a href={instance.commit.url} target="_blank" rel="noopener noreferrer">{instance.sha}</a></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                }
                <div className="commits-footer">
                    <button>
                        <Link to="/">View Other Repos</Link>
                    </button>
                </div>
            </div>
        )
    }
}
