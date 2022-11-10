import { useState } from 'react';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { MotionViewport } from '../animate';
import useLocales from '../../hooks/useLocales';
import KeyButton from './KeyButton';
import GlossaryConfig from './GlossaryConfig';

export default function Glossary() {
  const { translate } = useLocales();
  const [keyWord, setKeyword] = useState('All');
  const handleSearch = (e) => {
    console.log(e);
    setKeyword(e);
  };

  return (
    <Container sx={{ maxWidth: '1200px', py: 6 }}>
      <MotionViewport>
        <Stack direction="row" mb={4} sx={{ flexWrap: 'wrap' }}>
          <Box
            variant="span"
            onClick={() => {
              handleSearch('All');
            }}
          >
            <KeyButton title="All" variant="text" />
          </Box>
          {GlossaryConfig.map((e, index) => (
            <Box
              key={index}
              variant="span"
              onClick={() => {
                handleSearch(e.title);
              }}
            >
              <KeyButton title={translate(e.title)} variant="text" />
            </Box>
          ))}
        </Stack>
        <Stack>
          {GlossaryConfig.map((e, index) => (
            <Stack
              key={index}
              mb={3}
              sx={{ display: `${keyWord === 'All' || keyWord === e.title ? 'block' : 'none'}` }}
            >
              <Typography variant="h5" fontWeight="600">
                {translate(e.title)}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1" fontSize="18px">
                {translate(e.content)}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </MotionViewport>
    </Container>
  );
}
