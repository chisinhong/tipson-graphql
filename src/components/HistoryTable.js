import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Matches } from '../Matches';

const resultType = {
    0: 'home',
    1: '唔中',
  };
  
  function enumFormatter(cell, row, enumObject) {
    return enumObject[cell];
  }
  
  export default class HistoryTable extends React.Component {
    render() {
      return (
        <BootstrapTable data={ Matches } pagination>
          <TableHeaderColumn dataField='matchday' width = '19%'>日期</TableHeaderColumn>
          <TableHeaderColumn dataField='home_team_id' width = '45%' filter={{ type: 'TextFilter' }} isKey>賽事</TableHeaderColumn>
          <TableHeaderColumn dataField='result' width = '16%'>賽果</TableHeaderColumn>
          <TableHeaderColumn dataField='result' width = '20%' filterFormatted dataFormat={ enumFormatter } formatExtraData={ resultType }
            filter={ { type: 'SelectFilter', options: resultType } }>預測</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }