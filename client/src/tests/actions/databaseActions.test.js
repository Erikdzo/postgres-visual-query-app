import * as actions from '../../actions/databaseActions';


describe('database actions', () => {
    test('should create an action to update search expression', () => {
        const expr = "#BASE_TABLE";

        const action = {
            type: actions.UPDATE_SEARCH_EXPR,
            payload: expr
        };
        const fn = actions.search(expr);

        fn((receivedAction) => {
            expect(receivedAction).toEqual(action)
        })
    });

    test('should create an action to change selected schema', () => {
        const schema = "public";

        const action = {
            type: actions.CHANGE_SELECTED_SCHEMA,
            payload: schema
        };
        const fn = actions.changeSelectedSchema(schema);

        fn((receivedAction) => {
            expect(receivedAction).toEqual(action)
        })
    });

    test('should create an action to connect to database', () => {
        const payload = [];

        const actionList = [
            {
                type: actions.ADD_TABLES,
                payload: payload
            },
            {
                type: actions.ADD_COLUMNS,
                payload: payload
            },
            {
                type: actions.ADD_CONSTRAINTS,
                payload: payload
            }
        ];
        const fn = actions.connectToDatabase(payload);

        fn((receivedAction) => {
            expect(receivedAction).toEqual(actionList)
        })
    })
});