import React, {Component} from 'react'
import {addColumn, removeColumn, updateColumn} from "../actions/queryActions";
import {connect} from "react-redux";
import {
    Button, Card, CardBody, Container, CustomInput, Form, FormGroup, Input, InputGroup,
    InputGroupAddon, Row
} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Draggable} from 'react-beautiful-dnd';
import _ from 'lodash';

class QueryColumn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            column_alias: props.data.column_alias,
            column_filter: props.data.column_filter,
            column_aggregate: props.data.column_aggregate,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
        this.handleRemoveColumn = this.handleRemoveColumn.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleRemoveColumn() {
        this.props.removeColumn(this.props.data)
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleCopy() {
        this.props.addColumn(this.props.data);
    }

    handleRemove(field) {
        this.setState({
            ...this.state,
            [field]: ""
        });

        let column = _.cloneDeep(this.props.data);

        column = {
            ...column,
            [field]: ""
        };

        this.props.updateColumn(column);
    }

    handleSave(field) {

        let column = _.cloneDeep(this.props.data);

        column = {
            ...column,
            [field]: this.state[field]
        };


        this.props.updateColumn(column);
    }

    handleSwitch(field) {

        let column = _.cloneDeep(this.props.data);

        column = {
            ...column,
            [field]: !column[field]
        };

        this.props.updateColumn(column);

    }

    render() {


        let order_direction = this.props.data.column_order_dir ? "ASC" : "DESC";
        let column_order_visibility = this.props.data.column_order ? "visible" : "invisible";
        const column_name = _.isEmpty(this.props.data.table_alias) ? `${this.props.data.table_name}.${this.props.data.column_name}` : `${this.props.data.table_alias}.${this.props.data.column_name}`;
        return (
            <Draggable
                draggableId={`${this.props.data.table_schema}-${this.props.data.table_name}-${this.props.data.column_name}-${this.props.data.id}`}
                index={this.props.index}>
                {(provided) => (
                    <Card className="px-0 my-2"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          innerRef={provided.innerRef}

                    >
                        <CardBody className="mx-0 pr-2 pl-1 pt-1 pb-0">

                            <Form inline className="align-content-center">
                                <Container fluid className="pr-0">

                                    <Row form>

                                        <div className="col-auto pl-0 pr-3 d-flex align-items-center">
                                            <FontAwesomeIcon className="" icon="sort"/>

                                        </div>
                                        <div className="col-10 p-0">

                                            <Row form className="">
                                                <div className=" col-auto p-0 d-flex">
                                                    <CustomInput className="" type="checkbox"
                                                                 id={`display-${this.props.data.id}`}
                                                                 checked={this.props.data.display_in_query}
                                                                 onChange={() => this.handleSwitch("display_in_query")}
                                                    />
                                                    <small className="mr-2 align-self-center text-muted">{`${this.props.data.table_schema}`}</small>
                                                    <h6 className="m-0 mr-2 align-self-center">{column_name}</h6>
                                                </div>
                                                <div className="col-auto">
                                                    <FormGroup>

                                                        <CustomInput className="mr-2 "
                                                                     disabled={this.props.distinct} type="switch"
                                                                     id={`distinct-on-${this.props.data.id}`}
                                                                     checked={this.props.data.column_distinct_on}
                                                                     onChange={() => this.handleSwitch("column_distinct_on")}
                                                                     label="DISTINCT ON"/>
                                                        <CustomInput className="mr-2"
                                                                     type="switch"
                                                                     id={`group-by-${this.props.data.id}`}
                                                                     checked={this.props.data.column_group_by}
                                                                     onChange={() => this.handleSwitch("column_group_by")}
                                                                     label="GROUP BY"/>

                                                        <CustomInput className="mr-2"
                                                                     type="switch"
                                                                     id={`order-${this.props.data.id}`}
                                                                     checked={this.props.data.column_order}
                                                                     onChange={() => this.handleSwitch("column_order")}
                                                                     label="ORDER"/>

                                                        <CustomInput className={column_order_visibility} type="switch"
                                                                     id={`order-dir-${this.props.data.id}`}
                                                                     checked={this.props.data.column_order_dir}
                                                                     onChange={() => this.handleSwitch("column_order_dir")}
                                                                     label={order_direction}/>

                                                    </FormGroup>
                                                </div>
                                            </Row>
                                            <Row form className="mb-2">

                                                <div className="col-4 p-0">

                                                        <InputGroup className="mr-2 my-1" size="sm">
                                                            <Input className="text-dark" type="text" name="column_alias" id="column_alias"
                                                                   onBlur={() => this.handleSave("column_alias")}
                                                                   onChange={this.handleChange}
                                                                   value={this.state.column_alias} placeholder="Alias"/>
                                                            <InputGroupAddon addonType="append">
                                                                <Button color="danger"
                                                                        onClick={() => this.handleRemove("column_alias")}>
                                                                    <FontAwesomeIcon icon="times"/>
                                                                </Button>
                                                            </InputGroupAddon>
                                                        </InputGroup>

                                                </div>
                                                <div className="col-4">

                                                        <InputGroup className="mr-2 my-1" size="sm">
                                                            <Input type="text-dark" name="column_filter" id="column_filter"
                                                                   onBlur={() => this.handleSave("column_filter")}
                                                                   onChange={this.handleChange}
                                                                   value={this.state.column_filter}
                                                                   placeholder="Filter ex. table_name > 10"/>
                                                            <InputGroupAddon addonType="append">
                                                                <Button color="danger"
                                                                        onClick={() => this.handleRemove("column_filter")}>
                                                                    <FontAwesomeIcon icon="times"/>
                                                                </Button>
                                                            </InputGroupAddon>
                                                        </InputGroup>

                                                </div>
                                                <div className="col-4">

                                                        <InputGroup className="mr-2 my-1" size="sm">
                                                            <Input type="text-dark" name="column_aggregate"
                                                                   id="column_aggregate"
                                                                   onBlur={() => this.handleSave("column_aggregate")}
                                                                   onChange={this.handleChange}
                                                                   value={this.state.column_aggregate}
                                                                   placeholder="Function ( Aggregate ex SUM; row level ex Upper)"/>
                                                            <InputGroupAddon addonType="append">
                                                                <Button color="danger"
                                                                        onClick={() => this.handleRemove("column_aggregate")}>
                                                                    <FontAwesomeIcon icon="times"/>
                                                                </Button>
                                                            </InputGroupAddon>
                                                        </InputGroup>
                                                </div>
                                            </Row>

                                        </div>
                                        <div className="col d-flex w-100 ml-auto">
                                            <FormGroup className="align-self-center justify-content-end m-0 ml-auto">
                                                <Button size="sm" color="secondary" className="mr-1" onClick={this.handleCopy}><FontAwesomeIcon
                                                    icon="copy"/></Button>
                                                <Button size="sm" color="danger"
                                                        onClick={this.handleRemoveColumn}><FontAwesomeIcon
                                                    icon="times"/></Button>
                                            </FormGroup>
                                        </div>
                                    </Row>
                                </Container>
                            </Form>
                        </CardBody>
                    </Card>
                )}


            </Draggable>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        distinct: store.query.distinct
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateColumn(column) {
        dispatch(updateColumn(column))
    },
    removeColumn(column) {
        dispatch(removeColumn(column))
    },
    addColumn(column) {
        dispatch(addColumn(column))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryColumn)