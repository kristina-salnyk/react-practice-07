import { Container, CountryList, Loader, Section } from 'components';
import { useGetCountries } from '../hooks/useGetCountries';

export const Home = () => {
  const [countries, isLoading, error] = useGetCountries([]);

  return (
    <Section>
      <Container>
        {countries.length > 0 && <CountryList countries={countries} />}

        {isLoading && <Loader />}

        {!isLoading && error && <p>Something went wrong. Try again later </p>}
      </Container>
    </Section>
  );
};
