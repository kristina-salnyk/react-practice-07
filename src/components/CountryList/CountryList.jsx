import { Grid, GridItem } from 'components';
import { Title, Flag, Link } from './CountryListItem.styled';
import { useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.map(item => (
        <GridItem key={item.id}>
          <Link to={`/country/${item.country}`} state={{ from: location }}>
            <Flag src={item.flag} alt={item.country} />
            <Title>{item.country}</Title>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
