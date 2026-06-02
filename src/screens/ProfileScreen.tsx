<<<<<<< HEAD
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "@/components/ui/avatar";
import { currentDriverUser, currentUser, rideHistory } from "@/data/mockData";
import type { AppScreen, UserMode } from "@/types";
import {
=======
import {Badge, Box, Flex, HStack, Icon, Separator, Text, VStack,} from "@chakra-ui/react"
import {Avatar} from "@/components/ui/avatar"
import {currentDriverUser, currentUser, rideHistory} from "@/data/mockData"
import type {AppScreen, UserMode} from "@/types"
import {
>>>>>>> origin/main
  IconBell,
  IconCarFilled,
  IconChevronRight,
  IconLock,
  IconLogout,
  IconMapPin,
  IconSettings,
  IconStar,
  IconStarFilled,
  IconUsers,
  IconWallet,
<<<<<<< HEAD
} from "@tabler/icons-react-native";
import { colors } from "@/theme";

interface ProfileScreenProps {
  onNavigate: (screen: AppScreen) => void;
  mode: UserMode;
}

const menuItems = [
  { icon: IconBell, label: "Notificações", badge: "3" },
  { icon: IconWallet, label: "Pagamentos e saldo" },
  { icon: IconLock, label: "Privacidade e segurança" },
  { icon: IconSettings, label: "Configurações" },
];

export function ProfileScreen({ onNavigate, mode }: ProfileScreenProps) {
  const user = mode === "driver" ? currentDriverUser : currentUser;
  const isDriver = mode === "driver";

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitleRow}>
          <Text style={styles.headerTitle}>Perfil</Text>
        </View>
        <View style={styles.userRow}>
          <View style={styles.avatarWrapper}>
=======
} from "@tabler/icons-react"

interface ProfileScreenProps {
  onNavigate: (screen: AppScreen) => void
  mode: UserMode
}

const menuItems = [
  {icon: IconBell, label: "Notificações", badge: "3"},
  {icon: IconWallet, label: "Pagamentos e saldo"},
  {icon: IconLock, label: "Privacidade e segurança"},
  {icon: IconSettings, label: "Configurações"},
]

