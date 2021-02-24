import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class About extends Component {
    render() {
        return (
            <div className="aboutme_card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/132013337_2479667055668070_8208282061471429454_o.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=uYA_6QWvm4kAX-7jCn6&_nc_ht=scontent-ort2-2.xx&oh=b4abec559b3ff51702c9b6745cb67e45&oe=605818FE" />
                    <Card.Body>
                        <Card.Title>Hello, I'm Roshan!</Card.Title>
                        <Card.Text>
                            I'm currently a senior at DePaul University studying computer science.<br></br>
                            I run a Podcast called the Floatcast, stream on twitch, and blog sometimes.
                        </Card.Text>
                        <form method="get" action="files/rjamkatel_resume.pdf">
                            <Button type="submit" variant="dark">My Resume</Button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}


export default (About)
