import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends React.Component {
    state = { lat: null, errorMessage: '' }

    constructor(props) {
        super(props)

        //Is better to do the data innitialization in the componentDidMount
        //method in the lifecycle
        //this.state = { lat: null, errorMessage : '' };
    }

    componentDidMount() {
        //this.state = { lat: null, errorMessage : '' };
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (error) => this.setState({ errorMessage: error.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="Please accept the location request" />
    }

    render() {
        return (
            <div className=".border-red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
