  import React from 'react';
  import Pet from './components/Pet';
  import {fetchCat} from './actions/cat';
  import {fetchDog} from './actions/dog';

  export default class Dashboard extends React.Component{
  constructor(){
    super();
    }
  
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  onAdoptPet() {
    console.log('onAdoptPet is working');
  };

  render() {
    return (
      <div className="petToAdopt">
        <Pet onAdoptPet={() => this.onAdoptPet()}/>
        <Pet onAdoptPet={() => this.onAdoptPet()}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      fetchCat,
      fetchDog
  }, dispatch);
};

export default connect(mapDispatchToProps)(Dashboard);