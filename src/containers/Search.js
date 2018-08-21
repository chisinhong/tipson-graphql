import React from 'react';
import Footer from '../components/Footer';
import UsersTable from '../components/UesrsTable';
import './Search.css';

class Search extends React.Component {
    render() {
        return (
            <div className="content">
                <header className="d-flex justify-content-center">
                    <h1>探索貼神</h1>
                </header>
                <UsersTable />
                <Footer className="footer"/>
            </div>
        )
    }
}

export default Search