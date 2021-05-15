import React from 'react';
import { AuthContextProvider } from './src/hooks/AuthContext';
import SignIn from './src/screens/SignIn';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <SignIn />
    </AuthContextProvider>
  );
};

export default App;
