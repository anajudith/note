export interface IProps {
  title: string;
  onClick?: () => void;
  link?: string;
  iconAfter?: JSX.Element;
  iconBefore?: JSX.Element;
}
