import * as actions from "../../actions/queryActions";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import moxios from 'moxios';
import axiosClient from "../../utils/axiosClient";

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);

const INITIAL_STATE = {
    columns: [],
    tables: [],
    distinct: false,
    sql: "",
    result: null,
    joins: [],
    error: null
};

describe('query actions', () => {
    let store;

    // set up a fake store for all our tests
    beforeEach(() => {
        store = mockStore(INITIAL_STATE);

        moxios.install(axiosClient)
    });
    afterEach(() => moxios.uninstall(axiosClient));

    test('should create an action to delete query', () => {


        const action = {
            type: actions.DELETE_QUERY
        };

        store.dispatch(actions.deleteQuery());

        expect(store.getActions()).toContainEqual(action)

    });

    test('should create an action to add column', () => {


        const actionList = [
            {
                type: actions.ADD_COLUMN,
                payload: {}
            },
            {
                type: actions.GENERATE_SQL
            }
        ];
        store.dispatch(actions.addColumn({}));

        expect(store.getActions()).toContainEqual(actionList[0]);

        expect(store.getActions()).toContainEqual(actionList[1])
    });

    test('should create an action to switch distinct', () => {
        const actionList = [
            {
                type: actions.SWITCH_DISTINCT
            },
            {
                type: actions.GENERATE_SQL
            }
        ];
        store.dispatch(actions.switchDistinct());

        expect(store.getActions()).toContainEqual(actionList[0]);

        expect(store.getActions()).toContainEqual(actionList[1]);
    });

    test('should create an action to add table', () => {
        const actionList = [
            {
                type: actions.ADD_TABLE,
                payload: {}
            },
            {
                type: actions.GENERATE_SQL
            }
        ];
        store.dispatch(actions.addTable({}));

        expect(store.getActions()).toContainEqual(actionList[0]);

        expect(store.getActions()).toContainEqual(actionList[1]);
    });

    test('should create an action to remove table', () => {
        const actionList = [
            {
                type: actions.REMOVE_TABLE,
                payload: {}
            },
            {
                type: actions.GENERATE_SQL
            }
        ];
        store.dispatch(actions.removeTable({}));

        expect(store.getActions()).toContainEqual(actionList[0]);

        expect(store.getActions()).toContainEqual(actionList[1]);
    });

    test('should create an action to update column', () => {
        const actionList = [
            {
                type: actions.UPDATE_COLUMN,
                payload: {}
            },
            {
                type: actions.GENERATE_SQL
            }
        ];
        store.dispatch(actions.updateColumn({}));

        expect(store.getActions()).toContainEqual(actionList[0]);

        expect(store.getActions()).toContainEqual(actionList[1]);
    });

    test('should create an action to update columns order', () => {
        const actionList = [
            {
                type: actions.UPDATE_COLUMNS_ORDER,
                payload: []
            },
            {
                type: actions.GENERATE_SQL
            }
        ];
        store.dispatch(actions.updateColumnsOrder([]));

        expect(store.getActions()).toContainEqual(actionList[0]);

        expect(store.getActions()).toContainEqual(actionList[1]);
    });

    test('should create an action to update table', () => {
        const actionList = [
            {
                type: actions.UPDATE_TABLE,
                payload: {}
            },
            {
                type: actions.GENERATE_SQL
            }
        ];
        store.dispatch(actions.updateTable({}));

        expect(store.getActions()).toContainEqual(actionList[0]);

        expect(store.getActions()).toContainEqual(actionList[1]);
    });

    test('should create an action to update joins order', () => {
        const actionList = [
            {
                type: actions.UPDATE_JOINS_ORDER,
                payload: []
            },
            {
                type: actions.GENERATE_SQL
            }
        ];
        store.dispatch(actions.updateJoinsOrder([]));

        expect(store.getActions()).toContainEqual(actionList[0]);

        expect(store.getActions()).toContainEqual(actionList[1]);
    });

    test('should create an action to add join', () => {
        const action = {
                type: actions.ADD_JOIN
            };
        store.dispatch(actions.addJoin({}));

        expect(store.getActions()).toContainEqual(action);

    });

    test('should create an action to update join', () => {
        const actionList = [
            {
                type: actions.UPDATE_JOIN,
                payload: {}
            },
            {
                type: actions.GENERATE_SQL
            }
        ];
        store.dispatch(actions.updateJoin({}));

        expect(store.getActions()).toContainEqual(actionList[0]);

        expect(store.getActions()).toContainEqual(actionList[1]);
    });

    test('should create an action to remove join', () => {
        const actionList = [
            {
                type: actions.REMOVE_JOIN,
                payload: {}
            },
            {
                type: actions.GENERATE_SQL
            }
        ];
        store.dispatch(actions.removeJoin({}));

        expect(store.getActions()).toContainEqual(actionList[0]);

        expect(store.getActions()).toContainEqual(actionList[1]);
    });

    test('should create an action to remove column', () => {
        const actionList = [
            {
                type: actions.REMOVE_COLUMN,
                payload: {}
            },
            {
                type: actions.GENERATE_SQL
            }
        ];
        store.dispatch(actions.removeColumn({}));

        expect(store.getActions()).toContainEqual(actionList[0]);

        expect(store.getActions()).toContainEqual(actionList[1]);
    });

    test('should create an action to query database', (done) => {
        const action = {
                type: actions.ADD_RESULT,
                payload: {}
            };

        store.dispatch(actions.queryAction({})).then(() => {
            expect(store.getActions()).toContainEqual(action);
        });

        done();
    });
});