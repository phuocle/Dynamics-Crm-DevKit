//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCase {
		interface Header extends DevKit.Controls.IHeader {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Select the case's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Enhanced_SLA_Details_Tab_Sections {
			Applicable_SLAENHANCED: DevKit.Controls.Section;
			SLAKPIInstances: DevKit.Controls.Section;
		}
		interface tab_ADDITIONALDETAILS_TAB_Sections {
			escalations: DevKit.Controls.Section;
			parentcaseandtype: DevKit.Controls.Section;
			responses: DevKit.Controls.Section;
		}
		interface tab_AssociatedKnowledgeBaseRecords_Sections {
			Articles: DevKit.Controls.Section;
			KnowledgeArticles: DevKit.Controls.Section;
		}
		interface tab_CASERELATIONSHIP_TAB_Sections {
			ChildCases: DevKit.Controls.Section;
			MergedCases: DevKit.Controls.Section;
			Research: DevKit.Controls.Section;
			Solutions: DevKit.Controls.Section;
		}
		interface tab_DeviceInsightsTab_Sections {
			DeviceInsightsSection: DevKit.Controls.Section;
		}
		interface tab_FieldService_Sections {
			tab_8_section_1: DevKit.Controls.Section;
			tab_8_section_2: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			Applicable_SLASTANDARD: DevKit.Controls.Section;
			Customer: DevKit.Controls.Section;
			Details: DevKit.Controls.Section;
			TabsControl: DevKit.Controls.Section;
		}
		interface tab_KBARTICLE_TAB_Sections {
			contract_and_product_information: DevKit.Controls.Section;
			kb_article: DevKit.Controls.Section;
		}
		interface tab_SOCIALDETAILS_TAB_Sections {
			scores: DevKit.Controls.Section;
			social: DevKit.Controls.Section;
			social3: DevKit.Controls.Section;
		}
		interface tab_Enhanced_SLA_Details_Tab extends DevKit.Controls.ITab {
			Section: tab_Enhanced_SLA_Details_Tab_Sections;
		}
		interface tab_ADDITIONALDETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_ADDITIONALDETAILS_TAB_Sections;
		}
		interface tab_AssociatedKnowledgeBaseRecords extends DevKit.Controls.ITab {
			Section: tab_AssociatedKnowledgeBaseRecords_Sections;
		}
		interface tab_CASERELATIONSHIP_TAB extends DevKit.Controls.ITab {
			Section: tab_CASERELATIONSHIP_TAB_Sections;
		}
		interface tab_DeviceInsightsTab extends DevKit.Controls.ITab {
			Section: tab_DeviceInsightsTab_Sections;
		}
		interface tab_FieldService extends DevKit.Controls.ITab {
			Section: tab_FieldService_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_KBARTICLE_TAB extends DevKit.Controls.ITab {
			Section: tab_KBARTICLE_TAB_Sections;
		}
		interface tab_SOCIALDETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_SOCIALDETAILS_TAB_Sections;
		}
		interface Tabs {
			Enhanced_SLA_Details_Tab: tab_Enhanced_SLA_Details_Tab;
			ADDITIONALDETAILS_TAB: tab_ADDITIONALDETAILS_TAB;
			AssociatedKnowledgeBaseRecords: tab_AssociatedKnowledgeBaseRecords;
			CASERELATIONSHIP_TAB: tab_CASERELATIONSHIP_TAB;
			DeviceInsightsTab: tab_DeviceInsightsTab;
			FieldService: tab_FieldService;
			general: tab_general;
			KBARTICLE_TAB: tab_KBARTICLE_TAB;
			SOCIALDETAILS_TAB: tab_SOCIALDETAILS_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of service units that were actually required to resolve the case. */
			ActualServiceUnits: DevKit.Controls.Integer;
			/** Details whether the profile is blocked or not. */
			BlockedProfile: DevKit.Controls.Boolean;
			/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
			CaseOriginCode: DevKit.Controls.OptionSet;
			/** Select the type of case to identify the incident for use in case routing and analysis. */
			CaseTypeCode: DevKit.Controls.OptionSet;
			/** Choose the contract line that the case should be logged under to make sure the customer is charged correctly. */
			ContractDetailId: DevKit.Controls.Lookup;
			/** Choose the service contract that the case should be logged under to make sure the customer is eligible for support services. */
			ContractId: DevKit.Controls.Lookup;
			/** Select the service level for the case to make sure the case is handled correctly. */
			ContractServiceLevelCode: DevKit.Controls.OptionSet;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select the customer's level of satisfaction with the handling and resolution of the case. */
			CustomerSatisfactionCode: DevKit.Controls.OptionSet;
			/** Type additional information to describe the case to assist the service team in reaching a resolution. */
			Description: DevKit.Controls.String;
			/** Choose the entitlement that is applicable for the case. */
			EntitlementId: DevKit.Controls.Lookup;
			/** Indicates the date and time when the case was escalated. */
			EscalatedOn: DevKit.Controls.DateTime;
			/** Indicates if the first response has been sent. */
			FirstResponseSent: DevKit.Controls.Boolean;
			/** Enter the date by which a customer service representative has to follow up with the customer on this case. */
			FollowupBy: DevKit.Controls.Date;
			/** Will contain the Influencer score coming from NetBreeze. */
			InfluenceScore: DevKit.Controls.Double;
			/** Indicates if the case has been escalated. */
			IsEscalated: DevKit.Controls.Boolean;
			/** Choose the article that contains additional information or a resolution for the case, for reference during research or follow up with the customer. */
			KbArticleId: DevKit.Controls.Lookup;
			/** Shows whether the post originated as a public or private message. */
			MessageTypeCode: DevKit.Controls.OptionSet;
			/** Case's functional location */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** Unique identifier for Incident Type associated with Case. */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** The iot alert that initiated this case */
			msdyn_iotalert: DevKit.Controls.Lookup;
			/** The iot alert that initiated this case */
			msdyn_iotalert1: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Choose the parent case for a case. */
			ParentCaseId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
			ProductId: DevKit.Controls.Lookup;
			/** Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported. */
			ProductSerialNumber: DevKit.Controls.String;
			/** Enter the date by when the case must be resolved. */
			ResolveBy: DevKit.Controls.DateTime;
			/** For internal use only. */
			ResponseBy: DevKit.Controls.DateTime;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			SentimentValue: DevKit.Controls.Double;
			/** Unique identifier of the social profile with which the case is associated. */
			SocialProfileId: DevKit.Controls.Lookup;
			/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Shows the case number for customer reference and searching capabilities. This cannot be modified. */
			TicketNumber: DevKit.Controls.String;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			nav_msdyn_incident_msdyn_workorder_ServiceRequest: DevKit.Controls.NavigationItem,
			navActivities: DevKit.Controls.NavigationItem,
			navActivityHistory: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface quickForm_customerpane_qfc_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			FullName: DevKit.Controls.QuickView;
			MobilePhone: DevKit.Controls.QuickView;
			ParentCustomerId: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_firstresponseslaquickform_Body {
		}
		interface quickForm_resolvebyslaquickform_Body {
		}
		interface quickForm_customerpane_qfc extends DevKit.Controls.IQuickView {
			Body: quickForm_customerpane_qfc_Body;
		}
		interface quickForm_firstresponseslaquickform extends DevKit.Controls.IQuickView {
			Body: quickForm_firstresponseslaquickform_Body;
		}
		interface quickForm_resolvebyslaquickform extends DevKit.Controls.IQuickView {
			Body: quickForm_resolvebyslaquickform_Body;
		}
		interface QuickForm {
			customerpane_qfc: quickForm_customerpane_qfc;
			firstresponseslaquickform: quickForm_firstresponseslaquickform;
			resolvebyslaquickform: quickForm_resolvebyslaquickform;
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Unique identifier for Incident Type associated with Case. */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
		interface ProcessIoT_Alert_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId_1: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
		interface ProcessPhone_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			IoT_Alert_to_Case_Process: ProcessIoT_Alert_to_Case_Process;
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
		}
		interface Grid {
			Associated_Articles: DevKit.Controls.Grid;
			Associated_KnowledgeArticles: DevKit.Controls.Grid;
			ChildCasesGrid: DevKit.Controls.Grid;
			MergedCasesGrid: DevKit.Controls.Grid;
			RelatedSolutionGrid: DevKit.Controls.Grid;
			SLA_KPI_Instances_List: DevKit.Controls.Grid;
		}
	}
	class FormCase extends DevKit.IForm {
		/**
		* Case [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Case */
		Body: DevKit.FormCase.Body;
		/** The Header section of form Case */
		Header: DevKit.FormCase.Header;
		/** The Navigation of form Case */
		Navigation: DevKit.FormCase.Navigation;
		/** The QuickForm of form Case */
		QuickForm: DevKit.FormCase.QuickForm;
		/** The Process of form Case */
		Process: DevKit.FormCase.Process;
		/** The Grid of form Case */
		Grid: DevKit.FormCase.Grid;
		/** The SidePanes of form Case */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCase_for_Interactive_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Select the case's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Enhanced_SLA_Details_Tab_Sections {
			SLAKPIInstances: DevKit.Controls.Section;
		}
		interface tab_CASERELATIONSHIP_TAB_Sections {
			ChildCases: DevKit.Controls.Section;
			KnowledgeArticles: DevKit.Controls.Section;
			MergedCases: DevKit.Controls.Section;
			Solutions: DevKit.Controls.Section;
		}
		interface tab_Details_Sections {
			Additional_Details: DevKit.Controls.Section;
			Applicable_SLASTANDARD: DevKit.Controls.Section;
			Case_Details: DevKit.Controls.Section;
			Social_Response: DevKit.Controls.Section;
		}
		interface tab_DeviceInsightsTab_Sections {
			DeviceInsightsSection: DevKit.Controls.Section;
		}
		interface tab_DeviceTab_Sections {
			DeviceSection: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			Case_Details_Summary: DevKit.Controls.Section;
			General_Info: DevKit.Controls.Section;
			ref_pan_Related: DevKit.Controls.Section;
			SLAKPI_Timer_Section: DevKit.Controls.Section;
			Timeline: DevKit.Controls.Section;
		}
		interface tab_Enhanced_SLA_Details_Tab extends DevKit.Controls.ITab {
			Section: tab_Enhanced_SLA_Details_Tab_Sections;
		}
		interface tab_CASERELATIONSHIP_TAB extends DevKit.Controls.ITab {
			Section: tab_CASERELATIONSHIP_TAB_Sections;
		}
		interface tab_Details extends DevKit.Controls.ITab {
			Section: tab_Details_Sections;
		}
		interface tab_DeviceInsightsTab extends DevKit.Controls.ITab {
			Section: tab_DeviceInsightsTab_Sections;
		}
		interface tab_DeviceTab extends DevKit.Controls.ITab {
			Section: tab_DeviceTab_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			Enhanced_SLA_Details_Tab: tab_Enhanced_SLA_Details_Tab;
			CASERELATIONSHIP_TAB: tab_CASERELATIONSHIP_TAB;
			Details: tab_Details;
			DeviceInsightsTab: tab_DeviceInsightsTab;
			DeviceTab: tab_DeviceTab;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Details whether the profile is blocked or not. */
			BlockedProfile: DevKit.Controls.Boolean;
			/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
			CaseOriginCode: DevKit.Controls.OptionSet;
			/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
			CaseOriginCode1: DevKit.Controls.OptionSet;
			/** Select the type of case to identify the incident for use in case routing and analysis. */
			CaseTypeCode: DevKit.Controls.OptionSet;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId1: DevKit.Controls.Lookup;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId2: DevKit.Controls.Lookup;
			/** Type additional information to describe the case to assist the service team in reaching a resolution. */
			Description: DevKit.Controls.String;
			/** Type additional information to describe the case to assist the service team in reaching a resolution. */
			Description1: DevKit.Controls.String;
			/** Choose the entitlement that is applicable for the case. */
			EntitlementId: DevKit.Controls.Lookup;
			/** Choose the entitlement that is applicable for the case. */
			EntitlementId1: DevKit.Controls.Lookup;
			/** Indicates the date and time when the case was escalated. */
			EscalatedOn: DevKit.Controls.DateTime;
			/** Indicates if the first response has been sent. */
			FirstResponseSent: DevKit.Controls.Boolean;
			/** Enter the date by which a customer service representative has to follow up with the customer on this case. */
			FollowupBy: DevKit.Controls.Date;
			/** Will contain the Influencer score coming from NetBreeze. */
			InfluenceScore: DevKit.Controls.Double;
			/** Indicates if the case has been escalated. */
			IsEscalated: DevKit.Controls.Boolean;
			/** Shows whether the post originated as a public or private message. */
			MessageTypeCode: DevKit.Controls.OptionSet;
			/** The iot alert that initiated this case */
			msdyn_iotalert: DevKit.Controls.Lookup;
			/** The iot alert that initiated this case */
			msdyn_iotalert1: DevKit.Controls.Lookup;
			/** The iot alert that initiated this case */
			msdyn_iotalert2: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Choose the parent case for a case. */
			ParentCaseId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
			ProductId: DevKit.Controls.Lookup;
			/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
			ProductId1: DevKit.Controls.Lookup;
			/** Enter the date by when the case must be resolved. */
			ResolveBy: DevKit.Controls.DateTime;
			/** For internal use only. */
			ResponseBy: DevKit.Controls.DateTime;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			SentimentValue: DevKit.Controls.Double;
			/** Unique identifier of the social profile with which the case is associated. */
			SocialProfileId: DevKit.Controls.Lookup;
			/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId1: DevKit.Controls.Lookup;
			/** Shows the case number for customer reference and searching capabilities. This cannot be modified. */
			TicketNumber: DevKit.Controls.String;
			/** Shows the case number for customer reference and searching capabilities. This cannot be modified. */
			TicketNumber1: DevKit.Controls.String;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
			similarCaseRecordcontrol_id: DevKit.Controls.ActionCards;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title1: DevKit.Controls.String;
		}
		interface quickForm_customerpane_qfc_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			FullName: DevKit.Controls.QuickView;
			MobilePhone: DevKit.Controls.QuickView;
			ParentCustomerId: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_FirstResponseByKPI_Body {
		}
		interface quickForm_ResolveByKPI_Body {
		}
		interface quickForm_customerpane_qfc extends DevKit.Controls.IQuickView {
			Body: quickForm_customerpane_qfc_Body;
		}
		interface quickForm_FirstResponseByKPI extends DevKit.Controls.IQuickView {
			Body: quickForm_FirstResponseByKPI_Body;
		}
		interface quickForm_ResolveByKPI extends DevKit.Controls.IQuickView {
			Body: quickForm_ResolveByKPI_Body;
		}
		interface QuickForm {
			customerpane_qfc: quickForm_customerpane_qfc;
			FirstResponseByKPI: quickForm_FirstResponseByKPI;
			ResolveByKPI: quickForm_ResolveByKPI;
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Unique identifier for Incident Type associated with Case. */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
		interface ProcessIoT_Alert_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId_1: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
		interface ProcessPhone_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			IoT_Alert_to_Case_Process: ProcessIoT_Alert_to_Case_Process;
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
		}
		interface Grid {
			Associated_KnowledgeArticles: DevKit.Controls.Grid;
			ChildCasesGrid: DevKit.Controls.Grid;
			Devices: DevKit.Controls.Grid;
			MergedCasesGrid: DevKit.Controls.Grid;
			SLA_KPI_Instances_List: DevKit.Controls.Grid;
		}
	}
	class FormCase_for_Interactive_experience extends DevKit.IForm {
		/**
		* Case for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Case_for_Interactive_experience */
		Body: DevKit.FormCase_for_Interactive_experience.Body;
		/** The Header section of form Case_for_Interactive_experience */
		Header: DevKit.FormCase_for_Interactive_experience.Header;
		/** The QuickForm of form Case_for_Interactive_experience */
		QuickForm: DevKit.FormCase_for_Interactive_experience.QuickForm;
		/** The Process of form Case_for_Interactive_experience */
		Process: DevKit.FormCase_for_Interactive_experience.Process;
		/** The Grid of form Case_for_Interactive_experience */
		Grid: DevKit.FormCase_for_Interactive_experience.Grid;
		/** The SidePanes of form Case_for_Interactive_experience */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCase_for_Multisession_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
			CaseOriginCode: DevKit.Controls.OptionSet;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the case number for customer reference and searching capabilities. This cannot be modified. */
			TicketNumber: DevKit.Controls.String;
		}
		interface tab_CASERELATIONSHIP_TAB_Sections {
			Applicable_SLASTANDARD: DevKit.Controls.Section;
			Case_Details: DevKit.Controls.Section;
			ChildCases: DevKit.Controls.Section;
			KnowledgeArticles: DevKit.Controls.Section;
			MergedCases: DevKit.Controls.Section;
			RelatedCases: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			Case_Details_Summary: DevKit.Controls.Section;
			TabsControl: DevKit.Controls.Section;
		}
		interface tab_CASERELATIONSHIP_TAB extends DevKit.Controls.ITab {
			Section: tab_CASERELATIONSHIP_TAB_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			CASERELATIONSHIP_TAB: tab_CASERELATIONSHIP_TAB;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Select the type of case to identify the incident for use in case routing and analysis. */
			CaseTypeCode: DevKit.Controls.OptionSet;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information to describe the case to assist the service team in reaching a resolution. */
			Description: DevKit.Controls.String;
			/** Choose the entitlement that is applicable for the case. */
			EntitlementId: DevKit.Controls.Lookup;
			/** Indicates the date and time when the case was escalated. */
			EscalatedOn: DevKit.Controls.DateTime;
			/** Indicates if the first response has been sent. */
			FirstResponseSent: DevKit.Controls.Boolean;
			/** Enter the date by which a customer service representative has to follow up with the customer on this case. */
			FollowupBy: DevKit.Controls.Date;
			/** Indicates if the case has been escalated. */
			IsEscalated: DevKit.Controls.Boolean;
			notescontrol: DevKit.Controls.Note;
			/** Choose the parent case for a case. */
			ParentCaseId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
			ProductId: DevKit.Controls.Lookup;
			/** Enter the date by when the case must be resolved. */
			ResolveBy: DevKit.Controls.DateTime;
			/** For internal use only. */
			ResponseBy: DevKit.Controls.DateTime;
			/** Select the case's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			navActivities: DevKit.Controls.NavigationItem,
			navActivityHistory: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Unique identifier for Incident Type associated with Case. */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
		interface ProcessIoT_Alert_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId_1: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
		interface ProcessPhone_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			IoT_Alert_to_Case_Process: ProcessIoT_Alert_to_Case_Process;
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
		}
		interface Grid {
			Associated_KnowledgeArticles: DevKit.Controls.Grid;
			ChildCasesGrid: DevKit.Controls.Grid;
			MergedCasesGrid: DevKit.Controls.Grid;
			relatedCases: DevKit.Controls.Grid;
		}
	}
	class FormCase_for_Multisession_experience extends DevKit.IForm {
		/**
		* Case for Multisession experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Case_for_Multisession_experience */
		Body: DevKit.FormCase_for_Multisession_experience.Body;
		/** The Header section of form Case_for_Multisession_experience */
		Header: DevKit.FormCase_for_Multisession_experience.Header;
		/** The Navigation of form Case_for_Multisession_experience */
		Navigation: DevKit.FormCase_for_Multisession_experience.Navigation;
		/** The Process of form Case_for_Multisession_experience */
		Process: DevKit.FormCase_for_Multisession_experience.Process;
		/** The Grid of form Case_for_Multisession_experience */
		Grid: DevKit.FormCase_for_Multisession_experience.Grid;
		/** The SidePanes of form Case_for_Multisession_experience */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormIncident_Information {
		interface tab_general_Sections {
			assignment_information: DevKit.Controls.Section;
			contract_and_product_information: DevKit.Controls.Section;
			overview: DevKit.Controls.Section;
		}
		interface tab_notesandkb_Sections {
			kb_article: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
		}
		interface tab_tab_recordwall_Sections {
			tab_recordwall_section_1: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notesandkb extends DevKit.Controls.ITab {
			Section: tab_notesandkb_Sections;
		}
		interface tab_tab_recordwall extends DevKit.Controls.ITab {
			Section: tab_tab_recordwall_Sections;
		}
		interface Tabs {
			general: tab_general;
			notesandkb: tab_notesandkb;
			tab_recordwall: tab_tab_recordwall;
		}
		interface Body {
			Tab: Tabs;
			/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
			CaseOriginCode: DevKit.Controls.OptionSet;
			/** Select the type of case to identify the incident for use in case routing and analysis. */
			CaseTypeCode: DevKit.Controls.OptionSet;
			/** Choose the contract line that the case should be logged under to make sure the customer is charged correctly. */
			ContractDetailId: DevKit.Controls.Lookup;
			/** Choose the service contract that the case should be logged under to make sure the customer is eligible for support services. */
			ContractId: DevKit.Controls.Lookup;
			/** Select the service level for the case to make sure the case is handled correctly. */
			ContractServiceLevelCode: DevKit.Controls.OptionSet;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select the customer's level of satisfaction with the handling and resolution of the case. */
			CustomerSatisfactionCode: DevKit.Controls.OptionSet;
			/** Enter the date by which a customer service representative has to follow up with the customer on this case. */
			FollowupBy: DevKit.Controls.Date;
			/** Choose the article that contains additional information or a resolution for the case, for reference during research or follow up with the customer. */
			KbArticleId: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
			ProductId: DevKit.Controls.Lookup;
			/** Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported. */
			ProductSerialNumber: DevKit.Controls.String;
			/** Select the case's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
			WebResource_RecordWall: DevKit.Controls.WebResource;
		}
		interface Navigation {
			navActivities: DevKit.Controls.NavigationItem,
			navActivityHistory: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Unique identifier for Incident Type associated with Case. */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
		interface ProcessIoT_Alert_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId_1: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
		interface ProcessPhone_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			IoT_Alert_to_Case_Process: ProcessIoT_Alert_to_Case_Process;
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
		}
	}
	class FormIncident_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Incident_Information */
		Body: DevKit.FormIncident_Information.Body;
		/** The Navigation of form Incident_Information */
		Navigation: DevKit.FormIncident_Information.Navigation;
		/** The Process of form Incident_Information */
		Process: DevKit.FormIncident_Information.Process;
		/** The SidePanes of form Incident_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTimelineWallControl_Case_Main {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
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
		interface Navigation {
			navActivities: DevKit.Controls.NavigationItem,
			navActivityHistory: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Unique identifier for Incident Type associated with Case. */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
		interface ProcessIoT_Alert_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId_1: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
		interface ProcessPhone_to_Case_Process {
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			ExistingCase: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			IoT_Alert_to_Case_Process: ProcessIoT_Alert_to_Case_Process;
			Phone_to_Case_Process: ProcessPhone_to_Case_Process;
		}
	}
	class FormTimelineWallControl_Case_Main extends DevKit.IForm {
		/**
		* TimelineWallControl - Case- Main [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TimelineWallControl_Case_Main */
		Body: DevKit.FormTimelineWallControl_Case_Main.Body;
		/** The Header section of form TimelineWallControl_Case_Main */
		Header: DevKit.FormTimelineWallControl_Case_Main.Header;
		/** The Navigation of form TimelineWallControl_Case_Main */
		Navigation: DevKit.FormTimelineWallControl_Case_Main.Navigation;
		/** The Process of form TimelineWallControl_Case_Main */
		Process: DevKit.FormTimelineWallControl_Case_Main.Process;
		/** The SidePanes of form TimelineWallControl_Case_Main */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormApp_for_Outlook_Case_Quick_Create {
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
			/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
			CaseOriginCode: DevKit.Controls.OptionSet;
			/** Select the type of case to identify the incident for use in case routing and analysis. */
			CaseTypeCode: DevKit.Controls.OptionSet;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information to describe the case to assist the service team in reaching a resolution. */
			Description: DevKit.Controls.String;
			/** Choose the entitlement that is applicable for the case. */
			EntitlementId: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the parent case for a case. */
			ParentCaseId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
			ProductId: DevKit.Controls.Lookup;
			/** Enter the date by when the case must be resolved. */
			ResolveBy: DevKit.Controls.DateTime;
			/** For internal use only. */
			ResponseBy: DevKit.Controls.DateTime;
			/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
	}
	class FormApp_for_Outlook_Case_Quick_Create extends DevKit.IForm {
		/**
		* App for Outlook Case Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form App_for_Outlook_Case_Quick_Create */
		Body: DevKit.FormApp_for_Outlook_Case_Quick_Create.Body;
	}
	namespace FormCase_Quick_Create {
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
			/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
			CaseOriginCode: DevKit.Controls.OptionSet;
			/** Select the type of case to identify the incident for use in case routing and analysis. */
			CaseTypeCode: DevKit.Controls.OptionSet;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information to describe the case to assist the service team in reaching a resolution. */
			Description: DevKit.Controls.String;
			/** Choose the entitlement that is applicable for the case. */
			EntitlementId: DevKit.Controls.Lookup;
			/** Unique identifier for Incident Type associated with Case. */
			msdyn_IncidentType: DevKit.Controls.Lookup;
			/** The iot alert that initiated this case */
			msdyn_iotalert: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the parent case for a case. */
			ParentCaseId: DevKit.Controls.Lookup;
			/** Select a primary contact for this case. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
			ProductId: DevKit.Controls.Lookup;
			/** Enter the date by when the case must be resolved. */
			ResolveBy: DevKit.Controls.DateTime;
			/** For internal use only. */
			ResponseBy: DevKit.Controls.DateTime;
			/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
	}
	class FormCase_Quick_Create extends DevKit.IForm {
		/**
		* Case Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Case_Quick_Create */
		Body: DevKit.FormCase_Quick_Create.Body;
	}
	namespace FormCase_Quick_Create_for_Multisession {
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
			/** Select the type of case to identify the incident for use in case routing and analysis. */
			CaseTypeCode: DevKit.Controls.OptionSet;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information to describe the case to assist the service team in reaching a resolution. */
			Description: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the parent case for a case. */
			ParentCaseId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Select the case's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
	}
	class FormCase_Quick_Create_for_Multisession extends DevKit.IForm {
		/**
		* Case Quick Create for Multisession [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Case_Quick_Create_for_Multisession */
		Body: DevKit.FormCase_Quick_Create_for_Multisession.Body;
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
		/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
		customerid_account: DevKit.WebApi.LookupValue;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
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
		/** Case's functional location */
		msdyn_FunctionalLocation: DevKit.WebApi.LookupValue;
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
		/** Choose an additional customer contact who can also help resolve the case. */
		ResponsibleContactId: DevKit.WebApi.LookupValue;
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
			/** 2 */
			Email,
			/** 2483 */
			Facebook,
			/** 700610000 */
			IoT,
			/** 1 */
			Phone,
			/** 3986 */
			Twitter,
			/** 3 */
			Web
		}
		enum CaseTypeCode {
			/** 2 */
			Problem,
			/** 1 */
			Question,
			/** 3 */
			Request
		}
		enum ContractServiceLevelCode {
			/** 3 */
			Bronze,
			/** 1 */
			Gold,
			/** 2 */
			Silver
		}
		enum CustomerSatisfactionCode {
			/** 2 */
			Dissatisfied,
			/** 3 */
			Neutral,
			/** 4 */
			Satisfied,
			/** 1 */
			Very_Dissatisfied,
			/** 5 */
			Very_Satisfied
		}
		enum FirstResponseSLAStatus {
			/** 1 */
			In_Progress,
			/** 2 */
			Nearing_Noncompliance,
			/** 4 */
			Noncompliant,
			/** 3 */
			Succeeded
		}
		enum IncidentStageCode {
			/** 1 */
			Default_Value
		}
		enum int_CustomerEffort {
			/** 121590002 */
			High,
			/** 121590000 */
			Low,
			/** 121590001 */
			Medium
		}
		enum MessageTypeCode {
			/** 1 */
			Private_Message,
			/** 0 */
			Public_Message
		}
		enum PriorityCode {
			/** 1 */
			High,
			/** 3 */
			Low,
			/** 2 */
			Normal
		}
		enum ResolveBySLAStatus {
			/** 1 */
			In_Progress,
			/** 2 */
			Nearing_Noncompliance,
			/** 4 */
			Noncompliant,
			/** 3 */
			Succeeded
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
			/** 2 */
			Cancelled,
			/** 1 */
			Resolved
		}
		enum StatusCode {
			/** 6 */
			Cancelled,
			/** 1 */
			In_Progress,
			/** 1000 */
			Information_Provided,
			/** 2000 */
			Merged,
			/** 2 */
			On_Hold,
			/** 5 */
			Problem_Solved,
			/** 4 */
			Researching,
			/** 3 */
			Waiting_for_Details
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