import React from "react";
import * as SecureStore from "expo-secure-store";
import Navigator from "./src/navigator/navigator";

const AuthContext = React.createContext();

export default function App() {
  
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            userToken: action.token,
            isSignout: false
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            userToken: null,
            isSignout: true
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {



      }



      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        


        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data) => {



        dispatch({type: 'SIGN_UP', token: 'dummy-auth-token'})
      },
    }),
    []  
  );
  
  return (
    <AuthContext.Provider value={authContext}>
      <Navigator />
    </AuthContext.Provider>
  );
};

