import React from 'react'
import LiAnchor from '../Li&Anchor/LiAnchor.jsx'

const links = [
    {value: '#', content: 'Link 1', id: '1'},
    {value: '#', content: 'Link 2', id: '2'},
    {value: '#', content: 'Link 3', id: '3'},
    {value: '#', content: 'Link 4', id: '4'}
]


const Nav = () => {
    return (
        <nav>
            <ul className='flex gap-4'>
                {
                    links.map ((link, indice) =>{
                        return <LiAnchor key={indice} value= {link.value} content= {link.content}/>
                    })   
                }
            </ul>
        </nav>
    )
}

export default Nav