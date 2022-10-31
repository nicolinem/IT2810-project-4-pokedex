import React from 'react'
import LoginPage from '../../../pages/views/Login';
import Register from '../../../pages/views/Register';
import Button from './Button';

const LoginButton = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [login, setLogin] = React.useState(true);
    
    return (
        <>
                <Button buttonType="primary"  onClick={() => setShowModal(true)}> Sign in</Button>

            {showModal ? ( 
                login ? (
                    <LoginPage onExit={() => setShowModal(false)} onSignUp={() => {  setLogin(false)}}></LoginPage>) :
                    <Register onExit={() => { setShowModal(false); setLogin(true) }} onLogin={() => {setLogin(true)}}></Register>
            ) : null}
            
            </>
  )
}

export default LoginButton