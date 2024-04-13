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
import { calculatorOutline, ellipse, homeOutline, personCircleOutline, speedometerOutline, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Clickcounter from './pages/Clickcounter';
import Tab3 from './pages/Tab3';

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
          
          
          <Route path="/tab3">
            <Tab3 />
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
          
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          
          
          <IonTabButton tab="Clickcounter" href="/Clickcounter">
            <IonIcon aria-hidden="true" icon={speedometerOutline} />
            <IonLabel>Clickcounter</IonLabel>
          </IonTabButton>
         
         
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={calculatorOutline} />
            <IonLabel>Calculator</IonLabel>
          </IonTabButton>
       
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
