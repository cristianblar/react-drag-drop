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
                        <Node type='rds' />
                        <Node type='ec2' />
                        <Node type='elb' />
                        <Node type='text' />
                    </div>
                </div>
            </div>
        );
    }
}

export default NodesPanel;