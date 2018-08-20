import React from 'react';
import Footer from '../components/Footer';
import HistoryBack from '../components/modules/HistoryBack';
import HistoryTable from '../components/HistoryTable';

class History extends React.Component {
    render() {
        return (
            <div className="content">
                <header className="d-flex justify-content-center">
                    <h1>過往預測</h1>
                </header>
                <HistoryBack />
                <HistoryTable />
                <Footer className="footer"/>
            </div>
        )
    }
}

export default History