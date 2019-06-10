import React, {Component} from 'react'
import {connect} from "react-redux";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import Join from "./Join";
import {addJoin, updateJoinsOrder} from "../actions/queryActions";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import _ from 'lodash'
import {translations} from "../utils/translations";

export class JoinList extends Component {

    constructor(props) {
        super(props);


        this.onDragEnd = this.onDragEnd.bind(this);
        this.handleAddJoin = this.handleAddJoin.bind(this);
    }


    onDragEnd(result) {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const movedJoins = this.props.joins.find(join => draggableId.localeCompare(`join-${join.id}`) === 0);

        const newJoins = Array.from(this.props.joins);
        newJoins.splice(source.index, 1);
        newJoins.splice(destination.index, 0, movedJoins);

        this.props.updateJoins(newJoins)
    }

    handleAddJoin() {
        this.props.addJoin()
    }

    render() {
        return (
            <div>
                <div className="text-info">
                    <Button className="mb-1" outline color="info" size="sm" onClick={this.handleAddJoin}
                            disabled={_.isEmpty(this.props.tables)}>
                        <FontAwesomeIcon icon="plus"/>
                    </Button> {translations[this.props.language.code].queryBuilder.addJoin}
                </div>
                <DragDropContext
                    onDragEnd={this.onDragEnd}
                >
                    <Droppable droppableId="droppable-columns">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {this.props.joins.map((join, index) => {
                                    return <Join
                                        key={`join-${join.id}`}
                                        id={`join-${join.id}`}
                                        join={join}
                                        index={index}
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
        joins: store.query.joins,
        tables: store.query.tables,
        language: store.settings.language
    }
};

const mapDispatchToProps = dispatch => ({
    updateJoins(data) {
        dispatch(updateJoinsOrder(data))
    },
    addJoin() {
        dispatch(addJoin())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinList)