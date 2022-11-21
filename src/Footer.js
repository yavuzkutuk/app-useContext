import { useContext } from 'react';
import { CurrentUserContext } from './contexts/CurrentUserContext';

const Footer = () => {
  const { user } = useContext(CurrentUserContext);
  return (
    <div>
      {user.firstname} {user.lastname}
    </div>
  );
};

export default Footer;
