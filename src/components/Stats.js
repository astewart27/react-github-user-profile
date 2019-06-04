import React from 'react';

const Stats = (props) => (
    <div className="stats-wrapper">
        { props.profile && 
            <div>
                <h2>Stats</h2>
                <p>Personal Website: <a href={props.profile.blog} target="_blank" rel="noopener noreferrer">{props.profile.blog}</a></p>
                <p>Public Repos: {props.profile.public_repos}</p>
                <p>Public Gists: {props.profile.public_gists}</p>
                <p>Followers: {props.profile.followers}</p>
                <p>Following: {props.profile.following}</p>
            </div>
        }
    </div>
);

export default Stats;