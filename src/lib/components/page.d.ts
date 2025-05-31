import { CalendarPage } from 'internal-ts-useful';
import { SwipeDayActionsProps, SwipeDayRenderProps, SwipeDayScrollProps } from '../types/swipe-day';
export declare const Page: ({ refreshable, scrollable, refreshing, page, renderGroupHeader, renderDayHeader, renderDay, onGroupHeaderPress, onDayHeaderPress, onDayPress, onDayLongPress, onRefresh, }: SwipeDayScrollProps & {
    page: CalendarPage;
    renderGroupHeader: SwipeDayRenderProps["renderGroupHeader"];
    renderDayHeader: SwipeDayRenderProps["renderDayHeader"];
    renderDay: SwipeDayRenderProps["renderDay"];
    onGroupHeaderPress: SwipeDayActionsProps["onGroupHeaderPress"];
    onDayHeaderPress: SwipeDayActionsProps["onDayHeaderPress"];
    onDayPress: SwipeDayActionsProps["onDayPress"];
    onDayLongPress: SwipeDayActionsProps["onDayLongPress"];
    onRefresh: SwipeDayActionsProps["onRefresh"];
}) => import("react/jsx-runtime").JSX.Element;
