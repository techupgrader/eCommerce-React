import { useState } from 'react';
import { useParams } from 'react-router';
// components
import Page from '../components/Page';
import Charter from '../components/Charter';
import ProductsGallery from '../components/ProductsGallery';
// ----------------------------------------------------------------------

export default function ProductPage() {
  const [charterText, setCharterText] = useState('BODY_COLLECTION');
  const handleChange = (e) => {
    setCharterText(e);
  };
  const { name } = useParams();
  return (
    <Page title="Product Page" sx={{ position: 'relative' }}>
      <Charter text={charterText} />
      <ProductsGallery handleChange={handleChange} filterText={charterText} name={name} />
    </Page>
  );
}
