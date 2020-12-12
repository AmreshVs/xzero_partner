import React, { useContext } from 'react';
import { Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import Row from 'components/row';
import SafeView from 'components/safeView';
import colors from 'constants/colors';
import ProfileView from './profileView';
import Box from 'components/box';
import { GET_PARTNER } from 'graphql/queries';
import IsLoggedIn from 'hoc/isLoggedIn';
import UserCard from './userCard';
import styles from './styles';
import { UserDataContext } from 'context';

const User = () => {
  const { t } = useTranslation();
  const { userData } = useContext(UserDataContext);
  const { data, loading } = useQuery(GET_PARTNER, {
    variables: {
      ID: Number(userData?.id),
    },
  });

  return (
    <SafeView style={styles.safeView} loading={loading} noTop noBottom>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
      >
        <KeyboardAvoidingView behavior="position">
          <Box>
            <Row hcenter>
              <LinearGradient
                colors={[colors.gradient1, colors.gradient2]}
                style={styles.gradient}
              />
            </Row>
            <Text style={styles.name}>{t('profile')}</Text>
            <Row padding={10} hcenter>
              <UserCard data={data?.partner} />
            </Row>
          </Box>
          <Box style={styles.profileContainer}>
            <ProfileView data={data?.partner} />
          </Box>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeView>
  );
};

export default IsLoggedIn(User);