import axios from 'axios';
import { Component } from 'react';
import List from './List';

class Index extends Component{
  constructor(props){
    super(props);

    this.state = {
      starship: [], 
      currentPage: 1,
    }
  
    this.getStarship = this.getStarship.bind(this);
  }

  getStarship(){
    return axios.get(`https://swapi.dev/api/starships?page=${this.state.currentPage}`)
    .then((response) => {
      this.setState ({ starship: response.data.results })
    })
  }

  componentDidMount(){
    this.getStarship()
  }

  NextPage = () => {
    this.setState(
    {currentPage: this.state.currentPage + 1}
    )
    return this.getStarship()
  }

  PreviousPage = () => {
    this.setState(
    {currentPage: this.state.currentPage - 1}
    )
    return this.getStarship()
  }

  render(){
    const {starship} = this.state;
    return(
      <div>
        <List starship={starship} />
        <div className="d-flex bd-highlight mb-3">
        <button 
        className="btn btn-secondary btn-lg active mr-auto p-2 bd-highlight" 
        onClick={this.PreviousPage}>
          Previous
        </button>       
        <button 
        className="btn btn-secondary btn-lg active" 
        onClick={this.NextPage} 
        >Next</button>
        </div> 
      </div>
    );
  };
}

export default Index;

