import React, { useState, useEffect } from 'react';

function UserInfo(props) {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    id: '',
    cpf: ''
  });

  useEffect(() => {
    props.keycloak.loadUserInfo().then(userInfo => {
      setUserInfo({
        name: userInfo.name,
        email: userInfo.email,
        id: userInfo.sub,
        cpf: userInfo.CPF
      });
    });

    console.log(props.keycloak.token);
  }, [props.keycloak]);

  return (
    <div className="UserInfo">
      <p>CPF: {userInfo.cpf}</p>
      <p>Name: {userInfo.name}</p>
      <p>Email: {userInfo.email}</p>
      <p>ID: {userInfo.id}</p>
    </div>
  );
}

export default UserInfo;
