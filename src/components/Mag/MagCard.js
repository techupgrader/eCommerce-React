import ProtoTypes from 'prop-types';
import { m } from 'framer-motion';
import { Typography, Stack, Box } from '@mui/material';
import { varFade } from '../animate';
import useLocales from '../../hooks/useLocales';

MagCard.propTypes = {
  magnum: ProtoTypes.string,
  headertitle: ProtoTypes.string,
  title: ProtoTypes.string,
  imagepath: ProtoTypes.string,
};
export default function MagCard(props) {
  const { magnum, headertitle, title, imagepath } = props;
  const { translate } = useLocales();
  const path = '/mag/magdetail/';
  return (
    <m.div variants={varFade().inUp}>
      <Stack
        spacing={2}
        mr={2}
        mb={2}
        py={2}
        maxWidth="300px"
        sx={{ border: '1px solid #BBB0B0', borderRadius: '8px' }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" px={1}>
          <Typography variant="subtitle1" textTransform="uppercase">{translate(headertitle)}</Typography>
          <Box component="img" src="/logo/logo_single.png" sx={{ width: '30px', height: '30px' }} />
        </Stack>
        <Box component="img" src={imagepath} sx={{ width: '100%', height: '199px', objectFit: 'cover' }} />
        <Box px={1}>
          <Box sx={{ height: '48px', overflow: 'hidden' }}>
            <Typography>{translate(title)}</Typography>
          </Box>
          <Box component="a" href={path + magnum} display="flex" justifyContent="center" my={2}>
            <Typography sx={{ color: '#FF48B6' }}>{translate('READ MORE')}</Typography>
          </Box>
        </Box>
      </Stack>
    </m.div>
    // <Stack spacing={2} mr={2} mb={2} py={2} sx={{ border: '1px solid #BBB0B0', borderRadius: '8px' }}>
    //   <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: '8px' }}>
    //     <Skeleton variant="text" width={180} height={30} />
    //     <Skeleton variant="circular" width={40} height={40} />
    //   </Stack>
    //   <Skeleton variant="rectangular" width='100%' height={170} />
    //   <Stack sx={{ px: '8px' }}>
    //     <Skeleton variant="text" width={276} height={30} sx={{ mb: 2 }} />
    //     <Skeleton variant="text" width={140} height={30} />
    //   </Stack>
    // </Stack>
  );
}
