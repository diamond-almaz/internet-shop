import React from 'react';
import { render } from 'react-dom';

import { getDealers } from './api';
import { IDealer } from './types';
import { Main } from './Main';
import { store } from './redux';
import { Provider } from 'react-redux';

const start = (dealers: IDealer[]) => {
  render(
    <Provider store={store}>
      <Main dealers={dealers} />
    </Provider>,
    document.getElementById('app')
  );
};

document.addEventListener('DOMContentLoaded', async () => {
  const dealers = await getDealers();
  start(dealers);
});
