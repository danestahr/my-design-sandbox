import { Avatar } from "./Avatar";

export default {
    title: "Components/Avatar",
    component: Avatar,
    argTypes: {
        size: {
            control: "radio",
            options: ["sm", "md", "lg"]
        },
        image: {
            control: "text",
        },
        initialOverlay: {
            control: "boolean",
        },
    },
};

export const Small = { args: { name: "Jane Doe", size: "sm", image: "https://i.pravatar.cc/150", initialOverlay: true } };
export const Medium = { args: { name: "John Smith", size: "md", image: "https://i.pravatar.cc/150", initialOverlay: true } };
export const Large = { args: { name: "Alice Johnson", size: "lg",image: "https://i.pravatar.cc/150", initialOverlay: true } };
