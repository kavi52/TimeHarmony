import React from 'react';
import DefaultLayout from './DefaultLayout';
const withLayout = (WrappedComponent: React.ComponentType) => {

  // check user is authorized or not, else redirect to login page

  return () => (
    <DefaultLayout>
      <WrappedComponent />
    </DefaultLayout>
  );
};

export default withLayout;
