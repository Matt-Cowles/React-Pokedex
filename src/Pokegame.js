import React, { Component } from 'react'
import defaultPokemon from './defaultPokemon'
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: defaultPokemon
    }

    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemon]
        while (hand1.length < hand2.length) {
            let randIdx = (Math.floor(Math.random() * hand2.length));
            let randPoke = hand2.splice(randIdx, 1)[0];
            hand1.push(randPoke);
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        return (
            <div className='mb-5'>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} dexNum={1} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp1 < exp2} dexNum={2} />
            </div>
        );
    }
}

export default Pokegame;