import React, { useId } from 'react';
import {
  DropDownWrapper,
  DropDownButton,
  DropDownContent,
  DropDownItem,
} from './DropDown.styled';
import { ReactComponent as DownSvg } from '../../../images/down-arrow.svg';
const DropDown = () => {
  const options = [
    'Any',
    'Alcoholic',
    'Non-alcoholic',
    'Optional alcohol',
    'Something else',
    'Alcoholic',
    'Non-alcoholic',
    'Optional alcohol',
    'Something else',
  ];
  const id = useId();

  return (
    <DropDownWrapper>
      <label htmlFor={id}>Category</label>
      <DropDownButton id={id}>
        Any
        <DownSvg />
      </DropDownButton>

      <DropDownContent>
        {options.map((i) => (
          <DropDownItem>{i}</DropDownItem>
        ))}
      </DropDownContent>
    </DropDownWrapper>
  );
};

export default DropDown;
