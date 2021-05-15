import React from 'react';
import { AuthProvider } from './src/hooks/AuthContext';
import SignIn from './src/screens/SignIn';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <SignIn />
    </AuthProvider>
  );
};

export default App;
