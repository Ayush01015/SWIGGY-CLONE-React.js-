import React, {useContext} from 'react'
import "./contact.css"
import { Formik } from 'formik';
import UserContext from '../../Utils/userContext';

const Contact = () => {

  const {user} = useContext(UserContext);
  return (
    <div className='contact-pag'>
    <h1 className='cont-heading'>
      Contact Us
    </h1>
      <span> {user.name}</span><br/>
      <span> {user.email}</span>
    </div>
  )
}

export default Contact
