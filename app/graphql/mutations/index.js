import { gql } from '@apollo/client';

export const UPDATE_NOTIFICATION_TOKEN = gql`
  mutation updateNotificationToken($user_id: ID!, $notification_token: String!, $app_version: String, $platform: String, $provider: String ){
    updateUser(input: {
      where: {
        id: $user_id
      },
      data: {
        notification_token: $notification_token,
        app_version: $app_version,
        platform: $platform,
        provider: $provider
      }
    }){
      user{
        id
        notification_token
      }
    }
  }
`;

export const PARTNER_LOGIN = gql`
  mutation partnerLogin($email: String!, $password: String!){
    partnerLogin(input:{
      email: $email,
      password: $password
    }){
      jwt
      user{
        id
        username
        email
        mobile_number
        center{
          id
        }
      }
    }
  }
`;

export const CENTER_CHECK_IN = gql`
  mutation Checkin($user_id: Int!, $center_id: Int!, $offers: String!){
    Checkin(
      user_id: $user_id,
      center_id: $center_id,
      offers: $offers
    ){
      id
      transaction_id
    }
  }
`;