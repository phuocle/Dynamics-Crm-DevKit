//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormLead {
		interface Header extends DevKit.Controls.IHeader {
			/** Select a rating value to indicate the lead's potential to become a customer. */
			LeadQualityCode: DevKit.Controls.OptionSet;
			/** Select the primary marketing source that prompted the lead to contact you. */
			LeadSourceCode: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the lead's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_details_tab_Sections {
			contact_methods: DevKit.Controls.Section;
			lead_information: DevKit.Controls.Section;
			marketing_information: DevKit.Controls.Section;
		}
		interface tab_documents_sharepoint_Sections {
			documents_sharepoint_section: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			BusinessCard: DevKit.Controls.Section;
			company: DevKit.Controls.Section;
			Contact: DevKit.Controls.Section;
			MapSection: DevKit.Controls.Section;
			RELATED_TAB: DevKit.Controls.Section;
			SOCIAL_PANE: DevKit.Controls.Section;
			Summary_CadenceWidget: DevKit.Controls.Section;
		}
		interface tab_details_tab extends DevKit.Controls.ITab {
			Section: tab_details_tab_Sections;
		}
		interface tab_documents_sharepoint extends DevKit.Controls.ITab {
			Section: tab_documents_sharepoint_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			details_tab: tab_details_tab;
			documents_sharepoint: tab_documents_sharepoint;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Stores Image of the Business Card */
			BusinessCard: DevKit.Controls.String;
			CadenceWidgetControl: DevKit.Controls.ActionCards;
			/** Choose the campaign that the lead was generated from to track the effectiveness of marketing campaigns and identify  communications received by the lead. */
			CampaignId: DevKit.Controls.Lookup;
			/** Type the name of the company associated with the lead. This becomes the account name when the lead is qualified and converted to a customer account. */
			CompanyName: DevKit.Controls.String;
			/** Type additional information to describe the lead, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Select whether the lead accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the lead can be added to marketing lists, but will be excluded from the email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			/** Select whether the lead allows direct email sent from Microsoft Dynamics 365. */
			DoNotEMail: DevKit.Controls.Boolean;
			/** Select whether the lead allows phone calls. */
			DoNotPhone: DevKit.Controls.Boolean;
			/** Select whether the lead allows direct mail. */
			DoNotPostalMail: DevKit.Controls.Boolean;
			/** Select whether the lead accepts marketing materials, such as brochures or catalogs. Leads that opt out can be excluded from marketing initiatives. */
			DoNotSendMM: DevKit.Controls.Boolean;
			/** Type the primary email address for the lead. */
			EMailAddress1: DevKit.Controls.String;
			/** Combines and shows the lead's first and last names so the full name can be displayed in views and reports. */
			FullName: DevKit.Controls.String;
			/** Select the primary industry in which the lead's business is focused, for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Controls.OptionSet;
			/** Type the job title of the primary contact for this lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Shows the date when the lead was last included in a marketing campaign or quick campaign. */
			LastUsedInCampaign: DevKit.Controls.Date;
			mapcontrol: DevKit.Controls.Map;
			/** Type the mobile phone number for the primary contact for the lead. */
			MobilePhone: DevKit.Controls.String;
			/** Whether the Opportunity created when qualifying this Lead is for an Item- based or a Work-based sale */
			msdyn_ordertype: DevKit.Controls.OptionSet;
			/** Whether the Opportunity created when qualifying this Lead is for an Item- based or a Work-based sale */
			msdyn_ordertype1: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Type the number of employees that work at the company associated with the lead, for use in marketing segmentation and demographic analysis. */
			NumberOfEmployees: DevKit.Controls.Integer;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Type the annual revenue of the company associated with the lead to provide an understanding of the prospect's business. */
			Revenue: DevKit.Controls.Money;
			/** Type the Standard Industrial Classification (SIC) code that indicates the lead's primary industry of business for use in marketing segmentation and demographic analysis. */
			SIC: DevKit.Controls.String;
			/** Type a subject or descriptive name, such as the expected order, company name, or marketing source list, to identify the lead. */
			Subject: DevKit.Controls.String;
			/** Type the work phone number for the primary contact for the lead. */
			Telephone1: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Type the website URL for the company associated with this lead. */
			WebSiteUrl: DevKit.Controls.String;
		}
		interface Navigation {
			navActivities: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navCampaignsInSFA: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navLeadCompetitor: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface ProcessLead_to_Opportunity_Sales_Process {
			/** Information about the budget amount of the lead's company or organization. */
			BudgetAmount: DevKit.Controls.Money;
			/** Select whether your notes include information about who makes the purchase decisions at the lead's company. */
			DecisionMaker: DevKit.Controls.Boolean;
			/** Type additional information to describe the lead, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Choose an account to connect this lead to, so that the relationship is visible in reports and analytics. */
			ParentAccountId: DevKit.Controls.Lookup;
			/** Choose a contact to connect this lead to, so that the relationship is visible in reports and analytics. */
			ParentContactId: DevKit.Controls.Lookup;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			PurchaseProcess: DevKit.Controls.OptionSet;
			/** Choose how long the lead will likely take to make the purchase, so the sales team will be aware. */
			PurchaseTimeFrame: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
			Lead_to_Opportunity_Sales_Process: ProcessLead_to_Opportunity_Sales_Process;
		}
		interface Grid {
			Competitors: DevKit.Controls.Grid;
			DocumentsSubGrid: DevKit.Controls.Grid;
			Stakeholders: DevKit.Controls.Grid;
		}
	}
	class FormLead extends DevKit.IForm {
		/**
		* Lead [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Lead */
		Body: DevKit.FormLead.Body;
		/** The Header section of form Lead */
		Header: DevKit.FormLead.Header;
		/** The Navigation of form Lead */
		Navigation: DevKit.FormLead.Navigation;
		/** The Process of form Lead */
		Process: DevKit.FormLead.Process;
		/** The Grid of form Lead */
		Grid: DevKit.FormLead.Grid;
		/** The SidePanes of form Lead */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormLead_Sales_Insights {
		interface Header extends DevKit.Controls.IHeader {
			/** Select a rating value to indicate the lead's potential to become a customer. */
			LeadQualityCode: DevKit.Controls.OptionSet;
			/** Select the primary marketing source that prompted the lead to contact you. */
			LeadSourceCode: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the lead's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_details_tab_Sections {
			contact_methods: DevKit.Controls.Section;
			lead_information: DevKit.Controls.Section;
			marketing_information: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			company: DevKit.Controls.Section;
			Contact: DevKit.Controls.Section;
			MapSection: DevKit.Controls.Section;
			PredictiveScoreSection: DevKit.Controls.Section;
			RELATED_TAB: DevKit.Controls.Section;
			SOCIAL_PANE: DevKit.Controls.Section;
			Summary_CadenceWidget: DevKit.Controls.Section;
			Summary_section_6: DevKit.Controls.Section;
		}
		interface tab_details_tab extends DevKit.Controls.ITab {
			Section: tab_details_tab_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			details_tab: tab_details_tab;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			ActionCards: DevKit.Controls.ActionCards;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			CadenceWidgetControl: DevKit.Controls.ActionCards;
			cc_1626168480122: DevKit.Controls.ActionCards;
			/** Type the name of the company associated with the lead. This becomes the account name when the lead is qualified and converted to a customer account. */
			CompanyName: DevKit.Controls.String;
			/** Type additional information to describe the lead, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Select whether the lead accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the lead can be added to marketing lists, but will be excluded from the email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			/** Select whether the lead allows direct email sent from Microsoft Dynamics 365. */
			DoNotEMail: DevKit.Controls.Boolean;
			/** Select whether the lead allows phone calls. */
			DoNotPhone: DevKit.Controls.Boolean;
			/** Select whether the lead allows direct mail. */
			DoNotPostalMail: DevKit.Controls.Boolean;
			/** Select whether the lead accepts marketing materials, such as brochures or catalogs. Leads that opt out can be excluded from marketing initiatives. */
			DoNotSendMM: DevKit.Controls.Boolean;
			/** Type the primary email address for the lead. */
			EMailAddress1: DevKit.Controls.String;
			/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the lead. */
			FollowEmail: DevKit.Controls.Boolean;
			/** Combines and shows the lead's first and last names so the full name can be displayed in views and reports. */
			FullName: DevKit.Controls.String;
			/** Select the primary industry in which the lead's business is focused, for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Controls.OptionSet;
			/** Type the job title of the primary contact for this lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Shows the date when the lead was last included in a marketing campaign or quick campaign. */
			LastUsedInCampaign: DevKit.Controls.Date;
			mapcontrol: DevKit.Controls.Map;
			/** Type the mobile phone number for the primary contact for the lead. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Type the number of employees that work at the company associated with the lead, for use in marketing segmentation and demographic analysis. */
			NumberOfEmployees: DevKit.Controls.Integer;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Type the annual revenue of the company associated with the lead to provide an understanding of the prospect's business. */
			Revenue: DevKit.Controls.Money;
			/** Type the Standard Industrial Classification (SIC) code that indicates the lead's primary industry of business for use in marketing segmentation and demographic analysis. */
			SIC: DevKit.Controls.String;
			/** Type a subject or descriptive name, such as the expected order, company name, or marketing source list, to identify the lead. */
			Subject: DevKit.Controls.String;
			/** Type the work phone number for the primary contact for the lead. */
			Telephone1: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Type the website URL for the company associated with this lead. */
			WebSiteUrl: DevKit.Controls.String;
		}
		interface Navigation {
			navActivities: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navCampaignsInSFA: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navLeadCompetitor: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface ProcessLead_to_Opportunity_Sales_Process {
			/** Information about the budget amount of the lead's company or organization. */
			BudgetAmount: DevKit.Controls.Money;
			/** Select whether your notes include information about who makes the purchase decisions at the lead's company. */
			DecisionMaker: DevKit.Controls.Boolean;
			/** Type additional information to describe the lead, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Choose an account to connect this lead to, so that the relationship is visible in reports and analytics. */
			ParentAccountId: DevKit.Controls.Lookup;
			/** Choose a contact to connect this lead to, so that the relationship is visible in reports and analytics. */
			ParentContactId: DevKit.Controls.Lookup;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			PurchaseProcess: DevKit.Controls.OptionSet;
			/** Choose how long the lead will likely take to make the purchase, so the sales team will be aware. */
			PurchaseTimeFrame: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
			Lead_to_Opportunity_Sales_Process: ProcessLead_to_Opportunity_Sales_Process;
		}
		interface Grid {
			Competitors: DevKit.Controls.Grid;
			Stakeholders: DevKit.Controls.Grid;
		}
	}
	class FormLead_Sales_Insights extends DevKit.IForm {
		/**
		* Sales Insights [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Lead_Sales_Insights */
		Body: DevKit.FormLead_Sales_Insights.Body;
		/** The Header section of form Lead_Sales_Insights */
		Header: DevKit.FormLead_Sales_Insights.Header;
		/** The Navigation of form Lead_Sales_Insights */
		Navigation: DevKit.FormLead_Sales_Insights.Navigation;
		/** The Process of form Lead_Sales_Insights */
		Process: DevKit.FormLead_Sales_Insights.Process;
		/** The Grid of form Lead_Sales_Insights */
		Grid: DevKit.FormLead_Sales_Insights.Grid;
		/** The SidePanes of form Lead_Sales_Insights */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormLead_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Information about the budget amount of the lead's company or organization. */
			BudgetAmount: DevKit.Controls.Money;
			/** Stores Image of the Business Card */
			BusinessCard: DevKit.Controls.String;
			/** Type the name of the company associated with the lead. This becomes the account name when the lead is qualified and converted to a customer account. */
			CompanyName: DevKit.Controls.String;
			/** Type additional information to describe the lead, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Type the primary email address for the lead. */
			EMailAddress1: DevKit.Controls.String;
			/** Type the first name of the primary contact for the lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName: DevKit.Controls.String;
			/** Type the job title of the primary contact for this lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Type the last name of the primary contact for the lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName: DevKit.Controls.String;
			/** Select the primary marketing source that prompted the lead to contact you. */
			LeadSourceCode: DevKit.Controls.OptionSet;
			/** Type the mobile phone number for the primary contact for the lead. */
			MobilePhone: DevKit.Controls.String;
			/** Choose how long the lead will likely take to make the purchase, so the sales team will be aware. */
			PurchaseTimeFrame: DevKit.Controls.OptionSet;
			/** Type a subject or descriptive name, such as the expected order, company name, or marketing source list, to identify the lead. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormLead_Quick_Create extends DevKit.IForm {
		/**
		* Lead Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Lead_Quick_Create */
		Body: DevKit.FormLead_Quick_Create.Body;
	}
	class LeadApi {
		/**
		* DynamicsCrm.DevKit LeadApi
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
		/** Unique identifier of the account with which the lead is associated. */
		AccountId: DevKit.WebApi.LookupValueReadonly;
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
		/** Information about the budget amount of the lead's company or organization. */
		BudgetAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Budget Amount in base currency. */
		BudgetAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Information about the budget status of the lead's company or organization. */
		BudgetStatus: DevKit.WebApi.OptionSetValue;
		/** Stores Image of the Business Card */
		BusinessCard: DevKit.WebApi.StringValue;
		/** Stores Business Card Control Properties. */
		BusinessCardAttributes: DevKit.WebApi.StringValue;
		/** Choose the campaign that the lead was generated from to track the effectiveness of marketing campaigns and identify  communications received by the lead. */
		CampaignId: DevKit.WebApi.LookupValue;
		/** Type the name of the company associated with the lead. This becomes the account name when the lead is qualified and converted to a customer account. */
		CompanyName: DevKit.WebApi.StringValue;
		/** Select whether the lead confirmed interest in your offerings. This helps in determining the lead quality. */
		ConfirmInterest: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the contact with which the lead is associated. */
		ContactId: DevKit.WebApi.LookupValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
		customerid_account: DevKit.WebApi.LookupValue;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Select whether your notes include information about who makes the purchase decisions at the lead's company. */
		DecisionMaker: DevKit.WebApi.BooleanValue;
		/** Type additional information to describe the lead, such as an excerpt from the company's website. */
		Description: DevKit.WebApi.StringValue;
		/** Select whether the lead accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the lead can be added to marketing lists, but will be excluded from the email. */
		DoNotBulkEMail: DevKit.WebApi.BooleanValue;
		/** Select whether the lead allows direct email sent from Microsoft Dynamics 365. */
		DoNotEMail: DevKit.WebApi.BooleanValue;
		/** Select whether the lead allows faxes. */
		DoNotFax: DevKit.WebApi.BooleanValue;
		/** Select whether the lead allows phone calls. */
		DoNotPhone: DevKit.WebApi.BooleanValue;
		/** Select whether the lead allows direct mail. */
		DoNotPostalMail: DevKit.WebApi.BooleanValue;
		/** Select whether the lead accepts marketing materials, such as brochures or catalogs. Leads that opt out can be excluded from marketing initiatives. */
		DoNotSendMM: DevKit.WebApi.BooleanValue;
		/** Type the primary email address for the lead. */
		EMailAddress1: DevKit.WebApi.StringValue;
		/** Type the secondary email address for the lead. */
		EMailAddress2: DevKit.WebApi.StringValue;
		/** Type a third email address for the lead. */
		EMailAddress3: DevKit.WebApi.StringValue;
		/** Shows the default image for the record. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Type the estimated revenue value that this lead will generate to assist in sales forecasting and planning. */
		EstimatedAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Est. Value in base currency. */
		EstimatedAmount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the expected close date for the lead, so that the sales team can schedule timely follow-up meetings to move the prospect to the next sales stage. */
		EstimatedCloseDate_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** Type a numeric value of the lead's estimated value, such as a product quantity, if no revenue amount can be specified in the Est. Value field. This can be used for sales forecasting and planning. */
		EstimatedValue: DevKit.WebApi.DoubleValue;
		/** Select whether the fit between the lead's requirements and your offerings was evaluated. */
		EvaluateFit: DevKit.WebApi.BooleanValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Type the fax number for the primary contact for the lead. */
		Fax: DevKit.WebApi.StringValue;
		/** Type the first name of the primary contact for the lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
		FirstName: DevKit.WebApi.StringValue;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the lead. */
		FollowEmail: DevKit.WebApi.BooleanValue;
		/** Combines and shows the lead's first and last names so the full name can be displayed in views and reports. */
		FullName: DevKit.WebApi.StringValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Select the primary industry in which the lead's business is focused, for use in marketing segmentation and demographic analysis. */
		IndustryCode: DevKit.WebApi.OptionSetValue;
		/** Choose whether someone from the sales team contacted this lead earlier. */
		InitialCommunication: DevKit.WebApi.OptionSetValue;
		/** Information about whether the contact was auto-created when promoting an email or an appointment. */
		IsAutoCreate: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether the lead is private or visible to the entire organization. */
		IsPrivate: DevKit.WebApi.BooleanValueReadonly;
		/** Type the job title of the primary contact for this lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
		JobTitle: DevKit.WebApi.StringValue;
		/** Type the last name of the primary contact for the lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
		LastName: DevKit.WebApi.StringValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the date when the lead was last included in a marketing campaign or quick campaign. */
		LastUsedInCampaign_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the lead. */
		LeadId: DevKit.WebApi.GuidValue;
		/** Select a rating value to indicate the lead's potential to become a customer. */
		LeadQualityCode: DevKit.WebApi.OptionSetValue;
		/** Select the primary marketing source that prompted the lead to contact you. */
		LeadSourceCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the master lead for merge. */
		MasterId: DevKit.WebApi.LookupValueReadonly;
		/** Tells whether the lead has been merged with another lead. */
		Merged: DevKit.WebApi.BooleanValueReadonly;
		/** Type the middle name or initial of the primary contact for the lead to make sure the prospect is addressed correctly. */
		MiddleName: DevKit.WebApi.StringValue;
		/** Type the mobile phone number for the primary contact for the lead. */
		MobilePhone: DevKit.WebApi.StringValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Describes whether lead is opted out or not */
		msdyn_gdproptout: DevKit.WebApi.BooleanValue;
		msdyn_LeadGrade: DevKit.WebApi.OptionSetValue;
		msdyn_LeadScore: DevKit.WebApi.IntegerValue;
		msdyn_LeadScoreTrend: DevKit.WebApi.OptionSetValue;
		/** Whether the Opportunity created when qualifying this Lead is for an Item- based or a Work-based sale */
		msdyn_ordertype: DevKit.WebApi.OptionSetValue;
		/** Predictive score */
		msdyn_PredictiveScoreId: DevKit.WebApi.LookupValue;
		/** Result of the assignment rule process */
		msdyn_salesassignmentresult: DevKit.WebApi.OptionSetValue;
		msdyn_ScoreHistory: DevKit.WebApi.StringValue;
		msdyn_ScoreReasons: DevKit.WebApi.StringValue;
		/** Unique identifier for Segment associated with Lead. */
		msdyn_segmentid: DevKit.WebApi.LookupValue;
		/** Choose how high the level of need is for the lead's company. */
		Need: DevKit.WebApi.OptionSetValue;
		/** Type the number of employees that work at the company associated with the lead, for use in marketing segmentation and demographic analysis. */
		NumberOfEmployees: DevKit.WebApi.IntegerValue;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** This attribute is used for Sample Service Business Processes. */
		OriginatingCaseId: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Type the pager number for the primary contact for the lead. */
		Pager: DevKit.WebApi.StringValue;
		/** Choose an account to connect this lead to, so that the relationship is visible in reports and analytics. */
		ParentAccountId: DevKit.WebApi.LookupValue;
		/** Choose a contact to connect this lead to, so that the relationship is visible in reports and analytics. */
		ParentContactId: DevKit.WebApi.LookupValue;
		/** Shows whether the lead participates in workflow rules. */
		ParticipatesInWorkflow: DevKit.WebApi.BooleanValue;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: DevKit.WebApi.OptionSetValue;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
		PurchaseProcess: DevKit.WebApi.OptionSetValue;
		/** Choose how long the lead will likely take to make the purchase, so the sales team will be aware. */
		PurchaseTimeFrame: DevKit.WebApi.OptionSetValue;
		/** Type comments about the qualification or scoring of the lead. */
		QualificationComments: DevKit.WebApi.StringValue;
		/** Choose the opportunity that the lead was qualified on and then converted to. */
		QualifyingOpportunityId: DevKit.WebApi.LookupValue;
		/** Related Campaign Response. */
		RelatedObjectId: DevKit.WebApi.LookupValue;
		/** Type the annual revenue of the company associated with the lead to provide an understanding of the prospect's business. */
		Revenue: DevKit.WebApi.MoneyValue;
		/** Value of the Annual Revenue in base currency. */
		Revenue_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the sales stage of this lead to aid the sales team in their efforts to convert this lead to an opportunity. */
		SalesStage: DevKit.WebApi.OptionSetValue;
		/** Select the sales process stage for the lead to help determine the probability of the lead converting to an opportunity. */
		SalesStageCode: DevKit.WebApi.OptionSetValue;
		/** Type the salutation of the primary contact for this lead to make sure the prospect is addressed correctly in sales calls, email messages, and marketing campaigns. */
		Salutation: DevKit.WebApi.StringValue;
		/** Enter the date and time of the prospecting follow-up meeting with the lead. */
		ScheduleFollowUp_Prospect_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the date and time of the qualifying follow-up meeting with the lead. */
		ScheduleFollowUp_Qualify_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type the Standard Industrial Classification (SIC) code that indicates the lead's primary industry of business for use in marketing segmentation and demographic analysis. */
		SIC: DevKit.WebApi.StringValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Lead record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the lead is open, qualified, or disqualified. Qualified and disqualified leads are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the lead's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subject or descriptive name, such as the expected order, company name, or marketing source list, to identify the lead. */
		Subject: DevKit.WebApi.StringValue;
		/** Number of users or conversations followed the record */
		TeamsFollowed: DevKit.WebApi.IntegerValue;
		/** Type the work phone number for the primary contact for the lead. */
		Telephone1: DevKit.WebApi.StringValue;
		/** Type the home phone number for the primary contact for the lead. */
		Telephone2: DevKit.WebApi.StringValue;
		/** Type an alternate phone number for the primary contact for the lead. */
		Telephone3: DevKit.WebApi.StringValue;
		/** Total time spent for emails (read and write) and meetings by me in relation to the lead record. */
		TimeSpentByMeOnEmailAndMeetings: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Type the website URL for the company associated with this lead. */
		WebSiteUrl: DevKit.WebApi.StringValue;
		/** Type the phonetic spelling of the lead's company name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the prospect. */
		YomiCompanyName: DevKit.WebApi.StringValue;
		/** Type the phonetic spelling of the lead's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the prospect. */
		YomiFirstName: DevKit.WebApi.StringValue;
		/** Combines and shows the lead's Yomi first and last names so the full phonetic name can be displayed in views and reports. */
		YomiFullName: DevKit.WebApi.StringValueReadonly;
		/** Type the phonetic spelling of the lead's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the prospect. */
		YomiLastName: DevKit.WebApi.StringValue;
		/** Type the phonetic spelling of the lead's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the prospect. */
		YomiMiddleName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace Lead {
		enum Address1_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum BudgetStatus {
			/** 2 */
			Can_Buy,
			/** 1 */
			May_Buy,
			/** 0 */
			No_Committed_Budget,
			/** 3 */
			Will_Buy
		}
		enum IndustryCode {
			/** 1 */
			Accounting,
			/** 2 */
			Agriculture_and_Non_petrol_Natural_Resource_Extraction,
			/** 3 */
			Broadcasting_Printing_and_Publishing,
			/** 4 */
			Brokers,
			/** 5 */
			Building_Supply_Retail,
			/** 6 */
			Business_Services,
			/** 7 */
			Consulting,
			/** 8 */
			Consumer_Services,
			/** 9 */
			Design_Direction_and_Creative_Management,
			/** 10 */
			Distributors_Dispatchers_and_Processors,
			/** 11 */
			Doctors_Offices_and_Clinics,
			/** 12 */
			Durable_Manufacturing,
			/** 13 */
			Eating_and_Drinking_Places,
			/** 14 */
			Entertainment_Retail,
			/** 15 */
			Equipment_Rental_and_Leasing,
			/** 16 */
			Financial,
			/** 17 */
			Food_and_Tobacco_Processing,
			/** 18 */
			Inbound_Capital_Intensive_Processing,
			/** 19 */
			Inbound_Repair_and_Services,
			/** 20 */
			Insurance,
			/** 21 */
			Legal_Services,
			/** 22 */
			Non_Durable_Merchandise_Retail,
			/** 23 */
			Outbound_Consumer_Service,
			/** 24 */
			Petrochemical_Extraction_and_Distribution,
			/** 25 */
			Service_Retail,
			/** 26 */
			SIG_Affiliations,
			/** 27 */
			Social_Services,
			/** 28 */
			Special_Outbound_Trade_Contractors,
			/** 29 */
			Specialty_Realty,
			/** 30 */
			Transportation,
			/** 31 */
			Utility_Creation_and_Distribution,
			/** 32 */
			Vehicle_Retail,
			/** 33 */
			Wholesale
		}
		enum InitialCommunication {
			/** 0 */
			Contacted,
			/** 1 */
			Not_Contacted
		}
		enum LeadQualityCode {
			/** 3 */
			Cold,
			/** 1 */
			Hot,
			/** 2 */
			Warm
		}
		enum LeadSourceCode {
			/** 1 */
			Advertisement,
			/** 2 */
			Employee_Referral,
			/** 3 */
			External_Referral,
			/** 10 */
			Other,
			/** 4 */
			Partner,
			/** 5 */
			Public_Relations,
			/** 6 */
			Seminar,
			/** 7 */
			Trade_Show,
			/** 8 */
			Web,
			/** 9 */
			Word_of_Mouth
		}
		enum msdyn_LeadGrade {
			/** 0 */
			Grade_A,
			/** 1 */
			Grade_B,
			/** 2 */
			Grade_C,
			/** 3 */
			Grade_D
		}
		enum msdyn_LeadScoreTrend {
			/** 2 */
			Declining,
			/** 0 */
			Improving,
			/** 3 */
			Not_enough_info,
			/** 1 */
			Steady
		}
		enum msdyn_ordertype {
			/** 192350000 */
			Item_based,
			/** 690970002 */
			Service_Maintenance_Based,
			/** 192350001 */
			Work_based
		}
		enum msdyn_salesassignmentresult {
			/** 1 */
			Failed,
			/** 0 */
			Succeeded
		}
		enum Need {
			/** 2 */
			Good_to_have,
			/** 0 */
			Must_have,
			/** 3 */
			No_need,
			/** 1 */
			Should_have
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
		enum PriorityCode {
			/** 1 */
			Default_Value
		}
		enum PurchaseProcess {
			/** 1 */
			Committee,
			/** 0 */
			Individual,
			/** 2 */
			Unknown
		}
		enum PurchaseTimeFrame {
			/** 0 */
			Immediate,
			/** 2 */
			Next_Quarter,
			/** 1 */
			This_Quarter,
			/** 3 */
			This_Year,
			/** 4 */
			Unknown
		}
		enum SalesStage {
			/** 0 */
			Qualify
		}
		enum SalesStageCode {
			/** 1 */
			Default_Value
		}
		enum StateCode {
			/** 2 */
			Disqualified,
			/** 0 */
			Open,
			/** 1 */
			Qualified
		}
		enum StatusCode {
			/** 7 */
			Canceled,
			/** 5 */
			Cannot_Contact,
			/** 2 */
			Contacted,
			/** 4 */
			Lost,
			/** 1 */
			New,
			/** 6 */
			No_Longer_Interested,
			/** 3 */
			Qualified
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}