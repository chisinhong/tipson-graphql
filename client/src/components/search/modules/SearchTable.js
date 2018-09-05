import React from 'react';
import { Users } from '../../../Users';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, numberFilter, Comparator } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';

class SearchTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.columns = [{
      dataField: 'pic',
      text: '',
      headerClasses: 'SearchHeader',
      hidden: false,
      formatter: picFormatter,
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

    this.rowClasses = 'SearchRow';

    function linksFormatter(cell, row) {
      return (
        <Link to="/profile" className="SearchName">{cell}</Link>
      );
    }

    function picFormatter(cell, row) {
      return (
        <Link to="/profile" className="SearchName"><img src={cell} alt='user pic' /></Link>
      );
    }
  }

  render() {
    return (<BootstrapTable
      keyField='pic'
      data={Users}
      columns={this.columns}
      filter={filterFactory()}
      pagination={paginationFactory()}
      bordered={false}
      rowClasses={this.rowClasses}
      noDataIndication="無啦"
    />
    )
  }
}

export default SearchTable