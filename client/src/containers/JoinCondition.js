import React, {Component} from 'react';
import {Button, CustomInput, InputGroup, InputGroupAddon, InputGroupText, Row} from "reactstrap";
import _ from 'lodash';
import {updateJoin} from "../actions/queryActions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {translations} from "../utils/translations";

class JoinCondition extends Component {

    constructor(props) {
        super(props);

        this.handleMainColumnChange = this.handleMainColumnChange.bind(this);

        this.handleSecondaryTableChange = this.handleSecondaryTableChange.bind(this);

        this.handleSecondaryColumnChange = this.handleSecondaryColumnChange.bind(this);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleMainColumnChange(e) {
        e.preventDefault();

        const value = JSON.parse(e.target.value);

        let condition = _.cloneDeep(this.props.condition);

        condition = {
            ...condition,
            main_column: value.column_name
        };

        let conditions = _.cloneDeep(this.props.join.conditions);

        const conditionIndex = conditions.findIndex(condition => condition.id === value.id);

        conditions[conditionIndex] = condition;

        let join = _.cloneDeep(this.props.join);

        join = {
            ...join,
            conditions: conditions
        };

        this.props.updateJoin(join);
    }

    handleSecondaryTableChange(e) {
        e.preventDefault();

        const value = JSON.parse(e.target.value);

        let condition = _.cloneDeep(this.props.condition);

        condition = {
            ...condition,
            secondary_table: value.table,
            secondary_column: ""
        };

        let conditions = _.cloneDeep(this.props.join.conditions);

        const conditionIndex = conditions.findIndex(condition => condition.id === value.id);

        conditions[conditionIndex] = condition;

        let join = _.cloneDeep(this.props.join);

        join = {
            ...join,
            conditions: conditions
        };

        this.props.updateJoin(join);

    }

    handleSecondaryColumnChange(e) {
        e.preventDefault();

        const value = JSON.parse(e.target.value);

        let condition = _.cloneDeep(this.props.condition);

        condition = {
            ...condition,
            secondary_column: value.column_name
        };

        let conditions = _.cloneDeep(this.props.join.conditions);

        const conditionIndex = conditions.findIndex(condition => condition.id === value.id);

        conditions[conditionIndex] = condition;

        let join = _.cloneDeep(this.props.join);

        join = {
            ...join,
            conditions: conditions
        };

        this.props.updateJoin(join);
    }

    handleRemove() {
        let conditions = _.cloneDeep(this.props.join.conditions);

        conditions = conditions.filter(condition => condition.id !== this.props.condition.id);

        let join = _.cloneDeep(this.props.join);

        join = {
            ...join,
            conditions: conditions
        };

        this.props.updateJoin(join);
    }

    render() {
        const defaultValue = {
            id: this.props.condition.id,
            table: {
                table_schema: "",
                table_name: "",
                table_alias: ""
            }
        };


        return (
            <Row form className="my-2">

                <div className="col-auto">
                    <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>{this.props.join.main_table.table_name}</InputGroupText>
                        </InputGroupAddon>
                        <CustomInput type="select"
                                     id="main_table_columns"
                                     onChange={this.handleMainColumnChange}
                                     defaultValue={""}>
                            <option key={`${this.props.condition.id}-main-column-null`} value="">{translations[this.props.language.code].queryBuilder.joinConditionMainColumn}</option>
                            {this.props.join.main_table.columns.map(column => {

                                const value = {
                                    id: this.props.condition.id,
                                    column_name: column.column_name
                                };

                                return <option key={`${this.props.condition.id}-main-column-${column.column_name}`}
                                               value={JSON.stringify(value)}>{column.column_name}</option>
                            })}
                        </CustomInput>
                    </InputGroup>
                </div>
                <div className="col-auto align-self-center">
                    <FontAwesomeIcon icon="equals" size="xs"/>
                </div>
                <div className="col-auto">
                    <InputGroup size="sm">

                        <CustomInput bsSize="sm" type="select"
                                     id="secondary_table"
                                     className="text-secondary"
                                     onChange={this.handleSecondaryTableChange}
                                     defaultValue={JSON.stringify(defaultValue)}>

                            <option key={`${this.props.condition.id}-secondary-table-null`}
                                    value={JSON.stringify(defaultValue)}>{translations[this.props.language.code].queryBuilder.joinConditionSecondaryTable}
                            </option>
                            {this.props.tables.map(table => {

                                const value = {
                                    id: this.props.condition.id,
                                    table: table
                                };

                                const option = table.table_alias.length > 0 ? `${table.table_name} (${table.table_alias})` : `${table.table_name}`;

                                return this.props.join.main_table.id !== table.id && <option
                                    key={`${this.props.condition.id}-secondary-table-${table.id}`}
                                    value={JSON.stringify(value)}>{option}</option>
                            })}
                        </CustomInput>

                        <CustomInput bsSize="sm" type="select"
                                     id="secondary_table_columns"
                                     className="text-secondary"
                                     onChange={this.handleSecondaryColumnChange}
                                     defaultValue={""}>

                            <option key={`${this.props.condition.id}-secondary-column-null`} value="">{translations[this.props.language.code].queryBuilder.joinConditionSecondaryColumn}
                            </option>
                            {!_.isEmpty(this.props.condition.secondary_table.table_name) && this.props.condition.secondary_table.columns.map(column => {

                                const value = {
                                    id: this.props.condition.id,
                                    column_name: column.column_name
                                };

                                return <option key={`${this.props.condition.id}-secondary-column-${column.column_name}`}
                                               value={JSON.stringify(value)}>{column.column_name}</option>
                            })}
                        </CustomInput>
                    </InputGroup>
                </div>
                <div className="col-auto ml-auto">
                    <Button size="sm" color="danger" onClick={this.handleRemove}>
                        <FontAwesomeIcon icon="times"/>
                    </Button>
                </div>
            </Row>
        )
    }
}

const mapStateToProps = store => {
    return {
        tables: store.query.tables,
        language: store.settings.language
    }
};

const mapDispatchToProps = dispatch => ({
    updateJoin(data) {
        dispatch(updateJoin(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinCondition);