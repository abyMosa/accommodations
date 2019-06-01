import React, { Component } from 'react';
import Classes from './IpSelect.module.css';

class IpSelect extends Component {

    state = {
        classes: [ ],
        focused: false,
        hasValue: true,
    }

    componentDidMount(){
        let classes = [Classes.InputOuter,];

        if(this.state.focused){
            classes.push(Classes.Active);
        }
        if(this.state.hasValue){
            classes.push(Classes.HasValue);
        }
        this.setState({classes: classes});
    }
    
    inputClicked = (event) => {
        let classes = [Classes.InputOuter,];
        classes.push(Classes.Active);

        this.setState({ focused: true, classes: classes });
        this.MySelect.focus(); 
    }

    inputBlured = (event) => {
        
        let classes = [Classes.InputOuter,];
        if(this.state.hasValue){
            classes.push(Classes.HasValue);
        }
        this.setState({classes: classes});

        // if(event.target.value.length > 0 ){
        //     this.setState({ hasValue: true, focused : false, classes: classes });
        // }else{
        //     this.setState({ hasValue: false, focused : false, classes: classes });
        // }

        // if( this.props.filterAdded )
        // this.props.filterAdded( event.target.value);
    }
    // changed = (event) => {
    //     console.log(event.target.value);
    // }

    render() {
        return (
            <div className={Classes.InputErrorWrap}>
                <div className={this.state.classes.join(' ')} onClick={this.inputClicked}>
                    <div className={Classes.Wrapper}>
                        <label >{this.props.label}</label>
                        
                        <select 
                        name={this.props.name}
                        ref={(input) => this.MySelect = input } 
                        onBlur={this.inputBlured} 
                        onFocus={this.inputClicked}
                        autoComplete={'user-'+this.props.name} 
                        onChange={event => this.props.onChange(event.target.value)}
                        >
                            { this.props.options.map( option => <option  key={option.key} value={option.key}>{option.label}</option> ) }                            
                        </select>

                    </div>
                </div>
                
            </div>
        );
    }
}

export default IpSelect;