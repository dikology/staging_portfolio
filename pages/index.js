import React, { Fragment } from 'react';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation'
import Intro from '../components/Intro';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/Timeline/Timeline';

import { about, contact, intro, navigation, projects, SEO, work } from '../config/config';
import { Header } from '../components/Header';

import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

export default function Home() {
  return (
    <Fragment>
      <Layout>
        <Section grid>
          <Intro />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
      </Layout>
    </Fragment>
  );
}
