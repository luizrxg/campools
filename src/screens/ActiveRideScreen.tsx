import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Avatar } from "@/components/ui/avatar";
import { MapSimulation } from "@/components/MapSimulation";
import { mockActiveRide } from "@/data/mockData";
import type { AppScreen } from "@/types";
import {
  IconStar,
  IconMessageCircle,
  IconMapPin,
  IconUsers,
  IconCar,
  IconCircleCheck,
  IconClock,
<<<<<<< HEAD
} from "@tabler/icons-react-native";
import { colors } from "@/theme";
=======
} from "@tabler/icons-react"
>>>>>>> origin/main

interface ActiveRideScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

export function ActiveRideScreen({ onNavigate }: ActiveRideScreenProps) {
  const ride = mockActiveRide;
  const { driver, coPassengers } = ride;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 0.4,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    
    animation.start();
    
    return () => animation.stop();
  }, []);

  return (
    <View style={styles.container}>
      {/* Map - takes upper portion */}
      <View style={styles.mapContainer}>
        <MapSimulation variant="driver-coming" height={240} />

        {/* Status pill */}
<<<<<<< HEAD
        <View style={styles.statusPill}>
          <Animated.View
            style={[styles.pulseDot, { opacity: pulseAnim }]}
          />
          <Text style={styles.statusText}>Motorista a caminho</Text>
          <IconClock size={16} color={colors.white} />
          <Text style={styles.statusText}>{driver.eta} min</Text>
        </View>
      </View>

      {/* Bottom sheet */}
      <View style={styles.bottomSheet}>
=======
        <HStack
          position="absolute"
          top="4"
          left="50%"
          transform="translateX(-50%)"
          bg="brand.500"
          rounded="full"
          px="4"
          py="2"
          gap="2"
        >
          <Box
            w="6px"
            h="6px"
            rounded="full"
            bg="green.400"
            css={{ animation: "pulse 1.5s infinite" }}
          />
          <Text color="white" fontSize="xs" fontWeight="bold">
            Motorista a caminho
          </Text>
          <Icon color="white" boxSize="4">
            <IconClock />
          </Icon>
          <Text color="white" fontSize="xs" fontWeight="bold">
            {driver.eta} min
          </Text>
        </HStack>
      </Box>

      {/* Bottom sheet */}
      <Box
        flex="1"
        overflowY="auto"
        bg="white"
        borderTopRadius="2xl"
        mt="-4"
        position="relative"
        zIndex="1"
        css={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": { width: "0px", height: "0px" },
        }}
      >
>>>>>>> origin/main
        {/* Handle */}
        <View style={styles.handleContainer}>
          <View style={styles.handle} />
        </View>

<<<<<<< HEAD
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.sheetContent}>
            {/* Driver info */}
            <View style={styles.driverRow}>
              <View style={styles.avatarWrapper}>
                <Avatar
                  size="lg"
                  name={driver.name}
                  src={driver.avatarUrl}
                  bg={colors.brand[500]}
