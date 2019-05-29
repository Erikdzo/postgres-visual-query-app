
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
            formSubmit: "Connect"
        },
        sideBar: {
            disconnectB: "Disconnect",
            tablesH: "Tables",
            schemaH: "Schema",
            searchPh: "Search"
        },
        queryBuilder: {
            queryB: "Query",
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
            filterPh: "Filter ex. table_name > 10",
            functionPh: "Function ( Aggregate ex. SUM; row level ex. Upper)",
            conditionH: "Add condition",
            joinMainTable: "Select table",
            joinConditionMainColumn: "Select column",
            joinConditionSecondaryTable: "Select table",
            joinConditionSecondaryColumn: "Select column"
        },
        tooltips: {
            invalidFilter: "Invalid filter condition"
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
            formSubmit: "Ühenda"
        },
        sideBar: {
            disconnectB: "Välju",
            tablesH: "Tabelid",
            schemaH: "Skeem",
            searchPh: "Otsi"
        },
        queryBuilder: {
            queryB: "Käivita",
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
            filterPh: "Piirang nt. table_name > 10",
            functionPh: "Funktsioon ( Kokkuvõtte nt. SUM; reataseme nt. Upper)",
            conditionH: "Lisa tingimus",
            joinMainTable: "Vali tabel",
            joinConditionMainColumn: "Vali veerg",
            joinConditionSecondaryTable: "Vali tabel",
            joinConditionSecondaryColumn: "Vali veerg"
        },
        tooltips: {
            invalidFilter: "Kehtetud tingimuse sisu"
        }
    }
};

export const languages = [
    {code: "eng", name: "English"},
    {code: "est", name: "Eesti"}
];