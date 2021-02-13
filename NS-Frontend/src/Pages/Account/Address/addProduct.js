import React from "react";
import "./style.scss";
import { API } from "./../../../axios";
import { apis } from "./../../../constants";
import axios from 'axios';
import Button from "@material-ui/core/Button";

class AddProduct extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    selectedFile: null
  

  }
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}
onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
}

onClickHandler = (event) => {
  event.preventDefault();
    const data = new FormData() 
    data.append('img', this.state.selectedFile);
    data.append('product_id', this.state.product_id);
    data.append("title", this.state.title);
    data.append("brand", this.state.brand);
    data.append("desc", this.state.desc);
    data.append("price", this.state.price);
    data.append("category", this.state.category);
    data.append("discount", this.state.discount);
    data.append("quantity", this.state.quantity);
    console.log(data);
    axios.post("http://localhost:4000/addProduct", data)
    .then(res => { 
      console.log(res.data);
      if(res.data.success)
      console.log(res.data);

        else
          alert("Failed to Upload");
    })
          }

  render() {
    //const data = this.props.currentValue;
    //const data ={selectedFile, product_id, title, desc, brand, price, category,quantity, discount} = this.state
    return (
      <div className="add-edit-wrapper">
        <div className="heading">Add Products</div>
        <div className="form-wrapper">
          {/*onSubmit={e => this.onSubmit(e)}>*/}
            <div>
            <input
                type="text"
                name="product_id"
                placeholder="Product ID"
                className="name"
                onChange={this.handleChange}
                required
               
              />
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="name"
                onChange={this.handleChange}
                required
               
              />
              <input
                type="text"
                name="desc"
                placeholder="Description"
                className="mobile-number"
                onChange={this.handleChange}
                required
               
              />
              <input
                type="file"
                name="img"
                className="address"
                placeholder=""
                onChange={this.onChangeHandler}
                required
                
              />
              <input
                className="price"
                type="text"
                name="brand"
                placeholder="Brand "
                onChange={this.handleChange}
                required
                
              />
              <input
                className="price"
                type="number"
                name="price"
                placeholder="Price"
                onChange={this.handleChange}
                required
                
              />
              <input
                className="category"
                type="text"
                name="category"
                placeholder="Category "
                onChange={this.handleChange}
                required
                
              />
              <input
                className="state"
                type="number"
                name="discount"
                placeholder="Discount % "
                onChange={this.handleChange}
                required
          
              />
              <input
                className="country"
                type="number"
                name="quantity"
                placeholder="Quantity "
                onChange={this.handleChange}
                required
                
              />
              <button
                variant="contained"
                color="secondary"
                className="submit button-red"
                onClick={this.onClickHandler}
                type="button"
              >
                Save
              </button>
            </div>
          
        </div>
      </div>
    );
  }
}
export default AddProduct;
