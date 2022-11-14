import {
  Container,
  SearchForm,
  Section,
  Loader,
  CountryList,
} from 'components';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchByRegion } from '../service/country-service';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get('query') ?? '';

  useEffect(() => {
    if (region.trim() === '') return;

    setIsLoading(true);

    (async () => {
      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      setError(null);
      setCountries([]);
    };
  }, [region]);

  const setRegion = query => {
    const newParams = query !== '' ? { query } : {};
    setSearchParams(newParams);
  };

  return (
    <Section>
      <Container>
        <SearchForm region={region} onSubmit={setRegion} />

        {countries.length > 0 && <CountryList countries={countries} />}

        {isLoading && <Loader />}

        {!isLoading && error && <p>Something went wrong. Try again later </p>}
      </Container>
    </Section>
  );
};
