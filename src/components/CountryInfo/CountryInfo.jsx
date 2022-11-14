import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
  Button,
} from './CountryInfo.styled';
import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export const CountryInfo = ({
  flag,
  capital,
  country,
  id,
  languages = [],
  population,
}) => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/country';

  return (
    <CountryWrapper>
      <Button>
        <Link to={backLink}>
          <BsArrowLeft /> Go back
        </Link>
      </Button>
      <Flag>
        <Image src={flag} alt={country} />
      </Flag>
      <CountryDescription>
        <CountryCapital>
          Capital: <Accent>{capital}</Accent>
        </CountryCapital>

        <CountryTitle>{country}</CountryTitle>

        <CountryDetail>
          Population: <Accent>{population}</Accent>
        </CountryDetail>

        <CountryDetail>
          Languages: <Accent>{languages.join(', ')}</Accent>
        </CountryDetail>
      </CountryDescription>
    </CountryWrapper>
  );
};
