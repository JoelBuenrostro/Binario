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
  description: 'Tene os los mejores productos de computo y electronica en un solo lugar',
  keywords: 'electronicos, compra electronicos',
};

export default Meta;