import React, { useState, useEffect } from 'react';
import { Toast, Button, ProgressBar } from 'react-bootstrap';
import './toast.css';

const CustomToast = (props: { title: string, description: string, show?: boolean }) => {
  const {title, description} = props;

  const [show, setShow] = useState(props.show);
  const [timerPaused, setTimerPaused] = useState(false);
  const [progress, setProgress] = useState(100);

  const handleClose = () => setShow(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!timerPaused) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress <= 0) {
            clearInterval(timer);
            setShow(false);
            return 0;
          }
          return prevProgress - 1;
        });
      }, 50);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timerPaused]);

  const handleToastMouseEnter = () => {
    setTimerPaused(true);
  };

  const handleToastMouseLeave = () => {
    setTimerPaused(false);
  };

  return (
    <Toast
      show={show}
      className="custom-toast"
      onClose={handleClose}
      onMouseEnter={handleToastMouseEnter}
      onMouseLeave={handleToastMouseLeave}
    >
      <Toast.Header closeButton={false}>
        <strong className="me-auto">{title}</strong>
        <Button variant="outline-secondary" size="sm" onClick={handleClose}>
          Close
        </Button>
      </Toast.Header>
      <Toast.Body>
        {description}
      </Toast.Body>
      <ProgressBar
        style={{height: '5px'}}
        now={progress}
        variant={progress <= 30 ? 'danger' : 'success'}
      />
    </Toast>
  );
};

export default CustomToast;