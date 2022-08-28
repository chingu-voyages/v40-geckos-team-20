import React from 'react';
import { ReactComponent as InfoSvg } from '../../images/info.svg';
import { ReactComponent as ErrorSvg } from '../../images/error.svg';
import { ReactComponent as QuestionSvg } from '../../images/question.svg';
import { Wrapper } from './MessageState.styled';

const InfoMessage = ({ title, message }) => BaseMessage('info', title, message);
const ErrorMessage = ({ title, message }) =>
  BaseMessage('error', title, message);
const QuestionMessage = ({ title, message }) =>
  BaseMessage('question', title, message);

const BaseMessage = (type, title, message) => {
  let image;
  if (type === 'info') image = <InfoSvg />;
  if (type === 'error') image = <ErrorSvg />;
  if (type === 'question') image = <QuestionSvg />;

  return (
    <Wrapper>
      <div className='image-wrapper'>{image}</div>
      <h2>{title}</h2>
      <p>{message}</p>
    </Wrapper>
  );
};

export { InfoMessage, ErrorMessage, QuestionMessage };
