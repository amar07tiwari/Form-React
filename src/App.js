
import { useState } from 'react';
import './App.css';

function App() {

const [formData ,setFormData] = useState( {firstName :"", lastName :"", email :"", country:"India", street: "", city: "",state: "", postalCode :"", comments:false, candidates:false, offers:false, pushNotifications: "" });

function changeHandler(event) {
  const {name, value, checked, type} = event.target;
  setFormData( (prev) => {
  return ({...prev, [name]:type === "checkbox" ? checked : value}) });
}

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of Form Data");
    console.log(formData);

    let data= Object.keys(formData).map( (key) => `${key} = ${formData[key]}`);
    data = data.join("\n");
    alert(data);
  }
  
  return (
    <div className="App">
     <form onSubmit={submitHandler}>

    <label htmlFor='firstName'>First Name : </label>
    <br></br>    
      <input 
      type="text"
      placeholder='First Name'
      name='firstName'
      id='firstName'
      value = {formData.firstName}
      onChange = {changeHandler}
      />

    <br></br>
     <label htmlFor='lastName'>Last Name : </label>
     <br></br> 
      <input 
      type="text"
      placeholder='Last Name'
      name='lastName'
      id='lastName'
      value = {formData.lastName}
      onChange = {changeHandler}
      />

    <br></br>
     <label htmlFor='email'>Email : </label>
     <br></br>  
      <input 
      type="text"
      placeholder='email123@gmail.com'
      name='email'
      id='email'
      value = {formData.email}
      onChange = {changeHandler}
      />

    <br></br>
      <label htmlFor='country'>Country :</label>
      <br></br>
      <select
      id='country'
      name='country'
      value={formData.country}
      onChange = {changeHandler}
      >
        <option>India</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Russia</option>
      </select>

      <br></br>
     <label htmlFor='street'>Street : </label>
     <br></br>  
      <input 
      type="text"
      placeholder='street'
      name='street'
      id='street'
      value = {formData.street}
      onChange = {changeHandler}
      />

    <br></br>
     <label htmlFor='city'>City : </label>
     <br></br>  
      <input 
      type="text"
      placeholder='City'
      name='city'
      id='city'
      value = {formData.city}
      onChange = {changeHandler}
      />

    <br></br>
     <label htmlFor='state'>State : </label>
     <br></br>  
      <input 
      type="text"
      placeholder='State'
      name='state'
      id='state'
      value = {formData.state}
      onChange = {changeHandler}
      />

    <br></br>
     <label htmlFor='postalCode'>Postal Code : </label>
     <br></br>  
      <input 
      type="text"
      placeholder='xxxxxx'
      name='postalCode'
      id='postalCode'
      value = {formData.postalCode}
      onChange = {changeHandler}
      />

      <br></br>
      <br></br>
      <fieldset>
        <legend>By Email</legend>

        <input
        type ="checkbox"
        id ="comments"
        name ='comments'
        checked ={formData.comments}
        onChange = {changeHandler}
        />
        <div>
        <label htmlFor='comments'>Comments</label>
        <p>Get notified when someone post acomment on posting.</p>
        </div>

        <input
        type ="checkbox"
        id ="candidates"
        name ='candidates'
        checked ={formData.candidates}
        onChange = {changeHandler}
        />
        <div>
        <label htmlFor='candidates'>Candidates</label>
        <p>Get notified when candidate applies for a job.</p>
        </div>

        <input
        type ="checkbox"
        id ="offers"
        name ='offers'
        checked = {formData.offers}
        onChange = {changeHandler}
        />
        <div>
        <label htmlFor='offers'>Offers</label>
        <p>Get notified when candidates accepts or rejects an offer.</p>
        </div>
        
      </fieldset>

      <br></br>
      <fieldset>
        <legend>Push Notifications</legend>
        <p>These are deliverd via SMS to your mobile phone.</p>

        <input 
        type="radio"
        id ="pushEverything"
        name='pushNotifications'
        value="Everything"
        onChange = {changeHandler}
        ></input>
        <label htmlFor='pushEverything'>Everything</label>

        <br></br>
        <input 
        type="radio"
        id ="pushNothing"
        name='pushNotifications'
        value="No push notifications"
        onChange = {changeHandler}
        ></input>
        <label htmlFor='pushNothing'>Push Nothing</label>

        <br></br>
        <input 
        type="radio"
        id ="pushEmail"
        name='pushNotifications'
        value="Same as email"
        onChange = {changeHandler}
        ></input>
        <label htmlFor='pushEmail'>Same as email</label>
      </fieldset>
      <br></br>

      <button className='button' type='submit'>Save</button>
     </form>
    </div>
  );
}

export default App;
