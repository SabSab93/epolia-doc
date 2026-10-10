import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Epolia — Documentation technique"
      description="Documentation technique du projet Epolia">
      <main className={styles.main}>
        <section className="container">
          <Heading as="h1">Epolia — Documentation technique</Heading>
          <p className={styles.lead}>
            Cette documentation centralise les informations techniques nécessaires
            au développement, à l’architecture et à la maintenance d’Epolia.
          </p>
          <Link className="button button--primary" to="/docs/getting-started">
            Ouvrir la documentation
          </Link>
        </section>
      </main>
    </Layout>
  );
}
