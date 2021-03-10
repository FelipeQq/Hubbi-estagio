import axios from 'axios';
import { Component } from 'react';
import List from './List';

class Index extends Component{
  constructor(props){
    super(props)

    this.state = {
      people: [],
      currentPage: 1,
    }

    this.getPeople = this.getPeople.bind(this);
  }

  getPeople(){
    return axios.get(`http://swapi.dev/api/people?page=${this.state.currentPage}`)
    .then((response) => {
      this.setState ({ people: response.data.results })
    })
  }

  componentDidMount(){
    this.getPeople()
  }

  NextPage = () => {
    this.setState(
    {currentPage: this.state.currentPage + 1}
    )
    return this.getPeople()
  }

  PreviousPage = () => {
    this.setState(
    {currentPage: this.state.currentPage - 1}
    )
    return this.getPeople()
  }

  
  render(){
    const {people} = this.state;    
    return(
      <div>
        <List people={people} />
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

