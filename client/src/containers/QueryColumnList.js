import React, {Component} from 'react'
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import QueryColumn from "./QueryColumn";
import {switchDistinct, updateColumnsOrder} from "../actions/queryActions";
import {connect} from "react-redux";
import {CustomInput} from "reactstrap";
import _ from 'lodash';

class QueryColumnList extends Component {

    constructor(props) {
        super(props);


        this.onDragEnd = this.onDragEnd.bind(this);
    }


    onDragEnd(result) {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }


        const movedColumn = this.props.columns.find((column, index) => _.isEqual(draggableId, `query-column-${column.id}`));

        const newColumns = Array.from(this.props.columns);
        newColumns.splice(source.index, 1);
        newColumns.splice(destination.index, 0, movedColumn);

        this.props.updateColumns(newColumns)
    }

    render() {
        return (
            <div className="mt-2">
                <CustomInput type="switch" id="distinct" label="DISTINCT" checked={this.props.distinct}
                             onChange={this.props.switchDistinct}/>
                <DragDropContext
                    onDragEnd={this.onDragEnd}
                >
                    <Droppable droppableId="droppable-columns">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {this.props.columns.map((column, index) => {
                                    return <QueryColumn
                                        key={`query-column-${column.id}`}
                                        id={`query-column-${column.id}`}
                                        index={index}
                                        data={column}
                                    />

                                })}
                                {provided.placeholder}
                            </div>
                        )}

                    </Droppable>
                </DragDropContext>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        columns: store.query.columns,
        distinct: store.query.distinct
    }
};

const mapDispatchToProps = dispatch => ({
    updateColumns(data) {
        dispatch(updateColumnsOrder(data))
    },
    switchDistinct() {dispatch(switchDistinct())}
});


export default connect(mapStateToProps, mapDispatchToProps)(QueryColumnList)