export function ProfileScreen({onNavigate, mode}: ProfileScreenProps) {
  const user = mode === "driver" ? currentDriverUser : currentUser
  const isDriver = mode === "driver"

  return (
    <Flex
      flexDir="column"
      h="full"
      bg="gray.50"
    >
      {/* Header */}
      <Box
        bg="brand.500"
        pt="10"
        pb="16"
        px="5"
      >
        <HStack
          w="full"
          justify="space-between"
          align="center"
          mb="4"
        >
          <Text
            color="white"
            fontSize="lg"
            fontWeight="bold"
          >
            Perfil
          </Text>
        </HStack>
        <HStack gap="4">
          <Box position="relative">
>>>>>>> origin/main
            <Avatar
              size="xl"
              name={user.name}
              src={user.avatarUrl}
<<<<<<< HEAD
              bg={colors.brand[300]}
            />
            {user.verified && <View style={styles.verifiedDot} />}
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userCourse}>{user.course}</Text>
            <View style={styles.badgeRow}>
              <View style={styles.univBadge}>
                <Text style={styles.univBadgeText}>{user.university}</Text>
              </View>
              {user.verified && (
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedBadgeText}>Verificado</Text>
                </View>
=======
              bg="brand.300"
              color="white"
              fontWeight="bold"
            />
            {user.verified && (
              <Box
                position="absolute"
                bottom="0"
                right="0"
                bg="brand.500"
                border="2px solid white"
                rounded="full"
                p="1"
              />
            )}
          </Box>
          <Box>
            <Text
              color="white"
              fontWeight="bold"
              fontSize="xl"
            >
              {user.name}
            </Text>
            <Text
              color="brand.200"
              fontSize="sm"
            >
              {user.course}
            </Text>
            <HStack
              gap="2"
              mt="1"
            >
              <Badge
                bg="brand.400"
                color="white"
                border="none"
                fontSize="xs"
              >
                {user.university}
              </Badge>
              {user.verified && (
                <Badge
                  bg="green.600"
                  color="white"
                  border="none"
                  fontSize="xs"
                >
                  Verificado
                </Badge>
>>>>>>> origin/main
              )}
            </View>
          </View>
        </View>
      </View>

<<<<<<< HEAD
      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Stats card */}
        <View style={styles.statsCard}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <View style={styles.statValueRow}>
                <IconStarFilled size={16} color="#facc15" />
                <Text style={styles.statValue}>{user.rating}</Text>
              </View>
              <Text style={styles.statLabel}>Avaliação</Text>
            </View>

            <View style={styles.verticalDivider} />

            <View style={styles.statItem}>
              <View style={styles.statValueRow}>
                <IconCarFilled size={16} color={colors.brand[400]} />
                <Text style={styles.statValue}>{user.totalRides}</Text>
              </View>
              <Text style={styles.statLabel}>Caronas</Text>
            </View>

            <View style={styles.verticalDivider} />

            <View style={styles.statItem}>
              <View style={styles.statValueRow}>
                <IconUsers size={16} color={colors.green[400]} />
                <Text style={styles.statValue}>R$ 94</Text>
              </View>
              <Text style={styles.statLabel}>Economizado</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainContent}>
          {/* Recent rides */}
          <Text style={styles.sectionTitle}>
            {isDriver ? "Histórico de corridas" : "Histórico de caronas"}
          </Text>

          <View style={styles.card}>
            {rideHistory.slice(0, 4).map((ride, i) => (
              <View key={ride.id}>
                <View style={styles.rideItem}>
                  <View style={styles.rideTopRow}>
                    <Text style={styles.rideDate}>{ride.dayLabel}</Text>
                    <Text style={styles.ridePrice}>
                      R$ {ride.price.toFixed(2).replace(".", ",")}
                    </Text>
                  </View>

                  <View style={styles.routeRow}>
                    <View style={[styles.routeDot, { backgroundColor: colors.green[500] }]} />
                    <Text style={styles.routeText} numberOfLines={1}>{ride.from}</Text>
                  </View>
                  <View style={styles.routeRow}>
                    <IconMapPin size={14} color={colors.gray[300]} />
                    <Text style={styles.routeText} numberOfLines={1}>{ride.to}</Text>
                  </View>

                  <View style={styles.rideFooter}>
                    {!isDriver && (
                      <Text style={styles.rideMeta}>{ride.driver}</Text>
                    )}
                    {!isDriver && (
                      <View style={styles.ratingMeta}>
                        <IconStar size={12} color="#facc15" />
                        <Text style={styles.ratingMetaText}>{ride.rating}.0</Text>
                      </View>
                    )}
                    <View style={styles.passengersMeta}>
                      <IconUsers size={12} color={colors.gray[300]} />
                      <Text style={styles.passengersMetaText}>{ride.passengers}</Text>
                    </View>
                  </View>
                </View>
                {i < 3 && <View style={styles.separator} />}
              </View>
            ))}
          </View>

          {/* Menu items */}
          <Text style={styles.sectionTitle}>Menu</Text>
          <View style={styles.card}>
            {menuItems.map((item, i) => (
              <View key={item.label}>
                <TouchableOpacity style={styles.menuItem}>
                  <item.icon size={18} color={colors.gray[600]} />
                  <Text style={styles.menuLabel}>{item.label}</Text>
                  {item.badge && (
                    <View style={styles.menuBadge}>
                      <Text style={styles.menuBadgeText}>{item.badge}</Text>
                    </View>
                  )}
                  <IconChevronRight size={18} color={colors.gray[300]} />
                </TouchableOpacity>
                {i < menuItems.length - 1 && <View style={styles.separator} />}
              </View>
            ))}
          </View>

          {/* Logout */}
          <TouchableOpacity style={styles.logoutButton}>
            <IconLogout size={18} color={colors.red[500]} />
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
=======
      {/* Stats card */}
      <Box
        px="5"
        mt="-8"
        mb="4"
        position="absolute"
        zIndex="1"
        w="full"
        top={64}
      >
        <Box
          bg="white"
          rounded="2xl"
          p="4"
          border="1px solid"
          borderColor="gray.100"
        >
          <HStack
            gap="0"
            justify="space-around"
          >
            <VStack
              gap="0.5"
              align="center"
            >
              <HStack gap="1">
                <Icon
                  color="yellow.400"
                  boxSize="4"
                >
                  <IconStarFilled/>
                </Icon>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color="gray.800"
                >
                  {user.rating}
                </Text>
              </HStack>
              <Text
                fontSize="xs"
                color="gray.500"
              >Avaliação</Text>
            </VStack>

            <Box
              w="1px"
              h="10"
              bg="gray.200"
            />

            <VStack
              gap="0.5"
              align="center"
            >
              <HStack gap="1">
                <Icon
                  color="brand.400"
                  boxSize="4"
                >
                  <IconCarFilled/>
                </Icon>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color="gray.800"
                >
                  {user.totalRides}
                </Text>
              </HStack>
              <Text
                fontSize="xs"
                color="gray.500"
              >Caronas</Text>
            </VStack>

            <Box
              w="1px"
              h="10"
              bg="gray.200"
            />

            <VStack
              gap="0.5"
              align="center"
            >
              <HStack gap="1">
                <Icon
                  color="green.400"
                  boxSize="4"
                >
                  <IconUsers/>
                </Icon>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color="gray.800"
                >
                  R$ 94
                </Text>
              </HStack>
              <Text
                fontSize="xs"
                color="gray.500"
              >Economizado</Text>
            </VStack>
          </HStack>
        </Box>
      </Box>

      {/* Scrollable content */}
      <Box
        flex="1"
        overflowY="auto"
        px="5"
        pt="14"
        css={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {width: "0px", height: "0px"},
        }}
      >
        {/* Recent rides */}
        <Text
          fontSize="sm"
          fontWeight="bold"
          color="gray.700"
          mb="3"
        >
          {isDriver ? "Histórico de corridas" : "Histórico de caronas"}
        </Text>

        <Box
          bg="white"
          rounded="2xl"
          overflow="hidden"
          border="1px solid"
          borderColor="gray.100"
          mb="4"
        >
          {rideHistory.slice(0, 4).map((ride, i) => (
            <Box key={ride.id}>
              <Box
                px="4"
                py="3"
              >
                <Flex
                  align="start"
                  gap="3"
                >
                  <Box
                    flex="1"
                    minW="0"
                  >
                    <Flex
                      justify="space-between"
                      align="start"
                      mb="0.5"
                    >
                      <Text
                        fontSize="xs"
                        color="gray.400"
                      >
                        {ride.dayLabel}
                      </Text>
                      <Text
                        fontSize="sm"
                        fontWeight="bold"
                        color="gray.800"
                      >
                        R$ {ride.price.toFixed(2).replace(".", ",")}
                      </Text>
                    </Flex>
                    <HStack
                      gap="1.5"
                      mb="1"
                    >
                      <Box
                        w="6px"
                        h="6px"
                        rounded="full"
                        bg="green.500"
                        flexShrink={0}
                      />
                      <Text
                        fontSize="xs"
                        color="gray.600"
                        truncate
                      >
                        {ride.from}
                      </Text>
                    </HStack>
                    <HStack
                      gap="1.5"
                      mb="1"
                    >
                      <Icon
                        color="gray.300"
                        boxSize="3.5"
                      >
                        <IconMapPin/>
                      </Icon>
                      <Text
                        fontSize="xs"
                        color="gray.600"
                        truncate
                      >
                        {ride.to}
                      </Text>
                    </HStack>
                    <HStack gap="3">
                      {!isDriver && (
                        <Text
                          fontSize="xs"
                          color="gray.400"
                        >
                          {ride.driver}
                        </Text>
                      )}
                      {!isDriver && (
                        <HStack gap="1">
                          <Icon
                            color="yellow.400"
                            boxSize="3"
                          >
                            <IconStar/>
                          </Icon>
                          <Text
                            fontSize="xs"
                            color="gray.500"
                          >
                            {ride.rating}.0
                          </Text>
                        </HStack>
                      )}
                      <HStack gap="1">
                        <Icon
                          color="gray.300"
                          boxSize="3"
                        >
                          <IconUsers/>
                        </Icon>
                        <Text
                          fontSize="xs"
                          color="gray.400"
                        >
                          {ride.passengers}
                        </Text>
                      </HStack>
                    </HStack>
                  </Box>
                </Flex>
              </Box>
              {i < 3 && <Separator borderColor="gray.100"/>}
            </Box>
          ))}
        </Box>

        {/* Menu items */}
        <Text
          fontSize="sm"
          fontWeight="bold"
          color="gray.700"
          mb="3"
        >
          Menu
        </Text>
        <Box
          bg="white"
          rounded="2xl"
          overflow="hidden"
          border="1px solid"
          borderColor="gray.100"
          mb="4"
        >
          {menuItems.map((item, i) => (
            <Box key={item.label}>
              <Flex
                align="center"
                gap="3"
                px="4"
                py="4.5"
                cursor="pointer"
                _hover={{bg: "gray.50"}}
                transition="bg 0.15s"
              >
                <Icon
                  color="gray.600"
                  boxSize="4"
                >
                  <item.icon/>
                </Icon>
                <Text
                  flex="1"
                  fontSize="sm"
                  fontWeight="medium"
                  color="gray.800"
                >
                  {item.label}
                </Text>
                {item.badge && (
                  <Badge
                    colorPalette="red"
                    variant="solid"
                    rounded="full"
                    fontSize="2xs"
                  >
                    {item.badge}
                  </Badge>
                )}
                <Icon
                  color="gray.300"
                  boxSize="4"
                >
                  <IconChevronRight/>
                </Icon>
              </Flex>
              {i < menuItems.length - 1 && <Separator borderColor="gray.100"/>}
            </Box>
          ))}
        </Box>

        {/* Logout */}
        <Box
          bg="red.50"
          rounded="2xl"
          px="4"
          py="3.5"
          cursor="pointer"
          _hover={{bg: "red.100"}}
          transition="all 0.15s"
          mb="6"
        >
          <HStack gap="3">
            <Icon
              color="red.500"
              boxSize="4"
            >
              <IconLogout/>
            </Icon>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="red.500"
            >
              Sair
            </Text>
          </HStack>
        </Box>
      </Box>
    </Flex>
  )
