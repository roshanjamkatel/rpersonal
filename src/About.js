import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class About extends Component {
    render() {
        return (
          <div className="aboutme_card">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media.licdn.com/dms/image/v2/D5603AQGWwTFa1UZCFg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723052974739?e=2147483647&v=beta&t=Fa3361jJtY0tbvar8efa3mfdeZ6v2FWiWWhhlXnVg-Y"
              />
              <Card.Body>
                <Card.Title>Hello, I'm Roshan!</Card.Title>
                <Card.Text>
                  I'm a Software Engineer at Bank of America.
                </Card.Text>
                <Card.Text>
                  I also own a Coffee Roasting Business:{" "}
                  <a href="/coffee">RJAM Beans & Brew</a>
                </Card.Text>

                <form method="get" action="files/rjamkatel_resume.pdf">
                  <Button type="submit" variant="dark">
                    My Resume
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </div>
        );
    }
}


export default (About)
