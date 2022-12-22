import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Slider from './MySlider';
import Image from 'next/image'
import { Avatar } from '@mui/material';
import { Typography } from '@mui/material';
import { display } from '@mui/system';
import HeroSlider from './HeroSlider';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const categoryGrid = {
  // backgroundColor:'green',
  
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center',
  flexDirection: 'column'


};
const display_center = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center',
}
const category_name = {
  mt:1
}

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, mt: 5, }}>
      <Grid container spacing={3} sx={{paddingLeft:'70px',paddingRight:'70px'}}>
        <Grid sx={categoryGrid} item xs={1}>
          <Item sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center' }}>

            <Box sx={display_center}>
              <Avatar alt="Remy Sharp" src="/images/laptop.png" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Laptop</Typography>
            </Box>
          </Item>
        </Grid>

        <Grid sx={categoryGrid} item xs={1}>
          <Item sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center' }}>

            <Box sx={display_center}>
              <Avatar alt="Remy Sharp" src="/images/mobile.jpg" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Mobile</Typography>
            </Box>
          </Item>
        </Grid>

        <Grid sx={categoryGrid} item xs={1}>
          <Item sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center' }}>

            <Box sx={display_center}>
              <Avatar alt="Remy Sharp" src="/images/beauty.jpg" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Beauty</Typography>
            </Box>
          </Item>
        </Grid>

        <Grid sx={categoryGrid} item xs={1}>
          <Item sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center' }}>

            <Box sx={display_center}>
              <Avatar alt="Remy Sharp" src="/images/grocery.jpg" sx={{ width: 90, height: 90}} />
            </Box>
            <Box >
              <Typography sx={category_name}>Grocery</Typography>
            </Box>
          </Item>
        </Grid>

        <Grid sx={categoryGrid} item xs={1}>
          <Item sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center' }}>

            <Box sx={display_center}>
              <Avatar alt="Remy Sharp" src="/images/fashion.jpg" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Fashion</Typography>
            </Box>
          </Item>
        </Grid>

        <Grid sx={categoryGrid} item xs={1}>
          <Item sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center' }}>

            <Box sx={display_center}>
              <Avatar alt="Remy Sharp" src="/images/Books.png" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Books</Typography>
            </Box>
          </Item>
        </Grid>
        <Grid sx={categoryGrid} item xs={1}>
          <Item sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center' }}>

            <Box sx={display_center}>
              <Avatar alt="Remy Sharp" src="/images/mobile.jpg" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Smartphone</Typography>
            </Box>
          </Item>
        </Grid>
        <Grid sx={categoryGrid} item xs={1}>
          <Item sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center' }}>

            <Box sx={display_center}>
              <Avatar alt="Remy Sharp" src="/images/furniture.png" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Furniture</Typography>
            </Box>
          </Item>
        </Grid>
        <Grid sx={categoryGrid} item xs={1}>
          <Item sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center' }}>

            <Box sx={display_center}>
              <Avatar alt="Remy Sharp" src="/images/grocery.jpg" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Grocery</Typography>
            </Box>
          </Item>
        </Grid>
        <Grid sx={categoryGrid} item xs={1}>
          <Item sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center' }}>

            <Box sx={display_center}>
              <Avatar alt="Remy Sharp" src="/images/appliance.png" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Appliance</Typography>
            </Box>
          </Item>
        </Grid>
        <Grid sx={categoryGrid} item xs={1}>
          <Item sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center' }}>

            <Box sx={display_center}>
              <Avatar alt="Remy Sharp" src="/images/Laptop.png" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Laptop</Typography>
            </Box>
          </Item>
        </Grid>
        <Grid sx={categoryGrid} item xs={1}>
          <Item sx={{ width: 1, display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center' }}>

            <Box sx={display_center}>
              <Avatar alt="Remy Sharp" src="/images/facewash.png" sx={{ width: 90, height: 90 }} />
            </Box>
            <Box >
              <Typography sx={category_name}>Fashwash</Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <HeroSlider/>
    </Box>
   


  );
}