import React from "react";

class LifeCycleMethods extends React.Component {
    constructor(props) {
        console.log("Constructor running");
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleInc = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    componentDidMount() {
        console.log("Mounted");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Updated");
    }

    componentWillUnmount() {
        console.log("Unmounted");
    }

    render() {
        return (
            <div className="container text-center">
                <h1 className="text-danger">LIFECYCLE METHODS</h1>
                <h3>COUNT={this.state.count}</h3>
                <button className="btn btn-info" onClick={this.handleInc}>
                    INC
                </button>
            </div>
        );
    }
}
export default LifeCycleMethods;