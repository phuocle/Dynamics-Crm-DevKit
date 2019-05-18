///<reference path='devkit.d.ts' />
declare namespace Rocket {
	interface SystemUserOptionSet {
		RollupState: {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated: number,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated: number,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError: number,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError: number,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded: number,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached: number,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected: number
		},
		AccessMode: {
			/** 0 */
			Read_Write: number,
			/** 1 */
			Administrative: number,
			/** 2 */
			Read: number,
			/** 3 */
			Support_User: number,
			/** 4 */
			Non_interactive: number,
			/** 5 */
			Delegated_Admin: number
		},
		Address1_AddressTypeCode: {
			/** 1 */
			Default_Value: number
		},
		Address1_ShippingMethodCode: {
			/** 1 */
			Default_Value: number
		},
		Address2_AddressTypeCode: {
			/** 1 */
			Default_Value: number
		},
		Address2_ShippingMethodCode: {
			/** 1 */
			Default_Value: number
		},
		CALType: {
			/** 0 */
			Professional: number,
			/** 1 */
			Administrative: number,
			/** 2 */
			Basic: number,
			/** 3 */
			Device_Professional: number,
			/** 4 */
			Device_Basic: number,
			/** 5 */
			Essential: number,
			/** 6 */
			Device_Essential: number,
			/** 7 */
			Enterprise: number,
			/** 8 */
			Device_Enterprise: number,
			/** 9 */
			Sales: number,
			/** 10 */
			Service: number,
			/** 11 */
			Field_Service: number,
			/** 12 */
			Project_Service: number
		},
		EmailRouterAccessApproval: {
			/** 0 */
			Empty: number,
			/** 1 */
			Approved: number,
			/** 2 */
			Pending_Approval: number,
			/** 3 */
			Rejected: number
		},
		IncomingEmailDeliveryMethod: {
			/** 0 */
			None: number,
			/** 1 */
			Microsoft_Dynamics_365_for_Outlook: number,
			/** 2 */
			Server_Side_Synchronization_or_Email_Router: number,
			/** 3 */
			Forward_Mailbox: number
		},
		InviteStatusCode: {
			/** 0 */
			Invitation_Not_Sent: number,
			/** 1 */
			Invited: number,
			/** 2 */
			Invitation_Near_Expired: number,
			/** 3 */
			Invitation_Expired: number,
			/** 4 */
			Invitation_Accepted: number,
			/** 5 */
			Invitation_Rejected: number,
			/** 6 */
			Invitation_Revoked: number
		},
		OutgoingEmailDeliveryMethod: {
			/** 0 */
			None: number,
			/** 1 */
			Microsoft_Dynamics_365_for_Outlook: number,
			/** 2 */
			Server_Side_Synchronization_or_Email_Router: number
		},
		PreferredAddressCode: {
			/** 1 */
			Mailing_Address: number,
			/** 2 */
			Other_Address: number
		},
		PreferredEmailCode: {
			/** 1 */
			Default_Value: number
		},
		PreferredPhoneCode: {
			/** 1 */
			Main_Phone: number,
			/** 2 */
			Other_Phone: number,
			/** 3 */
			Home_Phone: number,
			/** 4 */
			Mobile_Phone: number
		}
	}
	class SystemUserApi {
		constructor(entity?: object);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi optionset
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): object;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi optionset
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity of ODATA */
		Entity: object;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** A collection OptionSet of SystemUser enttiy */
		OptionSet: SystemUserOptionSet;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Type of user. */
		AccessMode: DevKit.WebApi.OptionSetValue;
		/** ReadOnly - Active Directory object GUID for the system user. */
		ActiveDirectoryGuid: DevKit.WebApi.GuidValue;
		/** Unique identifier for address 1. */
		Address1_AddressId: DevKit.WebApi.GuidValue;
		/** Type of address for address 1, such as billing, shipping, or primary address. */
		Address1_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** City name for address 1. */
		Address1_City: DevKit.WebApi.StringValue;
		/** ReadOnly - Shows the complete primary address. */
		Address1_Composite: DevKit.WebApi.StringValue;
		/** Country/region name in address 1. */
		Address1_Country: DevKit.WebApi.StringValue;
		/** County name for address 1. */
		Address1_County: DevKit.WebApi.StringValue;
		/** Fax number for address 1. */
		Address1_Fax: DevKit.WebApi.StringValue;
		/** Latitude for address 1. */
		Address1_Latitude: DevKit.WebApi.DoubleValue;
		/** First line for entering address 1 information. */
		Address1_Line1: DevKit.WebApi.StringValue;
		/** Second line for entering address 1 information. */
		Address1_Line2: DevKit.WebApi.StringValue;
		/** Third line for entering address 1 information. */
		Address1_Line3: DevKit.WebApi.StringValue;
		/** Longitude for address 1. */
		Address1_Longitude: DevKit.WebApi.DoubleValue;
		/** Name to enter for address 1. */
		Address1_Name: DevKit.WebApi.StringValue;
		/** ZIP Code or postal code for address 1. */
		Address1_PostalCode: DevKit.WebApi.StringValue;
		/** Post office box number for address 1. */
		Address1_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Method of shipment for address 1. */
		Address1_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** State or province for address 1. */
		Address1_StateOrProvince: DevKit.WebApi.StringValue;
		/** First telephone number associated with address 1. */
		Address1_Telephone1: DevKit.WebApi.StringValue;
		/** Second telephone number associated with address 1. */
		Address1_Telephone2: DevKit.WebApi.StringValue;
		/** Third telephone number associated with address 1. */
		Address1_Telephone3: DevKit.WebApi.StringValue;
		/** United Parcel Service (UPS) zone for address 1. */
		Address1_UPSZone: DevKit.WebApi.StringValue;
		/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
		Address1_UTCOffset: DevKit.WebApi.IntegerValue;
		/** Unique identifier for address 2. */
		Address2_AddressId: DevKit.WebApi.GuidValue;
		/** Type of address for address 2, such as billing, shipping, or primary address. */
		Address2_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** City name for address 2. */
		Address2_City: DevKit.WebApi.StringValue;
		/** ReadOnly - Shows the complete secondary address. */
		Address2_Composite: DevKit.WebApi.StringValue;
		/** Country/region name in address 2. */
		Address2_Country: DevKit.WebApi.StringValue;
		/** County name for address 2. */
		Address2_County: DevKit.WebApi.StringValue;
		/** Fax number for address 2. */
		Address2_Fax: DevKit.WebApi.StringValue;
		/** Latitude for address 2. */
		Address2_Latitude: DevKit.WebApi.DoubleValue;
		/** First line for entering address 2 information. */
		Address2_Line1: DevKit.WebApi.StringValue;
		/** Second line for entering address 2 information. */
		Address2_Line2: DevKit.WebApi.StringValue;
		/** Third line for entering address 2 information. */
		Address2_Line3: DevKit.WebApi.StringValue;
		/** Longitude for address 2. */
		Address2_Longitude: DevKit.WebApi.DoubleValue;
		/** Name to enter for address 2. */
		Address2_Name: DevKit.WebApi.StringValue;
		/** ZIP Code or postal code for address 2. */
		Address2_PostalCode: DevKit.WebApi.StringValue;
		/** Post office box number for address 2. */
		Address2_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Method of shipment for address 2. */
		Address2_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** State or province for address 2. */
		Address2_StateOrProvince: DevKit.WebApi.StringValue;
		/** First telephone number associated with address 2. */
		Address2_Telephone1: DevKit.WebApi.StringValue;
		/** Second telephone number associated with address 2. */
		Address2_Telephone2: DevKit.WebApi.StringValue;
		/** Third telephone number associated with address 2. */
		Address2_Telephone3: DevKit.WebApi.StringValue;
		/** United Parcel Service (UPS) zone for address 2. */
		Address2_UPSZone: DevKit.WebApi.StringValue;
		/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
		Address2_UTCOffset: DevKit.WebApi.IntegerValue;
		/** The identifier for the application. This is used to access data in another application. */
		ApplicationId: DevKit.WebApi.GuidValue;
		/** ReadOnly - The URI used as a unique logical identifier for the external app. This can be used to validate the application. */
		ApplicationIdUri: DevKit.WebApi.StringValue;
		/** ReadOnly - This is the application directory object Id. */
		AzureActiveDirectoryObjectId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the business unit with which the user is associated. */
		BusinessUnitId: DevKit.WebApi.LookupValue;
		/** Fiscal calendar associated with the user. */
		CalendarId: DevKit.WebApi.LookupValue;
		/** License type of user. */
		CALType: DevKit.WebApi.OptionSetValue;
		/** ReadOnly - Unique identifier of the user who created the user. */
		CreatedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Date and time when the user was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the delegate user who created the systemuser. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Indicates if default outlook filters have been populated. */
		DefaultFiltersPopulated: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Select the mailbox associated with this user. */
		DefaultMailbox: DevKit.WebApi.LookupValue;
		/** ReadOnly - Type a default folder name for the user's OneDrive For Business location. */
		DefaultOdbFolderName: DevKit.WebApi.StringValue;
		/** ReadOnly - Reason for disabling the user. */
		DisabledReason: DevKit.WebApi.StringValue;
		/** Whether to display the user in service views. */
		DisplayInServiceViews: DevKit.WebApi.BooleanValue;
		/** Active Directory domain of which the user is a member. */
		DomainName: DevKit.WebApi.StringValue;
		/** Shows the status of the primary email address. */
		EmailRouterAccessApproval: DevKit.WebApi.OptionSetValue;
		/** Employee identifier for the user. */
		EmployeeId: DevKit.WebApi.StringValue;
		/** Shows the default image for the record. */
		EntityImage: DevKit.WebApi.StringValue;
		/** ReadOnly */
		EntityImage_Timestamp: DevKit.WebApi.BigIntValue;
		/** ReadOnly */
		EntityImage_URL: DevKit.WebApi.StringValue;
		/** ReadOnly - For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValue;
		/** ReadOnly - Exchange rate for the currency associated with the systemuser with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValue;
		/** First name of the user. */
		FirstName: DevKit.WebApi.StringValue;
		/** ReadOnly - Full name of the user. */
		FullName: DevKit.WebApi.StringValue;
		/** Government identifier for the user. */
		GovernmentId: DevKit.WebApi.StringValue;
		/** Home phone number for the user. */
		HomePhone: DevKit.WebApi.StringValue;
		/** ReadOnly - For internal use only. */
		IdentityId: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Incoming email delivery method for the user. */
		IncomingEmailDeliveryMethod: DevKit.WebApi.OptionSetValue;
		/** Internal email address for the user. */
		InternalEMailAddress: DevKit.WebApi.StringValue;
		/** User invitation status. */
		InviteStatusCode: DevKit.WebApi.OptionSetValue;
		/** ReadOnly - Information about whether the user is an AD user. */
		IsActiveDirectoryUser: DevKit.WebApi.BooleanValue;
		/** Information about whether the user is enabled. */
		IsDisabled: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Shows the status of approval of the email address by O365 Admin. */
		IsEmailAddressApprovedByO365Admin: DevKit.WebApi.BooleanValue;
		/** Check if user is an integration user. */
		IsIntegrationUser: DevKit.WebApi.BooleanValue;
		/** Information about whether the user is licensed. */
		IsLicensed: DevKit.WebApi.BooleanValue;
		/** Information about whether the user is synced with the directory. */
		IsSyncWithDirectory: DevKit.WebApi.BooleanValue;
		/** Job title of the user. */
		JobTitle: DevKit.WebApi.StringValue;
		/** Last name of the user. */
		LastName: DevKit.WebApi.StringValue;
		/** ReadOnly - Time stamp of the latest update for the user */
		LatestUpdateTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Middle name of the user. */
		MiddleName: DevKit.WebApi.StringValue;
		/** Mobile alert email address for the user. */
		MobileAlertEMail: DevKit.WebApi.StringValue;
		/** Items contained with a particular SystemUser. */
		MobileOfflineProfileId: DevKit.WebApi.LookupValue;
		/** Mobile phone number for the user. */
		MobilePhone: DevKit.WebApi.StringValue;
		/** ReadOnly - Unique identifier of the user who last modified the user. */
		ModifiedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Date and time when the user was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the delegate user who last modified the systemuser. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValue;
		/** Nickname of the user. */
		NickName: DevKit.WebApi.StringValue;
		/** ReadOnly - Unique identifier of the organization associated with the user. */
		OrganizationId: DevKit.WebApi.GuidValue;
		/** Outgoing email delivery method for the user. */
		OutgoingEmailDeliveryMethod: DevKit.WebApi.OptionSetValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the manager of the user. */
		ParentSystemUserId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		PassportHi: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		PassportLo: DevKit.WebApi.IntegerValue;
		/** Personal email address of the user. */
		PersonalEMailAddress: DevKit.WebApi.StringValue;
		/** URL for the Website on which a photo of the user is located. */
		PhotoUrl: DevKit.WebApi.StringValue;
		/** User's position in hierarchical security model. */
		PositionId: DevKit.WebApi.LookupValue;
		/** Preferred address for the user. */
		PreferredAddressCode: DevKit.WebApi.OptionSetValue;
		/** Preferred email address for the user. */
		PreferredEmailCode: DevKit.WebApi.OptionSetValue;
		/** Preferred phone number for the user. */
		PreferredPhoneCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the default queue for the user. */
		QueueId: DevKit.WebApi.LookupValue;
		/** Salutation for correspondence with the user. */
		Salutation: DevKit.WebApi.StringValue;
		/** Check if user is a setup user. */
		SetupUser: DevKit.WebApi.BooleanValue;
		/** SharePoint Work Email Address */
		SharePointEmailAddress: DevKit.WebApi.StringValue;
		/** Skill set of the user. */
		Skills: DevKit.WebApi.StringValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Unique identifier for the user. */
		SystemUserId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the territory to which the user is assigned. */
		TerritoryId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Title of the user. */
		Title: DevKit.WebApi.StringValue;
		/** Unique identifier of the currency associated with the systemuser. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Shows the type of user license. */
		UserLicenseType: DevKit.WebApi.IntegerValue;
		/** ReadOnly -  User PUID User Identifiable Information */
		UserPuid: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Version number of the user. */
		VersionNumber: DevKit.WebApi.BigIntValue;
		/** Windows Live ID */
		WindowsLiveID: DevKit.WebApi.StringValue;
		/** User's Yammer login email address */
		YammerEmailAddress: DevKit.WebApi.StringValue;
		/** User's Yammer ID */
		YammerUserId: DevKit.WebApi.StringValue;
		/** Pronunciation of the first name of the user, written in phonetic hiragana or katakana characters. */
		YomiFirstName: DevKit.WebApi.StringValue;
		/** ReadOnly - Pronunciation of the full name of the user, written in phonetic hiragana or katakana characters. */
		YomiFullName: DevKit.WebApi.StringValue;
		/** Pronunciation of the last name of the user, written in phonetic hiragana or katakana characters. */
		YomiLastName: DevKit.WebApi.StringValue;
		/** Pronunciation of the middle name of the user, written in phonetic hiragana or katakana characters. */
		YomiMiddleName: DevKit.WebApi.StringValue;
	}
}
//{'JsForm':['User'],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}