=======
        <Box px="5" pb="6">
          {/* Driver info */}
          <HStack gap="3" py="3" mb="3">
            <Box position="relative">
              <Avatar
                size="lg"
                name={driver.name}
                bg="brand.500"
                color="white"
                fontWeight="bold"
              />
              {driver.verified && (
                <Box
                  position="absolute"
                  bottom="-1"
                  right="-1"
                  bg="brand.500"
                  rounded="full"
                  p="0.5"
                />
              )}
            </Box>

            <Box flex="1">
              <HStack gap="2" mb="0.5">
                <Text fontWeight="bold" color="gray.800" fontSize="md">
                  {driver.name}
                </Text>
                <Badge colorPalette="brand" variant="subtle" size="sm">
                  {driver.university}
                </Badge>
              </HStack>
              <HStack gap="1.5">
                <Icon color="yellow.400" boxSize="3.5">
                  <IconStar />
                </Icon>
                <Text fontSize="xs" fontWeight="bold" color="gray.700">
                  {driver.rating}
                </Text>
                <Text fontSize="xs" color="gray.400">
                  · {driver.car} {driver.color}
                </Text>
              </HStack>
            </Box>

            {/* Actions */}
            <HStack gap="2">
              <Box
                bg="gray.100"
                rounded="xl"
                boxSize="36px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                _hover={{ bg: "gray.200" }}
                transition="all 0.2s"
              >
                <Icon color="gray.700" boxSize="5">
                  <IconMessageCircle />
                </Icon>
              </Box>
            </HStack>
          </HStack>

          {/* Plate */}
          <HStack
            bg="gray.800"
            rounded="lg"
            px="3"
            py="2"
            gap="3"
            w="fit-content"
            mb="4"
          >
            <Icon color="gray.400" boxSize="4">
              <IconCar />
            </Icon>
            <Text color="white" fontWeight="bold" letterSpacing="wider" fontSize="sm">
              {driver.plate}
            </Text>
          </HStack>

          {/* Route */}
          <Box
            bg="gray.50"
            rounded="xl"
            p="3"
            mb="4"
            border="1px solid"
            borderColor="gray.100"
          >
            <VStack gap="2" align="stretch">
              <HStack gap="3">
                <Box
                  w="8px"
                  h="8px"
                  rounded="full"
                  bg="green.500"
                  flexShrink={0}
>>>>>>> origin/main
                />
                {driver.verified && (
                  <View style={styles.verifiedDot} />
                )}
              </View>

              <View style={styles.driverInfo}>
                <View style={styles.driverNameRow}>
                  <Text style={styles.driverName}>{driver.name}</Text>
                  <View style={styles.univBadge}>
                    <Text style={styles.univBadgeText}>{driver.university}</Text>
                  </View>
                </View>
                <View style={styles.ratingRow}>
                  <IconStar size={14} color="#facc15" />
                  <Text style={styles.ratingText}>{driver.rating}</Text>
                  <Text style={styles.carText}>
                    · {driver.car} {driver.color}
                  </Text>
                </View>
              </View>

              {/* Actions */}
              <TouchableOpacity style={styles.actionButton}>
                <IconMessageCircle size={20} color={colors.gray[700]} />
              </TouchableOpacity>
            </View>

            {/* Plate */}
            <View style={styles.plateBadge}>
              <IconCar size={16} color={colors.gray[400]} />
              <Text style={styles.plateText}>{driver.plate}</Text>
            </View>

            {/* Route */}
            <View style={styles.routeCard}>
              <View style={styles.routeItem}>
                <View style={[styles.routeDot, { backgroundColor: colors.green[500] }]} />
                <View style={styles.routeInfo}>
                  <Text style={styles.routeLabel}>Embarque</Text>
                  <Text style={styles.routeName} numberOfLines={1}>
                    {ride.pickup.name}
                  </Text>
                </View>
              </View>
              <View style={styles.routeConnector} />
              <View style={styles.routeItem}>
                <View style={[styles.routeDot, { backgroundColor: colors.brand[500], borderRadius: 2 }]} />
                <View style={styles.routeInfo}>
                  <Text style={styles.routeLabel}>Destino</Text>
                  <Text style={styles.routeName} numberOfLines={1}>
                    {ride.destination.name}
                  </Text>
                </View>
              </View>
            </View>

