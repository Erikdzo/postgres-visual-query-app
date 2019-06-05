import React, {Component} from 'react'
import {connect} from "react-redux";

class ResultSQL extends Component {


    render() {
        return (
            <div className="w-100 mt-2" style={{height: "40vh"}}>
                <samp className="sql bg-light pl-2 d-block">
                    {this.props.sql}
                </samp>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        sql: store.query.sql
    }
};

export default connect(mapStateToProps)(ResultSQL)