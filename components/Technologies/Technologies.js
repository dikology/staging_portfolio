import React from 'react';
import { RiProductHuntLine, RiProductHuntFill, RiDatabase2Line, RiDatabase2Fill } from 'react-icons/ri';
import { SiChinaeasternairlines } from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>What I do</SectionTitle>
    <SectionText>

    </SectionText>
    <List>
        <ListItem>
            <RiProductHuntLine size="3rem" />
            <ListContainer>
                <ListTitle>Product Management</ListTitle>
                <ListParagraph>
                    Create products based on data and user/buyer feedback.
                </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <RiDatabase2Line size="3rem" />
            <ListContainer>
                <ListTitle>Data Analytics</ListTitle>
                <ListParagraph>
                    Learning the ropes and getting insights from vast oceans of data.
                </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
            <SiChinaeasternairlines size="3rem" />
            <ListContainer>
                <ListTitle>Learning Chinese</ListTitle>
                <ListParagraph>
                    To be able to expand my universe with foreign content.
                </ListParagraph>
            </ListContainer>
        </ListItem>
    </List>
  </Section>
);

export default Technologies;