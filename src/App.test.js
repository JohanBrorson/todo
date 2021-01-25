import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './__mocks__/localstorage';

const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
describe("<App />", () => {

  afterAll(() => {
    consoleSpy.mockRestore();
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

});
