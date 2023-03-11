import React, { Component } from 'react';
import axios from 'axios';



class Reverser extends Component {
    state = { 
        num:"",
        reverseNum: "",
        pic_url: ""
     }

    handleChange = (e) =>{
        this.setState({num:e.target.value})
    }

    handleSubmit=()=>{
        axios.post('/reverser', this.state)
        .then(res => {
          this.setState({reverseNum:res.data.num, pic_url:res.data.pic_url})
        })
    }

    render() { 

        return ( 
          <div>
            <h1 className='text-center'>Mahmud Accounting Service</h1>
            <div className="container p-5"  >
                <form className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="number" className="sr-only">Number</label>
                        <input type="number"
                            value = {this.state.num} 
                            className="form-control" 
                            id="number" 
                            onChange={this.handleChange} 
                            placeholder="Your Phone Number"/>
                    </div>
                  <button type="button" className="btn btn-primary mb-2" onClick={this.handleSubmit}>submit</button>
                </form>
                
                <div className ="card" style={{width: "18rem"}}>
                  <img class="card-img-right" src={this.state.pic_url} alt="Card image cap" />
                  <div className ="card-body">
                    <h5 className ="card-title">Your Name</h5>
                    <p className ="card-text">{this.state.reverseNum?this.state.reverseNum:""}</p>
                  </div>
                </div>
            </div>
          </div>

         );
    }
}
 
export default Reverser;