>>>>>>> origin/main
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[50],
  },
  header: {
    backgroundColor: colors.brand[500],
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 20,
  },
  headerTitleRow: {
    marginBottom: 16,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatarWrapper: {
    position: "relative",
  },
  verifiedDot: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.brand[500],
    borderWidth: 2,
    borderColor: colors.white,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
  },
  userCourse: {
    color: colors.brand[200],
    fontSize: 14,
  },
  badgeRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 6,
  },
  univBadge: {
    backgroundColor: colors.brand[400],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  univBadgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "600",
  },
  verifiedBadge: {
    backgroundColor: colors.green[600],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  verifiedBadgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "600",
  },
  scrollContent: {
    flex: 1,
  },
  statsCard: {
    marginHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    marginTop: -40,
    borderWidth: 1,
    borderColor: colors.gray[100],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  statItem: {
    alignItems: "center",
    gap: 2,
  },
  statValueRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.gray[800],
  },
  statLabel: {
    fontSize: 10,
    color: colors.gray[500],
  },
  verticalDivider: {
    width: 1,
    height: 32,
    backgroundColor: colors.gray[200],
  },
  mainContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.gray[700],
    marginBottom: 12,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray[100],
    overflow: "hidden",
    marginBottom: 24,
  },
  rideItem: {
    padding: 16,
  },
  rideTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  rideDate: {
    fontSize: 11,
    color: colors.gray[400],
  },
  ridePrice: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.gray[800],
  },
  routeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  routeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  routeText: {
    fontSize: 12,
    color: colors.gray[600],
    flex: 1,
  },
  rideFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 8,
  },
  rideMeta: {
    fontSize: 12,
    color: colors.gray[400],
  },
  ratingMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingMetaText: {
    fontSize: 12,
    color: colors.gray[500],
    fontWeight: "600",
  },
  passengersMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  passengersMetaText: {
    fontSize: 12,
    color: colors.gray[400],
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray[100],
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  menuLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: colors.gray[800],
  },
  menuBadge: {
    backgroundColor: colors.red[500],
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  menuBadgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "700",
  },
  logoutButton: {
    backgroundColor: colors.red[50],
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.red[500],
  },
});
