import React from 'react';
import LanguageSwitcher from "../containers/LanguageSwitcher";
import DisconnectButton from "../containers/DisconnectButton";
import DatabaseViewer from "../containers/DatabaseViewer";
import SchemaSelector from "../containers/SchemaSelector";
import SearchBar from "../containers/SearchBar";
import {translations} from "../utils/translations";
import {connect} from "react-redux";

const SideBar = (props) => {
    return (
        <div className="d-flex flex-column w-100">
            <div className="">
                <LanguageSwitcher/>
                <DisconnectButton/>
            </div>

            <SchemaSelector/>
            <SearchBar/>

            <h5 className="mt-2">{translations[props.language.code].sideBar.tablesH}</h5>
            <div className="d-flex flex-fill">
                <DatabaseViewer/>
            </div>

        </div>
    )
};

const mapStateToProps = store => {
    return {
        language: store.settings.language
    }
};

export default connect(mapStateToProps) (SideBar)