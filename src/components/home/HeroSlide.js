import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import Image from '../Image';

const settings = {
  // fade: true,
  infinite: true,
  speed: 600,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const imgs = [
  {
    title: 'body',
    path: '/assets/images/HeroCaro/1.png',
  },
  {
    title: 'flower',
    path: '/assets/images/HeroCaro/2.png',
  },
  {
    title: 'food',
    path: '/assets/images/HeroCaro/3.png',
  },
  {
    title: 'oil',
    path: '/assets/images/HeroCaro/4.png',
  },
];
const SliderStyle = styled(Slider)({
  '& .slick-next:before,& .slick-prev:before': {
    fontSize: '36px',
    color: '#000',
  },
  '& .slick-next, & .slick-prev': {
    opacity: '0',
    zIndex: '4',
    transition: 'opacity ease 300ms',
  },
  '&:hover': {
    button: {
      opacity: '1',
    },
  },
  '& .slick-next': {
    right: '36px',
  },
  '& .slick-prev': {
    left: '20px',
  },
  '& img': {
    margin: 'auto',
    opacity: '1',
  },
  '& .hoverBox': {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    h6: {
      fontSize: '20px',
      textAlign: 'center',
      margin: '30px  0',
      color: '#000',
      transition: 'margin ease 200ms',
    },
    backgroundColor: '#fff',
    opacity: '0',
    transition: 'opacity ease 200ms',
    cursor: 'pointer',
  },
  '& .caroBox:hover': {
    '& .hoverBox': { opacity: 1 },
    h6: {
      margin: '0',
    },
  },
});
export default function HeroSlide() {
  return (
    <div>
      <SliderStyle {...settings}>
        {imgs.map((data, index) => (
          <Box key={index} sx={{ position: 'relative' }} className="caroBox">
            <Image src={data.path} alt="" />
            <Box className="hoverBox" to={`/collection/${data.title}`} component={RouterLink}>
              <Box>
                <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
                  {data.title} Collection
                </Typography>
                <Typography variant="subtitle1">CBD</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </SliderStyle>
    </div>
  );
}
