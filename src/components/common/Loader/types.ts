import { Spin } from 'antd';
import type { ComponentProps } from 'react';

type AntSpinProps = ComponentProps<typeof Spin>;

export type LoaderProps = AntSpinProps & {
  spinnerSize?: number;
  className?: string;
};
