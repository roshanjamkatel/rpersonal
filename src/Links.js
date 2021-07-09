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
                    <Image className="circled_img" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/206801274_2611000242534750_4377716012143253614_n.jpg?_nc_cat=100&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Fmbd-lt6AtkAX8c7jms&_nc_ht=scontent-ort2-1.xx&oh=23a71c76bcfb1fecbb4d8108b0b407d8&oe=60EC6E8C" roundedCircle/>
                    <p id="instagramUsername">@r.jamkatel</p>
                </Container>
                <React.Fragment>
                    <hr></hr>
                    <Button size="large" variant="contained" href="http://www.github.com/roshanjamkatel" target="_blank">Github</Button><hr></hr>
                    <Button size="large" variant="contained" href="http://www.twitch.tv/calatlasbb" target="_blank">Twitch</Button><hr></hr>
                    <Button size="large" variant="contained" href="http://www.anchor.fm/the-floatcast" target="_blank">The Floatcast</Button><hr></hr>
                    <Button size="large" variant="contained" href="http://www.instagram.com/r.jamkatel" target="_blank">Instagram</Button><hr></hr>
                    <Button size="large" variant="contained" href="http://www.instagram.com/rjamkatelphotography" target="_blank">Photography Instagram</Button><hr></hr>
                    <Button size="large" variant="contained" href="https://www.tiktok.com/@roshanjamkatel?lang=en" target="_blank">Tiktok</Button><hr></hr>
                    <Button size="large" variant="contained" href="https://blog.rjamkatel.com/" target="_blank">Blog</Button>
                </React.Fragment>
            </div>
        )
    }
}


export default (Links)
