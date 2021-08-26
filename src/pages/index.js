import styles from '../styles/Main.module.scss'
import Head from 'next/head'
import LeftContainer from '../features/LeftComponent';
import RightContainer from '../features/RightComponent';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={ styles.dropContainerInner }>
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
  )
}
