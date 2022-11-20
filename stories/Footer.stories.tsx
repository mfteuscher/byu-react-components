import Footer from "../src/components/Footer/Footer";
import LinkList from "../src/components/Footer/LinkList";
import { action } from "@storybook/addon-actions";
import SocialLinkList from "../src/components/Footer/SocialLinkList";
import ContactInfo from "../src/components/Footer/ContactInfo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

export default {
	component: Footer,
	title: "Footer",
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: (
		<>
			<ContactInfo>
				<ContactInfo.Title>Contact</ContactInfo.Title>
				<ContactInfo.Address>
					Joseph Smith Building
					<br /> Provo, Utah 84602
				</ContactInfo.Address>
				<ContactInfo.Phone>801-422-2735</ContactInfo.Phone>
				<ContactInfo.Email>reled_support@byu.edu</ContactInfo.Email>
				{/* <ContactInfo.Button onClick={action("contactAction")}>
					Button
				</ContactInfo.Button> */}
			</ContactInfo>
			<LinkList>
				<LinkList.Title>Quick Links</LinkList.Title>
				<LinkList.Link onClick={action("linkClick")}>Student FAQ</LinkList.Link>
				<LinkList.Link onClick={action("linkClick")}>
					Student Activity
				</LinkList.Link>
				<LinkList.Link onClick={action("linkClick")}>
					Student Employment
				</LinkList.Link>
				<LinkList.Link onClick={action("linkClick")}>
					Faculty Employment
				</LinkList.Link>
			</LinkList>
			<LinkList>
				<LinkList.Title>Quick Links</LinkList.Title>
				<LinkList.Link onClick={action("linkClick")}>Student FAQ</LinkList.Link>
				<LinkList.Link onClick={action("linkClick")}>
					Student Activity
				</LinkList.Link>
				<LinkList.Link onClick={action("linkClick")}>
					Student Employment
				</LinkList.Link>
				<LinkList.Link onClick={action("linkClick")}>
					Faculty Employment
				</LinkList.Link>
			</LinkList>
			<SocialLinkList>
				<SocialLinkList.Title>Quick Links</SocialLinkList.Title>
				<SocialLinkList.Link type="Facebook" href="https://www.facebook.com/" />
				<SocialLinkList.Link type="Twitter" href="https://www.twitter.com/" />
				<SocialLinkList.Link type="YouTube" href="https://www.youtube.com/" />
				<SocialLinkList.Link type="LinkedIn" href="https://www.linkedin.com/" />
				<SocialLinkList.Link
					type="Instagram"
					href="https://www.instagram.com/"
				/>
			</SocialLinkList>
		</>
	),
};

export const Empty = Template.bind({});
