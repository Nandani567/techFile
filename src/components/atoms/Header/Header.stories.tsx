import type { Meta, StoryObj } from '@storybook/react';
import {Header} from "./Header.tsx";
import type {HeaderProps} from "./HeaderProps.ts";


const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        title: { control: 'text' },
        subtitle: { control: 'text' },
        isLoggedIn: { control: 'boolean' },
        onLogin: { action: 'login clicked' },
        onLogout: { action: 'logout clicked' },
    },
};


export default meta;


type Story = StoryObj<HeaderProps>;


export const LoggedOut: Story = {
    args: {
        title: 'My Medical App',
        subtitle: 'Welcome',
        isLoggedIn: false,
    },
};


export const LoggedIn: Story = {
    args: {
        title: 'My Medical App',
        subtitle: 'Dashboard',
        isLoggedIn: true,
    },
};