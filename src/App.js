import React from "react";
import { Switch, Route } from "react-router-dom";
import Modal from "./Modal/Modal";
import Home from "./Home";
import Gallery from "./Gallery";
import ImageView from "./ImageView";


class App extends React.Component {
    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
        let { location } = this.props;

        // set previousLocation if props.location is not modal
        if (
            nextProps.history.action !== "POP" &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location;
        }
    }

    render() {
        let { location } = this.props;

        let isModal = (
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        ); // not initial render

        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/img/:id" component={ImageView} />
                </Switch>
                {isModal ? <Route path="/img/:id" component={Modal} /> : null}
            </div>
        );
    }
}

export default App;