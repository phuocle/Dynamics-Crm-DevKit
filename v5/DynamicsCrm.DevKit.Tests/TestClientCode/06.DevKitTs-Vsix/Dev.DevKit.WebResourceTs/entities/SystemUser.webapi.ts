/**
 * SystemUser.webapi.ts - SystemUser WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SystemUser
 * All fields return string representation of their values
 */
export interface ISystemUserFormattedValue {
	readonly AccessMode: string;
	readonly ActiveDirectoryGuid: string;
	readonly Address1_AddressId: string;
	readonly Address1_AddressTypeCode: string;
	readonly Address1_City: string;
	readonly Address1_Composite: string;
	readonly Address1_Country: string;
	readonly Address1_County: string;
	readonly Address1_Fax: string;
	readonly Address1_Latitude: string;
	readonly Address1_Line1: string;
	readonly Address1_Line2: string;
	readonly Address1_Line3: string;
	readonly Address1_Longitude: string;
	readonly Address1_Name: string;
	readonly Address1_PostalCode: string;
	readonly Address1_PostOfficeBox: string;
	readonly Address1_ShippingMethodCode: string;
	readonly Address1_StateOrProvince: string;
	readonly Address1_Telephone1: string;
	readonly Address1_Telephone2: string;
	readonly Address1_Telephone3: string;
	readonly Address1_UPSZone: string;
	readonly Address1_UTCOffset: string;
	readonly Address2_AddressId: string;
	readonly Address2_AddressTypeCode: string;
	readonly Address2_City: string;
	readonly Address2_Composite: string;
	readonly Address2_Country: string;
	readonly Address2_County: string;
	readonly Address2_Fax: string;
	readonly Address2_Latitude: string;
	readonly Address2_Line1: string;
	readonly Address2_Line2: string;
	readonly Address2_Line3: string;
	readonly Address2_Longitude: string;
	readonly Address2_Name: string;
	readonly Address2_PostalCode: string;
	readonly Address2_PostOfficeBox: string;
	readonly Address2_ShippingMethodCode: string;
	readonly Address2_StateOrProvince: string;
	readonly Address2_Telephone1: string;
	readonly Address2_Telephone2: string;
	readonly Address2_Telephone3: string;
	readonly Address2_UPSZone: string;
	readonly Address2_UTCOffset: string;
	readonly ApplicationId: string;
	readonly ApplicationIdUri: string;
	readonly AzureActiveDirectoryObjectId: string;
	readonly AzureDeletedOn_UtcDateAndTime: string;
	readonly AzureState: string;
	readonly BusinessUnitId: string;
	readonly CalendarId: string;
	readonly CALType: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DefaultFiltersPopulated: string;
	readonly DefaultMailbox: string;
	readonly DefaultOdbFolderName: string;
	readonly DeletedState: string;
	readonly DisabledReason: string;
	readonly DisplayInServiceViews: string;
	readonly DomainName: string;
	readonly EmailRouterAccessApproval: string;
	readonly EmployeeId: string;
	readonly EntityImage: string;
	readonly EntityImageId: string;
	readonly ExchangeRate: string;
	readonly FirstName: string;
	readonly FullName: string;
	readonly GovernmentId: string;
	readonly HomePhone: string;
	readonly IdentityId: string;
	readonly ImportSequenceNumber: string;
	readonly IncomingEmailDeliveryMethod: string;
	readonly InternalEMailAddress: string;
	readonly InviteStatusCode: string;
	readonly IsActiveDirectoryUser: string;
	readonly IsAllowedByIpFirewall: string;
	readonly IsDisabled: string;
	readonly IsEmailAddressApprovedByO365Admin: string;
	readonly IsIntegrationUser: string;
	readonly IsLicensed: string;
	readonly IsSyncWithDirectory: string;
	readonly JobTitle: string;
	readonly LastName: string;
	readonly LatestUpdateTime_UtcDateAndTime: string;
	readonly MiddleName: string;
	readonly MobileAlertEMail: string;
	readonly MobileOfflineProfileId: string;
	readonly MobilePhone: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly NickName: string;
	readonly OrganizationId: string;
	readonly OutgoingEmailDeliveryMethod: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly ParentSystemUserId: string;
	readonly PassportHi: string;
	readonly PassportLo: string;
	readonly PersonalEMailAddress: string;
	readonly PhotoUrl: string;
	readonly PositionId: string;
	readonly PreferredAddressCode: string;
	readonly PreferredEmailCode: string;
	readonly PreferredPhoneCode: string;
	readonly ProcessId: string;
	readonly QueueId: string;
	readonly Salutation: string;
	readonly SetupUser: string;
	readonly SharePointEmailAddress: string;
	readonly Skills: string;
	readonly StageId: string;
	readonly SystemManagedUserType: string;
	readonly SystemUserId: string;
	readonly TerritoryId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly Title: string;
	readonly TransactionCurrencyId: string;
	readonly TraversedPath: string;
	readonly UserLicenseType: string;
	readonly UserPuid: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
	readonly WindowsLiveID: string;
	readonly YammerEmailAddress: string;
	readonly YammerUserId: string;
	readonly YomiFirstName: string;
	readonly YomiFullName: string;
	readonly YomiLastName: string;
	readonly YomiMiddleName: string;
}

