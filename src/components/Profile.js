import React from 'react';

const imageStyles = {
    border: '3px solid black',
    borderRadius: '50%',
    width: '250px'
}

const Profile = (props) => (
    <div className="user-wrapper">
        <div className="image-wrapper">
        { props.profile.avatar_url &&  
            <React.Fragment>
                <h2>{props.profile.name}</h2>
                <img src={props.profile.avatar_url} alt={props.profile.name} style={imageStyles}/>
                <p>{props.profile.location}</p>
                <p>{props.profile.bio}</p>
                <p>Followers: {props.profile.followers}<span> || </span>Following: {props.profile.following}</p>
                <button><a href={props.profile.html_url} target="_blank" rel="noopener noreferrer">View Github Profile</a></button>
            </React.Fragment>
        }
        </div>
    </div>
);

export default Profile;