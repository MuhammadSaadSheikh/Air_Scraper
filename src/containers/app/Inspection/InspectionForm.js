import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

//theme
import { Colors, Fonts } from '../../../themes';
//config
import { fontScale } from '../../../config/FontDimension';
import DimensionsUtil from '../../../config/ImageDimension';
//components
import {
  Checkbox,
  CustomImagePicker,
  AppBackground,
  CustomButton,
  CustomTextInput,
} from '../../../components';
import { Heading, SignatureModal } from './components';
//utils
import { NavService } from '../../../utils';
//assets
import Icons from '../../../assets/Icons';

const { width, height } = Dimensions.get('window');

const InspectionForm = () => {
  // const signatureRef = useRef();
  // const [signatureData, setSignatureData] = useState('');
  const [visible, setVisible] = useState(false);

  // const handleEmpty = () => {
  //   return errorToast('Please sign the T&C’s');
  // };

  // const handleClear = () => {
  //   signatureRef.current.clearSignature();
  //   setSignatureData('');
  // };

  // const handleSignature = data => {
  //   if (data !== null && data !== '') {
  //     setSignatureData(data);
  //     setVisible(false);
  //   }
  // };

  const renderFirstSection = () => {
    return (
      <>
        <Heading title="Backflow" />
        <Checkbox title="Isolation valves are in open position and locked or supervised" />
        <Checkbox title="RPA and RPDA - differential-sensing relief valve operating correctly" />
        <Checkbox title="RPA and RPDA - differential-sensing relief valve operating correctly" />
        <View style={styles.breaker} />
      </>
    );
  };

  const renderSecondSection = () => {
    return (
      <>
        <Heading title="Master Pressure-Regulating Device" />
        <Checkbox title="Downstream pressures are in accordance with design criteria" />
        <Checkbox title="Supply pressure is in accordance with design criteria" />
        <Checkbox title="Free of damage or leaks" />
        <View style={styles.breaker} />
      </>
    );
  };

  const renderThirdSection = () => {
    return (
      <>
        <Heading title="Control Valves" />
        <Checkbox title="In the correct (open or closed) position" />
        <Checkbox title="Locked or supervised" />
        <Checkbox title="Accessible" />
        <Checkbox title="Free from damage or leaks" />
        <Checkbox title="Retard chamber/alarm drains not leaking" />
        <View style={styles.breaker} />
      </>
    );
  };

  return (
    <>
      <AppBackground
        title="Inspection Form"
        containerStyle={{
          paddingTop: 30,
        }}
      >
        {renderFirstSection()}
        {renderSecondSection()}
        {renderThirdSection()}
        <Heading title="Comments" />
        <CustomTextInput
          placeholder="Write your comments here..."
          rightIcon={Icons.microphone}
          containerStyle={{
            marginTop: 0,
            height: 100,
            marginBottom: 30,
          }}
          textInputStyle={{ textAlignVertical: 'top', height: 100 }}
          multiline
        />
        <Heading title="Attachments" />
        <CustomImagePicker>
          <View style={styles.imgContainer}>
            <Image source={Icons.upload} style={styles.img} />
            <Text style={styles.imgPrimaryText}>Upload Files</Text>
            <Text style={styles.imgText}>Browse From Gallery</Text>
          </View>
        </CustomImagePicker>

        <CustomButton title="Save" />
        <CustomButton title="Next" onPress={() => setVisible(true)} />
      </AppBackground>

      <SignatureModal
        visible={visible}
        handleSignature={e => console.log(e, 'signature')}
        closeModal={() => setVisible(false)}
        handleSubmit={() => {
          setVisible(false);
          NavService.navigate('BottomTabs', {
            screen: 'Inspection',
          });
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    fontSize: fontScale(24),
    lineHeight: 36,
    color: Colors.black,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: fontScale(12),
    color: Colors.textSecondary,
  },
  textStyle: {
    fontFamily: Fonts.medium,
    fontSize: fontScale(15),
    lineHeight: 24,
    color: Colors.textSecondary,
  },
  secondaryTxt: {
    color: Colors.black,
    marginLeft: 15,
    fontFamily: Fonts.semiBold,
  },
  row: {
    borderBottomWidth: 0.5,
    paddingVertical: 15,
    borderBlockColor: Colors.lightGrey,
    justifyContent: 'flex-start',
  },
  img: {
    height: DimensionsUtil.verticalScale(30),
    width: DimensionsUtil.scale(32),
    borderRadius: 10,
  },
  icon: {
    height: DimensionsUtil.verticalScale(23),
    width: DimensionsUtil.scale(25),
    borderRadius: 10,
  },
  detailTxt: {
    fontFamily: Fonts.regular,
    fontSize: fontScale(13),
    color: Colors.textSecondary,
  },
  imgSecondary: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  name: {
    color: Colors.title,
    fontFamily: Fonts.semiBold,
    fontSize: fontScale(14),
  },
  nestedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '50%',
  },
  breaker: {
    borderColor: Colors.lightGrey,
    borderBottomWidth: 0.5,
    marginBottom: 30,
  },
  imgContainer: {
    height: 130,
    flex: 1,
    borderRadius: 20,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.border,
    marginBottom: 30,
  },
  imgPrimaryText: {
    fontFamily: Fonts.medium,
    fontSize: fontScale(13),
    color: Colors.black,
  },
  imgText: {
    fontFamily: Fonts.semiBold,
    fontSize: fontScale(11),
    lineHeight: 24,
    color: Colors.textDisabled,
  },
});

export default InspectionForm;
