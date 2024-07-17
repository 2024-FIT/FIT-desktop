declare module 'react-big-calendar' {
    import * as React from 'react';
  
    export interface Event {
      start: Date;
      end: Date;
      title: string;
      [key: string]: any; // 추가적인 속성을 위한
    }
  
    export interface CalendarProps {
      events: Event[];
      startAccessor: string;
      endAccessor: string;
      localizer: any; // 로컬라이저의 타입을 구체화할 수 있음
      style?: React.CSSProperties;
      [key: string]: any; // 추가적인 속성을 위한
    }
  
    export class Calendar extends React.Component<CalendarProps> {}
  
    export function momentLocalizer(moment: any): any; // moment의 타입을 구체화할 수 있음
  }