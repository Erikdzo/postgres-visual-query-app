import React, {Component} from 'react'
import {connect} from "react-redux";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {languages} from "../utils/translations";
import {changeLanguage} from "../actions/settingsActions";
import {withToggle} from "../hocs/withToggle";

export class LanguageSwitcher extends Component {

    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }



    handleOnClick(data) {
        this.props.changeLanguage(data)
    }

    render() {
        return (
            <Dropdown  direction="right" size="sm" isOpen={this.props.toggleStatus} toggle={this.props.toggle}>
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

export default withToggle(connect(mapStateToProps, mapDispatchToProps) (LanguageSwitcher))