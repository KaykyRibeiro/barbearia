import { Image, ImageProps } from "react-native";

import clsx from "clsx";
type AvatarProps = ImageProps & {
    size?: "sm" | "md" | "lg" | "xl";
}
export function Avatar({size = "md", ...res} : AvatarProps) {
    return (
        <Image className={clsx("rounded-full", {
            "w-12 h-12": size === "sm",
            "w-14 h-14": size === "md",
            "w-20 h-20": size === "lg",
            "w-32 h-32": size === "xl",
        })} {...res} />
    )
}