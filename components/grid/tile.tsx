import clsx from 'clsx';
import Image from 'next/image';
import Label from '../label';
import styles from './GridTileImage.module.scss';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        styles.container,
        label && styles.relative,
        active ? styles.active : styles.inactive
      )}
    >
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image className={clsx(styles.image, isInteractive && styles.interactive)} {...props} />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null}
    </div>
  );
}
