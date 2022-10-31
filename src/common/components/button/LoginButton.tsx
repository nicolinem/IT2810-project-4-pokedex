import React from 'react'
import LoginPage from '../../../pages/views/Login';
import Register from '../../../pages/views/Register';
import Button from './Button';

const LoginButton = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [login, setLogin] = React.useState(true);
    
    return (
        <>
            <div className="m-5 right-0">
                <Button onClick={() => setShowModal(true)}> Sign in</Button>
            </div>

            {showModal ? ( 
                login ? (
                    <LoginPage onExit={() => setShowModal(false)} onSignUp={() => { console.log("signID"); setLogin(false)}}></LoginPage>) :
                    <Register onExit={() => setShowModal(false)} onLogin={() => { console.log("signID"); setLogin(true)}}></Register>
            ) : null}
            
            </>
  )
}

export default LoginButton