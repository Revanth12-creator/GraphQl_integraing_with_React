import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Fragment>
                <nav class="navbar navbar-expand-lg navbar-white bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav ml-auto">
                                <Link className="nav-link active "  to="/">Home</Link>
                                <Link className="nav-link active "  to="/candidates">Candidates</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}
export default HeaderComponent;