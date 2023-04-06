import {
  ChangeEvent,
  DetailedHTMLProps,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Button } from '../../../component/Button/Button';
import { Input } from '../../../component/Input/Input';
import { InputCheckbox } from '../../../component/InputCheckbox/InputCheckbox';
import './Form.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, updateCheck } from '../../../features/AuthenticationSlice';
import ReactDOM from 'react-dom';
import { login } from '../../../service/AuthService';

export function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await login(email, password);

    try {
      const token = response.body.token;
      localStorage.setItem('check', JSON.stringify(check));
      localStorage.setItem('token', response.body.token as string);
      localStorage.setItem('email', email as string);
      dispatch(updateCheck(check));
      dispatch(setToken(token));
      navigate('/profile');
    } catch (error) {
      if (response.status === 400) {
        const errorMessage = <p className="error">'Wrong credentials!'</p>;
        ReactDOM.render(errorMessage, document.getElementById('errorMessage'));
      }
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeHolder="your email"
        inputName="input-wrapper"
        labelFor="email"
        labelText="Email"
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeHolder="your password"
        inputName="input-wrapper"
        labelFor="password"
        labelText="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputCheckbox
        inputName="input-remember"
        labelFor="remember-me"
        labelText="Remember me"
        type="checkbox"
        id="remember-me"
        checked={check}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
          setCheck(e.target.checked);
        }}
      />
      <Button classButton="btn sign-in">Sign In</Button>
    </form>
  );
}
