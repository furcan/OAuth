import React, { useEffect, useMemo, useState } from 'react';

import { Auth } from 'application/api';

import 'presentation/pages/home/Home.scss';

interface IHomeState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}
interface IHomeUser {
  isAuthenticated: boolean,
  name: string;
  avatar: string;
}

function Home(): React.ReactElement {
  // State: begin
  const signInInit: IHomeState = useMemo(() => ({
    isLoading: false,
    isError: false,
    isSuccess: false,
  }), []);
  const [signInState, setSignInState] = useState<IHomeState>(signInInit);

  const userInit: IHomeUser = useMemo(() => ({
    isAuthenticated: false,
    name: '',
    avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF29vbVWvwgwAAABdJREFUeJxjYBgFo2AUjIJRMApGAb0BAAeAAAE5TYQiAAAAAElFTkSuQmCC',
  }), []);
  const [userState, setUserState] = useState<IHomeUser>(userInit);

  useEffect(() => {
    if (signInState.isSuccess) {
      // refresh the context, or the main state, or etc...

      // Dummy: begin
      const userName = window.localStorage.getItem('dummy_user_name') || '';
      const userAvatar = window.localStorage.getItem('dummy_user_avatar') || '';
      setUserState({
        isAuthenticated: userName.length > 0 && userAvatar.length > 0,
        name: userName,
        avatar: userAvatar || userInit.avatar,
      });
      // Dummy: end
    }
  }, [signInState, setUserState, userInit]);
  // State: end

  // Google OAuth Handler: begin
  const signInHandlerGoogleAsync = async () => {
    try {
      setSignInState({
        isLoading: true,
        isError: false,
        isSuccess: false,
      });

      const apiResponse = await new Auth().signInWithGoogleAsync();
      if (apiResponse) {
        setSignInState({
          isLoading: false,
          isError: false,
          isSuccess: true,
        });
      } else {
        throw Error();
      }
    } catch {
      setSignInState({
        isLoading: false,
        isError: true,
        isSuccess: false,
      });
    }
  };
  // Google OAuth Handler: end

  // SignOut Handler: begin
  const signOutHandlerAsync = async () => {
    try {
      setSignInState({
        isLoading: true,
        isError: false,
        isSuccess: false,
      });

      const apiResponse = await new Auth().signOutAsync();
      if (apiResponse) {
        setSignInState({
          isLoading: false,
          isError: false,
          isSuccess: true,
        });
      } else {
        throw Error();
      }
    } catch {
      setSignInState({
        isLoading: false,
        isError: true,
        isSuccess: false,
      });
    }
  };
  // SignOut Handler: end

  // Dummy Error Handler: begin
  const dummyErrorHandler = () => {
    setSignInState({
      ...signInState,
      isError: true,
    });
  };
  // Dummy Error Handler: end

  const title = userState.isAuthenticated ? userState.name : (signInState.isError ? 'Upss...' : 'Sign In');
  const description = userState.isAuthenticated ? 'Welcome.' : (signInState.isError ? 'Something went wrong.... Please try again.' : (signInState.isLoading ? 'Please wait...' : 'You can sign in using one of the services below.'));

  return (
    <div className={`home`}>
      <div className={`container`}>
        <div className={`home__content`}>
          <div className={`home__signin`}>
            <div className={`home__signin__banner ${userState.isAuthenticated ? 'state--authenticated' : ''}`}>
              <img className={`home__signin__banner__img`} src={`${process.env.PUBLIC_URL}/content/images/signin.png`} width="640" height="420" alt="OAuth" />
              <img className={`home__signin__banner__avatar`} width="100" height="100" alt={userState.name} src={userState.avatar} />
            </div>

            <h1 className={`home__signin__title`}>{title}</h1>
            <p className={`home__signin__description`}>{description}</p>

            <div className={`home__signin__content ${signInState.isLoading ? 'state--loading' : ''}`}>
              <div className={`home__signin__content__loading`}>
                <p className={`home__signin__content__loading__message`}>Please wait...</p>
              </div>

              {userState.isAuthenticated ?
                <button className={`home__signin__content__button button--google`} type="button" onClick={signOutHandlerAsync}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className={`home__signin__content__button__icon icon--signout`} height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.02 3.77v1.56l1-.99V2.5l-.5-.5h-9l-.5.5v.486L2 3v10.29l.36.46 5 1.72L8 15v-1h3.52l.5-.5v-1.81l-1-1V13H8V4.71l-.33-.46L4.036 3h6.984v.77zM7 14.28l-4-1.34V3.72l4 1.34v9.22zm6.52-5.8H8.55v-1h4.93l-1.6-1.6.71-.7 2.47 2.46v.71l-2.49 2.48-.7-.7 1.65-1.65z"></path></svg>
                  <span>Sign Out</span>
                </button>
                :
                <>
                  <button className={`home__signin__content__button button--google`} type="button" onClick={signInHandlerGoogleAsync}>
                    <svg className={`home__signin__content__button__icon icon--google`} width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path fill="#FBBB00" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z"></path><path fill="#518EF8" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"></path><path fill="#28B446" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"></path><path fill="#F14336" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z"></path></g></svg>
                    <span>Sign in with Google</span>
                  </button>

                  <button className={`home__signin__content__button button--facebook`} type="button" onClick={dummyErrorHandler}>
                    <svg className={`home__signin__content__button__icon icon--facebook`} fill="#4267B2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></g></svg>
                    <span>Sign in with Facebook</span>
                  </button>

                  <button className={`home__signin__content__button button--apple`} type="button" onClick={dummyErrorHandler} disabled>
                    <svg className={`home__signin__content__button__icon icon--apple`} fill="#000000" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><g><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></g></svg>
                    <span>Sign in with Apple</span>
                  </button>
                </>
              }
            </div>

            <div className={`home__signin__footer`}>
              <p className={`home__signin__footer__text`}>{`Copyright ${new Date().getFullYear()} OAuth. All rights reserved.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
