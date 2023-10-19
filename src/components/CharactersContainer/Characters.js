import {Character} from "./Character";

const Characters = () => {
    const characters = [
        {id: 1, name:'Rick Sanchez', status:'Alive', species:'Human', gender:'Male'},
        {id: 2, name:'Morty Smith', status:'Alive', species:'Human', gender:'Male'},
        {id: 3, name:'Summer Smith', status:'Alive', species:'Human', gender:'Female'},
        {id: 4, name:'Beth Smith', status:'Alive', species:'Human', gender:'Female'},
        {id: 5, name:'Jerry Smith', status:'Alive', species:'Human', gender:'Male'},
        {id: 6, name:'Abadango Cluster Princess', status:'Alive', species:'Human', gender:'Female'}
    ]
    return (
        <div>
            {characters.map(character =><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};