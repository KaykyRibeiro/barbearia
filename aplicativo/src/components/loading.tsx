import { ActivityIndicator } from "react-native"

export function Loading() {
    return (
        <ActivityIndicator className="flex-1 bg-neutral-100 dark:bg-neutral-900 items-center justify-center" />
    )
}