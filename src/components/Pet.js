import React from 'react';
import {connect} from 'react-redux'

class Pet extends React.Component{

  render() {
    let loading = null

    if(!this.props.cat && !this.props.dog){
      loading = <div>loading...</div>
    }
    if(this.props.cat && this.props.dog){
      loading = <div className="Pet">
                  <div className="Cat">
                    <section className="catToAdopt">
                      <header role="banner">
                        <img alt={this.props.cat.imageDescription} src={this.props.cat.imageURL}/>
                        <h2>{this.props.cat.name}</h2>
                      </header>
                      <main role="main">
                        <dl>
                          <dt>Sex</dt>
                          <dd>{this.props.cat.sex}</dd>
                          <dt>Age</dt>
                          <dd>{this.props.cat.age}</dd>
                          <dt>Breed</dt>
                          <dd>{this.props.cat.breed}</dd>
                          <dt>Story</dt>
                          <dd>{this.props.cat.story}</dd>
                        </dl>
                      </main>
                      <button type='submit' onClick={this.props.onAdoptCat}>Adopt Cat</button>
                    </section>
                  </div>

                  <div className="Dog">
                    <section className="dogToAdopt">
                      <header role="banner">
                        <img alt={this.props.dog.imageDescription} src={this.props.dog.imageURL}/>
                        <h2>{this.props.dog.name}</h2>
                      </header>
                      <main role="main">
                        <dl>
                          <dt>Sex</dt>
                          <dd>{this.props.dog.sex}</dd>
                          <dt>Age</dt>
                          <dd>{this.props.dog.age}</dd>
                          <dt>Breed</dt>
                          <dd>{this.props.dog.breed}</dd>
                          <dt>Story</dt>
                          <dd>{this.props.dog.story}</dd>
                        </dl>
                      </main>
                      <button type='submit' onClick={this.props.onAdoptDog}>Adopt Dog</button>
                    </section>
                  </div>
                </div>
        }
    return loading
  }
}
const mapStateToProps = (state) => {
  return ({
  cat: state.cat.cat,
  dog: state.dog.dog
})}


export default connect(mapStateToProps)(Pet);
