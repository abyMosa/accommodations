import React, { Component } from 'react';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Classes from './Accordian.module.css';


class Accordian extends Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
      }
      
      componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };

    render() {
        // const { width } = this.state;
        // const isMobile = width <= 991;
        // let accordianClasses = isMobile? [Classes.Accordian, "mobile"]: [Classes.Accordian];

        // if (isMobile) {
        //     return (
        //         <ExpansionPanel className={accordianClasses.join(' ')}>
        //             <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
        //                 <p className={Classes.Label}>{this.props.label}</p>
        //             </ExpansionPanelSummary>
                    
        //             <ExpansionPanelDetails>
        //                 {this.props.children}
        //             </ExpansionPanelDetails>
        //         </ExpansionPanel>
        //     );
        //   } else {
            return (
                <React.Fragment>
                    {this.props.children}
                </React.Fragment>
            );
        //   }
    }
}

export default Accordian;