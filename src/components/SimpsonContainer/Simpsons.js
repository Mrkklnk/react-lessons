import {Simpson} from "./Simpson";

const Simpsons = () => {
    const simpsons = [
        {id: 1, name: 'Homer'},
        {id: 2, name: 'Bart'},
        {id: 3, name: 'Lisa'},
        {id: 4, name: 'Maggie'},
        {id: 5, name: 'Marge'}
    ]
    return (
        <div>
            {simpsons.map(simpson =><Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};