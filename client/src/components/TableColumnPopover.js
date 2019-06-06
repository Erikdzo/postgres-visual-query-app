import React, {Component} from 'react';
import {
    Popover, PopoverBody, PopoverHeader, Table
} from "reactstrap";
import {withToggle} from "../hocs/withToggle";
import {translations} from "../utils/translations";
import {connect} from "react-redux";
import {Scrollbars} from "react-custom-scrollbars";

class TableColumnPopover extends Component {

    render() {
        const modifiers = {
                preventOverflow: {
                    enabled: false,
                },
                hide: {
                    enabled: false
                }
            }
        ;
        return (
            <Popover modifiers={modifiers} placement="right" trigger="legacy" isOpen={this.props.toggleStatus}
                     target={this.props.target} toggle={this.props.toggle} delay={{show: 0, hide: 0}}>
                <PopoverHeader>{translations[this.props.language.code].queryBuilder.foreignKeyH}</PopoverHeader>
                <PopoverBody className="p-1">
                    <Scrollbars autoHeight autoHeightMax={400}>
                        <Table bordered className="table-sm mb-3">
                            <thead>
                            <tr>
                                <th>
                                    {translations[this.props.language.code].queryBuilder.schemaTh}
                                </th>
                                <th>
                                    {translations[this.props.language.code].queryBuilder.tableTh}
                                </th>
                                <th>
                                    {translations[this.props.language.code].queryBuilder.columnTh}
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.foreignKeys.map(fk => {

                                return <tr
                                    key={`${fk.foreign_table_schema}_${fk.foreign_table_name}_${fk.foreign_column_name}`}>
                                    <td>{fk.foreign_table_schema}</td>
                                    <td>{fk.foreign_table_name}</td>
                                    <td>{fk.foreign_column_name}</td>
                                </tr>
                            })}
                            </tbody>
                        </Table>
                    </Scrollbars>

                </PopoverBody>
            </Popover>
        )
    }
}

const mapStateToProps = store => {
    return {
        language: store.settings.language
    }
};

export default withToggle(connect(mapStateToProps)(TableColumnPopover));