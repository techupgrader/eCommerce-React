// hooks
// components
import Page from '../components/Page';
import Charter from '../components/Charter';
import About from '../components/About';
// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <Page title="About Page" sx={{ position: 'relative' }}>
      <Charter text={'ABOUT'} />
      <About />
    </Page>
  );
}
