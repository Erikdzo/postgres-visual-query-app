import React, {Component} from 'react';
import {Input} from "reactstrap";
import {search} from "../actions/databaseActions";
import {connect} from "react-redux";

class SearchBar extends Component {

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
                <Input bsSize="sm" type="text" id="searchBar" name="expr" placeholder="Search" value={this.state.expr} onChange={this.handleChange}/>
            </div>
        )

    }
}

const mapDispatchToProps = dispatch => ({
    search(expr) {dispatch(search(expr))}
});


export default connect(null, mapDispatchToProps) (SearchBar);