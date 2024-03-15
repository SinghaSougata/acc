const {Path, Svg, Rect, Circle, Line} = require('react-native-svg');
const {getResWidth} = require('./responsive');
const {default: theme} = require('./Theme');

const NotificationIcon = ({color}) => {
  return (
    <Svg
      width={getResWidth(25)}
      height={getResWidth(25)}
      viewBox={`0 -3 ${getResWidth(25)} ${getResWidth(25)}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.0006 22.8618C11.8865 22.8618 10.9834 21.9788 10.9834 20.8894H15.0178C15.0178 21.9788 14.1147 22.8618 13.0006 22.8618ZM21.0696 19.9032H4.93164V17.9308L6.94888 16.9446V11.5205C6.94888 8.10621 8.38213 5.89217 10.9834 5.28763V3.1377H15.0178V5.28763C17.6191 5.89118 19.0523 8.10423 19.0523 11.5205V16.9446L21.0696 17.9308V19.9032ZM13.0006 6.83597C11.7698 6.75826 10.5827 7.29681 9.84867 8.26597C9.22085 9.23695 8.91281 10.3729 8.96612 11.5205V17.9308H17.0351V11.5205C17.0883 10.3729 16.7803 9.23697 16.1525 8.26597C15.4185 7.29681 14.2314 6.75826 13.0006 6.83597Z"
        fill={color ? color : theme.color.secondPrimary}
        strokeWidth={2}
      />
      
    </Svg>
  );
};
const NotificationSIcon = ({color}) => {
  return (
    <Svg
      width={getResWidth(25)}
      height={getResWidth(25)}
      viewBox={`0 -3 ${getResWidth(25)} ${getResWidth(25)}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.00061 19.8628C7.88648 19.8628 6.98337 18.9798 6.98337 17.8904H11.0178C11.0178 18.9798 10.1147 19.8628 9.00061 19.8628ZM17.0696 16.9042H0.931641V14.9318L2.94888 13.9456V8.52143C2.94888 5.10718 4.38213 2.89315 6.98337 2.2886V0.138672H11.0178V2.2886C13.6191 2.89216 15.0523 5.10521 15.0523 8.52143V13.9456L17.0696 14.9318V16.9042ZM9.00061 3.83695C7.76979 3.75923 6.58272 4.29778 5.84867 5.26695C5.22085 6.23793 4.91281 7.37386 4.96612 8.52143V14.9318H13.0351V8.52143C13.0883 7.37387 12.7803 6.23795 12.1525 5.26695C11.4185 4.29778 10.2314 3.75923 9.00061 3.83695Z"
        fill={color ? color : theme.color.secondPrimary}
      />
    </Svg>
  );
};
const ChatIcon = ({color}) => {
  return (
    <Svg
      width={getResWidth(25)}
      height={getResWidth(25)}
      viewBox={`0 0 ${getResWidth(25)} ${getResWidth(25)}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.4577 2.22768C14.9682 2.14396 13.4749 2.14686 11.9857 2.23638C10.3192 2.35811 8.75483 3.08558 7.58758 4.28143C6.42062 5.47724 5.73144 7.05871 5.65021 8.7278C4.59713 9.32848 3.72097 10.1957 3.10926 11.2423C2.49771 12.289 2.17241 13.4783 2.16617 14.6905V20.6011C2.1608 21.0693 2.29689 21.5283 2.55661 21.918C2.81647 22.3078 3.18789 22.6098 3.62217 22.7851C3.91684 22.9044 4.23168 22.9662 4.54959 22.9671C5.17418 22.9655 5.77255 22.716 6.21348 22.2737C6.80327 21.7046 7.61926 21.4338 8.43217 21.5371C8.44087 21.5371 8.51879 21.5458 8.52749 21.5458C10.0139 21.6353 11.5042 21.6382 12.9909 21.5543C14.3665 21.4734 15.6869 20.984 16.7829 20.1487C17.879 19.3136 18.7011 18.1705 19.1443 16.8657C19.4683 17.1333 19.8602 17.3058 20.2763 17.3638C20.6926 17.422 21.1167 17.3635 21.5016 17.1951C21.9376 17.0214 22.3109 16.7198 22.5724 16.3299C22.8338 15.9402 22.9711 15.4804 22.9663 15.011V9.1005C22.9589 7.34201 22.2817 5.65231 21.0726 4.37556C19.8634 3.09881 18.2132 2.33081 16.4576 2.22781L16.4577 2.22768ZM10.3997 6.93368C10.9742 6.93368 11.5254 7.16205 11.9317 7.5683C12.338 7.97468 12.5663 8.52573 12.5663 9.10044C12.5663 9.675 12.3381 10.2262 11.9317 10.6324C11.5254 11.0388 10.9742 11.2671 10.3997 11.2671C9.82495 11.2671 9.2739 11.0388 8.86752 10.6324C8.46125 10.2262 8.2329 9.675 8.2329 9.10044C8.23362 8.52603 8.46214 7.97527 8.86823 7.56904C9.27449 7.16292 9.82525 6.93442 10.3996 6.93371L10.3997 6.93368ZM17.7662 9.10044C17.7662 9.675 17.538 10.2262 17.1316 10.6324C16.7253 11.0388 16.1742 11.2671 15.5996 11.2671C15.0249 11.2671 14.4738 11.0388 14.0674 10.6324C13.6612 10.2262 13.4328 9.675 13.4328 9.10044C13.4328 8.52573 13.6612 7.97468 14.0674 7.5683C14.4738 7.16203 15.0249 6.93368 15.5996 6.93368C16.174 6.9344 16.7246 7.16292 17.1309 7.56901C17.537 7.97527 17.7655 8.52606 17.7662 9.10044ZM12.8867 19.821C11.4578 19.9003 10.0254 19.8974 8.59675 19.8123L8.51013 19.8036C7.21188 19.6775 5.92406 20.131 4.99144 21.0429C4.90337 21.1362 4.78846 21.1996 4.66267 21.2246C4.53673 21.2494 4.4063 21.2344 4.28949 21.1816C4.17226 21.1372 4.07171 21.0576 4.00178 20.9535C3.93199 20.8495 3.89615 20.7262 3.89949 20.601V14.6904C3.90762 13.1371 4.6142 11.67 5.82338 10.695C6.17508 12.134 6.97815 13.4225 8.11506 14.3723C9.25181 15.322 10.6628 15.8829 12.1413 15.9729C13.631 16.0568 15.1241 16.0539 16.6133 15.9642L16.778 15.9469C17.0479 15.9291 17.3188 15.9466 17.5841 15.9989C17.3038 17.0498 16.6986 17.9852 15.8551 18.6716C15.0115 19.358 13.9725 19.7602 12.8867 19.8209L12.8867 19.821Z"
        fill={color ? color : theme.color.secondPrimary}
      />
      <Path
        d="M10.8334 9.10038C10.8334 9.33963 10.6394 9.53361 10.4002 9.53361C10.1608 9.53361 9.9668 9.33962 9.9668 9.10038C9.9668 8.86098 10.1608 8.66699 10.4002 8.66699C10.6394 8.66699 10.8334 8.86098 10.8334 9.10038Z"
        fill={color ? color : theme.color.secondPrimary}
      />
      <Path
        d="M16.0326 9.10038C16.0326 9.33963 15.8386 9.53361 15.5994 9.53361C15.36 9.53361 15.166 9.33962 15.166 9.10038C15.166 8.86098 15.36 8.66699 15.5994 8.66699C15.8387 8.66699 16.0326 8.86098 16.0326 9.10038Z"
        fill={color ? color : theme.color.secondPrimary}
      />
    </Svg>
  );
};
const SearchSIcon = ({color, color1}) => {
  return (
    <Svg
      width={getResWidth(25)}
      height={getResWidth(25)}
      viewBox={`0 0 ${getResWidth(25)} ${getResWidth(25)}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect
        width="26"
        height="26"
        rx="9"
        fill={color1 ? color1 : theme.color.searchOutline}
        fill-opacity="0.2"
      />
      <Circle
        cx="12.1333"
        cy="12.1333"
        r="5.63333"
        stroke={color ? color : theme.color.secondPrimary}
        strokeWidth={2}
      />
      <Line
        x1="16.6564"
        y1="17.2556"
        x2="18.7089"
        y2="19.3081"
        stroke={color ? color : theme.color.secondPrimary}
        strokeWidth={2}
        stroke-linecap="round"
      />
    </Svg>
  );
};
const SearchIcon = ({color, color1}) => {
  return (
    <Svg
      width={getResWidth(25)}
      height={getResWidth(25)}
      viewBox={`0 0 ${getResWidth(25)} ${getResWidth(25)}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect
        width="26"
        height="26"
        rx="9"
        fill={color1 ? color1 : theme.color.searchOutline}
        fill-opacity="0.1"
      />
      <Circle
        cx="12.1333"
        cy="12.1333"
        r="5.63333"
        stroke={color ? color : theme.color.secondPrimary}
        stroke-width="2"
      />
      <Line
        x1="16.6564"
        y1="17.2559"
        x2="18.7089"
        y2="19.3083"
        stroke={color ? color : theme.color.secondPrimary}
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
};

const TimelineIcon = ({color}) => {
  return (
    <Svg
      width={getResWidth(30)}
      height={getResWidth(30)}
      viewBox={`0 -5 ${getResWidth(30)} ${getResWidth(30)}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.5217 9.04744L8.66475 9.04744"
        stroke={color ? color : theme.color.secondPrimary}
        strokeWidth={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.325 13.0328L8.66429 13.0328"
        stroke={color ? color : theme.color.secondPrimary}
        strokeWidth={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.4265 16.9517L8.66428 16.9517"
        stroke={color ? color : theme.color.secondPrimary}
        strokeWidth={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.9678 4.51269C19.3572 4.5127 21.4875 6.64309 21.4875 13.0324C21.4875 19.4218 19.3572 21.5522 12.9678 21.5522C6.57847 21.5522 4.44808 19.4218 4.44808 13.0324C4.44808 6.64309 6.57847 4.51269 12.9678 4.51269Z"
        stroke={color ? color : theme.color.secondPrimary}
        strokeWidth={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle cx="21.5" cy="7.5" r="3.5" fill="#FF5F00" stroke="white" />
    </Svg>
  );
};
const TimelineSIcon = ({color}) => {
  return (
    <Svg
      width={getResWidth(30)}
      height={getResWidth(30)}
      viewBox={`0 -5 ${getResWidth(30)} ${getResWidth(30)}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.5217 7.04756L6.66475 7.04756"
        stroke={color ? color : theme.color.secondPrimary}
        strokeWidth={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.325 11.0322L6.66429 11.0322"
        stroke={color ? color : theme.color.secondPrimary}
        strokeWidth={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.42651 14.9511L6.66428 14.9511"
        stroke={color ? color : theme.color.secondPrimary}
        strokeWidth={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.9678 2.51245C17.3572 2.51245 19.4875 4.64285 19.4875 11.0322C19.4875 17.4215 17.3572 19.5519 10.9678 19.5519C4.57847 19.5519 2.44808 17.4215 2.44808 11.0322C2.44808 4.64284 4.57847 2.51245 10.9678 2.51245Z"
        stroke={color ? color : theme.color.secondPrimary}
        strokeWidth={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ShareIcon = ({color}) => {
  return (
    <Svg
      width={getResWidth(20)}
      height={getResWidth(20)}
      viewBox={`0 0 ${getResWidth(21)} ${getResWidth(21)}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.20117 10.7992L18.0004 1"
        stroke={color ? color : theme.color.secondPrimary}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.0006 1L12.2101 17.035C12.171 17.1203 12.1083 17.1926 12.0293 17.2433C11.9504 17.2939 11.8585 17.3209 11.7647 17.3209C11.6709 17.3209 11.579 17.2939 11.5001 17.2433C11.4211 17.1926 11.3584 17.1203 11.3193 17.035L8.20137 10.7992L1.96553 7.68126C1.88024 7.64218 1.80797 7.57943 1.75729 7.50047C1.70662 7.42151 1.67969 7.32966 1.67969 7.23584C1.67969 7.14203 1.70662 7.05018 1.75729 6.97122C1.80797 6.89226 1.88024 6.82951 1.96553 6.79043L18.0006 1Z"
        stroke={color ? color : theme.color.secondPrimary}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const blockIcon = ({}) => {
  return (
    <Svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M5 0.667969C2.24 0.667969 0 2.90797 0 5.66797C0 8.42797 2.24 10.668 5 10.668C7.76 10.668 10 8.42797 10 5.66797C10 2.90797 7.76 0.667969 5 0.667969ZM1 5.66797C1 3.45797 2.79 1.66797 5 1.66797C5.925 1.66797 6.775 1.98297 7.45 2.51297L1.845 8.11797C1.315 7.44297 1 6.59297 1 5.66797ZM5 9.66797C4.075 9.66797 3.225 9.35297 2.55 8.82297L8.155 3.21797C8.685 3.89297 9 4.74297 9 5.66797C9 7.87797 7.21 9.66797 5 9.66797Z"
        fill="black"
      />
    </Svg>
  );
};
// const FeaturedBookMarkIcon = ({color, color1}) => {
//   return (
//     <Svg
//       width="9"
//       height="12"
//       viewBox="0 0 9 12"
//       fill="red"
//       xmlns="http://www.w3.org/2000/svg">
//       <Path
//         d="M2.68002 1.2H6.52002C6.8595 1.2 7.18507 1.32643 7.42512 1.55147C7.66517 1.77651 7.80002 2.08174 7.80002 2.4V10.8L4.60002 9L1.40002 10.8V2.4C1.40002 2.08174 1.53488 1.77651 1.77493 1.55147C2.01497 1.32643 2.34055 1.2 2.68002 1.2Z"
//         stroke="#053c6d"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//     </Svg>
//   );
// };
export default {
  NotificationIcon,
  NotificationSIcon,
  ChatIcon,
  SearchIcon,
  SearchSIcon,
  TimelineSIcon,
  TimelineIcon,
  ShareIcon,
  blockIcon,
  // FeaturedBookMarkIcon,
};
