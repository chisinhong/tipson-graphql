import React from 'react';
import Footer from '../components/global/atom/Footer';
import Info from '../components/profile/modules/Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Users } from '../Users';
import Boxes from '../components/profile/modules/Boxes';
import PreHistory from '../components/profile/modules/PreHistiory';
import './Profile.css';
import Title from '../components/global/atom/Title';

class Profile extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="content">
                <Title title = {'個人檔案'}/>
                <Info key={Users.id} name={Users[1].name} pic={Users[1].pic} status={Users[1].status} />
                <Boxes key={Users.id} total={Users[1].total} win={Users[1].win} rate={Users[1].rate} />
                <PreHistory />
                <Footer className="footer" />
            </div>
        )
    }
}

export default Profile