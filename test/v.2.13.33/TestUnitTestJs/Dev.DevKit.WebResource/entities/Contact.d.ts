//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormContact {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_DETAILS_TAB_Sections {
			billing_information: DevKit.Controls.Section;
			CONTACT_PREFERENCES: DevKit.Controls.Section;
			marketing_information: DevKit.Controls.Section;
			PERSONAL_INFORMATION: DevKit.Controls.Section;
			PERSONAL_NOTES_SECTION: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
		}
		interface tab_documents_sharepoint_Sections {
			documents_sharepoint_section: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			BusinessCard: DevKit.Controls.Section;
			CONTACT_INFORMATION: DevKit.Controls.Section;
			CUSTOMER_DETAILS_TAB: DevKit.Controls.Section;
			MapSection: DevKit.Controls.Section;
			SOCIAL_PANE_TAB: DevKit.Controls.Section;
			Summary_section_6: DevKit.Controls.Section;
			SUMMARY_TAB_section_6: DevKit.Controls.Section;
			TalkingPoints_section: DevKit.Controls.Section;
		}
		interface tab_urstab_Sections {
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
			urstab_section_general: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_documents_sharepoint extends DevKit.Controls.ITab {
			Section: tab_documents_sharepoint_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface tab_urstab extends DevKit.Controls.ITab {
			Section: tab_urstab_Sections;
		}
		interface Tabs {
			DETAILS_TAB: tab_DETAILS_TAB;
			documents_sharepoint: tab_documents_sharepoint;
			SUMMARY_TAB: tab_SUMMARY_TAB;
			urstab: tab_urstab;
		}
		interface Body {
			Tab: Tabs;
			ActionCards: DevKit.Controls.ActionCards;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Type the latitude value for the primary address for use in mapping and other applications. */
			Address1_Latitude: DevKit.Controls.Double;
			/** Type the first line of the primary address. */
			Address1_Line1: DevKit.Controls.String;
			/** Type the longitude value for the primary address for use in mapping and other applications. */
			Address1_Longitude: DevKit.Controls.Double;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
			Anniversary: DevKit.Controls.Date;
			/** Enter the contact's birthday for use in customer gift programs or other communications. */
			BirthDate: DevKit.Controls.Date;
			/** Stores Image of the Business Card */
			BusinessCard: DevKit.Controls.String;
			/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
			CreditLimit: DevKit.Controls.Money;
			/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Type additional information to describe the contact, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			/** Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email. */
			DoNotEMail: DevKit.Controls.Boolean;
			/** Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns. */
			DoNotFax: DevKit.Controls.Boolean;
			/** Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns. */
			DoNotPhone: DevKit.Controls.Boolean;
			/** Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns. */
			DoNotPostalMail: DevKit.Controls.Boolean;
			/** Select whether the contact accepts marketing materials, such as brochures or catalogs. Contacts that opt out can be excluded from marketing initiatives. */
			DoNotSendMM: DevKit.Controls.Boolean;
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
			FamilyStatusCode: DevKit.Controls.OptionSet;
			/** Type the fax number for the contact. */
			Fax: DevKit.Controls.String;
			/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact. */
			FollowEmail: DevKit.Controls.Boolean;
			/** Combines and shows the contact's first and last names so that the full name can be displayed in views and reports. */
			FullName: DevKit.Controls.String;
			/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			GenderCode: DevKit.Controls.OptionSet;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Shows the date when the contact was last included in a marketing campaign or quick campaign. */
			LastUsedInCampaign: DevKit.Controls.Date;
			mapcontrol: DevKit.Controls.Map;
			/** Type the mobile phone number for the contact. */
			MobilePhone: DevKit.Controls.String;
			msdyusd_CurrentProfile: DevKit.Controls.String;
			msdyusd_Facebook: DevKit.Controls.String;
			msdyusd_Twitter: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Shows the lead that the contact was created if the contact was created by converting a lead in Microsoft Dynamics 365. This is used to relate the contact to the data on the originating lead for use in reporting and analytics. */
			OriginatingLeadId: DevKit.Controls.Lookup;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId_1: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode_1: DevKit.Controls.OptionSet;
			/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
			SpousesName: DevKit.Controls.String;
			TalkingPoints: DevKit.Controls.ActionCards;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_contact_bookableresource_ContactId: DevKit.Controls.NavigationItem,
			nav_msdyn_contact_msdyn_purchaseorder_VendorSalesPerson: DevKit.Controls.NavigationItem,
			nav_msdyn_contact_msdyn_rma_RequestedByContact: DevKit.Controls.NavigationItem,
			nav_msdyn_contact_msdyn_rtv_VendorContact: DevKit.Controls.NavigationItem,
			nav_msdyn_contact_msdyn_workorder_ReportedByContact: DevKit.Controls.NavigationItem,
			navAddresses: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navInvoices: DevKit.Controls.NavigationItem,
			navOrders: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navQuotes: DevKit.Controls.NavigationItem,
			navRelationships: DevKit.Controls.NavigationItem,
			navSubConts: DevKit.Controls.NavigationItem
		}
		interface quickForm_contactquickform_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_contactquickform extends DevKit.Controls.IQuickView {
			Body: quickForm_contactquickform_Body;
		}
		interface QuickForm {
			contactquickform: quickForm_contactquickform;
		}
		interface Grid {
			contactopportunitiesgrid: DevKit.Controls.Grid;
			contactcasessgrid: DevKit.Controls.Grid;
			subgrid_Entitlement: DevKit.Controls.Grid;
			DocumentsSubGrid: DevKit.Controls.Grid;
		}
	}
	class FormContact extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Contact
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Contact */
		Body: DevKit.FormContact.Body;
		/** The Header section of form Contact */
		Header: DevKit.FormContact.Header;
		/** The Navigation of form Contact */
		Navigation: DevKit.FormContact.Navigation;
		/** The QuickForm of form Contact */
		QuickForm: DevKit.FormContact.QuickForm;
		/** The Grid of form Contact */
		Grid: DevKit.FormContact.Grid;
		/** The SidePanes of form Contact */
		SidePanes: DevKit.SidePanes;
	}
	class ContactApi {
		/**
		* DynamicsCrm.DevKit ContactApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the account with which the contact is associated. */
		AccountId: DevKit.WebApi.LookupValueReadonly;
		/** Select the contact's role within the company or sales process, such as decision maker, employee, or influencer. */
		AccountRoleCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for address 1. */
		Address1_AddressId: DevKit.WebApi.GuidValue;
		/** Select the primary address type. */
		Address1_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** Type the city for the primary address. */
		Address1_City: DevKit.WebApi.StringValue;
		/** Shows the complete primary address. */
		Address1_Composite: DevKit.WebApi.StringValueReadonly;
		/** Type the country or region for the primary address. */
		Address1_Country: DevKit.WebApi.StringValue;
		/** Type the county for the primary address. */
		Address1_County: DevKit.WebApi.StringValue;
		/** Type the fax number associated with the primary address. */
		Address1_Fax: DevKit.WebApi.StringValue;
		/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
		Address1_FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Type the latitude value for the primary address for use in mapping and other applications. */
		Address1_Latitude: DevKit.WebApi.DoubleValue;
		/** Type the first line of the primary address. */
		Address1_Line1: DevKit.WebApi.StringValue;
		/** Type the second line of the primary address. */
		Address1_Line2: DevKit.WebApi.StringValue;
		/** Type the third line of the primary address. */
		Address1_Line3: DevKit.WebApi.StringValue;
		/** Type the longitude value for the primary address for use in mapping and other applications. */
		Address1_Longitude: DevKit.WebApi.DoubleValue;
		/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
		Address1_Name: DevKit.WebApi.StringValue;
		/** Type the ZIP Code or postal code for the primary address. */
		Address1_PostalCode: DevKit.WebApi.StringValue;
		/** Type the post office box number of the primary address. */
		Address1_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Type the name of the main contact at the account's primary address. */
		Address1_PrimaryContactName: DevKit.WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Type the state or province of the primary address. */
		Address1_StateOrProvince: DevKit.WebApi.StringValue;
		/** Type the main phone number associated with the primary address. */
		Address1_Telephone1: DevKit.WebApi.StringValue;
		/** Type a second phone number associated with the primary address. */
		Address1_Telephone2: DevKit.WebApi.StringValue;
		/** Type a third phone number associated with the primary address. */
		Address1_Telephone3: DevKit.WebApi.StringValue;
		/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address1_UPSZone: DevKit.WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address1_UTCOffset: DevKit.WebApi.IntegerValue;
		/** Unique identifier for address 2. */
		Address2_AddressId: DevKit.WebApi.GuidValue;
		/** Select the secondary address type. */
		Address2_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** Type the city for the secondary address. */
		Address2_City: DevKit.WebApi.StringValue;
		/** Shows the complete secondary address. */
		Address2_Composite: DevKit.WebApi.StringValueReadonly;
		/** Type the country or region for the secondary address. */
		Address2_Country: DevKit.WebApi.StringValue;
		/** Type the county for the secondary address. */
		Address2_County: DevKit.WebApi.StringValue;
		/** Type the fax number associated with the secondary address. */
		Address2_Fax: DevKit.WebApi.StringValue;
		/** Select the freight terms for the secondary address to make sure shipping orders are processed correctly. */
		Address2_FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Type the latitude value for the secondary address for use in mapping and other applications. */
		Address2_Latitude: DevKit.WebApi.DoubleValue;
		/** Type the first line of the secondary address. */
		Address2_Line1: DevKit.WebApi.StringValue;
		/** Type the second line of the secondary address. */
		Address2_Line2: DevKit.WebApi.StringValue;
		/** Type the third line of the secondary address. */
		Address2_Line3: DevKit.WebApi.StringValue;
		/** Type the longitude value for the secondary address for use in mapping and other applications. */
		Address2_Longitude: DevKit.WebApi.DoubleValue;
		/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
		Address2_Name: DevKit.WebApi.StringValue;
		/** Type the ZIP Code or postal code for the secondary address. */
		Address2_PostalCode: DevKit.WebApi.StringValue;
		/** Type the post office box number of the secondary address. */
		Address2_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Type the name of the main contact at the account's secondary address. */
		Address2_PrimaryContactName: DevKit.WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		Address2_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Type the state or province of the secondary address. */
		Address2_StateOrProvince: DevKit.WebApi.StringValue;
		/** Type the main phone number associated with the secondary address. */
		Address2_Telephone1: DevKit.WebApi.StringValue;
		/** Type a second phone number associated with the secondary address. */
		Address2_Telephone2: DevKit.WebApi.StringValue;
		/** Type a third phone number associated with the secondary address. */
		Address2_Telephone3: DevKit.WebApi.StringValue;
		/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address2_UPSZone: DevKit.WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address2_UTCOffset: DevKit.WebApi.IntegerValue;
		/** Unique identifier for address 3. */
		Address3_AddressId: DevKit.WebApi.GuidValue;
		/** Select the third address type. */
		Address3_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** Type the city for the 3rd address. */
		Address3_City: DevKit.WebApi.StringValue;
		/** Shows the complete third address. */
		Address3_Composite: DevKit.WebApi.StringValueReadonly;
		/** the country or region for the 3rd address. */
		Address3_Country: DevKit.WebApi.StringValue;
		/** Type the county for the third address. */
		Address3_County: DevKit.WebApi.StringValue;
		/** Type the fax number associated with the third address. */
		Address3_Fax: DevKit.WebApi.StringValue;
		/** Select the freight terms for the third address to make sure shipping orders are processed correctly. */
		Address3_FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Type the latitude value for the third address for use in mapping and other applications. */
		Address3_Latitude: DevKit.WebApi.DoubleValue;
		/** the first line of the 3rd address. */
		Address3_Line1: DevKit.WebApi.StringValue;
		/** the second line of the 3rd address. */
		Address3_Line2: DevKit.WebApi.StringValue;
		/** the third line of the 3rd address. */
		Address3_Line3: DevKit.WebApi.StringValue;
		/** Type the longitude value for the third address for use in mapping and other applications. */
		Address3_Longitude: DevKit.WebApi.DoubleValue;
		/** Type a descriptive name for the third address, such as Corporate Headquarters. */
		Address3_Name: DevKit.WebApi.StringValue;
		/** the ZIP Code or postal code for the 3rd address. */
		Address3_PostalCode: DevKit.WebApi.StringValue;
		/** the post office box number of the 3rd address. */
		Address3_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Type the name of the main contact at the account's third address. */
		Address3_PrimaryContactName: DevKit.WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		Address3_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** the state or province of the third address. */
		Address3_StateOrProvince: DevKit.WebApi.StringValue;
		/** Type the main phone number associated with the third address. */
		Address3_Telephone1: DevKit.WebApi.StringValue;
		/** Type a second phone number associated with the third address. */
		Address3_Telephone2: DevKit.WebApi.StringValue;
		/** Type a third phone number associated with the primary address. */
		Address3_Telephone3: DevKit.WebApi.StringValue;
		/** Type the UPS zone of the third address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address3_UPSZone: DevKit.WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address3_UTCOffset: DevKit.WebApi.IntegerValue;
		/** For system use only. */
		Aging30: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the Aging 30 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		Aging30_Base: DevKit.WebApi.MoneyValueReadonly;
		/** For system use only. */
		Aging60: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the Aging 60 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		Aging60_Base: DevKit.WebApi.MoneyValueReadonly;
		/** For system use only. */
		Aging90: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the Aging 90 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		Aging90_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
		Anniversary_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** Type the contact's annual income for use in profiling and financial analysis. */
		AnnualIncome: DevKit.WebApi.MoneyValue;
		/** Shows the Annual Income field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		AnnualIncome_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Type the name of the contact's assistant. */
		AssistantName: DevKit.WebApi.StringValue;
		/** Type the phone number for the contact's assistant. */
		AssistantPhone: DevKit.WebApi.StringValue;
		/** Enter the contact's birthday for use in customer gift programs or other communications. */
		BirthDate_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** Type a second business phone number for this contact. */
		Business2: DevKit.WebApi.StringValue;
		/** Stores Image of the Business Card */
		BusinessCard: DevKit.WebApi.StringValue;
		/** Stores Business Card Control Properties. */
		BusinessCardAttributes: DevKit.WebApi.StringValue;
		/** Type a callback phone number for this contact. */
		Callback: DevKit.WebApi.StringValue;
		/** Type the names of the contact's children for reference in communications and client programs. */
		ChildrensNames: DevKit.WebApi.StringValue;
		/** Type the company phone of the contact. */
		Company: DevKit.WebApi.StringValue;
		/** Unique identifier of the contact. */
		ContactId: DevKit.WebApi.GuidValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who created the record. */
		CreatedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
		CreditLimit: DevKit.WebApi.MoneyValue;
		/** Shows the Credit Limit field converted to the system's default base currency for reporting purposes. The calculations use the exchange rate specified in the Currencies area. */
		CreditLimit_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
		CreditOnHold: DevKit.WebApi.BooleanValue;
		/** Select the size of the contact's company for segmentation and reporting purposes. */
		CustomerSizeCode: DevKit.WebApi.OptionSetValue;
		/** Select the category that best describes the relationship between the contact and your organization. */
		CustomerTypeCode: DevKit.WebApi.OptionSetValue;
		/** Choose the default price list associated with the contact to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders. */
		DefaultPriceLevelId: DevKit.WebApi.LookupValue;
		/** Type the department or business unit where the contact works in the parent company or business. */
		Department: DevKit.WebApi.StringValue;
		/** Type additional information to describe the contact, such as an excerpt from the company's website. */
		Description: DevKit.WebApi.StringValue;
		/** Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email. */
		DoNotBulkEMail: DevKit.WebApi.BooleanValue;
		/** Select whether the contact accepts bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the letters. */
		DoNotBulkPostalMail: DevKit.WebApi.BooleanValue;
		/** Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email. */
		DoNotEMail: DevKit.WebApi.BooleanValue;
		/** Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns. */
		DoNotFax: DevKit.WebApi.BooleanValue;
		/** Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns. */
		DoNotPhone: DevKit.WebApi.BooleanValue;
		/** Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: DevKit.WebApi.BooleanValue;
		/** Select whether the contact accepts marketing materials, such as brochures or catalogs. Contacts that opt out can be excluded from marketing initiatives. */
		DoNotSendMM: DevKit.WebApi.BooleanValue;
		/** Select the contact's highest level of education for use in segmentation and analysis. */
		EducationCode: DevKit.WebApi.OptionSetValue;
		/** Type the primary email address for the contact. */
		EMailAddress1: DevKit.WebApi.StringValue;
		/** Type the secondary email address for the contact. */
		EMailAddress2: DevKit.WebApi.StringValue;
		/** Type an alternate email address for the contact. */
		EMailAddress3: DevKit.WebApi.StringValue;
		/** Type the employee ID or number for the contact for reference in orders, service cases, or other communications with the contact's organization. */
		EmployeeId: DevKit.WebApi.StringValue;
		/** Shows the default image for the record. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Identifier for an external user. */
		ExternalUserIdentifier: DevKit.WebApi.StringValue;
		/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
		FamilyStatusCode: DevKit.WebApi.OptionSetValue;
		/** Type the fax number for the contact. */
		Fax: DevKit.WebApi.StringValue;
		/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		FirstName: DevKit.WebApi.StringValue;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact. */
		FollowEmail: DevKit.WebApi.BooleanValue;
		/** Type the URL for the contact's FTP site to enable users to access data and share documents. */
		FtpSiteUrl: DevKit.WebApi.StringValue;
		/** Combines and shows the contact's first and last names so that the full name can be displayed in views and reports. */
		FullName: DevKit.WebApi.StringValueReadonly;
		/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		GenderCode: DevKit.WebApi.OptionSetValue;
		/** Type the passport number or other government ID for the contact for use in documents or reports. */
		GovernmentId: DevKit.WebApi.StringValue;
		/** Select whether the contact has any children for reference in follow-up phone calls and other communications. */
		HasChildrenCode: DevKit.WebApi.OptionSetValue;
		/** Type a second home phone number for this contact. */
		Home2: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information about whether the contact was auto-created when promoting an email or an appointment. */
		IsAutoCreate: DevKit.WebApi.BooleanValueReadonly;
		/** Select whether the contact exists in a separate accounting or other system, such as Microsoft Dynamics GP or another ERP database, for use in integration processes. */
		IsBackofficeCustomer: DevKit.WebApi.BooleanValue;
		IsPrivate: DevKit.WebApi.BooleanValueReadonly;
		/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		JobTitle: DevKit.WebApi.StringValue;
		/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		LastName: DevKit.WebApi.StringValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the date when the contact was last included in a marketing campaign or quick campaign. */
		LastUsedInCampaign_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Select the primary marketing source that directed the contact to your organization. */
		LeadSourceCode: DevKit.WebApi.OptionSetValue;
		/** Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact. */
		ManagerName: DevKit.WebApi.StringValue;
		/** Type the phone number for the contact's manager. */
		ManagerPhone: DevKit.WebApi.StringValue;
		/** Whether is only for marketing */
		MarketingOnly: DevKit.WebApi.BooleanValue;
		MasterContactIdName: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the master contact for merge. */
		MasterId: DevKit.WebApi.LookupValueReadonly;
		/** Shows whether the account has been merged with a master contact. */
		Merged: DevKit.WebApi.BooleanValueReadonly;
		/** Type the contact's middle name or initial to make sure the contact is addressed correctly. */
		MiddleName: DevKit.WebApi.StringValue;
		/** Type the mobile phone number for the contact. */
		MobilePhone: DevKit.WebApi.StringValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who modified the record. */
		ModifiedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Describes whether contact is opted out or not */
		msdyn_gdproptout: DevKit.WebApi.BooleanValue;
		/** Whether or not the contact belongs to the associated account */
		msdyn_orgchangestatus: DevKit.WebApi.OptionSetValue;
		msdyusd_CurrentProfile: DevKit.WebApi.StringValue;
		msdyusd_Facebook: DevKit.WebApi.StringValue;
		msdyusd_Twitter: DevKit.WebApi.StringValue;
		/** Type the contact's nickname. */
		NickName: DevKit.WebApi.StringValue;
		/** Type the number of children the contact has for reference in follow-up phone calls and other communications. */
		NumberOfChildren: DevKit.WebApi.IntegerValue;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the lead that the contact was created if the contact was created by converting a lead in Microsoft Dynamics 365. This is used to relate the contact to the data on the originating lead for use in reporting and analytics. */
		OriginatingLeadId: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the contact. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the contact. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the contact. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Type the pager number for the contact. */
		Pager: DevKit.WebApi.StringValue;
		/** Unique identifier of the parent contact. */
		ParentContactId: DevKit.WebApi.LookupValueReadonly;
		parentcustomerid_account: DevKit.WebApi.LookupValue;
		parentcustomerid_contact: DevKit.WebApi.LookupValue;
		/** Shows whether the contact participates in workflow rules. */
		ParticipatesInWorkflow: DevKit.WebApi.BooleanValue;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: DevKit.WebApi.OptionSetValue;
		/** Select the preferred day of the week for service appointments. */
		PreferredAppointmentDayCode: DevKit.WebApi.OptionSetValue;
		/** Select the preferred time of day for service appointments. */
		PreferredAppointmentTimeCode: DevKit.WebApi.OptionSetValue;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: DevKit.WebApi.OptionSetValue;
		/** Choose the contact's preferred service facility or equipment to make sure services are scheduled correctly for the customer. */
		PreferredEquipmentId: DevKit.WebApi.LookupValue;
		/** Choose the contact's preferred service to make sure services are scheduled correctly for the customer. */
		PreferredServiceId: DevKit.WebApi.LookupValue;
		/** Choose the regular or preferred customer service representative for reference when scheduling service activities for the contact. */
		PreferredSystemUserId: DevKit.WebApi.LookupValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns. */
		Salutation: DevKit.WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Contact record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
		SpousesName: DevKit.WebApi.StringValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the contact is active or inactive. Inactive contacts are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the contact's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SubscriptionId: DevKit.WebApi.GuidValue;
		/** Type the suffix used in the contact's name, such as Jr. or Sr. to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		Suffix: DevKit.WebApi.StringValue;
		/** Number of users or conversations followed the record */
		TeamsFollowed: DevKit.WebApi.IntegerValue;
		/** Type the main phone number for this contact. */
		Telephone1: DevKit.WebApi.StringValue;
		/** Type a second phone number for this contact. */
		Telephone2: DevKit.WebApi.StringValue;
		/** Type a third phone number for this contact. */
		Telephone3: DevKit.WebApi.StringValue;
		/** Select a region or territory for the contact for use in segmentation and analysis. */
		TerritoryCode: DevKit.WebApi.OptionSetValue;
		/** Total time spent for emails (read and write) and meetings by me in relation to the contact record. */
		TimeSpentByMeOnEmailAndMeetings: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the contact. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Type the contact's professional or personal website or blog URL. */
		WebSiteUrl: DevKit.WebApi.StringValue;
		/** Type the phonetic spelling of the contact's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiFirstName: DevKit.WebApi.StringValue;
		/** Shows the combined Yomi first and last names of the contact so that the full phonetic name can be displayed in views and reports. */
		YomiFullName: DevKit.WebApi.StringValueReadonly;
		/** Type the phonetic spelling of the contact's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiLastName: DevKit.WebApi.StringValue;
		/** Type the phonetic spelling of the contact's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiMiddleName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace Contact {
		enum AccountRoleCode {
			/** 1 */
			Decision_Maker,
			/** 2 */
			Employee,
			/** 3 */
			Influencer
		}
		enum Address1_AddressTypeCode {
			/** 1 */
			Bill_To,
			/** 4 */
			Other,
			/** 3 */
			Primary,
			/** 2 */
			Ship_To
		}
		enum Address1_FreightTermsCode {
			/** 1 */
			FOB,
			/** 2 */
			No_Charge
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Airborne,
			/** 2 */
			DHL,
			/** 3 */
			FedEx,
			/** 6 */
			Full_Load,
			/** 5 */
			Postal_Mail,
			/** 4 */
			UPS,
			/** 7 */
			Will_Call
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address2_FreightTermsCode {
			/** 1 */
			Default_Value
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum Address3_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address3_FreightTermsCode {
			/** 1 */
			Default_Value
		}
		enum Address3_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum CustomerSizeCode {
			/** 1 */
			Default_Value
		}
		enum CustomerTypeCode {
			/** 1 */
			Default_Value
		}
		enum EducationCode {
			/** 1 */
			Default_Value
		}
		enum FamilyStatusCode {
			/** 3 */
			Divorced,
			/** 2 */
			Married,
			/** 1 */
			Single,
			/** 4 */
			Widowed
		}
		enum GenderCode {
			/** 2 */
			Female,
			/** 1 */
			Male
		}
		enum HasChildrenCode {
			/** 1 */
			Default_Value
		}
		enum LeadSourceCode {
			/** 1 */
			Default_Value
		}
		enum msdyn_orgchangestatus {
			/** 2 */
			Ignore,
			/** 0 */
			No_Feedback,
			/** 1 */
			Not_at_Company
		}
		enum PaymentTermsCode {
			/** 2 */
			_2_10_Net_30,
			/** 1 */
			Net_30,
			/** 3 */
			Net_45,
			/** 4 */
			Net_60
		}
		enum PreferredAppointmentDayCode {
			/** 5 */
			Friday,
			/** 1 */
			Monday,
			/** 6 */
			Saturday,
			/** 0 */
			Sunday,
			/** 4 */
			Thursday,
			/** 2 */
			Tuesday,
			/** 3 */
			Wednesday
		}
		enum PreferredAppointmentTimeCode {
			/** 2 */
			Afternoon,
			/** 3 */
			Evening,
			/** 1 */
			Morning
		}
		enum PreferredContactMethodCode {
			/** 1 */
			Any,
			/** 2 */
			Email,
			/** 4 */
			Fax,
			/** 5 */
			Mail,
			/** 3 */
			Phone
		}
		enum ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum TerritoryCode {
			/** 1 */
			Default_Value
		}
        enum RollupState {
            /** 0 - Attribute value is yet to be calculated */
            NotCalculated,
            /** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
            Calculated,
            /** 2 - Attribute value calculation lead to overflow error */
            OverflowError,
            /** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
            OtherError,
            /** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
            RetryLimitExceeded,
            /** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
            HierarchicalRecursionLimitReached,
            /** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
            LoopDetected
        }
	}
}
//{'JsForm':['Contact'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.13.33','JsFormVersion':'v2'}