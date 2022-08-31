import React, { useEffect } from 'react';
import DropDown from '../../UI/DropDown/DropDown';
import { useFiltersContext } from '../../../context/use-context';
import { CONTEXT_STATUS } from '../../../context/constants';

const Filters = () => {
  const { filters, updateFilters } = useFiltersContext();

  const { status, error, allFilters, selectedFilters } = filters;

  useEffect(() => {
    if (status === CONTEXT_STATUS.ERROR) console.log(error.message);
  }, [status, error]);

  const filterOptions = (filterKey) => {
    if (!allFilters?.hasOwnProperty(filterKey)) return [];
    if (!allFilters[filterKey].length) return [];
    return ['Any', ...allFilters[filterKey]];
  };

  const selectedFilter = (filterKey) => {
    if (!filterOptions(filterKey).length) return '-';
    if (!selectedFilters?.hasOwnProperty(filterKey)) return 'Any';
    if (!selectedFilters[filterKey].length) return 'Any';
    return selectedFilters[filterKey][0];
  };

  const updateFilter = (filterKey, newVal) =>
    updateFilters({ [filterKey]: newVal === 'Any' ? [] : [newVal] });

  return (
    <div>
      <DropDown
        label='Category'
        currentSelection={selectedFilter('categories')}
        options={filterOptions('categories')}
        updateFunc={(newVal) => updateFilter('categories', newVal)}
      />
      <DropDown
        label='Alcohol'
        currentSelection={selectedFilter('alcoholic')}
        options={filterOptions('alcoholic')}
        updateFunc={(newVal) => updateFilter('alcoholic', newVal)}
      />
      <DropDown
        label='Glass'
        currentSelection={selectedFilter('glasses')}
        options={filterOptions('glasses')}
        updateFunc={(newVal) => updateFilter('glasses', newVal)}
      />
    </div>
  );
};

export default Filters;
