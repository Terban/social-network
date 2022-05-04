import {render, screen} from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

test('renders learn react link', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );
    const App = screen.getByText(/learn react/i);
    expect(App).toBeInTheDocument();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});
