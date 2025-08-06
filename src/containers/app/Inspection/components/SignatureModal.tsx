import { useRef, FC, useState } from 'react';
import SignatureScreen from 'react-native-signature-canvas';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
//components
import { CustomButton } from '../../../../components';
//theme
import { Colors, Fonts } from '../../../../themes';
//assets
import Icons from '../../../../assets/Icons';
import { errorToast } from '../../../../redux/services/validations';
import { globalStyles } from '../../../../config/GlobalStyle';

const webStyle = `.m-signature-pad--footer
  .save {
      display: none;
  }
  .clear {
      display: none;
  }
`;

const { width, height } = Dimensions.get('window');

interface SignatureModalProps {
  visible?: boolean;
  // handleClear?: () => void;
  handleSignature?: () => void;
  closeModal?: () => void;
  handleSubmit?: () => void;
}

const SignatureModal: FC<SignatureModalProps> = ({
  visible = false,
  // handleClear,
  handleSignature,
  closeModal,
  handleSubmit,
}) => {
  const signatureRef = useRef();
  const [flag, setFlag] = useState(false);
  const [signatureData, setSignatureData] = useState('');

  const handleEmpty = () => {
    return errorToast('Please sign the T&C’s');
  };

  const handleClear = () => {
    signatureRef.current.clearSignature();
    // setSignatureData('');
  };

  return (
    <Modal visible={visible} transparent>
      <View
        style={{
          flex: 1,
          backgroundColor: '#00000090',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: width - 40,
            paddingVertical: 20,
            backgroundColor: Colors.white,
            borderRadius: 10,
          }}
        >
          <View
            style={[
              globalStyles.rowContainer,
              { marginBottom: 10, paddingHorizontal: 10 },
            ]}
          >
            <Text style={globalStyles.textCenter}>
              {flag ? 'Customer Signature' : 'Inspector Signature'}
            </Text>
            <TouchableOpacity
              style={globalStyles.shadow}
              onPress={() => {
                setFlag(false);
                closeModal();
              }}
            >
              <Image
                source={Icons.cross}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: Colors.black,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ height: 250, backgroundColor: Colors.white }}>
            <SignatureScreen
              ref={signatureRef}
              webStyle={webStyle}
              webviewContainerStyle={{
                borderRadius: 15,
                borderColor: Colors.border,
                borderWidth: 1,
              }}
              onOK={data => handleSignature(data)}
              onEmpty={handleEmpty}
            />

            <TouchableOpacity
              onPress={handleClear}
              activeOpacity={0.8}
              style={{
                height: 30,
                width: 30,
                backgroundColor: Colors.white,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: Colors.border,
                borderWidth: 1,
                position: 'absolute',
                zIndex: 99,
                bottom: 10,
                right: 10,
              }}
            >
              <Image
                source={Icons.cross}
                style={{
                  width: 15,
                  height: 15,
                  resizeMode: 'contain',
                  // tintColor: Colors.error,
                }}
              />
            </TouchableOpacity>
          </View>
          <CustomButton
            buttonStyle={{ width: width - 80 }}
            title={flag ? 'Submit' : 'Next'}
            onPress={() => {
              signatureRef.current.readSignature();
              setFlag(!flag);
              handleClear();
              flag && handleSubmit();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SignatureModal;
