import React, { useState } from "react";
import { Form, Container, Label, Input, BtnContainer, Button } from './Inputs.styled';

const Inputs = ({ data, getUserInput, cancelBtnHandler }) => {
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
    setUserInput((prevState) => {
      return { ...prevState, price: e.target.value };
    });
  };

  const dateHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
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

  return (
    <Form onSubmit={submitHandler}>
      <Container>
        <Label>Title</Label>
        <Input type="text" onChange={titleHandler} value={userInput.title} />
      </Container>
      <Container>
        <Label>$ Amount Spent</Label>
        <Input
          type="number"
          min="0.01"
          step="0.01"
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
  );
};

export default Inputs;
