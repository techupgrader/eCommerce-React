/* eslint-disable */
import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
// @mui
import { Typography, Box, Stack } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
// hooks
import useLocales from '../hooks/useLocales';
// components
import Page from '../components/Page';
import { MotionViewport, varFade } from '../components/animate';
import Charter from '../components/Charter';
import FaqBox from '../components/Faq/FaqBox';
// ----------------------------------------------------------------------

export default function FaqPage() {
  const { translate } = useLocales();
  return (
    <Page title="Faq Page" sx={{ position: 'relative' }}>
      <Charter text='FAQ' />
      <MotionViewport>
        <Stack direction="column" alignItems="center" spacing="3" sx={{ px: 2, py: { xs: 3, md: 5 } }}>
          <m.div variants={varFade().inRight}>
            <FaqBox />
          </m.div>
        </Stack>
      </MotionViewport>
    </Page>
  );
}
