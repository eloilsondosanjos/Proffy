import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import backIcon from '../../assets/images/icons/back.png';
import logImg from '../../assets/images/logo.png';

import styles from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  const { navigate } = useNavigation();
  function handleGoBack() {
    navigate('Landing')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain"/>
        </BorderlessButton>

        <Image source={logImg} resizeMode="contain"></Image>
      </View>

      <Text style={styles.title}>{title}</Text>

      {children}
    </View>
  )
}

export default PageHeader;