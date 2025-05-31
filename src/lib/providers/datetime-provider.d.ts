import { Day } from 'date-fns/types';
import { SwipeDayDatetimeProps, SwipeDayFormatterProps } from '../types/swipe-day';
import { PropsWithChildren } from 'react';
export type DatetimeState = {
    now: Date;
    numberOfDays: number;
    weekStartsOn: Day;
    hiddenDays: Day[];
    dayHeaderTextFormat: string;
    minDate?: Date;
    maxDate?: Date;
    formatDate: (date: Date | string | number, format: string) => string;
    setNow: (date: Date) => void;
};
export declare const DatetimeProvider: ({ weekStartsOn, hiddenDays, numberOfDays, minDate, maxDate, locale, dayHeaderTextFormat, children, }: PropsWithChildren<SwipeDayDatetimeProps & SwipeDayFormatterProps>) => import("react/jsx-runtime").JSX.Element;
export declare const useDatetime: () => DatetimeState;
