const Character = ({character}) => {
    const {id, name, status, species, gender} = character
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>status: {status}</div>
            <div>species: {species}</div>
            <div>gender: {gender}</div>
        </div>
    );
};

export {Character};