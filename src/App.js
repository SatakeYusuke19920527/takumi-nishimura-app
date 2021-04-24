

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import ComponentD from './components/ComponentD';
import ComponentE from './components/ComponentE';
import ComponentF from './components/ComponentF';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={ComponentA} />
       <Route exact path="/componentb" component={ComponentB} />
       <Route exact path="/componentc" component={ComponentC} />
       <Route exact path="/componentd" component={ComponentD} />
       <Route exact path="/componente" component={ComponentE} />
       <Route exact path="/componentf" component={ComponentF} /> 
     </Switch>
   </Router>
  );
}

export default App;
