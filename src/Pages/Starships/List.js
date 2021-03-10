import { Component } from 'react';
import ShipInfo from './ShipInfo';

class List extends Component{
  render(){
    const starship = this.props.starship;
    
    return(
      <div>
        {
          starship.map((p) => {
              return (
                <div key={p.url}>
                  <h1 className="char-name">{p.name}</h1>
                  <ShipInfo shipInfo={p} />
                </div>
            )
          })
        }
      </div>
    );
  };
}

export default List;