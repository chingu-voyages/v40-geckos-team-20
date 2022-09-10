import { ResultSummaryStyled } from './ResultSummary.styled';

const ResultSummary = ({ searchTerm, filteredNum, totalNum }) => {
  const filterInfo = filteredNum !== totalNum ? `${filteredNum} of ` : '';
  const resultText = searchTerm
    ? `Showing ${filterInfo}${totalNum} results for "${searchTerm}"...`
    : `Showing ${filterInfo}${totalNum} random cocktails...`;

  return <ResultSummaryStyled>{resultText}</ResultSummaryStyled>;
};

export default ResultSummary;
