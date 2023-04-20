import {
  PeriodTypeSelectButtonDay,
  PeriodTypeSelectButtonMonth,
  PeriodTypeSelectWrap,
} from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = ({ setDisplayMode }) => {
  return (
    <PeriodTypeSelectWrap>
      <PeriodTypeSelectButtonMonth
        type="button"
        onClick={() => setDisplayMode('month')}
      >
        Month
      </PeriodTypeSelectButtonMonth>
      <PeriodTypeSelectButtonDay
        type="button"
        onClick={() => setDisplayMode('day')}
      >
        Day
      </PeriodTypeSelectButtonDay>
    </PeriodTypeSelectWrap>
  );
};
