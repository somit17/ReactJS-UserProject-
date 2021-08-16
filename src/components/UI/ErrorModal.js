import Button from "./Button";
import classes from "./ErrorModal.module.css";
import Card from "../UI/Card";
import React from "react";

function ErrorModal(props) {
  return (
    <React.Fragment>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
}

export default ErrorModal;
