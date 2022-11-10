/* eslint-disable */
// @mui
import { Typography, Stack } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
// hooks
import useLocales from '../hooks/useLocales';
// components
import Page from '../components/Page';
import Charter from '../components/Charter';
import Mag from '../components/Mag';
// ----------------------------------------------------------------------

export default function MagPage() {
  const { translate } = useLocales();
  return (
    <Page title="Mag Page" sx={{ position: 'relative' }}>
      <Charter text={'THE_CBD_MAG'} />
        <Stack direction="column" alignItems="center" spacing="3" sx={{ px: 2, py: { xs: 3, md: 5 } }}>
          {/* <m.div variants={varFade().inRight}>
            <Typography variant="h2" component="h3" textAlign="center" sx={{ fontWeight: 'lighter', pb: 4 }}>
              {translate('Your_mag_is_coming_soon')}
            </Typography>
          </m.div> */}
          <Mag />
        </Stack>
    </Page>
  );
}
