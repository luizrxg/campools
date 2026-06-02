import React from "react";
import {
  StyleSheet,
  View,
  Text,
<<<<<<< HEAD
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "@/components/ui/avatar";
import { MapSimulation } from "@/components/MapSimulation";
import { currentUser, popularLocations } from "@/data/mockData";
import type { AppScreen, UserMode } from "@/types";
import {
  IconClock,
  IconSearch,
  IconBell,
  IconCarFilled,
} from "@tabler/icons-react-native";
import { colors } from "@/theme";
=======
  HStack,
  VStack,
  Badge,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react"
import {Avatar} from "@/components/ui/avatar"
import {MapSimulation} from "@/components/MapSimulation"
import {currentUser, popularLocations} from "@/data/mockData"
import type {AppScreen, UserMode} from "@/types"
import {
  IconClock,
  IconSearch,
  IconCar,
  IconBell, IconCarFilled,
} from "@tabler/icons-react"
>>>>>>> origin/main

interface HomeScreenProps {
  onNavigate: (screen: AppScreen) => void;
  mode: UserMode;
  onModeToggle: () => void;
}

<<<<<<< HEAD
const quickDestinations = popularLocations.slice(0, 4);

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greetingText}>Bom dia,</Text>
            <Text style={styles.userNameText}>
              {currentUser.name.split(" ")[0]}
            </Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <IconBell size={20} color={colors.white} />
            </TouchableOpacity>
=======
const quickDestinations = popularLocations.slice(0, 4)

