import { useEffect, useState } from 'react';

function Clock({ timezone }) {
    const [date, setDate] = useState(new Date());

    // Le code du useEffect est appelé au chargement du composant
    // et à chaque mise à jour du composant (sauf si [])
    // et parfois à la destruction du composant (return)
    useEffect(() => {
        let timer = setInterval(() => {
            setDate(new Date());
            console.log('CALL');
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <h1>{date.toLocaleTimeString('fr-FR', {
            timeZone: timezone
        })}</h1>
    );
}

export default Clock;
