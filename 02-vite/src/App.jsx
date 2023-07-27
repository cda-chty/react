import { Link, Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
            </nav>

            <Outlet />

            <footer>
                Mon Footer
            </footer>
        </>
    );
}

export default App;
