import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
// routes
// components
import { MotionContainer, varFade } from '../animate';
import HeroSlide from './HeroSlide';
import useLocales from '../../hooks/useLocales';
// ----------------------------------------------------------------------

const Img = styled('img')({
  width: '100%',
  height: 'auto',
  minHeight: '130px',
});
const RelativeDivStyle = styled('div')({
  position: 'relative',
  backgroundColor: '#000',
  '& img': {
    width: '100%',
    height: 'auto',
    minHeight: '130px',
    opacity: '0.8'
  },
});

// ----------------------------------------------------------------------

export default function HomeHero() {
  const { translate } = useLocales();
  return (
    <Box sx={{lineHeight:'0'}}>
      <MotionContainer>
        <RelativeDivStyle sx={{ position: 'relative' }}>
          <Img src="/assets/illustrations/charter.png" alt="charter" />
          <Box sx={{ position: 'absolute', left: '0', top: '15%', width: '100%', textAlign: 'center' }}>
            <m.div variants={varFade().inUp}>
              <Typography
                variant="h5"
                sx={{
                  color: 'common.white',
                  px: '8px',
                }}
              >
                {translate('LANDING_HEADER_TEXT')}
              </Typography>
            </m.div>
          </Box>
        </RelativeDivStyle>
        <Box sx={{ marginTop: '-10%', mx: 'auto' }}>
          <HeroSlide />
        </Box>
      </MotionContainer>
    </Box>
  );
}
