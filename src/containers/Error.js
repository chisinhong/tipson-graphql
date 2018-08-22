import React from 'react';

class Error extends React.Component {
    render() {
        return (
            <div className="content d-flex justify-content-center">
                <a href="http://localhost:3000" style={{color:'#FFF', marginTop:'8em'}}><h1>打錯網址, 點我可以去返首頁</h1></a>
            </div >
        )
    }
}

export default Error