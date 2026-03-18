import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "danger"],
    },
  },
};

export const Default = { args: { label: "Active", variant: "default" } };
export const Success = { args: { label: "Confirmed", variant: "success" } };
export const Warning = { args: { label: "Pending", variant: "warning" } };
export const Danger = { args: { label: "Cancelled", variant: "danger" } };