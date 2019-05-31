import React, { PureComponent } from 'react';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Classes from './Hotels.module.css';
import Hotel from './Hotel/Hotel';

class Hotels extends PureComponent {
    
    render() {
        return (
            <div className={Classes.Hotels}>
                {
                    this.props.loading? <Spinner /> : 
                    this.props.establishments.map(est => {
                        return(
                            <Hotel key={est.EstablishmentId} establishment={est}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default Hotels;