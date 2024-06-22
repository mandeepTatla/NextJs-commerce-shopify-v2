import clsx from 'clsx';
import styles from './Grid.module.scss';

function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <ul {...props} className={clsx(styles.grid, props.className)}>
      {props.children}
    </ul>
  );
}

function GridItem(props: React.ComponentProps<'li'>) {
  return (
    <li {...props} className={clsx(styles.gridItem, props.className)}>
      {props.children}
    </li>
  );
}

Grid.Item = GridItem;

export default Grid;
