// Third party dependencies
import React from 'react';
// Atoms
import Title from '../../atoms/Title/index.js';
import Input from '../../atoms/Input/index.js';
import InputWrapper from '../../atoms/Dialog/DialogInputWrapper.js';
import Button from '../../atoms/Button/index.js';
import ButtonWrapper from '../../atoms/Dialog/DialogButtonWrapper.js';

// Templates
import NotLogged from '../../templates/NotLogged/index.js';

const PageHome = () => {

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const RANDOM_SENTENCES = [
        'Just an easy-to-use app to safely store your passwords',
    ];

    return <>
        <NotLogged>
            <Title>Passager</Title>
            <p>{RANDOM_SENTENCES[randomIntFromInterval(0, RANDOM_SENTENCES.length - 1)]}</p>
            <ButtonWrapper justifyContent='center'>
                <Button label="Log in with Google" onClick={() => window.location.href = '/'}/>
            </ButtonWrapper>
        </NotLogged>
    </>

}

PageHome.displayName = 'PageHome';

export default PageHome;