import { Link, NavLink } from 'react-router-dom';

export const COMPONENTS: Record<'link' | 'navlink' | 'button', React.ElementType> = {
  link: Link,
  navlink: NavLink,
  button: 'button',
};
