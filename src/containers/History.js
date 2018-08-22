import React from 'react';
import Footer from '../components/global/atom/Footer';
import Title from '../components/global/atom/Title';
import HistoryBack from '../components/history/modules/HistoryBack';
import HistoryTable from '../components/history/modules/HistoryTable';
import './History.css';

class History extends React.Component {
    constructor(props){
        super(props)

        this.state={}
    }

    render() {
        return (
            <div className="content">
                <Title title={'過往預測'} />
                <HistoryBack />
                <HistoryTable />
                <Footer className="footer"/>
            </div>
        )
    }
}

export default History