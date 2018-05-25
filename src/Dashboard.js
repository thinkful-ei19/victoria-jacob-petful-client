  import React from 'react';
  import Pet from './components/Pet';

  export default class Dashboard extends React.Component{
  constructor(){
    super();

    this.state={
      catToAdopt:{
        img:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name:'Fluffy',
        sex:'Female',
        age:'2',
        breed: 'Bengal',
        story:'Thrown on the street',
      },
      dogToAdopt:{
        img:'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name:'Zeus',
        sex: 'Male',
        age:'3',
        breed: 'Golden Retriever',
        story:'Owner Passed away',
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className='catToAdopt'>
          <header>
            <img alt={this.state.catToAdopt.imageDescription} src={this.state.catToAdopt.img}/>
            <h2>{this.state.catToAdopt.name}</h2>
          </header>
          <main>
            <dl>
              <dt>Sex</dt>
              <dd>{this.state.catToAdopt.sex}</dd>
              <dt>Age</dt>
              <dd>{this.state.catToAdopt.age}</dd>
              <dt>Breed</dt>
              <dd>{this.state.catToAdopt.breed}</dd>
              <dt>Story</dt>
              <dd>{this.state.catToAdopt.story}</dd>
            </dl>
          </main>
          <button type='submit'>Adopt</button>
        </div>

        <div className='dogToAdopt'>
        <header>
          <img alt='imageDescription' src={this.state.dogToAdopt.img}/>
          <h2>{this.state.dogToAdopt.name}</h2>
        </header>
          <main>
            <dl>
              <dt>Sex</dt>
              <dd>{this.state.dogToAdopt.sex}</dd>
              <dt>Age</dt>
              <dd>{this.state.dogToAdopt.age}</dd>
              <dt>Breed</dt>
              <dd>{this.state.dogToAdopt.breed}</dd>
              <dt>Story</dt>
              <dd>{this.state.dogToAdopt.story}</dd>
            </dl>
          </main>
          <button type='submit'>Adopt</button>
        </div>
      </div>
    );
  }
}
