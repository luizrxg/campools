import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/theme';

interface MobileFrameProps {
  children: React.ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <View style={styles.content}>
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
=======
    <Box
      minH="100dvh"
      bg="gray.100"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={{ base: 0, md: 8 }}
    >
      <Box
        w={{ base: "100%", md: "390px" }}
        h={{ base: "100dvh", md: "844px" }}
        bg="white"
        position="relative"
        overflow="hidden"
        borderRadius={{ base: 0, md: "3xl" }}
        shadow="none"
        display="flex"
        flexDir="column"
      >
        {children}
      </Box>
    </Box>
  )
>>>>>>> origin/main
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    overflow: 'hidden',
  },
});
