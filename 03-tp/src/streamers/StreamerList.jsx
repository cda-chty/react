import { useState } from 'react';

function StreamerList() {
    const [streamers] = useState([
        {
            id: 1, firstname: 'Jean', name: 'Dupont', premium: false,
            age: 36, avatar: 'https://i.pravatar.cc/150?u=jean-dupont',
            links: [
                { name: 'TikTok', url: 'https://www.google.fr' },
                { name: 'Youtube', url: 'https://www.google.fr' },
                { name: 'Discord', url: 'https://www.google.fr' },
            ],
        },
        {
            id: 2, firstname: 'Benoit', name: 'Legrand', premium: true,
            age: 53, avatar: 'https://i.pravatar.cc/150?u=benoit-legrand',
            links: [
                { name: 'TikTok', url: 'https://www.google.fr' },
                { name: 'Youtube', url: 'https://www.google.fr' },
                { name: 'Twitter', url: 'https://www.google.fr' },
            ],
        },
        {
            id: 3, firstname: 'Micheline', name: 'Vachette', premium: true,
            age: 71, avatar: 'https://i.pravatar.cc/150?u=micheline-vachette',
            links: [
                { name: 'TikTok', url: 'https://www.google.fr' },
            ],
        },
        {
            id: 4, firstname: 'Elisa', name: 'Vachette', premium: false,
            age: 19, avatar: 'https://i.pravatar.cc/150?u=elisa-vachette',
            links: [],
        },
    ]);
    const [streamerMode, setStreamerMode] = useState(false);

    return (
        <div className="streamers">
            <div className="flex checkbox">
                <label htmlFor="streamer">Activer le mode streamer</label>
                <input type="checkbox" id="streamer" checked={streamerMode} onChange={(e) => setStreamerMode(e.target.checked)} />
            </div>
            <div className="flex list">
                {streamers.map(streamer =>
                    <div key={streamer.id} className="streamer">
                        <div className="flex">
                            <div className="avatar">
                                <img src={streamer.avatar} alt={streamer.name} style={{ filter: `blur(${streamerMode ? 5 : 0}px)` }} />
                                {streamer.premium && <span className="premium">⭐️</span>}
                            </div>
                            <div>
                                {!streamerMode && <p>{streamer.firstname} {streamer.name}</p>}
                                {streamerMode && <p>{streamer.firstname.charAt(0)}... {streamer.name.charAt(0)}...</p>}
                                {!streamerMode && <span className="age">{streamer.age} ans.</span>}
                            </div>
                        </div>
                        <p className="social-title">
                            {streamer.links.length > 0 ? 'Réseaux sociaux' : 'Pas de réseaux sociaux associés.'}
                        </p>
                        <ul className="social-list">
                            {streamer.links.map(link =>
                                <li key={link.name}>
                                    {link.name === 'TikTok' && '🐶'}
                                    {link.name === 'Youtube' && '🐱'}
                                    {link.name === 'Discord' && '🐭'}
                                    {link.name === 'Twitter' && '🐹'}
                                    <a href={link.url} target="_blank">
                                        {link.name}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StreamerList;
