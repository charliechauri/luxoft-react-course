import React from 'react';

import './index.css';

const GitHubDeveloper = ({ handleClick, user }) => {

  const customClass= 'a a d  a a a a a a a a a'
  return (<li className={`default-class ${customClass}`} onClick={handleClick} key={user.id}>{user.login}</li>);
};

export default GitHubDeveloper;
