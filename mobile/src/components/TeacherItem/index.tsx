import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem () {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://avatars0.githubusercontent.com/u/59416393?s=460&u=028ddf3943aa1e534f6f552dc60362d7cfbd72e4&v=4'}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Eloilson dos Anjos</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Apaixonado por tecnologia e baterista nas horas vagas.
        {'\n'}{'\n'}
        Disposto a compartilhar o aprendizado e ajudar as pessoas a resolverem seus problemas, sempre com bom humor.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>
      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.favoriteButton, styles.favorited]}>
          {/* <Image source={heartOutlineIcon}/> */}
          <Image source={unfavoriteIcon}/>
        </RectButton>

        <RectButton style={styles.contactButton}>
          <Image source={whatsappIcon}/>
          <Text style={styles.contactButtonText}>
            Entrar em contato
          </Text>
        </RectButton>

      </View>
      </View>
    </View>
  )
}

export default TeacherItem;
