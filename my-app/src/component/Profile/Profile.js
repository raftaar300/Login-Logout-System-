import React  , {useState} from 'react'
import {Card  , ListGroup , Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {signin }from '../../actions/Index'

const Profile = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const [profile , setprofile] =  useState(JSON.parse(localStorage.getItem('profile')))
   const  handleclick = ()=>{
    dispatch({ type: "LOGOUT" });

    history.push('/');

    setprofile(null);
   }
    return(
   <>
   <Card style={{ width: '18rem' }}>
  <Card.Header>Profile</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Name  = {profile.result.name}</ListGroup.Item>
    <ListGroup.Item>Company = {profile.result.company}</ListGroup.Item>
    <ListGroup.Item>Phone Number = {profile.result.phone}</ListGroup.Item>
  </ListGroup>
  <Button variant="primary"onClick = {handleclick}>Logout</Button>
</Card>
   </>    );
}

export default Profile;