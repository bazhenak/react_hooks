import React, {useEffect, useState} from "react";
import "./Pokemons.css";
const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    const [newElement, setNewElement] = useState({name: "", url: "info"});

    // useEffect(() => console.log(newElement, 'useEf newEl'));

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
            .then((data) => data.json())
            .then((res) => {
                console.log(res.results);
                setPokemons([...res.results]);
                setIsLoaded(true);
            });
    }, [isLoaded]);

    const deletePokemon = (pokemonName) => {
        const localPokemons = [...pokemons].filter((el) => el.name !== pokemonName)
        setPokemons(localPokemons);
    };

    const addElement = (e, newEl) => {
        e.preventDefault();
        const localPokemons = [...pokemons, newEl];
        setPokemons(localPokemons);
    };

    const onChangeNewEl = (value, type) => {
        const newLocalEl = {...newElement};
        newElement[type] = value;
        setNewElement(newLocalEl);
    };

    return (
        <div>
            <button onClick={() => setIsLoaded(false)}>Обновить страницу</button>
            <div>
                <form className="poke-form">
                    <input type="text"
                           placeholder="name"
                           onChange={(e) => onChangeNewEl(e.target.value, 'name')}/>
                    <input type="text"
                           placeholder="info"
                           disabled={true}
                           onChange={(e) => onChangeNewEl(e.target.value, 'url')}/>
                    <button onClick={(e) => addElement(e, newElement)}>
                        Добавить элемент
                    </button>
                </form>
            </div>
            {pokemons.map((el, i) => {
                return (
                <div className="pokemons-item" key={i}>
                    <button onClick={() => deletePokemon(el.name)}>Удалить</button>
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
