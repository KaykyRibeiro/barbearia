import { Image, ImageProps } from "react-native";

import clsx from "clsx";
type AvatarProps = ImageProps & {
    size?: "sm" | "md" | "lg";
}
export function Avatar({size = "md", ...res} : AvatarProps) {
    return (
        <Image className={clsx("rounded-full", {
            "w-12 h-12": size === "sm",
            "w-14 h-14": size === "md",
            "w-18 h-18": size === "lg",
        })} {...res} />
    )
}