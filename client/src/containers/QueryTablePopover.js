import React, {Component} from 'react'
import {
    Button, Input, InputGroup, InputGroupAddon, Popover, PopoverBody
} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {updateTable} from "../actions/queryActions";
import {connect} from "react-redux";
import {withToggle} from "../hocs/withToggle";
import _ from 'lodash';
import {translations} from "../utils/translations";

class QueryTablePopover extends Component {

    constructor(props) {
        super(props);

        this.state = {
            table_alias: props.data.table_alias
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleRemove(field) {
        this.setState({[field]: ""});

        let table = _.cloneDeep(this.props.data);

        table = {
            ...table,
            table_alias: ""
        };
        this.props.updateTable(table);
    }

    handleSave() {

        let table = _.cloneDeep(this.props.data);

        table = {
            ...table,
            table_alias: this.state.table_alias
        };
        this.props.updateTable(table);
    }

    render() {
        return (
            <Popover trigger="legacy" placement="bottom" isOpen={this.props.toggleStatus} target={this.props.target}
                     toggle={this.props.toggle}>
                <PopoverBody>
                    <InputGroup size="sm">
                        <Input type="text" name="table_alias" id="table_alias"
                               placeholder={translations[this.props.language.code].queryBuilder.aliasH}
                               onBlur={this.handleSave} onChange={this.handleChange} value={this.state.table_alias}/>
                        <InputGroupAddon addonType="append">
                            <Button color="danger" onClick={() => this.handleRemove("table_alias")}>
                                <FontAwesomeIcon icon="times"/>
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </PopoverBody>
            </Popover>
        )
    }
}

const mapStateToProps = store => {
    return {
        language: store.settings.language
    }
};

const mapDispatchToProps = dispatch => ({
    updateTable(data) {
        dispatch(updateTable(data))
    }
});

export default withToggle(connect(mapStateToProps, mapDispatchToProps)(QueryTablePopover));