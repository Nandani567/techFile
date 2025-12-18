// src/components/molecules/Navbar.stories.tsx

/* eslint-disable react-refresh/only-export-components */

import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Navbar from './Navbar.tsx';

const meta: Meta<typeof Navbar> = {
    title: 'Components/Molecules/Navbar',
    component: Navbar,
};

export default meta;

type NavbarProps = React.ComponentProps<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = (args: Partial<NavbarProps>) => <Navbar {...(args as NavbarProps)} />;

export const Default = Template.bind({});
Default.args = {};
