//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKitV4 {
	class SystemUserApi {
		/**
		* DynamicsCrm.DevKit SystemUserApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>) : DevKitV4.SystemUserApi;
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Type of user. */
		AccessMode: OptionSet.SystemUser.AccessMode | null;
		/** Active Directory object GUID for the system user. */
		readonly ActiveDirectoryGuid: string | null;
		/** Unique identifier for address 1. */
		Address1_AddressId: string | null;
		/** Type of address for address 1, such as billing, shipping, or primary address. */
		Address1_AddressTypeCode: OptionSet.SystemUser.Address1_AddressTypeCode | null;
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
		Address1_ShippingMethodCode: OptionSet.SystemUser.Address1_ShippingMethodCode | null;
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
		Address2_AddressId: string | null;
		/** Type of address for address 2, such as billing, shipping, or primary address. */
		Address2_AddressTypeCode: OptionSet.SystemUser.Address2_AddressTypeCode | null;
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
		Address2_ShippingMethodCode: OptionSet.SystemUser.Address2_ShippingMethodCode | null;
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
		ApplicationId: string | null;
		/** The URI used as a unique logical identifier for the external app. This can be used to validate the application. */
		readonly ApplicationIdUri: string | null;
		/** This is the application directory object Id. */
		readonly AzureActiveDirectoryObjectId: string | null;
		/** Date and time when the user was set as soft deleted in Azure. */
		readonly AzureDeletedOn_UtcDateAndTime: Date | null;
		/** Azure state of user */
		AzureState: OptionSet.SystemUser.AzureState | null;
		/** Unique identifier of the business unit with which the user is associated. */
		BusinessUnitId: string | null;
		/** Fiscal calendar associated with the user. */
		CalendarId: string | null;
		/** License type of user. This is used only in the on-premises version of the product. Online licenses are managed through Microsoft 365 Office Portal */
		CALType: OptionSet.SystemUser.CALType | null;
		/** Unique identifier of the user who created the user. */
		readonly CreatedBy: string | null;
		/** Date and time when the user was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the systemuser. */
		readonly CreatedOnBehalfBy: string | null;
		/** Indicates if default outlook filters have been populated. */
		readonly DefaultFiltersPopulated: boolean | null;
		/** Select the mailbox associated with this user. */
		readonly DefaultMailbox: string | null;
		/** Type a default folder name for the user's OneDrive For Business location. */
		readonly DefaultOdbFolderName: string | null;
		/** User delete state */
		readonly DeletedState: OptionSet.SystemUser.DeletedState | null;
		/** Reason for disabling the user. */
		readonly DisabledReason: string | null;
		/** Whether to display the user in service views. */
		DisplayInServiceViews: boolean | null;
		/** Active Directory domain of which the user is a member. */
		DomainName: string | null;
		/** Shows the status of the primary email address. */
		EmailRouterAccessApproval: OptionSet.SystemUser.EmailRouterAccessApproval | null;
		/** Employee identifier for the user. */
		EmployeeId: string | null;
		/** Shows the default image for the record. */
		EntityImage: string | null;
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		/** For internal use only. */
		readonly EntityImageId: string | null;
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
		IncomingEmailDeliveryMethod: OptionSet.SystemUser.IncomingEmailDeliveryMethod | null;
		/** Internal email address for the user. */
		InternalEMailAddress: string | null;
		/** User invitation status. */
		InviteStatusCode: OptionSet.SystemUser.InviteStatusCode | null;
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
		MobileOfflineProfileId: string | null;
		/** Mobile phone number for the user. */
		MobilePhone: string | null;
		/** Unique identifier of the user who last modified the user. */
		readonly ModifiedBy: string | null;
		/** Date and time when the user was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the systemuser. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Nickname of the user. */
		NickName: string | null;
		/** Unique identifier of the organization associated with the user. */
		readonly OrganizationId: string | null;
		/** Outgoing email delivery method for the user. */
		OutgoingEmailDeliveryMethod: OptionSet.SystemUser.OutgoingEmailDeliveryMethod | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Unique identifier of the manager of the user. */
		ParentSystemUserId: string | null;
		/** For internal use only. */
		PassportHi: number | null;
		/** For internal use only. */
		PassportLo: number | null;
		/** Personal email address of the user. */
		PersonalEMailAddress: string | null;
		/** URL for the Website on which a photo of the user is located. */
		PhotoUrl: string | null;
		/** User's position in hierarchical security model. */
		PositionId: string | null;
		/** Preferred address for the user. */
		PreferredAddressCode: OptionSet.SystemUser.PreferredAddressCode | null;
		/** Preferred email address for the user. */
		PreferredEmailCode: OptionSet.SystemUser.PreferredEmailCode | null;
		/** Preferred phone number for the user. */
		PreferredPhoneCode: OptionSet.SystemUser.PreferredPhoneCode | null;
		/** Shows the ID of the process. */
		ProcessId: string | null;
		/** Unique identifier of the default queue for the user. */
		QueueId: string | null;
		/** Salutation for correspondence with the user. */
		Salutation: string | null;
		/** Check if user is a setup user. */
		SetupUser: boolean | null;
		/** SharePoint Work Email Address */
		SharePointEmailAddress: string | null;
		/** Skill set of the user. */
		Skills: string | null;
		/** Shows the ID of the stage. */
		StageId: string | null;
		/** The type of user */
		SystemManagedUserType: OptionSet.SystemUser.SystemManagedUserType | null;
		/** Unique identifier for the user. */
		SystemUserId: string | null;
		/** Unique identifier of the territory to which the user is assigned. */
		TerritoryId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Title of the user. */
		Title: string | null;
		/** Unique identifier of the currency associated with the systemuser. */
		TransactionCurrencyId: string | null;
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
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Type of user. */
			readonly AccessMode: string;
			/** Active Directory object GUID for the system user. */
			readonly ActiveDirectoryGuid: string;
			/** Unique identifier for address 1. */
			readonly Address1_AddressId: string;
			/** Type of address for address 1, such as billing, shipping, or primary address. */
			readonly Address1_AddressTypeCode: string;
			/** City name for address 1. */
			readonly Address1_City: string;
			/** Shows the complete primary address. */
			readonly Address1_Composite: string;
			/** Country/region name in address 1. */
			readonly Address1_Country: string;
			/** County name for address 1. */
			readonly Address1_County: string;
			/** Fax number for address 1. */
			readonly Address1_Fax: string;
			/** Latitude for address 1. */
			readonly Address1_Latitude: string;
			/** First line for entering address 1 information. */
			readonly Address1_Line1: string;
			/** Second line for entering address 1 information. */
			readonly Address1_Line2: string;
			/** Third line for entering address 1 information. */
			readonly Address1_Line3: string;
			/** Longitude for address 1. */
			readonly Address1_Longitude: string;
			/** Name to enter for address 1. */
			readonly Address1_Name: string;
			/** ZIP Code or postal code for address 1. */
			readonly Address1_PostalCode: string;
			/** Post office box number for address 1. */
			readonly Address1_PostOfficeBox: string;
			/** Method of shipment for address 1. */
			readonly Address1_ShippingMethodCode: string;
			/** State or province for address 1. */
			readonly Address1_StateOrProvince: string;
			/** First telephone number associated with address 1. */
			readonly Address1_Telephone1: string;
			/** Second telephone number associated with address 1. */
			readonly Address1_Telephone2: string;
			/** Third telephone number associated with address 1. */
			readonly Address1_Telephone3: string;
			/** United Parcel Service (UPS) zone for address 1. */
			readonly Address1_UPSZone: string;
			/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
			readonly Address1_UTCOffset: string;
			/** Unique identifier for address 2. */
			readonly Address2_AddressId: string;
			/** Type of address for address 2, such as billing, shipping, or primary address. */
			readonly Address2_AddressTypeCode: string;
			/** City name for address 2. */
			readonly Address2_City: string;
			/** Shows the complete secondary address. */
			readonly Address2_Composite: string;
			/** Country/region name in address 2. */
			readonly Address2_Country: string;
			/** County name for address 2. */
			readonly Address2_County: string;
			/** Fax number for address 2. */
			readonly Address2_Fax: string;
			/** Latitude for address 2. */
			readonly Address2_Latitude: string;
			/** First line for entering address 2 information. */
			readonly Address2_Line1: string;
			/** Second line for entering address 2 information. */
			readonly Address2_Line2: string;
			/** Third line for entering address 2 information. */
			readonly Address2_Line3: string;
			/** Longitude for address 2. */
			readonly Address2_Longitude: string;
			/** Name to enter for address 2. */
			readonly Address2_Name: string;
			/** ZIP Code or postal code for address 2. */
			readonly Address2_PostalCode: string;
			/** Post office box number for address 2. */
			readonly Address2_PostOfficeBox: string;
			/** Method of shipment for address 2. */
			readonly Address2_ShippingMethodCode: string;
			/** State or province for address 2. */
			readonly Address2_StateOrProvince: string;
			/** First telephone number associated with address 2. */
			readonly Address2_Telephone1: string;
			/** Second telephone number associated with address 2. */
			readonly Address2_Telephone2: string;
			/** Third telephone number associated with address 2. */
			readonly Address2_Telephone3: string;
			/** United Parcel Service (UPS) zone for address 2. */
			readonly Address2_UPSZone: string;
			/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
			readonly Address2_UTCOffset: string;
			/** The identifier for the application. This is used to access data in another application. */
			readonly ApplicationId: string;
			/** The URI used as a unique logical identifier for the external app. This can be used to validate the application. */
			readonly ApplicationIdUri: string;
			/** This is the application directory object Id. */
			readonly AzureActiveDirectoryObjectId: string;
			/** Date and time when the user was set as soft deleted in Azure. */
			readonly AzureDeletedOn_UtcDateAndTime: string;
			/** Azure state of user */
			readonly AzureState: string;
			/** Unique identifier of the business unit with which the user is associated. */
			readonly BusinessUnitId: string;
			/** Fiscal calendar associated with the user. */
			readonly CalendarId: string;
			/** License type of user. This is used only in the on-premises version of the product. Online licenses are managed through Microsoft 365 Office Portal */
			readonly CALType: string;
			/** Unique identifier of the user who created the user. */
			readonly CreatedBy: string;
			/** Date and time when the user was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the systemuser. */
			readonly CreatedOnBehalfBy: string;
			/** Indicates if default outlook filters have been populated. */
			readonly DefaultFiltersPopulated: string;
			/** Select the mailbox associated with this user. */
			readonly DefaultMailbox: string;
			/** Type a default folder name for the user's OneDrive For Business location. */
			readonly DefaultOdbFolderName: string;
			/** User delete state */
			readonly DeletedState: string;
			/** Reason for disabling the user. */
			readonly DisabledReason: string;
			/** Whether to display the user in service views. */
			readonly DisplayInServiceViews: string;
			/** Active Directory domain of which the user is a member. */
			readonly DomainName: string;
			/** Shows the status of the primary email address. */
			readonly EmailRouterAccessApproval: string;
			/** Employee identifier for the user. */
			readonly EmployeeId: string;
			/** Shows the default image for the record. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Exchange rate for the currency associated with the systemuser with respect to the base currency. */
			readonly ExchangeRate: string;
			/** First name of the user. */
			readonly FirstName: string;
			/** Full name of the user. */
			readonly FullName: string;
			/** Government identifier for the user. */
			readonly GovernmentId: string;
			/** Home phone number for the user. */
			readonly HomePhone: string;
			/** For internal use only. */
			readonly IdentityId: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Incoming email delivery method for the user. */
			readonly IncomingEmailDeliveryMethod: string;
			/** Internal email address for the user. */
			readonly InternalEMailAddress: string;
			/** User invitation status. */
			readonly InviteStatusCode: string;
			/** Information about whether the user is an AD user. */
			readonly IsActiveDirectoryUser: string;
			/** Bypasses the selected user from IP firewall restriction */
			readonly IsAllowedByIpFirewall: string;
			/** Information about whether the user is enabled. */
			readonly IsDisabled: string;
			/** Shows the status of approval of the email address by O365 Admin. */
			readonly IsEmailAddressApprovedByO365Admin: string;
			/** Check if user is an integration user. */
			readonly IsIntegrationUser: string;
			/** Information about whether the user is licensed. */
			readonly IsLicensed: string;
			/** Information about whether the user is synced with the directory. */
			readonly IsSyncWithDirectory: string;
			/** Job title of the user. */
			readonly JobTitle: string;
			/** Last name of the user. */
			readonly LastName: string;
			/** Time stamp of the latest update for the user */
			readonly LatestUpdateTime_UtcDateAndTime: string;
			/** Middle name of the user. */
			readonly MiddleName: string;
			/** Mobile alert email address for the user. */
			readonly MobileAlertEMail: string;
			/** Items contained with a particular SystemUser. */
			readonly MobileOfflineProfileId: string;
			/** Mobile phone number for the user. */
			readonly MobilePhone: string;
			/** Unique identifier of the user who last modified the user. */
			readonly ModifiedBy: string;
			/** Date and time when the user was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the systemuser. */
			readonly ModifiedOnBehalfBy: string;
			/** Nickname of the user. */
			readonly NickName: string;
			/** Unique identifier of the organization associated with the user. */
			readonly OrganizationId: string;
			/** Outgoing email delivery method for the user. */
			readonly OutgoingEmailDeliveryMethod: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique identifier of the manager of the user. */
			readonly ParentSystemUserId: string;
			/** For internal use only. */
			readonly PassportHi: string;
			/** For internal use only. */
			readonly PassportLo: string;
			/** Personal email address of the user. */
			readonly PersonalEMailAddress: string;
			/** URL for the Website on which a photo of the user is located. */
			readonly PhotoUrl: string;
			/** User's position in hierarchical security model. */
			readonly PositionId: string;
			/** Preferred address for the user. */
			readonly PreferredAddressCode: string;
			/** Preferred email address for the user. */
			readonly PreferredEmailCode: string;
			/** Preferred phone number for the user. */
			readonly PreferredPhoneCode: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Unique identifier of the default queue for the user. */
			readonly QueueId: string;
			/** Salutation for correspondence with the user. */
			readonly Salutation: string;
			/** Check if user is a setup user. */
			readonly SetupUser: string;
			/** SharePoint Work Email Address */
			readonly SharePointEmailAddress: string;
			/** Skill set of the user. */
			readonly Skills: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** The type of user */
			readonly SystemManagedUserType: string;
			/** Unique identifier for the user. */
			readonly SystemUserId: string;
			/** Unique identifier of the territory to which the user is assigned. */
			readonly TerritoryId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Title of the user. */
			readonly Title: string;
			/** Unique identifier of the currency associated with the systemuser. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Shows the type of user license. */
			readonly UserLicenseType: string;
			/**  User PUID User Identifiable Information */
			readonly UserPuid: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the user. */
			readonly VersionNumber: string;
			/** Windows Live ID */
			readonly WindowsLiveID: string;
			/** User's Yammer login email address */
			readonly YammerEmailAddress: string;
			/** User's Yammer ID */
			readonly YammerUserId: string;
			/** Pronunciation of the first name of the user, written in phonetic hiragana or katakana characters. */
			readonly YomiFirstName: string;
			/** Pronunciation of the full name of the user, written in phonetic hiragana or katakana characters. */
			readonly YomiFullName: string;
			/** Pronunciation of the last name of the user, written in phonetic hiragana or katakana characters. */
			readonly YomiLastName: string;
			/** Pronunciation of the middle name of the user, written in phonetic hiragana or katakana characters. */
			readonly YomiMiddleName: string;
		}
	}
}
declare namespace OptionSet {
	namespace SystemUser {
		enum AccessMode {
			/** Administrative = 1*/
			Administrative = 1,
			/** Delegated_Admin = 5*/
			Delegated_Admin = 5,
			/** Non_interactive = 4*/
			Non_interactive = 4,
			/** Read = 2*/
			Read = 2,
			/** Read_Write = 0*/
			Read_Write = 0,
			/** Support_User = 3*/
			Support_User = 3
		}
		enum Address1_AddressTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address1_ShippingMethodCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address2_AddressTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address2_ShippingMethodCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum AzureState {
			/** Exists = 0*/
			Exists = 0,
			/** Not_found_or_hard_deleted = 2*/
			Not_found_or_hard_deleted = 2,
			/** Soft_deleted = 1*/
			Soft_deleted = 1
		}
		enum CALType {
			/** Administrative = 1*/
			Administrative = 1,
			/** Basic = 2*/
			Basic = 2,
			/** Device_Basic = 4*/
			Device_Basic = 4,
			/** Device_Enterprise = 8*/
			Device_Enterprise = 8,
			/** Device_Essential = 6*/
			Device_Essential = 6,
			/** Device_Professional = 3*/
			Device_Professional = 3,
			/** Enterprise = 7*/
			Enterprise = 7,
			/** Essential = 5*/
			Essential = 5,
			/** Field_Service = 11*/
			Field_Service = 11,
			/** Professional = 0*/
			Professional = 0,
			/** Project_Service = 12*/
			Project_Service = 12,
			/** Sales = 9*/
			Sales = 9,
			/** Service = 10*/
			Service = 10
		}
		enum DeletedState {
			/** Not_deleted = 0*/
			Not_deleted = 0,
			/** Soft_deleted = 1*/
			Soft_deleted = 1
		}
		enum EmailRouterAccessApproval {
			/** Approved = 1*/
			Approved = 1,
			/** Empty = 0*/
			Empty = 0,
			/** Pending_Approval = 2*/
			Pending_Approval = 2,
			/** Rejected = 3*/
			Rejected = 3
		}
		enum IncomingEmailDeliveryMethod {
			/** Forward_Mailbox = 3*/
			Forward_Mailbox = 3,
			/** Microsoft_Dynamics_365_for_Outlook = 1*/
			Microsoft_Dynamics_365_for_Outlook = 1,
			/** None = 0*/
			None = 0,
			/** Server_Side_Synchronization_or_Email_Router = 2*/
			Server_Side_Synchronization_or_Email_Router = 2
		}
		enum InviteStatusCode {
			/** Invitation_Accepted = 4*/
			Invitation_Accepted = 4,
			/** Invitation_Expired = 3*/
			Invitation_Expired = 3,
			/** Invitation_Near_Expired = 2*/
			Invitation_Near_Expired = 2,
			/** Invitation_Not_Sent = 0*/
			Invitation_Not_Sent = 0,
			/** Invitation_Rejected = 5*/
			Invitation_Rejected = 5,
			/** Invitation_Revoked = 6*/
			Invitation_Revoked = 6,
			/** Invited = 1*/
			Invited = 1
		}
		enum OutgoingEmailDeliveryMethod {
			/** Microsoft_Dynamics_365_for_Outlook = 1*/
			Microsoft_Dynamics_365_for_Outlook = 1,
			/** None = 0*/
			None = 0,
			/** Server_Side_Synchronization_or_Email_Router = 2*/
			Server_Side_Synchronization_or_Email_Router = 2
		}
		enum PreferredAddressCode {
			/** Mailing_Address = 1*/
			Mailing_Address = 1,
			/** Other_Address = 2*/
			Other_Address = 2
		}
		enum PreferredEmailCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum PreferredPhoneCode {
			/** Home_Phone = 3*/
			Home_Phone = 3,
			/** Main_Phone = 1*/
			Main_Phone = 1,
			/** Mobile_Phone = 4*/
			Mobile_Phone = 4,
			/** Other_Phone = 2*/
			Other_Phone = 2
		}
		enum SystemManagedUserType {
			/** C2_User = 1*/
			C2_User = 1,
			/** Entra_User = 0*/
			Entra_User = 0,
			/** Impersonable_Stub_User = 2*/
			Impersonable_Stub_User = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}