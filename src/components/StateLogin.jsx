import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import {useInput} from "../hooks/useInput.js";

export default function StateLogin() {
    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputEdit: handleEmailEdit,
        hasError: emailHasError
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputEdit: handlePasswordEdit,
        hasError: passwordHasError
    } = useInput('', (value) => hasMinLength(value, 6));

    function handleSubmit(event) {
        event.preventDefault();

        if (emailHasError || passwordHasError) {
            return;
        }

        console.log(emailValue, passwordValue);
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
                    onChange={handleEmailChange}
                    onBlur={handleEmailEdit}
                    value={emailValue}
                    error = {emailHasError && "Please enter a valid Email address."}
                />
                <Input
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    onBlur={handlePasswordEdit}
                    onChange={handlePasswordChange}
                    value={passwordValue}
                    error = {passwordHasError && "Please enter a valid password."}
                />
            </div>

            <p className="form-actions">
                <button type="button" className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}