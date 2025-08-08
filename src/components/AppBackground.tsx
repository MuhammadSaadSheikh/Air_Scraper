import React, { FC, ReactNode } from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  ScrollView,
  ImageStyle,
} from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../themes';
import Header, { HeaderHome } from './Header';

interface AppBackgroundProps {
  children: ReactNode;
  nav?: string;
  title?: string;
  back?: boolean;
  showHeader?: boolean;
  homeHeader?: boolean;
  notificationIcon?: boolean;
  disableScroll?: boolean;
  hideUIOnLoader?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  mainContainer?: StyleProp<ViewStyle>;
  headerContainerStyle?: StyleProp<ViewStyle>;
  headerTextStyle?: StyleProp<TextStyle>;
  headerBackStyle?: StyleProp<ImageStyle>;
}

const AppBackground: FC<AppBackgroundProps> = ({
  children,
  nav = '',
  title = '',
  back = true,
  showHeader = true,
  homeHeader = false,
  notificationIcon = false,
  disableScroll = false,
  hideUIOnLoader = false,
  containerStyle = {},
  mainContainer = {},
  headerContainerStyle = {},
  headerTextStyle = {},
  headerBackStyle = {},
}) => {
  const loader = useSelector((state: any) => state.loader); // Replace `any` with the type of your Redux state if available
  return (
    <View
      style={[{ flex: 1, backgroundColor: Colors.background }, mainContainer]}
    >
      {showHeader && !homeHeader && (
        <Header
          title={title}
          back={back}
          nav={nav}
          notificationIcon={notificationIcon}
          headerContainerStyle={headerContainerStyle}
          headerTextStyle={headerTextStyle}
          headerBackStyle={headerBackStyle}
        />
      )}

      {homeHeader && <HeaderHome />}

      {disableScroll ? (
        <View style={[{ flex: 1 }, containerStyle]}>
          {!loader || !hideUIOnLoader ? children : null}
        </View>
      ) : (
        <ScrollView
          style={{ flex: 1 }}
          keyboardShouldPersistTaps="always"
          contentContainerStyle={[
            { flexGrow: 1, paddingBottom: 20, paddingHorizontal: 20 },
            containerStyle,
          ]}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {!loader || !hideUIOnLoader ? children : null}
        </ScrollView>
      )}
    </View>
  );
};

export default AppBackground;
