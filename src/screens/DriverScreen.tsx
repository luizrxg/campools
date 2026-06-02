import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Avatar } from "@/components/ui/avatar";
import { MapSimulation } from "@/components/MapSimulation";
import {
<<<<<<< HEAD
  currentDriverUser,
  driverPendingRequests,
  driverActivePassengers,
} from "@/data/mockData";
import type { AppScreen } from "@/types";
import {
=======
>>>>>>> origin/main
  IconMapPin,
  IconUsers,
  IconCheck,
  IconX,
  IconStar,
  IconWallet,
  IconNavigation,
<<<<<<< HEAD
} from "@tabler/icons-react-native";
import { colors } from "@/theme";
=======
} from "@tabler/icons-react"
>>>>>>> origin/main

interface DriverScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

export function DriverScreen({ onNavigate }: DriverScreenProps) {
  const [online, setOnline] = useState(false);
  const [requests, setRequests] = useState(driverPendingRequests);
  const [activePassengers, setActivePassengers] = useState<
    typeof driverActivePassengers
  >([]);
  const [phase, setPhase] = useState<"idle" | "trip">("idle");
  const [earnings] = useState({ today: 32.5, week: 142.0, rides: 6 });

  const handleAccept = (id: string) => {
    const req = requests.find((r) => r.id === id);
    if (req) {
      setActivePassengers([req.passenger, ...activePassengers.slice(0, 2)]);
      setRequests((r) => r.filter((x) => x.id !== id));
      if (activePassengers.length === 0) setPhase("trip");
    }
  };

  const handleReject = (id: string) => {
    setRequests((r) => r.filter((x) => x.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
<<<<<<< HEAD
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greetingText}>Bom dia,</Text>
            <Text style={styles.userNameText}>
              {currentDriverUser.name.split(" ")[0]}
            </Text>
          </View>
          <Avatar
            size="sm"
            name={currentDriverUser.name}
            src={currentDriverUser.avatarUrl}
            bg={colors.brand[400]}
          />
        </View>

        {/* Online toggle */}
        <View
          style={[
            styles.toggleCard,
            { backgroundColor: online ? "#064e3b" : colors.brand[600] },
          ]}
=======
      <Box bg="brand.500" pt="10" pb="5" px="5">
        <Flex justify="space-between" align="center" mb="4">
          <Box>
            <Text color="brand.300" fontSize="sm" fontWeight="medium">
              Bom dia,
            </Text>
            <Text color="white" fontSize="xl" fontWeight="bold" letterSpacing="tight">
              {currentDriverUser.name.split(" ")[0]}
            </Text>
          </Box>
          <HStack gap="3">
            <Avatar
              size="sm"
              name={currentDriverUser.name}
              src={currentDriverUser.avatarUrl}
              bg="brand.400"
              color="white"
              fontWeight="bold"
            />
          </HStack>
        </Flex>

        {/* Online toggle */}
        <Flex
          bg={online ? "green.900" : "brand.600"}
          rounded="xl"
          p="3"
          align="center"
          gap="3"
          transition="all 0.3s"
>>>>>>> origin/main
        >
          <View
            style={[
              styles.statusDot,
              { backgroundColor: online ? colors.green[400] : colors.gray[500] },
            ]}
          />
          <View style={styles.toggleTextContainer}>
            <Text style={styles.toggleTitle}>
              {online ? "Você está online" : "Você está offline"}
            </Text>
            <Text
              style={[
                styles.toggleSub,
                { color: online ? colors.green[300] : colors.brand[300] },
              ]}
            >
              {online
                ? "Recebendo solicitações de carona"
                : "Ative para receber corridas"}
            </Text>
          </View>
          <Switch
            value={online}
            onValueChange={setOnline}
            trackColor={{ false: colors.gray[400], true: colors.green[500] }}
            thumbColor={colors.white}
          />
        </View>
      </View>

      {/* Map */}
      <View style={styles.mapContainer}>
        <MapSimulation
          variant={phase === "trip" ? "in-progress" : online ? "finding" : "idle"}
          height={180}
        />
      </View>

<<<<<<< HEAD
      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Earnings today */}
        <View style={styles.earningsRow}>
          <View style={[styles.earningCard, { backgroundColor: colors.brand[50] }]}>
            <Text style={styles.earningLabel}>Hoje</Text>
            <Text style={[styles.earningValue, { color: colors.brand[600] }]}>
              R$ {earnings.today.toFixed(2).replace(".", ",")}
            </Text>
          </View>
          <View style={styles.earningCard}>
            <Text style={styles.earningLabel}>Semana</Text>
            <Text style={styles.earningValue}>
              R$ {earnings.week.toFixed(2).replace(".", ",")}
            </Text>
          </View>
          <View style={[styles.earningCard, { flex: 0.8 }]}>
            <Text style={styles.earningLabel}>Corridas</Text>
            <View style={styles.ridesInfo}>
              <IconWallet size={16} color={colors.brand[400]} />
              <Text style={styles.earningValue}>{earnings.rides}</Text>
            </View>
          </View>
        </View>

        {/* Active trip passengers */}
        {phase === "trip" && activePassengers.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <IconUsers size={16} color={colors.brand[400]} />
              <Text style={styles.sectionTitle}>
=======
      {/* Content */}
      <Box
        flex="1"
        overflowY="auto"
        px="5"
        py="4"
        css={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": { width: "0px", height: "0px" },
        }}
      >
        {/* Earnings today */}
        <HStack gap="3" mb="5">
          <Box
            flex="1"
            bg="brand.50"
            rounded="xl"
            p="3"
          >
            <Text fontSize="xs" color="gray.500" mb="0.5">Hoje</Text>
            <Text fontSize="lg" fontWeight="bold" color="brand.600">
              R$ {earnings.today.toFixed(2).replace(".", ",")}
            </Text>
          </Box>
          <Box
            flex="1"
            bg="gray.50"
            rounded="xl"
            p="3"
          >
            <Text fontSize="xs" color="gray.500" mb="0.5">Semana</Text>
            <Text fontSize="lg" fontWeight="bold" color="gray.700">
              R$ {earnings.week.toFixed(2).replace(".", ",")}
            </Text>
          </Box>
          <Box
            bg="gray.50"
            rounded="xl"
            p="3"
          >
            <Text fontSize="xs" color="gray.500" mb="0.5">Corridas</Text>
            <HStack gap="1" align="center">
              <Icon color="brand.400" boxSize="4">
                <IconWallet />
              </Icon>
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                {earnings.rides}
              </Text>
            </HStack>
          </Box>
        </HStack>

        {/* Active trip passengers */}
        {phase === "trip" && activePassengers.length > 0 && (
          <Box mb="5">
            <HStack gap="2" mb="3">
              <Icon color="brand.400" boxSize="4">
                <IconUsers />
              </Icon>
              <Text fontSize="xs" fontWeight="bold" color="gray.500" textTransform="uppercase" letterSpacing="wide">
>>>>>>> origin/main
                No carro ({activePassengers.length})
              </Text>
            </View>
            <View style={styles.passengerList}>
              {activePassengers.map((p) => (
<<<<<<< HEAD
                <View key={p.id} style={styles.activePassengerItem}>
=======
                <Flex
                  key={p.id}
                  align="center"
                  gap="3"
                  bg="brand.50"
                  rounded="xl"
                  p="3"
                >
>>>>>>> origin/main
                  <Avatar
                    size="sm"
                    name={p.name}
                    src={p.avatarUrl}
                    bg={colors.brand[500]}
                  />
<<<<<<< HEAD
                  <View style={styles.passengerInfo}>
                    <Text style={styles.passengerName}>{p.name}</Text>
                    <View style={styles.passengerDestRow}>
                      <IconMapPin size={12} color={colors.gray[400]} />
                      <Text style={styles.passengerDest} numberOfLines={1}>
                        {p.destination}
                      </Text>
                    </View>
                  </View>
                  <IconNavigation size={16} color={colors.brand[400]} />
                </View>
=======
                  <Box flex="1">
                    <Text fontSize="sm" fontWeight="semibold" color="gray.800">
                      {p.name}
                    </Text>
                    <HStack gap="1">
                      <Icon color="gray.400" boxSize="3">
                        <IconMapPin />
                      </Icon>
                      <Text fontSize="xs" color="gray.500" truncate>
                        {p.destination}
                      </Text>
                    </HStack>
                  </Box>
                  <Icon color="brand.400" boxSize="4">
                    <IconNavigation />
                  </Icon>
                </Flex>
>>>>>>> origin/main
              ))}
            </View>
          </View>
        )}

        {/* Pending requests */}
        {online && requests.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.pendingDot} />
              <Text style={styles.sectionTitle}>Novas solicitações</Text>
            </View>

            <View style={styles.requestsList}>
              {requests.map((req) => (
<<<<<<< HEAD
                <View key={req.id} style={styles.requestCard}>
                  <View style={styles.requestHeader}>
=======
                <Box
                  key={req.id}
                  bg="white"
                  border="1px solid"
                  borderColor="gray.200"
                  rounded="2xl"
                  p="4"
                >
                  <Flex align="center" gap="3" mb="3">
>>>>>>> origin/main
                    <Avatar
                      size="md"
                      name={req.passenger.name}
                      src={req.passenger.avatarUrl}
                      bg={colors.brand[200]}
                    />
<<<<<<< HEAD
                    <View style={styles.requestUserInfo}>
                      <Text style={styles.requestUserName}>{req.passenger.name}</Text>
                      <View style={styles.requestRatingRow}>
                        <IconStar size={12} color="#facc15" />
                        <Text style={styles.requestRatingText}>
=======
                    <Box flex="1">
                      <Text fontWeight="semibold" color="gray.800" fontSize="sm">
                        {req.passenger.name}
                      </Text>
                      <HStack gap="1">
                        <Icon color="yellow.400" boxSize="3">
                          <IconStar />
                        </Icon>
                        <Text fontSize="xs" color="gray.500">
>>>>>>> origin/main
                          4.8 · {req.distance}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.priceBadge}>
                      <Text style={styles.priceBadgeText}>
                        R$ {req.price.toFixed(2).replace(".", ",")}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.requestRoute}>
                    <View style={styles.routeRow}>
                      <View style={[styles.routeDot, { backgroundColor: colors.green[500] }]} />
                      <Text style={styles.routeText} numberOfLines={1}>
                        {req.pickup.name}
                      </Text>
                    </View>
                    <View style={styles.routeRow}>
                      <View style={[styles.routeDot, { backgroundColor: colors.brand[500], borderRadius: 2 }]} />
                      <Text style={styles.routeText} numberOfLines={1}>
                        {req.destination.name}
                      </Text>
                    </View>
                  </View>

<<<<<<< HEAD
                  <View style={styles.requestActions}>
                    <TouchableOpacity
                      style={styles.rejectButton}
                      onPress={() => handleReject(req.id)}
                    >
                      <IconX size={16} color={colors.red[500]} />
                      <Text style={styles.rejectButtonText}>Recusar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.acceptButton}
                      onPress={() => handleAccept(req.id)}
                    >
                      <IconCheck size={16} color={colors.white} />
                      <Text style={styles.acceptButtonText}>Aceitar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
=======
                  <HStack gap="2">
                    <Box
                      flex="1"
                      bg="red.50"
                      rounded="xl"
                      py="2.5"
                      textAlign="center"
                      cursor="pointer"
                      onClick={() => handleReject(req.id)}
                      _hover={{ bg: "red.100" }}
                      transition="all 0.15s"
                    >
                      <HStack justify="center" gap="1.5">
                        <Icon color="red.500" boxSize="4">
                          <IconX />
                        </Icon>
                        <Text fontSize="sm" fontWeight="semibold" color="red.500">
                          Recusar
                        </Text>
                      </HStack>
                    </Box>
                    <Box
                      flex="1"
                      bg="brand.500"
                      rounded="xl"
                      py="2.5"
                      textAlign="center"
                      cursor="pointer"
                      onClick={() => handleAccept(req.id)}
                      _hover={{ bg: "brand.600" }}
                      transition="all 0.15s"
                    >
                      <HStack justify="center" gap="1.5">
                        <Icon color="white" boxSize="4">
                          <IconCheck />
                        </Icon>
                        <Text fontSize="sm" fontWeight="semibold" color="white">
                          Aceitar
                        </Text>
                      </HStack>
                    </Box>
                  </HStack>
                </Box>
>>>>>>> origin/main
              ))}
            </View>
          </View>
        )}

        {/* Empty state when offline */}
        {!online && (
<<<<<<< HEAD
          <View style={styles.emptyState}>
            <View style={styles.emptyIconContainer}>
              <IconNavigation size={32} color={colors.gray[400]} />
            </View>
            <View style={styles.emptyTextContainer}>
              <Text style={styles.emptyTitle}>Você está offline</Text>
              <Text style={styles.emptySub}>
=======
          <VStack gap="3" py="8" align="center">
            <Box bg="gray.100" rounded="full" p="5">
              <Icon color="gray.400" boxSize="8">
                <IconNavigation />
              </Icon>
            </Box>
            <VStack gap="1" textAlign="center">
              <Text fontWeight="semibold" color="gray.600">
                Você está offline
              </Text>
              <Text fontSize="sm" color="gray.400">
>>>>>>> origin/main
                Ative o modo online para receber solicitações de carona
              </Text>
            </View>
          </View>
        )}

        {/* Empty state - no requests */}
        {online && requests.length === 0 && phase === "idle" && (
<<<<<<< HEAD
          <View style={styles.emptyState}>
            <View style={[styles.emptyIconContainer, { backgroundColor: colors.brand[50] }]}>
              <IconUsers size={32} color={colors.brand[400]} />
            </View>
            <View style={styles.emptyTextContainer}>
              <Text style={styles.emptyTitle}>Aguardando solicitações</Text>
              <Text style={styles.emptySub}>
=======
          <VStack gap="3" py="6" align="center">
            <Box bg="brand.50" rounded="full" p="5">
              <Icon color="brand.400" boxSize="8">
                <IconUsers />
              </Icon>
            </Box>
            <VStack gap="1" textAlign="center">
              <Text fontWeight="semibold" color="gray.700">
                Aguardando solicitações
              </Text>
              <Text fontSize="sm" color="gray.400">
>>>>>>> origin/main
                Você receberá notificações quando houver passageiros próximos
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.brand[500],
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  greetingText: {
    color: colors.brand[300],
    fontSize: 14,
    fontWeight: "500",
  },
  userNameText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
  },
  toggleCard: {
    borderRadius: 16,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  toggleTextContainer: {
    flex: 1,
  },
  toggleTitle: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 14,
  },
  toggleSub: {
    fontSize: 12,
  },
  mapContainer: {
    position: "relative",
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  earningsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  earningCard: {
    flex: 1,
    backgroundColor: colors.gray[50],
    borderRadius: 12,
    padding: 12,
  },
  earningLabel: {
    fontSize: 10,
    color: colors.gray[500],
    marginBottom: 2,
  },
  earningValue: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.gray[700],
  },
  ridesInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  section: {
    marginBottom: 20,
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
  activePassengerItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.brand[50],
    borderRadius: 16,
    padding: 12,
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
    color: colors.gray[500],
  },
  pendingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#f97316", // orange
  },
  requestsList: {
    gap: 12,
  },
  requestCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 20,
    padding: 16,
  },
  requestHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  requestUserInfo: {
    flex: 1,
  },
  requestUserName: {
    fontWeight: "600",
    color: colors.gray[800],
    fontSize: 14,
  },
  requestRatingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  requestRatingText: {
    fontSize: 12,
    color: colors.gray[500],
  },
  priceBadge: {
    backgroundColor: colors.green[500],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  priceBadgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "700",
  },
  requestRoute: {
    gap: 8,
    marginBottom: 16,
  },
  routeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  routeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  routeText: {
    fontSize: 12,
    color: colors.gray[700],
    flex: 1,
  },
  requestActions: {
    flexDirection: "row",
    gap: 8,
  },
  rejectButton: {
    flex: 1,
    backgroundColor: colors.red[50],
    borderRadius: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  rejectButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.red[500],
  },
  acceptButton: {
    flex: 1,
    backgroundColor: colors.brand[500],
    borderRadius: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  acceptButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.white,
  },
  emptyState: {
    paddingVertical: 32,
    alignItems: "center",
    gap: 12,
  },
  emptyIconContainer: {
    backgroundColor: colors.gray[100],
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTextContainer: {
    alignItems: "center",
    gap: 4,
  },
  emptyTitle: {
    fontWeight: "600",
    color: colors.gray[600],
    fontSize: 14,
  },
  emptySub: {
    fontSize: 13,
    color: colors.gray[400],
    textAlign: "center",
  },
});
