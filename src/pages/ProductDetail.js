/* eslint-disable */
import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// @mui
import { Container, Typography, Box, Stack, IconButton, Button, Link } from '@mui/material';
import Iconify from '../components/Iconify';
// hooks
import useLocales from '../hooks/useLocales';
// components
import Page from '../components/Page';
import ProductConfig from '../components/productdetail/ProductConfig';
import { IconButtonAnimate, MotionViewport, varFade, varFlip } from '../components/animate';
// ----------------------------------------------------------------------

export default function ProductDetail() {
  const [data, setData] = useState({});
  const { name, id } = useParams();
  const { translate } = useLocales();
  const navigate = useNavigate();
  useEffect(() => {
    ProductConfig.map((item) => {
      const { foldername, content } = item;
      if (foldername === name) {
        setData(content[Number(id)]);
      }
    });
  }, []);

  return (
    <Page title="Product Detail" sx={{ position: 'relative' }}>
      <MotionViewport sx={{ px: '16px' }}>
        <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ pb: '48px', maxWidth: '1200px', mx: 'auto' }}>
          <m.div variants={varFade().inUp}>
            <Box component="img" src={translate(data.path)} width="600px" height="auto" sx={{ mx: 'auto' }} />
          </m.div>
          <Stack direction="column" justifyContent="center" sx={{ mx: 'auto', width: '600px', maxWidth: '100%' }}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h4" component="h4" paragraph sx={{ whiteSpace: 'pre-line', textTransform: 'uppercase' }}>
                {translate(data.title)}
              </Typography>
            </m.div>
            <m.div variants={varFade().inRight}>
              <Typography variant="body1" component="p" paragraph>
                {translate(data.description)}
              </Typography>
            </m.div>
            <m.div variants={varFade().inRight}>
              {data.report && (
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<Iconify icon="akar-icons:download" />}
                  sx={{
                    fontSize: 16,
                  }}
                >
                  <Link href={data.report} download>
                    {translate('Analisis_report')}
                  </Link>
                </Button>
              )}
            </m.div>
          </Stack>
        </Stack>
        <m.div variants={varFlip().inX}>
          <Box sx={{ position: 'absolute', right: '16px', top: '24px' }}>
            <IconButtonAnimate onClick={() => navigate(-1)}>
              <Iconify icon={'akar-icons:arrow-back-thick'} color="#FF48B6" width={20} height={20} />
            </IconButtonAnimate>
          </Box>
        </m.div>
      </MotionViewport>
    </Page>
  );
}
