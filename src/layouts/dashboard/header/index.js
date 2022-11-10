import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, Link } from '@mui/material';
import useLocales from '../../../hooks/useLocales';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { HEADER } from '../../../config';
// components
import Logo from '../../../components/Logo';
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';
//
import LanguagePopover from './LanguagePopover';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})(({ theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  background: '#000',
  height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
}));
const LinkStyle = styled(Link)({
  fontWeight: 'lighter',
  '&:hover': {
    color: '#2BB972',
  },
  color: 'white',
  fontSize: '16px',
  paddingLeft: '24px',
  transition: 'all ease 400ms',
});
// ----------------------------------------------------------------------

DashboardHeader.propTypes = {
  onOpenSidebar: PropTypes.func,
  isCollapse: PropTypes.bool,
  verticalLayout: PropTypes.bool,
};

export default function DashboardHeader({ onOpenSidebar, isCollapse = false, verticalLayout = false }) {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;
  const { translate } = useLocales();
  const isDesktop = useResponsive('up', 'lg');
  const topBarContent = [
    {
      path: 'https://backoffice.ollorun.com/login/client',
      name: 'CUSTOMER',
    },
    {
      path: 'https://backoffice.ollorun.com/',
      name: 'ADVISOR_DST',
    },
  ];
  return (
    <RootStyle isCollapse={isCollapse} isOffset={isOffset} verticalLayout={verticalLayout}>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {isDesktop && verticalLayout && <Logo sx={{ mr: 2.5 }} />}
        <Box>
          <IconButtonAnimate onClick={onOpenSidebar} sx={{ mr: 1, color: '#fff', fontSize: '36px' }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButtonAnimate>
        </Box>
        <Box
          sx={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <IconButtonAnimate>
            <Logo />
          </IconButtonAnimate>
        </Box>
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {topBarContent.map((data) => (
              <LinkStyle key={data.name} href={data.path} target="_blank" sx={{textTransform:"uppercase"}}>
                {translate(data.name)}
              </LinkStyle>
            ))}
          </Box>
          <LinkStyle  href="mailto:Support@ollorun.com" target="_blank" sx={{textTransform:"uppercase"}}>
                {translate("JOIN")}
            </LinkStyle>
          <LanguagePopover />
        </Stack>
      </Toolbar>
    </RootStyle>
  );
}
