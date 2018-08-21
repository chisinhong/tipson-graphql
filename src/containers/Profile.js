import React from 'react';
import Footer from '../components/Footer';
import Info from '../components/modules/Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Users } from '../Users';
import Boxes from '../components/modules/Boxes';
import PreHistory from '../components/modules/PreHistiory';
import './Profile.css';

class Profile extends React.Component {
    render() {
        return (
            <div className="content">
                <header className="d-flex justify-content-center">
                    <h1>個人檔案</h1>
                </header>
                <Info key={Users.id} name={Users[1].name} pic={Users[1].pic} status={Users[1].status} />
                <Boxes key={Users.id} total={Users[1].total} win={Users[1].win} rate={Users[1].rate} />
                <PreHistory />
                <Footer className="footer" />
            </div>
        )
    }
}

export default Profile