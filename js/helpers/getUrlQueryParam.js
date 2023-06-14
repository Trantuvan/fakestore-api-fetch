const getQueryParam = (queryParam) => {
  const params = new URLSearchParams(window.location.search);
  return params.has(queryParam) === true ? params.get(queryParam) : null;
};

export default getQueryParam;
