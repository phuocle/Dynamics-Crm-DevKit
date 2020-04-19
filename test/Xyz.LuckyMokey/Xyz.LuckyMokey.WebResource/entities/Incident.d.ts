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
//{'JsForm':['Case','Case for Interactive experience','Information','TimelineWallControl - Case- Main'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}