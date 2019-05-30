import React, { Component } from 'react';
import Classes from './TextInput.module.css';

class TextInput extends Component {

    state = {
        classes: [ ],
        focused: false,
        hasValue: false,
        errorMessage: '',
        touched: false,
        errorClasses: [Classes.ErrorWrap, 'uppercase-fl'],
    }

    componentDidMount(){
        let classes = [Classes.InputOuter,];

        if(this.state.focused){
            classes.push(Classes.Active);
        }
        if(this.state.hasValue){
            classes.push(Classes.HasValue);
        }
        if(this.state.hasError){
            classes.push(Classes.HasError);
        }
        this.setState({classes: classes});
    }
    
    inputClicked = (event) => {
        let classes = [Classes.InputOuter,];
        classes.push(Classes.Active);

        this.setState({ focused: true, classes: classes });
        this.MyInput.focus(); 
    }
    inputBlured = (event) => {
        
        let classes = [Classes.InputOuter,];
        if(this.state.hasValue){
            classes.push(Classes.HasValue);
        }

        if(event.target.value.length > 0 ){
            this.setState({ hasValue: true, focused : false, classes: classes });
        }else{
            this.setState({ hasValue: false, focused : false, classes: classes });
        }

        // if( this.props.filterAdded )
            this.props.filterAdded(this.props.config.type, event.target.value);
    }
    keyStroke = (event) => {
        if(!this.state.touched){
            if(event.target.value < 2 ){
                return;
            }
        }
        this.setState({ touched: true });         
        // if( this.props.filterAdded )
            this.props.filterAdded(this.props.config.type, event.target.value);
    }

    render() {
        return (
            <div className={Classes.InputErrorWrap}>
                <div className={this.state.classes.join(' ')} onClick={this.inputClicked}>
                    <div className={Classes.Wrapper}>
                        <label >{this.props.label}</label>
                        <input 
                            type="text" 
                            onBlur={this.inputBlured} 
                            onFocus={this.inputClicked}
                            onKeyUp={this.keyStroke}
                            onKeyDown={this.keyStroke}
                            autoComplete={'user-'+this.props.config.fieldName} 
                            ref={(input) => this.MyInput = input } 
                            />

                    </div>
                </div>
                <div className={this.state.errorClasses.join(' ')}>
                    <div className={Classes.ErrorMessage}>{this.state.errorMessage}</div>
                </div>
            </div>
        );
    }
}

export default TextInput;