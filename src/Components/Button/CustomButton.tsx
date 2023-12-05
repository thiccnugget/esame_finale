import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = (props: {title: string, isRounded: boolean}) => {

    const classes = ['btn'];

    if (props.isRounded) {
        classes.push('rounded-circle');
    }

    return <Button {...props} className={classes.join(' ')} />;
};