// @flow

import React from 'react';
import './App.css';

import IdeaContainer from './components/IdeasContainer';

class App extends React.Component<{}> {
    render() {
        return (
            <div className="App">
                <IdeaContainer />
            </div>
        );
    }
}

export default App;
