import  { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Svg, { Rect, Circle, G, Line, Path, Defs, LinearGradient, Stop } from "react-native-svg";

type MapVariant = "idle" | "finding" | "driver-coming" | "in-progress";

interface MapSimulationProps {
  variant?: MapVariant;
  height?: number | string;
}

const BRAND = "#353575";
const BRAND_LIGHT = "#7e7ecf";

export function MapSimulation({ variant = "idle", height = 240 }: MapSimulationProps) {
  const [carPos, setCarPos] = useState({ x: 60, y: 80 });
  const animRef = useRef<number | null>(null);
  const pulseAnim = useRef(new Animated.Value(0)).current;

  const pickupPos = { x: 180, y: 200 };
  const destPos = { x: 300, y: 80 };

  useEffect(() => {
    if (variant === "finding") {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(0);
    }
  }, [variant]);

  useEffect(() => {
    if (variant === "idle" || variant === "finding") return;

    const start = variant === "driver-coming"
      ? { x: 60, y: 80 }
      : { x: 180, y: 200 };
    const end = variant === "driver-coming"
      ? { x: 180, y: 200 }
      : { x: 300, y: 80 };

    let progress = 0;

    const animate = () => {
      progress += 0.004;
      if (progress > 1) progress = 0;

      const t = progress;
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      setCarPos((prev) => {
        const nextX = start.x + (end.x - start.x) * ease;
        const nextY = start.y + (end.y - start.y) * ease;
        // Only update if difference is significant enough to avoid micro-renders
        if (Math.abs(prev.x - nextX) < 0.1 && Math.abs(prev.y - nextY) < 0.1) return prev;
        return { x: nextX, y: nextY };
      });
    };

    const interval = setInterval(animate, 64); // ~15fps for simulation is enough to keep bundle moving
    return () => {
      clearInterval(interval);
    };
  }, [variant]);

  return (
    <View style={[styles.container, { height: typeof height === 'string' ? parseInt(height) : height }]}>
      <Svg width="100%" height="100%" viewBox="0 0 390 280">
        {/* Background */}
        <Rect width="390" height="280" fill="#e8eff7" />

        {/* City blocks */}
        <Rect x="10" y="10" width="80" height="60" rx="4" fill="#d4dde8" />
        <Rect x="110" y="10" width="60" height="40" rx="4" fill="#d4dde8" />
        <Rect x="190" y="10" width="90" height="55" rx="4" fill="#d4dde8" />
        <Rect x="300" y="10" width="80" height="45" rx="4" fill="#d4dde8" />
        <Rect x="10" y="90" width="55" height="70" rx="4" fill="#d4dde8" />
        <Rect x="85" y="90" width="75" height="50" rx="4" fill="#d4dde8" />
        <Rect x="180" y="85" width="50" height="65" rx="4" fill="#d4dde8" />
        <Rect x="250" y="75" width="70" height="60" rx="4" fill="#d4dde8" />
        <Rect x="340" y="85" width="45" height="70" rx="4" fill="#d4dde8" />
        <Rect x="10" y="185" width="90" height="80" rx="4" fill="#d4dde8" />
        <Rect x="120" y="190" width="60" height="70" rx="4" fill="#d4dde8" />
        <Rect x="200" y="180" width="80" height="90" rx="4" fill="#d4dde8" />
        <Rect x="300" y="185" width="85" height="80" rx="4" fill="#d4dde8" />

        {/* Park areas */}
        <Rect x="85" y="155" width="85" height="25" rx="4" fill="#c3d9c0" />
        <Rect x="250" y="145" width="80" height="25" rx="4" fill="#c3d9c0" />

        {/* Major roads (horizontal) */}
        <Rect x="0" y="78" width="390" height="10" fill="#cbd5e1" />
        <Rect x="0" y="170" width="390" height="10" fill="#cbd5e1" />
        <Rect x="0" y="260" width="390" height="10" fill="#cbd5e1" />

        {/* Major roads (vertical) */}
        <Rect x="78" y="0" width="10" height="280" fill="#cbd5e1" />
        <Rect x="168" y="0" width="10" height="280" fill="#cbd5e1" />
        <Rect x="258" y="0" width="10" height="280" fill="#cbd5e1" />
        <Rect x="340" y="0" width="10" height="280" fill="#cbd5e1" />

        {/* Road center lines */}
        <Line x1="0" y1="83" x2="390" y2="83" stroke="white" strokeWidth="1" strokeDasharray="12,8" opacity={0.6} />
        <Line x1="0" y1="175" x2="390" y2="175" stroke="white" strokeWidth="1" strokeDasharray="12,8" opacity={0.6} />
        <Line x1="83" y1="0" x2="83" y2="280" stroke="white" strokeWidth="1" strokeDasharray="12,8" opacity={0.6} />
        <Line x1="173" y1="0" x2="173" y2="280" stroke="white" strokeWidth="1" strokeDasharray="12,8" opacity={0.6} />
        <Line x1="263" y1="0" x2="263" y2="280" stroke="white" strokeWidth="1" strokeDasharray="12,8" opacity={0.6} />

        {/* Route line */}
        {(variant === "driver-coming" || variant === "in-progress") && (
          <Path
            d={`M${variant === "driver-coming" ? carPos.x : pickupPos.x},${variant === "driver-coming" ? carPos.y : pickupPos.y} Q${(pickupPos.x + destPos.x) / 2},${variant === "driver-coming" ? 150 : 100} ${destPos.x},${destPos.y}`}
            fill="none"
            stroke={BRAND}
            strokeWidth="3"
            strokeDasharray="8,5"
            opacity={0.7}
          />
        )}

        {/* Pickup marker */}
        {(variant === "driver-coming" || variant === "in-progress") && (
          <G x={pickupPos.x} y={pickupPos.y}>
            <Circle r="14" fill="white" opacity={0.9} />
            <Circle r="10" fill="#22c55e" />
            <Circle r="4" fill="white" />
            <Rect x="-1.5" y="10" width="3" height="8" rx="1.5" fill="#22c55e" />
          </G>
        )}

        {/* Destination marker */}
        {(variant === "driver-coming" || variant === "in-progress") && (
          <G x={destPos.x} y={destPos.y}>
            <Circle r="14" fill="white" opacity={0.9} />
            <Circle r="10" fill={BRAND} />
            <Circle r="4" fill="white" />
            <Rect x="-1.5" y="10" width="3" height="8" rx="1.5" fill={BRAND} />
          </G>
        )}

        {/* Animated car */}
        {variant !== "idle" && variant !== "finding" && (
          <G x={carPos.x} y={carPos.y}>
            <Circle r="16" fill="white" opacity={0.95} />
            <Circle r="12" fill={BRAND} />
            <G x={-7} y={-5}>
              <Rect x="1" y="4" width="12" height="7" rx="1.5" fill="white" />
              <Rect x="3" y="2" width="8" height="4" rx="1" fill="white" />
              <Circle cx="3.5" cy="11.5" r="1.5" fill="white" />
              <Circle cx="10.5" cy="11.5" r="1.5" fill="white" />
            </G>
          </G>
        )}

        {/* Finding animation - static representation for now, or using G with scale if we had AnimatedG */}
        {variant === "finding" && (
          <G x={195} y={140}>
            <Circle r="20" fill={BRAND_LIGHT} opacity={0.3} />
            <Circle r="12" fill={BRAND} opacity={0.5} />
            <Circle r="6" fill={BRAND} />
          </G>
        )}

        {/* Idle state - just a location pin in center */}
        {variant === "idle" && (
          <G x={195} y={130}>
            <Circle r="16" fill="white" opacity={0.9} />
            <Circle r="11" fill={BRAND} />
            <Circle r="4" fill="white" />
            <Rect x="-1.5" y="11" width="3" height="9" rx="1.5" fill={BRAND} />
          </G>
        )}

        {/* Gradient overlay at bottom */}
        <Defs>
          <LinearGradient id="fadeBottom" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="70%" stopColor="#e8eff7" stopOpacity="0" />
            <Stop offset="100%" stopColor="#e8eff7" stopOpacity="0.8" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="390" height="280" fill="url(#fadeBottom)" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#e8eff7',
  },
});
