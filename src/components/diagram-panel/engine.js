import React from 'react';
import * as RJD from '../../../lib/main';
import { PredefinedNodeNodeWidgetFactory } from '../nodes/predefinednode/PredefinedNodeWidgetFactory';
import { PredefinedNodeFactory } from '../nodes/predefinednode/PredefinedNodeInstanceFactories';
import { TextNodeNodeWidgetFactory } from '../nodes/textnode/TextNodeWidgetFactory';
import { TextNodeFactory } from '../nodes/textnode/TextNodeInstanceFactories';

// Setup the diagram engine
export const engine = new RJD.DiagramEngine();
engine.registerNodeFactory(new RJD.DefaultNodeFactory());
engine.registerLinkFactory(new RJD.DefaultLinkFactory());

engine.registerNodeFactory(new PredefinedNodeNodeWidgetFactory());
// New TextNode Widget Factory
engine.registerNodeFactory(new TextNodeNodeWidgetFactory());

// We need this to help the system know what models to create form the JSON
engine.registerInstanceFactory(new RJD.DefaultNodeInstanceFactory());
engine.registerInstanceFactory(new RJD.DefaultPortInstanceFactory());
engine.registerInstanceFactory(new RJD.LinkInstanceFactory());

engine.registerInstanceFactory(new PredefinedNodeFactory());
// New TextNode Factory
engine.registerInstanceFactory(new TextNodeFactory());
