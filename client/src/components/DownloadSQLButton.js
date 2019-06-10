import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class DownloadSQLButton extends Component {

    static downloadContent(name, content) {

        if (navigator.msSaveBlob) {
            let blobObject = new Blob([content], {type: 'text/plain'});
            window.navigator.msSaveOrOpenBlob(blobObject, name);
        } else {
            let atag = document.createElement("a");
            let file = new Blob([content], {type: 'text/plain'});
            atag.href = URL.createObjectURL(file);
            atag.download = name;
            document.body.appendChild(atag);
            atag.click();
        }
    }

    render() {
        return (
            <Button className="mr-2"
                onClick={() => DownloadSQLButton.downloadContent("select_query.sql", this.props.sql)}>
                <FontAwesomeIcon icon="download"/>
                <div className="d-inline"> SQL</div>

            </Button>

        )
    }
}

const mapStateToProps = store => {
    return {
        sql: store.query.sql
    }
};

export default connect(mapStateToProps)(DownloadSQLButton)