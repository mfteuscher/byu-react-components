import NavBar from "../src/components/NavBar/NavBar";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

export default {
  component: NavBar,
  title: "Navigation Bar",
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = args => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: null,
  subtitle: null,
  breadcrumbs: null,
  nav: null,
  button: null,
  executeSearch: null,
  signInOptions: null,
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: { text: "Test Title", onClick: action("titleLinkClick") },
};

export const WithTitleAndSubtitle = Template.bind({});
WithTitleAndSubtitle.args = {
  title: { text: "Test Title", onClick: action("titleLinkClick") },
  subtitle: { text: "Test Subtitle", onClick: action("subtitleLinkClick") },
};

export const WithTitleAndBreadcrumbs = Template.bind({});
WithTitleAndBreadcrumbs.args = {
  title: { text: "Test Title", onClick: action("titleLinkClick") },
  breadcrumbs: [
    { text: "Link 1", onClick: action("breadcrumbClick") },
    { text: "Link 2", onClick: action("breadcrumbClick") },
    { text: "Link 3", onClick: action("breadcrumbClick") },
  ],
};

export const WithTitleSubtitleAndBreadcrumbs = Template.bind({});
WithTitleSubtitleAndBreadcrumbs.args = {
  title: { text: "Test Title", onClick: action("titleLinkClick") },
  subtitle: { text: "Test Subtitle", onClick: action("subtitleLinkClick") },
  breadcrumbs: [
    { text: "Link 1", href: "#" },
    { text: "Link 2", href: "#" },
    { text: "Link 3", href: "#" },
  ],
};

export const WithButton = Template.bind({});
WithButton.args = {
  title: { text: "Test Title", onClick: action("titleLinkClick") },
  subtitle: { text: "Test Subtitle", onClick: action("subtitleLinkClick") },
  button: {
    text: "Button",
    onClick: action("buttonOnClick"),
  },
};

export const WithLinks = Template.bind({});
WithLinks.args = {
  title: { text: "Test Title", onClick: action("titleLinkClick") },
  subtitle: { text: "Test Subtitle", onClick: action("subtitleLinkClick") },
  nav: [
    { text: "Link 1", href: "#" },
    { text: "Link 2", href: "#" },
    { text: "Link 3", href: "#" },
  ],
  active: "Link 2",
};

export const WithEverything = Template.bind({});
WithEverything.args = {
  title: { text: "Test Title", onClick: action("titleLinkClick") },
  subtitle: { text: "Test Subtitle", onClick: action("subtitleLinkClick") },
  breadcrumbs: [
    { text: "Breadcrumb 1", onClick: action("breadcrumbClick") },
    { text: "Breadcrumb 2", onClick: action("breadcrumbClick") },
  ],
  nav: [
    { text: "Link 1", onClick: action("linkClick") },
    { text: "Link 2", onClick: action("linkClick") },
    { text: "Link 3", onClick: action("linkClick") },
  ],
  active: "Link 2",
  button: {
    text: "Button",
    onClick: action("buttonOnClick"),
  },
  executeSearch: action("query"),
  signInOptions: {
    signedIn: true,
    userName: "Michael",
    signIn: action("signIn"),
    signOut: action("signOut"),
  },
};
