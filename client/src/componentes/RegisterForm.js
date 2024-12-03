import { useState } from "react";
import Labels from "./Labels";
import Button from "./Button";
import Input from "./Input";

const RegisterForm = () => {
    const [email, setMail] = useState('');
    const [user, setUser] = useState('');
    const [info, setInfo] = useState('');

    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handleMail = (e) => {
        setMail(e.target.value);
    }

    const send = () =>{
        setInfo([user, email]);
    }

    return (
        <form>
            <Labels text = 'Introduces nombre:' />
            <Input 
                type = 'text'
                value = {user}
                onChange={handleUser}
            />
            {console.log(`You type ${user}`)}

            <Labels text = 'Introduces correo:' />
            <Input 
                type = 'email'
                value = {email}
                onChange={handleMail}
            />
            {console.log(`You type ${email}`)}

            <br></br>

            <Button value = 'Enviar' onClick={send}/>

            {info ? (
                <div>
                    <p>Usuario: {info[0]}</p>
                    <p>Email: {info[1]}</p>
                </div>
            ) : (
                ""
            )}
        </form>
    )
}

export default RegisterForm;