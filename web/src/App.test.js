import React from 'react';
import App from './App';
import {shallow} from "enzyme";


describe('App', () => {
    beforeEach(() => {
        global.fetch.mockResponse(JSON.stringify({content: "from da server"}), {status: 200});
    });

    it('renders the content from the backend', (done) => {
        const wrapper = shallow(<App/>);

        expect(wrapper).toHaveText('loading...');

        setImmediate(() => {
            expect(wrapper).toHaveText('from da server');
            done();
        });
    });
});
