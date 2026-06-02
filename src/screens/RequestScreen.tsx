import  { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { popularLocations } from "@/data/mockData";
import type { AppScreen } from "@/types";
import {
  IconArrowLeft,
  IconMapPin,
  IconNavigation,
  IconX,
  IconClock,
  IconHistory,
} from "@tabler/icons-react-native";
import { colors } from "@/theme";

interface RequestScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

export function RequestScreen({ onNavigate }: RequestScreenProps) {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [activeField, setActiveField] = useState<"pickup" | "destination">(
    "destination"
  );
  const [pickupId, setPickupId] = useState<string | null>(null);
  const [destinationId, setDestinationId] = useState<string | null>(null);

  const usedIds = new Set(
    ([pickupId, destinationId].filter(Boolean) as string[])
  );

  const recentDestinations = popularLocations
    .slice(0, 3)
    .filter((l) => !usedIds.has(l.id));

  const filteredSuggestions = popularLocations.filter((l) => !usedIds.has(l.id));

  const canProceed = pickup.length > 2 && destination.length > 2;

  const handleSelect = (name: string) => {
    const loc = popularLocations.find((l) => l.name === name);

    if (activeField === "pickup") {
      setPickup(name);
      setPickupId(loc?.id ?? null);
      setActiveField("destination");
    } else {
      setDestination(name);
      setDestinationId(loc?.id ?? null);
    }
  };

  const clearPickup = () => {
    setPickup("")
    setPickupId(null)
  }

  const clearDestination = () => {
    setDestination("")
    setDestinationId(null)
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerNav}>
          <TouchableOpacity
            onPress={() => onNavigate("home")}
            style={styles.backButton}
          >
            <IconArrowLeft size={24} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Nova Carona</Text>
        </View>

        {/* Input fields */}
        <View style={styles.inputsContainer}>
          {/* Pickup */}
          <View style={styles.inputWrapper}>
            <View style={[styles.dot, { backgroundColor: colors.green[500] }]} />
            <TextInput
              style={styles.input}
              placeholder="Seu ponto de partida"
              placeholderTextColor={colors.gray[400]}
              value={pickup}
              onChangeText={(text) => {
                setPickup(text);
                setPickupId(null);
              }}
              onFocus={() => setActiveField("pickup")}
            />
            {pickup.length > 0 && (
              <TouchableOpacity onPress={clearPickup}>
                <IconX size={16} color={colors.gray[400]} />
              </TouchableOpacity>
            )}
          </View>

          {/* Vertical connector */}
          <View style={styles.connector} />

          {/* Destination */}
          <View
            style={[
              styles.inputWrapper,
              activeField === "destination" && styles.inputActive,
            ]}
          >
            <View
              style={[
                styles.dot,
                { backgroundColor: colors.brand[500], borderRadius: 2 },
              ]}
            />
            <TextInput
              style={styles.input}
              placeholder="Para onde você vai?"
              placeholderTextColor={colors.gray[400]}
              value={destination}
              onChangeText={(text) => {
                setDestination(text);
                setDestinationId(null);
              }}
              onFocus={() => setActiveField("destination")}
            />
            {destination.length > 0 && (
              <TouchableOpacity onPress={clearDestination}>
                <IconX size={16} color={colors.gray[400]} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      {/* Suggestions */}
      <ScrollView style={styles.suggestionsScroll}>
        {/* Recent */}
        <View style={styles.suggestionSection}>
          <View style={styles.sectionHeader}>
            <IconClock size={16} color={colors.gray[400]} />
            <Text style={styles.sectionTitle}>Recentes</Text>
          </View>
          {recentDestinations.map((loc, i) => (
            <View key={loc.id}>
              <TouchableOpacity
                style={styles.suggestionItem}
                onPress={() => handleSelect(loc.name)}
              >
                <View style={styles.suggestionInfo}>
                  <Text style={styles.suggestionName}>{loc.name}</Text>
                  <Text style={styles.suggestionAddress}>{loc.address}</Text>
                </View>
                <IconHistory size={16} color={colors.gray[300]} />
              </TouchableOpacity>
              {i < recentDestinations.length - 1 && (
                <View style={styles.separator} />
              )}
            </View>
          ))}
        </View>

        {/* Live suggestions */}
        <View style={styles.suggestionSection}>
          <View style={styles.sectionHeader}>
            <IconMapPin size={16} color={colors.brand[400]} />
            <Text style={styles.sectionTitle}>Sugestões</Text>
          </View>
          {filteredSuggestions.map((loc, i) => (
            <View key={loc.id}>
              <TouchableOpacity
                style={styles.suggestionItem}
                onPress={() => handleSelect(loc.name)}
              >
                <View style={styles.suggestionInfo}>
                  <Text style={styles.suggestionName}>{loc.name}</Text>
                  <Text style={styles.suggestionAddress}>{loc.address}</Text>
                </View>
                <IconNavigation size={16} color={colors.gray[300]} />
              </TouchableOpacity>
              {i < filteredSuggestions.length - 1 && (
                <View style={styles.separator} />
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Confirm button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.confirmButton,
            { backgroundColor: canProceed ? colors.brand[500] : colors.gray[200] },
          ]}
          disabled={!canProceed}
          onPress={() => onNavigate("finding")}
        >
          <Text
            style={[
              styles.confirmButtonText,
              { color: canProceed ? colors.white : colors.gray[400] },
            ]}
          >
            Buscar
          </Text>
        </TouchableOpacity>
      </View>
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
  headerNav: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 12,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
  inputsContainer: {
    gap: 8,
  },
  inputWrapper: {
    backgroundColor: colors.white,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 44,
    gap: 12,
  },
  inputActive: {
    borderWidth: 2,
    borderColor: colors.gray[300],
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.gray[800],
    padding: 0,
  },
  connector: {
    width: 2,
    height: 12,
    backgroundColor: colors.gray[200],
    marginLeft: 16,
    marginVertical: -8,
  },
  suggestionsScroll: {
    flex: 1,
  },
  suggestionSection: {
    paddingHorizontal: 20,
    paddingTop: 16,
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
  suggestionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 12,
  },
  suggestionInfo: {
    flex: 1,
  },
  suggestionName: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.gray[800],
  },
  suggestionAddress: {
    fontSize: 12,
    color: colors.gray[400],
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray[100],
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.gray[100],
  },
  confirmButton: {
    borderRadius: 12,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButtonText: {
    fontWeight: "700",
    fontSize: 14,
  },
});
