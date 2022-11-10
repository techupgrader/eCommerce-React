import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Drawer, Link, Divider } from '@mui/material';
// hooks
import useLocales from '../../../hooks/useLocales';
// utils
import { NAVBAR } from '../../../config';
// components
import Logo from '../../../components/Logo';
import Scrollbar from '../../../components/Scrollbar';
import { NavSectionVertical } from '../../../components/nav-section';
//
import navConfig from './NavConfig';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

// ----------------------------------------------------------------------

NavbarVertical.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};
export default function NavbarVertical({ isOpenSidebar, onCloseSidebar }) {
  const { translate } = useLocales();
  const { pathname } = useLocation();

  const LinkStyle = styled(Link)({
    fontWeight: 'lighter',
    '&:hover': {
      color: '#2BB972',
    },
    color: '#95A1AA',
    fontSize: '13px',
    transition: 'all ease 400ms',
  });

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Logo />
        </Stack>
      </Stack>
      <NavSectionVertical navConfig={navConfig} />
      <Divider />
      <Stack direction='row' spacing={3} justifyContent="center" sx={{mt: '24px'}}>
        <LinkStyle href="https://backoffice.ollorun.com/login/client">{translate('CUSTOMER')}</LinkStyle>
        <LinkStyle href="https://backoffice.ollorun.com/" target="_blank">{translate('ADVISOR_DST')}</LinkStyle>
      </Stack>
    </Scrollbar>
  );

  return (
    <RootStyle>
      <Drawer open={isOpenSidebar} onClose={onCloseSidebar} PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH } }}>
        {renderContent}
      </Drawer>
    </RootStyle>
  );
}
