const CacheData = () => {
  let cacheStore = {};

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
      cacheStore[key] = {};
    }
    cacheStore[key] = { ...cacheStore[key], ...value };
  };

  return {
    getCacheData: () => cacheStore,
    getCacheDataById,
    makeNormalisedData,
    updateCache,
  };
};

export const CacheManager = CacheData();
