import React from "react";
import { cva } from "class-variance-authority";
import { Text } from "../components/text";
import { Icon } from "../components/icon";

import TrashIcon from "../assets/icons/Trash.svg?react";

const appointmentItemContainer = cva(
    "flex flex-row gap-12 w-full items-center p-6",
);

type AppointmentItemProps = React.ComponentProps<"div">;

export const AppointmentItem = ({
    children,
    className,
    ...props
}: AppointmentItemProps) => {
    return (
        <div className={appointmentItemContainer({ className })} {...props}>
            <Text color={"medium"} variant={"body-md-bold"}>
                13:00
            </Text>
            <Text color={"medium"} variant={"body-md"} className="flex-1">
                {children}
            </Text>
            <Icon
                className="hover:fill-yellow-dark cursor-pointer"
                svg={TrashIcon}
            />
        </div>
    );
};
