import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';

export function NavSignIn() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/signIn');
  };

  return (
    <div>
      <Button classButton="main-nav-item" click={redirect}>
        <span className="main-nav-item ">
          <i className="fa fa-user-circle"></i>
          Sign In
        </span>
      </Button>
    </div>
  );
}
