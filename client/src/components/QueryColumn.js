import React, {Component} from 'react'
import {addColumn, removeColumn, updateColumn} from "../actions/queryActions";
import {connect} from "react-redux";
import {
    Button, Card, CardBody, Container, CustomInput, Form, FormGroup, Input, InputGroup,
    InputGroupAddon, Row, UncontrolledTooltip
} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Draggable} from 'react-beautiful-dnd';
import _ from 'lodash';
import {translations} from "../utils/translations";
import {bannedWords} from "../utils/bannedWords";


const CopyButton = (props) =>
    <div>
        <Button size="sm" color="secondary" id={`${props.id}_copy`} className="mr-1" onClick={props.handleCopy}>
            <FontAwesomeIcon icon="copy"/>
        </Button>
        <UncontrolledTooltip placement="top"  target={`${props.id}_copy`} delay={{show: 500, hide: 0}}>
            {translations[props.languageCode].tooltips.copyColumn}
        </UncontrolledTooltip>
    </div>;


const RemoveButton = (props) =>
    <div>
        <Button size="sm" color="danger" id={`${props.id}_remove`}
                onClick={props.handleRemoveColumn}>
            <FontAwesomeIcon icon="times"/>
        </Button>
    </div>;

export class QueryColumn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            column_alias: props.data.column_alias,
            column_filter: props.data.column_filter,
            filter_valid: true
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

    handleRemove(e) {
        this.setState({
            ...this.state,
            [e.target.id]: ""
        });

        let column = _.cloneDeep(this.props.data);

        column = {
            ...column,
            [e.target.id]: ""
        };

        if (_.isEqual(e.target.id, "column_filter")) {
            this.setState({
                filter_valid: true
            })
        }

        this.props.updateColumn(column);
    }

    handleSave(e) {
        let column = _.cloneDeep(this.props.data);

        column = {
            ...column,
            [e.target.id]: e.target.value
        };

        let contains = false;
        const filter = _.lowerCase(column.column_filter).split(" ");
        bannedWords.forEach(el => {
            if (filter.includes(el)) {
                contains = true;
            }
        });

        if (contains) {
            this.setState({
                filter_valid: false
            });
        } else {
            this.setState({
                filter_valid: true
            });
            this.props.updateColumn(column);
        }
    }

    handleSwitch(e) {
        let column = _.cloneDeep(this.props.data);
        
        column = {
            ...column,
            [e.target.name]: !column[e.target.name]
        };
        this.props.updateColumn(column);
    }

    render() {

        let order_direction = this.props.data.column_order_dir ? "ASC" : "DESC";
        let column_order_visibility = this.props.data.column_order ? "visible" : "invisible";
        const column_name = _.isEmpty(this.props.data.table_alias) ? `${this.props.data.table_name}.${this.props.data.column_name}` : `${this.props.data.table_alias}.${this.props.data.column_name}`;

        let filter_valid = this.state.filter_valid ? "" : "is-invalid";
        return (
            <Draggable
                draggableId={`${this.props.id}`}
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

                                            <Row form>
                                                <div className=" col-auto d-flex">
                                                    <CustomInput className="" type="checkbox"
                                                                 id={`display-${this.props.data.id}`}
                                                                 name="display_in_query"
                                                                 checked={this.props.data.display_in_query}
                                                                 onChange={this.handleSwitch}
                                                    />
                                                    <small
                                                        className="mr-2 align-self-center text-muted">{`${this.props.data.table_schema}`}</small>
                                                    <h6 className="m-0 mr-2 align-self-center" id="column_name">{column_name}</h6>
                                                    <UncontrolledTooltip placement="top"  delay={{show: 0, hide: 0}} target="column_name">
                                                        {this.props.data.data_type}
                                                    </UncontrolledTooltip>
                                                </div>
                                                <div className="col-auto">
                                                    <FormGroup>

                                                        <CustomInput className="mr-2"
                                                                     disabled={this.props.distinct} type="switch"
                                                                     id={`column-distinct-on-${this.props.data.id}`}
                                                                     name="column_distinct_on"
                                                                     checked={this.props.data.column_distinct_on}
                                                                     onChange={this.handleSwitch}
                                                                     label="DISTINCT ON"/>
                                                        <CustomInput className="mr-2"
                                                                     type="switch"
                                                                     id={`column-group-by-${this.props.data.id}`}
                                                                     name="column_group_by"
                                                                     checked={this.props.data.column_group_by}
                                                                     onChange={this.handleSwitch}
                                                                     label="GROUP BY"/>

                                                        <CustomInput className="mr-2"
                                                                     type="switch"
                                                                     id={`column-order-${this.props.data.id}`}
                                                                     name="column_order"
                                                                     checked={this.props.data.column_order}
                                                                     onChange={this.handleSwitch}
                                                                     label="ORDER"/>
                                                        <CustomInput className={column_order_visibility} 
                                                                     type="switch"
                                                                     id={`column-order-dir-${this.props.data.id}`}
                                                                     name="column_order_dir"
                                                                     checked={this.props.data.column_order_dir}
                                                                     onChange={this.handleSwitch}
                                                                     label={order_direction}/>

                                                    </FormGroup>
                                                </div>
                                            </Row>
                                            <Row form className="mb-2">
                                                <div className="col-auto">
                                                    <CustomInput bsSize="sm" type="select" id="column_aggregate"
                                                                 className="my-1 align-self-start"
                                                                 value={this.props.data.column_aggregate}
                                                                 onChange={this.handleSave}>
                                                        <option value="">{translations[this.props.language.code].queryBuilder.selectFunction}</option>
                                                        <option value="AVG">AVG</option>
                                                        <option value="BIT_AND">BIT_AND</option>
                                                        <option value="BIT_OR">BIT_OR</option>
                                                        <option value="BOOL_AND">BOOL_AND</option>
                                                        <option value="BOOL_OR">BOOL_OR</option>
                                                        <option value="COUNT">COUNT</option>
                                                        <option value="MAX">MAX</option>
                                                        <option value="MIN">MIN</option>
                                                        <option value="SUM">SUM</option>
                                                        <option value="ASCII">ASCII</option>
                                                        <option value="BIT_LENGTH">BIT_LENGTH</option>
                                                        <option value="CHAR_LENGTH">CHAR_LENGTH</option>
                                                        <option value="INITCAP">INITCAP</option>
                                                        <option value="LENGTH">LENGTH</option>
                                                        <option value="LOWER">LOWER</option>
                                                        <option value="OCTET_LENGTH">OCTET_LENGTH</option>
                                                        <option value="REVERSE">REVERSE</option>
                                                        <option value="UPPER">UPPER</option>
                                                        <option value="TO_ASCII">TO_ASCII</option>
                                                        <option value="TO_HEX">TO_HEX</option>
                                                    </CustomInput>

                                                </div>
                                                <div className="col-auto">
                                                    <InputGroup className="my-1 align-self-start" size="sm">
                                                        <Input className="text-dark" type="text" name="column_alias"
                                                               id="column_alias"
                                                               onBlur={this.handleSave}
                                                               onChange={this.handleChange}
                                                               value={this.state.column_alias}
                                                               placeholder={translations[this.props.language.code].queryBuilder.aliasPh}/>
                                                        <UncontrolledTooltip placement="top"  delay={{show: 500, hide: 0}} target="column_alias">
                                                            {translations[this.props.language.code].tooltips.columnAlias}
                                                        </UncontrolledTooltip>
                                                        <InputGroupAddon addonType="append">
                                                            <Button color="danger" id="column_alias"
                                                                    onClick={this.handleRemove}>
                                                                <FontAwesomeIcon icon="times"/>
                                                            </Button>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                </div>
                                                <div className="col-4">
                                                    <InputGroup className="my-1 align-self-start" size="sm">
                                                        <Input type="text-dark" name="column_filter" id="column_filter"
                                                               className={filter_valid}
                                                               onBlur={this.handleSave}
                                                               onChange={this.handleChange}
                                                               value={this.state.column_filter}
                                                               placeholder={translations[this.props.language.code].queryBuilder.filterPh}/>
                                                        <div className="invalid-feedback order-1">
                                                            {translations[this.props.language.code].tooltips.invalidFilter}
                                                        </div>
                                                        <UncontrolledTooltip placement="top"  delay={{show: 500, hide: 0}} target="column_filter">
                                                            {translations[this.props.language.code].tooltips.columnFilter}
                                                        </UncontrolledTooltip>
                                                        <InputGroupAddon addonType="append">
                                                            <Button color="danger" id="column_filter"
                                                                    onClick={this.handleRemove}>
                                                                <FontAwesomeIcon icon="times"/>
                                                            </Button>
                                                        </InputGroupAddon>

                                                    </InputGroup>
                                                </div>
                                            </Row>

                                        </div>
                                        <div className="col d-flex w-100 ml-auto">
                                            <FormGroup className="align-self-center justify-content-end m-0 ml-auto">
                                                <CopyButton id={this.props.id} languageCode={this.props.language.code} handleCopy={this.handleCopy}/>
                                                <RemoveButton languageCode={this.props.language.code} handleRemoveColumn={this.handleRemoveColumn}/>
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
        distinct: store.query.distinct,
        language: store.settings.language
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