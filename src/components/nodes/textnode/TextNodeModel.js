import _ from 'lodash';
import * as RJD from '../../../../lib/main';

export class TextNodeModel extends RJD.NodeModel {
  constructor(name = 'Untitled', textContent = 'Some text') {
    super('textnode');
    this.addPort(new RJD.DefaultPortModel(false, 'output', 'Out'));
    this.addPort(new RJD.DefaultPortModel(true, 'input', 'In'));
    this.name = name;
    this.textContent = textContent;
  }

  deSerialize(object) {
    super.deSerialize(object);
    this.name = object.name;
    this.textContent = object.textContent;
  }

  serialize() {
    return _.merge(super.serialize(), {
      name: this.name,
      textContent: this.textContent
    });
  }

  getInPort() {
    return this.ports.input;
  }

  getOutPort() {
    return this.ports.output;
  }
}
