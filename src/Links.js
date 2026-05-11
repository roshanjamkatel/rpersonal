import React, { Component } from 'react'
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import Button from '@material-ui/core/Button';
import "react-awesome-button/dist/styles.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

class Links extends Component {
    render() {
        return (
          <div className="link_buttons">
            <Container>
              <Image
                className="circled_img"
                src="https://media.licdn.com/dms/image/v2/D5603AQGWwTFa1UZCFg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723052974739?e=2147483647&v=beta&t=Fa3361jJtY0tbvar8efa3mfdeZ6v2FWiWWhhlXnVg-Y"
                roundedCircle
              />
              <p id="instagramUsername">@r.jamkatel</p>
            </Container>
            <React.Fragment>
              <hr></hr>
              <Button
                size="large"
                variant="contained"
                href="http://www.github.com/roshanjamkatel"
                target="_blank"
              >
                Github
              </Button>
              <hr></hr>
              <Button
                size="large"
                variant="contained"
                href="http://www.twitch.tv/calatlasbb"
                target="_blank"
              >
                Twitch
              </Button>
              <hr></hr>
              <Button
                size="large"
                variant="contained"
                href="http://www.instagram.com/r.jamkatel"
                target="_blank"
              >
                Instagram
              </Button>
              <hr></hr>
              <Button
                size="large"
                variant="contained"
                href="http://www.instagram.com/rjamkatelphotography"
                target="_blank"
              >
                Photography Instagram
              </Button>
              <hr></hr>
              <Button
                size="large"
                variant="contained"
                href="https://www.tiktok.com/@roshanjamkatel?lang=en"
                target="_blank"
              >
                Tiktok
              </Button>
              <hr></hr>
              <Button
                size="large"
                variant="contained"
                href="https://blog.rjamkatel.com/"
                target="_blank"
              >
                Blog
              </Button>
            </React.Fragment>
          </div>
        );
    }
}


export default (Links)
