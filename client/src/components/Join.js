import React, {Component} from 'react'
import {Draggable} from "react-beautiful-dnd";
import {
    Button, Card, CardBody, Container, CustomInput, Form, FormGroup, Row, UncontrolledTooltip
} from "reactstrap";
import {removeJoin, updateJoin} from "../actions/queryActions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import _ from 'lodash';
import JoinCondition from "./JoinCondition";
import {translations} from "../utils/translations";


class Join extends Component {

    constructor(props) {
        super(props);

        this.handleTypeChange = this.handleTypeChange.bind(this);

        this.handleTableChange = this.handleTableChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.handleAddCondition = this.handleAddCondition.bind(this);
    }

    handleTypeChange(e) {
        e.preventDefault();

        let join = _.cloneDeep(this.props.join);

        join = {
            ...join,
            type: e.target.value
        };

        this.props.updateJoin(join)
    }

    handleTableChange(e) {
        e.preventDefault();

        const value = JSON.parse(e.target.value);


        let join = _.cloneDeep(this.props.join);

        let conditions = _.cloneDeep(this.props.join.conditions);

        if (_.isEmpty(value.table_name) ||
            (!_.isEmpty(this.props.join.main_table.table_name) &&
                !_.isEqual(this.props.join.main_table.table_name, value.table_name))) {
            conditions = []
        }

        join = {
            ...join,
            main_table: value,
            conditions: conditions
        };

        this.props.updateJoin(join)


    }

    handleAddCondition() {
        let id = 0;

        if (this.props.join.conditions.length > 0) {
            id = this.props.join.conditions[this.props.join.conditions.length - 1].id + 1;
        }


        const condition = {
            id: id,
            main_column: "",
            secondary_table: {
                table_schema: "",
                table_name: "",
                table_alias: ""
            },
            secondary_column: ""
        };
        let join = this.props.join;

        let conditions = _.cloneDeep(this.props.join.conditions);

        conditions.push(condition);

        join = {
            ...join,
            conditions: conditions
        };

        this.props.updateJoin(join);

    }

    handleRemove() {
        this.props.removeJoin(this.props.join);
    }

    render() {

        const defaultValue = {
            table_schema: "",
            table_name: "",
            table_alias: ""
        };

        const isTableSelected = _.isEmpty(this.props.join.main_table.table_name);

        const firstTable = this.props.tables[0].table_alias === "" ? `${this.props.tables[0].table_schema}.${this.props.tables[0].table_name}` : `${this.props.tables[0].table_alias}`;

        return (
            <div className="my-2">
                <Draggable
                    draggableId={this.props.id}
                    index={this.props.index}>
                    {(provided) => (
                        <Card
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            innerRef={provided.innerRef}

                        >
                            <CardBody className="py-2 px-0">
                                <Form>
                                    <Container fluid>
                                    <Row>
                                        <div className="col-auto d-flex">
                                            <FontAwesomeIcon className="align-self-center" icon="sort"/>
                                        </div>
                                        <div className="col-10 px-0">
                                            <Row form className="mb-2 align-items-center">
                                                <div className="col-auto ">
                                                    <FontAwesomeIcon icon="link"
                                                                     style={{color: this.props.join.color}}/>
                                                </div>
                                                <div className="col-auto">
                                                    {this.props.index === 0 ? firstTable : translations[this.props.language.code].queryBuilder.joinResult}
                                                </div>
                                                <div className="col-3">
                                                    <FormGroup className="m-0">
                                                        <CustomInput bsSize="sm" type="select" id={`${this.props.id}_join_type`}
                                                                     onChange={this.handleTypeChange}
                                                                     value={this.props.join.join_type}>
                                                            <option value="inner">INNER JOIN</option>
                                                            <option value="left">LEFT JOIN</option>
                                                            <option value="right">RIGHT JOIN</option>
                                                            <option value="outer">OUTER JOIN</option>
                                                            <option value="cross">CROSS JOIN</option>
                                                        </CustomInput>
                                                        <UncontrolledTooltip placement="top"  delay={{show: 500, hide: 0}} target={`${this.props.id}_join_type`}>
                                                            {translations[this.props.language.code].tooltips.joinType}
                                                        </UncontrolledTooltip>
                                                    </FormGroup>
                                                </div>
                                                <div className="col-5">
                                                    <FormGroup className="m-0">
                                                        <CustomInput bsSize="sm" type="select" id="main_table"
                                                                     onChange={this.handleTableChange}
                                                                     defaultValue={JSON.stringify(defaultValue)}>
                                                            <option key={`${this.props.id}-null`}
                                                                    value={JSON.stringify(defaultValue)}>
                                                                {translations[this.props.language.code].queryBuilder.joinMainTable}
                                                            </option>
                                                            {this.props.tables.map((table,index) => {
                                                                const value = JSON.stringify(table);
                                                                const option = table.table_alias.length > 0 ? `${table.table_name} (${table.table_alias})` : `${table.table_name}`;

                                                                return index > 0 && <option
                                                                    key={`join-${this.props.id}-table-${table.id}`}
                                                                    value={value}>{option}</option>
                                                            })}

                                                        </CustomInput>
                                                    </FormGroup>
                                                </div>

                                            </Row>
                                            <Row form>
                                                <div className="col-12 text-info">
                                                    <Button className="mb-2" outline color="info" size="sm"
                                                            disabled={isTableSelected}
                                                            onClick={this.handleAddCondition}><FontAwesomeIcon
                                                        icon="plus"/></Button> {translations[this.props.language.code].queryBuilder.conditionH}
                                                </div>
                                            </Row>
                                            {!_.isEmpty(this.props.join.conditions) &&
                                            <Card>
                                                <CardBody className="py-0 px-2">
                                                    {this.props.join.conditions.map(condition => {
                                                        return (
                                                            <JoinCondition
                                                                key={`join-${this.props.join.id}-condition-${condition.id}`}
                                                                condition={condition} join={this.props.join}/>
                                                        )
                                                    })}
                                                </CardBody>
                                            </Card>
                                            }
                                        </div>
                                        <div className="col-1 d-flex ml-auto pr-2 justify-content-end">
                                            <FormGroup className="align-self-center m-0">
                                                <Button size="sm" color="danger" onClick={this.handleRemove} id={`${this.props.id}_remove_join`}>
                                                    <FontAwesomeIcon icon="times"/>
                                                </Button>
                                            </FormGroup>
                                        </div>
                                    </Row>
                                    </Container>
                                </Form>

                            </CardBody>
                        </Card>
                    )}
                </Draggable>
            </div>
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
    },
    removeJoin(data) {
        dispatch(removeJoin(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Join);
