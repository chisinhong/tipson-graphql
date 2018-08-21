import React from 'react';
import HistoryNext from './HistoryNext';
import RecentList from './RecentList';

class PreHistory extends React.Component {
    render() {
        return (
            <div className='preHistory d-flex flex-column'>
                <HistoryNext />
                <div className="preHistoryContent">
                    <p>左為最新</p>
                    <RecentList />
                </div>
            </div>
        )
    }
}

export default PreHistory
