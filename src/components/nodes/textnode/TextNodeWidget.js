import React from 'react';
import * as RJD from '../../../../lib/main';
import { TextNodeModel } from './TextNodeModel';

export class TextNodeWidget extends React.Component {
  static defaultProps = {
    node: null,
  };

  onRemove() {
    const { node, diagramEngine } = this.props;
    node.remove();
    diagramEngine.forceUpdate();
  }

  getInPort() {
    const { node, displayOnly } = this.props;
    let inputNode = node;

    if (displayOnly) {
      inputNode = new TextNodeModel(node.name);
    }

    return inputNode.getInPort ? <RJD.DefaultPortLabel model={inputNode.getInPort()} key='in-port' /> : null;
  }

  getOutPort() {
    const { node, displayOnly } = this.props;
    let outputNode = node;

    if (displayOnly) {
      outputNode = new TextNodeModel(node.name);
    }

    return outputNode.getOutPort ? <RJD.DefaultPortLabel model={outputNode.getOutPort()} key='out-port' /> : null;
  }

  render() {
    // displayOnly & title are for NodesPanel only
    const { node, displayOnly, title } = this.props;
    const { textContent } = node;

    return (
      <div className="basic-node">
        <div className="ports">
          {!displayOnly && <div className="in">{this.getInPort()}</div>}
          {displayOnly ? <h2>{title}</h2> : <p>Future input!</p>}
          {!displayOnly && <div className="out">{this.getOutPort()}</div>}
        </div>
        <div className="title">
          {!displayOnly ? (
            <div className="fa fa-close" onClick={this.onRemove.bind(this)} />
          ) : null}
        </div>
      </div>
    );
  }
}

export const TextNodeWidgetFactory = React.createFactory(TextNodeWidget);