import React, { useId, useState, useRef, useEffect } from 'react';
import {
  DropDownWrapper,
  DropDownButton,
  DropDownItems,
  DropDownItem,
} from './DropDown.styled';
import { ReactComponent as DownSvg } from '../../../images/down-arrow.svg';

const OPTIONS = [
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

const DropDown = ({ defaultIndex = 0, options = OPTIONS }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(
    options?.length ? options[defaultIndex] : '-'
  );
  const buttonRef = useRef(null);
  const id = useId();

  const toggleDropDownHandler = () => setOpen((prev) => !prev);

  // Abstracted component for the drop down content, to handle the outside click/closing
  const DropDownContent = () => {
    const contentRef = useRef(null);

    // close the drop down when user clicks outside it (but not if they click the button)
    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (
          contentRef.current &&
          !contentRef.current.contains(e.target) &&
          !buttonRef.current.contains(e.target)
        )
          setOpen(false);
      };
      document.addEventListener('mousedown', handleOutsideClick);
      // clear event listener when drop down closes
      return () =>
        document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    return (
      <DropDownItems ref={contentRef}>
        {options.map((i, index) => {
          const selectHandler = () => {
            setSelection(i);
            setOpen(false);
          };
          return (
            <DropDownItem key={index} onClick={selectHandler}>
              {i}
            </DropDownItem>
          );
        })}
      </DropDownItems>
    );
  };

  return (
    <DropDownWrapper>
      <label htmlFor={id}>Category</label>
      <DropDownButton
        ref={buttonRef}
        onClick={toggleDropDownHandler}
        id={id}
        open={open}
      >
        {selection}
        <DownSvg />
      </DropDownButton>

      {open && <DropDownContent />}
    </DropDownWrapper>
  );
};

export default DropDown;
