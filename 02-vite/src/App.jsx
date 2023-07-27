import { Link, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
    return (
        <Provider store={store}>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
            </nav>

            <Outlet />

            <footer>
                Mon Footer
            </footer>
        </Provider>
    );
}

export default App;
