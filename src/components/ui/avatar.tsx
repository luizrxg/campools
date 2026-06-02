import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ViewProps } from 'react-native';
import { colors } from '@/theme';

export interface AvatarProps extends ViewProps {
  name?: string;
  src?: any;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  bg?: string;
  color?: string;
  fontWeight?: string;
}

const sizeMap = {
  xs: 24,
  sm: 32,
  md: 48,
  lg: 64,
  xl: 96,
};

export const Avatar = React.forwardRef<View, AvatarProps>((props, ref) => {
  const { name, src, size = 'md', bg = colors.gray[200], color = colors.white, style, ...rest } = props;
  const dimension = sizeMap[size as keyof typeof sizeMap] || sizeMap.md;
  const [hasError, setHasError] = useState(false);

  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2)
    : '';

  const showImage = src !== undefined && src !== null && !hasError;

  return (
    <View
      ref={ref}
      style={[
        styles.container,
        {
          width: dimension,
          height: dimension,
          borderRadius: dimension / 2,
          backgroundColor: bg,
        },
        style,
      ]}
      {...rest}
    >
      {showImage ? (
        <Image
          source={typeof src === 'string' ? { uri: src } : src}
          style={{ width: dimension, height: dimension, borderRadius: dimension / 2 }}
          onError={() => setHasError(true)}
        />
      ) : (
        <Text style={[styles.text, { color, fontSize: dimension / 2.5 }]}>
          {initials}
        </Text>
      )}
    </View>
  );
});

export const AvatarGroup = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.group}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    fontWeight: 'bold',
  },
  group: {
    flexDirection: 'row',
  },
});
