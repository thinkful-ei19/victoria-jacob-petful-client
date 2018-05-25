  import React from 'react';
  import Pet from './components/Pet';
  import {fetchCat, adoptCat} from './actions/cat';
  import {fetchDog, adoptDog} from './actions/dog';
  import {connect} from 'react-redux';
  // import {bindActionCreators} from 'redux';

class Dashboard extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  onAdoptCat() {
    console.log("adopt cat")
    this.props.dispatch(adoptCat());
  };
  onAdoptDog() {
    console.log("adopt dog")
    this.props.dispatch(adoptDog());
  };

  render() {
    return (
      <div className="petToAdopt">
        <Pet onAdoptCat={() => this.onAdoptCat()}onAdoptDog={() => this.onAdoptDog()}/>

      </div>
    );
  }
}


export default connect()(Dashboard);
