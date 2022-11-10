import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { m } from 'framer-motion';
import { varFade } from '../animate';
import useLocales from '../../hooks/useLocales';

const BoxStyle = styled('div')({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  textAlign: 'center',
  '& h4': {
    fontWeight: 'lighter',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    padding: '8px 0',
  },
});
BotImgCard.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};
export default function BotImgCard({ title, path }) {
  const { translate } = useLocales();
  return (
    <Grid item md={3} xs={6} sm={3}>
      <m.div variants={varFade().inUp}>
        <Box sx={{ position: 'relative' }}>
          <Box component="img" src={path} width="100%" height="auto" />
          <BoxStyle>
            <Typography variant="h4" component="h4" color="white">
              {translate(title)}
            </Typography>
          </BoxStyle>
        </Box>
      </m.div>
    </Grid>
  );
}
