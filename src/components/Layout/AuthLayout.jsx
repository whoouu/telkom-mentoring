/* eslint-disable react/prop-types */
import Header from '../Header';
import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen w-full">
      <Header />
      {children}
    </div>
  );
};

AuthLayout.PropTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
