import React from 'react';
import Footer from '../components/global/atom/Footer';
import SearchTable from '../components/search/modules/SearchTable';
import './Search.css';
import Title from '../components/global/atom/Title';

class Search extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="content">
                <Title title={'探索貼神'} />
                <SearchTable />
                <Footer className="footer"/>
            </div>
        )
    }
}

export default Search