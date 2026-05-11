import React, { Component } from 'react'
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    borderRadius: 20,
  },
  content: {
    padding: 24,
  },
}));

export const Projects = React.memo(function ProjectCard() {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  return (
      <>
        <div className="project_cards">
            <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <BrandCardHeader
                image={
                'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png'
                }
                extra={'Last updated 3/14/2021'}
            />
            <CardContent className={cardStyles.content}>
                <TextInfoContent
                classes={styles}
                overline={'ECampus'}
                heading={'Group Planning for Students'}
                body={
                    'This is communication system that runs on Firebase and React and allows for students and professionals to communicate with each other and have a place to manage the project status, and for user groups that are create towards each organization.'
                }
                />
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" href="https://elastic-euclid-62f3b2.netlify.app/" target ="_blank">
                    View Project
                </Button>
            </CardActions>
            </Card>
            </div>
            
        <div className="project_cards">
            <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <BrandCardHeader
                image={
                'https://pngimage.net/wp-content/uploads/2018/05/angular-logo-png.png'
                }          
                extra={'Last updated 5/27/2021'}
            />
            <CardContent className={cardStyles.content}>
                <TextInfoContent
                classes={styles}
                overline={'FPSToolkit'}
                heading={'FPS ESport Professional Info'}
                body={
                    'This is a website that uses both Angular and Firebase to display E-Sports information to users who want to get better at their given games. It uses tailwindcss and typescript to pass objects and models throughout the website. This website is built with 3 different people.'
                }
                />
            </CardContent>
             <CardActions>
                <Button size="small" color="primary" href="https://www.fpstoolkit.tech" target ="_blank">
                    View Project
                </Button>
            </CardActions>
            </Card>
        </div>

        <div className="project_cards">
            <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <BrandCardHeader
                image={
                'https://pngimage.net/wp-content/uploads/2018/06/swift-logo-png-8.png'
                }
                extra={'Last updated 4/20/2021'}
            />
            <CardContent className={cardStyles.content}>
                <TextInfoContent
                classes={styles}
                overline={'Valorant Randomizer'}
                heading={'Video Game Randomizer'}
                body={
                    'This is an iOS application that randomizes agents, weapons, and strategies for the game Valorant by Riot Games. Coded in Swift, the application makes your custom games with friends become more daring. Application is not out on the appstore, however you can view the github content of the application here.'
                }
                />
            </CardContent>
             <CardActions>
                <Button size="small" color="primary" href="https://github.com/roshanjamkatel/valorantRandomizer" target="_blank">
                    View Project on Github
                </Button>
            </CardActions>
            </Card>
        </div>

        <div className="project_cards">
            <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <BrandCardHeader
                image={
                'https://pngimage.net/wp-content/uploads/2018/06/java-logo-transparent-png-8.png'
                }
                extra={'Last updated 5/27/2021'}
            />
            <CardContent className={cardStyles.content}>
                <TextInfoContent
                classes={styles}
                overline={'GameVendorr'}
                heading={'Full Stack Videogame Marketplace'}
                body={
                    'This is a web application that uses MongoDB and PostgresSQL for the backend. It is not hosted but can be forked all looked at on my github. The website is a mock sale website for video games and allows for reviews. This is a simple, minimal version of steam. This website is created by 3 people.'
                }
                />
            </CardContent>
             <CardActions>
                <Button size="small" color="primary" href="https://github.com/roshanjamkatel/GameVendor" target="_blank">
                    View Project on Github
                </Button>
            </CardActions>
            </Card>
        </div>

        <div className="project_cards">
            <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <BrandCardHeader
                image={
                'https://pngimage.net/wp-content/uploads/2018/06/swift-logo-png-8.png'
                }
                extra={'Last updated 6/10/2021'}
            />
            <CardContent className={cardStyles.content}>
                <TextInfoContent
                classes={styles}
                overline={'Covid Vaccine Wallet'}
                heading={'Covid Vaccination Card Holder'}
                body={
                    'This is an iOS application that allows a user to scan and process a COVID-19 Vaccination card with security protections. Application is not out on the appstore but you can view the content on github.'
                }
                />
            </CardContent>
             <CardActions>
                <Button size="small" color="primary" href="" target="_blank">
                    View Project on Github
                </Button>
            </CardActions>
            </Card>
        </div>

         <div className="project_cards">
            <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <BrandCardHeader
                image={
                'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png'
                }
                extra={'Last updated 7/9/2021'}
            />
            <CardContent className={cardStyles.content}>
                <TextInfoContent
                classes={styles}
                overline={'www.rjamkatel.com'}
                heading={'Personal Website'}
                body={
                    'This website is a mock of linktree to contain all my information for quick and easy access, created using React, JS, and HTML.'
                }
                />
            </CardContent>
            </Card>
            </div>
    </>
    
  );
});



export default (Projects)
