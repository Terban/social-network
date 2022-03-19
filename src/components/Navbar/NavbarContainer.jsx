import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        navbar: state.navbar
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)

