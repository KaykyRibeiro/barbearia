import { View } from "react-native";


import { MenuButton } from "./menu-button";
import { SearchButton } from "./search";
import HomeButton from "./homeButton";

export function Navbar() {
    return (
        <View className="flex-row items-center justify-around px-5 py-4 bg-neutral-950 rounded-t-3xl">
            <View>
                <HomeButton/>
            </View>
            <View>
                <SearchButton/>
            </View>
            <View>
                <MenuButton />
            </View>
        </View>
    )
};