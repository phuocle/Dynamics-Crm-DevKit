//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormCase {
		interface Header {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the case's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_general_Sections {
			Details: DevKit.Form.Controls.ControlSection;
			Applicable_SLASTANDARD: DevKit.Form.Controls.ControlSection;
			TabsControl: DevKit.Form.Controls.ControlSection;
			Customer: DevKit.Form.Controls.ControlSection;
		}
		interface tab_CASERELATIONSHIP_TAB_Sections {
			Solutions: DevKit.Form.Controls.ControlSection;
			Research: DevKit.Form.Controls.ControlSection;
			MergedCases: DevKit.Form.Controls.ControlSection;
			ChildCases: DevKit.Form.Controls.ControlSection;
		}
		interface tab_AssociatedKnowledgeBaseRecords_Sections {
			Articles: DevKit.Form.Controls.ControlSection;
			KnowledgeArticles: DevKit.Form.Controls.ControlSection;
		}
		interface tab__Enhanced_SLA_Details_Tab_Sections {
			Applicable_SLAENHANCED: DevKit.Form.Controls.ControlSection;
			SLAKPIInstances: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ADDITIONALDETAILS_TAB_Sections {
			parentcaseandtype: DevKit.Form.Controls.ControlSection;
			escalations: DevKit.Form.Controls.ControlSection;
			responses: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SOCIALDETAILS_TAB_Sections {
			social: DevKit.Form.Controls.ControlSection;
			scores: DevKit.Form.Controls.ControlSection;
			social3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_KBARTICLE_TAB_Sections {
			kb_article: DevKit.Form.Controls.ControlSection;
			contract_and_product_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DeviceInsightsTab_Sections {
			DeviceInsightsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_FieldService_Sections {
			tab_8_section_1: DevKit.Form.Controls.ControlSection;
			tab_8_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_CASERELATIONSHIP_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_CASERELATIONSHIP_TAB_Sections;
		}
		interface tab_AssociatedKnowledgeBaseRecords extends DevKit.Form.Controls.IControlTab {
			Section: tab_AssociatedKnowledgeBaseRecords_Sections;
		}
		interface tab__Enhanced_SLA_Details_Tab extends DevKit.Form.Controls.IControlTab {
			Section: tab__Enhanced_SLA_Details_Tab_Sections;
		}
		interface tab_ADDITIONALDETAILS_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_ADDITIONALDETAILS_TAB_Sections;
		}
		interface tab_SOCIALDETAILS_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_SOCIALDETAILS_TAB_Sections;
		}
		interface tab_KBARTICLE_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_KBARTICLE_TAB_Sections;
		}
		interface tab_DeviceInsightsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_DeviceInsightsTab_Sections;
		}
		interface tab_FieldService extends DevKit.Form.Controls.IControlTab {
			Section: tab_FieldService_Sections;
		}
		interface Tabs {
			general: tab_general;
			CASERELATIONSHIP_TAB: tab_CASERELATIONSHIP_TAB;
			AssociatedKnowledgeBaseRecords: tab_AssociatedKnowledgeBaseRecords;
			_Enhanced_SLA_Details_Tab: tab__Enhanced_SLA_Details_Tab;
			ADDITIONALDETAILS_TAB: tab_ADDITIONALDETAILS_TAB;
			SOCIALDETAILS_TAB: tab_SOCIALDETAILS_TAB;
			KBARTICLE_TAB: tab_KBARTICLE_TAB;
			DeviceInsightsTab: tab_DeviceInsightsTab;
			FieldService: tab_FieldService;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			RelatedSolutionGrid: DevKit.Form.Controls.ControlGrid;
			MergedCasesGrid: DevKit.Form.Controls.ControlGrid;
			ChildCasesGrid: DevKit.Form.Controls.ControlGrid;
			Associated_Articles: DevKit.Form.Controls.ControlGrid;
			Associated_KnowledgeArticles: DevKit.Form.Controls.ControlGrid;
			SLA_KPI_Instances_List: DevKit.Form.Controls.ControlGrid;
			/** Type the number of service units that were actually required to resolve the case. */
			ActualServiceUnits: DevKit.Form.Controls.ControlInteger;
			/** Details whether the profile is blocked or not. */
			BlockedProfile: DevKit.Form.Controls.ControlBoolean;
			/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
			CaseOriginCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the type of case to identify the incident for use in case routing and analysis. */
			CaseTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the contract line that the case should be logged under to make sure the customer is charged correctly. */
			ContractDetailId: DevKit.Form.Controls.ControlLookup;
			/** Choose the service contract that the case should be logged under to make sure the customer is eligible for support services. */
			ContractId: DevKit.Form.Controls.ControlLookup;
			/** Select the service level for the case to make sure the case is handled correctly. */
			ContractServiceLevelCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			customerpane_qfc: DevKit.Form.Controls.ControlQuickView;
			/** Select the customer's level of satisfaction with the handling and resolution of the case. */
			CustomerSatisfactionCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type additional information to describe the case to assist the service team in reaching a resolution. */
			Description: DevKit.Form.Controls.ControlString;
			/** Choose the entitlement that is applicable for the case. */
			EntitlementId: DevKit.Form.Controls.ControlLookup;
			/** Indicates the date and time when the case was escalated. */
			EscalatedOn: DevKit.Form.Controls.ControlDateTime;
			firstresponseslaquickform: DevKit.Form.Controls.ControlQuickView;
			/** Indicates if the first response has been sent. */
			FirstResponseSent: DevKit.Form.Controls.ControlBoolean;
			/** Enter the date by which a customer service representative has to follow up with the customer on this case. */
			FollowupBy: DevKit.Form.Controls.ControlDate;
			/** Will contain the Influencer score coming from NetBreeze. */
			InfluenceScore: DevKit.Form.Controls.ControlDouble;
			/** Indicates if the case has been escalated. */
			IsEscalated: DevKit.Form.Controls.ControlBoolean;
			/** Choose the article that contains additional information or a resolution for the case, for reference during research or follow up with the customer. */
			KbArticleId: DevKit.Form.Controls.ControlLookup;
			/** Shows whether the post originated as a public or private message. */
			MessageTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier for Incident Type associated with Case. */
			msdyn_IncidentType: DevKit.Form.Controls.ControlLookup;
			/** The iot alert that initiated this case */
			msdyn_iotalert: DevKit.Form.Controls.ControlLookup;
			/** The iot alert that initiated this case */
			msdyn_iotalert_1: DevKit.Form.Controls.ControlLookup;
			/** Choose the parent case for a case. */
			ParentCaseId: DevKit.Form.Controls.ControlLookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Form.Controls.ControlLookup;
			/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported. */
			ProductSerialNumber: DevKit.Form.Controls.ControlString;
			/** Enter the date by when the case must be resolved. */
			ResolveBy: DevKit.Form.Controls.ControlDateTime;
			resolvebyslaquickform: DevKit.Form.Controls.ControlQuickView;
			/** For internal use only. */
			ResponseBy: DevKit.Form.Controls.ControlDateTime;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			SentimentValue: DevKit.Form.Controls.ControlDouble;
			/** Unique identifier of the social profile with which the case is associated. */
			SocialProfileId: DevKit.Form.Controls.ControlLookup;
			/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
			/** Shows the case number for customer reference and searching capabilities. This cannot be modified. */
			TicketNumber: DevKit.Form.Controls.ControlString;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Form.Controls.ControlString;
		}
		interface Navigation {
			navActivities: DevKit.Form.Controls.ControlNavigationItem,
			navActivityHistory: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_incident_msdyn_workorder_ServiceRequest: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessPhone_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Form.Controls.ControlLookup;
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Form.Controls.ControlLookup;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
		}
	}
	class FormCase extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Case
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Case */
		Body: LuckyMokey.FormCase.Body;
		/** The Header section of form Case */
		Header: LuckyMokey.FormCase.Header;
		/** The Navigation of form Case */
		Navigation: LuckyMokey.FormCase.Navigation;
		/** The Process of form Case */
		Process: LuckyMokey.FormCase.Process;
	}
	namespace FormCase_for_Interactive_experience {
		interface Header {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the case's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_Summary_Sections {
			General_Info: DevKit.Form.Controls.ControlSection;
			SLAKPI_Timer_Section: DevKit.Form.Controls.ControlSection;
			Case_Details_Summary: DevKit.Form.Controls.ControlSection;
			Timeline: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Details_Sections {
			Case_Details: DevKit.Form.Controls.ControlSection;
			Additional_Details: DevKit.Form.Controls.ControlSection;
			Applicable_SLASTANDARD: DevKit.Form.Controls.ControlSection;
			Social_Response: DevKit.Form.Controls.ControlSection;
		}
		interface tab_CASERELATIONSHIP_TAB_Sections {
			MergedCases: DevKit.Form.Controls.ControlSection;
			ChildCases: DevKit.Form.Controls.ControlSection;
			KnowledgeArticles: DevKit.Form.Controls.ControlSection;
			Solutions: DevKit.Form.Controls.ControlSection;
		}
		interface tab__Enhanced_SLA_Details_Tab_Sections {
			SLAKPIInstances: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DeviceInsightsTab_Sections {
			DeviceInsightsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DeviceTab_Sections {
			DeviceSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_Sections;
		}
		interface tab_Details extends DevKit.Form.Controls.IControlTab {
			Section: tab_Details_Sections;
		}
		interface tab_CASERELATIONSHIP_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_CASERELATIONSHIP_TAB_Sections;
		}
		interface tab__Enhanced_SLA_Details_Tab extends DevKit.Form.Controls.IControlTab {
			Section: tab__Enhanced_SLA_Details_Tab_Sections;
		}
		interface tab_DeviceInsightsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_DeviceInsightsTab_Sections;
		}
		interface tab_DeviceTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_DeviceTab_Sections;
		}
		interface Tabs {
			Summary: tab_Summary;
			Details: tab_Details;
			CASERELATIONSHIP_TAB: tab_CASERELATIONSHIP_TAB;
			_Enhanced_SLA_Details_Tab: tab__Enhanced_SLA_Details_Tab;
			DeviceInsightsTab: tab_DeviceInsightsTab;
			DeviceTab: tab_DeviceTab;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			MergedCasesGrid: DevKit.Form.Controls.ControlGrid;
			ChildCasesGrid: DevKit.Form.Controls.ControlGrid;
			Associated_KnowledgeArticles: DevKit.Form.Controls.ControlGrid;
			SLA_KPI_Instances_List: DevKit.Form.Controls.ControlGrid;
			Devices: DevKit.Form.Controls.ControlGrid;
			/** Details whether the profile is blocked or not. */
			BlockedProfile: DevKit.Form.Controls.ControlBoolean;
			/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
			CaseOriginCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
			CaseOriginCode_1: DevKit.Form.Controls.ControlOptionSet;
			/** Select the type of case to identify the incident for use in case routing and analysis. */
			CaseTypeCode: DevKit.Form.Controls.ControlOptionSet;
			customerpane_qfc: DevKit.Form.Controls.ControlQuickView;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId_1: DevKit.Form.Controls.ControlLookup;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId_2: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the case to assist the service team in reaching a resolution. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type additional information to describe the case to assist the service team in reaching a resolution. */
			Description_1: DevKit.Form.Controls.ControlString;
			/** Choose the entitlement that is applicable for the case. */
			EntitlementId: DevKit.Form.Controls.ControlLookup;
			/** Choose the entitlement that is applicable for the case. */
			EntitlementId_1: DevKit.Form.Controls.ControlLookup;
			/** Indicates the date and time when the case was escalated. */
			EscalatedOn: DevKit.Form.Controls.ControlDateTime;
			FirstResponseByKPI: DevKit.Form.Controls.ControlQuickView;
			/** Indicates if the first response has been sent. */
			FirstResponseSent: DevKit.Form.Controls.ControlBoolean;
			/** Enter the date by which a customer service representative has to follow up with the customer on this case. */
			FollowupBy: DevKit.Form.Controls.ControlDate;
			/** Will contain the Influencer score coming from NetBreeze. */
			InfluenceScore: DevKit.Form.Controls.ControlDouble;
			/** Indicates if the case has been escalated. */
			IsEscalated: DevKit.Form.Controls.ControlBoolean;
			/** Shows whether the post originated as a public or private message. */
			MessageTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** The iot alert that initiated this case */
			msdyn_iotalert: DevKit.Form.Controls.ControlLookup;
			/** The iot alert that initiated this case */
			msdyn_iotalert_1: DevKit.Form.Controls.ControlLookup;
			/** The iot alert that initiated this case */
			msdyn_iotalert_2: DevKit.Form.Controls.ControlLookup;
			/** Choose the parent case for a case. */
			ParentCaseId: DevKit.Form.Controls.ControlLookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Form.Controls.ControlLookup;
			/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
			ProductId_1: DevKit.Form.Controls.ControlLookup;
			/** Enter the date by when the case must be resolved. */
			ResolveBy: DevKit.Form.Controls.ControlDateTime;
			ResolveByKPI: DevKit.Form.Controls.ControlQuickView;
			/** For internal use only. */
			ResponseBy: DevKit.Form.Controls.ControlDateTime;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			SentimentValue: DevKit.Form.Controls.ControlDouble;
			/** Unique identifier of the social profile with which the case is associated. */
			SocialProfileId: DevKit.Form.Controls.ControlLookup;
			/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
			/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId_1: DevKit.Form.Controls.ControlLookup;
			/** Shows the case number for customer reference and searching capabilities. This cannot be modified. */
			TicketNumber: DevKit.Form.Controls.ControlString;
			/** Shows the case number for customer reference and searching capabilities. This cannot be modified. */
			TicketNumber_1: DevKit.Form.Controls.ControlString;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Form.Controls.ControlString;
			similarCaseRecordcontrol_id: DevKit.Form.Controls.ControlActionCards;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title_1: DevKit.Form.Controls.ControlString;
		}
		interface ProcessPhone_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Form.Controls.ControlLookup;
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Form.Controls.ControlLookup;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
		}
	}
	class FormCase_for_Interactive_experience extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Case_for_Interactive_experience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Case_for_Interactive_experience */
		Body: LuckyMokey.FormCase_for_Interactive_experience.Body;
		/** The Header section of form Case_for_Interactive_experience */
		Header: LuckyMokey.FormCase_for_Interactive_experience.Header;
		/** The Process of form Case_for_Interactive_experience */
		Process: LuckyMokey.FormCase_for_Interactive_experience.Process;
	}
	namespace FormIncident_Information {
		interface tab_tab_recordwall_Sections {
			tab_recordwall_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general_Sections {
			overview: DevKit.Form.Controls.ControlSection;
			assignment_information: DevKit.Form.Controls.ControlSection;
			contract_and_product_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notesandkb_Sections {
			notes: DevKit.Form.Controls.ControlSection;
			kb_article: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_recordwall extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_recordwall_Sections;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_notesandkb extends DevKit.Form.Controls.IControlTab {
			Section: tab_notesandkb_Sections;
		}
		interface Tabs {
			tab_recordwall: tab_tab_recordwall;
			general: tab_general;
			notesandkb: tab_notesandkb;
		}
		interface Body {
			Tab: Tabs;
			WebResource_RecordWall: DevKit.Form.Controls.ControlWebResource;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
			CaseOriginCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the type of case to identify the incident for use in case routing and analysis. */
			CaseTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the contract line that the case should be logged under to make sure the customer is charged correctly. */
			ContractDetailId: DevKit.Form.Controls.ControlLookup;
			/** Choose the service contract that the case should be logged under to make sure the customer is eligible for support services. */
			ContractId: DevKit.Form.Controls.ControlLookup;
			/** Select the service level for the case to make sure the case is handled correctly. */
			ContractServiceLevelCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Select the customer's level of satisfaction with the handling and resolution of the case. */
			CustomerSatisfactionCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the date by which a customer service representative has to follow up with the customer on this case. */
			FollowupBy: DevKit.Form.Controls.ControlDate;
			/** Choose the article that contains additional information or a resolution for the case, for reference during research or follow up with the customer. */
			KbArticleId: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported. */
			ProductSerialNumber: DevKit.Form.Controls.ControlString;
			/** Select the case's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Form.Controls.ControlString;
		}
		interface Navigation {
			navActivities: DevKit.Form.Controls.ControlNavigationItem,
			navActivityHistory: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessPhone_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Form.Controls.ControlLookup;
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Form.Controls.ControlLookup;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
		}
	}
	class FormIncident_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Incident_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Incident_Information */
		Body: LuckyMokey.FormIncident_Information.Body;
		/** The Navigation of form Incident_Information */
		Navigation: LuckyMokey.FormIncident_Information.Navigation;
		/** The Process of form Incident_Information */
		Process: LuckyMokey.FormIncident_Information.Process;
	}
	namespace FormTimelineWallControl_Case_Main {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_SUMMARY_TAB_Sections {
			SOCIAL_PANE_TAB: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SUMMARY_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
		}
		interface Navigation {
			navActivities: DevKit.Form.Controls.ControlNavigationItem,
			navActivityHistory: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessPhone_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Form.Controls.ControlLookup;
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Form.Controls.ControlLookup;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
		}
	}
	class FormTimelineWallControl_Case_Main extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form TimelineWallControl_Case_Main
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form TimelineWallControl_Case_Main */
		Body: LuckyMokey.FormTimelineWallControl_Case_Main.Body;
		/** The Header section of form TimelineWallControl_Case_Main */
		Header: LuckyMokey.FormTimelineWallControl_Case_Main.Header;
		/** The Navigation of form TimelineWallControl_Case_Main */
		Navigation: LuckyMokey.FormTimelineWallControl_Case_Main.Navigation;
		/** The Process of form TimelineWallControl_Case_Main */
		Process: LuckyMokey.FormTimelineWallControl_Case_Main.Process;
	}
	class IncidentApi {
		/**
		* DynamicsCrm.DevKit IncidentApi
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
		/** Unique identifier of the account with which the case is associated. */
		AccountId: DevKit.WebApi.LookupValueReadonly;
		/** This attribute is used for Sample Service Business Processes. */
		ActivitiesComplete: DevKit.WebApi.BooleanValue;
		/** Type the number of service units that were actually required to resolve the case. */
		ActualServiceUnits: DevKit.WebApi.IntegerValue;
		/** Type the number of service units that were billed to the customer for the case. */
		BilledServiceUnits: DevKit.WebApi.IntegerValue;
		/** Details whether the profile is blocked or not. */
		BlockedProfile: DevKit.WebApi.BooleanValue;
		/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
		CaseOriginCode: DevKit.WebApi.OptionSetValue;
		/** Select the type of case to identify the incident for use in case routing and analysis. */
		CaseTypeCode: DevKit.WebApi.OptionSetValue;
		/** This attribute is used for Sample Service Business Processes. */
		CheckEmail: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the contact associated with the case. */
		ContactId: DevKit.WebApi.LookupValueReadonly;
		/** Choose the contract line that the case should be logged under to make sure the customer is charged correctly. */
		ContractDetailId: DevKit.WebApi.LookupValue;
		/** Choose the service contract that the case should be logged under to make sure the customer is eligible for support services. */
		ContractId: DevKit.WebApi.LookupValue;
		/** Select the service level for the case to make sure the case is handled correctly. */
		ContractServiceLevelCode: DevKit.WebApi.OptionSetValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who created the record. */
		CreatedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Tells whether customer service representative has contacted the customer or not. */
		CustomerContacted: DevKit.WebApi.BooleanValue;
		customerid_account: DevKit.WebApi.LookupValue;
		customerid_contact: DevKit.WebApi.LookupValue;
		/** Select the customer's level of satisfaction with the handling and resolution of the case. */
		CustomerSatisfactionCode: DevKit.WebApi.OptionSetValue;
		/** Shows whether terms of the associated entitlement should be decremented or not. */
		DecrementEntitlementTerm: DevKit.WebApi.BooleanValue;
		/** Type additional information to describe the case to assist the service team in reaching a resolution. */
		Description: DevKit.WebApi.StringValue;
		/** The primary email address for the entity. */
		EmailAddress: DevKit.WebApi.StringValue;
		/** Choose the entitlement that is applicable for the case. */
		EntitlementId: DevKit.WebApi.LookupValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Indicates the date and time when the case was escalated. */
		EscalatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Select an existing case for the customer that has been populated. For internal use only. */
		ExistingCase: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		FirstResponseByKPIId: DevKit.WebApi.LookupValue;
		/** Indicates if the first response has been sent. */
		FirstResponseSent: DevKit.WebApi.BooleanValue;
		/** Shows the status of the initial response time for the case according to the terms of the SLA. */
		FirstResponseSLAStatus: DevKit.WebApi.OptionSetValue;
		/** Enter the date by which a customer service representative has to follow up with the customer on this case. */
		FollowupBy_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** This attribute is used for Sample Service Business Processes. */
		FollowUpTaskCreated: DevKit.WebApi.BooleanValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the case. */
		IncidentId: DevKit.WebApi.GuidValue;
		/** Select the current stage of the service process for the case to assist service team members when they review or transfer a case. */
		IncidentStageCode: DevKit.WebApi.OptionSetValue;
		/** Will contain the Influencer score coming from NetBreeze. */
		InfluenceScore: DevKit.WebApi.DoubleValue;
		/** Shows customer satisfaction by tracking effort required by the customer. Low scores typically mean higher customer satisfaction as the customer had to travel through less channels to find a resolution */
		int_CustomerEffort: DevKit.WebApi.OptionSetValue;
		/** Mark Yes if an opportunity exists to sell additional products or services to the customer. */
		int_UpSellReferral: DevKit.WebApi.BooleanValue;
		/** For system use only. */
		IsDecrementing: DevKit.WebApi.BooleanValue;
		/** Indicates if the case has been escalated. */
		IsEscalated: DevKit.WebApi.BooleanValue;
		/** Choose the article that contains additional information or a resolution for the case, for reference during research or follow up with the customer. */
		KbArticleId: DevKit.WebApi.LookupValue;
		/** Contains the date time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Choose the primary case the current case was merged into. */
		MasterId: DevKit.WebApi.LookupValue;
		/** Tells whether the incident has been merged with another incident. */
		Merged: DevKit.WebApi.BooleanValueReadonly;
		/** Shows whether the post originated as a public or private message. */
		MessageTypeCode: DevKit.WebApi.OptionSetValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who modified the record. */
		ModifiedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for Incident Type associated with Case. */
		msdyn_IncidentType: DevKit.WebApi.LookupValue;
		/** The iot alert that initiated this case */
		msdyn_iotalert: DevKit.WebApi.LookupValue;
		/** Number of child incidents associated with the incident. */
		NumberOfChildIncidents: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the duration in minutes for which the case was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
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
		/** Choose the parent case for a case. */
		ParentCaseId: DevKit.WebApi.LookupValue;
		/** Select a primary contact for this case. */
		PrimaryContactId: DevKit.WebApi.LookupValue;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
		ProductId: DevKit.WebApi.LookupValue;
		/** Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported. */
		ProductSerialNumber: DevKit.WebApi.StringValue;
		/** Enter the date by when the case must be resolved. */
		ResolveBy_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		ResolveByKPIId: DevKit.WebApi.LookupValue;
		/** Shows the status of the resolution time for the case according to the terms of the SLA. */
		ResolveBySLAStatus: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		ResponseBy_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Tells whether the incident has been routed to queue or not. */
		RouteCase: DevKit.WebApi.BooleanValue;
		/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
		SentimentValue: DevKit.WebApi.DoubleValue;
		/** Select the stage, in the case resolution process, that the case is in. */
		ServiceStage: DevKit.WebApi.OptionSetValue;
		/** Select the severity of this case to indicate the incident's impact on the customer's business. */
		SeverityCode: DevKit.WebApi.OptionSetValue;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the social profile with which the case is associated. */
		SocialProfileId: DevKit.WebApi.LookupValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the case is active, resolved, or canceled. Resolved and canceled cases are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the case's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
		SubjectId: DevKit.WebApi.LookupValue;
		/** Shows the case number for customer reference and searching capabilities. This cannot be modified. */
		TicketNumber: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
		Title: DevKit.WebApi.StringValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Incident {
		enum CaseOriginCode {
			/** 1 */
			Phone,
			/** 2 */
			Email,
			/** 3 */
			Web,
			/** 2483 */
			Facebook,
			/** 3986 */
			Twitter,
			/** 700610000 */
			IoT
		}
		enum CaseTypeCode {
			/** 1 */
			Question,
			/** 2 */
			Problem,
			/** 3 */
			Request
		}
		enum ContractServiceLevelCode {
			/** 1 */
			Gold,
			/** 2 */
			Silver,
			/** 3 */
			Bronze
		}
		enum CustomerSatisfactionCode {
			/** 5 */
			Very_Satisfied,
			/** 4 */
			Satisfied,
			/** 3 */
			Neutral,
			/** 2 */
			Dissatisfied,
			/** 1 */
			Very_Dissatisfied
		}
		enum FirstResponseSLAStatus {
			/** 1 */
			In_Progress,
			/** 2 */
			Nearing_Noncompliance,
			/** 3 */
			Succeeded,
			/** 4 */
			Noncompliant
		}
		enum IncidentStageCode {
			/** 1 */
			Default_Value
		}
		enum int_CustomerEffort {
			/** 121590000 */
			Low,
			/** 121590001 */
			Medium,
			/** 121590002 */
			High
		}
		enum MessageTypeCode {
			/** 0 */
			Public_Message,
			/** 1 */
			Private_Message
		}
		enum PriorityCode {
			/** 1 */
			High,
			/** 2 */
			Normal,
			/** 3 */
			Low
		}
		enum ResolveBySLAStatus {
			/** 1 */
			In_Progress,
			/** 2 */
			Nearing_Noncompliance,
			/** 3 */
			Succeeded,
			/** 4 */
			Noncompliant
		}
		enum ServiceStage {
			/** 0 */
			Identify,
			/** 1 */
			Research,
			/** 2 */
			Resolve
		}
		enum SeverityCode {
			/** 1 */
			Default_Value
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Resolved,
			/** 2 */
			Cancelled
		}
		enum StatusCode {
			/** 5 */
			Problem_Solved,
			/** 1000 */
			Information_Provided,
			/** 6 */
			Cancelled,
			/** 2000 */
			Merged,
			/** 1 */
			In_Progress,
			/** 2 */
			On_Hold,
			/** 3 */
			Waiting_for_Details,
			/** 4 */
			Researching
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
//{'JsForm':['Case','Case for Interactive experience','Information','TimelineWallControl - Case- Main'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}