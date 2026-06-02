
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/theme';
import type {ReactNode} from "react";

interface MobileFrameProps {
  children: ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <View style={styles.content}>
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
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
