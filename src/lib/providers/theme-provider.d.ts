import { PropsWithChildren } from 'react';
import { SwipeDayScheme, SwipeDayThemeProps } from '../types/swipe-day';
type Theme = {
    backgroundColor: string;
    verticalLineColor: string;
    horizontalLineColor: string;
    groupHeaderTextColor: string;
    groupHeaderBackgroundColor: string;
    dayHeaderTextColor: string;
    dayHeaderBackgroundColor: string;
};
export declare const ThemeProvider: (props: PropsWithChildren<{
    theme?: SwipeDayThemeProps;
}>) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => Theme;
type Colors = Record<SwipeDayScheme, {
    background: string;
    background1: string;
    text: string;
}>;
export declare const SchemeColors: Colors;
export {};
