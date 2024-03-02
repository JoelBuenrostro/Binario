import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Bienvenido a Binario',
  description: 'We sell the best products for cheap',
  keywords: 'electronicos, compra electronicos',
};

export default Meta;