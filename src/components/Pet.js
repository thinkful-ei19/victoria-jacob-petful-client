import React from 'react';

export default function Pet(props){

  return (
    <div className="Pet">
      <section className="petToAdopt">
        <header role="banner">
          <img alt={props.pet.imageDescription} src={props.pet.img}/>
          <h2>{props.pet.name}</h2>
        </header>
        <main role="main">
          <dl>
            <dt>Sex</dt>
            <dd>{props.pet.sex}</dd>
            <dt>Age</dt>
            <dd>{props.pet.age}</dd>
            <dt>Breed</dt>
            <dd>{props.pet.breed}</dd>
            <dt>Story</dt>
            <dd>{props.pet.story}</dd>
          </dl>
        </main>
        <button type='submit' onClick={props.onAdoptPet}>Adopt</button>
      </section>
    </div>
  );
};