/**
 * SystemUser WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISystemUserApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISystemUserFormattedValue;
	/** Type of user. */
	AccessMode: number | null;
	/** Active Directory object GUID for the system user. */
	readonly ActiveDirectoryGuid: DevKit.Guid | null;
	/** Unique identifier for address 1. */
	Address1_AddressId: DevKit.Guid | null;
	/** Type of address for address 1, such as billing, shipping, or primary address. */
	Address1_AddressTypeCode: number | null;
	/** City name for address 1. */
	Address1_City: string | null;
	/** Shows the complete primary address. */
	readonly Address1_Composite: string | null;
	/** Country/region name in address 1. */
	Address1_Country: string | null;
	/** County name for address 1. */
	Address1_County: string | null;
	/** Fax number for address 1. */
	Address1_Fax: string | null;
	/** Latitude for address 1. */
	Address1_Latitude: number | null;
	/** First line for entering address 1 information. */
	Address1_Line1: string | null;
	/** Second line for entering address 1 information. */
	Address1_Line2: string | null;
	/** Third line for entering address 1 information. */
	Address1_Line3: string | null;
	/** Longitude for address 1. */
	Address1_Longitude: number | null;
	/** Name to enter for address 1. */
	Address1_Name: string | null;
	/** ZIP Code or postal code for address 1. */
	Address1_PostalCode: string | null;
	/** Post office box number for address 1. */
	Address1_PostOfficeBox: string | null;
	/** Method of shipment for address 1. */
	Address1_ShippingMethodCode: number | null;
	/** State or province for address 1. */
	Address1_StateOrProvince: string | null;
	/** First telephone number associated with address 1. */
	Address1_Telephone1: string | null;
	/** Second telephone number associated with address 1. */
	Address1_Telephone2: string | null;
	/** Third telephone number associated with address 1. */
	Address1_Telephone3: string | null;
	/** United Parcel Service (UPS) zone for address 1. */
	Address1_UPSZone: string | null;
	/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
	Address1_UTCOffset: number | null;
	/** Unique identifier for address 2. */
	Address2_AddressId: DevKit.Guid | null;
	/** Type of address for address 2, such as billing, shipping, or primary address. */
	Address2_AddressTypeCode: number | null;
	/** City name for address 2. */
	Address2_City: string | null;
	/** Shows the complete secondary address. */
	readonly Address2_Composite: string | null;
	/** Country/region name in address 2. */
	Address2_Country: string | null;
	/** County name for address 2. */
	Address2_County: string | null;
	/** Fax number for address 2. */
	Address2_Fax: string | null;
	/** Latitude for address 2. */
	Address2_Latitude: number | null;
	/** First line for entering address 2 information. */
	Address2_Line1: string | null;
	/** Second line for entering address 2 information. */
	Address2_Line2: string | null;
	/** Third line for entering address 2 information. */
	Address2_Line3: string | null;
	/** Longitude for address 2. */
	Address2_Longitude: number | null;
	/** Name to enter for address 2. */
	Address2_Name: string | null;
	/** ZIP Code or postal code for address 2. */
	Address2_PostalCode: string | null;
	/** Post office box number for address 2. */
	Address2_PostOfficeBox: string | null;
	/** Method of shipment for address 2. */
	Address2_ShippingMethodCode: number | null;
	/** State or province for address 2. */
	Address2_StateOrProvince: string | null;
	/** First telephone number associated with address 2. */
	Address2_Telephone1: string | null;
	/** Second telephone number associated with address 2. */
	Address2_Telephone2: string | null;
	/** Third telephone number associated with address 2. */
	Address2_Telephone3: string | null;
	/** United Parcel Service (UPS) zone for address 2. */
	Address2_UPSZone: string | null;
	/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
	Address2_UTCOffset: number | null;
	/** The identifier for the application. This is used to access data in another application. */
	ApplicationId: DevKit.Guid | null;
	/** The URI used as a unique logical identifier for the external app. This can be used to validate the application. */
	readonly ApplicationIdUri: string | null;
	/** This is the application directory object Id. */
	readonly AzureActiveDirectoryObjectId: DevKit.Guid | null;
	/** Date and time when the user was set as soft deleted in Azure. */
	readonly AzureDeletedOn_UtcDateAndTime: Date | null;
	/** Azure state of user */
	AzureState: number | null;
	/** Unique identifier of the business unit with which the user is associated. */
	BusinessUnitId: DevKit.Guid | null;
	/** Fiscal calendar associated with the user. */
	CalendarId: DevKit.Guid | null;
	/** License type of user. This is used only in the on-premises version of the product. Online licenses are managed through Microsoft 365 Office Portal */
	CALType: number | null;
	/** Unique identifier of the user who created the user. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the user was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the systemuser. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Indicates if default outlook filters have been populated. */
	readonly DefaultFiltersPopulated: boolean | null;
	/** Select the mailbox associated with this user. */
	readonly DefaultMailbox: DevKit.Guid | null;
	/** Type a default folder name for the user's OneDrive For Business location. */
	readonly DefaultOdbFolderName: string | null;
	/** User delete state */
	readonly DeletedState: number | null;
	/** Reason for disabling the user. */
	readonly DisabledReason: string | null;
	/** Whether to display the user in service views. */
	DisplayInServiceViews: boolean | null;
	/** Active Directory domain of which the user is a member. */
	DomainName: string | null;
	/** Shows the status of the primary email address. */
	EmailRouterAccessApproval: number | null;
	/** Employee identifier for the user. */
	EmployeeId: string | null;
	/** Shows the default image for the record. */
	EntityImage: string | null;
	/** For internal use only. */
	readonly EntityImageId: DevKit.Guid | null;
	/** Exchange rate for the currency associated with the systemuser with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** First name of the user. */
	FirstName: string | null;
	/** Full name of the user. */
	readonly FullName: string | null;
	/** Government identifier for the user. */
	GovernmentId: string | null;
	/** Home phone number for the user. */
	HomePhone: string | null;
	/** For internal use only. */
	readonly IdentityId: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Incoming email delivery method for the user. */
	IncomingEmailDeliveryMethod: number | null;
	/** Internal email address for the user. */
	InternalEMailAddress: string | null;
	/** User invitation status. */
	InviteStatusCode: number | null;
	/** Information about whether the user is an AD user. */
	readonly IsActiveDirectoryUser: boolean | null;
	/** Bypasses the selected user from IP firewall restriction */
	IsAllowedByIpFirewall: boolean | null;
	/** Information about whether the user is enabled. */
	IsDisabled: boolean | null;
	/** Shows the status of approval of the email address by O365 Admin. */
	readonly IsEmailAddressApprovedByO365Admin: boolean | null;
	/** Check if user is an integration user. */
	IsIntegrationUser: boolean | null;
	/** Information about whether the user is licensed. */
	IsLicensed: boolean | null;
	/** Information about whether the user is synced with the directory. */
	IsSyncWithDirectory: boolean | null;
	/** Job title of the user. */
	JobTitle: string | null;
	/** Last name of the user. */
	LastName: string | null;
	/** Time stamp of the latest update for the user */
	readonly LatestUpdateTime_UtcDateAndTime: Date | null;
	/** Middle name of the user. */
	MiddleName: string | null;
	/** Mobile alert email address for the user. */
	MobileAlertEMail: string | null;
	/** Items contained with a particular SystemUser. */
	MobileOfflineProfileId: DevKit.Guid | null;
	/** Mobile phone number for the user. */
	MobilePhone: string | null;
	/** Unique identifier of the user who last modified the user. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the user was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the systemuser. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Nickname of the user. */
	NickName: string | null;
	/** Unique identifier of the organization associated with the user. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Outgoing email delivery method for the user. */
	OutgoingEmailDeliveryMethod: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the manager of the user. */
	ParentSystemUserId: DevKit.Guid | null;
	/** For internal use only. */
	PassportHi: number | null;
	/** For internal use only. */
	PassportLo: number | null;
	/** Personal email address of the user. */
	PersonalEMailAddress: string | null;
	/** URL for the Website on which a photo of the user is located. */
	PhotoUrl: string | null;
	/** User's position in hierarchical security model. */
	PositionId: DevKit.Guid | null;
	/** Preferred address for the user. */
	PreferredAddressCode: number | null;
	/** Preferred email address for the user. */
	PreferredEmailCode: number | null;
	/** Preferred phone number for the user. */
	PreferredPhoneCode: number | null;
	/** Shows the ID of the process. */
	ProcessId: DevKit.Guid | null;
	/** Unique identifier of the default queue for the user. */
	QueueId: DevKit.Guid | null;
	/** Salutation for correspondence with the user. */
	Salutation: string | null;
	/** Check if user is a setup user. */
	SetupUser: boolean | null;
	/** SharePoint Work Email Address */
	SharePointEmailAddress: string | null;
	/** Skill set of the user. */
	Skills: string | null;
	/** Shows the ID of the stage. */
	StageId: DevKit.Guid | null;
	/** The type of user */
	SystemManagedUserType: number | null;
	/** Unique identifier for the user. */
	SystemUserId: DevKit.Guid | null;
	/** Unique identifier of the territory to which the user is assigned. */
	TerritoryId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Title of the user. */
	Title: string | null;
	/** Unique identifier of the currency associated with the systemuser. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Shows the type of user license. */
	UserLicenseType: number | null;
	/**  User PUID User Identifiable Information */
	readonly UserPuid: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the user. */
	readonly VersionNumber: number | null;
	/** Windows Live ID */
	WindowsLiveID: string | null;
	/** User's Yammer login email address */
	YammerEmailAddress: string | null;
	/** User's Yammer ID */
	YammerUserId: string | null;
	/** Pronunciation of the first name of the user, written in phonetic hiragana or katakana characters. */
	YomiFirstName: string | null;
	/** Pronunciation of the full name of the user, written in phonetic hiragana or katakana characters. */
	readonly YomiFullName: string | null;
	/** Pronunciation of the last name of the user, written in phonetic hiragana or katakana characters. */
	YomiLastName: string | null;
	/** Pronunciation of the middle name of the user, written in phonetic hiragana or katakana characters. */
	YomiMiddleName: string | null;
}

const SystemUserFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AccessMode: { logicalName: 'accessmode', type: 'Integer' },
	ActiveDirectoryGuid: { logicalName: 'activedirectoryguid', readOnly: true },
	Address1_AddressId: { logicalName: 'address1_addressid' },
	Address1_AddressTypeCode: { logicalName: 'address1_addresstypecode', type: 'Integer' },
	Address1_City: { logicalName: 'address1_city' },
	Address1_Composite: { logicalName: 'address1_composite', readOnly: true },
	Address1_Country: { logicalName: 'address1_country' },
	Address1_County: { logicalName: 'address1_county' },
	Address1_Fax: { logicalName: 'address1_fax' },
	Address1_Latitude: { logicalName: 'address1_latitude', type: 'Number' },
	Address1_Line1: { logicalName: 'address1_line1' },
	Address1_Line2: { logicalName: 'address1_line2' },
	Address1_Line3: { logicalName: 'address1_line3' },
	Address1_Longitude: { logicalName: 'address1_longitude', type: 'Number' },
	Address1_Name: { logicalName: 'address1_name' },
	Address1_PostalCode: { logicalName: 'address1_postalcode' },
	Address1_PostOfficeBox: { logicalName: 'address1_postofficebox' },
	Address1_ShippingMethodCode: { logicalName: 'address1_shippingmethodcode', type: 'Integer' },
	Address1_StateOrProvince: { logicalName: 'address1_stateorprovince' },
	Address1_Telephone1: { logicalName: 'address1_telephone1' },
	Address1_Telephone2: { logicalName: 'address1_telephone2' },
	Address1_Telephone3: { logicalName: 'address1_telephone3' },
	Address1_UPSZone: { logicalName: 'address1_upszone' },
	Address1_UTCOffset: { logicalName: 'address1_utcoffset', type: 'Integer' },
	Address2_AddressId: { logicalName: 'address2_addressid' },
	Address2_AddressTypeCode: { logicalName: 'address2_addresstypecode', type: 'Integer' },
	Address2_City: { logicalName: 'address2_city' },
	Address2_Composite: { logicalName: 'address2_composite', readOnly: true },
	Address2_Country: { logicalName: 'address2_country' },
	Address2_County: { logicalName: 'address2_county' },
	Address2_Fax: { logicalName: 'address2_fax' },
	Address2_Latitude: { logicalName: 'address2_latitude', type: 'Number' },
	Address2_Line1: { logicalName: 'address2_line1' },
	Address2_Line2: { logicalName: 'address2_line2' },
	Address2_Line3: { logicalName: 'address2_line3' },
	Address2_Longitude: { logicalName: 'address2_longitude', type: 'Number' },
	Address2_Name: { logicalName: 'address2_name' },
	Address2_PostalCode: { logicalName: 'address2_postalcode' },
	Address2_PostOfficeBox: { logicalName: 'address2_postofficebox' },
	Address2_ShippingMethodCode: { logicalName: 'address2_shippingmethodcode', type: 'Integer' },
	Address2_StateOrProvince: { logicalName: 'address2_stateorprovince' },
	Address2_Telephone1: { logicalName: 'address2_telephone1' },
	Address2_Telephone2: { logicalName: 'address2_telephone2' },
	Address2_Telephone3: { logicalName: 'address2_telephone3' },
	Address2_UPSZone: { logicalName: 'address2_upszone' },
	Address2_UTCOffset: { logicalName: 'address2_utcoffset', type: 'Integer' },
	ApplicationId: { logicalName: 'applicationid' },
	ApplicationIdUri: { logicalName: 'applicationiduri', readOnly: true },
	AzureActiveDirectoryObjectId: { logicalName: 'azureactivedirectoryobjectid', readOnly: true },
	AzureDeletedOn_UtcDateAndTime: { logicalName: 'azuredeletedon', readOnly: true, type: 'DateTime' },
	AzureState: { logicalName: 'azurestate', type: 'Integer' },
	BusinessUnitId: { schemaName: 'BusinessUnitId', logicalName: '_businessunitid_value', entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	CalendarId: { schemaName: 'CalendarId', logicalName: '_calendarid_value', entityCollectionName: 'calendars', entityLogicalName: 'calendar' },
	CALType: { logicalName: 'caltype', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DefaultFiltersPopulated: { logicalName: 'defaultfilterspopulated', readOnly: true, type: 'Boolean' },
	DefaultMailbox: { schemaName: 'DefaultMailbox', logicalName: '_defaultmailbox_value', readOnly: true, entityCollectionName: 'mailboxes', entityLogicalName: 'mailbox' },
	DefaultOdbFolderName: { logicalName: 'defaultodbfoldername', readOnly: true },
	DeletedState: { logicalName: 'deletedstate', readOnly: true, type: 'Integer' },
	DisabledReason: { logicalName: 'disabledreason', readOnly: true },
	DisplayInServiceViews: { logicalName: 'displayinserviceviews', type: 'Boolean' },
	DomainName: { logicalName: 'domainname' },
	EmailRouterAccessApproval: { logicalName: 'emailrouteraccessapproval', type: 'Integer' },
	EmployeeId: { logicalName: 'employeeid' },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FirstName: { logicalName: 'firstname' },
	FullName: { logicalName: 'fullname', readOnly: true },
	GovernmentId: { logicalName: 'governmentid' },
	HomePhone: { logicalName: 'homephone' },
	IdentityId: { logicalName: 'identityid', readOnly: true, type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IncomingEmailDeliveryMethod: { logicalName: 'incomingemaildeliverymethod', type: 'Integer' },
	InternalEMailAddress: { logicalName: 'internalemailaddress' },
	InviteStatusCode: { logicalName: 'invitestatuscode', type: 'Integer' },
	IsActiveDirectoryUser: { logicalName: 'isactivedirectoryuser', readOnly: true, type: 'Boolean' },
	IsAllowedByIpFirewall: { logicalName: 'isallowedbyipfirewall', type: 'Boolean' },
	IsDisabled: { logicalName: 'isdisabled', type: 'Boolean' },
	IsEmailAddressApprovedByO365Admin: { logicalName: 'isemailaddressapprovedbyo365admin', readOnly: true, type: 'Boolean' },
	IsIntegrationUser: { logicalName: 'isintegrationuser', type: 'Boolean' },
	IsLicensed: { logicalName: 'islicensed', type: 'Boolean' },
	IsSyncWithDirectory: { logicalName: 'issyncwithdirectory', type: 'Boolean' },
	JobTitle: { logicalName: 'jobtitle' },
	LastName: { logicalName: 'lastname' },
	LatestUpdateTime_UtcDateAndTime: { logicalName: 'latestupdatetime', readOnly: true, type: 'DateTime' },
	MiddleName: { logicalName: 'middlename' },
	MobileAlertEMail: { logicalName: 'mobilealertemail' },
	MobileOfflineProfileId: { schemaName: 'MobileOfflineProfileId', logicalName: '_mobileofflineprofileid_value', entityCollectionName: 'mobileofflineprofiles', entityLogicalName: 'mobileofflineprofile' },
	MobilePhone: { logicalName: 'mobilephone' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	NickName: { logicalName: 'nickname' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	OutgoingEmailDeliveryMethod: { logicalName: 'outgoingemaildeliverymethod', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ParentSystemUserId: { schemaName: 'ParentSystemUserId', logicalName: '_parentsystemuserid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PassportHi: { logicalName: 'passporthi', type: 'Integer' },
	PassportLo: { logicalName: 'passportlo', type: 'Integer' },
	PersonalEMailAddress: { logicalName: 'personalemailaddress' },
	PhotoUrl: { logicalName: 'photourl' },
	PositionId: { schemaName: 'PositionId', logicalName: '_positionid_value', entityCollectionName: 'positions', entityLogicalName: 'position' },
	PreferredAddressCode: { logicalName: 'preferredaddresscode', type: 'Integer' },
	PreferredEmailCode: { logicalName: 'preferredemailcode', type: 'Integer' },
	PreferredPhoneCode: { logicalName: 'preferredphonecode', type: 'Integer' },
	ProcessId: { logicalName: 'processid' },
	QueueId: { schemaName: 'QueueId', logicalName: '_queueid_value', entityCollectionName: 'queues', entityLogicalName: 'queue' },
	Salutation: { logicalName: 'salutation' },
	SetupUser: { logicalName: 'setupuser', type: 'Boolean' },
	SharePointEmailAddress: { logicalName: 'sharepointemailaddress' },
	Skills: { logicalName: 'skills' },
	StageId: { logicalName: 'stageid' },
	SystemManagedUserType: { logicalName: 'systemmanagedusertype', type: 'Integer' },
	SystemUserId: { logicalName: 'systemuserid' },
	TerritoryId: { schemaName: 'TerritoryId', logicalName: '_territoryid_value', entityCollectionName: 'territories', entityLogicalName: 'territory' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Title: { logicalName: 'title' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	TraversedPath: { logicalName: 'traversedpath' },
	UserLicenseType: { logicalName: 'userlicensetype', type: 'Integer' },
	UserPuid: { logicalName: 'userpuid', readOnly: true },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WindowsLiveID: { logicalName: 'windowsliveid' },
	YammerEmailAddress: { logicalName: 'yammeremailaddress' },
	YammerUserId: { logicalName: 'yammeruserid' },
	YomiFirstName: { logicalName: 'yomifirstname' },
	YomiFullName: { logicalName: 'yomifullname', readOnly: true },
	YomiLastName: { logicalName: 'yomilastname' },
	YomiMiddleName: { logicalName: 'yomimiddlename' },
};

/**
 * SystemUser WebApi class for early-bound style coding
 * Usage: const systemUser = new SystemUserApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SystemUserApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISystemUserApi>(entity, 'systemuser', 'systemusers', SystemUserFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SystemUserApi extends ISystemUserApi { }
