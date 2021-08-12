import * as RJD from '../../../../lib/main';
import { PredefinedNodeWidgetFactory } from './PredefinedNodeWidget';

export class PredefinedNodeNodeWidgetFactory extends RJD.NodeWidgetFactory{
  constructor() {
    super('predefinednode');
  }

  generateReactWidget(diagramEngine, node) {
    return PredefinedNodeWidgetFactory({ node });
  }
}
