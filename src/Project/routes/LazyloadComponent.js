import React from "react";
import Loader from "../shared/Loader/Loader";

export default class LazyloadComponent extends React.PureComponent {
  state = {
    renderComponent: null
  };

  componentDidMount() {
    this.props.component.then(response => {
      this.setState({
        renderComponent: response.default
      });
    });
  }

  render() {
    if (this.state.renderComponent) {
      return <this.state.renderComponent {...this.props} />;
    }
    return <Loader />;
  }
}
