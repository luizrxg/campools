import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import type { AppScreen, UserMode } from "@/types";
import {
  IconHome,
  IconHomeFilled,
  IconCar,
  IconCarFilled,
  IconUser,
  IconUserFilled,
} from "@tabler/icons-react-native";
import { colors } from "@/theme";

interface BottomNavProps {
  screen: AppScreen;
  mode: UserMode;
  onNavigate: (screen: AppScreen) => void;
}

const passengerTabs = [
  { screen: "home" as AppScreen, icon: IconHome, iconActive: IconHomeFilled, label: "Início" },
  { screen: "request" as AppScreen, icon: IconCar, iconActive: IconCarFilled, label: "Carona" },
  { screen: "profile" as AppScreen, icon: IconUser, iconActive: IconUserFilled, label: "Perfil" },
];

const driverTabs = [
  { screen: "driver-home" as AppScreen, icon: IconCar, iconActive: IconCarFilled, label: "Corridas" },
  { screen: "profile" as AppScreen, icon: IconUser, iconActive: IconUserFilled, label: "Perfil" },
];

const hiddenScreens: AppScreen[] = ["finding", "active-ride"];

export function BottomNav({ screen, mode, onNavigate }: BottomNavProps) {
  if (hiddenScreens.includes(screen)) return null;

  const tabs = mode === "driver" ? driverTabs : passengerTabs;
  const activeScreen = screen === "driver-active" ? "driver-home" : screen;

  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        {tabs.map((tab) => {
          const isActive = activeScreen === tab.screen;
          const TabIcon = isActive ? tab.iconActive : tab.icon;
          return (
            <TouchableOpacity
              key={tab.screen}
              style={styles.tab}
              activeOpacity={0.7}
              onPress={() => onNavigate(tab.screen)}
            >
              {isActive && <View style={styles.activeIndicator} />}
              <TabIcon
                size={24}
                color={isActive ? colors.brand[500] : colors.gray[400]}
              />
              <Text
                style={[
                  styles.label,
                  {
                    color: isActive ? colors.brand[500] : colors.gray[400],
                    fontWeight: isActive ? "700" : "500",
                  },
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.gray[100],
    paddingHorizontal: 8,
  },
  flexRow: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    position: 'relative',
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    width: 20,
    height: 2,
    backgroundColor: colors.brand[500],
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  label: {
    fontSize: 10,
    marginTop: 4,
  },
});
