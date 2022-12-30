import React, { Component } from "react"
import "./Pokecard.css"
import "./defaultPokemon";
const PokeAPI = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

class Pokecard extends Component {
    render() {
        const { name, id, type, exp } = this.props;
        let imgSrc = `${PokeAPI}${id}.png`
        return (
            <div className="Pokecard">
                <h4 className="mt-2">{name}</h4>
                <p>#{id}</p>
                <img
                    src={imgSrc}
                    className="Pokecard-img w-50"
                />
                <p>Type: {type}</p>
                <p>Base Exp: {exp}</p>
            </div>
        );
    }
}

export default Pokecard;