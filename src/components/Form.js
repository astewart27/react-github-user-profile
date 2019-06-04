import React from 'react';

const Form = (props) => (
    <div className="form-wrapper">
        <form onSubmit={props.getUserInfo}>
            <div className="input-wrapper">
                <input type="text" name="username" required/>
                <label>Username</label>
            </div>
            <button>Find</button>
        </form>
    </div>
);

export default Form; 