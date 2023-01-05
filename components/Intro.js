import React from 'react';

import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
import Button from '../styles/GlobalComponents/Button';
import { LeftSection } from './IntroStyles';

const Intro = () => (
  <Section row nopadding>
	<LeftSection>
		<SectionTitle main center>
			Hey, I'm Denis <br />
		</SectionTitle>
		<SectionText>
			A product manager learning data analytics
		</SectionText>
		<Button onClick={() => window.location = '#contact'}>Contact me</Button>
	</LeftSection>
  </Section>
);

export default Intro;