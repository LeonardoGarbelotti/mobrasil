import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import StartPage from './pages/StartPage';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/start" component={StartPage} />
        </BrowserRouter>
    )
}

export default Routes;