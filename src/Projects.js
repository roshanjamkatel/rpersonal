import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

class Projects extends Component {
    render() {
        return (
            <div className="project_cards">
                <CardColumns>
                    <Card  bg="light" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Social Media App</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">May 13, 2018</Card.Subtitle>
                            <Card.Text>
                                This social media app uses Firebase and Android Studios and is focused on helping people figure out if a job is right for them by giving them a platform to learn about the job expierence from employees that have been in their industry. It is also being developed to be a group organization tool.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Project Team Size: 2 people</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Tools: Android Studios, Java, Firebase</Card.Subtitle>
                        </Card.Body>
                    </Card>
                    

                    <Card  bg="light" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Personal Website</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Redesign as of Feb 21, 2021</Card.Subtitle>
                            <Card.Text>
                                This personal website is a simplified website to show my porfolio online, and all the major projects I have worked on.
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Project Team Size: 1 people</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Tools: HTML, CSS, React, JS</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </div>
        )
    }
}


export default (Projects)
