import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img src="img/logo.png" width="200px"/>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/achievements">
                        Achievements
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="/wool-wars">
                        Wool Wars
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="/guilds">
                        Guilds
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout
            title={`Pixel Studios Wiki`}
            description="Documentation for our plugins.">
            <HomepageHeader/>
        </Layout>
    );
}
