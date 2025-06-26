import { SharedValue } from 'react-native-reanimated';
import { SwipeDayActionsProps, SwipeDayRenderProps, SwipeGayGroup } from '../types/swipe-day';
export declare const GroupColumn: import("react").MemoExoticComponent<({ blockPress$, rtl, id, name, height, color, backgroundColor, borderColor, borderWidth, render, onPress, }: {
    blockPress$: SharedValue<boolean>;
    rtl: boolean;
    id: SwipeGayGroup["id"];
    name: string;
    height: number;
    color: string;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    render: SwipeDayRenderProps["renderGroupHeader"];
    onPress: SwipeDayActionsProps["onGroupHeaderPress"];
}) => import("react/jsx-runtime").JSX.Element>;
