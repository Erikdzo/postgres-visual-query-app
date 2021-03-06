export const testData1 = {
    "columns": [{
        "column_name": "amet_kood",
        "ordinal_position": 1,
        "data_type": "smallint",
        "constraints": [{
            "constraint_name": "pk_amet",
            "constraint_type": "PRIMARY KEY",
            "column_name": "{amet_kood}",
            "foreign_table_schema": null,
            "foreign_table_name": null,
            "foreign_column_name": null
        }],
        "table_name": "amet",
        "table_schema": "public",
        "table_alias": "",
        "table_id": 1,
        "id": 1,
        "column_alias": "",
        "column_filter": "",
        "column_aggregate": "",
        "column_distinct_on": false,
        "column_order": false,
        "column_order_dir": true,
        "column_group_by": false,
        "display_in_query": true
    }, {
        "column_name": "nimetus",
        "ordinal_position": 2,
        "data_type": "character varying",
        "constraints": [{
            "constraint_name": "ak_amet_nimetus",
            "constraint_type": "UNIQUE",
            "column_name": "{nimetus}",
            "foreign_table_schema": null,
            "foreign_table_name": null,
            "foreign_column_name": null
        }],
        "table_name": "amet",
        "table_schema": "public",
        "table_alias": "",
        "table_id": 1,
        "id": 2,
        "column_alias": "",
        "column_filter": "",
        "column_aggregate": "",
        "column_distinct_on": false,
        "column_order": false,
        "column_order_dir": true,
        "column_group_by": false,
        "display_in_query": true
    }, {
        "column_name": "kirjeldus",
        "ordinal_position": 3,
        "data_type": "text",
        "constraints": [],
        "table_name": "amet",
        "table_schema": "public",
        "table_alias": "",
        "table_id": 1,
        "id": 3,
        "column_alias": "",
        "column_filter": "",
        "column_aggregate": "",
        "column_distinct_on": false,
        "column_order": false,
        "column_order_dir": true,
        "column_group_by": false,
        "display_in_query": true
    }],
    "tables": [{
        "table_schema": "public",
        "table_name": "amet",
        "table_type": "BASE TABLE",
        "table_alias": "",
        "columns": [{
            "column_name": "amet_kood",
            "ordinal_position": 1,
            "data_type": "smallint",
            "constraints": [{
                "constraint_name": "pk_amet",
                "constraint_type": "PRIMARY KEY",
                "column_name": "{amet_kood}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "amet",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "nimetus",
            "ordinal_position": 2,
            "data_type": "character varying",
            "constraints": [{
                "constraint_name": "ak_amet_nimetus",
                "constraint_type": "UNIQUE",
                "column_name": "{nimetus}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "amet",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "kirjeldus",
            "ordinal_position": 3,
            "data_type": "text",
            "constraints": [],
            "table_name": "amet",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }],
        "id": 1
    }],
    "distinct": false,
    "sql": "SELECT\namet.amet_kood, amet.nimetus\nFROM public.amet;",
    "result": null,
    "joins": [],
    "error": null,
    "lastColumnId": 3,
    "lastTableId": 1,
    "querying": false
};

export const testData2 = {
    "columns": [{
        "column_name": "isik_id",
        "ordinal_position": 1,
        "data_type": "integer",
        "constraints": [{
            "constraint_name": "pk_isik",
            "constraint_type": "PRIMARY KEY",
            "column_name": "{isik_id}",
            "foreign_table_schema": null,
            "foreign_table_name": null,
            "foreign_column_name": null
        }],
        "table_name": "isik",
        "table_schema": "public",
        "table_alias": "",
        "table_id": 1,
        "id": 1,
        "column_alias": "",
        "column_filter": "",
        "column_aggregate": "",
        "column_distinct_on": false,
        "column_order": false,
        "column_order_dir": true,
        "column_group_by": false,
        "display_in_query": true
    }, {
        "column_name": "riik_kood",
        "ordinal_position": 2,
        "data_type": "character varying",
        "constraints": [{
            "constraint_name": "fk_isik_riik",
            "constraint_type": "FOREIGN KEY",
            "column_name": "{riik_kood}",
            "foreign_table_schema": "public",
            "foreign_table_name": "riik",
            "foreign_column_name": "{riik_kood}"
        }, {
            "constraint_name": "ak_isik_riigi_kood_koos_isikukoodiga",
            "constraint_type": "UNIQUE",
            "column_name": "{riik_kood,isikukood}",
            "foreign_table_schema": null,
            "foreign_table_name": null,
            "foreign_column_name": null
        }],
        "table_name": "isik",
        "table_schema": "public",
        "table_alias": "",
        "table_id": 1,
        "id": 2,
        "column_alias": "",
        "column_filter": "",
        "column_aggregate": "",
        "column_distinct_on": false,
        "column_order": false,
        "column_order_dir": true,
        "column_group_by": false,
        "display_in_query": true
    }],
    "tables": [{
        "table_schema": "public",
        "table_name": "isik",
        "table_type": "BASE TABLE",
        "table_alias": "",
        "columns": [{
            "column_name": "isik_id",
            "ordinal_position": 1,
            "data_type": "integer",
            "constraints": [{
                "constraint_name": "pk_isik",
                "constraint_type": "PRIMARY KEY",
                "column_name": "{isik_id}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "riik_kood",
            "ordinal_position": 2,
            "data_type": "character varying",
            "constraints": [{
                "constraint_name": "fk_isik_riik",
                "constraint_type": "FOREIGN KEY",
                "column_name": "{riik_kood}",
                "foreign_table_schema": "public",
                "foreign_table_name": "riik",
                "foreign_column_name": "{riik_kood}"
            }, {
                "constraint_name": "ak_isik_riigi_kood_koos_isikukoodiga",
                "constraint_type": "UNIQUE",
                "column_name": "{riik_kood,isikukood}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "isiku_seisundi_liik_kood",
            "ordinal_position": 3,
            "data_type": "smallint",
            "constraints": [{
                "constraint_name": "fk_isik_isiku_seisundi_liik",
                "constraint_type": "FOREIGN KEY",
                "column_name": "{isiku_seisundi_liik_kood}",
                "foreign_table_schema": "public",
                "foreign_table_name": "isiku_seisundi_liik",
                "foreign_column_name": "{isiku_seisundi_liik_kood}"
            }],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "isikukood",
            "ordinal_position": 4,
            "data_type": "character varying",
            "constraints": [{
                "constraint_name": "ak_isik_riigi_kood_koos_isikukoodiga",
                "constraint_type": "UNIQUE",
                "column_name": "{riik_kood,isikukood}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "e_meil",
            "ordinal_position": 5,
            "data_type": "character varying",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "parool",
            "ordinal_position": 6,
            "data_type": "character varying",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "synni_kp",
            "ordinal_position": 7,
            "data_type": "date",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "reg_aeg",
            "ordinal_position": 8,
            "data_type": "timestamp without time zone",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "eesnimi",
            "ordinal_position": 9,
            "data_type": "character varying",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "perenimi",
            "ordinal_position": 10,
            "data_type": "character varying",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "elukoht",
            "ordinal_position": 11,
            "data_type": "character varying",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }],
        "id": 1
    }, {
        "table_schema": "public",
        "table_name": "isiku_seisundi_liik",
        "table_type": "BASE TABLE",
        "table_alias": "",
        "columns": [{
            "column_name": "isiku_seisundi_liik_kood",
            "ordinal_position": 1,
            "data_type": "smallint",
            "constraints": [{
                "constraint_name": "pk_isiku_seisundi_liik",
                "constraint_type": "PRIMARY KEY",
                "column_name": "{isiku_seisundi_liik_kood}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "isiku_seisundi_liik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 2
        }, {
            "column_name": "nimetus",
            "ordinal_position": 2,
            "data_type": "character varying",
            "constraints": [{
                "constraint_name": "ak_isiku_seisundi_liik_nimetus",
                "constraint_type": "UNIQUE",
                "column_name": "{nimetus}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "isiku_seisundi_liik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 2
        }],
        "id": 2
    }],
    "distinct": false,
    "sql": "SELECT\nisik.isik_id\nFROM public.isik\nINNER JOIN public.isiku_seisundi_liik ON (isiku_seisundi_liik.isiku_seisundi_liik_kood =\n             isik.isiku_seisundi_liik_kood);",
    "result": null,
    "joins": [{
        "id": 0,
        "type": "inner",
        "color": "#d65779",
        "main_table": {
            "table_schema": "public",
            "table_name": "isiku_seisundi_liik",
            "table_type": "BASE TABLE",
            "table_alias": "",
            "columns": [{
                "column_name": "isiku_seisundi_liik_kood",
                "ordinal_position": 1,
                "data_type": "smallint",
                "constraints": [{
                    "constraint_name": "pk_isiku_seisundi_liik",
                    "constraint_type": "PRIMARY KEY",
                    "column_name": "{isiku_seisundi_liik_kood}",
                    "foreign_table_schema": null,
                    "foreign_table_name": null,
                    "foreign_column_name": null
                }],
                "table_name": "isiku_seisundi_liik",
                "table_schema": "public",
                "table_alias": "",
                "table_id": 2
            }, {
                "column_name": "nimetus",
                "ordinal_position": 2,
                "data_type": "character varying",
                "constraints": [{
                    "constraint_name": "ak_isiku_seisundi_liik_nimetus",
                    "constraint_type": "UNIQUE",
                    "column_name": "{nimetus}",
                    "foreign_table_schema": null,
                    "foreign_table_name": null,
                    "foreign_column_name": null
                }],
                "table_name": "isiku_seisundi_liik",
                "table_schema": "public",
                "table_alias": "",
                "table_id": 2
            }],
            "id": 2
        },
        "conditions": [{
            "id": 0,
            "main_column": "isiku_seisundi_liik_kood",
            "secondary_table": {
                "table_schema": "public",
                "table_name": "isik",
                "table_type": "BASE TABLE",
                "table_alias": "",
                "columns": [{
                    "column_name": "isik_id",
                    "ordinal_position": 1,
                    "data_type": "integer",
                    "constraints": [{
                        "constraint_name": "pk_isik",
                        "constraint_type": "PRIMARY KEY",
                        "column_name": "{isik_id}",
                        "foreign_table_schema": null,
                        "foreign_table_name": null,
                        "foreign_column_name": null
                    }],
                    "table_name": "isik",
                    "table_schema": "public",
                    "table_alias": "",
                    "table_id": 1
                }, {
                    "column_name": "riik_kood",
                    "ordinal_position": 2,
                    "data_type": "character varying",
                    "constraints": [{
                        "constraint_name": "fk_isik_riik",
                        "constraint_type": "FOREIGN KEY",
                        "column_name": "{riik_kood}",
                        "foreign_table_schema": "public",
                        "foreign_table_name": "riik",
                        "foreign_column_name": "{riik_kood}"
                    }, {
                        "constraint_name": "ak_isik_riigi_kood_koos_isikukoodiga",
                        "constraint_type": "UNIQUE",
                        "column_name": "{riik_kood,isikukood}",
                        "foreign_table_schema": null,
                        "foreign_table_name": null,
                        "foreign_column_name": null
                    }],
                    "table_name": "isik",
                    "table_schema": "public",
                    "table_alias": "",
                    "table_id": 1
                }, {
                    "column_name": "isiku_seisundi_liik_kood",
                    "ordinal_position": 3,
                    "data_type": "smallint",
                    "constraints": [{
                        "constraint_name": "fk_isik_isiku_seisundi_liik",
                        "constraint_type": "FOREIGN KEY",
                        "column_name": "{isiku_seisundi_liik_kood}",
                        "foreign_table_schema": "public",
                        "foreign_table_name": "isiku_seisundi_liik",
                        "foreign_column_name": "{isiku_seisundi_liik_kood}"
                    }],
                    "table_name": "isik",
                    "table_schema": "public",
                    "table_alias": "",
                    "table_id": 1
                }, {
                    "column_name": "isikukood",
                    "ordinal_position": 4,
                    "data_type": "character varying",
                    "constraints": [{
                        "constraint_name": "ak_isik_riigi_kood_koos_isikukoodiga",
                        "constraint_type": "UNIQUE",
                        "column_name": "{riik_kood,isikukood}",
                        "foreign_table_schema": null,
                        "foreign_table_name": null,
                        "foreign_column_name": null
                    }],
                    "table_name": "isik",
                    "table_schema": "public",
                    "table_alias": "",
                    "table_id": 1
                }, {
                    "column_name": "e_meil",
                    "ordinal_position": 5,
                    "data_type": "character varying",
                    "constraints": [],
                    "table_name": "isik",
                    "table_schema": "public",
                    "table_alias": "",
                    "table_id": 1
                }, {
                    "column_name": "parool",
                    "ordinal_position": 6,
                    "data_type": "character varying",
                    "constraints": [],
                    "table_name": "isik",
                    "table_schema": "public",
                    "table_alias": "",
                    "table_id": 1
                }, {
                    "column_name": "synni_kp",
                    "ordinal_position": 7,
                    "data_type": "date",
                    "constraints": [],
                    "table_name": "isik",
                    "table_schema": "public",
                    "table_alias": "",
                    "table_id": 1
                }, {
                    "column_name": "reg_aeg",
                    "ordinal_position": 8,
                    "data_type": "timestamp without time zone",
                    "constraints": [],
                    "table_name": "isik",
                    "table_schema": "public",
                    "table_alias": "",
                    "table_id": 1
                }, {
                    "column_name": "eesnimi",
                    "ordinal_position": 9,
                    "data_type": "character varying",
                    "constraints": [],
                    "table_name": "isik",
                    "table_schema": "public",
                    "table_alias": "",
                    "table_id": 1
                }, {
                    "column_name": "perenimi",
                    "ordinal_position": 10,
                    "data_type": "character varying",
                    "constraints": [],
                    "table_name": "isik",
                    "table_schema": "public",
                    "table_alias": "",
                    "table_id": 1
                }, {
                    "column_name": "elukoht",
                    "ordinal_position": 11,
                    "data_type": "character varying",
                    "constraints": [],
                    "table_name": "isik",
                    "table_schema": "public",
                    "table_alias": "",
                    "table_id": 1
                }],
                "id": 1
            },
            "secondary_column": "isiku_seisundi_liik_kood"
        }]
    }],
    "error": null,
    "lastColumnId": 2,
    "lastTableId": 2,
    "querying": false
};

export const testData3 = {
    "columns": [{
        "column_name": "isik_id",
        "ordinal_position": 1,
        "data_type": "integer",
        "constraints": [{
            "constraint_name": "pk_isik",
            "constraint_type": "PRIMARY KEY",
            "column_name": "{isik_id}",
            "foreign_table_schema": null,
            "foreign_table_name": null,
            "foreign_column_name": null
        }],
        "table_name": "isik",
        "table_schema": "public",
        "table_alias": "",
        "table_id": 1,
        "id": 1,
        "column_alias": "",
        "column_filter": "",
        "column_aggregate": "",
        "column_distinct_on": false,
        "column_order": false,
        "column_order_dir": true,
        "column_group_by": false,
        "display_in_query": true
    }, {
        "column_name": "riik_kood",
        "ordinal_position": 2,
        "data_type": "character varying",
        "constraints": [{
            "constraint_name": "fk_isik_riik",
            "constraint_type": "FOREIGN KEY",
            "column_name": "{riik_kood}",
            "foreign_table_schema": "public",
            "foreign_table_name": "riik",
            "foreign_column_name": "{riik_kood}"
        }, {
            "constraint_name": "ak_isik_riigi_kood_koos_isikukoodiga",
            "constraint_type": "UNIQUE",
            "column_name": "{riik_kood,isikukood}",
            "foreign_table_schema": null,
            "foreign_table_name": null,
            "foreign_column_name": null
        }],
        "table_name": "isik",
        "table_schema": "public",
        "table_alias": "",
        "table_id": 1,
        "id": 2,
        "column_alias": "",
        "column_filter": "",
        "column_aggregate": "",
        "column_distinct_on": false,
        "column_order": false,
        "column_order_dir": true,
        "column_group_by": false,
        "display_in_query": true
    }],
    "tables": [{
        "table_schema": "public",
        "table_name": "isik",
        "table_type": "BASE TABLE",
        "table_alias": "",
        "columns": [{
            "column_name": "isik_id",
            "ordinal_position": 1,
            "data_type": "integer",
            "constraints": [{
                "constraint_name": "pk_isik",
                "constraint_type": "PRIMARY KEY",
                "column_name": "{isik_id}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "riik_kood",
            "ordinal_position": 2,
            "data_type": "character varying",
            "constraints": [{
                "constraint_name": "fk_isik_riik",
                "constraint_type": "FOREIGN KEY",
                "column_name": "{riik_kood}",
                "foreign_table_schema": "public",
                "foreign_table_name": "riik",
                "foreign_column_name": "{riik_kood}"
            }, {
                "constraint_name": "ak_isik_riigi_kood_koos_isikukoodiga",
                "constraint_type": "UNIQUE",
                "column_name": "{riik_kood,isikukood}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "isiku_seisundi_liik_kood",
            "ordinal_position": 3,
            "data_type": "smallint",
            "constraints": [{
                "constraint_name": "fk_isik_isiku_seisundi_liik",
                "constraint_type": "FOREIGN KEY",
                "column_name": "{isiku_seisundi_liik_kood}",
                "foreign_table_schema": "public",
                "foreign_table_name": "isiku_seisundi_liik",
                "foreign_column_name": "{isiku_seisundi_liik_kood}"
            }],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "isikukood",
            "ordinal_position": 4,
            "data_type": "character varying",
            "constraints": [{
                "constraint_name": "ak_isik_riigi_kood_koos_isikukoodiga",
                "constraint_type": "UNIQUE",
                "column_name": "{riik_kood,isikukood}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "e_meil",
            "ordinal_position": 5,
            "data_type": "character varying",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "parool",
            "ordinal_position": 6,
            "data_type": "character varying",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "synni_kp",
            "ordinal_position": 7,
            "data_type": "date",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "reg_aeg",
            "ordinal_position": 8,
            "data_type": "timestamp without time zone",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "eesnimi",
            "ordinal_position": 9,
            "data_type": "character varying",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "perenimi",
            "ordinal_position": 10,
            "data_type": "character varying",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "elukoht",
            "ordinal_position": 11,
            "data_type": "character varying",
            "constraints": [],
            "table_name": "isik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }],
        "id": 1
    }, {
        "table_schema": "public",
        "table_name": "isiku_seisundi_liik",
        "table_type": "BASE TABLE",
        "table_alias": "",
        "columns": [{
            "column_name": "isiku_seisundi_liik_kood",
            "ordinal_position": 1,
            "data_type": "smallint",
            "constraints": [{
                "constraint_name": "pk_isiku_seisundi_liik",
                "constraint_type": "PRIMARY KEY",
                "column_name": "{isiku_seisundi_liik_kood}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "isiku_seisundi_liik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 2
        }, {
            "column_name": "nimetus",
            "ordinal_position": 2,
            "data_type": "character varying",
            "constraints": [{
                "constraint_name": "ak_isiku_seisundi_liik_nimetus",
                "constraint_type": "UNIQUE",
                "column_name": "{nimetus}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "isiku_seisundi_liik",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 2
        }],
        "id": 2
    }],
    "distinct": false,
    "sql": "SELECT\nisik.isik_id, isik.riik_kood\nFROM public.isik\nCROSS JOIN public.isiku_seisundi_liik ON (isiku_seisundi_liik.isiku_seisundi_liik_kood =\n             isik.isiku_seisundi_liik_kood);",
    "result": null,
    "joins": [{
        "id": 0,
        "type": "cross",
        "color": "#d65779",
        "main_table": {
            "table_schema": "public",
            "table_name": "isiku_seisundi_liik",
            "table_type": "BASE TABLE",
            "table_alias": "",
            "columns": [{
                "column_name": "isiku_seisundi_liik_kood",
                "ordinal_position": 1,
                "data_type": "smallint",
                "constraints": [{
                    "constraint_name": "pk_isiku_seisundi_liik",
                    "constraint_type": "PRIMARY KEY",
                    "column_name": "{isiku_seisundi_liik_kood}",
                    "foreign_table_schema": null,
                    "foreign_table_name": null,
                    "foreign_column_name": null
                }],
                "table_name": "isiku_seisundi_liik",
                "table_schema": "public",
                "table_alias": "",
                "table_id": 2
            }, {
                "column_name": "nimetus",
                "ordinal_position": 2,
                "data_type": "character varying",
                "constraints": [{
                    "constraint_name": "ak_isiku_seisundi_liik_nimetus",
                    "constraint_type": "UNIQUE",
                    "column_name": "{nimetus}",
                    "foreign_table_schema": null,
                    "foreign_table_name": null,
                    "foreign_column_name": null
                }],
                "table_name": "isiku_seisundi_liik",
                "table_schema": "public",
                "table_alias": "",
                "table_id": 2
            }],
            "id": 2
        },
        "conditions": [{
            "id": 0,
            "main_column": "isiku_seisundi_liik_kood",
            "secondary_table": {"table_schema": "", "table_name": "", "table_alias": ""},
            "secondary_column": ""
        }]
    }],
    "error": null,
    "lastColumnId": 2,
    "lastTableId": 2,
    "querying": false
};