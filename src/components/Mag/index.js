import { Stack } from '@mui/material';
import MagCard from './MagCard';
import MagConfig from './MagConfig';
import { MotionViewport } from '../animate';

export default function Mag() {
  return (
    <MotionViewport>
      <Stack direction="row" flexWrap="wrap" justifyContent="center">
        {MagConfig.map((e, index) => (
          <MagCard key={index} magnum={e.magnum} headertitle={e.headertitle} title={e.title} imagepath={e.imagepath} content={e.content} />
        ))}
      </Stack>
    </MotionViewport>
  );
}
