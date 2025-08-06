import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fonts from 'src/themes/Fonts';

export type BadgeType = 'pending' | 'approved' | 'rejected' | 'delayed';

const BADGE_THEMES = {
  pending: {
    borderColor: '#FBBF24',
    backgroundColor: '#FFFBEB',
    textColor: '#D97706',
    text: 'Pending',
  },
  approved: {
    borderColor: '#34D399',
    backgroundColor: '#ECFDF5',
    textColor: '#059669',
    text: 'Approved',
  },
  rejected: {
    borderColor: '#F87171',
    backgroundColor: '#FEF2F2',
    textColor: '#DC2626',
    text: 'Rejected',
  },
  delayed: {
    borderColor: '#818CF8',
    backgroundColor: '#EEF2FF',
    textColor: '#4F46E5',
    text: 'Delayed',
  },
};

interface StatusBadgeProps {
  type: BadgeType;
  customText?: string;
  style?: object;
}

export default function StatusBadge({
  type,
  customText,
  style = {},
}: StatusBadgeProps) {
  const theme = BADGE_THEMES[type] ?? BADGE_THEMES.pending;

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: theme.borderColor,
          backgroundColor: theme.backgroundColor,
        },
        style,
      ]}>
      <Text style={[styles.text, { color: theme.textColor }]}>
        {customText || theme.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    borderWidth: 1,
  },
  text: {
    fontSize: 12,
    fontFamily: Fonts.medium,
  },
});
