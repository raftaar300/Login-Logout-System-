
import React from 'react'
import { ListGroup, Card } from 'react-bootstrap'
const Ccard=({name , company  , phone})=>{
     return (<Card style={{ width: '18rem' }}>
                    <Card.Header>Profile</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Name  = {name}</ListGroup.Item>
                        <ListGroup.Item>Company = {company}</ListGroup.Item>
                        <ListGroup.Item>Phone Number = {phone}</ListGroup.Item>
                    </ListGroup>
                </Card>)
}
export default Ccard;