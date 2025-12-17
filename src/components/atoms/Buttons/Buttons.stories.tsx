import type { Meta, StoryObj } from "@storybook/react";
import Buttons from "./Buttons.tsx";

const meta: Meta<typeof Buttons> = {
    title: "Components/Buttons",
    component: Buttons,
    argTypes: {
        className: {
            control: "select",
            options: [
                "btn",
                "btn btn-primary",
                "btn btn-secondary",
                "btn btn-accent",
                "btn btn-info",
                "btn btn-success",
                "btn btn-warning",
                "btn btn-error",
                "btn btn-outline",
                "btn btn-ghost",
                "btn btn-link",
            ],
        },
        buttonText: {
            control: "text",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Buttons>;

export const Primary: Story = {
    args: {
        className: "btn btn-primary",
        buttonText: "Primary Buttons",
    },
};

export const Secondary: Story = {
    args: {
        className: "btn btn-secondary",
        buttonText: "Secondary Buttons",
    },
};

export const Accent: Story = {
    args: {
        className: "btn btn-accent",
        buttonText: "Accent Buttons",
    },
};

export const Outline: Story = {
    args: {
        className: "btn btn-outline",
        buttonText: "Outline Buttons",
    },
};

export const Ghost: Story = {
    args: {
        className: "btn btn-ghost",
        buttonText: "Ghost Buttons",
    },
};
