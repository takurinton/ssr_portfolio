import * as React from 'react';
import { Header } from '../components/utils/Header'
import { Footer } from '../components/utils/Footer'

export const Layout = (Component: (props?: any) => JSX.Element) => {
    return (props: any) => (
        <div>
          <Header />
          <Component {...props} />
          <Footer />
        </div>
    );
  }