<<<<<<< HEAD
            {/* Co-passengers */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <IconUsers size={16} color={colors.gray[400]} />
                <Text style={styles.sectionTitle}>
                  Co-passageiros ({coPassengers.length})
                </Text>
              </View>

              <View style={styles.passengerList}>
                {coPassengers.map((p) => (
                  <View key={p.id} style={styles.passengerItem}>
                    <Avatar
                      size="sm"
                      name={p.name}
                      src={p.avatarUrl}
                      bg={p.status === "in-car" ? colors.brand[400] : colors.gray[300]}
                    />
                    <View style={styles.passengerInfo}>
                      <Text style={styles.passengerName}>{p.name}</Text>
                      <View style={styles.passengerDestRow}>
                        <IconMapPin size={12} color={colors.gray[400]} />
                        <Text style={styles.passengerDest} numberOfLines={1}>
                          {p.destination}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.statusBadge,
                        {
                          backgroundColor:
                            p.status === "in-car" ? colors.green[50] : colors.gray[100],
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.statusBadgeText,
                          {
                            color:
                              p.status === "in-car"
                                ? colors.green[600]
                                : colors.gray[500],
                          },
                        ]}
                      >
                        {p.status === "in-car" ? "No carro" : "Aguardando"}
                      </Text>
                    </View>
                  </View>
=======
          {/* Co-passengers */}
          <Box mb="4">
            <HStack gap="2" mb="3">
              <Icon color="gray.400" boxSize="4">
                <IconUsers />
              </Icon>
              <Text fontSize="xs" fontWeight="bold" color="gray.500" textTransform="uppercase" letterSpacing="wide">
                Co-passageiros ({coPassengers.length})
              </Text>
            </HStack>

            <VStack gap="2" align="stretch">
              {coPassengers.map((p) => (
                <Flex
                  key={p.id}
                  align="center"
                  gap="3"
                  bg="gray.50"
                  rounded="xl"
                  p="3"
                  border="1px solid"
                  borderColor="gray.100"
                >
                  <Avatar
                    size="sm"
                    name={p.name}
                    bg={p.status === "in-car" ? "brand.400" : "gray.300"}
                    color="white"
                    fontWeight="bold"
                  />
                  <Box flex="1" minW="0">
                    <Text fontSize="sm" fontWeight="semibold" color="gray.800">
                      {p.name}
                    </Text>
                    <HStack gap="1">
                      <Icon color="gray.400" boxSize="3">
                        <IconMapPin />
                      </Icon>
                      <Text fontSize="xs" color="gray.400" truncate>
                        {p.destination}
                      </Text>
                    </HStack>
                  </Box>
                  <Badge
                    colorPalette={p.status === "in-car" ? "green" : "gray"}
                    variant="subtle"
                    size="sm"
                  >
                    {p.status === "in-car" ? "No carro" : "Aguardando"}
                  </Badge>
                </Flex>
              ))}
            </VStack>
          </Box>

          {/* Price & seats */}
          <HStack
            gap="3"
            bg="brand.50"
            rounded="xl"
            p="3"
            mb="4"
          >
            <VStack gap="0" align="start" flex="1">
              <Text fontSize="xs" color="gray.500">Sua parte</Text>
              <Text fontSize="xl" fontWeight="bold" color="brand.600">
                R$ {ride.price.toFixed(2).replace(".", ",")}
              </Text>
            </VStack>
            <Box w="1px" h="8" bg="gray.200" />
            <VStack gap="0" align="start" flex="1">
              <Text fontSize="xs" color="gray.500">Vagas</Text>
              <HStack gap="1">
                {Array.from({ length: ride.seats.total }).map((_, i) => (
                  <Box
                    key={i}
                    w="4"
                    h="4"
                    rounded="sm"
                    bg={i < ride.seats.taken ? "brand.500" : "brand.100"}
                    transition="bg 0.2s"
                  />
>>>>>>> origin/main
                ))}
              </View>
            </View>

<<<<<<< HEAD
            {/* Price & seats */}
            <View style={styles.summaryCard}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Sua parte</Text>
                <Text style={styles.priceText}>
                  R$ {ride.price.toFixed(2).replace(".", ",")}
                </Text>
              </View>
              <View style={styles.verticalSeparator} />
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Vagas</Text>
                <View style={styles.seatsRow}>
                  {Array.from({ length: ride.seats.total }).map((_, i) => (
                    <View
                      key={i}
                      style={[
                        styles.seatBox,
                        {
                          backgroundColor:
                            i < ride.seats.taken ? colors.brand[500] : colors.brand[100],
                        },
                      ]}
                    />
                  ))}
                </View>
              </View>
            </View>

            {/* Complete ride button */}
            <TouchableOpacity
              style={styles.completeButton}
              onPress={() => onNavigate("home")}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.completeButtonText}>Concluir corrida</Text>
                <IconCircleCheck size={20} color={colors.white} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
=======
          {/* Complete ride button (prototype) */}
          <Box
            bg="brand.500"
            rounded="xl"
            py="4"
            textAlign="center"
            cursor="pointer"
            onClick={() => onNavigate("home")}
            _hover={{ bg: "brand.600" }}
            transition="all 0.2s"
          >
            <HStack justify="center" gap="2">
              <Text color="white" fontWeight="bold" fontSize="sm">
                Concluir corrida
              </Text>
              <Icon color="white" boxSize="5">
                <IconCircleCheck />
              </Icon>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
>>>>>>> origin/main
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mapContainer: {
    position: "relative",
  },
  statusPill: {
    position: "absolute",
    top: 16,
    alignSelf: "center",
    backgroundColor: colors.brand[500],
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.green[400],
  },
  statusText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "700",
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    zIndex: 1,
  },
  handleContainer: {
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 4,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: colors.gray[200],
    borderRadius: 2,
  },
  sheetContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  driverRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 12,
    marginBottom: 12,
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
    borderColor: colors.white,
  },
  driverInfo: {
    flex: 1,
  },
  driverNameRow: {
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
  univBadge: {
    backgroundColor: colors.brand[50],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  univBadgeText: {
    fontSize: 10,
    color: colors.brand[500],
    fontWeight: "600",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.gray[700],
  },
  carText: {
    fontSize: 12,
    color: colors.gray[400],
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: colors.gray[100],
    alignItems: "center",
    justifyContent: "center",
  },
  plateBadge: {
    backgroundColor: colors.gray[800],
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  plateText: {
    color: colors.white,
    fontWeight: "700",
    letterSpacing: 1.5,
    fontSize: 14,
  },
  routeCard: {
    backgroundColor: colors.gray[50],
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.gray[100],
    marginBottom: 16,
  },
  routeItem: {
    flexDirection: "row",
    gap: 12,
  },
  routeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
  },
  routeInfo: {
    flex: 1,
  },
  routeLabel: {
    fontSize: 10,
    color: colors.gray[500],
  },
  routeName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.gray[800],
  },
  routeConnector: {
    width: 2,
    height: 12,
    backgroundColor: colors.gray[300],
    marginLeft: 3,
    marginVertical: 2,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.gray[500],
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  passengerList: {
    gap: 8,
  },
  passengerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: colors.gray[50],
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray[100],
    gap: 12,
  },
  passengerInfo: {
    flex: 1,
  },
  passengerName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.gray[800],
  },
  passengerDestRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  passengerDest: {
    fontSize: 12,
    color: colors.gray[400],
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusBadgeText: {
    fontSize: 10,
    fontWeight: "700",
  },
  summaryCard: {
    flexDirection: "row",
    backgroundColor: colors.brand[50],
    borderRadius: 16,
    padding: 12,
    gap: 12,
    marginBottom: 16,
  },
  summaryItem: {
    flex: 1,
  },
  summaryLabel: {
    fontSize: 10,
    color: colors.gray[500],
    marginBottom: 2,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.brand[600],
  },
  verticalSeparator: {
    width: 1,
    height: "100%",
    backgroundColor: colors.gray[200],
  },
  seatsRow: {
    flexDirection: "row",
    gap: 4,
    marginTop: 4,
  },
  seatBox: {
    width: 16,
    height: 16,
    borderRadius: 4,
  },
  completeButton: {
    backgroundColor: colors.brand[500],
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  completeButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "700",
  },
});
