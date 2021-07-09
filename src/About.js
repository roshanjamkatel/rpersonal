import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class About extends Component {
    render() {
        return (
            <div className="aboutme_card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/206801274_2611000242534750_4377716012143253614_n.jpg?_nc_cat=100&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Fmbd-lt6AtkAX8c7jms&_nc_ht=scontent-ort2-1.xx&oh=23a71c76bcfb1fecbb4d8108b0b407d8&oe=60EC6E8C"/>
                    <Card.Body>
                        <Card.Title>Hello, I'm Roshan!</Card.Title>
                        <Card.Text>
                            I'm a programmer working at a big bank, and love to hop on projects and create applications that I use daily.
                            I also run a Podcast called the Floatcast, stream on twitch, and blog sometimes (if you want to check it out under links) ;)
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
