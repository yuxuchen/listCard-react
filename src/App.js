import {Route, Switch} from 'react-router-dom'
import Layout from './component/layout/Layout';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';


function App() {
  return (
    <div>
     <Layout>
      <Switch>
          <Route path='/' exact>
            <AllMeetups/>
          </Route>

          <Route path='/favorites'>
            <Favorites/>
          </Route>

          <Route path='/new-meetup'>
            <NewMeetup/>
          </Route>
        </Switch>
     </Layout>
    </div>
   
      
  )
}

export default App;
