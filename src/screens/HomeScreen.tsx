
import {
  StyleSheet,
  View,
  Text,
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

interface HomeScreenProps {
  onNavigate: (screen: AppScreen) => void;
  mode: UserMode;
  onModeToggle: () => void;
}

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
            <Avatar
              size="sm"
              name={currentUser.name}
              src={currentUser.avatarUrl}
              bg={colors.brand[300]}
            />
          </View>
        </View>

        {/* Search bar */}
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
            </Text>
          </View>
        </View>

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
