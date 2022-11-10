import { Stack, Link, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import Logo from '../../../components/Logo';
import navConfig from '../navbar/NavConfig';
import useLocales from '../../../hooks/useLocales';
import { IconButtonAnimate } from '../../../components/animate';
import Iconify from '../../../components/Iconify';

const FooterStyle = styled('footer')(() => ({
  background: '#000',
  padding: '24px 0',
  color: '#838990',
  //   [theme.breakpoints.down('sm')]: {
  //     padding: '24px',
  //   },
}));
const LinkStyle = styled(Link)({
  fontWeight: 'lighter',
  '&:hover': {
    color: '#2BB972',
  },
  color: 'white',
  fontSize: '16px',
  textTransform: 'uppercase',
  transition: 'all ease 400ms',
});
export default function Footer() {
  const { translate } = useLocales();
  return (
    <FooterStyle>
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: { xs: '24px', lg: '48px' } }}
      >
        <Logo type={'full'} />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          spacing={{ xs: 3, lg: 5 }}
          sx={{ mt: { xs: '24px', lg: '0' } }}
        >
          {navConfig[0].items.map((e, index) => (
            <div key={index}>
              <LinkStyle href={e.path}>{translate(e.title)}</LinkStyle>
            </div>
          ))}
        </Stack>
      </Stack>
      <Divider sx={{ my: '24px' }} />
      <Stack mx={3} direction={{ xs: 'column', lg: 'row' }} justifyContent="space-between">
        <Box sx={{ width: '114.5px' }} />
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" component="span">
            {translate('FOOTER_TEXT1')}
            <br />
            {translate('FOOTER_TEXT2')}
          </Typography>
        </Box>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography variant="body1" component="span">
            Follow us:
          </Typography>
          <IconButtonAnimate
            sx={{ mr: 1, color: '#fff', fontSize: '20px' }}
            href="https://instagram.com/ollorun.care?r=nametag"
            target="_blank"
          >
            <Iconify icon="ph:instagram-logo-light" />
          </IconButtonAnimate>
        </Stack>
      </Stack>
    </FooterStyle>
  );
}
