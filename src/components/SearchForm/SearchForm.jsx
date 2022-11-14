import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ region, onSubmit }) => {
  const handleFormSubmit = event => {
    event.preventDefault();

    const searchRegion = event.target.elements.region.value;
    onSubmit(searchRegion);
  };

  return (
    <SearchFormStyled onSubmit={handleFormSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select aria-label="select" name="region" defaultValue={region} required>
        <option disabled value="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
