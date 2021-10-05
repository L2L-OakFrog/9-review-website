import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Extra = () => {
    const styles =
    {
        textDecoration: 'none',
        fontWeight: "bold",
        color: "black",
    }
    const actStyles =
    {
        textDecoration: 'none',
        color: "whitesmoke",
    }
    return (
        <div className=''>
            <div>
                <h1>Ready to Checkout?</h1>
            </div>
            <div className='container'>
                <div>
                    <Button className='confirm' variant="primary"><NavLink style={styles} activeStyle={actStyles} to='/extras'>Yes</NavLink></Button>{' '}
                    <Button className='confirm' variant="primary"><NavLink style={styles} activeStyle={actStyles} to='/services'>No</NavLink></Button>{' '}
                </div>
                <div className=''>

                </div>
            </div>
        </div>
    );
};

export default Extra;