import App, { Container, NextAppContext } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../features/redux/store';
import { RootAction } from '../features/redux/root-actions';
import { RootState } from '../features/redux/root-reducer';
import { Store } from 'redux';

type Props = { store: Store<RootState, RootAction> };

class MyApp extends App<Props> {
  static async getInitialProps(appContext: NextAppContext) {
    const { Component, ctx } = appContext;
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Head>
          <title>Boilerplate</title>
          <link rel="icon" type="image/x-icon" href="https://reactnativeexample.com/favicon.png" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
