import React, {Component} from 'react';

export const withTabSwitcher = WrappedComponent => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.toggle = this.toggle.bind(this);
            this.state = {
                activeTab: '1'
            };
        }


        toggle(tab) {
            if (this.state.activeTab !== tab) {
                this.setState({
                    activeTab: tab
                });
            }
        }
        render() {
            return (
                <WrappedComponent {...this.props} toggle={this.toggle} activeTab={this.state.activeTab}/>
            )

        }
    }
};