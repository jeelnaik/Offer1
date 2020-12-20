import { Component } from "react"
import {getHome} from '../api/index.js'
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props){
        super(props)
            this.state = {
                home: {},
                id: props.match.params.homeId
            }
        
    }

    componentDidMount(){
        const {
            id
          } = this.state;
          getHome(id).then(resp => {
            console.log(id,resp);
            this.setState({home: resp[0]})}
          )
    }

    render(){
        const {home} = this.state
        return(
        <>
        
        <h1>
            Property Details: 
        </h1>
        <p>
        {home.id &&
        <>
        <table class="table">
            <tbody>
                <tr>
                <th scope="row">Address :</th>
                <td>{home.id && 
           home.property.address.addressLine1 + ", "+
           home.property.address.city + ", " +
           home.property.address.state+ ", "+
           home.property.address.zip }</td>
                </tr>

                <tr>
                <th scope="row">Property Type: </th>
                <td>{home.property.propertyType}</td>
                </tr>

                <tr>
                <th scope="row">Square Feet: </th>
                <td>{home.property.squareFeet}</td>
                </tr>

                <tr>
                <th scope="row">Number Bedrooms: </th>
                <td>{home.property.numberBedrooms}</td>
                </tr>

                <tr>
                <th scope="row">Number Baths: </th>
                <td>{home.property.numberBaths}</td>
                </tr>

                <tr>
                <th scope="row">Description: </th>
                <td>{home.property.description}</td>
                </tr>

                <tr>
                <th scope="row">Primary Owner: </th>
                <td>{home.property.primaryOwner.user.firstName}
                     {home.property.primaryOwner.user.lastName} , 
                    {home.property.primaryOwner.user.email} <br />
                    status: {home.property.primaryOwner.user.status}</td>
                </tr>

                <tr>
                <th scope="row">Owner Type: </th>
                <td>{home.property.ownerType}</td>
                </tr>

                <tr>
                <th scope="row">Primary Image Url </th>
                <td>{home.property.primaryImageUrl}</td>
                </tr>

                <tr>
                <th scope="row">State</th>
                <td>{home.state}</td>
                </tr>

                <tr>
                <th scope="row">Price</th>
                <td>{home.price}</td>
                </tr>

                <tr>
                <th scope="row">Escrow Company:</th>
                <td>Name : {home.escrowCompany.name}<br />
                    Phone: {home.escrowCompany.phone}<br />
                    Email: {home.escrowCompany.email}<br />
                    Officer Name: {home.escrowCompany.officerName}<br />
                    Address: 
                        {home.escrowCompany.address.addressLine1 + ", "+
                        home.escrowCompany.address.city + ", " +
                        home.escrowCompany.address.state+ ", "+
                        home.escrowCompany.address.zip }<br />

                Type: {home.escrowCompany.type}
                </td>
                </tr>

                <tr>
                <th scope="row">Title Company: </th>
                <td>Name: {home.titleCompany.name} <br />
                    Phone: {home.titleCompany.phone} <br />
                    Email: {home.titleCompany.email} <br />
                    Officer Name: {home.titleCompany.officerName}<br />
                    Address: 
                            {home.titleCompany.address.addressLine1 + ", "+
                            home.titleCompany.address.city + ", " +
                            home.titleCompany.address.state+ ", "+
                            home.titleCompany.address.zip }
                    Type: {home.titleCompany.type}                </td>
                </tr>

                <tr>
                <th scope="row">Listing Agent:  </th>
                <td>License Number: {home.listingAgent.licenseNumber} <br />
                    License State: {home.listingAgent.licenseState}  <br />
                        First Name: {home.listingAgent.user.firstName}  <br />
                        Last Name: {home.listingAgent.user.lastName}  <br />
                        Email: {home.listingAgent.user.email}  <br />
                        Phone: {home.listingAgent.user.phone}  <br />
                        Status: {home.listingAgent.user.status}      
                </td>
                </tr>

                <tr>
                <th scope="row">Included Items:  </th>
                <td>{home.includedItems && home.includedItems.map(item => 
                            <p>
                            Name: {item.name},
                            Listing: {item.listing}
                            </p>
                        )
                    }    
                </td>
                </tr>

                <tr>
                <th scope="row">Excluded Items:  </th>
                <td>{home.excludedItems && home.excludedItems.map(item => 
                        <p>
                        Name: {item.name},
                        Listing: {item.listing}
                        </p>
                    )
                } 
                </td>
                </tr>
            </tbody>
        </table>

    
    </>
       
    }
 </p>
        </>
        )
     }
}
export default Home