import './HeaderUserPage.scss';
import { Button } from '../../../component/Button/Button';
import { useState } from 'react';
import { Input } from '../../../component/Input/Input';
import { setProfile } from '../../../features/UserSlice';
import { useDispatch } from 'react-redux';
import { putProfile } from '../../../service/UserService';

type UserPageProps = {
  firstName: string;
  lastName: string;
  token: string;
};

export function HeaderUserPage({ token, firstName, lastName }: UserPageProps) {
  const dispatch = useDispatch();

  const [retrieveFirstName, setRetrieveFirstName] = useState('');
  const [retrieveLastName, setRetrieveLastName] = useState('');
  const [isShown, setIsShown] = useState(true);

  const editName = () => {
    setIsShown((current) => !current);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (retrieveFirstName === '' && retrieveLastName === '') {
      setIsShown((current) => current);
    } else {
      const data = await putProfile(token, retrieveFirstName, retrieveLastName);
      dispatch(
        setProfile({ firstName: data.firstName, lastName: data.lastName })
      );
      localStorage.setItem('firstName', retrieveFirstName as string);
      localStorage.setItem('lastName', retrieveLastName as string);
    }
    setIsShown((current) => !current);
  };

  const cancelEventButton = () => {
    setIsShown((current) => !current);
  };

  return (
    <div className="header">
      <div style={{ display: isShown ? 'none' : 'block' }}>
        <h1>Edit your name</h1>
        <form
          className="edit-name-inputs"
          name="formEditName"
          onSubmit={handleSubmit}
        >
          <Input
            placeHolder="your first name"
            inputName="edit-name-input input-wrapper"
            labelFor="firstName"
            labelText="FirstName"
            type="firstName"
            id="firstName"
            value={retrieveFirstName}
            onChange={(e) => {
              setRetrieveFirstName(e.target.value);
            }}
          />
          <Input
            placeHolder="your last name"
            inputName="edit-name-input input-wrapper"
            labelFor="lastName"
            labelText="LastName"
            type="lastName"
            id="lastName"
            value={retrieveLastName}
            onChange={(e) => setRetrieveLastName(e.target.value)}
          />
          <Button classButton="btn edit-name-change__save">save</Button>
        </form>
        <div className="edit-name-change">
          <Button
            classButton="btn edit-name-change__cancel"
            click={cancelEventButton}
          >
            cancel
          </Button>
        </div>
      </div>
      <div style={{ display: isShown ? 'block' : 'none' }}>
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}
        </h1>
        <Button classButton="btn edit" click={editName}>
          Edit Name
        </Button>
      </div>
    </div>
  );
}
