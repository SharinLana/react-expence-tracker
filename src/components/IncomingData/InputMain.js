import React, { useState } from 'react';
import Inputs from './Inputs';
import { Wrapper, Button } from './InputMain.styled';

const InputMain = ({ data, getUserInput }) => {
    const [editBtn, setEditBtn] = useState(false);

    const editBtnHandler = () => {
        setEditBtn(true);
    };

    const cancelBtnHandler = () => {
        setEditBtn(false);
    }

  return (
    <Wrapper>
        {!editBtn && <Button onClick={editBtnHandler}>Add New Expense</Button>}
        {editBtn && <Inputs data={data} getUserInput={getUserInput} cancelBtnHandler={cancelBtnHandler}/>}
    </Wrapper>
  )
}

export default InputMain;