
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
            <Avatar
              size="xl"
              name={user.name}
              src={user.avatarUrl}
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
              )}
            </View>
          </View>
        </View>

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
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>

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
    zIndex: 10,
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
    paddingTop: 40,
  },
  statsCard: {
    marginHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 16,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
    position: "absolute",
    bottom: -40,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    padding: 16,
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
    marginBottom: 40
  },
  logoutText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.red[500],
  },
});
