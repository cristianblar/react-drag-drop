import React from 'react';
import * as RJD from '../../../../lib/main';
import { TextNodeModel } from './TextNodeModel';

export class TextNodeWidget extends React.Component {
  static defaultProps = {
    node: null,
  };

  // Local state for widget text
  state = {
    text: this.props.node.textContent
  };

  onTextChange(ev) {
    const { node, diagramEngine } = this.props;
    this.setState({ text: ev.target.value }, () => {
      node.updateText(this.state.text);
      diagramEngine.forceUpdate();
    });
  }

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
      <div className="basic-node text">
        <div className="ports">
          {!displayOnly && <div className="in">{this.getInPort()}</div>}
          {
            displayOnly ? (
              <h2 className="text-title">{title}</h2>
            ) : (
              <textarea
                spellCheck="false"
                data-gramm_editor="false"
                data-lt="false"
                rows={2}
                value={this.state.text}
                onFocus={ev => ev.target.select()}
                onChange={this.onTextChange.bind(this)}
              ></textarea>
            )
          }
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
