/* eslint-disable */
import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
// @mui
import { Typography, Box, Stack, Container } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
// hooks
import useLocales from '../hooks/useLocales';
// components
import Page from '../components/Page';
import { MotionViewport, varFade, varZoom } from '../components/animate';
import Charter from '../components/Charter';
// import VideoGallery from 'src/components/video/VideoGallery';
import { styled } from '@mui/system';
import { nominalTypeHack } from 'prop-types';
// ----------------------------------------------------------------------

// const VideoBox = styled('div')({
//   position: 'relative',
//   width: '700px',
//   maxWidth: '100%',
//   margin: '0 auto',
//   cursor: 'pointer',
//   overflow: 'hidden',
//   '& .bgVideo': {
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     width: '100%',
//     height: '100%',
//     backgroundImage: 'url(https://unsplash.imgix.net/photo-1425036458755-dc303a604201?fit=crop&fm=jpg&q=75&w=1000)',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     zIndex: '2',
//   },
//   '& .bgVideo::after': {
//     content: '" "',
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0,0,0,0.1)',
//     zIndex: '3',
//   },
//   '& .btPlay': {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     margin: '-30px 0 0 -30px',
//     display: 'inline-block',
//     width: '60px',
//     height: '60px',
//     background: 'rgba(255,255,255,0.1)',
//     webkitBackdropFilter: 'blur(10px)',
//     border: 'none',
//     borderRadius: '50%',
//     textIndent: '-999em',
//     cursor: 'pointer',
//     zIndex: '2',
//     webkitTransition: 'all .3s ease-out',
//     transition: 'all .3s ease-out',
//   },

//   '& .btPlay:after': {
//     content: '" "',
//     position: 'absolute',
//     left: '50%',
//     top: '50%',
//     height: '0',
//     width: '0',
//     margin: '-12px 0 0 -6px',
//     border: 'solid transparent',
//     borderLeftColor: '#000',
//     borderWidth: '12px 20px',
//     webkitTransition: 'all .3s ease-out',
//     transition: 'all .3s ease-out',
//   },
//   '&:hover .btPlay': {
//     transform: 'scale(1.1)',
//   },
//   '&.open .bgVideo': {
//     visibility: 'hidden',
//     opacity: '0',

//     webkitTransition: 'all .6s .8s',
//     transition: 'all .6s .8s',
//   },
//   '&.open .videoContainer': {
//     opacity: '1',
//     webkitTransition: 'all .6s .8s',
//     transition: 'all .6s .8s'
//   },
//   '&.open button': {
//     display: 'none',
//   },
//   '& .videoContainer': {
//     position: 'relative',
//     width: '100%',
//     height: '0',
//     margin: '0',
//     zIndex: '1',
//     paddingBottom: '56.27198%',
//   },
//   '& .videoContainer iframe': {
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     width: '100%',
//     height: '100%',
//   },
// });
export default function VideoPage() {
  const { translate } = useLocales();
  const [data, setData] = useState('');
  const handlePlay = () => {
    setData('open');
  };
  return (
    <Page title="Video Page">
      <Charter text={'GREENS_VIDEOS'} />
      <Container sx={{py: 4,display: 'flex', justifyContent: 'center'}}>
        <MotionViewport>
          <m.div variants={varZoom().in}>
            {/* <VideoBox className={data?'open':''} sx={{ width: '700px', maxWidth: '100%', mx: 'auto', mt: { xs: -5, sm: -5, md: -8, lg: -10 } }}  onClick={handlePlay}>
            <Box className="bgVideo"> </Box>
            <button className="btPlay"> </button>
            <Box className="videoContainer">
              <iframe
                width="592"
                height="332"
                src="//cdn.shopify.com/s/files/1/0209/8446/files/F-Balm_Ellie_03_Coffee.mp4?rel=0&amp;autoplay=1"
                frameBorder="0"
                allowFullScreen="allowfullscreen"
                title="video"
              >
                {' '}
              </iframe>
            </Box>
          </VideoBox> */}
            <Box width='500px' height='auto' component="img" src="/assets/images/other/video-coming-soon.gif" />
          </m.div>
        </MotionViewport>
      </Container>

      {/* <VideoGallery /> */}
    </Page>
  );
}
