import {useState} from "react";
import Input from "./Input.jsx";

export default function StateLogin() {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    });

    const emailIsValid =
        didEdit.email && !enteredValues.email.includes('@');
    const passwordIsValid = didEdit.password && enteredValues.password.trim().length < 6;

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Submitted');
    }

    function handleInputChange(identifier, value) {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [identifier]: value,
        }))

        setDidEdit((prevState) => ({
            ...prevState,
            [identifier]: false
        }))
    }

    function handleInputEdit(identifier) {
        setDidEdit((prevState) => ({
            ...prevState,
            [identifier]: true
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    onChange={(event) => {
                        handleInputChange('email', event.target.value);
                    }}
                    onBlur={() => handleInputEdit('email')}
                    value={enteredValues.email}
                    error = {emailIsValid && "Please enter a valid Email address."}
                />
                <Input
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    onBlur={() => {handleInputEdit('password')}}
                    onChange={(event) => {
                        handleInputChange('password', event.target.value)
                    }}
                    value={enteredValues.password}
                    error = {passwordIsValid && "Please enter a valid password."}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button onClick={handleSubmit} className="button">Login</button>
            </p>
        </form>
    );
}