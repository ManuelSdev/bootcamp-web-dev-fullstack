import React from 'react';

function usePromise(initialValue) {
  const [data, setData] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const resetError = () => setError(null);

  const startPromise = () => {
    resetError();
    setLoading(true);
  };

  const finishPromise = (error, data) => {
    setLoading(false);
    if (error) {
      return setError(error);
    }
    setData(data);
  };

  const throwPromise = async function (promise) {
    startPromise();
    try {
      const result = await promise;
      finishPromise(null, result);
      return result;
    } catch (error) {
      finishPromise(error);
      throw error;
    }
  };

  return {
    loading,
    error,
    data,
    throwPromise,
    resetError,
  };
}

export default usePromise;
