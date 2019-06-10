import React, {Component} from 'react';
import {Input} from "reactstrap";
import {search} from "../actions/databaseActions";
import {connect} from "react-redux";
import {translations} from "../utils/translations";
export class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expr: ""
        };

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e) {
        this.setState({[e.target.name] : e.target.value}, () => {
            this.props.search(this.state.expr)
        });

    }

    render() {
        return (
            <div>
                <Input bsSize="sm" type="text" id="searchBar" name="expr" placeholder={translations[this.props.language.code].sideBar.searchPh} value={this.state.expr} onChange={this.handleChange}/>
            </div>
        )

    }
}

const mapStateToProps = store => {
    return {
        language: store.settings.language
    }
};

const mapDispatchToProps = dispatch => ({
    search(expr) {dispatch(search(expr))}
});


export default connect(mapStateToProps, mapDispatchToProps) (SearchBar);