/* eslint-disable */
import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Iconify from '../components/Iconify';
// @mui
import { Container, Typography, Box, Stack, IconButton } from '@mui/material';
// hooks
import useLocales from '../hooks/useLocales';
// components
import Page from '../components/Page';
import MagConfig from '../components/Mag/MagConfig';
import { MotionContainer, varFade } from '../components/animate';
// ----------------------------------------------------------------------

export default function MagDetail() {
  const { translate } = useLocales();
  const { num } = useParams();
  const [data, setData] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    setData(MagConfig[num - 1]);
  }, []);

  return (
    <Page title="Mag Detail">
      <MotionContainer sx={{ px: '16px' }}>
        <Stack direction="column" py={5}>
          <m.div variants={varFade().inUp}>
            <Box component="img" src={data.imagepath} width="1000px" height="auto" sx={{ mx: 'auto' }} />
          </m.div>
          <Stack direction="column" justifyContent="center" mx="auto" mt={4} sx={{ width: '1000px', maxWidth: '100%' }}>
            <m.div variants={varFade().inUp}>
              <Stack direction="row" justifyContent="space-between" my={2} color="#FF48B6">
                <Typography variant="h3" component="h3" dangerouslySetInnerHTML={{ __html: translate(data.title) }} />
                <Box>
                  <IconButton onClick={() => navigate('/mag')}>
                    <Iconify icon={'akar-icons:arrow-back-thick'} color='#FF48B6' width={20} height={20} />
                  </IconButton>
                </Box>
              </Stack>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography
                variant="body1"
                component="p"
                textAlign="justify"
                dangerouslySetInnerHTML={{ __html: translate(data.content) }}
              />
            </m.div>
          </Stack>
        </Stack>
      </MotionContainer>
    </Page>
  );
}
