import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-lightning-design-system';

import '../stylesheets/index.scss';

export const init = function(el, service) {
  render((
    <Button type="brand">foo</Button>
  ), el);
};
