import React from "react";
import "./style.scss";
import { API } from "./../../../axios";
import { apis } from "./../../../constants";
import Button from "@material-ui/core/Button";

class AddEdit extends React.Component {
  /*async onSubmit(e) {
    e.preventDefault();
    const data = {};
    const formData = new FormData(e.target);
    data.name = formData.get("name");
    //data.mobile_no = formData.get("number");
    data.address = formData.get("address");
    data.pincode = formData.get("pin");
    data.city = formData.get("city");
    data.state = formData.get("state");
    data.country = formData.get("country");
    if (this.props.currentValue.name) {
      data.type = "update";
    } else {
      data.type = "new";
    }
    const response = await API.POST(apis.address_change, data);
    if (response.success) {
      this.props.success();
    }
  }
  
  

defaultValue={data.state}
   defaultValue={data.name}
   defaultValue={data.mobile_no}
   defaultValue={data.address}
   defaultValue={data.city}
defaultValue={data.country}
defaultValue={data.pin}
  
  */
 constructor() {
  super();

  this.state = {
    name: '',
    mobile:'',
    address :'',
    pin :'',
    state :'',
    city :'',
    country:''
};
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}
handleSubmit(event) {
  alert("Saved Successfully!")
  //this.props.history.push('/');
  event.preventDefault();
  console.log(this.state)

  const data = { name:this.state.name, mobile:this.state.mobile ,address:this.state.address , pin:this.state.pin, city:this.state.city, state:this.state.state, country:this.state.country }
  
  fetch('http://localhost:4000/add', { method: 'POST', 

  body: JSON.stringify(data), 

  headers:{ 'Content-Type': 'application/json' } })

  .then(res => res.json())

  .catch(error => console.error('Error:', error))

  .then(response => console.log('Success:', response));
 }
  render() {
    //const data = this.props.currentValue;
    const {name, mobile, address,pin, city, state, country } = this.state
    return (
      <div className="add-edit-wrapper">
        <div className="heading">Add/Edit Address</div>
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>{/*onSubmit={e => this.onSubmit(e)}>*/}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="name"
                onChange={this.handleChange}
                required
               
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                className="mobile-number"
                onChange={this.handleChange}
                required
               
              />
              <textarea
                name="address"
                className="address"
                placeholder="Address"
                onChange={this.handleChange}
                required
                
              />
              <input
                className="pin"
                type="tel"
                name="pin"
                placeholder="PIN"
                onChange={this.handleChange}
                required
                
              />
              <input
                className="city"
                type="text"
                name="city"
                placeholder="City"
                onChange={this.handleChange}
                required
                
              />
              <input
                className="state"
                type="text"
                name="state"
                placeholder="State"
                onChange={this.handleChange}
                required
          
              />
              <input
                className="country"
                type="text"
                name="country"
                placeholder="Country"
                onChange={this.handleChange}
                required
                
              />
              <Button
                variant="contained"
                color="secondary"
                className="submit button-red"
                onChange={this.handleChange}
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddEdit;
