import React, {Component} from 'react';
import {
    Popover, PopoverBody, PopoverHeader, Table
} from "reactstrap";
import {withToggle} from "../hocs/withToggle";

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
                     target={this.props.target} toggle={this.props.toggle}>
                <PopoverHeader>Foreign key references</PopoverHeader>
                <PopoverBody>
                    <Table bordered responsive className="table-sm">
                        <thead>
                        <tr>
                            <th>
                                Schema
                            </th>
                            <th>
                                Table
                            </th>
                            <th>
                                Column
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

                </PopoverBody>
            </Popover>
        )
    }
}


export default withToggle(TableColumnPopover);