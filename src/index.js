import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/nav/Navbar';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
