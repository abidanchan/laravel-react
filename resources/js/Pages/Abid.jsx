import React from 'react';
import { Link, Head } from '@inertiajs/react';

const Abid = () => {
    return (
        <nav>
            <ul>
                

                 <Link
                            href={route('test')}
                        >
                            Test
                        </Link>
            </ul>
        </nav>
    );
}

export default Abid;
