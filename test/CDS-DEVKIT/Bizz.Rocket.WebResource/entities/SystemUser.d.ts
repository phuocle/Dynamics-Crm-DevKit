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
		AccessMode: WebApi.OptionSetValue;
		/** ReadOnly - Active Directory object GUID for the system user. */
		ActiveDirectoryGuid: WebApi.GuidValue;
		/** Unique identifier for address 1. */
		Address1_AddressId: WebApi.GuidValue;
		/** Type of address for address 1, such as billing, shipping, or primary address. */
		Address1_AddressTypeCode: WebApi.OptionSetValue;
		/** City name for address 1. */
		Address1_City: WebApi.StringValue;
		/** ReadOnly - Shows the complete primary address. */
		Address1_Composite: WebApi.StringValue;
		/** Country/region name in address 1. */
		Address1_Country: WebApi.StringValue;
		/** County name for address 1. */
		Address1_County: WebApi.StringValue;
		/** Fax number for address 1. */
		Address1_Fax: WebApi.StringValue;
		/** Latitude for address 1. */
		Address1_Latitude: WebApi.DoubleValue;
		/** First line for entering address 1 information. */
		Address1_Line1: WebApi.StringValue;
		/** Second line for entering address 1 information. */
		Address1_Line2: WebApi.StringValue;
		/** Third line for entering address 1 information. */
		Address1_Line3: WebApi.StringValue;
		/** Longitude for address 1. */
		Address1_Longitude: WebApi.DoubleValue;
		/** Name to enter for address 1. */
		Address1_Name: WebApi.StringValue;
		/** ZIP Code or postal code for address 1. */
		Address1_PostalCode: WebApi.StringValue;
		/** Post office box number for address 1. */
		Address1_PostOfficeBox: WebApi.StringValue;
		/** Method of shipment for address 1. */
		Address1_ShippingMethodCode: WebApi.OptionSetValue;
		/** State or province for address 1. */
		Address1_StateOrProvince: WebApi.StringValue;
		/** First telephone number associated with address 1. */
		Address1_Telephone1: WebApi.StringValue;
		/** Second telephone number associated with address 1. */
		Address1_Telephone2: WebApi.StringValue;
		/** Third telephone number associated with address 1. */
		Address1_Telephone3: WebApi.StringValue;
		/** United Parcel Service (UPS) zone for address 1. */
		Address1_UPSZone: WebApi.StringValue;
		/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
		Address1_UTCOffset: WebApi.IntegerValue;
		/** Unique identifier for address 2. */
		Address2_AddressId: WebApi.GuidValue;
		/** Type of address for address 2, such as billing, shipping, or primary address. */
		Address2_AddressTypeCode: WebApi.OptionSetValue;
		/** City name for address 2. */
		Address2_City: WebApi.StringValue;
		/** ReadOnly - Shows the complete secondary address. */
		Address2_Composite: WebApi.StringValue;
		/** Country/region name in address 2. */
		Address2_Country: WebApi.StringValue;
		/** County name for address 2. */
		Address2_County: WebApi.StringValue;
		/** Fax number for address 2. */
		Address2_Fax: WebApi.StringValue;
		/** Latitude for address 2. */
		Address2_Latitude: WebApi.DoubleValue;
		/** First line for entering address 2 information. */
		Address2_Line1: WebApi.StringValue;
		/** Second line for entering address 2 information. */
		Address2_Line2: WebApi.StringValue;
		/** Third line for entering address 2 information. */
		Address2_Line3: WebApi.StringValue;
		/** Longitude for address 2. */
		Address2_Longitude: WebApi.DoubleValue;
		/** Name to enter for address 2. */
		Address2_Name: WebApi.StringValue;
		/** ZIP Code or postal code for address 2. */
		Address2_PostalCode: WebApi.StringValue;
		/** Post office box number for address 2. */
		Address2_PostOfficeBox: WebApi.StringValue;
		/** Method of shipment for address 2. */
		Address2_ShippingMethodCode: WebApi.OptionSetValue;
		/** State or province for address 2. */
		Address2_StateOrProvince: WebApi.StringValue;
		/** First telephone number associated with address 2. */
		Address2_Telephone1: WebApi.StringValue;
		/** Second telephone number associated with address 2. */
		Address2_Telephone2: WebApi.StringValue;
		/** Third telephone number associated with address 2. */
		Address2_Telephone3: WebApi.StringValue;
		/** United Parcel Service (UPS) zone for address 2. */
		Address2_UPSZone: WebApi.StringValue;
		/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
		Address2_UTCOffset: WebApi.IntegerValue;
		/** The identifier for the application. This is used to access data in another application. */
		ApplicationId: WebApi.GuidValue;
		/** ReadOnly - The URI used as a unique logical identifier for the external app. This can be used to validate the application. */
		ApplicationIdUri: WebApi.StringValue;
		/** ReadOnly - This is the application directory object Id. */
		AzureActiveDirectoryObjectId: WebApi.GuidValue;
		/** Unique identifier of the business unit with which the user is associated. */
		BusinessUnitId: WebApi.LookupValue;
		/** Fiscal calendar associated with the user. */
		CalendarId: WebApi.LookupValue;
		/** License type of user. */
		CALType: WebApi.OptionSetValue;
		/** ReadOnly - Unique identifier of the user who created the user. */
		CreatedBy: WebApi.LookupValue;
		/** ReadOnly */
		CreatedByYomiName: WebApi.StringValue;
		/** ReadOnly - Date and time when the user was created. */
		CreatedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the delegate user who created the systemuser. */
		CreatedOnBehalfBy: WebApi.LookupValue;
		/** ReadOnly */
		CreatedOnBehalfByYomiName: WebApi.StringValue;
		/** ReadOnly - Indicates if default outlook filters have been populated. */
		DefaultFiltersPopulated: WebApi.BooleanValue;
		/** ReadOnly - Select the mailbox associated with this user. */
		DefaultMailbox: WebApi.LookupValue;
		/** ReadOnly - Type a default folder name for the user's OneDrive For Business location. */
		DefaultOdbFolderName: WebApi.StringValue;
		/** ReadOnly - Reason for disabling the user. */
		DisabledReason: WebApi.StringValue;
		/** Whether to display the user in service views. */
		DisplayInServiceViews: WebApi.BooleanValue;
		/** Active Directory domain of which the user is a member. */
		DomainName: WebApi.StringValue;
		/** Shows the status of the primary email address. */
		EmailRouterAccessApproval: WebApi.OptionSetValue;
		/** Employee identifier for the user. */
		EmployeeId: WebApi.StringValue;
		/** Shows the default image for the record. */
		EntityImage: WebApi.StringValue;
		/** ReadOnly */
		EntityImage_Timestamp: WebApi.BigIntValue;
		/** ReadOnly */
		EntityImage_URL: WebApi.StringValue;
		/** ReadOnly - For internal use only. */
		EntityImageId: WebApi.GuidValue;
		/** ReadOnly - Exchange rate for the currency associated with the systemuser with respect to the base currency. */
		ExchangeRate: WebApi.DecimalValue;
		/** First name of the user. */
		FirstName: WebApi.StringValue;
		/** ReadOnly - Full name of the user. */
		FullName: WebApi.StringValue;
		/** Government identifier for the user. */
		GovernmentId: WebApi.StringValue;
		/** Home phone number for the user. */
		HomePhone: WebApi.StringValue;
		/** ReadOnly - For internal use only. */
		IdentityId: WebApi.IntegerValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: WebApi.IntegerValue;
		/** Incoming email delivery method for the user. */
		IncomingEmailDeliveryMethod: WebApi.OptionSetValue;
		/** Internal email address for the user. */
		InternalEMailAddress: WebApi.StringValue;
		/** User invitation status. */
		InviteStatusCode: WebApi.OptionSetValue;
		/** ReadOnly - Information about whether the user is an AD user. */
		IsActiveDirectoryUser: WebApi.BooleanValue;
		/** Information about whether the user is enabled. */
		IsDisabled: WebApi.BooleanValue;
		/** ReadOnly - Shows the status of approval of the email address by O365 Admin. */
		IsEmailAddressApprovedByO365Admin: WebApi.BooleanValue;
		/** Check if user is an integration user. */
		IsIntegrationUser: WebApi.BooleanValue;
		/** Information about whether the user is licensed. */
		IsLicensed: WebApi.BooleanValue;
		/** Information about whether the user is synced with the directory. */
		IsSyncWithDirectory: WebApi.BooleanValue;
		/** Job title of the user. */
		JobTitle: WebApi.StringValue;
		/** Last name of the user. */
		LastName: WebApi.StringValue;
		/** ReadOnly - Time stamp of the latest update for the user */
		LatestUpdateTime_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Middle name of the user. */
		MiddleName: WebApi.StringValue;
		/** Mobile alert email address for the user. */
		MobileAlertEMail: WebApi.StringValue;
		/** Items contained with a particular SystemUser. */
		MobileOfflineProfileId: WebApi.LookupValue;
		/** Mobile phone number for the user. */
		MobilePhone: WebApi.StringValue;
		/** ReadOnly - Unique identifier of the user who last modified the user. */
		ModifiedBy: WebApi.LookupValue;
		/** ReadOnly */
		ModifiedByYomiName: WebApi.StringValue;
		/** ReadOnly - Date and time when the user was last modified. */
		ModifiedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Unique identifier of the delegate user who last modified the systemuser. */
		ModifiedOnBehalfBy: WebApi.LookupValue;
		/** ReadOnly */
		ModifiedOnBehalfByYomiName: WebApi.StringValue;
		/** Nickname of the user. */
		NickName: WebApi.StringValue;
		/** ReadOnly - Unique identifier of the organization associated with the user. */
		OrganizationId: WebApi.GuidValue;
		/** Outgoing email delivery method for the user. */
		OutgoingEmailDeliveryMethod: WebApi.OptionSetValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: WebApi.UtcDateOnlyValue;
		/** Unique identifier of the manager of the user. */
		ParentSystemUserId: WebApi.LookupValue;
		/** ReadOnly */
		ParentSystemUserIdYomiName: WebApi.StringValue;
		/** For internal use only. */
		PassportHi: WebApi.IntegerValue;
		/** For internal use only. */
		PassportLo: WebApi.IntegerValue;
		/** Personal email address of the user. */
		PersonalEMailAddress: WebApi.StringValue;
		/** URL for the Website on which a photo of the user is located. */
		PhotoUrl: WebApi.StringValue;
		/** User's position in hierarchical security model. */
		PositionId: WebApi.LookupValue;
		/** Preferred address for the user. */
		PreferredAddressCode: WebApi.OptionSetValue;
		/** Preferred email address for the user. */
		PreferredEmailCode: WebApi.OptionSetValue;
		/** Preferred phone number for the user. */
		PreferredPhoneCode: WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: WebApi.GuidValue;
		/** Unique identifier of the default queue for the user. */
		QueueId: WebApi.LookupValue;
		/** Salutation for correspondence with the user. */
		Salutation: WebApi.StringValue;
		/** Check if user is a setup user. */
		SetupUser: WebApi.BooleanValue;
		/** SharePoint Work Email Address */
		SharePointEmailAddress: WebApi.StringValue;
		/** Skill set of the user. */
		Skills: WebApi.StringValue;
		/** Shows the ID of the stage. */
		StageId: WebApi.GuidValue;
		/** Unique identifier for the user. */
		SystemUserId: WebApi.GuidValue;
		/** Unique identifier of the territory to which the user is assigned. */
		TerritoryId: WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: WebApi.IntegerValue;
		/** Title of the user. */
		Title: WebApi.StringValue;
		/** Unique identifier of the currency associated with the systemuser. */
		TransactionCurrencyId: WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: WebApi.StringValue;
		/** Shows the type of user license. */
		UserLicenseType: WebApi.IntegerValue;
		/** ReadOnly -  User PUID User Identifiable Information */
		UserPuid: WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: WebApi.IntegerValue;
		/** ReadOnly - Version number of the user. */
		VersionNumber: WebApi.BigIntValue;
		/** Windows Live ID */
		WindowsLiveID: WebApi.StringValue;
		/** User's Yammer login email address */
		YammerEmailAddress: WebApi.StringValue;
		/** User's Yammer ID */
		YammerUserId: WebApi.StringValue;
		/** Pronunciation of the first name of the user, written in phonetic hiragana or katakana characters. */
		YomiFirstName: WebApi.StringValue;
		/** ReadOnly - Pronunciation of the full name of the user, written in phonetic hiragana or katakana characters. */
		YomiFullName: WebApi.StringValue;
		/** Pronunciation of the last name of the user, written in phonetic hiragana or katakana characters. */
		YomiLastName: WebApi.StringValue;
		/** Pronunciation of the middle name of the user, written in phonetic hiragana or katakana characters. */
		YomiMiddleName: WebApi.StringValue;
	}
}
//{'JsForm':['User'],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}