import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Home';
import ResumeRepo from './ResumeRepo';

function RouterPage(props) {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/resume-marketplace' element={<ResumeRepo/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default RouterPage;