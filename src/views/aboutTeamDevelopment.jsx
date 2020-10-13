import React from 'react';
import CardAbout from '../components/cardAbout';
import image from '../images/banner.jpg';
import { Container } from '@material-ui/core'

const AboutTeamDevelopment = () => {
    return (
        <Container data-aos='fade-right' maxWidth='md'>
            <CardAbout image={image} name='Edgar018'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id optio quam, nam pariatur dicta, qui sunt molestias error distinctio dolor quo temporibus, ipsam excepturi incidunt beatae cum cupiditate explicabo architecto?
            </CardAbout>
            <CardAbout image={image} name='Korkux'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id optio quam, nam pariatur dicta, qui sunt molestias error distinctio dolor quo temporibus, ipsam excepturi incidunt beatae cum cupiditate explicabo architecto?
            </CardAbout>
        </Container>
    );
}

export default AboutTeamDevelopment;