import React from 'react'
import { ListGroup, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Ccard from './cards'
const Search = () => {
    const searches = useSelector((state) => state.UserSeacrch);
    console.log("seacrh result ", searches)
    return (

       
           !searches.length ?
                (<Card style={{ width: '18rem' }}>
                    <Card.Header>No User Found </Card.Header>
                </Card>) :
                (
                    
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>Profile</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Name  = {searches[0].name}</ListGroup.Item>
                                <ListGroup.Item>Company = {searches[0].company}</ListGroup.Item>
                                <ListGroup.Item>Phone Number = {searches[0].phone}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                 
                )


      

    )
}

export default Search;