import React, { Component } from "react"
import pokemon from "./defaultPokemon"
import Pokecard from "./Pokecard";

class Pokedex extends Component {
    static defaultProps = { pokemon }
    render() {
        return (
            <div>
                <h1 className="mt-4 mb-5">Pokedex</h1>
                <div className="d-flex justify-content-center">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;