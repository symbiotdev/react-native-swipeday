import { Day } from 'date-fns/types';
import { Locale } from 'date-fns/locale/types';
import { ReactElement } from 'react';
export type SwipeDayScheme = 'light' | 'dark';
export type SwipeDayStyle = {
    backgroundColor?: string;
    verticalLineColor?: string;
    horizontalLineColor?: string;
    groupHeaderTextColor?: string;
    groupHeaderBackgroundColor?: string;
    dayHeaderTextColor?: string;
    dayHeaderBackgroundColor?: string;
};
export type SwipeDayThemeProps = SwipeDayStyle & {
    scheme?: SwipeDayScheme;
} & {
    [key in SwipeDayScheme]?: SwipeDayStyle;
};
export type SwipeDayDatetimeProps = {
    startDate?: Date;
    weekStartsOn?: Day;
    hiddenDays?: Day[];
    numberOfDays?: number;
    minDate?: Date;
    maxDate?: Date;
};
export type SwipeDayFormatterProps = {
    dayHeaderTextFormat?: string;
    locale?: Locale;
};
export type SwipeDayScrollProp = boolean | Record<string, boolean> | Array<{
    groupId: SwipeGayGroup['id'];
    date: string;
    value: boolean;
}>;
export type SwipeDayScrollProps = {
    scrollable?: SwipeDayScrollProp;
    refreshable?: SwipeDayScrollProp;
    refreshing?: SwipeDayScrollProp;
};
export type SwipeDayControllerProps = {
    swipeable?: boolean;
    snappable?: boolean;
    debounceable?: boolean;
    groupable?: boolean;
    rtl?: boolean;
    isDayHeaderVisible?: boolean;
    isGroupHeaderVisible?: boolean;
};
export type SwipeGayGroup = {
    id: string | number;
    name: string;
};
export type SwipeGayGroupProps = {
    numberOfGroups?: number;
    groups?: SwipeGayGroup[];
};
export type SwipeDayDimensionsProps = {
    width?: number;
    dayHeaderHeight?: number;
    groupHeaderHeight?: number;
    horizontalLineSize?: number;
};
export type SwipeDayActionsProps = {
    onLoad?: () => void;
    onChangeDate?: (date: Date) => void;
    onRefresh?: (params: {
        date: Date;
        groupId?: SwipeGayGroup['id'];
    }) => void;
    onGroupHeaderPress?: (params: {
        groupId: SwipeGayGroup['id'];
    }) => void;
    onDayHeaderPress?: (params: {
        date: Date;
        groupId?: SwipeGayGroup['id'];
    }) => void;
    onDayPress?: (params: {
        date: Date;
        groupId?: SwipeGayGroup['id'];
    }) => void;
    onDayLongPress?: (params: {
        date: Date;
        groupId?: SwipeGayGroup['id'];
    }) => void;
};
export type SwipeDayRenderProps = {
    renderGroupHeader?: (params: {
        groupId: SwipeGayGroup['id'];
    }) => ReactElement;
    renderDayHeader?: (params: {
        date: Date;
    }) => ReactElement;
    renderDay?: (params: {
        date: Date;
    }) => ReactElement;
};
export type SwipeDayRefNavigationParams = {
    animated?: boolean;
    ignoreLimit?: boolean;
    groupId?: SwipeGayGroup['id'];
};
export type SwipeDayRef = {
    getPrevDate: (params?: {
        ignoreLimit?: boolean;
    }) => Date | undefined;
    getNextDate: (params?: {
        ignoreLimit?: boolean;
    }) => Date | undefined;
    prevDate: (params?: SwipeDayRefNavigationParams) => void;
    nextDate: (params?: SwipeDayRefNavigationParams) => void;
    back: (params?: SwipeDayRefNavigationParams) => void;
    forward: (params?: SwipeDayRefNavigationParams) => void;
};
export type SwipeDayProps = SwipeDayDatetimeProps & SwipeDayFormatterProps & SwipeDayScrollProps & SwipeDayControllerProps & SwipeGayGroupProps & SwipeDayDimensionsProps & SwipeDayActionsProps & SwipeDayRenderProps & {
    theme?: SwipeDayThemeProps;
    ref?: SwipeDayRef;
};
