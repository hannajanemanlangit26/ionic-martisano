import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, closeCircleSharp, closeOutline, ellipse, homeOutline, personCircleOutline, personOutline, speedometerOutline, square, triangle } from 'ionicons/icons';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Clickcounter from './pages/Clickcounter/Clickcounter';
import Calculator from './pages/Calculator/Calculator';
import TodoList from './pages/Todolist/TodoList';
import Qoutegenerator from './pages/Ouotegenerato/Quotegenerator';
import Notes from './pages/Notes/notes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>

        <Route exact path="/TodoList">
            <TodoList />
          </Route>

          {/* Home Router */}
          <Route exact path="/Home">
            <Home />
          </Route>
          
          
          <Route exact path="/Profile">
            <Profile />
          </Route>
         
         
          <Route exact path="/Clickcounter">
            <Clickcounter />
          </Route>
          
          
          <Route path="/Calculator">
            <Calculator />
          </Route>

          <Route path="/Quotegenerator">
            <Qoutegenerator />
          </Route>

          
          <Route path="/Notes">
            <Notes />
          </Route>
         
          {/* Application default route */}
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>


        
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {/* Home tab button */}
          <IonTabButton tab="Home" href="/Home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Black" href="/Black">
            <IonIcon aria-hidden="true" icon={closeOutline} />
            <IonLabel>Black</IonLabel>
            </IonTabButton>
          

          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
