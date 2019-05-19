import React, {Component} from 'react'
import {connect} from "react-redux";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {languages} from "../utils/translations";
import {changeLanguage} from "../actions/settingsActions";

class LanguageSwitcher extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    handleOnClick(data) {
        console.log("START");
        console.log(data);
        this.props.changeLanguage(data)
    }

    render() {
        return (
            <Dropdown  direction="right" size="sm" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle  className="btn btn-light btn-outline-secondary" caret>
                    {this.props.language.name}
                </DropdownToggle>
                <DropdownMenu>
                    {languages.map(language => {
                        return <DropdownItem key={language.code} onClick={() => this.handleOnClick(language)}>{language.name}</DropdownItem>
                    })}
                </DropdownMenu>
            </Dropdown>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        language: store.settings.language
    }
};

const mapDispatchToProps = (dispatch) => ({
    changeLanguage(data) {dispatch(changeLanguage(data))}
});

export default connect(mapStateToProps, mapDispatchToProps) (LanguageSwitcher)