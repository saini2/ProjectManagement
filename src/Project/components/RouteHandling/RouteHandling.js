import React from "react";
import "url-search-params-polyfill";




export default class RouteHandling extends React.PureComponent {
  getSubPartOfDeeplink = () => {
    //It will return subpart of deeplink which will be needed for further proceedings
    const params = new URLSearchParams(window.location.search);
    const deeplinkUrl = params.get("page");

    return deeplinkUrl;
  };

  movetoLanding = () => {
    this.props.history.push("/taskmanager");
  };

  componentDidMount() {   
        return this.routeRedirector();
  }

  routeRedirector = () => {
        return this.movetoLanding();
  };
  render() {
    const { url } = this.props.match;

    return url === "/" ? <div>Heyy</div> : null;
  }
}
