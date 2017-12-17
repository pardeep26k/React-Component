import React from 'react';
import './Form.css';

class From extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      first: '',
      last: '',
      text:'',
      select:'',
      isGoing:true
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name =event.target.name;
    this.setState({
      [name]: value
    });
    
    
  }

  handleSubmit(event) {
        alert(JSON.stringify(this.state));

    //alert('First Name : ' + this.state.first+' Last Name:'+ this.state.last+' Text Area :'+this.state.text);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div>
        <label>
          First Name :
          <input type="text" name='first' value={this.state.first} onChange={this.handleChange} />
        </label>
      </div>
      <div>
         <label>
          Last Name :
          <input type="text" name='last' value={this.state.last} onChange={this.handleChange} />
        </label>
      </div>
      <div>
         <label>
        Select  
          <select name ='select' value={this.state.select} onChange={this.handleChange}>
           <option value="">Select Option</option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
    </div>
         <div>
    <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            onChange={this.handleInputChange} />
        </label>
        </div>
     <div>
         <label>
          Essay:
          <textarea name='text' value={this.state.text} onChange={this.handleChange} />
        </label>
    </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default From;
