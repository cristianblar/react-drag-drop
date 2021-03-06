import React from 'react';
import * as RJD from '../../../../lib/main';
import { PredefinedNodeModel } from './PredefinedNodeModel';

export class PredefinedNodeWidget extends React.Component {
  static defaultProps = {
    node: null,
    color: 'rgb(32, 32, 32)'
  };

  onRemove() {
    const { node, diagramEngine } = this.props;
    node.remove();
    diagramEngine.forceUpdate();
  }

  getInPort() {
    const { node, color, displayOnly } = this.props;
    let inputNode = node;

    if (displayOnly) {
      inputNode = new PredefinedNodeModel(node.name, color);
    }

    return inputNode.getInPort ? <RJD.DefaultPortLabel model={inputNode.getInPort()} key='in-port' /> : null;
  }

  getOutPort() {
    const { node, color, displayOnly } = this.props;
    let outputNode = node;

    if (displayOnly) {
      outputNode = new PredefinedNodeModel(node.name, color);
    }

    return outputNode.getOutPort ? <RJD.DefaultPortLabel model={outputNode.getOutPort()} key='out-port' /> : null;
  }

  render() {
    // displayOnly, title, image & imageAlt are for NodesPanel only
    const {
      node,
      displayOnly,
      color: displayColor,
      title,
      image,
      imageAlt,
    } = this.props;
    const { color, content } = node;
    const style = {};
    if (color || displayColor) {
      style.background = color || displayColor;
    }

    return (
      <div className="basic-node" style={style}>
        <div className="ports">
          {!displayOnly && <div className="in">{this.getInPort()}</div>}
          <img
            src={image ? image : content.image.src}
            alt={imageAlt ? imageAlt : content.image.alt}
          />
          {!displayOnly && <div className="out">{this.getOutPort()}</div>}
        </div>
        <div className="title">
          <div className="name">{title ? title : content.title}</div>
          {!displayOnly ? (
            <div className="fa fa-close" onClick={this.onRemove.bind(this)} />
          ) : null}
        </div>
      </div>
    );
  }
}

export const PredefinedNodeWidgetFactory = React.createFactory(PredefinedNodeWidget);
