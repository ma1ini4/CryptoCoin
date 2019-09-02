import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

class ScrollToTop extends React.Component<RouteComponentProps> {
  componentDidUpdate(prevProps: RouteComponentProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop) as React.ComponentClass<{}>;
