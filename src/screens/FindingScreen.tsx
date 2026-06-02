<<<<<<< HEAD
import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { Avatar } from "@/components/ui/avatar";
import { MapSimulation } from "@/components/MapSimulation";
import { mockDriver, mockDriver2 } from "@/data/mockData";
import type { AppScreen } from "@/types";
import { IconX, IconStar, IconCar } from "@tabler/icons-react-native";
import { colors } from "@/theme";
=======
import { Box, Flex, Text, HStack, VStack, Icon } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Avatar } from "@/components/ui/avatar"
import { MapSimulation } from "@/components/MapSimulation"
import { mockDriver, mockDriver2 } from "@/data/mockData"
import type { AppScreen } from "@/types"
import { IconX, IconStar, IconCar } from "@tabler/icons-react"
>>>>>>> origin/main

interface FindingScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

const drivers = [mockDriver, mockDriver2];

export function FindingScreen({ onNavigate }: FindingScreenProps) {
  const [phase, setPhase] = useState<"searching" | "found">("searching");
  const [dots, setDots] = useState(".");
  const foundDriver = drivers[0];
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let dotInterval: NodeJS.Timeout;
    let findTimer: NodeJS.Timeout;

    if (phase === "searching") {
      dotInterval = setInterval(() => {
        setDots((d) => (d.length >= 3 ? "." : d + "."));
      }, 500);

      findTimer = setTimeout(() => {
        setPhase("found");
      }, 3000);
    }

    // Start spin animation if not already started
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    return () => {
      if (dotInterval) clearInterval(dotInterval);
      if (findTimer) clearTimeout(findTimer);
    };
  }, [phase]);

  useEffect(() => {
    if (phase === "found") {
      const autoAccept = setTimeout(() => {
        onNavigate("active-ride");
      }, 4000);
      return () => clearTimeout(autoAccept);
    }
  }, [phase, onNavigate]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      {/* Map */}
      <View style={styles.mapContainer}>
        <MapSimulation variant="finding" height={260} />

        {/* Cancel button */}
<<<<<<< HEAD
        <TouchableOpacity
          style={styles.cancelIconButton}
          onPress={() => onNavigate("home")}
        >
          <IconX size={20} color={colors.gray[600]} />
        </TouchableOpacity>
      </View>
=======
        <Box
          position="absolute"
          top="4"
          right="4"
          bg="white"
          rounded="full"
          p="2"
          cursor="pointer"
          onClick={() => onNavigate("home")}
        >
          <Icon color="gray.600" boxSize="5">
            <IconX />
          </Icon>
        </Box>
      </Box>
>>>>>>> origin/main

      {/* Content */}
      <View style={styles.content}>
        {phase === "searching" ? (
          <View style={styles.searchingView}>
            {/* Spinner */}
<<<<<<< HEAD
            <View style={styles.spinnerContainer}>
              <View style={styles.spinnerBackground} />
              <Animated.View
                style={[
                  styles.spinnerActive,
                  { transform: [{ rotate: spin }] },
                ]}
              />
              <View style={styles.spinnerIcon}>
                <IconCar size={28} color={colors.brand[500]} />
              </View>
            </View>
=======
            <Box position="relative" w="80px" h="80px">
              <Box
                position="absolute"
                inset="0"
                rounded="full"
                border="4px solid"
                borderColor="gray.200"
              />
              <Box
                position="absolute"
                inset="0"
                rounded="full"
                border="4px solid transparent"
                borderTopColor="gray.500"
                css={{ animation: "spin 1s linear infinite" }}
              />
              <Flex
                position="absolute"
                inset="0"
                align="center"
                justify="center"
              >
                <Icon color="brand.500" boxSize="7">
                  <IconCar />
                </Icon>
              </Flex>
            </Box>
>>>>>>> origin/main

            <View style={styles.textCenter}>
              <Text style={styles.titleText}>Buscando motoristas{dots}</Text>
              <Text style={styles.subtitleText}>
                Encontrando a melhor carona para você
              </Text>
            </View>

            {/* Nearby drivers count */}
<<<<<<< HEAD
            <View style={styles.nearbyInfo}>
              <View style={styles.nearbyIconBg}>
                <IconCar size={20} color={colors.white} />
              </View>
              <View>
                <Text style={styles.nearbyTitle}>8 motoristas próximos</Text>
                <Text style={styles.nearbySub}>
=======
            <HStack
              bg="brand.50"
              rounded="xl"
              px="4"
              py="3"
              gap="3"
              w="full"
            >
              <Box
                bg="brand.500"
                rounded="lg"
                boxSize="36px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon color="white" boxSize="5">
                  <IconCar />
                </Icon>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="semibold" color="brand.700">
                  8 motoristas próximos
                </Text>
                <Text fontSize="xs" color="brand.400">
>>>>>>> origin/main
                  Todos verificados pela UniCarona
                </Text>
              </View>
            </View>

            {/* Cancel Button */}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => onNavigate("home")}
            >
              <Text style={styles.cancelButtonText}>Cancelar busca</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.foundView}>
            {/* Found badge */}
<<<<<<< HEAD
            <View style={styles.foundBadge}>
              <Text style={styles.foundBadgeText}>Motorista encontrado!</Text>
            </View>
=======
            <Box
              bg="green.50"
              rounded="full"
              px="4"
              py="1.5"
            >
              <Text fontSize="xs" fontWeight="bold" color="green.600">
                Motorista encontrado!
              </Text>
            </Box>
>>>>>>> origin/main

            {/* Driver card */}
            <View style={styles.driverCard}>
              <View style={styles.driverHeader}>
                <View style={styles.avatarWrapper}>
                  <Avatar
                    size="lg"
                    name={foundDriver.name}
                    src={foundDriver.avatarUrl}
                    bg={colors.brand[500]}
                  />
                  {foundDriver.verified && (
<<<<<<< HEAD
                    <View style={styles.verifiedDot} />
=======
                    <Box
                      position="absolute"
                      bottom="-1"
                      right="-1"
                      bg="brand.500"
                      rounded="full"
                      p="0.5"
                    />
>>>>>>> origin/main
                  )}
                </View>
                <View style={styles.driverInfo}>
                  <View style={styles.nameRow}>
                    <Text style={styles.driverName}>{foundDriver.name}</Text>
                    {foundDriver.verified && (
                      <View style={styles.verifiedBadge}>
                        <Text style={styles.verifiedBadgeText}>Verificado</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.driverUniversity}>
                    {foundDriver.university}
                  </Text>
<<<<<<< HEAD
                  <View style={styles.ratingRow}>
                    <IconStar size={14} color="#facc15" />
                    <Text style={styles.ratingText}>{foundDriver.rating}</Text>
                    <Text style={styles.totalRidesText}>
=======
                  <HStack gap="1" mt="1">
                    <Icon color="yellow.400" boxSize="3.5">
                      <IconStar />
                    </Icon>
                    <Text fontSize="xs" fontWeight="bold" color="gray.700">
                      {foundDriver.rating}
                    </Text>
                    <Text fontSize="xs" color="gray.400">
>>>>>>> origin/main
                      ({foundDriver.totalRides} corridas)
                    </Text>
                  </View>
                </View>
                <View style={styles.etaContainer}>
                  <Text style={styles.etaValue}>{foundDriver.eta}</Text>
                  <Text style={styles.etaUnit}>min</Text>
                </View>
              </View>

<<<<<<< HEAD
              <View style={styles.carInfo}>
                <IconCar size={16} color={colors.gray[500]} />
                <Text style={styles.carText}>
                  {foundDriver.car} {foundDriver.color}
                </Text>
                <View style={{ flex: 1 }} />
                <View style={styles.plateBadge}>
                  <Text style={styles.plateText}>{foundDriver.plate}</Text>
                </View>
              </View>
            </View>
=======
              <Box
                bg="white"
                rounded="xl"
                p="3"
                border="1px solid"
                borderColor="gray.100"
              >
                <HStack gap="2">
                  <Icon color="gray.500" boxSize="4">
                    <IconCar />
                  </Icon>
                  <Text fontSize="sm" color="gray.700">
                    {foundDriver.car} {foundDriver.color}
                  </Text>
                  <Box flex="1" />
                  <Box
                    bg="gray.800"
                    rounded="md"
                    px="2.5"
                    py="1"
                  >
                    <Text fontSize="xs" color="white" fontWeight="bold" letterSpacing="wider">
                      {foundDriver.plate}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
>>>>>>> origin/main

            <Text style={styles.redirectText}>
              Você será redirecionado automaticamente...
            </Text>

            {/* Accept button */}
<<<<<<< HEAD
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => onNavigate("active-ride")}
=======
            <Box
              w="full"
              bg="brand.500"
              rounded="xl"
              py="4"
              textAlign="center"
              cursor="pointer"
              onClick={() => onNavigate("active-ride")}
              _hover={{ bg: "brand.600" }}
              transition="all 0.2s"
>>>>>>> origin/main
            >
              <Text style={styles.confirmButtonText}>Confirmar carona</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mapContainer: {
    position: "relative",
  },
  cancelIconButton: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  searchingView: {
    flex: 1,
    alignItems: "center",
    gap: 20,
  },
  spinnerContainer: {
    width: 80,
    height: 80,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  spinnerBackground: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: colors.gray[200],
  },
  spinnerActive: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "transparent",
    borderTopColor: colors.gray[500],
  },
  spinnerIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  textCenter: {
    alignItems: "center",
    gap: 4,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.gray[800],
  },
  subtitleText: {
    fontSize: 14,
    color: colors.gray[500],
  },
  nearbyInfo: {
    flexDirection: "row",
    backgroundColor: colors.brand[50],
    borderRadius: 16,
    padding: 12,
    gap: 12,
    width: "100%",
    alignItems: "center",
  },
  nearbyIconBg: {
    backgroundColor: colors.brand[500],
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  nearbyTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.brand[700],
  },
  nearbySub: {
    fontSize: 12,
    color: colors.brand[400],
  },
  cancelButton: {
    width: "100%",
    borderWidth: 2,
    borderColor: colors.gray[200],
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: "auto",
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.gray[600],
  },
  foundView: {
    flex: 1,
    alignItems: "center",
    gap: 20,
  },
  foundBadge: {
    backgroundColor: colors.green[50],
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  foundBadgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.green[600],
  },
  driverCard: {
    width: "100%",
    backgroundColor: colors.gray[50],
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.gray[100],
  },
  driverHeader: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 16,
  },
  avatarWrapper: {
    position: "relative",
  },
  verifiedDot: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.brand[500],
    borderWidth: 2,
    borderColor: colors.gray[50],
  },
  driverInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 2,
  },
  driverName: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.gray[800],
  },
  verifiedBadge: {
    backgroundColor: colors.brand[100],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  verifiedBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.brand[600],
  },
  driverUniversity: {
    fontSize: 12,
    color: colors.gray[500],
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.gray[700],
  },
  totalRidesText: {
    fontSize: 12,
    color: colors.gray[400],
  },
  etaContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  etaValue: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.brand[500],
  },
  etaUnit: {
    fontSize: 12,
    color: colors.gray[500],
    marginTop: -4,
  },
  carInfo: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: colors.gray[100],
  },
  carText: {
    fontSize: 14,
    color: colors.gray[700],
  },
  plateBadge: {
    backgroundColor: colors.gray[800],
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  plateText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
  },
  redirectText: {
    fontSize: 12,
    color: colors.gray[400],
    textAlign: "center",
  },
  confirmButton: {
    width: "100%",
    backgroundColor: colors.brand[500],
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: "auto",
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "700",
  },
});
