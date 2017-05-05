import React from 'react';

const Talk = ({talk, user, key}) => {
    return (
        <div key={key} class="talk mbs">
            <p class="pam">
                {talk.text}
            </p>
            <p class="plm prm fr">
                <small>{user.username}, {talk.updatedAt.toLocaleString()}</small>
            </p>
            <div class="clearfix"></div>
        </div>

    )
};

export default Talk;