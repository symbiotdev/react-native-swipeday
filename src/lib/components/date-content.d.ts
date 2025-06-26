import { Ref } from 'react';
import { CalendarDate } from 'internal-ts-useful';
import { SwipeDayActionsProps, SwipeDayRenderProps } from '../types/swipe-day';
import { SharedValue } from 'react-native-reanimated';
export declare const DateContent: import("react").MemoExoticComponent<({ blockPress$, date, groupId, refreshable, refreshing, scrollable, simultaneousHandlers, render, onPress, onLongPress, onRefresh, }: {
    blockPress$: SharedValue<boolean>;
    refreshable: boolean;
    refreshing: boolean;
    scrollable: boolean;
    simultaneousHandlers: Ref<unknown>;
    render: SwipeDayRenderProps["renderDay"];
    onPress: SwipeDayActionsProps["onDayPress"];
    onLongPress: SwipeDayActionsProps["onDayLongPress"];
    onRefresh: SwipeDayActionsProps["onRefresh"];
} & CalendarDate) => import("react/jsx-runtime").JSX.Element>;
