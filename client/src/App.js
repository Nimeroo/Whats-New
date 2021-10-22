import './App.css';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Articlehome from './Screens/ArticleHome/ArticleHome';
import ArticleDetails from './Screens/ArticleDetails/ArticleDetails';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Articlehome />
        </Route>
        <Route path="/:id">
          <ArticleDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
