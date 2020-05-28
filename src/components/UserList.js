import React from "react";
import useResources from "./useResources";

const UserList = () => {
    const users = useResources('users')

    return (
        <div className="ui relaxed divided list">
            {users.map(user => (
                <div key={user.id} className="item">
                    <i className="large medapps top aligned yellow icon"/>
                    <div className="content">
                        <div className="ui small yellow header">{user.name}</div>
                        <div className="description">{user.email}</div>
                        <div className="description">{user.phone}</div>
                        <a target="_blank" rel="norel noopener" href={user.website} className="description">{user.website}</a>
                    </div>
                </div>))
            }
        </div>
    )
}

export default UserList
