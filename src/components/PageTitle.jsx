import { Helmet } from 'react-helmet-async';
const PageTitle = ({
  title
}) => {
  const defaultTitle = '(M) Maverik - Copiloto Financiero';
  return <Helmet>
      <title>{title ? title + ' | ' + defaultTitle : defaultTitle}</title>
    </Helmet>;
};
export default PageTitle;