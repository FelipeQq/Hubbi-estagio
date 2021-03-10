import { Component } from 'react';

class CharInfo extends Component {
  constructor(props){
    super(props);

    this.state = {
      expanded: false,
    }

    this.openClose = this.openClose.bind(this);
  }

  openClose(){
    this.setState({ expanded: !this.state.expanded })
  }
  
  render() {
    const info = this.props.charInfo;

    if(!this.state.expanded){
      return <p className="btn btn-info" onClick={this.openClose}>Mais Informações</p>
    }
      return(
        <div className="user-details">
          <p className="btn btn-danger" onClick={this.openClose}>Ocultar Informações</p>
          <ul>
            <li><h4>Altura: {info.height}cm</h4></li>
            <li><h4>Peso: {info.mass}kg</h4></li>
          </ul>
        </div>
    );
  }
};

export default CharInfo;