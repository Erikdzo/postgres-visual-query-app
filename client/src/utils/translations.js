
// L - Lable, Ph - placeholder, H - header

export const translations = {
    eng: {
        landingPage: {
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
        queryPage: {
            queryB: "Query",
            tablesH: "Tables",
            columnsH: "Columns",
            disconnectB: "Disconnect"
        }
    },
    est: {
        landingPage: {
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
        queryPage: {
            queryB: "Päri",
            tablesH: "Tabelid",
            columnsH: "Veerud",
            disconnectB: "Katkesta"
        }
    }
};

export const languages = [
    {code: "eng", name: "English"},
    {code: "est", name: "Eesti"}
];