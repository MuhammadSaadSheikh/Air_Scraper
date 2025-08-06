import { View } from 'react-native';
import { globalStyles } from '../../config/GlobalStyle';
import { Colors } from '../../themes';
import Logo from '../../components/Logo';
import { useEffect, useRef } from 'react';
import { NavService } from '../../utils';
import { useSelector } from 'react-redux';

const Splash = () => {
  const userToken = useSelector(state => state.user.userToken);

  const timerRef = useRef(null);
  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (userToken) {
        NavService.reset(0, [{ name: 'AppStack' }]);
      } else {
        NavService.reset(0, [{ name: 'AuthStack' }]);
      }
    }, 2000);
  }, [userToken]);

  return (
    <View
      style={[
        globalStyles.container,
        {
          backgroundColor: Colors.white,
          justifyContent: 'center',
        },
      ]}
    >
      <Logo />
    </View>
  );
};

export default Splash;
