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

function App() {
  return (
    <div className="App">
          <div style={{minHeight: '100vh'}}>
            <NavBar />
              <Routes>
                <Route path="/*" element={<PageNotFound />} />
                <Route path="admin/events-manager" element={<EventsManager />} />
                <Route path="admin/participants" element={<ParticipantsManager />} />

                <Route path='login' element={<LoginPage />} />
                <Route path="/" element={<Navigate replace to="login" />} />
                {/* <Route path="/" element={<Home />} /> */}
                {/* <Route 
                  path='/services/products' 
                  element={
                    <RequireAuth>
                      <Products />
                    </RequireAuth>
                  } /> */}
              </Routes>
          </div>
      </div>
  );
}

export default App;

library.add(far, fas, fab);
