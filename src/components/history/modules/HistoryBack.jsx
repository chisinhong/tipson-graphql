import React from 'react';
import Back from '../../global/atom/Back'

const HistoryBack = () => (
    <div className="d-flex justify-content-start historyTitle">
        <Back url={'/profile'}/>
        <p>返回</p>
    </div>
)

export default HistoryBack