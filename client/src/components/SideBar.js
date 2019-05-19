import React from 'react';
import LanguageSwitcher from "../containers/LanguageSwitcher";
import DisconnectButton from "../containers/DisconnectButton";
import DatabaseViewer from "../containers/DatabaseViewer";
import SchemaSelector from "../containers/SchemaSelector";
import SearchBar from "../containers/SearchBar";

const SideBar = () => {
    return (
        <div className="d-flex flex-column w-100">
            <div className="">
                <LanguageSwitcher/>
                <DisconnectButton/>
            </div>

            <SchemaSelector/>
            <SearchBar/>

            <h5 className="mt-2">Tables</h5>
            <div className="d-flex flex-fill">
                <DatabaseViewer/>
            </div>





        </div>
    )
};

export default SideBar