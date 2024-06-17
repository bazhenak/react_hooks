import React, {useEffect, useState} from "react";

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
            .then((data) => data.json())
            .then((res) => {
                console.log(res.results);
                setPokemons([...res.results]);
            });
    }, []);

    return (
        <div>
            {pokemons.map((el, i) => {
                return (
                <div className="pokemons-item" key={i}>
                    <p className='pokemon-item__name'>{el.name}</p>
                    <a className='pokemon-item__img' target="blank" href={el.url}>
                        {el.name} info
                    </a>
                </div>
                );
            })}
        </div>
    );
};

export default Pokemons;
