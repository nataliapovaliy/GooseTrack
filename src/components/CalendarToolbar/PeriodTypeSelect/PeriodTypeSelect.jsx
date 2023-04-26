import { useNavigate } from 'react-router-dom'
import {
  PeriodTypeSelectButtonDay,
  PeriodTypeSelectButtonMonth,
  PeriodTypeSelectWrap,
} from './PeriodTypeSelect.styled';
import moment from 'moment';



export const PeriodTypeSelect = () => {
  const navigate = useNavigate();
  return (
    <PeriodTypeSelectWrap>
      <PeriodTypeSelectButtonMonth
        type="button"
        onClick={() => navigate("/calendar/month/")}
      >
        Month
      </PeriodTypeSelectButtonMonth>
      <PeriodTypeSelectButtonDay
        type="button"
        onClick={() => navigate(`/calendar/day/${moment().format('YYYY-MM-DD')}`)}
      >
        Day
      </PeriodTypeSelectButtonDay>
    </PeriodTypeSelectWrap>
  );
};