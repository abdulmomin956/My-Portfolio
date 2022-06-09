import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    // console.log(match, children);
    document.title = (match?.pathname === undefined) ? 'HOME - Abdul' : children + ' - Abdul'

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