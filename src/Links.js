import React, { Component } from 'react'
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

class Links extends Component {
    render() {
        return (
            <div className="link_buttons">
                <Container>
                    <Image className="circled_img" src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/132013337_2479667055668070_8208282061471429454_o.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=uYA_6QWvm4kAX-7jCn6&_nc_ht=scontent-ort2-2.xx&oh=b4abec559b3ff51702c9b6745cb67e45&oe=605818FE" roundedCircle/>
                    <p>@r.jamkatel</p>
                </Container>
                <React.Fragment>
                    <hr></hr>
                    <AwesomeButton type="primary" size="large" href="http://blog.rjamkatel.com/">Blog</AwesomeButton><hr></hr>
                    <AwesomeButton type="primary" size="large" href="https://anchor.fm/the-floatcast">The Floatcast</AwesomeButton><hr></hr>
                    <AwesomeButton type="primary" size="large" href="https://www.twitch.tv/calatlasbb">Twitch</AwesomeButton><hr></hr>
                    <AwesomeButtonSocial type="instagram" size="large" href="https://www.instagram.com/rjamkatelphotography">photography</AwesomeButtonSocial><hr></hr>
                    <AwesomeButtonSocial type="instagram" size="large" href="https://www.instagram.com/r.jamkatel">r.jamkatel</AwesomeButtonSocial>
                </React.Fragment>
            </div>
        )
    }
}


export default (Links)
