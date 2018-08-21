import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Matches } from '../Matches';

const selectOptions = {
  0: 'home',
  1: '唔中'
};

const columns = [{
  dataField: 'matchday',
  text: '日期',
  headerStyle: {
    width: '19%'
  }
}, {
  dataField: 'home_team_id',
  text: '賽事',
  filter: textFilter(),
  headerStyle: {
    width: '45%'
  }
}, {
  dataField: 'result',
  text: '賽果',
  headerStyle: {
    width: '16%'
  }
}, {
  dataField: 'result',
  text: '預測',
  formatter: cell => selectOptions[cell],
  filter: selectFilter({
    options: selectOptions,
  })
}];

const HistoryTable = () => (
<BootstrapTable
  keyField='home_team_id'
  data={ Matches }
  columns={ columns }
  filter={ filterFactory() }
  pagination={paginationFactory()}
    />
)

export default HistoryTable

