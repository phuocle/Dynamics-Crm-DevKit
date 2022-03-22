//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormContact_AI_for_Sales {
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
		interface tab_SUMMARY_TAB_Sections {
			CONTACT_INFORMATION: DevKit.Controls.Section;
			CUSTOMER_DETAILS_TAB: DevKit.Controls.Section;
			MapSection: DevKit.Controls.Section;
			Summary_CadenceWidget: DevKit.Controls.Section;
			Summary_section_6: DevKit.Controls.Section;
			TalkingPoints_section: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			DETAILS_TAB: tab_DETAILS_TAB;
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			ActionCards: DevKit.Controls.ActionCards;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
			Anniversary: DevKit.Controls.Date;
			/** Enter the contact's birthday for use in customer gift programs or other communications. */
			BirthDate: DevKit.Controls.Date;
			CadenceWidgetControl: DevKit.Controls.ActionCards;
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
			notescontrol: DevKit.Controls.Note;
			/** Shows the lead that the contact was created if the contact was created by converting a lead in Microsoft Dynamics 365. This is used to relate the contact to the data on the originating lead for use in reporting and analytics. */
			OriginatingLeadId: DevKit.Controls.Lookup;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId1: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode1: DevKit.Controls.OptionSet;
			/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
			SpousesName: DevKit.Controls.String;
			TalkingPoints: DevKit.Controls.ActionCards;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
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
		interface ProcessCase_to_Work_Order_Business_Process {

		}
		interface ProcessPhone_to_Case_Process {

		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
		}
		interface Grid {
			contactopportunitiesgrid: DevKit.Controls.Grid;
		}
	}
	class FormContact_AI_for_Sales extends DevKit.IForm {
		/**
		* AI for Sales [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Contact_AI_for_Sales */
		Body: DevKit.FormContact_AI_for_Sales.Body;
		/** The Header section of form Contact_AI_for_Sales */
		Header: DevKit.FormContact_AI_for_Sales.Header;
		/** The Navigation of form Contact_AI_for_Sales */
		Navigation: DevKit.FormContact_AI_for_Sales.Navigation;
		/** The QuickForm of form Contact_AI_for_Sales */
		QuickForm: DevKit.FormContact_AI_for_Sales.QuickForm;
		/** The Process of form Contact_AI_for_Sales */
		Process: DevKit.FormContact_AI_for_Sales.Process;
		/** The Grid of form Contact_AI_for_Sales */
		Grid: DevKit.FormContact_AI_for_Sales.Grid;
		/** The SidePanes of form Contact_AI_for_Sales */
		SidePanes: DevKit.SidePanes;
	}
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
			ParentCustomerId1: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode1: DevKit.Controls.OptionSet;
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
		interface ProcessCase_to_Work_Order_Business_Process {

		}
		interface ProcessPhone_to_Case_Process {

		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
		}
		interface Grid {
			contactcasessgrid: DevKit.Controls.Grid;
			contactopportunitiesgrid: DevKit.Controls.Grid;
			DocumentsSubGrid: DevKit.Controls.Grid;
			subgrid_Entitlement: DevKit.Controls.Grid;
		}
	}
	class FormContact extends DevKit.IForm {
		/**
		* Contact [Main Form]
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
		/** The Process of form Contact */
		Process: DevKit.FormContact.Process;
		/** The Grid of form Contact */
		Grid: DevKit.FormContact.Grid;
		/** The SidePanes of form Contact */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormContact_Mobile {
		interface tab_fstab_address_Sections {
			fstab_address_section_address: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
			tab_4_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_summary_Sections {
			fstab_summary_section_contact_information: DevKit.Controls.Section;
		}
		interface tab_fstab_address extends DevKit.Controls.ITab {
			Section: tab_fstab_address_Sections;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface tab_fstab_summary extends DevKit.Controls.ITab {
			Section: tab_fstab_summary_Sections;
		}
		interface Tabs {
			fstab_address: tab_fstab_address;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
			fstab_summary: tab_fstab_summary;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Type the first line of the primary address. */
			Address1_Line1: DevKit.Controls.String;
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Type the fax number for the contact. */
			Fax: DevKit.Controls.String;
			/** Combines and shows the contact's first and last names so that the full name can be displayed in views and reports. */
			FullName: DevKit.Controls.String;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Type the mobile phone number for the contact. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
		}
		interface Navigation {
			nav_msdyn_contact_msdyn_rma_RequestedByContact: DevKit.Controls.NavigationItem,
			nav_msdyn_contact_msdyn_rtv_VendorContact: DevKit.Controls.NavigationItem,
			nav_msdyn_contact_msdyn_workorder_ReportedByContact: DevKit.Controls.NavigationItem,
			navAddresses: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navCampaignsInSFA: DevKit.Controls.NavigationItem,
			navContracts: DevKit.Controls.NavigationItem,
			navEntitlement: DevKit.Controls.NavigationItem,
			navInvoices: DevKit.Controls.NavigationItem,
			navListsInSFA: DevKit.Controls.NavigationItem,
			navOrders: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navQuotes: DevKit.Controls.NavigationItem,
			navRelationships: DevKit.Controls.NavigationItem,
			navSubConts: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {

		}
		interface ProcessPhone_to_Case_Process {

		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
		}
		interface Grid {
			CONTACTS: DevKit.Controls.Grid;
			INVOICES: DevKit.Controls.Grid;
			ORDERS: DevKit.Controls.Grid;
			QUOTES: DevKit.Controls.Grid;
		}
	}
	class FormContact_Mobile extends DevKit.IForm {
		/**
		* Contact - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Contact_Mobile */
		Body: DevKit.FormContact_Mobile.Body;
		/** The Navigation of form Contact_Mobile */
		Navigation: DevKit.FormContact_Mobile.Navigation;
		/** The Process of form Contact_Mobile */
		Process: DevKit.FormContact_Mobile.Process;
		/** The Grid of form Contact_Mobile */
		Grid: DevKit.FormContact_Mobile.Grid;
		/** The SidePanes of form Contact_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormContact_for_Interactive_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
		}
		interface tab_conflictstab_Sections {
			conflictssection: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB_Sections {
			billing_information: DevKit.Controls.Section;
			CONTACT_PREFERENCES: DevKit.Controls.Section;
			marketing_information: DevKit.Controls.Section;
			PERSONAL_INFORMATION: DevKit.Controls.Section;
			PERSONAL_NOTES_SECTION: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			CONTACT_INFORMATION: DevKit.Controls.Section;
			ref_pan_CUSTOMER_DETAILS_TAB: DevKit.Controls.Section;
			Timeline: DevKit.Controls.Section;
		}
		interface tab_conflictstab extends DevKit.Controls.ITab {
			Section: tab_conflictstab_Sections;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			conflictstab: tab_conflictstab;
			DETAILS_TAB: tab_DETAILS_TAB;
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
			Anniversary: DevKit.Controls.Date;
			/** Enter the contact's birthday for use in customer gift programs or other communications. */
			BirthDate: DevKit.Controls.Date;
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
			/** Type the primary email address for the contact. */
			EMailAddress11: DevKit.Controls.String;
			/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
			FamilyStatusCode: DevKit.Controls.OptionSet;
			/** Type the fax number for the contact. */
			Fax: DevKit.Controls.String;
			/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName: DevKit.Controls.String;
			/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact. */
			FollowEmail: DevKit.Controls.Boolean;
			/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			GenderCode: DevKit.Controls.OptionSet;
			/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName: DevKit.Controls.String;
			/** Shows the date when the contact was last included in a marketing campaign or quick campaign. */
			LastUsedInCampaign: DevKit.Controls.Date;
			/** Type the mobile phone number for the contact. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Shows the lead that the contact was created if the contact was created by converting a lead in Microsoft Dynamics 365. This is used to relate the contact to the data on the originating lead for use in reporting and analytics. */
			OriginatingLeadId: DevKit.Controls.Lookup;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode1: DevKit.Controls.OptionSet;
			/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
			SpousesName: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navAddresses: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navCampaignsInSFA: DevKit.Controls.NavigationItem,
			navContracts: DevKit.Controls.NavigationItem,
			navInvoices: DevKit.Controls.NavigationItem,
			navListsInSFA: DevKit.Controls.NavigationItem,
			navOrders: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navQuotes: DevKit.Controls.NavigationItem,
			navRelationships: DevKit.Controls.NavigationItem,
			navSubConts: DevKit.Controls.NavigationItem
		}
		interface quickForm_contactquickform_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			FullName: DevKit.Controls.QuickView;
			MobilePhone: DevKit.Controls.QuickView;
			ParentCustomerId: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_contactquickform extends DevKit.Controls.IQuickView {
			Body: quickForm_contactquickform_Body;
		}
		interface QuickForm {
			contactquickform: quickForm_contactquickform;
		}
		interface ProcessCase_to_Work_Order_Business_Process {

		}
		interface ProcessPhone_to_Case_Process {

		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
		}
		interface Grid {
			contactcasessgrid: DevKit.Controls.Grid;
			contactopportunitiesgrid: DevKit.Controls.Grid;
			subgrid_Entitlement: DevKit.Controls.Grid;
		}
	}
	class FormContact_for_Interactive_experience extends DevKit.IForm {
		/**
		* Contact for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Contact_for_Interactive_experience */
		Body: DevKit.FormContact_for_Interactive_experience.Body;
		/** The Header section of form Contact_for_Interactive_experience */
		Header: DevKit.FormContact_for_Interactive_experience.Header;
		/** The Navigation of form Contact_for_Interactive_experience */
		Navigation: DevKit.FormContact_for_Interactive_experience.Navigation;
		/** The QuickForm of form Contact_for_Interactive_experience */
		QuickForm: DevKit.FormContact_for_Interactive_experience.QuickForm;
		/** The Process of form Contact_for_Interactive_experience */
		Process: DevKit.FormContact_for_Interactive_experience.Process;
		/** The Grid of form Contact_for_Interactive_experience */
		Grid: DevKit.FormContact_for_Interactive_experience.Grid;
		/** The SidePanes of form Contact_for_Interactive_experience */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormContact_for_Multisession_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
		}
		interface tab_DETAILS_TAB_Sections {
			billing_information: DevKit.Controls.Section;
			CONTACT_PREFERENCES: DevKit.Controls.Section;
			marketing_information: DevKit.Controls.Section;
			PERSONAL_INFORMATION: DevKit.Controls.Section;
			PERSONAL_NOTES_SECTION: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			CONTACT_INFORMATION: DevKit.Controls.Section;
			SUMMARY_TAB_section_4: DevKit.Controls.Section;
			Timeline: DevKit.Controls.Section;
		}
		interface tab_tab_recordwall_Sections {
			tab_recordwall_section_1: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface tab_tab_recordwall extends DevKit.Controls.ITab {
			Section: tab_tab_recordwall_Sections;
		}
		interface Tabs {
			DETAILS_TAB: tab_DETAILS_TAB;
			SUMMARY_TAB: tab_SUMMARY_TAB;
			tab_recordwall: tab_tab_recordwall;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
			Anniversary: DevKit.Controls.Date;
			/** Enter the contact's birthday for use in customer gift programs or other communications. */
			BirthDate: DevKit.Controls.Date;
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
			/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName: DevKit.Controls.String;
			/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact. */
			FollowEmail: DevKit.Controls.Boolean;
			/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			GenderCode: DevKit.Controls.OptionSet;
			/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName: DevKit.Controls.String;
			/** Shows the date when the contact was last included in a marketing campaign or quick campaign. */
			LastUsedInCampaign: DevKit.Controls.Date;
			/** Type the mobile phone number for the contact. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Shows the lead that the contact was created if the contact was created by converting a lead in Microsoft Dynamics 365. This is used to relate the contact to the data on the originating lead for use in reporting and analytics. */
			OriginatingLeadId: DevKit.Controls.Lookup;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode1: DevKit.Controls.OptionSet;
			/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
			SpousesName: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			WebResource_RecordWall: DevKit.Controls.WebResource;
		}
		interface Navigation {
			navAddresses: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navCampaignsInSFA: DevKit.Controls.NavigationItem,
			navContracts: DevKit.Controls.NavigationItem,
			navInvoices: DevKit.Controls.NavigationItem,
			navListsInSFA: DevKit.Controls.NavigationItem,
			navOrders: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navQuotes: DevKit.Controls.NavigationItem,
			navRelationships: DevKit.Controls.NavigationItem,
			navSubConts: DevKit.Controls.NavigationItem
		}
		interface quickForm_contactquickform_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			FullName: DevKit.Controls.QuickView;
			MobilePhone: DevKit.Controls.QuickView;
			ParentCustomerId: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_contactquickform extends DevKit.Controls.IQuickView {
			Body: quickForm_contactquickform_Body;
		}
		interface QuickForm {
			contactquickform: quickForm_contactquickform;
		}
		interface ProcessCase_to_Work_Order_Business_Process {

		}
		interface ProcessPhone_to_Case_Process {

		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
		}
		interface Grid {
			RelatedCases: DevKit.Controls.Grid;
		}
	}
	class FormContact_for_Multisession_experience extends DevKit.IForm {
		/**
		* Contact for Multisession experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Contact_for_Multisession_experience */
		Body: DevKit.FormContact_for_Multisession_experience.Body;
		/** The Header section of form Contact_for_Multisession_experience */
		Header: DevKit.FormContact_for_Multisession_experience.Header;
		/** The Navigation of form Contact_for_Multisession_experience */
		Navigation: DevKit.FormContact_for_Multisession_experience.Navigation;
		/** The QuickForm of form Contact_for_Multisession_experience */
		QuickForm: DevKit.FormContact_for_Multisession_experience.QuickForm;
		/** The Process of form Contact_for_Multisession_experience */
		Process: DevKit.FormContact_for_Multisession_experience.Process;
		/** The Grid of form Contact_for_Multisession_experience */
		Grid: DevKit.FormContact_for_Multisession_experience.Grid;
		/** The SidePanes of form Contact_for_Multisession_experience */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormContact_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
		}
		interface tab_administration_Sections {
			billing_information: DevKit.Controls.Section;
			contact_methods: DevKit.Controls.Section;
			internal_information: DevKit.Controls.Section;
		}
		interface tab_conflictstab_Sections {
			conflictssection: DevKit.Controls.Section;
			marketing_information: DevKit.Controls.Section;
			service_preferences: DevKit.Controls.Section;
		}
		interface tab_details_Sections {
			personal_information: DevKit.Controls.Section;
			professional_information: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			address: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			name: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
		}
		interface tab_notes_and_activities_Sections {
			activities: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
		}
		interface tab_tab_recordwall_Sections {
			tab_recordwall_section_1: DevKit.Controls.Section;
		}
		interface tab_administration extends DevKit.Controls.ITab {
			Section: tab_administration_Sections;
		}
		interface tab_conflictstab extends DevKit.Controls.ITab {
			Section: tab_conflictstab_Sections;
		}
		interface tab_details extends DevKit.Controls.ITab {
			Section: tab_details_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes_and_activities extends DevKit.Controls.ITab {
			Section: tab_notes_and_activities_Sections;
		}
		interface tab_tab_recordwall extends DevKit.Controls.ITab {
			Section: tab_tab_recordwall_Sections;
		}
		interface Tabs {
			administration: tab_administration;
			conflictstab: tab_conflictstab;
			details: tab_details;
			general: tab_general;
			notes_and_activities: tab_notes_and_activities;
			tab_recordwall: tab_tab_recordwall;
		}
		interface Body {
			Tab: Tabs;
			/** Select the contact's role within the company or sales process, such as decision maker, employee, or influencer. */
			AccountRoleCode: DevKit.Controls.OptionSet;
			/** Select the primary address type. */
			Address1_AddressTypeCode: DevKit.Controls.OptionSet;
			/** Type the city for the primary address. */
			Address1_City: DevKit.Controls.String;
			/** Type the country or region for the primary address. */
			Address1_Country: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Type the first line of the primary address. */
			Address1_Line1: DevKit.Controls.String;
			/** Type the second line of the primary address. */
			Address1_Line2: DevKit.Controls.String;
			/** Type the third line of the primary address. */
			Address1_Line3: DevKit.Controls.String;
			/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
			Address1_Name: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the primary address. */
			Address1_PostalCode: DevKit.Controls.String;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Type the state or province of the primary address. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** Type the main phone number associated with the primary address. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
			Anniversary: DevKit.Controls.Date;
			/** Type the name of the contact's assistant. */
			AssistantName: DevKit.Controls.String;
			/** Type the phone number for the contact's assistant. */
			AssistantPhone: DevKit.Controls.String;
			/** Enter the contact's birthday for use in customer gift programs or other communications. */
			BirthDate: DevKit.Controls.Date;
			/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
			CreditLimit: DevKit.Controls.Money;
			/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Choose the default price list associated with the contact to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders. */
			DefaultPriceLevelId: DevKit.Controls.Lookup;
			/** Type the department or business unit where the contact works in the parent company or business. */
			Department: DevKit.Controls.String;
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
			/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName: DevKit.Controls.String;
			/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			GenderCode: DevKit.Controls.OptionSet;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName: DevKit.Controls.String;
			/** Shows the date when the contact was last included in a marketing campaign or quick campaign. */
			LastUsedInCampaign: DevKit.Controls.Date;
			/** Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact. */
			ManagerName: DevKit.Controls.String;
			/** Type the phone number for the contact's manager. */
			ManagerPhone: DevKit.Controls.String;
			/** Type the contact's middle name or initial to make sure the contact is addressed correctly. */
			MiddleName: DevKit.Controls.String;
			/** Type the mobile phone number for the contact. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Shows the lead that the contact was created if the contact was created by converting a lead in Microsoft Dynamics 365. This is used to relate the contact to the data on the originating lead for use in reporting and analytics. */
			OriginatingLeadId: DevKit.Controls.Lookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Controls.OptionSet;
			/** Select the preferred day of the week for service appointments. */
			PreferredAppointmentDayCode: DevKit.Controls.OptionSet;
			/** Select the preferred time of day for service appointments. */
			PreferredAppointmentTimeCode: DevKit.Controls.OptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Choose the contact's preferred service facility or equipment to make sure services are scheduled correctly for the customer. */
			PreferredEquipmentId: DevKit.Controls.Lookup;
			/** Choose the contact's preferred service to make sure services are scheduled correctly for the customer. */
			PreferredServiceId: DevKit.Controls.Lookup;
			/** Choose the regular or preferred customer service representative for reference when scheduling service activities for the contact. */
			PreferredSystemUserId: DevKit.Controls.Lookup;
			/** Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns. */
			Salutation: DevKit.Controls.String;
			/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
			SpousesName: DevKit.Controls.String;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
			/** Type a second phone number for this contact. */
			Telephone2: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			WebResource_RecordWall: DevKit.Controls.WebResource;
		}
		interface Navigation {
			navActivities: DevKit.Controls.NavigationItem,
			navActivityHistory: DevKit.Controls.NavigationItem,
			navAddresses: DevKit.Controls.NavigationItem,
			navRelationships: DevKit.Controls.NavigationItem,
			navSubConts: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {

		}
		interface ProcessPhone_to_Case_Process {

		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
		}
		interface Grid {
			contactactivitiesgrid: DevKit.Controls.Grid;
		}
	}
	class FormContact_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Contact_Information */
		Body: DevKit.FormContact_Information.Body;
		/** The Header section of form Contact_Information */
		Header: DevKit.FormContact_Information.Header;
		/** The Navigation of form Contact_Information */
		Navigation: DevKit.FormContact_Information.Navigation;
		/** The Process of form Contact_Information */
		Process: DevKit.FormContact_Information.Process;
		/** The Grid of form Contact_Information */
		Grid: DevKit.FormContact_Information.Grid;
		/** The SidePanes of form Contact_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTimelineWallControl_Contact_Main {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_SUMMARY_TAB_Sections {
			SOCIAL_PANE_TAB: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
		}
		interface ProcessCase_to_Work_Order_Business_Process {

		}
		interface ProcessPhone_to_Case_Process {

		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
		}
	}
	class FormTimelineWallControl_Contact_Main extends DevKit.IForm {
		/**
		* TimelineWallControl - Contact - Main [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TimelineWallControl_Contact_Main */
		Body: DevKit.FormTimelineWallControl_Contact_Main.Body;
		/** The Header section of form TimelineWallControl_Contact_Main */
		Header: DevKit.FormTimelineWallControl_Contact_Main.Header;
		/** The Process of form TimelineWallControl_Contact_Main */
		Process: DevKit.FormTimelineWallControl_Contact_Main.Process;
		/** The SidePanes of form TimelineWallControl_Contact_Main */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormContact_Quick_Create {
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
			/** Type the city for the primary address. */
			Address1_City: DevKit.Controls.String;
			/** Type the first line of the primary address. */
			Address1_Line1: DevKit.Controls.String;
			/** Type the second line of the primary address. */
			Address1_Line2: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the primary address. */
			Address1_PostalCode: DevKit.Controls.String;
			/** Stores Image of the Business Card */
			BusinessCard: DevKit.Controls.String;
			/** Type additional information to describe the contact, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName: DevKit.Controls.String;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName: DevKit.Controls.String;
			/** Type the mobile phone number for the contact. */
			MobilePhone: DevKit.Controls.String;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
		}
	}
	class FormContact_Quick_Create extends DevKit.IForm {
		/**
		* Contact Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Contact_Quick_Create */
		Body: DevKit.FormContact_Quick_Create.Body;
	}
	namespace FormContact_Quick_Create_Field_Service {
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
			/** Type the first line of the primary address. */
			Address1_Line1: DevKit.Controls.String;
			/** Type additional information to describe the contact, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Type the primary email address for the contact. */
			EMailAddress1: DevKit.Controls.String;
			/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName: DevKit.Controls.String;
			/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName: DevKit.Controls.String;
			/** Type the mobile phone number for the contact. */
			MobilePhone: DevKit.Controls.String;
			/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
			ParentCustomerId: DevKit.Controls.Lookup;
			/** Type the main phone number for this contact. */
			Telephone1: DevKit.Controls.String;
		}
	}
	class FormContact_Quick_Create_Field_Service extends DevKit.IForm {
		/**
		* Contact Quick Create - Field Service [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Contact_Quick_Create_Field_Service */
		Body: DevKit.FormContact_Quick_Create_Field_Service.Body;
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the account with which the contact is associated. */
		readonly AccountId: string;
		/** Select the contact's role within the company or sales process, such as decision maker, employee, or influencer. */
		AccountRoleCode: OptionSet.Contact.AccountRoleCode;
		/** Unique identifier for address 1. */
		Address1_AddressId: string;
		/** Select the primary address type. */
		Address1_AddressTypeCode: OptionSet.Contact.Address1_AddressTypeCode;
		/** Type the city for the primary address. */
		Address1_City: string;
		/** Shows the complete primary address. */
		readonly Address1_Composite: string;
		/** Type the country or region for the primary address. */
		Address1_Country: string;
		/** Type the county for the primary address. */
		Address1_County: string;
		/** Type the fax number associated with the primary address. */
		Address1_Fax: string;
		/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
		Address1_FreightTermsCode: OptionSet.Contact.Address1_FreightTermsCode;
		/** Type the latitude value for the primary address for use in mapping and other applications. */
		Address1_Latitude: number;
		/** Type the first line of the primary address. */
		Address1_Line1: string;
		/** Type the second line of the primary address. */
		Address1_Line2: string;
		/** Type the third line of the primary address. */
		Address1_Line3: string;
		/** Type the longitude value for the primary address for use in mapping and other applications. */
		Address1_Longitude: number;
		/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
		Address1_Name: string;
		/** Type the ZIP Code or postal code for the primary address. */
		Address1_PostalCode: string;
		/** Type the post office box number of the primary address. */
		Address1_PostOfficeBox: string;
		/** Type the name of the main contact at the account's primary address. */
		Address1_PrimaryContactName: string;
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: OptionSet.Contact.Address1_ShippingMethodCode;
		/** Type the state or province of the primary address. */
		Address1_StateOrProvince: string;
		/** Type the main phone number associated with the primary address. */
		Address1_Telephone1: string;
		/** Type a second phone number associated with the primary address. */
		Address1_Telephone2: string;
		/** Type a third phone number associated with the primary address. */
		Address1_Telephone3: string;
		/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address1_UPSZone: string;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address1_UTCOffset: number;
		/** Unique identifier for address 2. */
		Address2_AddressId: string;
		/** Select the secondary address type. */
		Address2_AddressTypeCode: OptionSet.Contact.Address2_AddressTypeCode;
		/** Type the city for the secondary address. */
		Address2_City: string;
		/** Shows the complete secondary address. */
		readonly Address2_Composite: string;
		/** Type the country or region for the secondary address. */
		Address2_Country: string;
		/** Type the county for the secondary address. */
		Address2_County: string;
		/** Type the fax number associated with the secondary address. */
		Address2_Fax: string;
		/** Select the freight terms for the secondary address to make sure shipping orders are processed correctly. */
		Address2_FreightTermsCode: OptionSet.Contact.Address2_FreightTermsCode;
		/** Type the latitude value for the secondary address for use in mapping and other applications. */
		Address2_Latitude: number;
		/** Type the first line of the secondary address. */
		Address2_Line1: string;
		/** Type the second line of the secondary address. */
		Address2_Line2: string;
		/** Type the third line of the secondary address. */
		Address2_Line3: string;
		/** Type the longitude value for the secondary address for use in mapping and other applications. */
		Address2_Longitude: number;
		/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
		Address2_Name: string;
		/** Type the ZIP Code or postal code for the secondary address. */
		Address2_PostalCode: string;
		/** Type the post office box number of the secondary address. */
		Address2_PostOfficeBox: string;
		/** Type the name of the main contact at the account's secondary address. */
		Address2_PrimaryContactName: string;
		/** Select a shipping method for deliveries sent to this address. */
		Address2_ShippingMethodCode: OptionSet.Contact.Address2_ShippingMethodCode;
		/** Type the state or province of the secondary address. */
		Address2_StateOrProvince: string;
		/** Type the main phone number associated with the secondary address. */
		Address2_Telephone1: string;
		/** Type a second phone number associated with the secondary address. */
		Address2_Telephone2: string;
		/** Type a third phone number associated with the secondary address. */
		Address2_Telephone3: string;
		/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address2_UPSZone: string;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address2_UTCOffset: number;
		/** Unique identifier for address 3. */
		Address3_AddressId: string;
		/** Select the third address type. */
		Address3_AddressTypeCode: OptionSet.Contact.Address3_AddressTypeCode;
		/** Type the city for the 3rd address. */
		Address3_City: string;
		/** Shows the complete third address. */
		readonly Address3_Composite: string;
		/** the country or region for the 3rd address. */
		Address3_Country: string;
		/** Type the county for the third address. */
		Address3_County: string;
		/** Type the fax number associated with the third address. */
		Address3_Fax: string;
		/** Select the freight terms for the third address to make sure shipping orders are processed correctly. */
		Address3_FreightTermsCode: OptionSet.Contact.Address3_FreightTermsCode;
		/** Type the latitude value for the third address for use in mapping and other applications. */
		Address3_Latitude: number;
		/** the first line of the 3rd address. */
		Address3_Line1: string;
		/** the second line of the 3rd address. */
		Address3_Line2: string;
		/** the third line of the 3rd address. */
		Address3_Line3: string;
		/** Type the longitude value for the third address for use in mapping and other applications. */
		Address3_Longitude: number;
		/** Type a descriptive name for the third address, such as Corporate Headquarters. */
		Address3_Name: string;
		/** the ZIP Code or postal code for the 3rd address. */
		Address3_PostalCode: string;
		/** the post office box number of the 3rd address. */
		Address3_PostOfficeBox: string;
		/** Type the name of the main contact at the account's third address. */
		Address3_PrimaryContactName: string;
		/** Select a shipping method for deliveries sent to this address. */
		Address3_ShippingMethodCode: OptionSet.Contact.Address3_ShippingMethodCode;
		/** the state or province of the third address. */
		Address3_StateOrProvince: string;
		/** Type the main phone number associated with the third address. */
		Address3_Telephone1: string;
		/** Type a second phone number associated with the third address. */
		Address3_Telephone2: string;
		/** Type a third phone number associated with the primary address. */
		Address3_Telephone3: string;
		/** Type the UPS zone of the third address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address3_UPSZone: string;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address3_UTCOffset: number;
		/** For system use only. */
		readonly Aging30: number;
		/** Shows the Aging 30 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		readonly Aging30_Base: number;
		/** For system use only. */
		readonly Aging60: number;
		/** Shows the Aging 60 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		readonly Aging60_Base: number;
		/** For system use only. */
		readonly Aging90: number;
		/** Shows the Aging 90 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		readonly Aging90_Base: number;
		/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
		Anniversary_DateOnly: Date;
		/** Type the contact's annual income for use in profiling and financial analysis. */
		AnnualIncome: number;
		/** Shows the Annual Income field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		readonly AnnualIncome_Base: number;
		/** Type the name of the contact's assistant. */
		AssistantName: string;
		/** Type the phone number for the contact's assistant. */
		AssistantPhone: string;
		/** Enter the contact's birthday for use in customer gift programs or other communications. */
		BirthDate_DateOnly: Date;
		/** Type a second business phone number for this contact. */
		Business2: string;
		/** Stores Image of the Business Card */
		BusinessCard: string;
		/** Stores Business Card Control Properties. */
		BusinessCardAttributes: string;
		/** Type a callback phone number for this contact. */
		Callback: string;
		/** Type the names of the contact's children for reference in communications and client programs. */
		ChildrensNames: string;
		/** Type the company phone of the contact. */
		Company: string;
		/** Unique identifier of the contact. */
		ContactId: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the external party who created the record. */
		readonly CreatedByExternalParty: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
		CreditLimit: number;
		/** Shows the Credit Limit field converted to the system's default base currency for reporting purposes. The calculations use the exchange rate specified in the Currencies area. */
		readonly CreditLimit_Base: number;
		/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
		CreditOnHold: boolean;
		/** Select the size of the contact's company for segmentation and reporting purposes. */
		CustomerSizeCode: OptionSet.Contact.CustomerSizeCode;
		/** Select the category that best describes the relationship between the contact and your organization. */
		CustomerTypeCode: OptionSet.Contact.CustomerTypeCode;
		/** Choose the default price list associated with the contact to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders. */
		DefaultPriceLevelId: string;
		/** Type the department or business unit where the contact works in the parent company or business. */
		Department: string;
		/** Type additional information to describe the contact, such as an excerpt from the company's website. */
		Description: string;
		/** Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email. */
		DoNotBulkEMail: boolean;
		/** Select whether the contact accepts bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the letters. */
		DoNotBulkPostalMail: boolean;
		/** Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email. */
		DoNotEMail: boolean;
		/** Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns. */
		DoNotFax: boolean;
		/** Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns. */
		DoNotPhone: boolean;
		/** Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: boolean;
		/** Select whether the contact accepts marketing materials, such as brochures or catalogs. Contacts that opt out can be excluded from marketing initiatives. */
		DoNotSendMM: boolean;
		/** Select the contact's highest level of education for use in segmentation and analysis. */
		EducationCode: OptionSet.Contact.EducationCode;
		/** Type the primary email address for the contact. */
		EMailAddress1: string;
		/** Type the secondary email address for the contact. */
		EMailAddress2: string;
		/** Type an alternate email address for the contact. */
		EMailAddress3: string;
		/** Type the employee ID or number for the contact for reference in orders, service cases, or other communications with the contact's organization. */
		EmployeeId: string;
		/** Shows the default image for the record. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** For internal use only. */
		readonly EntityImageId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Identifier for an external user. */
		ExternalUserIdentifier: string;
		/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
		FamilyStatusCode: OptionSet.Contact.FamilyStatusCode;
		/** Type the fax number for the contact. */
		Fax: string;
		/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		FirstName: string;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact. */
		FollowEmail: boolean;
		/** Type the URL for the contact's FTP site to enable users to access data and share documents. */
		FtpSiteUrl: string;
		/** Combines and shows the contact's first and last names so that the full name can be displayed in views and reports. */
		readonly FullName: string;
		/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		GenderCode: OptionSet.Contact.GenderCode;
		/** Type the passport number or other government ID for the contact for use in documents or reports. */
		GovernmentId: string;
		/** Select whether the contact has any children for reference in follow-up phone calls and other communications. */
		HasChildrenCode: OptionSet.Contact.HasChildrenCode;
		/** Type a second home phone number for this contact. */
		Home2: string;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Information about whether the contact was auto-created when promoting an email or an appointment. */
		readonly IsAutoCreate: boolean;
		/** Select whether the contact exists in a separate accounting or other system, such as Microsoft Dynamics GP or another ERP database, for use in integration processes. */
		IsBackofficeCustomer: boolean;
		readonly IsPrivate: boolean;
		/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		JobTitle: string;
		/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		LastName: string;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Shows the date when the contact was last included in a marketing campaign or quick campaign. */
		LastUsedInCampaign_UtcDateOnly: Date;
		/** Select the primary marketing source that directed the contact to your organization. */
		LeadSourceCode: OptionSet.Contact.LeadSourceCode;
		/** Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact. */
		ManagerName: string;
		/** Type the phone number for the contact's manager. */
		ManagerPhone: string;
		/** Whether is only for marketing */
		MarketingOnly: boolean;
		/** Unique identifier of the master contact for merge. */
		readonly MasterId: string;
		/** Shows whether the account has been merged with a master contact. */
		readonly Merged: boolean;
		/** Type the contact's middle name or initial to make sure the contact is addressed correctly. */
		MiddleName: string;
		/** Type the mobile phone number for the contact. */
		MobilePhone: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the external party who modified the record. */
		readonly ModifiedByExternalParty: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Describes whether contact is opted out or not */
		msdyn_gdproptout: boolean;
		/** Whether or not the contact belongs to the associated account */
		msdyn_orgchangestatus: OptionSet.Contact.msdyn_orgchangestatus;
		/** Unique identifier for Segment associated with contact. */
		msdyn_segmentid: string;
		msdyusd_CurrentProfile: string;
		msdyusd_Facebook: string;
		msdyusd_Twitter: string;
		/** Type the contact's nickname. */
		NickName: string;
		/** Type the number of children the contact has for reference in follow-up phone calls and other communications. */
		NumberOfChildren: number;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** Shows the lead that the contact was created if the contact was created by converting a lead in Microsoft Dynamics 365. This is used to relate the contact to the data on the originating lead for use in reporting and analytics. */
		OriginatingLeadId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the contact. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the contact. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the contact. */
		readonly OwningUser: string;
		/** Type the pager number for the contact. */
		Pager: string;
		/** Unique identifier of the parent contact. */
		readonly ParentContactId: string;
		/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
		parentcustomerid_account: string;
		/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
		parentcustomerid_contact: string;
		/** Shows whether the contact participates in workflow rules. */
		ParticipatesInWorkflow: boolean;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: OptionSet.Contact.PaymentTermsCode;
		/** Select the preferred day of the week for service appointments. */
		PreferredAppointmentDayCode: OptionSet.Contact.PreferredAppointmentDayCode;
		/** Select the preferred time of day for service appointments. */
		PreferredAppointmentTimeCode: OptionSet.Contact.PreferredAppointmentTimeCode;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: OptionSet.Contact.PreferredContactMethodCode;
		/** Choose the contact's preferred service facility or equipment to make sure services are scheduled correctly for the customer. */
		PreferredEquipmentId: string;
		/** Choose the contact's preferred service to make sure services are scheduled correctly for the customer. */
		PreferredServiceId: string;
		/** Choose the regular or preferred customer service representative for reference when scheduling service activities for the contact. */
		PreferredSystemUserId: string;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns. */
		Salutation: string;
		/** Select a shipping method for deliveries sent to this address. */
		ShippingMethodCode: OptionSet.Contact.ShippingMethodCode;
		/** Choose the service level agreement (SLA) that you want to apply to the Contact record. */
		SLAId: string;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
		SpousesName: string;
		/** Shows the ID of the stage. */
		StageId: string;
		/** Shows whether the contact is active or inactive. Inactive contacts are read-only and can't be edited unless they are reactivated. */
		StateCode: OptionSet.Contact.StateCode;
		/** Select the contact's status. */
		StatusCode: OptionSet.Contact.StatusCode;
		/** For internal use only. */
		SubscriptionId: string;
		/** Type the suffix used in the contact's name, such as Jr. or Sr. to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		Suffix: string;
		/** Number of users or conversations followed the record */
		TeamsFollowed: number;
		/** Type the main phone number for this contact. */
		Telephone1: string;
		/** Type a second phone number for this contact. */
		Telephone2: string;
		/** Type a third phone number for this contact. */
		Telephone3: string;
		/** Select a region or territory for the contact for use in segmentation and analysis. */
		TerritoryCode: OptionSet.Contact.TerritoryCode;
		/** Total time spent for emails (read and write) and meetings by me in relation to the contact record. */
		readonly TimeSpentByMeOnEmailAndMeetings: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the contact. */
		readonly VersionNumber: number;
		/** Type the contact's professional or personal website or blog URL. */
		WebSiteUrl: string;
		/** Type the phonetic spelling of the contact's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiFirstName: string;
		/** Shows the combined Yomi first and last names of the contact so that the full phonetic name can be displayed in views and reports. */
		readonly YomiFullName: string;
		/** Type the phonetic spelling of the contact's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiLastName: string;
		/** Type the phonetic spelling of the contact's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiMiddleName: string;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}