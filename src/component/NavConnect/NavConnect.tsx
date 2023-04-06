import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../features/AuthenticationSlice';
import { State } from '../../Store';
import { Button } from '../Button/Button';

export function NavConnect() {
  const firstName = useSelector((state: State) => state.user.firstName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/profile');
  };

  const logOut = () => {
    localStorage.clear();
    dispatch(setToken(''));
    navigate('/');
  };
  return (
    <div>
      <Button classButton="main-nav-item" click={redirect}>
        <span className="main-nav-item ">
          <i className="fa fa-user-circle"></i> {firstName}
        </span>
      </Button>
      <Button classButton="main-nav-item__signOut" click={logOut}>
        <span className="main-nav-item ">
          <i className="fa fa-sign-out"></i>Sign Out
        </span>
      </Button>
    </div>
  );
}
