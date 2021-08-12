import React from 'react';
import DragWrapper from './DragWrapper';
import { PredefinedNodeWidget } from '../nodes/predefinednode/PredefinedNodeWidget';

class Node extends React.Component {
    renderNode() {
        const { type } = this.props;

        if (type === 'rds') {
            return (
                <PredefinedNodeWidget
                node={{ name: 'RDS node' }}
                displayOnly
                title="RDS"
                image="https://res.cloudinary.com/cristianblar/image/upload/v1628777084/Treble/RDS_dlhh90.png"
                imageAlt="RDS Logo"
                />
            );
        }

        if (type === 'ec2') {
            return (
                <PredefinedNodeWidget
                node={{ name: 'EC2 node' }}
                displayOnly
                title="EC2"
                image="https://res.cloudinary.com/cristianblar/image/upload/v1628777084/Treble/EC2_khal3y.png"
                imageAlt="EC2 Logo"
                />
            );
        }

        if (type === 'elb') {
            return (
                <PredefinedNodeWidget
                node={{ name: 'ELB node' }}
                displayOnly
                title="Elastic Load Balancing"
                image="https://res.cloudinary.com/cristianblar/image/upload/v1628777084/Treble/ELB_zleeyw.png"
                imageAlt="ELB Logo"
                />
            );
        }
        
        console.warn('Unknown node type');

        return null;
    }

    render() {
        const { type, color } = this.props;

        return (
            <DragWrapper type={type} color={color} style={{ display: 'inline-block' }}>
                {this.renderNode()}
            </DragWrapper>
        );
    }
}

export default Node;