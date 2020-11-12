import { gql } from '@apollo/client';

export const GET_PARTNER = gql`
  query Partner($ID: ID!){
    partner(id: $ID){
      id
      username
      email
      mobile_number
      created_at
      center{
        featured_img{
          url
        }
      }
    }
  }
`;

export const SPECIALISTS_BY_CENTER = gql`
  query specialistByCenter($center: Int!){
    specialists(where:{
      category: $center
    }){
      id
      featured_img{
        url
      }
      name_en
      name_ar
      desc_en
      desc_ar
      specialization_en
      specialization_ar
      center{
        place
        city
      }
    }
  }
`;

export const SPECIALIST = gql`
  query specialist($id: ID!){
    specialist(id: $id){
      featured_img{
        url
      }
      name_en
      name_ar
      specialization_en
      specialization_ar
      desc_en
      desc_ar
      mobile_number
      center{
        id
        featured_img{
          url
        }
        title_en
        title_ar
        place
        city
      }
    }
  }
`;

export const NOTIFICATIONS = gql`
  query{
    notifications{
      id
      title_en
      title_ar
      desc_en
      desc_ar
      created_at
    }
  }
`;

export const PRIVACY_POLICY = gql`
  query{
    privacyPolicy{
      privacy_en
      privacy_ar
    }
  }
`;

export const TERMS_AND_CONDITIONS = gql`
  query{
    appBasicInformation{
      app_version
      version_check
      android_app_version
      android_version_check
      iso_app_version
      ios_version_check
    }
  }
`;

export const BASIC_INFORMATION = gql`
  query{
    appBasicInformation{
      app_version,
      version_check
    }
  }
`;

export const CENTER_HOME_DATA = gql`
  query GetCenterHomeData($center_id: Int!){
    getCenterHomeData(center_id: $center_id) {
      counts
      center {
        id
        title_en
        title_ar
        place
        city
        featured_img{
          url
        }
      }
      offers {
        id
        featured_img {
          url
        }
        title_en
        title_ar
        city
        place
        discount
      }
      recentUsers{
        id
        username
        checked_in
        transaction_id
      }
    }
  }
`;

export const USER_CHECK_INS = gql`
  query UserCheckins($center_id: Int!){
    UserCheckins(center_id: $center_id) {
      id
      transaction_id
      user_id{
        username
      }
      created_at
      offer_id{
        id
      }
    }
  }
`;

export const CHECK_IN_DETAIL = gql`
  query CenterCheckinByTransactionId($transaction_id: String!){
    CenterCheckinByTransactionId(transaction_id: $transaction_id) {
      userInfo {
        username
        email
        mobile_number
        created_at
      }
      offers{
        title_en
        title_ar
        original_price
        discounted_price
        discount
      }
    }
  }
`;

export const GET_MEMBERSHIP_INFO = gql`
  query GetMembershipInfo($serial: String!, $where: JSON){
    getMembershipInfo(serial: $serial, where: $where) {
      offer {
        id
        title_en
        title_ar
        desc_en
        desc_ar
        featured_img{
          url
        }
      }
      membership {
        id
        serial
        user{
          id
          username
        }
        expiry
      }
    }
  }
`;

export const OFFERS_DETAIL = gql`
  query offerDetail($offer_id: ID!){
    offer(id: $offer_id){
      id
      discount
      center{
        title_en
        title_ar
      }
      desc_en
      desc_ar
      place
      city
      latitude
      longitude
      mobile_number
      actual_price
      discounted_price
    }
    membershipBenefit{
      text_en
      text_ar
    }
  }
`;

export const OFFERS_LIST = gql`
  query offersList($center: Int!, $user_id: Int!){
    offerListWithFavourites(where:{
      center: $center
    }, user_id: $user_id)
  }
`;