import React, { Fragment } from 'react';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation'
import Intro from '../components/Intro';
import Projects from '../components/Projects/Projects';
import { Skills } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, projects, SEO, work } from '../config/config';
import { Header } from '../components/Header';

import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

export default function Home() {
  return (
    <Fragment>
      <Layout>
        <Header seo={SEO} />
        <Section grid>
          <Intro />
          <BgAnimation />
        </Section>
        <Projects />
        <Skills
          title={work.title}
          cards={work.cards}
        />
        <Contact
          title={contact.title}
          description={contact.description}
          buttons={contact.buttons}
        />
        <Footer />
      </Layout>
    </Fragment>
  );
}
