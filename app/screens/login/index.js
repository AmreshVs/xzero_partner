import React, { useState, useContext } from 'react';
import { Text, Image, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { useApolloClient } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import SafeView from 'components/safeView';
import Textbox from 'components/textbox';
import Button from 'components/button';
import HeadingCaption from 'components/headingCaption';
import FormError from 'components/formError';
import Row from 'components/row';
import { inputsValidationSchema, saveUserDataLocally } from './helpers';
import { ToastMsg } from 'components/toastMsg';
import { HOME_SCREEN, DRAWER_TERMS } from 'navigation/routes';
import { PARTNER_LOGIN } from 'graphql/mutations';
import styles from './styles';
import { UserDataContext } from 'context';

export default function Login({ navigation }) {
  const { t, i18n } = useTranslation();
  let language = i18n.language;
  const [loading, setLoading] = useState(false);
  const client = useApolloClient();
  const { setUserData } = useContext(UserDataContext);

  const handleSubmit = async (values) => {
    setLoading(true);
    const { data: response, errors } = await client.mutate({
      mutation: PARTNER_LOGIN,
      variables: {
        email: values.email,
        password: values.password,
      },
    });

    let loginData = response?.partnerLogin;

    setUserData({
      jwt: loginData?.jwt,
      center_id: loginData?.user?.center?.id,
      id: loginData?.user?.id,
      email: loginData?.user?.email
    });

    setLoading(false);

    if (errors && errors[0]?.extensions?.exception?.code === 400) {
      ToastMsg(errors[0]?.extensions?.exception?.data?.data[0].messages[0].message);
      return;
    }

    if (loginData && loginData?.user) {
      await saveUserDataLocally('xzero_user', loginData?.user);
      await saveUserDataLocally('xzero_jwt', loginData?.jwt);
      navigation.replace(HOME_SCREEN);
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
        <ScrollView contentContainerStyle={styles.scrollContainer} removeClippedSubviews={true}>
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
                    <View style={styles.button}>
                      <Button
                        icon="sign-in-alt"
                        onPress={() => handleSubmit()}
                        disabled={!isValid}
                        loading={loading}
                      >
                        {t('login')}
                      </Button>
                    </View>
                  </>
                )}
            </Formik>
          </View>
          <Row style={styles.termsContainer}>
            <RenderTerms />
          </Row>
        </ScrollView>
      </SafeView>
    </KeyboardAvoidingView>
  );
}
