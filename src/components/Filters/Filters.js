import React, { useEffect } from 'react';
import DropDown from '../UI/DropDown/DropDown';
import {
  useFiltersContext,
  useCocktailListContext,
} from '../../context/use-context';
import { CONTEXT_STATUS } from '../../context/constants';
import { FilterWrapper } from './Filters.styled';

const Filters = () => {
  const { filters, updateFilters } = useFiltersContext();
  const { cocktails } = useCocktailListContext();

  const { status, error, allFilters, selectedFilters } = filters;

  // Display error in console if there is one; can just show empty drop down boxes if there was an error
  useEffect(() => {
    if (status === CONTEXT_STATUS.ERROR) console.log(error.message);
  }, [status, error]);

  // function used to get filter options for any given filter
  const filterOptions = (filterKey) => {
    if (!allFilters?.hasOwnProperty(filterKey)) return [];
    if (!allFilters[filterKey].length) return [];
    return ['Any', ...allFilters[filterKey]];
  };

  // function used to get selected filter for any given filter
  const selectedFilter = (filterKey) => {
    if (!filterOptions(filterKey).length) return '-';
    if (!selectedFilters?.hasOwnProperty(filterKey)) return 'Any';
    if (!selectedFilters[filterKey].length) return 'Any';
    return selectedFilters[filterKey][0];
  };

  // function used to update the given filter with a given value
  const updateFilter = (filterKey, newVal) =>
    updateFilters({ [filterKey]: newVal === 'Any' ? [] : [newVal] });

  const isListLoading = cocktails.status === CONTEXT_STATUS.LOADING;

  return (
    <FilterWrapper>
      <DropDown
        label='Category'
        currentSelection={selectedFilter('categories')}
        options={filterOptions('categories')}
        updateFunc={(newVal) => updateFilter('categories', newVal)}
        disabled={isListLoading}
      />
      <DropDown
        label='Alcohol'
        currentSelection={selectedFilter('alcoholic')}
        options={filterOptions('alcoholic')}
        updateFunc={(newVal) => updateFilter('alcoholic', newVal)}
        disabled={isListLoading}
      />
      <DropDown
        label='Glass'
        currentSelection={selectedFilter('glasses')}
        options={filterOptions('glasses')}
        updateFunc={(newVal) => updateFilter('glasses', newVal)}
        disabled={isListLoading}
      />
    </FilterWrapper>
  );
};

export default Filters;