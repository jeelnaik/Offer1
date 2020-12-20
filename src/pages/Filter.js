import { Component } from "react"
import {getResults} from '../api/index'
 class Filter extends Component{
    constructor(props){
        super(props)
            this.state = {
                filter_label: '',
                filter_value: ''
            }
        
    }
    componentWillUnmount(){
        this.setState({
            filter_label: '',
            filter_value: ''
        })
    }
    handleChangeInput = (e) => {
        console.log(e.target.value);
        e.target.value == '' ? getResults('1').then((resp)=> {
            this.props.getFilterResults(resp,true)
        }) :
        this.setState({filter_value: e.target.value})

    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({filter_label: e.target.value})
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        const {filter_label,filter_value} = this.state
        
        if(filter_label === '2'){
            filter_value.match(/[0-9@"^*#+$"]/).length > 0 && alert('Please enter valid city name')
        } else if(filter_label === '3' || filter_label === '4' || filter_label === '5'){
            filter_value.match(/[A-Za-z]/).length > 0 &&  alert('Please enter valid number')
        } else {
            alert("select a valid option")
        }
        getResults(filter_label,filter_value).then((resp)=> {
            this.props.getFilterResults(resp,true)
        })

    }

    render(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <form class="form-inline my-3 ml-3 my-lg-0">
        <div class="form-group">
            <label class="primary" for="exampleFormControlSelect1">Filter: </label>
            <select class="form-control ml-3" id="exampleFormControlSelect1" onChange={this.handleChange.bind(this)}>
            <option value='1'>Select</option>
            <option value='2'> City</option>
            <option value='3'>Price Min</option>
            <option value='4'>Price Max</option>
            <option value='5'>Number of Beds</option>
            </select>
        </div>
            <input class="form-control ml-3 mr-sm-2" type="search" placeholder="Data" aria-label="Search" onChange={this.handleChangeInput}/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSubmit.bind(this)}>Search</button>
        </form>
        </nav>
    </>

    )
    }
}
export default Filter