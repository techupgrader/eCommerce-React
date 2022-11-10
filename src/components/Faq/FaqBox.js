import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Container, Box, Typography } from '@mui/material';
import useLocales from '../../hooks/useLocales';
import FrqConfig from './FaqConfig';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(() => ({
  borderRadius: '8px',
  '&:not(:last-child)': {
    borderBottom: 0,
    borderTop: 0,
  },
  '&:before': {
    display: 'none',
  },
  marginBottom: '16px',
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('');
  const text = 'panel';
  const text1 = 'd-header';
  const text2 = 'd-content';
  const { translate } = useLocales();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{ maxWidth: '1200px', px: '0' }}>
      {FrqConfig.map((e, index) => (
        <Accordion
          key={index}
          expanded={expanded === text + Number(index + 1)}
          onChange={handleChange(`${text + Number(index + 1)}`)}
        >
          <AccordionSummary
            aria-controls={text + Number(index + 1) + text2}
            id={text + Number(index + 1) + text1}
            sx={{ py: 2, backgroundColor: `${e.bgColor}`, borderLeft: `6px solid ${e.color}` }}
          >
            <Typography variant="h4" component="h4" sx={{ fontWeight: 'lighter' }}>
              {translate(e.quiz)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: `${e.bgColor}`,borderLeft: `6px solid ${e.color}`}}>
            {index !== 8 ? (
              <Typography
                variant="p"
                component="p"
                sx={{ fontWeight: 'lighter' }}
                dangerouslySetInnerHTML={{__html: translate(e.answere)}}
              />
            ) : (
              <Box
                component="img"
                src="/assets/images/other/warning.png"
                sx={{ width: '600px', maxWidth: '100%', mx: 'auto' }}
              />
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
