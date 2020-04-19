//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormLead {
		interface Header {
			/** Select a rating value to indicate the lead's potential to become a customer. */
			LeadQualityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the primary marketing source that prompted the lead to contact you. */
			LeadSourceCode: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the lead's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_Summary_Sections {
			Contact: DevKit.Form.Controls.ControlSection;
			company: DevKit.Form.Controls.ControlSection;
			MapSection: DevKit.Form.Controls.ControlSection;
			BusinessCard: DevKit.Form.Controls.ControlSection;
			SOCIAL_PANE: DevKit.Form.Controls.ControlSection;
			RELATED_TAB: DevKit.Form.Controls.ControlSection;
		}
		interface tab_details_tab_Sections {
			lead_information: DevKit.Form.Controls.ControlSection;
			marketing_information: DevKit.Form.Controls.ControlSection;
			contact_methods: DevKit.Form.Controls.ControlSection;
		}
		interface tab_documents_sharepoint_Sections {
			documents_sharepoint_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_Sections;
		}
		interface tab_details_tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_details_tab_Sections;
		}
		interface tab_documents_sharepoint extends DevKit.Form.Controls.IControlTab {
			Section: tab_documents_sharepoint_Sections;
		}
		interface Tabs {
			Summary: tab_Summary;
			details_tab: tab_details_tab;
			documents_sharepoint: tab_documents_sharepoint;
		}
		interface Body {
			Tab: Tabs;
			mapcontrol: DevKit.Form.Controls.ControlMap;
			notescontrol: DevKit.Form.Controls.ControlNote;
			Stakeholders: DevKit.Form.Controls.ControlGrid;
			Competitors: DevKit.Form.Controls.ControlGrid;
			DocumentsSubGrid: DevKit.Form.Controls.ControlGrid;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Form.Controls.ControlString;
			/** Stores Image of the Business Card */
			BusinessCard: DevKit.Form.Controls.ControlString;
			/** Choose the campaign that the lead was generated from to track the effectiveness of marketing campaigns and identify  communications received by the lead. */
			CampaignId: DevKit.Form.Controls.ControlLookup;
			/** Type the name of the company associated with the lead. This becomes the account name when the lead is qualified and converted to a customer account. */
			CompanyName: DevKit.Form.Controls.ControlString;
			/** Type additional information to describe the lead, such as an excerpt from the company's website. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select whether the lead accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the lead can be added to marketing lists, but will be excluded from the email. */
			DoNotBulkEMail: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the lead allows direct email sent from Microsoft Dynamics 365. */
			DoNotEMail: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the lead allows phone calls. */
			DoNotPhone: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the lead allows direct mail. */
			DoNotPostalMail: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the lead accepts marketing materials, such as brochures or catalogs. Leads that opt out can be excluded from marketing initiatives. */
			DoNotSendMM: DevKit.Form.Controls.ControlBoolean;
			/** Type the primary email address for the lead. */
			EMailAddress1: DevKit.Form.Controls.ControlString;
			/** Combines and shows the lead's first and last names so the full name can be displayed in views and reports. */
			FullName: DevKit.Form.Controls.ControlString;
			/** Select the primary industry in which the lead's business is focused, for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type the job title of the primary contact for this lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Form.Controls.ControlString;
			/** Shows the date when the lead was last included in a marketing campaign or quick campaign. */
			LastUsedInCampaign: DevKit.Form.Controls.ControlDate;
			/** Type the mobile phone number for the primary contact for the lead. */
			MobilePhone: DevKit.Form.Controls.ControlString;
			/** Whether the Opportunity created when qualifying this Lead is for an Item- based or a Work-based sale */
			msdyn_ordertype: DevKit.Form.Controls.ControlOptionSet;
			/** Whether the Opportunity created when qualifying this Lead is for an Item- based or a Work-based sale */
			msdyn_ordertype_1: DevKit.Form.Controls.ControlOptionSet;
			/** Type the number of employees that work at the company associated with the lead, for use in marketing segmentation and demographic analysis. */
			NumberOfEmployees: DevKit.Form.Controls.ControlInteger;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type the annual revenue of the company associated with the lead to provide an understanding of the prospect's business. */
			Revenue: DevKit.Form.Controls.ControlMoney;
			/** Type the Standard Industrial Classification (SIC) code that indicates the lead's primary industry of business for use in marketing segmentation and demographic analysis. */
			SIC: DevKit.Form.Controls.ControlString;
			/** Type a subject or descriptive name, such as the expected order, company name, or marketing source list, to identify the lead. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Type the work phone number for the primary contact for the lead. */
			Telephone1: DevKit.Form.Controls.ControlString;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Type the website URL for the company associated with this lead. */
			WebSiteUrl: DevKit.Form.Controls.ControlString;
		}
		interface Navigation {
			navActivities: DevKit.Form.Controls.ControlNavigationItem,
			navCampaignsInSFA: DevKit.Form.Controls.ControlNavigationItem,
			navConnections: DevKit.Form.Controls.ControlNavigationItem,
			navDocument: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			navLeadCompetitor: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessLead_to_Opportunity_Sales_Process {
			/** Information about the budget amount of the lead's company or organization. */
			BudgetAmount: DevKit.Form.Controls.ControlMoney;
			/** Select whether your notes include information about who makes the purchase decisions at the lead's company. */
			DecisionMaker: DevKit.Form.Controls.ControlBoolean;
			/** Type additional information to describe the lead, such as an excerpt from the company's website. */
			Description: DevKit.Form.Controls.ControlString;
			/** Choose an account to connect this lead to, so that the relationship is visible in reports and analytics. */
			ParentAccountId: DevKit.Form.Controls.ControlLookup;
			/** Choose a contact to connect this lead to, so that the relationship is visible in reports and analytics. */
			ParentContactId: DevKit.Form.Controls.ControlLookup;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			PurchaseProcess: DevKit.Form.Controls.ControlOptionSet;
			/** Choose how long the lead will likely take to make the purchase, so the sales team will be aware. */
			PurchaseTimeFrame: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			Lead_to_Opportunity_Sales_Process: ProcessLead_to_Opportunity_Sales_Process;
		}
	}
	class FormLead extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Lead
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Lead */
		Body: LuckyMokey.FormLead.Body;
		/** The Header section of form Lead */
		Header: LuckyMokey.FormLead.Header;
		/** The Navigation of form Lead */
		Navigation: LuckyMokey.FormLead.Navigation;
		/** The Process of form Lead */
		Process: LuckyMokey.FormLead.Process;
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
			/** 0 */
			No_Committed_Budget,
			/** 1 */
			May_Buy,
			/** 2 */
			Can_Buy,
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
			/** 1 */
			Hot,
			/** 2 */
			Warm,
			/** 3 */
			Cold
		}
		enum LeadSourceCode {
			/** 1 */
			Advertisement,
			/** 2 */
			Employee_Referral,
			/** 3 */
			External_Referral,
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
			Word_of_Mouth,
			/** 10 */
			Other
		}
		enum msdyn_ordertype {
			/** 192350001 */
			Work_based,
			/** 192350000 */
			Item_based,
			/** 690970002 */
			Service_Maintenance_Based
		}
		enum Need {
			/** 0 */
			Must_have,
			/** 1 */
			Should_have,
			/** 2 */
			Good_to_have,
			/** 3 */
			No_need
		}
		enum PreferredContactMethodCode {
			/** 1 */
			Any,
			/** 2 */
			Email,
			/** 3 */
			Phone,
			/** 4 */
			Fax,
			/** 5 */
			Mail
		}
		enum PriorityCode {
			/** 1 */
			Default_Value
		}
		enum PurchaseProcess {
			/** 0 */
			Individual,
			/** 1 */
			Committee,
			/** 2 */
			Unknown
		}
		enum PurchaseTimeFrame {
			/** 0 */
			Immediate,
			/** 1 */
			This_Quarter,
			/** 2 */
			Next_Quarter,
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
			/** 0 */
			Open,
			/** 1 */
			Qualified,
			/** 2 */
			Disqualified
		}
		enum StatusCode {
			/** 1 */
			New,
			/** 2 */
			Contacted,
			/** 3 */
			Qualified,
			/** 4 */
			Lost,
			/** 5 */
			Cannot_Contact,
			/** 6 */
			No_Longer_Interested,
			/** 7 */
			Canceled
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
//{'JsForm':['Lead'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}