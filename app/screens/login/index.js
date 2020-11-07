import React, { useState } from 'react';
import { Text, Image, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Formik } from 'formik';
import { useApolloClient } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import Constants from 'expo-constants';

import SafeView from 'components/safeView';
import VHCenter from 'components/vhCenter';
import Textbox from 'components/textbox';
import Button from 'components/button';
import HeadingCaption from 'components/headingCaption';
import FormError from 'components/formError';
import styles from './styles';
import facebookLogin from './facebookLogin';
import googleSignin from './googleLogin';
import { inputsValidationSchema, saveUserDataLocally } from './helpers';
import { ToastMsg } from 'components/toastMsg';
import { SIGNUP_SCREEN, HOME_SCREEN, FORGOT_PASSWORD, DRAWER_TERMS } from 'navigation/routes';
import { GET_USER_BY_EMAIL } from 'graphql/queries';
import { USER_LOGIN, CREATE_USER, UPDATE_NOTIFICATION_TOKEN } from 'graphql/mutations';
import { getNotificationToken } from '../../../helpers';
import { SOCIAL_TOKEN, ERROR_OCCURED } from 'constants/common';
import Row from 'components/row';
import AppleLoginButton from './appleLogin';

export default function Login({ navigation }) {
  const { t, i18n } = useTranslation();
  let language = i18n.language;
  const [loading, setLoading] = useState(false);
  const client = useApolloClient();

  const handleSubmit = async (values) => {
    setLoading(true);
    const { data: response, errors } = await client.mutate({
      mutation: USER_LOGIN,
      variables: {
        identifier: values.email,
        password: values.password,
        app_version: '',
        platform: '',
      },
    });

    let loginData = response?.userlogin;
    setLoading(false);

    if (errors && errors[0]?.extensions?.exception?.code === 400) {
      ToastMsg(errors[0]?.extensions?.exception?.data?.data[0].messages[0].message);
      return;
    }

    if (loginData && loginData?.user) {
      await saveUserDataLocally('xzero_user', loginData?.user);
      await saveUserDataLocally('xzero_jwt', loginData?.jwt);
      navigation.replace(HOME_SCREEN);
      updateNotificationToken(loginData?.user?.id);
    }
  };

  const updateNotificationToken = async (id, provider = 'local') => {
    const token = await getNotificationToken();
    const platform = Platform.OS;
    const app_version = Constants.nativeAppVersion;
    if (token) {
      await client.mutate({
        mutation: UPDATE_NOTIFICATION_TOKEN,
        variables: {
          user_id: Number(id),
          notification_token: token,
          app_version,
          platform,
          provider,
        },
      });
    }
  };

  const handleSocialLogin = async (type, data) => {
    let socialData =
      type === 'fb' ? await facebookLogin() : type === 'g' ? await googleSignin() : null;

    if (type === 'apple') {
      socialData = data;
    }

    if (socialData !== null && socialData !== 'error') {
      setLoading(true);
      const { data } = await client.query({
        query: GET_USER_BY_EMAIL,
        variables: { email: socialData.email },
      });
      setLoading(false);
      if (data?.users.length === 0) {
        await handleCreateUser(socialData, type);
      } else {
        // Login user, if already signed in
        handleSubmit({ ...socialData, password: socialData.email + SOCIAL_TOKEN });
      }
    } else {
      setLoading(false);
      ToastMsg(ERROR_OCCURED);
    }
  };

  const handleCreateUser = async (values, provider) => {
    setLoading(true);
    const token = (await getNotificationToken()) || '';

    try {
      let { data, errors } = await client.mutate({
        mutation: CREATE_USER,
        variables: {
          username: values?.username,
          email: values?.email,
          password: values?.email + SOCIAL_TOKEN,
          mobile_number: Number(0),
          notification_token: String(token) || '',
        },
      });
      setLoading(false);

      if (errors && errors[0]?.extensions?.exception?.code === 400) {
        ToastMsg(errors[0].message);
        return;
      }

      if (data && data?.createNewUser?.jwt) {
        saveUserDataLocally('xzero_jwt', data?.createNewUser?.jwt);
        saveUserDataLocally('xzero_user', data?.createNewUser?.user);
        navigation.replace(HOME_SCREEN);
        await updateNotificationToken(data?.createNewUser?.user?.id, provider);
      }
    } catch (error) {
      if (loading) {
        setLoading(!loading);
      }
      ToastMsg(ERROR_OCCURED);
    }
  };

  const RenderTerms = () => {
    let termsArray = [
      <Text style={styles.terms} onPress={() => navigation.replace(HOME_SCREEN)} key={0}>
        {t('by_signing_in')}
      </Text>,
      <Text
        style={styles.termsLink}
        onPress={() => navigation.navigate(DRAWER_TERMS, { login: true })}
        key={1}
      >
        {t('terms')}
      </Text>,
    ];

    return languageOrder(termsArray);
  };

  const RenderNoAccount = () => {
    let noAccArr = [
      <Text key={0}>{t('no_account')}</Text>,
      <Text key={1} style={styles.signup} onPress={() => navigation.push(SIGNUP_SCREEN)}>
        {t('signup')}
      </Text>,
    ];

    return languageOrder(noAccArr);
  };

  const languageOrder = (langArr) => {
    if (language === 'en') {
      return langArr;
    } else {
      return [langArr[1], langArr[0]];
    }
  };

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={-250} behavior={'position'}>
      <SafeView style={styles.container}>
        <ScrollView removeClippedSubviews={true}>
          <VHCenter>
            <Image source={require('../../../assets/logo.png')} style={styles.logo} />
            <HeadingCaption heading={t('welcome')} caption={t('login_note')} />
            <View style={styles.inputsContainer}>
              <Formik
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={inputsValidationSchema}
                initialValues={{
                  email: '',
                  password: '',
                }}
              >
                {({
                  values,
                  handleChange,
                  errors,
                  touched,
                  setFieldTouched,
                  isValid,
                  handleSubmit,
                }) => (
                    <>
                      <Textbox
                        placeholder="Email"
                        icon="at"
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={() => setFieldTouched('email')}
                        autoCapitalize="none"
                      />
                      <FormError touched={touched.email} errorText={errors.email} />
                      <Textbox
                        placeholder="Password"
                        icon="key"
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={() => setFieldTouched('password')}
                        autoCapitalize="none"
                        secureTextEntry
                      />
                      <FormError touched={touched.password} errorText={errors.password} />
                      <Text
                        style={styles.forgotPassword}
                        onPress={() => navigation.push(FORGOT_PASSWORD)}
                      >
                        {t('forgot_password')}
                      </Text>
                      <Button
                        icon="sign-in-alt"
                        onPress={() => handleSubmit()}
                        disabled={!isValid}
                        loading={loading}
                      >
                        {t('login')}
                      </Button>
                    </>
                  )}
              </Formik>
              <View style={styles.noAccount}>
                <RenderNoAccount />
              </View>
            </View>
            <View style={styles.socialLoginContainer}>
              <Text style={styles.loginOptionText}>{t('login_using')}</Text>
              {Platform.OS !== 'ios' && (
                <View style={styles.btnContainer}>
                  <Button
                    width="48%"
                    icon={faFacebookF}
                    color="#3b5998"
                    iconColor="#3b5998"
                    onPress={() => handleSocialLogin('fb')}
                    outline
                  >
                    {t('facebook')}
                  </Button>
                  <Button
                    width="48%"
                    icon={faGoogle}
                    color="#db3236"
                    iconColor="#db3236"
                    onPress={() => handleSocialLogin('g')}
                    outline
                  >
                    {t('google')}
                  </Button>
                </View>
              )}
              {Platform.OS === 'ios' && (
                <Row>
                  <AppleLoginButton handleSocialLogin={handleSocialLogin} />
                </Row>
              )}
            </View>
            <Row style={styles.termsContainer}>
              <RenderTerms />
            </Row>
          </VHCenter>
          <Text style={styles.skip} onPress={() => navigation.replace(HOME_SCREEN)}>
            {t('skip')}
          </Text>
        </ScrollView>
      </SafeView>
    </KeyboardAvoidingView>
  );
}