export function HomeScreen({onNavigate}: HomeScreenProps) {
  return (
    <Flex
      flexDir="column"
      h="full"
      overflow="hidden"
    >
      {/* Header */}
      <Box
        bg="brand.500"
        pt="10"
        pb="6"
        px="5"
      >
        <Flex
          justify="space-between"
          align="center"
          mb="4"
        >
          <Box>
            <Text
              color="brand.300"
              fontSize="sm"
              fontWeight="medium"
            >
              Bom dia,
            </Text>
            <Text
              color="white"
              fontSize="xl"
              fontWeight="bold"
              letterSpacing="tight"
            >
              {currentUser.name.split(" ")[0]}
            </Text>
          </Box>
          <HStack gap="3">
            <Box
              bg="brand.400"
              rounded="full"
              boxSize="36px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              _hover={{bg: "brand.300"}}
              transition="all 0.2s"
            >
              <Icon
                color="white"
                boxSize="5"
              >
                <IconBell/>
              </Icon>
            </Box>
>>>>>>> origin/main
            <Avatar
              size="sm"
              name={currentUser.name}
              src={currentUser.avatarUrl}
<<<<<<< HEAD
              bg={colors.brand[300]}
=======
              cursor="pointer"
              bg="brand.300"
              color="white"
              fontWeight="bold"
>>>>>>> origin/main
            />
          </View>
        </View>

        {/* Search bar */}
<<<<<<< HEAD
        <TouchableOpacity
          style={styles.searchBar}
          activeOpacity={0.9}
          onPress={() => onNavigate("request")}
        >
          <IconSearch size={20} color={colors.brand[500]} />
          <Text style={styles.searchPlaceholder}>Para onde você vai?</Text>
        </TouchableOpacity>
      </View>

      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        {/* Map */}
        <View style={styles.mapContainer}>
          <MapSimulation variant="idle" height={200} />

          {/* Available rides badge */}
          <View style={styles.ridesBadge}>
            <IconCarFilled size={16} color={colors.green[500]} />
            <Text style={styles.ridesBadgeText}>
              8 caronas disponíveis perto de você
=======
        <Box
          bg="white"
          rounded="xl"
          px="4"
          py="3"
          cursor="pointer"
          onClick={() => onNavigate("request")}
          transition="all 0.2s"
        >
          <HStack gap="3">
            <Icon
              color="brand.500"
              boxSize="5"
            >
              <IconSearch/>
            </Icon>
            <Text
              color="gray.400"
              fontSize="sm"
            >
              Para onde você vai?
>>>>>>> origin/main
            </Text>
          </View>
        </View>

<<<<<<< HEAD
        {/* Content */}
        <View style={styles.content}>
          {/* Quick destinations */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Destinos frequentes</Text>
            <View style={styles.destList}>
              {quickDestinations.map((loc) => (
                <TouchableOpacity
                  key={loc.id}
                  style={styles.destItem}
                  onPress={() => onNavigate("request")}
                >
                  <View style={styles.destInfo}>
                    <Text style={styles.destName} numberOfLines={1}>
                      {loc.name}
                    </Text>
                    <Text style={styles.destAddress} numberOfLines={1}>
                      {loc.address}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.badge,
                      {
                        backgroundColor:
                          loc.type === "university"
                            ? colors.brand[50]
                            : colors.gray[100],
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.badgeText,
                        {
                          color:
                            loc.type === "university"
                              ? colors.brand[500]
                              : colors.gray[600],
                        },
                      ]}
                    >
                      {loc.type === "university"
                        ? "Universidade"
                        : loc.type === "transport"
                        ? "Transporte"
                        : "Bairro"}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* CTA */}
          <TouchableOpacity
            style={styles.ctaCard}
            onPress={() => onNavigate("request")}
          >
            <View style={styles.ctaRow}>
              <View style={styles.ctaLeft}>
                <Text style={styles.ctaSub}>Economize até</Text>
                <Text style={styles.ctaMain}>60%</Text>
                <Text style={styles.ctaSub}>vs. transporte individual</Text>
              </View>
              <View style={styles.ctaRight}>
                <View style={styles.timeInfo}>
                  <IconClock size={16} color={colors.brand[300]} />
                  <Text style={styles.timeText}>~5 min</Text>
                </View>
                <Text style={styles.ctaSub}>para encontrar carona</Text>
                <View style={styles.ctaButton}>
                  <Text style={styles.ctaButtonText}>Solicitar agora</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
=======
      {/* Map */}
      <Box
        position="relative"
        flexShrink={0}
      >
        <MapSimulation
          variant="idle"
          height="200px"
        />

        {/* Available rides badge */}
        <HStack
          position="absolute"
          bottom="3"
          left="50%"
          transform="translateX(-50%)"
          bg="white"
          rounded="full"
          px="4"
          py="2"
          gap="2"
        >
          <Icon
            color="green.500"
            boxSize="4"
          >
            <IconCarFilled/>
          </Icon>
          <Text
            fontSize="xs"
            fontWeight="semibold"
            color="gray.700"
          >
            8 caronas disponíveis perto de você
          </Text>
        </HStack>
      </Box>

      {/* Content */}
      <Box
        flex="1"
        overflowY="auto"
        px="5"
        py="4"
        css={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {width: "0px", height: "0px"},
        }}
      >

        {/* Quick destinations */}
        <Box mb="5">
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="gray.800"
            mb="3"
          >
            Destinos frequentes
          </Text>
          <VStack
            gap="2"
            align="stretch"
          >
            {quickDestinations.map((loc) => (
              <Flex
                key={loc.id}
                align="center"
                gap="3"
                p="3"
                bg="gray.50"
                rounded="xl"
                cursor="pointer"
                onClick={() => onNavigate("request")}
                transition="all 0.2s"
              >
                <Box
                  flex="1"
                  minW="0"
                >
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    color="gray.800"
                    truncate
                  >
                    {loc.name}
                  </Text>
                  <Text
                    fontSize="xs"
                    color="gray.500"
                    truncate
                  >
                    {loc.address}
                  </Text>
                </Box>
                <Badge
                  colorPalette={
                    loc.type === "university"
                      ? "brand" as never
                      : loc.type === "transport"
                        ? "gray"
                        : "gray"
                  }
                  variant="subtle"
                  fontSize="2xs"
                >
                  {loc.type === "university"
                    ? "Universidade"
                    : loc.type === "transport"
                      ? "Transporte"
                      : "Bairro"}
                </Badge>
              </Flex>
            ))}
          </VStack>
        </Box>

        {/* CTA */}
        <Box
          bg="brand.500"
          rounded="2xl"
          p="4"
          cursor="pointer"
          onClick={() => onNavigate("request")}
          _hover={{bg: "brand.600"}}
          transition="all 0.2s"
        >
          <SimpleGrid
            columns={2}
            gap="3"
          >
            <Box>
              <Text
                color="brand.200"
                fontSize="xs"
                mb="1"
              >
                Economize até
              </Text>
              <Text
                color="white"
                fontSize="2xl"
                fontWeight="bold"
              >
                60%
              </Text>
              <Text
                color="brand.200"
                fontSize="xs"
              >
                vs. transporte individual
              </Text>
            </Box>
            <VStack
              align="end"
              justify="center"
              gap="1"
            >
              <HStack gap="1">
                <Icon
                  color="brand.300"
                  boxSize="4"
                >
                  <IconClock/>
                </Icon>
                <Text
                  color="white"
                  fontSize="sm"
                  fontWeight="medium"
                >
                  ~5 min
                </Text>
              </HStack>
              <Text
                color="brand.200"
                fontSize="xs"
              >
                para encontrar carona
              </Text>
              <Box
                bg="white"
                rounded="lg"
                px="3"
                py="1.5"
                mt="1"
              >
                <Text
                  color="brand.500"
                  fontSize="xs"
                  fontWeight="bold"
                >
                  Solicitar agora
                </Text>
              </Box>
            </VStack>
          </SimpleGrid>
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
  header: {
    backgroundColor: colors.brand[500],
    paddingTop: 40,
    paddingBottom: 24,
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
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconButton: {
    backgroundColor: colors.brand[400],
    borderRadius: 18,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  searchPlaceholder: {
    color: colors.gray[400],
    fontSize: 14,
  },
  mapContainer: {
    position: "relative",
  },
  ridesBadge: {
    position: "absolute",
    bottom: 12,
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  ridesBadgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.gray[700],
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.gray[800],
    marginBottom: 12,
  },
  destList: {
    gap: 8,
  },
  destItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    backgroundColor: colors.gray[50],
    borderRadius: 12,
  },
  destInfo: {
    flex: 1,
  },
  destName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.gray[800],
  },
  destAddress: {
    fontSize: 12,
    color: colors.gray[500],
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "600",
  },
  ctaCard: {
    backgroundColor: colors.brand[500],
    borderRadius: 16,
    padding: 16,
  },
  ctaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ctaLeft: {
    flex: 1,
  },
  ctaRight: {
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 4,
  },
  ctaMain: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "800",
  },
  ctaSub: {
    color: colors.brand[200],
    fontSize: 11,
  },
  timeInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  timeText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "500",
  },
  ctaButton: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 4,
  },
  ctaButtonText: {
    color: colors.brand[500],
    fontSize: 12,
    fontWeight: "700",
  },
});
