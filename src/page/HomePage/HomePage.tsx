import { Banner } from '../../component/Banner/Banner';
import { Features } from './Features/Features';
import { Slogan } from './Slogan/Slogan';
import tree from '../../assets/bank-tree.jpeg';
import { Header } from '../../component/Header/Header';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../features/AuthenticationSlice';
import { State } from '../../Store';

export function HomePage() {
  const dispatch = useDispatch();
  const check = localStorage.getItem('check');
  const token = useSelector((state: State) => state.authentication.token);

  if (token === '') {
    localStorage.clear();
  }

  if (check === 'true') {
    dispatch(setToken(localStorage.getItem('token')));
  } else {
    dispatch(setToken(''));
  }

  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner src={tree}>
          <Slogan />
        </Banner>
        <Features />
      </main>
    </React.Fragment>
  );
}
