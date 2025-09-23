import 'styled-components';
import type { Theme } from '@/types/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
