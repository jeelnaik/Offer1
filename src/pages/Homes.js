import React, { Component } from 'react';
import {
Button
} from 'react-bootstrap'
import {getHomes} from '../api/index.js';
import Filter from './Filter'
import { Link } from "react-router-dom";

class Homes extends Component {
    constructor(props){
        super(props)
            this.state = {
                homes: [],
                filter: [],
                flag: false
            }
    }

    componentDidMount() {
        //make an api call to getHomes to get the list of all the homes
        getHomes().then(resp => {
            this.setState({
                homes: resp,
            })
        })
    }

    componentWillUnmount(){
        this.setState({homes: [],
            filter: [],
            flag: false})
    }

    getFilterResults = (res,filter_flag) => {
        this.setState({filter: res,flag:filter_flag })
    }

    render() {
        const {homes,filter,flag} =this.state
        const display_home = flag ? filter : homes
      return (
         <div>
        <Filter getFilterResults={this.getFilterResults}/>
        <div class="row">
            {display_home.map((home, index) =>{
                return(
                <div class="col-sm-4">
                    <div className = "card">
                        <div className="card-header">{home.property.address.city}</div>
                            <div className = "card-body">
                                <h3 className="card-tittle">Bedroom - {home.property.numberBedrooms} Bath - {home.property.numberBaths}</h3>
                            <p className = "card-text">
                                {home.price}
                            </p>
                        
                        <Link to={`/home/${index+1}`}>
                            <Button>Details</Button>
                        </Link>
                        </div>
                    </div>
                </div>
                 )})
            }
        </div>
        </div>
      )
    }
}
  export default Homes;