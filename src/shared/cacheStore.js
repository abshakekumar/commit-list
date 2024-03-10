const CacheData = () => {
  let cacheStore = {};

  const getCacheItem = (cacheKey) => {
    return cacheStore[cacheKey];
  };

  const getCacheDataById = (cacheKey, id) => {
    if (cacheStore[cacheKey]) {
      if (id) {
        return cacheStore[cacheKey][id];
      }
    }
  };

  const makeNormalisedData = (list, keyId) => {
    let result = {};
    if (!keyId) {
      return null;
    }
    list.forEach((item, index) => {
      if (item[keyId]) {
        result[item[keyId]] = item;
      }
    });

    return result;
  };

  const updateCache = (key, value) => {
    if (!cacheStore[key]) {
      cacheStore[key] = Array.isArray(value) ? [] : {};
    }
    if (Array.isArray(value)) {
      cacheStore[key] = [...cacheStore[key], ...value];
      return;
    }
    cacheStore[key] = { ...cacheStore[key], ...value };
  };

  const resetCacheKey = (cacheKey) => {
    delete cacheStore[cacheKey];
  };

  return {
    getCacheData: () => cacheStore,
    getCacheDataById,
    makeNormalisedData,
    updateCache,
    getCacheItem,
    resetCacheKey,
  };
};

export const CacheManager = CacheData();
