import { useEffect, useState } from 'react';
import { getCountries } from '../service/country-service';

export const useGetCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    setIsLoading(true);

    (async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return [countries, isLoading, error];
};
