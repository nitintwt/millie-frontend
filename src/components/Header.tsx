import React from 'react';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header className="text-center pt-4 pb-2">
      <h1 className="text-3xl font-bold mb-2">
        Hi there, <span className="text-purple-400">{username}</span>
      </h1>
      <p className="text-xl text-gray-300">
        What would you like to <span className="text-purple-400">do</span>?
      </p>
    </header>
  );
};

export default Header;