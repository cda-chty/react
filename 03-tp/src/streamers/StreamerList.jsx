import { useState } from 'react';

function StreamerList() {
    const [streamers, setStreamers] = useState([
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

    return (
        <div className="streamers flex">
            {streamers.map(streamer =>
                <div key={streamer.id} className="streamer">
                    <div className="flex">
                        <div className="avatar">
                            <img src={streamer.avatar} alt={streamer.name} />
                            {streamer.premium && <span className="premium">⭐️</span>}
                        </div>
                        <div>
                            <p>{streamer.firstname} {streamer.name}</p>
                            <span className="age">{streamer.age} ans.</span>
                        </div>
                    </div>
                    <p className="social-title">
                        {streamer.links.length > 0 ? 'Réseaux sociaux' : 'Pas de réseaux sociaux associés.'}
                    </p>
                    <ul className="social-list">
                        {streamer.links.map(link =>
                            <li>
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
    );
}

export default StreamerList;
