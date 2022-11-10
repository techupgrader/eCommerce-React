/* eslint-disable react/prop-types */
import { m } from 'framer-motion';
import Slider from 'react-slick';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { varFade } from '../animate';

const Img = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  cursor: 'pointer',
});
const SliderStyle = styled(Slider)({
  '& img': {
    margin: 'auto',
    transition: 'all ease 1s',
  },
  '& .slick-next, & .slick-prev': {
    top: `calc(50% - 24px)`,
    visibility: 'visible',
    zIndex: '999',
  },
  '& .slick-next:before, & .slick-prev:before': {
    visibility: 'visible',
    fontSize: '36px',
  },
  '& .slick-next': {
    right: '40px',
  },
  '& .slick-prev': {
    left: '18px',
  },
});

export default function VideoSlide({ content }) {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  const isMobile = useMediaQuery('(max-width: 576px)');
  const settings = {
    infinite: true,
    speed: 1000,
    // autoplay: true,
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: isMobile ? 2 : 4,
  };
  const handleVideo = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Box>
      <m.div variants={varFade().inUp}>
        <SliderStyle {...settings} sx={{ maxWidth: '1200px', mx: 'auto' }}>
          {content.map((data, index) => (
            <Box key={index} sx={{ px: 1 }}>
              <Img src={data.path} alt="img1" onClick={handleVideo} />
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                {data.title}
              </Typography>
            </Box>
          ))}
        </SliderStyle>
      </m.div>
    </Box>
  );
}
