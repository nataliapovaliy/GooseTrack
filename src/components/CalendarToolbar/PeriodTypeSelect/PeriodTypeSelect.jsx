import { useNavigate } from 'react-router-dom'
import {
  PeriodTypeSelectButtonDay,
  PeriodTypeSelectButtonMonth,
  PeriodTypeSelectWrap,
} from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = () => {
  const navigate = useNavigate();
  return (
    <PeriodTypeSelectWrap>
      <PeriodTypeSelectButtonMonth
        type="button"
        onClick={() => navigate("/calendar/month/:currentDate")}
      >
        Month
      </PeriodTypeSelectButtonMonth>
      <PeriodTypeSelectButtonDay
        type="button"
        onClick={() => navigate("/calendar/day/:currentDay")}
      >
        Day
      </PeriodTypeSelectButtonDay>
    </PeriodTypeSelectWrap>
  );
};
// import {
//   PeriodTypeSelectButtonDay,
//   PeriodTypeSelectButtonMonth,
//   PeriodTypeSelectWrap,
// } from './PeriodTypeSelect.styled';

// export const PeriodTypeSelect = ({ setDisplayMode }) => {
//   return (
//     <PeriodTypeSelectWrap>
//       <PeriodTypeSelectButtonMonth
//         type="button"
//         onClick={() => setDisplayMode('month')}
//       >
//         Month
//       </PeriodTypeSelectButtonMonth>
//       <PeriodTypeSelectButtonDay
//         type="button"
//         onClick={() => setDisplayMode('day')}
//       >
//         Day
//       </PeriodTypeSelectButtonDay>
//     </PeriodTypeSelectWrap>
//   );
// };
