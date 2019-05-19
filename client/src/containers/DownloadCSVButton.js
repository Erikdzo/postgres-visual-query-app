import React, {Component} from 'react'
import {connect} from "react-redux";
import { CSVLink} from "react-csv";
import _ from 'lodash'
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";


class DownloadCSVButton extends Component {

    static getHeaders(result) {
        if (_.isNull(result)) {
            return [];
        }

        let headers = [];

        result.fields.forEach(field => {
            const header = {
                label: field.name,
                key: field.name
            };
            headers.push(header)
        });

        return headers
    }

    static getData(result) {
        if (_.isNull(result)) {
            return [];
        }
        return result.rows
    }

    render() {

        let disabled = _.isNull(this.props.result);

        return (


            <CSVLink className="mr-2" data={DownloadCSVButton.getData(this.props.result)} headers={DownloadCSVButton.getHeaders(this.props.result)} filename={"result.csv"}>
                <Button disabled={disabled}>
                    <FontAwesomeIcon icon="download"/>
                    <div className="d-inline"> CSV</div>
                </Button>
            </CSVLink>
        )
    }
}

const mapStateToProps = store => {
    return {
        result: store.query.result
    }
};

export default connect(mapStateToProps)(DownloadCSVButton)