import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { AppBar } from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle.styled';
import { Spinner } from 'components/Spinner/Spinner';

export const Layout = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <title>Tweets</title>
      </Helmet>
      <GlobalStyle />
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};
