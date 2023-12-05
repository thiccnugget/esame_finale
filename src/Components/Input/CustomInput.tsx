import React from 'react';
import { Form } from 'react-bootstrap';

const CustomInput = (props:{placeholder: string, type: string, isRounded: boolean}) => {
    const {isRounded, ...rest} = props;
    
    const classes = ['form-control'];

    if (props.isRounded) {
        classes.push('rounded-pill');
    }

    return <Form.Control {...rest} className={classes.join(' ')} />;
};