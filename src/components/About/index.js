import { m } from 'framer-motion';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import useLocales from '../../hooks/useLocales';
import { MotionViewport, varFade, varFlip } from '../animate';
import BotImgCard from './BotImgCard';

export default function About() {
  const { translate } = useLocales();
  const data = [
    {
      title: 'BODY',
      path: '/assets/images/HeroCaro/1.png',
    },
    {
      title: 'FOOD',
      path: '/assets/images/HeroCaro/3.png',
    },
    {
      title: 'OIL',
      path: '/assets/images/HeroCaro/4.png',
    },
    {
      title: 'FLOWER',
      path: '/assets/images/HeroCaro/2.png',
    },
  ];
  return (
    <Container sx={{ maxWidth: '1200px', mx: 'auto', py: 6 }}>
      <MotionViewport>
        <m.div variants={varFlip().inX}>
          <Box
            component="img"
            src="/logo/twologo.png"
            sx={{ ml: 'auto', mb: 6, width: { xs: '140px', sm: '200px' } }}
          />
        </m.div>
      </MotionViewport>
      <MotionViewport>
        <Stack>
          <Box mb={3}>
            <m.div variants={varFade().inDown}>
              <Box component="img" src="/assets/images/other/bglogo.jpg" sx={{ width: '100%' }} />
            </m.div>
          </Box>
          <Box>
            <m.div variants={varFade().inRight}>
              <Typography
                variant="body1"
                component="p"
                textAlign="justify"
                dangerouslySetInnerHTML={{ __html: translate('ABOUT_TEXT') }}
              />
            </m.div>
          </Box>
        </Stack>
      </MotionViewport>
      <MotionViewport>
        <Box sx={{ mt: 5 }}>
          <m.div variants={varFade().inUp}>
            <Typography variant="h3" component="h3" textAlign="center">
              {translate('OUR_OFFERS')}
            </Typography>
          </m.div>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {data.map((e, index) => (
              <BotImgCard key={index} title={e.title} path={e.path} />
            ))}
          </Grid>
        </Box>
      </MotionViewport>
    </Container>
  );
}
