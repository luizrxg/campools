<<<<<<< HEAD
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MobileFrame } from "@/components/MobileFrame";
import { BottomNav } from "@/components/BottomNav";
import { HomeScreen } from "@/screens/HomeScreen";
import { RequestScreen } from "@/screens/RequestScreen";
import { FindingScreen } from "@/screens/FindingScreen";
import { ActiveRideScreen } from "@/screens/ActiveRideScreen";
import { DriverScreen } from "@/screens/DriverScreen";
import { ProfileScreen } from "@/screens/ProfileScreen";
import type { AppScreen, UserMode } from "@/types";
import { IconCar, IconUser } from "@tabler/icons-react-native";
import { colors } from "@/theme";
=======
import { useState } from "react"
import { Box, Flex, Text, HStack, Icon } from "@chakra-ui/react"
import { MobileFrame } from "@/components/MobileFrame"
import { BottomNav } from "@/components/BottomNav"
import { HomeScreen } from "@/screens/HomeScreen"
import { RequestScreen } from "@/screens/RequestScreen"
import { FindingScreen } from "@/screens/FindingScreen"
import { ActiveRideScreen } from "@/screens/ActiveRideScreen"
import { DriverScreen } from "@/screens/DriverScreen"
import { ProfileScreen } from "@/screens/ProfileScreen"
import type { AppScreen, UserMode } from "@/types"
import { IconCar, IconUser } from "@tabler/icons-react"
>>>>>>> origin/main

function App() {
  const [screen, setScreen] = useState<AppScreen>("home");
  const [mode, setMode] = useState<UserMode>("passenger");

  const renderScreen = () => {
    switch (screen) {
      case "home":
        return (
          <HomeScreen
            onNavigate={setScreen}
            mode={mode}
            onModeToggle={() => {
              setMode("driver");
              setScreen("driver-home");
            }}
          />
        );
      case "request":
        return <RequestScreen onNavigate={setScreen} />;
      case "finding":
        return <FindingScreen onNavigate={setScreen} />;
      case "active-ride":
        return <ActiveRideScreen onNavigate={setScreen} />;
      case "driver-home":
        return <DriverScreen onNavigate={setScreen} />;
      case "profile":
<<<<<<< HEAD
        return <ProfileScreen onNavigate={setScreen} mode={mode} />;
=======
        return <ProfileScreen onNavigate={setScreen} mode={mode} />
>>>>>>> origin/main
      default:
        return (
          <HomeScreen
            onNavigate={setScreen}
            mode={mode}
            onModeToggle={() => {
              setMode("driver");
              setScreen("driver-home");
            }}
          />
        );
    }
  };

  return (
    <SafeAreaProvider>
      <MobileFrame>
        {/* Mode toggle bar */}
        <View style={styles.modeToggleBar}>
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                mode === "passenger" && styles.toggleButtonActive,
              ]}
              onPress={() => {
                setMode("passenger");
                setScreen("home");
              }}
              activeOpacity={0.8}
            >
<<<<<<< HEAD
              <View style={styles.toggleContent}>
                <IconUser
                  size={14}
                  color={mode === "passenger" ? colors.brand[500] : colors.brand[400]}
                />
=======
              <HStack gap="1.5">
                <Icon
                  color={mode === "passenger" ? "brand.500" : "brand.400"}
                  boxSize="3.5"
                >
                  <IconUser />
                </Icon>
>>>>>>> origin/main
                <Text
                  style={[
                    styles.toggleText,
                    { color: mode === "passenger" ? colors.brand[500] : colors.brand[400] },
                  ]}
                >
                  Passageiro
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.toggleButton,
                mode === "driver" && styles.toggleButtonActive,
              ]}
              onPress={() => {
                setMode("driver");
                setScreen("driver-home");
              }}
              activeOpacity={0.8}
            >
<<<<<<< HEAD
              <View style={styles.toggleContent}>
                <IconCar
                  size={14}
                  color={mode === "driver" ? colors.brand[500] : colors.brand[400]}
                />
=======
              <HStack gap="1.5">
                <Icon
                  color={mode === "driver" ? "brand.500" : "brand.400"}
                  boxSize="3.5"
                >
                  <IconCar />
                </Icon>
>>>>>>> origin/main
                <Text
                  style={[
                    styles.toggleText,
                    { color: mode === "driver" ? colors.brand[500] : colors.brand[400] },
                  ]}
                >
                  Motorista
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Screen content */}
        <View style={styles.screenContent}>{renderScreen()}</View>

        {/* Bottom navigation */}
        <BottomNav screen={screen} mode={mode} onNavigate={setScreen} />
      </MobileFrame>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  modeToggleBar: {
    backgroundColor: colors.brand[950],
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 4,
    alignItems: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: colors.brand[800],
    borderRadius: 20,
    padding: 2,
  },
  toggleButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 18,
  },
  toggleButtonActive: {
    backgroundColor: colors.white,
  },
  toggleContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  toggleText: {
    fontSize: 12,
    fontWeight: "700",
  },
  screenContent: {
    flex: 1,
  },
});

export default App;
