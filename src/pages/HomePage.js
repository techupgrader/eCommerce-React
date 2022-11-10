// components
import Page from '../components/Page';
import HomeHero from '../components/home/HomeHero';
import Collection from '../components/home/Collection';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home page" sx={{px: 0}}>
      <HomeHero />
      <Collection />
    </Page>
  );
}
