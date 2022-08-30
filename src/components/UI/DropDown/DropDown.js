import React, { useId, useState, useRef, useEffect } from 'react';
import {
  DropDownWrapper,
  DropDownButton,
  DropDownItems,
  DropDownItem,
} from './DropDown.styled';
import { ReactComponent as DownSvg } from '../../../images/down-arrow.svg';

const DropDown = () => {
  const [open, setOpen] = useState(false);

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

  const toggleDropDown = () => {
    setOpen((prev) => !prev);
  };

  const DropDownContent = () => {
    const contentRef = useRef(null);

    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (contentRef.current && !contentRef.current.contains(e.target))
          setOpen(false);
      };

      document.addEventListener('mousedown', handleOutsideClick);

      return () =>
        document.removeEventListener('mousedown', handleOutsideClick);
    }, [contentRef]);

    return (
      <DropDownItems ref={contentRef}>
        {options.map((i, index) => (
          <DropDownItem key={index}>{i}</DropDownItem>
        ))}
      </DropDownItems>
    );
  };

  return (
    <DropDownWrapper>
      <label htmlFor={id}>Category</label>
      <DropDownButton onClick={toggleDropDown} id={id} open={open}>
        Any
        <DownSvg />
      </DropDownButton>

      {open && <DropDownContent />}
    </DropDownWrapper>
  );
};

export default DropDown;
