import type { Schema, Attribute } from '@strapi/strapi';

export interface GenderGender extends Schema.Component {
  collectionName: 'components_gender_genders';
  info: {
    displayName: 'Gender';
    icon: 'user';
  };
  attributes: {
    genderType: Attribute.Enumeration<
      ['Male', 'Female', 'Others', 'Prefer Not to Say']
    > &
      Attribute.Required;
    customGenderType: Attribute.String;
    pronouns: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'gender.gender': GenderGender;
    }
  }
}
