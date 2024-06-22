import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import styles from './SearchLayout.module.scss';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.collections}>
          <Collections />
        </div>
        <div className={styles.children}>{children}</div>
        <div className={styles.filterList}>
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
      <Footer />
    </>
  );
}
