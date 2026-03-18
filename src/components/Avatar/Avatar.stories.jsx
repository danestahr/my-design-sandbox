import { Avatar } from "./Avatar";

export default {
    title: "Components/Avatar",
    component: Avatar,
    argTypes: {
        size: {
            control: "radio",
            options: ["sm", "md", "lg"]
        }
    }
};

export const Small = { args: { name: "Jane Doe", size: "sm" } };
export const Medium = { args: { name: "John Smith", size: "md" } };
export const Large = { args: { name: "Alice Johnson", size: "lg" } };
