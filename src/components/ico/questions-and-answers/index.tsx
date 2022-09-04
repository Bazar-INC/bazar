import { FC } from "react";
import { IconProps } from "../props";

const QuestionsAndAnswers: FC<IconProps> = ({ className }) => {
   return (
      <svg className={className} width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M3.97938 23.6693C3.71956 23.6693 3.46229 23.6181 3.22225 23.5186C2.98222 23.4192 2.76413 23.2734 2.58044 23.0897C2.39676 22.9059 2.25107 22.6878 2.1517 22.4477C2.05233 22.2076 2.00123 21.9504 2.00132 21.6905V15.8629L2 13.6224C2 13.4837 2.16243 13.4081 2.2683 13.4975L4.75403 15.6676C4.8431 15.7426 4.95582 15.7839 5.07231 15.784H20.3813C20.641 15.784 20.8982 15.8351 21.1382 15.9345C21.3782 16.0339 21.5963 16.1796 21.78 16.3633C21.9636 16.547 22.1093 16.7651 22.2087 17.0051C22.3081 17.245 22.3593 17.5023 22.3593 17.762V21.6905C22.3593 22.2151 22.1509 22.7183 21.78 23.0892C21.409 23.4602 20.9059 23.6686 20.3813 23.6686L3.97938 23.6693ZM26.7304 12.1757C26.7543 12.1957 26.7835 12.2084 26.8144 12.2124C26.8453 12.2164 26.8768 12.2116 26.905 12.1984C26.9333 12.1852 26.9572 12.1643 26.974 12.1381C26.9909 12.1118 26.9999 12.0813 27 12.0501V3.98858C27 3.46118 26.7905 2.95538 26.4176 2.58244C26.0446 2.20951 25.5388 2 25.0114 2H8.62993C8.10252 2 7.59672 2.20951 7.22379 2.58244C6.85086 2.95538 6.64134 3.46118 6.64134 3.98858V7.93813C6.64134 8.46554 6.85086 8.97134 7.22379 9.34427C7.59672 9.71721 8.10252 9.92672 8.62993 9.92672H23.9717C24.0888 9.92672 24.2019 9.96815 24.292 10.0438L26.7304 12.1757Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" />
      </svg>

   );
};

export { QuestionsAndAnswers };
