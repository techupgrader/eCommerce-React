// hooks
// components
import Page from '../components/Page';
import Charter from '../components/Charter';
import Glossary from '../components/Glossary';
// ----------------------------------------------------------------------

export default function GlossaryPage() {
  return (
    <Page title="Glossary Page" sx={{ position: 'relative' }}>
      <Charter text={'INDEX'} />
      <Glossary />
    </Page>
  );
}
