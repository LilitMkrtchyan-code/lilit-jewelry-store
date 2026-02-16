import { Link, NavLink } from 'react-router-dom';

export const COMPONENTS: Record<'navlink' | 'link' | 'button', React.ElementType> = {
  link: Link,
  navlink: NavLink,
  button: 'button',
};
