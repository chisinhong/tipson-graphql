import React from 'react';
import { Users } from '../Users';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, numberFilter, Comparator } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';

const columns = [{
  dataField: 'id',
  text: 'ID',
  filter: textFilter(),
  headerClasses: 'SearchHeader',
  hidden: true
}, {
  dataField: 'name',
  text: '用戶',
  filter: textFilter({
    placeholder: '輸入名字',
    style: {
      height: '30px'
    }
  }),
  formatter: linksFormatter,
  headerClasses: 'SearchHeader',
  headerStyle: {
    width: '50%'
  }
}, {
  dataField: 'total.count',
  text: '總預測',
  sort: true,
  filter: numberFilter({ 
    placeholder: '場數', 
    comparators: [Comparator.EQ, Comparator.GT, Comparator.LT], 
    options: [10, 20, 30, 40, 50, 70, 100, 150, 200, 300, 500]
  }),
  headerClasses: 'SearchHeader',
  headerStyle: {
    width: '25%'
  }
}, {
  dataField: 'win.count',
  text: '總勝出',
  sort: true,
  filter: numberFilter({ 
    placeholder: '場數', 
    comparators: [Comparator.EQ, Comparator.GT, Comparator.LT], 
    options: [10, 20, 30, 40, 50, 70, 100, 150, 200, 300, 500]
  }),
  headerClasses: 'SearchHeader',
  headerStyle: {
    width: '25%'
  }
}];

const rowClasses = 'SearchRow';

function linksFormatter(cell, row) {
  return (
    <Link to="#" className="SearchName"><img src={Users.pic} alt='user pic'/>{cell} </Link>
  );
}

const UsersTable = () => (
  <BootstrapTable
    keyField='id'
    data={Users}
    columns={columns}
    filter={filterFactory()}
    pagination={paginationFactory()}
    bordered={false}
    rowClasses={rowClasses}
    noDataIndication="無啦"
  />
)

export default UsersTable