import './App.css';
import { Authenticator, View, Image, useTheme } from '@aws-amplify/ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import  { Clientes }  from './Components/Clientes';
import { Coches }  from './Components/Coches';
import { Barra } from './Components/Barra';
const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Autosfactory logo"
          src="https://www.autosfactoryalava.es/wp-content/uploads/2020/04/logo_a_factory.png"
        />
      </View>
    );
  }
};

export default function App() {
  return (
    <Authenticator hideSignUp components={components}>
      {({ signOut, user }) => (
        <main>
          <HashRouter>
            <Barra signOut={signOut}/> 
            <Switch>
              <Route exact path="/coches" component={Coches} />
              <Route exact path="/clientes" component={Clientes} />
            </Switch>
          </HashRouter>
          
        </main>
      )}
    </Authenticator>
  );
}