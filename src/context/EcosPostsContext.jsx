import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { fetchExtraPosts } from '../lib/ecosPostsMerge';

const EcosPostsContext = createContext(null);

export function EcosPostsProvider({ children }) {
  const [repoPosts, setRepoPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      setRepoPosts(await fetchExtraPosts());
    } catch {
      setRepoPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const value = useMemo(
    () => ({
      repoPosts,
      setRepoPosts,
      loading,
      reload,
    }),
    [repoPosts, loading, reload]
  );

  return <EcosPostsContext.Provider value={value}>{children}</EcosPostsContext.Provider>;
}

export function useEcosPosts() {
  const ctx = useContext(EcosPostsContext);
  if (!ctx) {
    throw new Error('useEcosPosts debe usarse dentro de EcosPostsProvider');
  }
  return ctx;
}
