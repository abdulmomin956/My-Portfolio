import React, { useEffect, useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    const [customTitle, setCustomTitle] = useState('')
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    // console.log(match, children);
    useEffect(() => {
        if (match) {
            setCustomTitle(children)
        }
    }, [children, match])
    document.title = customTitle + ' - Abdul'

    return (
        <div>
            <Link
                style={{ color: match ? 'blue' : "black", textDecoration: 'none' }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
}

export default CustomLink;