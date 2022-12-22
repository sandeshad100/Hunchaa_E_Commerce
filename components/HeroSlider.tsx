import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Image from 'next/image'
import { url } from "inspector";

export default class HeroSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                   <Box>
                   <Box sx={{background: `url(${'https://picsum.photos/id/237/200/300'})`, backgroundSize:'cover', height:"100vh", width:'100%'}}>
                    <Typography>1</Typography>
                   
                    </Box>
                   </Box>
                    <Box>
                        <Typography>2</Typography>
                    </Box>
                    <Box>
                        <Typography>3</Typography>
                    </Box>
                    <Box>
                        <Typography>4</Typography>
                    </Box>
                    <Box>
                        <Typography>5</Typography>
                    </Box>
                    <Box>
                        <h3>6</h3>
                    </Box>
                </Slider>
            </div>
        );
    }
}
