import * as RJD from '../../../../lib/main';
import { PredefinedNodeModel } from './PredefinedNodeModel';

export class PredefinedNodeFactory extends RJD.AbstractInstanceFactory {
  constructor() {
    super('PredefinedNodeModel');
  }

  getInstance() {
    return new PredefinedNodeModel();
  }
}
