import React, {useState} from 'react';
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
    const [resource, setResource] = useState('posts')
    return (
        <div className="ui container">
            <div className="ui segments">
                <div className="ui segment raised center aligned">

                    <div className="ui large buttons">
                        <button className="ui button primary"
                                onClick={() => setResource('posts')}>Posts
                        </button>
                        <div className="ui or" data-text="&#8646;"/>
                        <button className="ui positive button"
                                onClick={() => setResource('todos')}>TODOs
                        </button>
                    </div>

                </div>

                <div className="ui two column stackable divided grid container">
                    <div className="row">

                        <div className="column">
                            <div className="ui raised secondary teal segment">
                                <div className="ui teal ribbon label">{resource}</div>
                                <span className="ui header big teal">Titles:</span>
                            </div>
                            <div className="ui vertical segment">
                                <ResourceList resource={resource}/>
                            </div>
                        </div>

                        <div className="column">
                            <div className="ui raised secondary yellow segment">
                                <div className="ui yellow right ribbon label">Users</div>
                            </div>

                            <div className="ui vertical segment">
                                <UserList/>
                            </div>

                            <div className="ui loading vertical segment">
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}


export default App;
