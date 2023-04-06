import React from 'react';
import { Header } from '../../component/Header/Header';
import { TransactionCard } from '../../component/TransactionCard/TransactionCard';
import { HeaderUserPage } from './HeaderUserPage/HeaderUserPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProfile } from '../../features/UserSlice';
import { getProfile } from '../../service/UserService';
import { State } from '../../Store';

export function UserPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: State) => state.authentication.token);
  const firstName = useSelector((state: State) => state.user.firstName);
  const lastName = useSelector((state: State) => state.user.lastName);
  if (token === '') {
    localStorage.clear();
  }

  useEffect(() => {
    getProfile(token).then((response) => dispatch(setProfile(response)));
    if (token === '') {
      navigate('/signIn');
    }
  }, [dispatch, navigate, token]);

  return (
    <React.Fragment>
      <Header />
      <main className="main bg-dark">
        <HeaderUserPage
          token={token}
          firstName={firstName}
          lastName={lastName}
        />
        <h2 className="sr-only">Accounts</h2>
        <TransactionCard
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <TransactionCard
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <TransactionCard
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </React.Fragment>
  );
}
