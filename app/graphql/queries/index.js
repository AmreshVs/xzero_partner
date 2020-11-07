import { gql } from '@apollo/client';

export const GET_USER = gql`
  query User($ID: ID!){
    user(id: $ID){
      id
      username
      email
      mobile_number
      blocked
      language
      notification_token
      favourites
      dob
      birthday
      created_at
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query getUsersByEmail($email: String!){
    users(where: {
      email: $email
    }){
      id
      username
      email
      mobile_number
      blocked
      language
      notification_token
      favourites
    }
  }
`;

export const GET_HOME = gql`
  query{
    centersCount: centersConnection{
      aggregate{
        totalCount
      }
    }
    offersCount: offersConnection{
      aggregate{
        totalCount
      }
    }
    banners{
      id
      banner_img{
        url
      }
    }
    categoriesWithCenterCount
    topCenters(where:{
      homescreen: true
    })
  }
`;

export const GET_CENTERS = gql`
  query TopCenters($category: Int!){
    topCenters(where:{
      category: $category
    })
  }
`;

export const OFFERS_LIST = gql`
  query offersList($center: Int!, $user_id: Int!){
    offerListWithFavourites(where:{
      center: $center
    }, user_id: $user_id)
  }
`;

export const OFFERS_DETAIL = gql`
  query offerDetail($offer_id: ID!, $id: Int!, $user_id: Int!){
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
    offerIsFavourite(id: $id, user_id: $user_id)
  }
`;

export const FAVOURITES_BY_USER = gql`
  query favouritesByUser($user_id: Int!){
    favouritesByUser(user_id: $user_id){
      id
      title_en
      title_ar
      desc_en
      desc_ar
      featured_img{ 
        url  
      }
      discount
    }
  }
`;

export const GET_MEMBERSHIP_BY_USER = gql`
  query membershipByUser($user_id: Int!){
    memberships(where:{
      user: $user_id
    }){
      id
      serial
      expiry
      user{
        username
        email
      }
    }
    membershipCardInfo{
			text_en
      text_ar
    }
    membershipBenefit{
      text_en
      text_ar
    }
    basicMembershipAmount{
      currency_code
      amount
      multiplier
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

export const CATEGORIES = gql`
  query{
    categoriesWithCenterCount(specialist: true)
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