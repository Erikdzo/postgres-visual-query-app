import * as queryBuilder from '../../utils/queryBuilder';
import {testData1} from "./testData";

describe('query builder', () => {

    test('add columns', () => {
        const query = queryBuilder.buildQuery(testData1);
        const expected = "SELECT\n" +
            "amet.amet_kood, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet;";

        expect(query).toEqual(expected);
    });

    test('column name escaped correctly', () => {
        let data = testData1;

        data.columns[0].column_name = "Amet_kood";

        const expected = "SELECT\n" +
            "amet.\"Amet_kood\", amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet;";

        const query = queryBuilder.buildQuery(data);

        expect(query).toEqual(expected)
    });

    test('column table escaped correctly', () => {
        let data = testData1;

        data.columns[0].table_name = "Amet";
        data.columns[1].table_name = "\"asd";
        data.tables[0].table_name = "Amet";

        const expected = "SELECT\n" +
            "\"Amet\".amet_kood, \"\"\"asd\".nimetus, amet.kirjeldus\n" +
            "FROM public.\"Amet\";";

        const query = queryBuilder.buildQuery(data);

        expect(query).toEqual(expected)
    })
});