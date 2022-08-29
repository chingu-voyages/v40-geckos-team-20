import { useEffect } from 'react';

const useSetDocumentTitle = (defaultPageTitle, dynamicPageTitle) => {
  useEffect(() => {
    const defaultAppTitle = 'EZ Cocktails';
    document.title = dynamicPageTitle ? dynamicPageTitle : defaultPageTitle;
    return () => {
      document.title = defaultAppTitle;
    };
  }, [defaultPageTitle, dynamicPageTitle]);
};

export default useSetDocumentTitle;
