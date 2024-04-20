import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import PageNotFound from '../common/PageNotFound';

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import fontawesome icons
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import NavBar from '../common/NavBar';
import EventsManager from './EventsManager';
import ParticipantsManager from './ParticipantsManager';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import Home from './Home';
import MatchHistory from './MatchHistory';
import EvaluationForm from './EvaluationForm';
import MatchDetails from './MatchDetails';
import Rankings from './Rankings';
import RequireAuth from '../common/RequireAuth';
import SportsManager from './SportsManager';

function App() {
  return (
    <div className="App">
          <div style={{minHeight: '100vh', minWidth: '100vw'}}>
            <NavBar />
              <Routes>
                <Route path="/*" element={<PageNotFound />} />
                <Route 
                  path="admin/events-manager" 
                  element={
                    <RequireAuth>
                      <EventsManager />
                    </RequireAuth>} 
                />
                <Route 
                  path="admin/participants" 
                  element={
                    <RequireAuth>
                      <ParticipantsManager />
                    </RequireAuth>
                    } 
                />
                <Route 
                  path="admin/dashboard" 
                  element={
                    <RequireAuth>
                      <Dashboard />
                    </RequireAuth>
                  } 
                />
                <Route 
                  path="admin/sports-manager" 
                  element={
                    <RequireAuth>
                      <SportsManager />
                    </RequireAuth>
                  } 
                />
                <Route path="home" element={<Home />} />
                <Route path="matchhistory" element={<MatchHistory />} />
                <Route path="evaluationform" element={<EvaluationForm />} />
                <Route path="matchdetails" element={<MatchDetails />} />
                <Route path="rankings" element={<Rankings />} />

                <Route path='login' element={<LoginPage />} />
                <Route path="/" element={<Navigate replace to="login" />} />
              </Routes>
          </div>
      </div>
  );
}

export default App;

library.add(far, fas, fab);
