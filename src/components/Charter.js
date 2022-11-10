import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { MotionContainer, varFade } from './animate';
import useLocales from '../hooks/useLocales';

const RelativeDivStyle = styled('div')({
  position: 'relative',
  backgroundColor: '#000',
  '&>div': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) !important',
  },
});
Charter.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default function Charter({ text }) {
  const { translate } = useLocales();
  return (
    <MotionContainer>
      <RelativeDivStyle>
        <Box
          component="img"
          src="/assets/illustrations/charter.png"
          alt="charter"
          sx={{ minHeight: '130px', width: '100%', opacity: '0.8' }}
        />
        <Box>
          <m.div variants={varFade().inUp}>
            <Typography variant="h2" component="h2" sx={{ color: '#fff', textTransform: 'uppercase' }}>
              {translate(text)}
            </Typography>
          </m.div>
        </Box>
      </RelativeDivStyle>
    </MotionContainer>
  );
}
