import clsx from 'clsx';
import styles from './Label.module.scss';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div className={clsx(styles.container, position === 'center' && styles.center)}>
      <div className={styles.label}>
        <h3 className={styles.title}>{title}</h3>
        <Price
          className={styles.price}
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName={styles.currencyCode}
        />
      </div>
    </div>
  );
};

export default Label;
