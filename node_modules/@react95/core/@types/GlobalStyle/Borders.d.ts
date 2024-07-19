import { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
interface IBorderStyle {
    direction?: 'extrude' | 'intrude';
}
interface IBorder extends IBorderStyle {
    outerTopLeft: FlattenInterpolation<ThemeProps<DefaultTheme>>;
    innerTopLeft: FlattenInterpolation<ThemeProps<DefaultTheme>>;
    outerBottomRight: FlattenInterpolation<ThemeProps<DefaultTheme>>;
    innerBottomRight: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}
export declare const createBorder: ({ direction, outerTopLeft, innerTopLeft, outerBottomRight, innerBottomRight, }: IBorder) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
export declare const border: ({ direction }?: IBorderStyle) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
export declare const windowBorder: ({ direction }?: IBorderStyle) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
export declare const scrollBarBorder: ({ direction }?: IBorderStyle) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
export default border;
