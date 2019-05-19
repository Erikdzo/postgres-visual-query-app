import React, {Component} from 'react'
import {
    Button,
    Form, FormGroup, Input, InputGroup, InputGroupAddon, Label, Popover, PopoverBody
} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {updateTable} from "../actions/queryActions";
import {connect} from "react-redux";
import {withToggle} from "../hocs/withToggle";
import _ from 'lodash';

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
        this.setState({[e.target.name] : e.target.value});
    }

    handleRemove(field) {
        this.setState({[field] : ""});

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
            <Popover trigger="legacy" placement="bottom" isOpen={this.props.toggleStatus} target={this.props.target} toggle={this.props.toggle}>
                <PopoverBody>
                    <Form>
                        <FormGroup className="p-0">
                            <Label for="alias">Alias</Label>
                            <InputGroup size="sm">
                                <Input type="text" name="table_alias" id="table_alias" onBlur={this.handleSave} onChange={this.handleChange} value={this.state.table_alias}/>
                                <InputGroupAddon addonType="append"><Button color="danger" onClick={() => this.handleRemove("table_alias")}><FontAwesomeIcon icon="times"/></Button></InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                    </Form>
                </PopoverBody>
            </Popover>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateTable(data) {
        dispatch(updateTable(data))
    }
});



export default withToggle(connect(null, mapDispatchToProps) (QueryTablePopover));