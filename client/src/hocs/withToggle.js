import React, {Component} from 'react';

export const withToggle = WrappedComponent => {
    return class extends Component {
        state = {
            toggleStatus: false
        };

        constructor(props) {
            super(props);
            this.toggle = this.toggle.bind(this);

        }

        toggle() {
            this.setState({
                toggleStatus: !this.state.toggleStatus
            });
        }

        render() {
            return <WrappedComponent {...this.props} toggle={this.toggle} toggleStatus={this.state.toggleStatus}/>
        }
    }
};