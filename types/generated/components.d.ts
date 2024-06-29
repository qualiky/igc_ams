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

export interface LeadLogsLead extends Schema.Component {
  collectionName: 'components_lead_logs_leads';
  info: {
    displayName: 'Lead';
    description: '';
  };
  attributes: {
    activityDescription: Attribute.String;
    assignedEmployee: Attribute.Relation<
      'lead-logs.lead',
      'oneToOne',
      'api::employee.employee'
    >;
    activityDateTime: Attribute.DateTime;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'gender.gender': GenderGender;
      'lead-logs.lead': LeadLogsLead;
    }
  }
}
