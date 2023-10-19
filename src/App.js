import React from 'react';
import {Simpsons} from "./components/SimpsonContainer/Simpsons";
import {Characters} from "./components/CharactersContainer/Characters";

const App = () => {
  return (
      <div>
          <Simpsons/>
          <hr/>
          <Characters/>
      </div>
  );
};

export {App};
