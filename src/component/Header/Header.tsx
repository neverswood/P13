import { useSelector } from 'react-redux';
import { State } from '../../Store';
import { Logo } from '../Logo/Logo';
import { NavConnect } from '../NavConnect/NavConnect';
import { NavSignIn } from '../NavSignIn/NavSignIn';
import './Header.scss';

export function Header() {
  const token = useSelector((state: State) => state.authentication.token);

  return (
    <nav className="main-nav">
      <Logo />
      {token === '' ? <NavSignIn /> : <NavConnect />}
    </nav>
  );
}
