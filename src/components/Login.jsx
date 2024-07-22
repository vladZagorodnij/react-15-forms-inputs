import {useState} from "react";

export default function Login() {
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
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onBlur={() => {handleInputEdit('email')}}
                        onChange={(event) => {
                            handleInputChange('email', event.target.value)
                        }}
                        value={enteredValues.email}
                    />
                    <div className="control-error">
                        {emailIsValid && <p>Please enter a valid Email address.</p>}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onBlur={() => {handleInputEdit('password')}}
                        onChange={(event) => {
                            handleInputChange('password', event.target.value)
                        }}
                        value={enteredValues.password}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button onClick={handleSubmit} className="button">Login</button>
            </p>
        </form>
    );
}
