import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout(props) {
  //const history = useHistory();
  const navigate= useNavigate();
  function logout() {
    navigate('/');
    props.keycloak.logout();
  }

  return (
    <button onClick={logout}>
      Logout
    </button>
  );
}

export default Logout;
