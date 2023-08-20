import React from 'react'
import LiAnchor from './LiAnchor.jsx'

const links = [
    { value: '/', content: 'Home', id: '1' },
    { value: '/cities', content: 'Cities', id: '2' },
]

const Nav = () => {
    return (
        <div className=''>
            <nav className='relative right-8'>
                <ul className='flex gap-14'>
                    {
                        links.map((link, indice) => {
                            return <LiAnchor key={indice} value={link.value} content={link.content} />
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Nav