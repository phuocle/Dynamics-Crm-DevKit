///<reference path='devkit.d.ts' />
declare namespace Rocket {
	interface ContactOptionSet {
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
		AccountRoleCode: {
			/** 1 */
			Decision_Maker: number,
			/** 2 */
			Employee: number,
			/** 3 */
			Influencer: number
		},
		Address1_AddressTypeCode: {
			/** 1 */
			Bill_To: number,
			/** 2 */
			Ship_To: number,
			/** 3 */
			Primary: number,
			/** 4 */
			Other: number
		},
		Address1_FreightTermsCode: {
			/** 1 */
			FOB: number,
			/** 2 */
			No_Charge: number
		},
		Address1_ShippingMethodCode: {
			/** 1 */
			Airborne: number,
			/** 2 */
			DHL: number,
			/** 3 */
			FedEx: number,
			/** 4 */
			UPS: number,
			/** 5 */
			Postal_Mail: number,
			/** 6 */
			Full_Load: number,
			/** 7 */
			Will_Call: number
		},
		Address2_AddressTypeCode: {
			/** 1 */
			Default_Value: number
		},
		Address2_FreightTermsCode: {
			/** 1 */
			Default_Value: number
		},
		Address2_ShippingMethodCode: {
			/** 1 */
			Default_Value: number
		},
		Address3_AddressTypeCode: {
			/** 1 */
			Default_Value: number
		},
		Address3_FreightTermsCode: {
			/** 1 */
			Default_Value: number
		},
		Address3_ShippingMethodCode: {
			/** 1 */
			Default_Value: number
		},
		CustomerSizeCode: {
			/** 1 */
			Default_Value: number
		},
		CustomerTypeCode: {
			/** 1 */
			Default_Value: number
		},
		EducationCode: {
			/** 1 */
			Default_Value: number
		},
		FamilyStatusCode: {
			/** 1 */
			Single: number,
			/** 2 */
			Married: number,
			/** 3 */
			Divorced: number,
			/** 4 */
			Widowed: number
		},
		GenderCode: {
			/** 1 */
			Male: number,
			/** 2 */
			Female: number
		},
		HasChildrenCode: {
			/** 1 */
			Default_Value: number
		},
		LeadSourceCode: {
			/** 1 */
			Default_Value: number
		},
		PaymentTermsCode: {
			/** 1 */
			Net_30: number,
			/** 2 */
			_2_10_Net_30: number,
			/** 3 */
			Net_45: number,
			/** 4 */
			Net_60: number
		},
		PreferredAppointmentDayCode: {
			/** 0 */
			Sunday: number,
			/** 1 */
			Monday: number,
			/** 2 */
			Tuesday: number,
			/** 3 */
			Wednesday: number,
			/** 4 */
			Thursday: number,
			/** 5 */
			Friday: number,
			/** 6 */
			Saturday: number
		},
		PreferredAppointmentTimeCode: {
			/** 1 */
			Morning: number,
			/** 2 */
			Afternoon: number,
			/** 3 */
			Evening: number
		},
		PreferredContactMethodCode: {
			/** 1 */
			Any: number,
			/** 2 */
			Email: number,
			/** 3 */
			Phone: number,
			/** 4 */
			Fax: number,
			/** 5 */
			Mail: number
		},
		ShippingMethodCode: {
			/** 1 */
			Default_Value: number
		},
		StateCode: {
			/** 0 */
			Active: number,
			/** 1 */
			Inactive: number
		},
		StatusCode: {
			/** 1 */
			Active: number,
			/** 2 */
			Inactive: number
		},
		TerritoryCode: {
			/** 1 */
			Default_Value: number
		}
	}
	class ContactApi {
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
		/** A collection OptionSet of Contact enttiy */
		OptionSet: ContactOptionSet;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** ReadOnly - Unique identifier of the account with which the contact is associated. */
		AccountId: WebApi.LookupValue;
		/** ReadOnly */
		AccountIdYomiName: WebApi.StringValue;
		/** Select the contact's role within the company or sales process, such as decision maker, employee, or influencer. */
		AccountRoleCode: WebApi.OptionSetValue;
		/** Unique identifier for address 1. */
		Address1_AddressId: WebApi.GuidValue;
		/** Select the primary address type. */
		Address1_AddressTypeCode: WebApi.OptionSetValue;
		/** Type the city for the primary address. */
		Address1_City: WebApi.StringValue;
		/** ReadOnly - Shows the complete primary address. */
		Address1_Composite: WebApi.StringValue;
		/** Type the country or region for the primary address. */
		Address1_Country: WebApi.StringValue;
		/** Type the county for the primary address. */
		Address1_County: WebApi.StringValue;
		/** Type the fax number associated with the primary address. */
		Address1_Fax: WebApi.StringValue;
		/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
		Address1_FreightTermsCode: WebApi.OptionSetValue;
		/** Type the latitude value for the primary address for use in mapping and other applications. */
		Address1_Latitude: WebApi.DoubleValue;
		/** Type the first line of the primary address. */
		Address1_Line1: WebApi.StringValue;
		/** Type the second line of the primary address. */
		Address1_Line2: WebApi.StringValue;
		/** Type the third line of the primary address. */
		Address1_Line3: WebApi.StringValue;
		/** Type the longitude value for the primary address for use in mapping and other applications. */
		Address1_Longitude: WebApi.DoubleValue;
		/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
		Address1_Name: WebApi.StringValue;
		/** Type the ZIP Code or postal code for the primary address. */
		Address1_PostalCode: WebApi.StringValue;
		/** Type the post office box number of the primary address. */
		Address1_PostOfficeBox: WebApi.StringValue;
		/** Type the name of the main contact at the account's primary address. */
		Address1_PrimaryContactName: WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: WebApi.OptionSetValue;
		/** Type the state or province of the primary address. */
		Address1_StateOrProvince: WebApi.StringValue;
		/** Type the main phone number associated with the primary address. */
		Address1_Telephone1: WebApi.StringValue;
		/** Type a second phone number associated with the primary address. */
		Address1_Telephone2: WebApi.StringValue;
		/** Type a third phone number associated with the primary address. */
		Address1_Telephone3: WebApi.StringValue;
		/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address1_UPSZone: WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address1_UTCOffset: WebApi.IntegerValue;
		/** Unique identifier for address 2. */
		Address2_AddressId: WebApi.GuidValue;
		/** Select the secondary address type. */
		Address2_AddressTypeCode: WebApi.OptionSetValue;
		/** Type the city for the secondary address. */
		Address2_City: WebApi.StringValue;
		/** ReadOnly - Shows the complete secondary address. */
		Address2_Composite: WebApi.StringValue;
		/** Type the country or region for the secondary address. */
		Address2_Country: WebApi.StringValue;
		/** Type the county for the secondary address. */
		Address2_County: WebApi.StringValue;
		/** Type the fax number associated with the secondary address. */
		Address2_Fax: WebApi.StringValue;
		/** Select the freight terms for the secondary address to make sure shipping orders are processed correctly. */
		Address2_FreightTermsCode: WebApi.OptionSetValue;
		/** Type the latitude value for the secondary address for use in mapping and other applications. */
		Address2_Latitude: WebApi.DoubleValue;
		/** Type the first line of the secondary address. */
		Address2_Line1: WebApi.StringValue;
		/** Type the second line of the secondary address. */
		Address2_Line2: WebApi.StringValue;
		/** Type the third line of the secondary address. */
		Address2_Line3: WebApi.StringValue;
		/** Type the longitude value for the secondary address for use in mapping and other applications. */
		Address2_Longitude: WebApi.DoubleValue;
		/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
		Address2_Name: WebApi.StringValue;
		/** Type the ZIP Code or postal code for the secondary address. */
		Address2_PostalCode: WebApi.StringValue;
		/** Type the post office box number of the secondary address. */
		Address2_PostOfficeBox: WebApi.StringValue;
		/** Type the name of the main contact at the account's secondary address. */
		Address2_PrimaryContactName: WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		Address2_ShippingMethodCode: WebApi.OptionSetValue;
		/** Type the state or province of the secondary address. */
		Address2_StateOrProvince: WebApi.StringValue;
		/** Type the main phone number associated with the secondary address. */
		Address2_Telephone1: WebApi.StringValue;
		/** Type a second phone number associated with the secondary address. */
		Address2_Telephone2: WebApi.StringValue;
		/** Type a third phone number associated with the secondary address. */
		Address2_Telephone3: WebApi.StringValue;
		/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address2_UPSZone: WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address2_UTCOffset: WebApi.IntegerValue;
		/** Unique identifier for address 3. */
		Address3_AddressId: WebApi.GuidValue;
		/** Select the third address type. */
		Address3_AddressTypeCode: WebApi.OptionSetValue;
		/** Type the city for the 3rd address. */
		Address3_City: WebApi.StringValue;
		/** ReadOnly - Shows the complete third address. */
		Address3_Composite: WebApi.StringValue;
		/** the country or region for the 3rd address. */
		Address3_Country: WebApi.StringValue;
		/** Type the county for the third address. */
		Address3_County: WebApi.StringValue;
		/** Type the fax number associated with the third address. */
		Address3_Fax: WebApi.StringValue;
		/** Select the freight terms for the third address to make sure shipping orders are processed correctly. */
		Address3_FreightTermsCode: WebApi.OptionSetValue;
		/** Type the latitude value for the third address for use in mapping and other applications. */
		Address3_Latitude: WebApi.DoubleValue;
		/** the first line of the 3rd address. */
		Address3_Line1: WebApi.StringValue;
		/** the second line of the 3rd address. */
		Address3_Line2: WebApi.StringValue;
		/** the third line of the 3rd address. */
		Address3_Line3: WebApi.StringValue;
		/** Type the longitude value for the third address for use in mapping and other applications. */
		Address3_Longitude: WebApi.DoubleValue;
		/** Type a descriptive name for the third address, such as Corporate Headquarters. */
		Address3_Name: WebApi.StringValue;
		/** the ZIP Code or postal code for the 3rd address. */
		Address3_PostalCode: WebApi.StringValue;
		/** the post office box number of the 3rd address. */
		Address3_PostOfficeBox: WebApi.StringValue;
		/** Type the name of the main contact at the account's third address. */
		Address3_PrimaryContactName: WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		Address3_ShippingMethodCode: WebApi.OptionSetValue;
		/** the state or province of the third address. */
		Address3_StateOrProvince: WebApi.StringValue;
		/** Type the main phone number associated with the third address. */
		Address3_Telephone1: WebApi.StringValue;
		/** Type a second phone number associated with the third address. */
		Address3_Telephone2: WebApi.StringValue;
		/** Type a third phone number associated with the primary address. */
		Address3_Telephone3: WebApi.StringValue;
		/** Type the UPS zone of the third address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address3_UPSZone: WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address3_UTCOffset: WebApi.IntegerValue;
		/** ReadOnly - For system use only. */
		Aging30: WebApi.MoneyValue;
		/** ReadOnly - Shows the Aging 30 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		Aging30_Base: WebApi.MoneyValue;
		/** ReadOnly - For system use only. */
		Aging60: WebApi.MoneyValue;
		/** ReadOnly - Shows the Aging 60 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		Aging60_Base: WebApi.MoneyValue;
		/** ReadOnly - For system use only. */
		Aging90: WebApi.MoneyValue;
		/** ReadOnly - Shows the Aging 90 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		Aging90_Base: WebApi.MoneyValue;
		/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
		Anniversary_DateOnly: WebApi.DateOnlyValue;
		/** Type the contact's annual income for use in profiling and financial analysis. */
		AnnualIncome: WebApi.MoneyValue;
		/** ReadOnly - Shows the Annual Income field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		AnnualIncome_Base: WebApi.MoneyValue;
		/** Type the name of the contact's assistant. */
		AssistantName: WebApi.StringValue;
		/** Type the phone number for the contact's assistant. */
		AssistantPhone: WebApi.StringValue;
		/** Enter the contact's birthday for use in customer gift programs or other communications. */
		BirthDate_DateOnly: WebApi.DateOnlyValue;
		/** Type a second business phone number for this contact. */
		Business2: WebApi.StringValue;
		/** Type a callback phone number for this contact. */
		Callback: WebApi.StringValue;
		/** Type the names of the contact's children for reference in communications and client programs. */
		ChildrensNames: WebApi.StringValue;
		/** Type the company phone of the contact. */
		Company: WebApi.StringValue;
		/** Unique identifier of the contact. */
		ContactId: WebApi.GuidValue;
		/** ReadOnly - Shows who created the record. */
		CreatedBy: WebApi.LookupValue;
		/** ReadOnly - Shows the external party who created the record. */
		CreatedByExternalParty: WebApi.LookupValue;
		/** ReadOnly */
		CreatedByExternalPartyYomiName: WebApi.StringValue;
		/** ReadOnly */
		CreatedByYomiName: WebApi.StringValue;
		/** ReadOnly - Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: WebApi.LookupValue;
		/** ReadOnly */
		CreatedOnBehalfByYomiName: WebApi.StringValue;
		/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
		CreditLimit: WebApi.MoneyValue;
		/** ReadOnly - Shows the Credit Limit field converted to the system's default base currency for reporting purposes. The calculations use the exchange rate specified in the Currencies area. */
		CreditLimit_Base: WebApi.MoneyValue;
		/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
		CreditOnHold: WebApi.BooleanValue;
		/** Select the size of the contact's company for segmentation and reporting purposes. */
		CustomerSizeCode: WebApi.OptionSetValue;
		/** Select the category that best describes the relationship between the contact and your organization. */
		CustomerTypeCode: WebApi.OptionSetValue;
		/** Type the department or business unit where the contact works in the parent company or business. */
		Department: WebApi.StringValue;
		/** Type additional information to describe the contact, such as an excerpt from the company's website. */
		Description: WebApi.StringValue;
		/** Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email. */
		DoNotBulkEMail: WebApi.BooleanValue;
		/** Select whether the contact accepts bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the letters. */
		DoNotBulkPostalMail: WebApi.BooleanValue;
		/** Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email. */
		DoNotEMail: WebApi.BooleanValue;
		/** Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns. */
		DoNotFax: WebApi.BooleanValue;
		/** Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns. */
		DoNotPhone: WebApi.BooleanValue;
		/** Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: WebApi.BooleanValue;
		/** Select whether the contact accepts marketing materials, such as brochures or catalogs. Contacts that opt out can be excluded from marketing initiatives. */
		DoNotSendMM: WebApi.BooleanValue;
		/** Select the contact's highest level of education for use in segmentation and analysis. */
		EducationCode: WebApi.OptionSetValue;
		/** Type the primary email address for the contact. */
		EMailAddress1: WebApi.StringValue;
		/** Type the secondary email address for the contact. */
		EMailAddress2: WebApi.StringValue;
		/** Type an alternate email address for the contact. */
		EMailAddress3: WebApi.StringValue;
		/** Type the employee ID or number for the contact for reference in orders, service cases, or other communications with the contact's organization. */
		EmployeeId: WebApi.StringValue;
		/** Shows the default image for the record. */
		EntityImage: WebApi.StringValue;
		/** ReadOnly */
		EntityImage_Timestamp: WebApi.BigIntValue;
		/** ReadOnly */
		EntityImage_URL: WebApi.StringValue;
		/** ReadOnly - For internal use only. */
		EntityImageId: WebApi.GuidValue;
		/** ReadOnly - Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: WebApi.DecimalValue;
		/** Identifier for an external user. */
		ExternalUserIdentifier: WebApi.StringValue;
		/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
		FamilyStatusCode: WebApi.OptionSetValue;
		/** Type the fax number for the contact. */
		Fax: WebApi.StringValue;
		/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		FirstName: WebApi.StringValue;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact. */
		FollowEmail: WebApi.BooleanValue;
		/** Type the URL for the contact's FTP site to enable users to access data and share documents. */
		FtpSiteUrl: WebApi.StringValue;
		/** ReadOnly - Combines and shows the contact's first and last names so that the full name can be displayed in views and reports. */
		FullName: WebApi.StringValue;
		/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		GenderCode: WebApi.OptionSetValue;
		/** Type the passport number or other government ID for the contact for use in documents or reports. */
		GovernmentId: WebApi.StringValue;
		/** Select whether the contact has any children for reference in follow-up phone calls and other communications. */
		HasChildrenCode: WebApi.OptionSetValue;
		/** Type a second home phone number for this contact. */
		Home2: WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: WebApi.IntegerValue;
		/** ReadOnly - Information about whether the contact was auto-created when promoting an email or an appointment. */
		IsAutoCreate: WebApi.BooleanValue;
		/** Select whether the contact exists in a separate accounting or other system, such as Microsoft Dynamics GP or another ERP database, for use in integration processes. */
		IsBackofficeCustomer: WebApi.BooleanValue;
		/** ReadOnly */
		IsPrivate: WebApi.BooleanValue;
		/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		JobTitle: WebApi.StringValue;
		/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		LastName: WebApi.StringValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** Shows the date when the contact was last included in a marketing campaign or quick campaign. */
		LastUsedInCampaign_UtcDateOnly: WebApi.UtcDateOnlyValue;
		/** Select the primary marketing source that directed the contact to your organization. */
		LeadSourceCode: WebApi.OptionSetValue;
		/** Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact. */
		ManagerName: WebApi.StringValue;
		/** Type the phone number for the contact's manager. */
		ManagerPhone: WebApi.StringValue;
		/** Whether is only for marketing */
		MarketingOnly: WebApi.BooleanValue;
		/** ReadOnly */
		MasterContactIdName: WebApi.StringValue;
		/** ReadOnly */
		MasterContactIdYomiName: WebApi.StringValue;
		/** ReadOnly - Unique identifier of the master contact for merge. */
		MasterId: WebApi.LookupValue;
		/** ReadOnly - Shows whether the account has been merged with a master contact. */
		Merged: WebApi.BooleanValue;
		/** Type the contact's middle name or initial to make sure the contact is addressed correctly. */
		MiddleName: WebApi.StringValue;
		/** Type the mobile phone number for the contact. */
		MobilePhone: WebApi.StringValue;
		/** ReadOnly - Shows who last updated the record. */
		ModifiedBy: WebApi.LookupValue;
		/** ReadOnly - Shows the external party who modified the record. */
		ModifiedByExternalParty: WebApi.LookupValue;
		/** ReadOnly */
		ModifiedByExternalPartyYomiName: WebApi.StringValue;
		/** ReadOnly */
		ModifiedByYomiName: WebApi.StringValue;
		/** ReadOnly - Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: WebApi.LookupValue;
		/** ReadOnly */
		ModifiedOnBehalfByYomiName: WebApi.StringValue;
		/** Type the contact's nickname. */
		NickName: WebApi.StringValue;
		/** Type the number of children the contact has for reference in follow-up phone calls and other communications. */
		NumberOfChildren: WebApi.IntegerValue;
		/** ReadOnly - Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId_systemuser: WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team. */
		OwnerId_team: WebApi.LookupValue;
		/** ReadOnly */
		OwnerIdYomiName: WebApi.StringValue;
		/** ReadOnly - Unique identifier of the business unit that owns the contact. */
		OwningBusinessUnit: WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the team who owns the contact. */
		OwningTeam: WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the user who owns the contact. */
		OwningUser: WebApi.LookupValue;
		/** Type the pager number for the contact. */
		Pager: WebApi.StringValue;
		/** ReadOnly - Unique identifier of the parent contact. */
		ParentContactId: WebApi.LookupValue;
		/** ReadOnly */
		ParentContactIdYomiName: WebApi.StringValue;
		parentcustomerid_account: WebApi.LookupValue;
		parentcustomerid_contact: WebApi.LookupValue;
		/** ReadOnly */
		ParentCustomerIdYomiName: WebApi.StringValue;
		/** Shows whether the contact participates in workflow rules. */
		ParticipatesInWorkflow: WebApi.BooleanValue;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: WebApi.OptionSetValue;
		/** Select the preferred day of the week for service appointments. */
		PreferredAppointmentDayCode: WebApi.OptionSetValue;
		/** Select the preferred time of day for service appointments. */
		PreferredAppointmentTimeCode: WebApi.OptionSetValue;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: WebApi.OptionSetValue;
		/** Choose the regular or preferred customer service representative for reference when scheduling service activities for the contact. */
		PreferredSystemUserId: WebApi.LookupValue;
		/** ReadOnly */
		PreferredSystemUserIdYomiName: WebApi.StringValue;
		/** Shows the ID of the process. */
		ProcessId: WebApi.GuidValue;
		/** Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns. */
		Salutation: WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		ShippingMethodCode: WebApi.OptionSetValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Contact record. */
		SLAId: WebApi.LookupValue;
		/** ReadOnly - Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: WebApi.LookupValue;
		/** ReadOnly */
		SLAName: WebApi.StringValue;
		/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
		SpousesName: WebApi.StringValue;
		/** Shows the ID of the stage. */
		StageId: WebApi.GuidValue;
		/** Shows whether the contact is active or inactive. Inactive contacts are read-only and can't be edited unless they are reactivated. */
		StateCode: WebApi.OptionSetValue;
		/** Select the contact's status. */
		StatusCode: WebApi.OptionSetValue;
		/** For internal use only. */
		SubscriptionId: WebApi.GuidValue;
		/** Type the suffix used in the contact's name, such as Jr. or Sr. to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		Suffix: WebApi.StringValue;
		/** Type the main phone number for this contact. */
		Telephone1: WebApi.StringValue;
		/** Type a second phone number for this contact. */
		Telephone2: WebApi.StringValue;
		/** Type a third phone number for this contact. */
		Telephone3: WebApi.StringValue;
		/** Select a region or territory for the contact for use in segmentation and analysis. */
		TerritoryCode: WebApi.OptionSetValue;
		/** ReadOnly - Total time spent for emails (read and write) and meetings by me in relation to the contact record. */
		TimeSpentByMeOnEmailAndMeetings: WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: WebApi.IntegerValue;
		/** ReadOnly - Version number of the contact. */
		VersionNumber: WebApi.BigIntValue;
		/** Type the contact's professional or personal website or blog URL. */
		WebSiteUrl: WebApi.StringValue;
		/** Type the phonetic spelling of the contact's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiFirstName: WebApi.StringValue;
		/** ReadOnly - Shows the combined Yomi first and last names of the contact so that the full phonetic name can be displayed in views and reports. */
		YomiFullName: WebApi.StringValue;
		/** Type the phonetic spelling of the contact's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiLastName: WebApi.StringValue;
		/** Type the phonetic spelling of the contact's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiMiddleName: WebApi.StringValue;
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}