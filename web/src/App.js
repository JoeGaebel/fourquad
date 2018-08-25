import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {content: 'loading...'};
    }

    componentWillMount() {
        fetch('/api/content').then((response) => {
          response.json().then(jsonBody => {
              this.setState({content: jsonBody.text});
            });
        });
    }

    render() {
        return (
            <div>{this.state.content}</div>
        );
    }
}

export default App;
