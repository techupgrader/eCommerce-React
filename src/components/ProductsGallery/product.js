/* eslint-disable */
import { Box, Stack, Typography, Button, Link, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import useLocales from '../../hooks/useLocales';

// const isMobile = useMediaQuery('(max-width: 576px)');

const Img = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  padding: '56px 0',
});
const Boxstyle = styled(Box)({
  '& img': {
    margin: 'auto',
    transition: 'all ease 1s',
  },
  '& a': {
    visibility: 'hidden',
    transition: 'all ease 300ms',
  },

  '&>div:hover': {
    cursor: 'pointer',
    img: {
      opacity: '0.2',
    },
    a: {
      visibility: 'visible',
    },
    '.nameBox': {
      opacity: 0,
    },
  },
  '& .nameBox': {
    position: 'absolute',
    left: '0',
    bottom: '20px',
    width: '100%',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: 'opacity ease 300ms',
  },
  '& .nameBox>span': {
    fontSize: '14px',
  },
});
const StackStyle = styled(Stack)({
  position: 'absolute',
  left: '0',
  bottom: '0',
  width: '100%',
  '& a': {
    color: '#000',
    width: '50%',
    fontWeight: 'lighter',
  },
  '& a:hover': {
    color: '#fff',
    backgroundColor: '#000',
  },
});
const QuickBoxStyle = styled(Stack)({
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '100%',
  transform: 'translate(-50%, -50%)',
  '& a': {
    color: '#000',
    width: '50%',
    margin: '0 auto',
    fontWeight: 'lighter',
  },
  '& a:hover': {
    color: '#fff',
    backgroundColor: '#000',
  },
});
const ButtonStyle = styled(Button)({
  borderColor: '#000 !important',
  borderRadius: '0',
  '&:before': {
    borderColor: '#fff !important',
  },
});

export default function Product(props) {
  const { title, name, path, index } = props;
  const { translate } = useLocales();
  const text = '/productdetail/';
  const dash = '/';
  return (
    <Boxstyle>
      <Box sx={{ background: '#E9E8E4', position: 'relative' }}>
        <Img src={path} alt="img1" />
        <QuickBoxStyle>
          <ButtonStyle variant="outlined" href={`${text}${props.title}${dash}${index}`}>
            {translate('QUICK_VIEW')}
          </ButtonStyle>
        </QuickBoxStyle>
        <StackStyle direction="row">
          <ButtonStyle variant="outlined" href="https://backoffice.ollorun.com/login/client">
            {translate('CUSTOMER')}
          </ButtonStyle>
          <ButtonStyle variant="outlined" href="https://backoffice.ollorun.com/" target="_blank">
            {translate('ADVISOR_DST')}
          </ButtonStyle>
        </StackStyle>
        <Box className="nameBox">
          <Typography component="span">{translate(name)}</Typography>
          <br />
          CBD
        </Box>
      </Box>
    </Boxstyle>
  );
}
