import type { Schema, Attribute } from '@strapi/strapi';

export interface EducationalQualificationEducationalQualification
  extends Schema.Component {
  collectionName: 'components_educational_qualification_educational_qualifications';
  info: {
    displayName: 'EducationalQualification';
    icon: 'briefcase';
  };
  attributes: {
    programName: Attribute.String & Attribute.Required;
    facultyName: Attribute.String & Attribute.Required;
    level: Attribute.Enumeration<
      ['Plus Two or Equivalent', 'Bachelors', 'Masters', 'MPhil', 'PhD']
    > &
      Attribute.Required;
  };
}

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
      'educational-qualification.educational-qualification': EducationalQualificationEducationalQualification;
      'gender.gender': GenderGender;
    }
  }
}
