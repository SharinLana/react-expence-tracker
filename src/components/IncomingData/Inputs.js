import React, { useState } from "react";
import { Form, Container, Label, Input, BtnContainer, Button } from './Inputs.styled';
import ErrModal from '../ErrModal/ErrModal';

const Inputs = ({ data, getUserInput, cancelBtnHandler }) => {
  const [error, setError] = useState();
  const [newId, setNewId] = useState(data.length + 1);
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    date: "",
  });

  const titleHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const amountHandler = (e) => {
    // Error Modal Window activation
    if (isNaN(e.target.value) || e.target.value <= 0) {
      setError({
        title: 'Invalid input data!',
        message: 'Please use only numbers greater than 0 to add the amount'
      })
      return;
    };

    setUserInput((prevState) => {
      return { ...prevState, price: e.target.value };
    });
  };

  const dateHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  // The form submittion
  const submitHandler = (e) => {
    e.preventDefault();

    // Error Handling 
    if (userInput.title === '' || userInput.price === '' || userInput.date === '') {
      setError({
        title: "Incomplete input data!",
        message: "Please fill out all the fields of the form"
      });
      return;
    };

    setNewId(newId + 1);
    const newDate = userInput.date.split("-").join(",");

    const newExpense = {
      id: newId,
      title: userInput.title,
      price: Number(userInput.price),
      date: new Date(newDate),
    };

    getUserInput(newExpense);

    setUserInput({
      title: "",
      price: "",
      date: "",
    });
  };

  const errOkBtnHandler = () => {
    setError();
  }

  return (
    <>
      {error && <ErrModal errModal={error} onErrModalClick={errOkBtnHandler}/>}
      <Form onSubmit={submitHandler}>
        <Container>
          <Label>Title</Label>
          <Input type="text" onChange={titleHandler} value={userInput.title} />
        </Container>
        <Container>
          <Label>$ Amount Spent</Label>
          <Input
            type="text"
            onChange={amountHandler}
            value={userInput.price}
          />
        </Container>
        <Container>
          <Label>Date of Purchase</Label>
          <Input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateHandler}
            value={userInput.date}
          />
        </Container>
        <BtnContainer>
          <Button type="button" onClick={cancelBtnHandler}>
            Cancel
          </Button>
          <Button type="submit">Add Expense</Button>
        </BtnContainer>
      </Form>
    </>
  );
};

export default Inputs;
