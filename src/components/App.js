import React,  { Suspense, lazy }  from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Carga diferida con lazy(), necesita uns suspense que carga cada que comienza 
// Estos comentarios los puedes borrar cuando gustes 
// import Home from "../pages/Home";
// import NotFound from "../pages/NotFound";


const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));


const App = () => (
  <BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
