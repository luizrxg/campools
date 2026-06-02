import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
<<<<<<< HEAD
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { popularLocations } from "@/data/mockData";
import type { AppScreen } from "@/types";
=======
  HStack,
  VStack,
  Icon,
  Input,
  Separator,
} from "@chakra-ui/react"
import {useState} from "react"
import {popularLocations} from "@/data/mockData"
import type {AppScreen} from "@/types"
>>>>>>> origin/main
import {
  IconArrowLeft,
  IconMapPin,
  IconNavigation,
  IconX,
<<<<<<< HEAD
  IconClock,
  IconHistory,
} from "@tabler/icons-react-native";
import { colors } from "@/theme";
=======
  IconClock, IconHistory,
} from "@tabler/icons-react"
>>>>>>> origin/main

interface RequestScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

<<<<<<< HEAD
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
=======
export function RequestScreen({onNavigate}: RequestScreenProps) {
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [activeField, setActiveField] = useState<"pickup" | "destination">("destination")
  const [pickupId, setPickupId] = useState<string | null>(null)
  const [destinationId, setDestinationId] = useState<string | null>(null)

  const usedIds = new Set([pickupId, destinationId].filter(Boolean) as string[])

  const recentDestinations = popularLocations
    .slice(0, 3)
    .filter((l) => !usedIds.has(l.id))

  const filteredSuggestions = popularLocations
    .filter((l) => !usedIds.has(l.id))
>>>>>>> origin/main

  const recentDestinations = popularLocations
    .slice(0, 3)
    .filter((l) => !usedIds.has(l.id));

  const filteredSuggestions = popularLocations.filter((l) => !usedIds.has(l.id));

  const canProceed = pickup.length > 2 && destination.length > 2;

  const handleSelect = (name: string) => {
<<<<<<< HEAD
    const loc = popularLocations.find((l) => l.name === name);

    if (activeField === "pickup") {
      setPickup(name);
      setPickupId(loc?.id ?? null);
      setActiveField("destination");
    } else {
      setDestination(name);
      setDestinationId(loc?.id ?? null);
=======
    const loc = popularLocations.find((l) => l.name === name)

    if (activeField === "pickup") {
      setPickup(name)
      setPickupId(loc?.id ?? null)
      setActiveField("destination")
    } else {
      setDestination(name)
      setDestinationId(loc?.id ?? null)
>>>>>>> origin/main
    }
  };

  const clearPickup = () => {
    setPickup("");
    setPickupId(null);
  };

  const clearDestination = () => {
    setDestination("");
    setDestinationId(null);
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
<<<<<<< HEAD
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
=======
    <Flex
      flexDir="column"
      h="full"
      bg="white"
    >
      {/* Header */}
      <Box
        bg="brand.500"
        pt="10"
        pb="5"
        px="5"
      >
        <HStack
          gap="3"
          mb="4"
        >
          <Box
            cursor="pointer"
            onClick={() => onNavigate("home")}
            p="1"
            rounded="full"
            _hover={{bg: "brand.400"}}
            transition="all 0.15s"
          >
            <Icon
              color="white"
              boxSize="5"
            >
              <IconArrowLeft/>
            </Icon>
          </Box>
          <Text
            color="white"
            fontSize="lg"
            fontWeight="bold"
          >
            Nova Carona
          </Text>
        </HStack>

        {/* Input fields */}
        <VStack
          gap="2"
          align="stretch"
        >
>>>>>>> origin/main
          {/* Pickup */}
          <View style={styles.inputWrapper}>
            <View style={[styles.dot, { backgroundColor: colors.green[500] }]} />
            <TextInput
              style={styles.input}
              placeholder="Seu ponto de partida"
              placeholderTextColor={colors.gray[400]}
              value={pickup}
<<<<<<< HEAD
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
=======
              onChange={(e) => {
                setPickup(e.target.value)
                setPickupId(null)
              }}
              onFocus={() => setActiveField("pickup")}
              color="gray.800"
              bg="transparent"
              _placeholder={{color: "gray.400"}}
            />
            {pickup && (
              <Icon
                color="gray.400"
                boxSize="4"
                cursor="pointer"
                onClick={clearPickup}
              >
                <IconX/>
              </Icon>
>>>>>>> origin/main
            )}
          </View>

          {/* Vertical connector */}
<<<<<<< HEAD
          <View style={styles.connector} />

          {/* Destination */}
          <View
            style={[
              styles.inputWrapper,
              activeField === "destination" && styles.inputActive,
            ]}
=======
          <Box
            pl="4"
            py="0.5"
          >
            <Box
              w="2px"
              h="3"
              bg="gray.200"
              mx="auto"
            />
          </Box>

          {/* Destination */}
          <Flex
            align="center"
            gap="3"
            bg="white"
            rounded="xl"
            px="3"
            py="2.5"
            border={activeField === "destination" ? "2px solid" : "2px solid transparent"}
            borderColor={activeField === "destination" ? "gray.300" : "transparent"}
            transition="border-color 0.15s"
>>>>>>> origin/main
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
<<<<<<< HEAD
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
=======
              onChange={(e) => {
                setDestination(e.target.value)
                setDestinationId(null)
              }}
              onFocus={() => setActiveField("destination")}
              color="gray.800"
              bg="transparent"
              _placeholder={{color: "gray.400"}}
            />
            {destination && (
              <Icon
                color="gray.400"
                boxSize="4"
                cursor="pointer"
                onClick={clearDestination}
              >
                <IconX/>
              </Icon>
>>>>>>> origin/main
            )}
          </View>
        </View>
      </View>

      {/* Suggestions */}
<<<<<<< HEAD
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
=======
      <Box
        flex="1"
        overflowY="auto"
        css={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {width: "0px", height: "0px"},
        }}
      >
        {/* Recent */}
        <Box
          px="5"
          pt="4"
          pb="2"
        >
          <HStack
            gap="2"
            mb="3"
          >
            <Icon
              color="gray.400"
              boxSize="4"
            >
              <IconClock/>
            </Icon>
            <Text
              fontSize="xs"
              fontWeight="semibold"
              color="gray.500"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Recentes
            </Text>
          </HStack>
          <VStack
            gap="0"
            align="stretch"
          >
            {recentDestinations.map((loc, i) => (
              <Box key={loc.id}>
                <Flex
                  align="center"
                  gap="3"
                  py="3"
                  cursor="pointer"
                  onClick={() => handleSelect(loc.name)}
                  _hover={{bg: "gray.50"}}
                  px="1"
                  rounded="lg"
                  transition="bg 0.15s"
                >
                  <Box flex="1">
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      color="gray.800"
                    >
                      {loc.name}
                    </Text>
                    <Text
                      fontSize="xs"
                      color="gray.400"
                    >
                      {loc.address}
                    </Text>
                  </Box>
                  <Icon
                    color="gray.300"
                    boxSize="4"
                  >
                    <IconHistory/>
                  </Icon>
                </Flex>
                {i < recentDestinations.length - 1 && (
                  <Separator borderColor="gray.100"/>
                )}
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Live suggestions */}
        <Box
          px="5"
          pb="2"
        >
          <HStack
            gap="2"
            my="3"
          >
            <Icon
              color="brand.400"
              boxSize="4"
            >
              <IconMapPin/>
            </Icon>
            <Text
              fontSize="xs"
              fontWeight="semibold"
              color="gray.500"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Sugestões
            </Text>
          </HStack>
          <VStack
            gap="0"
            align="stretch"
          >
            {filteredSuggestions.map((loc, i) => (
              <Box key={loc.id}>
                <Flex
                  align="center"
                  gap="3"
                  py="3"
                  cursor="pointer"
                  onClick={() => handleSelect(loc.name)}
                  _hover={{bg: "gray.50"}}
                  px="1"
                  rounded="lg"
                  transition="bg 0.15s"
                >
                  <Box flex="1">
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      color="gray.800"
                    >
                      {loc.name}
                    </Text>
                    <Text
                      fontSize="xs"
                      color="gray.400"
                    >
                      {loc.address}
                    </Text>
                  </Box>
                  <Icon
                    color="gray.300"
                    boxSize="4"
                  >
                    <IconNavigation/>
                  </Icon>
                </Flex>
                {i < filteredSuggestions.length - 1 && <Separator borderColor="gray.100"/>}
              </Box>
            ))}
          </VStack>
        </Box>
      </Box>

      {/* Confirm button */}
      <Box
        px="5"
        py="4"
        borderTop="1px solid"
        borderColor="gray.100"
      >
        <Box
          bg={canProceed ? "brand.500" : "gray.200"}
          rounded="xl"
          py="4"
          textAlign="center"
          cursor={canProceed ? "pointer" : "not-allowed"}
          onClick={() => canProceed && onNavigate("finding")}
          _hover={canProceed ? {bg: "brand.600"} : {}}
          transition="all 0.2s"
          shadow="none"
>>>>>>> origin/main
        >
          <Text
            style={[
              styles.confirmButtonText,
              { color: canProceed ? colors.white : colors.gray[400] },
            ]}
          >
            Buscar
          </Text>
<<<<<<< HEAD
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
=======
        </Box>
      </Box>
    </Flex>
  )
}
>>>>>>> origin/main
