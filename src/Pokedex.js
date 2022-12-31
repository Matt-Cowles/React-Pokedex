import React, { Component } from "react"
import Pokecard from "./Pokecard";
import "./Pokedex.css"

class Pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Poke-winner m-5">Winning Hand</h1>
        } else {
            title = <h1 className="Poke-loser m-5">Losing Hand</h1>
        }
        return (
            <div>
                <div className="d-flex justify-content-center align-items-center">
                    <h1 className="m-5">Pokedex {this.props.dexNum}</h1>
                    {title}
                </div>
                <p className="Pokedex-exp">Total Exp: {this.props.exp}</p>
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