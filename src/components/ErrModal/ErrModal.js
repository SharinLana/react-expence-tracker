import React from 'react';
import { Background, ModalWindow, HeaderBackground, Header, Message, Button } from './ErrModal.styled';

const ErrModal = ({ errModal, onErrModalClick }) => {
  return (
    <Background onClick={onErrModalClick}>
        <ModalWindow>
            <HeaderBackground>
                <Header>{errModal.title}</Header>
            </HeaderBackground>
            <div>
                <Message>{errModal.message}</Message>
            </div>
            <Button onClick={onErrModalClick}>OK</Button>
        </ModalWindow>
    </Background>
  )
}

export default ErrModal;