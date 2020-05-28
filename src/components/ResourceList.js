import React from "react";
import useResources from "./useResources";

const ResourceList = ({resource}) => {
    const resources = useResources(resource)
    return (
        <div className="ui relaxed divided list">
            {resources.map(record => (
                <div key={record.id} className="item">
                    <i className="terminal top aligned blue icon"/>
                    <div className="content">
                            <div className="ui big header">{record.title}</div>
                        <div className="description">{record.body || record.completed.toString()}</div>
                    </div>
                </div>))
            }
        </div>
    )
}

export default ResourceList