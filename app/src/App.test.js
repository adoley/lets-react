import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

Enzyme.configure({adapter: new Adapter()});
describe("testing App",()=> {
  let result;
        it('not null check ', ()=>{
          result=new App({a: 5, b:6});
          expect(result).not.toBe(null);
        });

        it('renders without crashing',()=>{
            const div = document.createElement('div');
            ReactDOM.render(<App a={5} b={6}/>, div);
            ReactDOM.unmountComponentAtNode(div);
        });

        it("Check html element",()=>{
            const response=shallow(<App a={5} b={6}/>);
            expect(response.find("h1").length).toBe(2);
        });

        it("Check value of a ",()=>{
            const response=shallow(<App a={5} b={6}/>);
            expect(response.contains(<h1>hello react </h1>)).toBe(true);
            expect(response.contains(<h1>5 + 6 = 11</h1>)).toBe(true);
        });
    }
);
