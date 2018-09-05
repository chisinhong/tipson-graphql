import React from 'react';
import Next from '../../global/atom/Next'

const HistoryNext = () => (
    <div className="d-flex justify-content-end preHistoryTitle">
        <h3>近十場結果</h3>
        <p>全部</p>
        <Next url={'./history'}/>
    </div>
)

export default HistoryNext