import * as queryBuilder from '../../utils/queryBuilder';
import {testData1, testData2, testData3} from "./testData";
import _ from 'lodash';


describe('query builder', () => {

    test('add columns', () => {
        let data = _.cloneDeep(testData1);
        const query = queryBuilder.buildQuery(data);
        const expected = "SELECT\n" +
            "amet.amet_kood, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet;";

        expect(query).toEqual(expected);
    });

    test('column name escaped correctly', () => {
        let data = _.cloneDeep(testData1);

        data.columns[0].column_name = "Amet_kood";

        const expected = "SELECT\n" +
            "amet.\"Amet_kood\", amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet;";

        const query = queryBuilder.buildQuery(data);

        expect(query).toEqual(expected)
    });

    test('table escaped correctly', () => {
        let data = _.cloneDeep(testData1);

        data.columns[0].table_name = "Amet";
        data.columns[1].table_name = "\"asd";
        data.tables[0].table_name = "Amet";

        const expected = "SELECT\n" +
            "\"Amet\".amet_kood, \"\"\"asd\".nimetus, amet.kirjeldus\n" +
            "FROM public.\"Amet\";";

        const query = queryBuilder.buildQuery(data);

        expect(query).toEqual(expected)
    });

    test('column add alias and escaped correctly', () => {
        let data = _.cloneDeep(testData1);

        data.columns[0].column_alias = "AsD";

        const expected = "SELECT\n" +
            "amet.amet_kood AS \"AsD\", amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet;";

        const query = queryBuilder.buildQuery(data);

        expect(query).toEqual(expected)
    })

    test('table add alias and escaped correctly', () => {
        let data = _.cloneDeep(testData1);

        data.columns[0].table_alias = "AsD";
        data.tables[0].table_alias = "AsD";
        const expected = "SELECT\n" +
            "\"AsD\".amet_kood, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet AS \"AsD\";";

        const query = queryBuilder.buildQuery(data);

        expect(query).toEqual(expected)
    })

    test('add DISTINCT', () => {
        let data = _.cloneDeep(testData1);

        data.distinct = true;

        const query = queryBuilder.buildQuery(data);
        const expected = "SELECT\n" +
            "DISTINCT\n" +
            "amet.amet_kood, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet;";

        expect(query).toEqual(expected);
    });

    test('add ORDER BY', () => {
        let data = _.cloneDeep(testData1);

        data.columns[0].column_order = true;

        let query = queryBuilder.buildQuery(data);
        let expected = "SELECT\n" +
            "amet.amet_kood, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet\n" +
            "ORDER BY amet.amet_kood ASC;";

        expect(query).toEqual(expected);

        data.columns[0].column_order_dir = false;

        query = queryBuilder.buildQuery(data);
        expected = "SELECT\n" +
            "amet.amet_kood, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet\n" +
            "ORDER BY amet.amet_kood DESC;";

        expect(query).toEqual(expected);

        data.columns[0].table_alias = "qwe";

        query = queryBuilder.buildQuery(data);
        expected = "SELECT\n" +
            "qwe.amet_kood, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet\n" +
            "ORDER BY qwe.amet_kood DESC;";

        expect(query).toEqual(expected);

        data.columns[0].column_alias = "asd";

        query = queryBuilder.buildQuery(data);
        expected = "SELECT\n" +
            "qwe.amet_kood AS asd, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet\n" +
            "ORDER BY asd DESC;";

        expect(query).toEqual(expected);

        data.columns[0].display_in_query = false;

        query = queryBuilder.buildQuery(data);
        expected = "SELECT\n" +
            "amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet\n" +
            "ORDER BY qwe.amet_kood DESC;";

        expect(query).toEqual(expected);
    });

    test('add DISTINCT ON', () => {
        let data = _.cloneDeep(testData1);

        data.columns[0].column_distinct_on = true;

        const query = queryBuilder.buildQuery(data);
        const expected = "SELECT\n" +
            "DISTINCT ON (amet.amet_kood)\n" +
            "amet.amet_kood, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet;";

        expect(query).toEqual(expected);
    });

    test('add function', () => {
        let data = _.cloneDeep(testData1);

        data.columns[0].column_aggregate = "SUM";

        let query = queryBuilder.buildQuery(data);
        let expected = "SELECT\n" +
            "SUM(amet.amet_kood), amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet;";

        expect(query).toEqual(expected);

        data.columns[0].column_alias = "qew";

        query = queryBuilder.buildQuery(data);
        expected = "SELECT\n" +
            "SUM(amet.amet_kood) AS qew, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet;";

        expect(query).toEqual(expected);
        data.columns[0].column_alias = "";
        data.columns[0].table_alias = "asd";

        query = queryBuilder.buildQuery(data);
        expected = "SELECT\n" +
            "SUM(asd.amet_kood), amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet;";

        expect(query).toEqual(expected);

        data.columns[0].column_alias = "qew";

        query = queryBuilder.buildQuery(data);
        expected = "SELECT\n" +
            "SUM(asd.amet_kood) AS qew, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet;";

        expect(query).toEqual(expected);
    });

    test('add GROUP BY', () => {
        let data = _.cloneDeep(testData1);

        data.columns[0].column_group_by = true;

        let query = queryBuilder.buildQuery(data);
        let expected = "SELECT\n" +
            "amet.amet_kood, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet\n" +
            "GROUP BY amet.amet_kood;";

        expect(query).toEqual(expected);

        data.columns[0].column_alias = "asd";

        query = queryBuilder.buildQuery(data);
        expected = "SELECT\n" +
            "amet.amet_kood AS asd, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet\n" +
            "GROUP BY amet.amet_kood;";

        expect(query).toEqual(expected);

        data.columns[0].table_alias = "qwe";

        query = queryBuilder.buildQuery(data);
        expected = "SELECT\n" +
            "qwe.amet_kood AS asd, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet\n" +
            "GROUP BY qwe.amet_kood;";

        expect(query).toEqual(expected);
    });

    test('add filter', () => {
        let data = _.cloneDeep(testData1);

        data.columns[0].column_filter = ":c > 3";

        let query = queryBuilder.buildQuery(data);

        let expected = "SELECT\n" +
            "amet.amet_kood, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet\n" +
            "WHERE (amet.amet_kood > 3);";

        expect(query).toEqual(expected);

        data.columns[0].table_alias = "asd";

        query = queryBuilder.buildQuery(data);

        expected = "SELECT\n" +
            "asd.amet_kood, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet\n" +
            "WHERE (asd.amet_kood > 3);";

        expect(query).toEqual(expected);

        data.columns[0].column_alias = "qwe";

        query = queryBuilder.buildQuery(data);

        expected = "SELECT\n" +
            "asd.amet_kood AS qwe, amet.nimetus, amet.kirjeldus\n" +
            "FROM public.amet\n" +
            "WHERE (asd.amet_kood > 3);";

        expect(query).toEqual(expected);
    });

    test('add join', () => {
        let data = _.cloneDeep(testData2);

        let query = queryBuilder.buildQuery(data);

        let expected = "SELECT\n" +
            "isik.isik_id, isik.riik_kood\n" +
            "FROM public.isik\n" +
            "INNER JOIN public.isiku_seisundi_liik ON (isiku_seisundi_liik.isiku_seisundi_liik_kood =\n" +
            "             isik.isiku_seisundi_liik_kood);";

        expect(query).toEqual(expected);

        data.joins[0].main_table.table_alias = "asd";

        query = queryBuilder.buildQuery(data);

        expected = "SELECT\n" +
            "isik.isik_id, isik.riik_kood\n" +
            "FROM public.isik\n" +
            "INNER JOIN public.isiku_seisundi_liik AS asd ON (asd.isiku_seisundi_liik_kood =\n" +
            "             isik.isiku_seisundi_liik_kood);";

        expect(query).toEqual(expected);

        data.joins[0].conditions[0].secondary_table.table_alias = "qwe";

        query = queryBuilder.buildQuery(data);

        expected = "SELECT\n" +
            "isik.isik_id, isik.riik_kood\n" +
            "FROM public.isik\n" +
            "INNER JOIN public.isiku_seisundi_liik AS asd ON (asd.isiku_seisundi_liik_kood =\n" +
            "             qwe.isiku_seisundi_liik_kood);";

        expect(query).toEqual(expected);

        data.joins[0].type = "right";

        query = queryBuilder.buildQuery(data);

        expected = "SELECT\n" +
            "isik.isik_id, isik.riik_kood\n" +
            "FROM public.isik\n" +
            "RIGHT JOIN public.isiku_seisundi_liik AS asd ON (asd.isiku_seisundi_liik_kood =\n" +
            "             qwe.isiku_seisundi_liik_kood);";

        expect(query).toEqual(expected);

        data.joins[0].type = "left";

        query = queryBuilder.buildQuery(data);

        expected = "SELECT\n" +
            "isik.isik_id, isik.riik_kood\n" +
            "FROM public.isik\n" +
            "LEFT JOIN public.isiku_seisundi_liik AS asd ON (asd.isiku_seisundi_liik_kood =\n" +
            "             qwe.isiku_seisundi_liik_kood);";

        expect(query).toEqual(expected);

        data.joins[0].type = "outer";

        query = queryBuilder.buildQuery(data);

        expected = "SELECT\n" +
            "isik.isik_id, isik.riik_kood\n" +
            "FROM public.isik\n" +
            "OUTER JOIN public.isiku_seisundi_liik AS asd ON (asd.isiku_seisundi_liik_kood =\n" +
            "             qwe.isiku_seisundi_liik_kood);";

        expect(query).toEqual(expected);

        data.joins[0].type = "cross";

        query = queryBuilder.buildQuery(data);

        expected = "SELECT\n" +
            "isik.isik_id, isik.riik_kood\n" +
            "FROM public.isik\n" +
            "CROSS JOIN public.isiku_seisundi_liik AS asd ON (asd.isiku_seisundi_liik_kood =\n" +
            "             qwe.isiku_seisundi_liik_kood);";

        expect(query).toEqual(expected);

        data.joins[0].type = "badInput";

        query = queryBuilder.buildQuery(data);

        expected = "SELECT\n" +
            "isik.isik_id, isik.riik_kood\n" +
            "FROM public.isik;";

        expect(query).toEqual(expected);
    });

    test('join not completed', () => {
         let data = _.cloneDeep(testData3);

        let query = queryBuilder.buildQuery(data);

        let expected = "SELECT\n" +
            "isik.isik_id, isik.riik_kood\n" +
            "FROM public.isik;";

        expect(query).toEqual(expected);
    })
});