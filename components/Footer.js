import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from './NavStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
		<LinkList>
			<LinkColumn>
				<LinkTitle>Telegram</LinkTitle>
				<LinkItem href="https://t.me/dikobrist">@dikobrist</LinkItem>
			</LinkColumn>
			<LinkColumn>
				<LinkTitle>Email</LinkTitle>
				<LinkItem href="mailto:dgimaletdinov@gmail.com">dgimaletdinov@gmail.com</LinkItem>
			</LinkColumn>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>
						Coffee Chat! Please do not hesitate to telegram me. Alternatively, feel free to reach out directly by email.
					</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/dikology">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://linkedin.com/dikology">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://instagram.com/unpotato_lifestyle">
						<AiFillInstagram size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</LinkList>
	</FooterWrapper>
  );
};

export default Footer;