import { useState } from 'react';

function Button({ title }) {
    // let enabled = true;
    const [enabled, setEnabled] = useState(true);

    return (
        <button onClick={() => setEnabled(!enabled)}>
            {title} {enabled && '✅'}
        </button>
    );
}

export default Button;
