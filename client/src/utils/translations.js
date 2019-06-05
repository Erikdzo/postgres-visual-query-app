
// L - Lable, Ph - placeholder, H - header

export const translations = {
    eng: {
        loginForm: {
            formHeader: "Connect to database",
            serverL: "Server",
            serverPh: "Enter server address",
            portL: "Port",
            portPh: "Enter server port",
            databaseL: "Database",
            databasePh: "Enter database name",
            usernameL: "Username",
            usernamePh: "Enter username",
            passwordL: "Password",
            passwordPh: "Enter password",
            formSubmit: "Connect",
            connecting: "Connecting"
        },
        sideBar: {
            disconnectB: "Disconnect",
            tablesH: "Tables",
            schemaH: "Schema",
            searchPh: "Search"
        },
        queryBuilder: {
            queryB: "Query",
            querying: "Querying",
            tablesH: "Tables",
            columnsH: "Columns",
            joinsH: "Joins",
            resultH: "Result",
            aliasH: "Alias",
            foreignKeyH: "Foreign key references",
            tableTh: "Table",
            schemaTh: "Schema",
            columnTh: "Column/columns",
            aliasPh: "Alias",
            filterPh: "Filter",
            conditionH: "Add condition",
            joinMainTable: "Select table",
            joinConditionMainColumn: "Select column",
            joinConditionSecondaryTable: "Select table",
            joinConditionSecondaryColumn: "Select column",
            selectFunction: "Select function",
            addJoin: "Add join",
            joinResult: "result of previous join"
        },
        tooltips: {
            invalidFilter: "Invalid filter condition",
            copyColumn: "Copy column",
            removeColumn: "Remove column",
            removeJoin: "Remove join",
            joinType: "Join type",
            copyTable: "Copy table",
            removeTable: "Remove table",
            columnAlias: "Rename column",
            columnFilter: "Example: "
        }
    },
    est: {
        loginForm: {
            formHeader: "Ühenda andmebaasiga",
            serverL: "Server",
            serverPh: "Sisesta serveri aadress",
            portL: "Port",
            portPh: "Sisesta serveri port",
            databaseL: "Andmebaas",
            databasePh: "Sisesta andmebaasi nimi",
            usernameL: "Kasutajanimi",
            usernamePh: "Sisesta kasutajanimi",
            passwordL: "Parool",
            passwordPh: "Sisesta parool",
            formSubmit: "Sisene",
            connecting: "Sisenen"
        },
        sideBar: {
            disconnectB: "Välju",
            tablesH: "Tabelid",
            schemaH: "Skeem",
            searchPh: "Otsi"
        },
        queryBuilder: {
            queryB: "Käivita",
            querying: "Käivitan",
            tablesH: "Tabelid",
            columnsH: "Veerud",
            joinsH: "Ühendused",
            resultH: "Tulemus",
            aliasH: "Alias",
            foreignKeyH: "Välisvõtmete viited",
            tableTh: "Tabel",
            schemaTh: "Skeem",
            columnTh: "Veerg/veerud",
            aliasPh: "Alias",
            filterPh: "Piirang",
            conditionH: "Tingimuse lisamine",
            joinMainTable: "Tabeli valimine",
            joinConditionMainColumn: "Veeru valimine",
            joinConditionSecondaryTable: "Tabeli valimine",
            joinConditionSecondaryColumn: "Veeru valimine",
            selectFunction: "Funktsiooni valimine",
            addJoin: "Ühenduse lisamine",
            joinResult: "eelmise ühenduse tulemus"

        },
        tooltips: {
            invalidFilter: "Kehtetud tingimuse sisu",
            copyColumn: "Veeru kopeerimine",
            removeColumn: "Veeru eemaldamine",
            removeJoin: "Ühenduse eemaldamine",
            joinType: "Ühenduse tüüp",
            copyTable: "Tabeli kopeerimine",
            removeTable: "Tabeli eemaldamine",
            columnAlias: "Veeru ümbernimetamine",
            columnFilter: "Näide: ",
        }
    }
};

export const languages = [
    {code: "eng", name: "English"},
    {code: "est", name: "Eesti"}
];