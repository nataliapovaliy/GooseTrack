import { useMedia } from 'react-use';
import {
  MonthCalendarHeadItem,
  MonthCalendarHeadList,
} from './MonthCalendarHead.styled';

export const MonthCalendarHead = () => {
  const isMobile = useMedia('(max-width: 767px)');
  // const arrayMonth = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  // const arrayMonthSlice = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <>
      {isMobile ? (
        <MonthCalendarHeadList>
          <li>M</li>
          <li>T</li>
          <li>W</li>
          <li>T</li>
          <li>F</li>
          <MonthCalendarHeadItem>S</MonthCalendarHeadItem>
          <MonthCalendarHeadItem>S</MonthCalendarHeadItem>
        </MonthCalendarHeadList>
      ) : (
        <MonthCalendarHeadList>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <MonthCalendarHeadItem>Sat</MonthCalendarHeadItem>
          <MonthCalendarHeadItem>Sun</MonthCalendarHeadItem>
        </MonthCalendarHeadList>
      )}
    </>
  );
};

// import { useMedia } from 'react-use';
// import {
//   MonthCalendarHeadItem,
//   MonthCalendarHeadList,
// } from './MonthCalendarHead.styled';

// export const MonthCalendarHead = () => {
//   const isMobile = useMedia('(min-width: 768px)');
//   const arrayMonth = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//   const arrayMonthSlice = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
//   return (
//     <>

//         {
//           isMobile ?  (
//             <MonthCalendarHeadList>
//              {arrayMonth.map(dayItem => (
//               <MonthCalendarHeadItem
//                 key={dayItem}
//                 isWeekend={dayItem === 'S'}
//               >
//                 <p>{dayItem}</p>
//               </MonthCalendarHeadItem>
//             ))}
//             </MonthCalendarHeadList>) :  (
//             <MonthCalendarHeadList>
//              {arrayMonthSlice.map(item => (
//               <MonthCalendarHeadItem
//                 key={item}
//                 isWeekend={item === 'Sat' || item === 'Sun'}
//               >
//                 <p>{item}</p>
//               </MonthCalendarHeadItem>

//             ))}
//             </MonthCalendarHeadList>
//           )
//         }
//     </>
//   );
// };
