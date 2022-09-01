import { useEffect } from 'react';

const useSetDocumentTitle = (dynamicPageTitle, defaultPageTitle = null) => {
  useEffect(() => {
    const defaultAppTitle = 'EZ Cocktails';
    document.title = dynamicPageTitle || defaultPageTitle || defaultAppTitle;
    return () => {
      document.title = defaultAppTitle;
    };
  }, [defaultPageTitle, dynamicPageTitle]);
};

export default useSetDocumentTitle;
