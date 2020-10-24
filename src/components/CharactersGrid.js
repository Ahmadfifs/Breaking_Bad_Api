import React from 'react'
import CharacterItem from '../components/CharacterItem'
import Spinner from '../components/Spinner'

const CharactersGrid = ({items , isLoading}) => {
    return isLoading ? 
            <Spinner />
            : 
            <section className='cards'>
                {items.map(item => (
                    <CharacterItem item={item} />
                ))}
            </section>
}

export default CharactersGrid;
