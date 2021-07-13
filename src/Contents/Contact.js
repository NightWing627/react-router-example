import React from 'react';
import {Route, Link} from 'react-router-dom';

const Contacts = ({match}) => <b>{match.params.id}</b>

class Contact extends React.Component {
    render() {
        const{url} = this.props.match;
        return (
            <div>
                <h1>Welcome to Contact Page</h1>
                <strong>Select contact Id</strong>
                <ul>
                    <li>
                        <Link to="/contact/1">Contacts 1</Link>
                    </li>
                    <li>
                        <Link to="/contact/2">Contacts 2</Link>
                    </li>
                    <li>
                        <Link to="/contact/3">Contacts 3</Link>
                    </li>
                </ul>
                <Route path="/contact/:id" Component={Contacts} />
            </div>
        )
    }
}

export default Contact