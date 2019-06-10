import React, { Component } from 'react';
import classes from './Layout.module.css';
// import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../Components/UI/Toolbar/Toolbar';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }    
    sideDrawerToggleHandler = () => {
        this.setState({showSideDrawer:false});
    }
    menuClickedHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer:!prevState.showSideDrawer}
        } );
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                {/* <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerToggleHandler}/> */}
                
                <div className={classes.Content}>
                    {this.props.children}
                </div>
                
            </React.Fragment>
        );
    }
}

export default Layout;