import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    profileImage: Attribute.Media;
    ticket: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::ticket.ticket'
    >;
    firstName: Attribute.String;
    lastName: Attribute.String;
    employee: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::employee.employee'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginCustomApiCustomApi extends Schema.CollectionType {
  collectionName: 'custom_apis';
  info: {
    singularName: 'custom-api';
    pluralName: 'custom-apis';
    displayName: 'Custom API';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: true;
    };
    'content-type-builder': {
      visible: true;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'plugin::custom-api.custom-api', 'name'> &
      Attribute.Required;
    selectedContentType: Attribute.JSON;
    structure: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::custom-api.custom-api',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::custom-api.custom-api',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAddressDetailAddressDetail extends Schema.CollectionType {
  collectionName: 'address_details';
  info: {
    singularName: 'address-detail';
    pluralName: 'address-details';
    displayName: 'AddressDetails';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    addressLabel: Attribute.String;
    AddressType: Attribute.Enumeration<['Temporary', 'Permanent']>;
    country: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::country-select.country'>;
    addressLineOne: Attribute.String & Attribute.Required;
    addressLineTwo: Attribute.String;
    city: Attribute.String & Attribute.Required;
    province: Attribute.String & Attribute.Required;
    temp_employee: Attribute.Relation<
      'api::address-detail.address-detail',
      'oneToOne',
      'api::employee.employee'
    >;
    perma_employee: Attribute.Relation<
      'api::address-detail.address-detail',
      'oneToOne',
      'api::employee.employee'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::address-detail.address-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::address-detail.address-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAttendanceInfoAttendanceInfo extends Schema.CollectionType {
  collectionName: 'attendance_infos';
  info: {
    singularName: 'attendance-info';
    pluralName: 'attendance-infos';
    displayName: 'AttendanceInfo';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    inTime: Attribute.Time;
    outTime: Attribute.Time;
    totalHoursWorked: Attribute.Decimal;
    date: Attribute.Date & Attribute.Required;
    attendanceStatus: Attribute.Enumeration<
      ['Present', 'Absent', 'Part Time']
    > &
      Attribute.Required;
    didArriveLate: Attribute.Boolean;
    didArriveEarly: Attribute.Boolean;
    didLeaveEarly: Attribute.Boolean;
    didLeaveLate: Attribute.Boolean;
    lateArrival: Attribute.Time;
    earlyDeparture: Attribute.Time;
    overtimeHours: Attribute.Time;
    remarks: Attribute.Text;
    attendingEmployeeId: Attribute.Relation<
      'api::attendance-info.attendance-info',
      'manyToOne',
      'api::employee.employee'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::attendance-info.attendance-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::attendance-info.attendance-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBankDetailBankDetail extends Schema.CollectionType {
  collectionName: 'bank_details';
  info: {
    singularName: 'bank-detail';
    pluralName: 'bank-details';
    displayName: 'BankDetails';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bankAccountNumber: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 12;
        maxLength: 16;
      }>;
    bankAccountLabel: Attribute.String & Attribute.Required;
    bankAccountHolderName: Attribute.String & Attribute.Required;
    bankName: Attribute.Enumeration<
      [
        'Agriculture Development Bank',
        'Nepal Bank',
        'Rastriya Banijya Bank',
        'Citizens Bank International Limited',
        'Everest Bank',
        'Global IME Bank Limited',
        'Himalayan Bank',
        'Kumari Bank',
        'Laxmi Sunrise Bank',
        'Machhapuchhre Bank',
        'Nabil Bank',
        'Nepal Investment Mega Bank',
        'Nepal SBI Bank',
        'NIC Asia Bank',
        'NMB Bank',
        'Prabhu Bank',
        'Prime Commercial Bank',
        'Sanima Bank',
        'Siddhartha Bank',
        'Standard Chartered Bank'
      ]
    >;
    branchName: Attribute.String & Attribute.Required;
    bankAccountType: Attribute.Enumeration<['Primary', 'Secondary']>;
    employee: Attribute.Relation<
      'api::bank-detail.bank-detail',
      'manyToOne',
      'api::employee.employee'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bank-detail.bank-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bank-detail.bank-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiClientClient extends Schema.CollectionType {
  collectionName: 'clients';
  info: {
    singularName: 'client';
    pluralName: 'clients';
    displayName: 'client';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    companyName: Attribute.String;
    clientContactNumber: Attribute.String;
    clientEmail: Attribute.Email;
    clientAddress: Attribute.String;
    lead: Attribute.Relation<
      'api::client.client',
      'oneToOne',
      'api::lead-company.lead-company'
    >;
    clientContactPersonName: Attribute.String;
    clientContactPersonNumber: Attribute.String;
    clientContactPersonEmail: Attribute.Email;
    projects: Attribute.Relation<
      'api::client.client',
      'oneToMany',
      'api::project.project'
    >;
    logo: Attribute.Media;
    contractDocument: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::client.client',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::client.client',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCommentComment extends Schema.CollectionType {
  collectionName: 'comments';
  info: {
    singularName: 'comment';
    pluralName: 'comments';
    displayName: 'Comment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    comment: Attribute.RichText;
    projectTask: Attribute.Relation<
      'api::comment.comment',
      'manyToOne',
      'api::project-task.project-task'
    >;
    commentingUser: Attribute.Relation<
      'api::comment.comment',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    commentId: Attribute.UID<
      undefined,
      undefined,
      {
        'uuid-format': '';
      }
    > &
      Attribute.CustomField<
        'plugin::strapi-advanced-uuid.uuid',
        {
          'uuid-format': '';
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::comment.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::comment.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCompanyCompany extends Schema.CollectionType {
  collectionName: 'companies';
  info: {
    singularName: 'company';
    pluralName: 'companies';
    displayName: 'Company';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    companyName: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::company.company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::company.company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEducationalQualificationEducationalQualification
  extends Schema.CollectionType {
  collectionName: 'educational_qualifications';
  info: {
    singularName: 'educational-qualification';
    pluralName: 'educational-qualifications';
    displayName: 'Educational-Qualification';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    programName: Attribute.String & Attribute.Required;
    facultyName: Attribute.String;
    level: Attribute.Enumeration<
      ['Plus Two or Equivalent', 'Bachelors', 'Masters', 'MPhil', 'PhD']
    >;
    schoolUniName: Attribute.String;
    employee: Attribute.Relation<
      'api::educational-qualification.educational-qualification',
      'manyToOne',
      'api::employee.employee'
    >;
    startYear: Attribute.Date;
    endYear: Attribute.Date;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::educational-qualification.educational-qualification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::educational-qualification.educational-qualification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmployeeEmployee extends Schema.CollectionType {
  collectionName: 'employees';
  info: {
    singularName: 'employee';
    pluralName: 'employees';
    displayName: 'Employee';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    employeeIdentifier: Attribute.UID &
      Attribute.CustomField<'plugin::strapi-advanced-uuid.uuid'>;
    firstName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
        maxLength: 64;
      }>;
    middleName: Attribute.String;
    lastName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
        maxLength: 64;
      }>;
    userName: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    dateOfBirth: Attribute.Date & Attribute.Required;
    bloodGroup: Attribute.Enumeration<
      [
        'A-Positive',
        'A-Negative',
        'B-Positive',
        'B-Negative',
        'AB-Positive',
        'AB-Negative',
        'O-Positive',
        'O-Negative'
      ]
    > &
      Attribute.Required;
    maritalStatus: Attribute.Enumeration<['Married', 'Unmarried']> &
      Attribute.Required;
    nationality: Attribute.String &
      Attribute.CustomField<'plugin::country-select.country'>;
    existingMedicalCondition: Attribute.String;
    personalIdentificationInfo: Attribute.Relation<
      'api::employee.employee',
      'oneToOne',
      'api::personal-identification-info.personal-identification-info'
    >;
    primaryEmail: Attribute.Email & Attribute.Required & Attribute.Unique;
    temp_address_detail: Attribute.Relation<
      'api::employee.employee',
      'oneToOne',
      'api::address-detail.address-detail'
    >;
    perma_address_detail: Attribute.Relation<
      'api::employee.employee',
      'oneToOne',
      'api::address-detail.address-detail'
    >;
    yearly_leave_details: Attribute.Relation<
      'api::employee.employee',
      'oneToMany',
      'api::yearly-leave-detail.yearly-leave-detail'
    >;
    profileImage: Attribute.Media;
    gender: Attribute.Enumeration<
      ['Male', 'Female', 'Other', 'Prefer Not To Say']
    >;
    performanceAppraisals: Attribute.Relation<
      'api::employee.employee',
      'oneToMany',
      'api::performance-appraisal.performance-appraisal'
    >;
    employeeLunchDetails: Attribute.Relation<
      'api::employee.employee',
      'oneToMany',
      'api::employee-lunch-detail.employee-lunch-detail'
    >;
    bankDetails: Attribute.Relation<
      'api::employee.employee',
      'oneToMany',
      'api::bank-detail.bank-detail'
    >;
    educationalQualifications: Attribute.Relation<
      'api::employee.employee',
      'oneToMany',
      'api::educational-qualification.educational-qualification'
    >;
    attendanceInfos: Attribute.Relation<
      'api::employee.employee',
      'oneToMany',
      'api::attendance-info.attendance-info'
    >;
    projectTasks: Attribute.Relation<
      'api::employee.employee',
      'manyToOne',
      'api::project-task.project-task'
    >;
    receipts: Attribute.Relation<
      'api::employee.employee',
      'oneToMany',
      'api::receipt.receipt'
    >;
    user: Attribute.Relation<
      'api::employee.employee',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::employee.employee',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::employee.employee',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmployeeAdminDatumEmployeeAdminDatum
  extends Schema.CollectionType {
  collectionName: 'employee_admin_data';
  info: {
    singularName: 'employee-admin-datum';
    pluralName: 'employee-admin-data';
    displayName: 'EmployeeAdminData';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    employmentStartDate: Attribute.Date & Attribute.Required;
    payRate: Attribute.Decimal & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::employee-admin-datum.employee-admin-datum',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::employee-admin-datum.employee-admin-datum',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmployeeLunchDetailEmployeeLunchDetail
  extends Schema.CollectionType {
  collectionName: 'employee_lunch_details';
  info: {
    singularName: 'employee-lunch-detail';
    pluralName: 'employee-lunch-details';
    displayName: 'EmployeeLunchDetails';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pendingAmount: Attribute.Decimal &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    startDate: Attribute.Date & Attribute.Required;
    endDate: Attribute.Date & Attribute.Required;
    lunchPeriodName: Attribute.String;
    lunches: Attribute.Relation<
      'api::employee-lunch-detail.employee-lunch-detail',
      'oneToMany',
      'api::lunch.lunch'
    >;
    employee: Attribute.Relation<
      'api::employee-lunch-detail.employee-lunch-detail',
      'manyToOne',
      'api::employee.employee'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::employee-lunch-detail.employee-lunch-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::employee-lunch-detail.employee-lunch-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmployeePastPositionEmployeePastPosition
  extends Schema.CollectionType {
  collectionName: 'employee_past_positions';
  info: {
    singularName: 'employee-past-position';
    pluralName: 'employee-past-positions';
    displayName: 'EmployeePastPositions';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    employee: Attribute.Relation<
      'api::employee-past-position.employee-past-position',
      'oneToOne',
      'api::employee.employee'
    >;
    lineManager: Attribute.Relation<
      'api::employee-past-position.employee-past-position',
      'oneToOne',
      'api::address-detail.address-detail'
    >;
    employmentPosition: Attribute.Relation<
      'api::employee-past-position.employee-past-position',
      'oneToOne',
      'api::employment-position.employment-position'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::employee-past-position.employee-past-position',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::employee-past-position.employee-past-position',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmploymentPositionEmploymentPosition
  extends Schema.CollectionType {
  collectionName: 'employment_positions';
  info: {
    singularName: 'employment-position';
    pluralName: 'employment-positions';
    displayName: 'EmploymentPosition';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    positionTitle: Attribute.String & Attribute.Required;
    positionStartDate: Attribute.Date & Attribute.Required;
    positionEndDate: Attribute.Date;
    positionDescription: Attribute.RichText & Attribute.Required;
    company: Attribute.Relation<
      'api::employment-position.employment-position',
      'oneToOne',
      'api::company.company'
    >;
    signedContract: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::employment-position.employment-position',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::employment-position.employment-position',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmploymentStatusEmploymentStatus
  extends Schema.CollectionType {
  collectionName: 'employment_statuses';
  info: {
    singularName: 'employment-status';
    pluralName: 'employment-statuses';
    displayName: 'EmploymentStatus';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    employee: Attribute.Relation<
      'api::employment-status.employment-status',
      'oneToOne',
      'api::employee.employee'
    >;
    currentlyEmployed: Attribute.Boolean;
    employeePastPositions: Attribute.Relation<
      'api::employment-status.employment-status',
      'oneToMany',
      'api::employee-past-position.employee-past-position'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::employment-status.employment-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::employment-status.employment-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLeadCompanyLeadCompany extends Schema.CollectionType {
  collectionName: 'lead_companies';
  info: {
    singularName: 'lead-company';
    pluralName: 'lead-companies';
    displayName: 'LeadCompany';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    leadCompanyName: Attribute.String;
    leadApproachPlatform: Attribute.Enumeration<
      [
        'Facebook',
        'Messenger',
        'Instagram',
        'LinkedIn',
        'WhatsApp',
        'Google Maps',
        'Website',
        'Team Member',
        'Company Number',
        'Company Email',
        'Other Platform'
      ]
    >;
    leadApproachPlatformOther: Attribute.String;
    leadApproachSource: Attribute.Enumeration<
      ['Ads', 'Client Reference', 'SM Post', 'Offline Platform', 'Other']
    >;
    leadApproachedEmployee: Attribute.Relation<
      'api::lead-company.lead-company',
      'oneToOne',
      'api::employee.employee'
    >;
    leadContactPersonName: Attribute.String;
    leadContactPhoneNumber: Attribute.String;
    leadContactEmail: Attribute.Email;
    remarks: Attribute.Blocks;
    leadOfferings: Attribute.Blocks;
    leadStatus: Attribute.Enumeration<
      [
        'Lead Contacted Team',
        'Team Contacted Lead',
        'Phone Conversation',
        'First Meeting',
        'Quote Sent',
        'Client Interested',
        'Verbal Confirmation',
        'Final Meeting',
        'Contract Signing',
        'Advance Pending',
        'Advance Received',
        'Client Rejected by Agency',
        'Agency Rejected by Client'
      ]
    >;
    approachDate: Attribute.Date;
    sentQuotesAndDocuments: Attribute.Media;
    nextStep: Attribute.Enumeration<
      [
        'Make a Call with the Lead',
        'Send Quote',
        'Go For a Meeting',
        'Send Client Location For Meeting',
        'Follow up on sent Quote',
        'Send Contract',
        'Assign Account'
      ]
    >;
    leadStage: Attribute.Relation<
      'api::lead-company.lead-company',
      'manyToOne',
      'api::lead-stage.lead-stage'
    >;
    leadLogs: Attribute.Component<'lead-logs.lead', true>;
    priority: Attribute.Enumeration<
      ['Low', 'Medium', 'High', 'Critical', 'None']
    >;
    client: Attribute.Relation<
      'api::lead-company.lead-company',
      'oneToOne',
      'api::client.client'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lead-company.lead-company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lead-company.lead-company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLeadStageLeadStage extends Schema.CollectionType {
  collectionName: 'lead_stages';
  info: {
    singularName: 'lead-stage';
    pluralName: 'lead-stages';
    displayName: 'Lead Stage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    leadStageName: Attribute.String;
    leadCompanies: Attribute.Relation<
      'api::lead-stage.lead-stage',
      'oneToMany',
      'api::lead-company.lead-company'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lead-stage.lead-stage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lead-stage.lead-stage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLeaveDetailLeaveDetail extends Schema.CollectionType {
  collectionName: 'leave_details';
  info: {
    singularName: 'leave-detail';
    pluralName: 'leave-details';
    displayName: 'LeaveDetail';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    leaveType: Attribute.Enumeration<
      ['Sick Leave', 'Annual Leave', 'Half Day Leave']
    > &
      Attribute.Required;
    leaveDescriptionMessage: Attribute.Text;
    leaveApplicationForm: Attribute.Media;
    approvingLineManager: Attribute.Relation<
      'api::leave-detail.leave-detail',
      'oneToOne',
      'api::employee.employee'
    >;
    applyingEmployee: Attribute.Relation<
      'api::leave-detail.leave-detail',
      'oneToOne',
      'api::employee.employee'
    >;
    leaveStartDay: Attribute.DateTime & Attribute.Required;
    leaveEndDay: Attribute.DateTime;
    approvalStatus: Attribute.Enumeration<
      ['Decision Pending', 'Approved', 'Rejected']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Decision Pending'>;
    messageFromLineManager: Attribute.Text;
    fiscalYear: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::leave-detail.leave-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::leave-detail.leave-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLunchLunch extends Schema.CollectionType {
  collectionName: 'lunches';
  info: {
    singularName: 'lunch';
    pluralName: 'lunches';
    displayName: 'Lunch';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    lunchDate: Attribute.Date;
    employeeLunchDetail: Attribute.Relation<
      'api::lunch.lunch',
      'manyToOne',
      'api::employee-lunch-detail.employee-lunch-detail'
    >;
    lunch: Attribute.Text;
    hadLunch: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lunch.lunch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lunch.lunch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPerformanceAppraisalPerformanceAppraisal
  extends Schema.CollectionType {
  collectionName: 'performance_appraisals';
  info: {
    singularName: 'performance-appraisal';
    pluralName: 'performance-appraisals';
    displayName: 'PerformanceAppraisal';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    performanceAppraisalDate: Attribute.Date & Attribute.Required;
    performanceAppraisalDetails: Attribute.RichText & Attribute.Required;
    performanceAppraisalSheet: Attribute.Media;
    lineManagerFeedback: Attribute.RichText;
    hrFeedback: Attribute.RichText;
    hrRep: Attribute.Relation<
      'api::performance-appraisal.performance-appraisal',
      'oneToOne',
      'api::employee.employee'
    >;
    appraisalType: Attribute.Enumeration<
      [
        'Annual Appraisal',
        'Quarterly Appraisal',
        'Record of Conversation',
        'Exit Interview'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Quarterly Appraisal'>;
    employee: Attribute.Relation<
      'api::performance-appraisal.performance-appraisal',
      'manyToOne',
      'api::employee.employee'
    >;
    lineManager: Attribute.Relation<
      'api::performance-appraisal.performance-appraisal',
      'oneToOne',
      'api::employee.employee'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::performance-appraisal.performance-appraisal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::performance-appraisal.performance-appraisal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPersonalIdentificationInfoPersonalIdentificationInfo
  extends Schema.CollectionType {
  collectionName: 'personal_identification_infos';
  info: {
    singularName: 'personal-identification-info';
    pluralName: 'personal-identification-infos';
    displayName: 'PersonalIdentificationInfo';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    citizenshipNumber: Attribute.String & Attribute.Required;
    nationalIdNumber: Attribute.String & Attribute.Unique;
    citizenshipIssuedProvince: Attribute.Enumeration<
      [
        'Koshi (Province 1)',
        'Madhesh (Province 2)',
        'Bagmai (Province 3)',
        'Gandaki (Province 4)',
        'Lumbini (Province 5)',
        'Karnali (Province 6)',
        'Sudurpashchim (Province 7)'
      ]
    > &
      Attribute.Required;
    citizenshipIssuedDistrict: Attribute.Enumeration<
      [
        'Achham',
        'Arghakhanchi',
        'Baglung',
        'Baitadi',
        'Bajhang',
        'Bajura',
        'Banke',
        'Bara',
        'Bardiya',
        'Bhaktapur',
        'Bhojpur',
        'Chitwan',
        'Dadeldhura',
        'Dailekh',
        'Dang',
        'Darchula',
        'Dhading',
        'Dhankuta',
        'Dhanusa',
        'Dholkha',
        'Dolpa',
        'Doti',
        'Gorkha',
        'Gulmi',
        'Humla',
        'Ilam',
        'Jajarkot',
        'Jhapa',
        'Jumla',
        'Kailali',
        'Kalikot',
        'Kanchanpur',
        'Kapilvastu',
        'Kaski',
        'Kathmandu',
        'Kavrepalanchok',
        'Khotang',
        'Lalitpur',
        'Lamjung',
        'Mahottari',
        'Makwanpur',
        'Manang',
        'Morang',
        'Mugu',
        'Mustang',
        'Myagdi',
        'Nawalparasi',
        'Nawalpur',
        'Nuwakot',
        'Okhaldhunga',
        'Palpa',
        'Panchthar',
        'Parbat',
        'Parsa',
        'Pyuthan',
        'Ramechhap',
        'Rasuwa',
        'Rautahat',
        'Rolpa',
        'Rukum',
        'Rukum West',
        'Rupandehi',
        'Salyan',
        'Sankhuwasabha',
        'Saptari',
        'Sarlahi',
        'Sindhuli',
        'Sindhupalchok',
        'Siraha',
        'Solukhumbu',
        'Sunsari',
        'Surkhet',
        'Syangja',
        'Tanahu',
        'Taplejung',
        'Terhathum',
        'Udayapur'
      ]
    > &
      Attribute.Required;
    issuedMunicipalRegion: Attribute.String & Attribute.Required;
    citizenshipIssueDate: Attribute.Date & Attribute.Required;
    citizenshipIssueProvince: Attribute.Enumeration<
      [
        'Koshi (Province 1)',
        'Madhesh (Province 2)',
        'Bagmai (Province 3)',
        'Gandaki (Province 4)',
        'Lumbini (Province 5)',
        'Karnali (Province 6)',
        'Sudurpashchim (Province 7)'
      ]
    > &
      Attribute.Required;
    passportNumber: Attribute.String;
    panNumber: Attribute.String & Attribute.Unique;
    panIssueDistrict: Attribute.Enumeration<
      [
        'Achham',
        'Arghakhanchi',
        'Baglung',
        'Baitadi',
        'Bajhang',
        'Bajura',
        'Banke',
        'Bara',
        'Bardiya',
        'Bhaktapur',
        'Bhojpur',
        'Chitwan',
        'Dadeldhura',
        'Dailekh',
        'Dang',
        'Darchula',
        'Dhading',
        'Dhankuta',
        'Dhanusa',
        'Dholkha',
        'Dolpa',
        'Doti',
        'Gorkha',
        'Gulmi',
        'Humla',
        'Ilam',
        'Jajarkot',
        'Jhapa',
        'Jumla',
        'Kailali',
        'Kalikot',
        'Kanchanpur',
        'Kapilvastu',
        'Kaski',
        'Kathmandu',
        'Kavrepalanchok',
        'Khotang',
        'Lalitpur',
        'Lamjung',
        'Mahottari',
        'Makwanpur',
        'Manang',
        'Morang',
        'Mugu',
        'Mustang',
        'Myagdi',
        'Nawalparasi',
        'Nawalpur',
        'Nuwakot',
        'Okhaldhunga',
        'Palpa',
        'Panchthar',
        'Parbat',
        'Parsa',
        'Pyuthan',
        'Ramechhap',
        'Rasuwa',
        'Rautahat',
        'Rolpa',
        'Rukum',
        'Rukum West',
        'Rupandehi',
        'Salyan',
        'Sankhuwasabha',
        'Saptari',
        'Sarlahi',
        'Sindhuli',
        'Sindhupalchok',
        'Siraha',
        'Solukhumbu',
        'Sunsari',
        'Surkhet',
        'Syangja',
        'Tanahu',
        'Taplejung',
        'Terhathum',
        'Udayapur'
      ]
    >;
    panIssueDate: Attribute.Date;
    piiRemarks: Attribute.Text;
    citizenshipScanCopyFront: Attribute.Media;
    panScanCopyFront: Attribute.Media;
    employee: Attribute.Relation<
      'api::personal-identification-info.personal-identification-info',
      'oneToOne',
      'api::employee.employee'
    >;
    citizenshipScanCopyBack: Attribute.Media;
    panScanCopyBack: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::personal-identification-info.personal-identification-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::personal-identification-info.personal-identification-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    singularName: 'project';
    pluralName: 'projects';
    displayName: 'Project';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    projectName: Attribute.String;
    projectDescription: Attribute.RichText;
    startDate: Attribute.Date;
    client: Attribute.Relation<
      'api::project.project',
      'manyToOne',
      'api::client.client'
    >;
    projectUpdates: Attribute.Component<'project.project-stages', true>;
    projectLead: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'api::employee.employee'
    >;
    projectStages: Attribute.Relation<
      'api::project.project',
      'oneToMany',
      'api::project-stage.project-stage'
    >;
    tickets: Attribute.Relation<
      'api::project.project',
      'oneToMany',
      'api::ticket.ticket'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectStageProjectStage extends Schema.CollectionType {
  collectionName: 'project_stages';
  info: {
    singularName: 'project-stage';
    pluralName: 'project-stages';
    displayName: 'Project Stage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    projectStageName: Attribute.String;
    projectTasks: Attribute.Relation<
      'api::project-stage.project-stage',
      'oneToMany',
      'api::project-task.project-task'
    >;
    project: Attribute.Relation<
      'api::project-stage.project-stage',
      'manyToOne',
      'api::project.project'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project-stage.project-stage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project-stage.project-stage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectTaskProjectTask extends Schema.CollectionType {
  collectionName: 'project_tasks';
  info: {
    singularName: 'project-task';
    pluralName: 'project-tasks';
    displayName: 'Project Task';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    taskId: Attribute.UID;
    taskTitle: Attribute.String;
    tags: Attribute.Relation<
      'api::project-task.project-task',
      'manyToMany',
      'api::tag.tag'
    >;
    startDate: Attribute.DateTime;
    endDate: Attribute.DateTime;
    priority: Attribute.Enumeration<['Low', 'Medium', 'High', 'Urgent']>;
    teamMembers: Attribute.Relation<
      'api::project-task.project-task',
      'oneToMany',
      'api::employee.employee'
    >;
    comments: Attribute.Relation<
      'api::project-task.project-task',
      'oneToMany',
      'api::comment.comment'
    >;
    taskDescription: Attribute.RichText;
    projectStage: Attribute.Relation<
      'api::project-task.project-task',
      'manyToOne',
      'api::project-stage.project-stage'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project-task.project-task',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project-task.project-task',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReceiptReceipt extends Schema.CollectionType {
  collectionName: 'receipts';
  info: {
    singularName: 'receipt';
    pluralName: 'receipts';
    displayName: 'Receipt';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    amount: Attribute.Decimal;
    receiptType: Attribute.Enumeration<['Income', 'Expenditure']>;
    transactionType: Attribute.Enumeration<
      [
        'Rent',
        'Utilities',
        'Salaries',
        'Wages',
        'Marketing',
        'Advertising',
        'Office Supplies',
        'Raw Materials',
        'Equipment Maintenance',
        'Insurance',
        'Taxes',
        'Travel Expenses',
        'Professional Fees',
        'Loan Interest',
        'Depreciation',
        'Sales Revenue',
        'Service Fees',
        'Interest Income',
        'Dividend Income',
        'Rental Income',
        'Royalties',
        'Commissions',
        'Grants',
        'Subsidies',
        'Refunds',
        'Investment Income',
        'Membership Fees'
      ]
    >;
    description: Attribute.Text;
    attachment: Attribute.Media;
    employee: Attribute.Relation<
      'api::receipt.receipt',
      'manyToOne',
      'api::employee.employee'
    >;
    billedDate: Attribute.Date;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::receipt.receipt',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::receipt.receipt',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTagTag extends Schema.CollectionType {
  collectionName: 'tags';
  info: {
    singularName: 'tag';
    pluralName: 'tags';
    displayName: 'Tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tagTitle: Attribute.UID;
    tasks: Attribute.Relation<
      'api::tag.tag',
      'manyToMany',
      'api::project-task.project-task'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTicketTicket extends Schema.CollectionType {
  collectionName: 'tickets';
  info: {
    singularName: 'ticket';
    pluralName: 'tickets';
    displayName: 'Ticket';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    project: Attribute.Relation<
      'api::ticket.ticket',
      'manyToOne',
      'api::project.project'
    >;
    attachments: Attribute.Media;
    user: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    parent: Attribute.Relation<
      'api::ticket.ticket',
      'manyToOne',
      'api::ticket.ticket'
    >;
    replies: Attribute.Relation<
      'api::ticket.ticket',
      'oneToMany',
      'api::ticket.ticket'
    >;
    priority: Attribute.Enumeration<['Urgent', 'High', 'Medium', 'Low']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiYearlyLeaveDetailYearlyLeaveDetail
  extends Schema.CollectionType {
  collectionName: 'yearly_leave_details';
  info: {
    singularName: 'yearly-leave-detail';
    pluralName: 'yearly-leave-details';
    displayName: 'YearlyLeaveDetails';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    numberOfAnnualLeaves: Attribute.Integer;
    numberOfSickLeaves: Attribute.Integer;
    fiscalYear: Attribute.String;
    employee: Attribute.Relation<
      'api::yearly-leave-detail.yearly-leave-detail',
      'manyToOne',
      'api::employee.employee'
    >;
    takenAnnualLeaves: Attribute.Decimal &
      Attribute.Required &
      Attribute.DefaultTo<1>;
    takenSickLeaves: Attribute.Decimal &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    takenHalfDayLeaves: Attribute.Decimal;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::yearly-leave-detail.yearly-leave-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::yearly-leave-detail.yearly-leave-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::custom-api.custom-api': PluginCustomApiCustomApi;
      'api::address-detail.address-detail': ApiAddressDetailAddressDetail;
      'api::attendance-info.attendance-info': ApiAttendanceInfoAttendanceInfo;
      'api::bank-detail.bank-detail': ApiBankDetailBankDetail;
      'api::client.client': ApiClientClient;
      'api::comment.comment': ApiCommentComment;
      'api::company.company': ApiCompanyCompany;
      'api::educational-qualification.educational-qualification': ApiEducationalQualificationEducationalQualification;
      'api::employee.employee': ApiEmployeeEmployee;
      'api::employee-admin-datum.employee-admin-datum': ApiEmployeeAdminDatumEmployeeAdminDatum;
      'api::employee-lunch-detail.employee-lunch-detail': ApiEmployeeLunchDetailEmployeeLunchDetail;
      'api::employee-past-position.employee-past-position': ApiEmployeePastPositionEmployeePastPosition;
      'api::employment-position.employment-position': ApiEmploymentPositionEmploymentPosition;
      'api::employment-status.employment-status': ApiEmploymentStatusEmploymentStatus;
      'api::lead-company.lead-company': ApiLeadCompanyLeadCompany;
      'api::lead-stage.lead-stage': ApiLeadStageLeadStage;
      'api::leave-detail.leave-detail': ApiLeaveDetailLeaveDetail;
      'api::lunch.lunch': ApiLunchLunch;
      'api::performance-appraisal.performance-appraisal': ApiPerformanceAppraisalPerformanceAppraisal;
      'api::personal-identification-info.personal-identification-info': ApiPersonalIdentificationInfoPersonalIdentificationInfo;
      'api::project.project': ApiProjectProject;
      'api::project-stage.project-stage': ApiProjectStageProjectStage;
      'api::project-task.project-task': ApiProjectTaskProjectTask;
      'api::receipt.receipt': ApiReceiptReceipt;
      'api::tag.tag': ApiTagTag;
      'api::ticket.ticket': ApiTicketTicket;
      'api::yearly-leave-detail.yearly-leave-detail': ApiYearlyLeaveDetailYearlyLeaveDetail;
    }
  }
}
