import { Section, Container, CountryInfo, Loader } from 'components';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/country-service';

export const Country = () => {
  const { countryName } = useParams();

  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const data = await fetchCountry(countryName);
        setCountry(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
    return () => {
      setError(null);
      setCountry(null);
    };
  }, [countryName]);

  return (
    <Section>
      <Container>
        {country && (
          <CountryInfo
            flag={country?.flag}
            capital={country?.capital}
            country={country?.countryName}
            id={country?.id}
            languages={country?.languages}
            population={country?.population}
          />
        )}

        {isLoading && <Loader />}

        {!isLoading && error && <p>Someting went wrong. Try again later.</p>}
      </Container>
    </Section>
  );
};
