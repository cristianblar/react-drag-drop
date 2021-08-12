import React from 'react';
import Node from './Node';

class NodesPanel extends React.Component {
    render() {
        return (
            <div className="panel-wrapper">
                <div className="nodes-panel">
                    <h2>Nodes</h2>
                    <div className='title-separator' />
                    <div className='node-wrapper'>
                        <Node type='rds' color='rgb(238, 238, 238)'/>
                        <Node type='ec2' color='rgb(238, 238, 238)'/>
                        <Node type='elb' color='rgb(238, 238, 238)'/>
                    </div>
                    {/* Other nodes */}
                </div>
            </div>
        );
    }
}

export default NodesPanel;