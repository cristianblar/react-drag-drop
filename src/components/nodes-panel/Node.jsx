import React from 'react';
import DragWrapper from './DragWrapper';
import { ImageNodeWidget } from '../nodes/imagenode/ImageNodeWidget';

class Node extends React.Component {
    renderNode() {
        const { type, color } = this.props;

        if (type === 'rds') {
            return (
                <ImageNodeWidget
                node={{ name: 'RDS node' }}
                color={color}
                displayOnly
                title="RDS"
                image="https://res.cloudinary.com/cristianblar/image/upload/v1628777084/Treble/RDS_dlhh90.png"
                imageAlt="RDS Logo"
                />
            );
        }

        if (type === 'ec2') {
            return (
                <ImageNodeWidget
                node={{ name: 'EC2 node' }}
                color={color}
                displayOnly
                title="EC2"
                image="https://res.cloudinary.com/cristianblar/image/upload/v1628777084/Treble/EC2_khal3y.png"
                imageAlt="EC2 Logo"
                />
            );
        }

        if (type === 'elb') {
            return (
                <ImageNodeWidget
                node={{ name: 'ELB node' }}
                color={color}
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