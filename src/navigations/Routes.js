import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import AuthStack from './AuthStack';

const Routes = () => {
  const {user, setUser} = React.useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [setUser]);

  return (
    <NavigationContainer>{user ? <Home /> : <AuthStack />}</NavigationContainer>
  );
};

export default Routes;
