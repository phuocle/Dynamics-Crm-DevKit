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
			case_summary_section: DevKit.Controls.Section;
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
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			TraversedPath: DevKit.Controls.String;
		}
		interface Navigation {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_iottocaseprocess: DevKit.Controls.NavigationItem,
			incident_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			incident_adx_portalcomments: DevKit.Controls.NavigationItem,
			Incident_Appointments: DevKit.Controls.NavigationItem,
			Incident_Emails: DevKit.Controls.NavigationItem,
			incident_existingcase: DevKit.Controls.NavigationItem,
			Incident_IncidentResolutions: DevKit.Controls.NavigationItem,
			incident_master_incident: DevKit.Controls.NavigationItem,
			incident_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			incident_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			incident_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			incident_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			incident_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			incident_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			incident_msfp_alerts: DevKit.Controls.NavigationItem,
			incident_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			incident_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			incident_OpportunityCloses: DevKit.Controls.NavigationItem,
			incident_OrderCloses: DevKit.Controls.NavigationItem,
			incident_parent_incident: DevKit.Controls.NavigationItem,
			Incident_Phonecalls: DevKit.Controls.NavigationItem,
			incident_Posts: DevKit.Controls.NavigationItem,
			Incident_QueueItem: DevKit.Controls.NavigationItem,
			incident_QuoteCloses: DevKit.Controls.NavigationItem,
			Incident_ServiceAppointments: DevKit.Controls.NavigationItem,
			Incident_Tasks: DevKit.Controls.NavigationItem,
			incident_topic: DevKit.Controls.NavigationItem,
			knowledgearticle_incidents: DevKit.Controls.NavigationItem,
			lk_phonetocaseprocess_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_feedback_context: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_caseenrichment_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestion_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casetopic_incident_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_inspectioninstance_CaseId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_intententity_objectid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_iotalert_Case: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_ocliveworkitem: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_originatingqueue_createdincidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestionrequestpayload: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_workorder_ServiceRequest: DevKit.Controls.NavigationItem,
			msdyn_nextaction_regarding_incident: DevKit.Controls.NavigationItem,
			msdyn_readtracker_poly_incident: DevKit.Controls.NavigationItem,
			msdyn_relatedentity_msdyn_entityattachment: DevKit.Controls.NavigationItem,
			msdyn_swarm_incident: DevKit.Controls.NavigationItem,
			msdyn_timetracker_regardingentity_Incident: DevKit.Controls.NavigationItem,
			OriginatingCase_Lead: DevKit.Controls.NavigationItem
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
	namespace FormCase_for_Customer_Card {
		interface tab_general_Sections {
			general_section_6: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_iottocaseprocess: DevKit.Controls.NavigationItem,
			incident_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			incident_adx_portalcomments: DevKit.Controls.NavigationItem,
			Incident_Appointments: DevKit.Controls.NavigationItem,
			Incident_Emails: DevKit.Controls.NavigationItem,
			incident_existingcase: DevKit.Controls.NavigationItem,
			Incident_IncidentResolutions: DevKit.Controls.NavigationItem,
			incident_master_incident: DevKit.Controls.NavigationItem,
			incident_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			incident_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			incident_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			incident_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			incident_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			incident_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			incident_msfp_alerts: DevKit.Controls.NavigationItem,
			incident_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			incident_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			incident_OpportunityCloses: DevKit.Controls.NavigationItem,
			incident_OrderCloses: DevKit.Controls.NavigationItem,
			incident_parent_incident: DevKit.Controls.NavigationItem,
			Incident_Phonecalls: DevKit.Controls.NavigationItem,
			incident_Posts: DevKit.Controls.NavigationItem,
			Incident_QueueItem: DevKit.Controls.NavigationItem,
			incident_QuoteCloses: DevKit.Controls.NavigationItem,
			Incident_ServiceAppointments: DevKit.Controls.NavigationItem,
			Incident_Tasks: DevKit.Controls.NavigationItem,
			incident_topic: DevKit.Controls.NavigationItem,
			knowledgearticle_incidents: DevKit.Controls.NavigationItem,
			lk_phonetocaseprocess_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_feedback_context: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_caseenrichment_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestion_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casetopic_incident_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_inspectioninstance_CaseId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_intententity_objectid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_iotalert_Case: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_ocliveworkitem: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_originatingqueue_createdincidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestionrequestpayload: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_workorder_ServiceRequest: DevKit.Controls.NavigationItem,
			msdyn_nextaction_regarding_incident: DevKit.Controls.NavigationItem,
			msdyn_readtracker_poly_incident: DevKit.Controls.NavigationItem,
			msdyn_relatedentity_msdyn_entityattachment: DevKit.Controls.NavigationItem,
			msdyn_swarm_incident: DevKit.Controls.NavigationItem,
			msdyn_timetracker_regardingentity_Incident: DevKit.Controls.NavigationItem,
			OriginatingCase_Lead: DevKit.Controls.NavigationItem
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
	class FormCase_for_Customer_Card extends DevKit.IForm {
		/**
		* Case for Customer Card [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Case_for_Customer_Card */
		Body: DevKit.FormCase_for_Customer_Card.Body;
		/** The Navigation of form Case_for_Customer_Card */
		Navigation: DevKit.FormCase_for_Customer_Card.Navigation;
		/** The Process of form Case_for_Customer_Card */
		Process: DevKit.FormCase_for_Customer_Card.Process;
		/** The SidePanes of form Case_for_Customer_Card */
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
			SwarmSection: DevKit.Controls.Section;
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
			copilot_summary_section: DevKit.Controls.Section;
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
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
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
			similarCaseRecordcontrol_id: DevKit.Controls.ActionCards;
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
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			Title1: DevKit.Controls.String;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			TraversedPath: DevKit.Controls.String;
		}
		interface Navigation {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_iottocaseprocess: DevKit.Controls.NavigationItem,
			incident_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			incident_adx_portalcomments: DevKit.Controls.NavigationItem,
			Incident_Appointments: DevKit.Controls.NavigationItem,
			Incident_Emails: DevKit.Controls.NavigationItem,
			incident_existingcase: DevKit.Controls.NavigationItem,
			Incident_IncidentResolutions: DevKit.Controls.NavigationItem,
			incident_master_incident: DevKit.Controls.NavigationItem,
			incident_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			incident_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			incident_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			incident_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			incident_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			incident_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			incident_msfp_alerts: DevKit.Controls.NavigationItem,
			incident_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			incident_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			incident_OpportunityCloses: DevKit.Controls.NavigationItem,
			incident_OrderCloses: DevKit.Controls.NavigationItem,
			incident_parent_incident: DevKit.Controls.NavigationItem,
			Incident_Phonecalls: DevKit.Controls.NavigationItem,
			incident_Posts: DevKit.Controls.NavigationItem,
			Incident_QueueItem: DevKit.Controls.NavigationItem,
			incident_QuoteCloses: DevKit.Controls.NavigationItem,
			Incident_ServiceAppointments: DevKit.Controls.NavigationItem,
			Incident_Tasks: DevKit.Controls.NavigationItem,
			incident_topic: DevKit.Controls.NavigationItem,
			knowledgearticle_incidents: DevKit.Controls.NavigationItem,
			lk_phonetocaseprocess_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_feedback_context: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_caseenrichment_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestion_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casetopic_incident_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_inspectioninstance_CaseId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_intententity_objectid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_iotalert_Case: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_ocliveworkitem: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_originatingqueue_createdincidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestionrequestpayload: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_workorder_ServiceRequest: DevKit.Controls.NavigationItem,
			msdyn_nextaction_regarding_incident: DevKit.Controls.NavigationItem,
			msdyn_readtracker_poly_incident: DevKit.Controls.NavigationItem,
			msdyn_relatedentity_msdyn_entityattachment: DevKit.Controls.NavigationItem,
			msdyn_swarm_incident: DevKit.Controls.NavigationItem,
			msdyn_timetracker_regardingentity_Incident: DevKit.Controls.NavigationItem,
			OriginatingCase_Lead: DevKit.Controls.NavigationItem
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
			SwarmSubgrid: DevKit.Controls.Grid;
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
		/** The Navigation of form Case_for_Interactive_experience */
		Navigation: DevKit.FormCase_for_Interactive_experience.Navigation;
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
			queueitemdetails: DevKit.Controls.Section;
			RelatedCases: DevKit.Controls.Section;
			SwarmSection: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			Case_Details_Summary: DevKit.Controls.Section;
			copilot_summary_section: DevKit.Controls.Section;
			dueActivitySection: DevKit.Controls.Section;
			TabsControl: DevKit.Controls.Section;
		}
		interface tab_Tab_Attachment_Sections {
			attachmentSection: DevKit.Controls.Section;
		}
		interface tab_CASERELATIONSHIP_TAB extends DevKit.Controls.ITab {
			Section: tab_CASERELATIONSHIP_TAB_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface tab_Tab_Attachment extends DevKit.Controls.ITab {
			Section: tab_Tab_Attachment_Sections;
		}
		interface Tabs {
			CASERELATIONSHIP_TAB: tab_CASERELATIONSHIP_TAB;
			Summary: tab_Summary;
			Tab_Attachment: tab_Tab_Attachment;
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
			/** Entity Attachments Id before the case record is created */
			msdyn_precreateattachmentsid: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the parent case for a case. */
			ParentCaseId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
			ProductId: DevKit.Controls.Lookup;
			/** Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported. */
			ProductSerialNumber: DevKit.Controls.String;
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
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			TraversedPath: DevKit.Controls.String;
		}
		interface Navigation {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_iottocaseprocess: DevKit.Controls.NavigationItem,
			incident_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			incident_adx_portalcomments: DevKit.Controls.NavigationItem,
			Incident_Appointments: DevKit.Controls.NavigationItem,
			Incident_Emails: DevKit.Controls.NavigationItem,
			incident_existingcase: DevKit.Controls.NavigationItem,
			Incident_IncidentResolutions: DevKit.Controls.NavigationItem,
			incident_master_incident: DevKit.Controls.NavigationItem,
			incident_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			incident_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			incident_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			incident_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			incident_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			incident_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			incident_msfp_alerts: DevKit.Controls.NavigationItem,
			incident_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			incident_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			incident_OpportunityCloses: DevKit.Controls.NavigationItem,
			incident_OrderCloses: DevKit.Controls.NavigationItem,
			incident_parent_incident: DevKit.Controls.NavigationItem,
			Incident_Phonecalls: DevKit.Controls.NavigationItem,
			incident_Posts: DevKit.Controls.NavigationItem,
			Incident_QueueItem: DevKit.Controls.NavigationItem,
			incident_QuoteCloses: DevKit.Controls.NavigationItem,
			Incident_ServiceAppointments: DevKit.Controls.NavigationItem,
			Incident_Tasks: DevKit.Controls.NavigationItem,
			incident_topic: DevKit.Controls.NavigationItem,
			knowledgearticle_incidents: DevKit.Controls.NavigationItem,
			lk_phonetocaseprocess_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_feedback_context: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_caseenrichment_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestion_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casetopic_incident_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_inspectioninstance_CaseId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_intententity_objectid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_iotalert_Case: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_ocliveworkitem: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_originatingqueue_createdincidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestionrequestpayload: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_workorder_ServiceRequest: DevKit.Controls.NavigationItem,
			msdyn_nextaction_regarding_incident: DevKit.Controls.NavigationItem,
			msdyn_readtracker_poly_incident: DevKit.Controls.NavigationItem,
			msdyn_relatedentity_msdyn_entityattachment: DevKit.Controls.NavigationItem,
			msdyn_swarm_incident: DevKit.Controls.NavigationItem,
			msdyn_timetracker_regardingentity_Incident: DevKit.Controls.NavigationItem,
			OriginatingCase_Lead: DevKit.Controls.NavigationItem
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
			Activities: DevKit.Controls.Grid;
			Associated_KnowledgeArticles: DevKit.Controls.Grid;
			ChildCasesGrid: DevKit.Controls.Grid;
			MergedCasesGrid: DevKit.Controls.Grid;
			relatedCases: DevKit.Controls.Grid;
			SwarmSubgrid: DevKit.Controls.Grid;
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
	namespace FormEnhanced_full_case_form {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Select the case's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Shows the case number for customer reference and searching capabilities. This cannot be modified. */
			TicketNumber: DevKit.Controls.String;
		}
		interface tab_general_Sections {
			attachment: DevKit.Controls.Section;
			caseassociation: DevKit.Controls.Section;
			copilot_summary_section: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			Details: DevKit.Controls.Section;
			general_section_10: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
			queueitemdetails: DevKit.Controls.Section;
			slaTimer: DevKit.Controls.Section;
			Timeline: DevKit.Controls.Section;
		}
		interface tab_Tab_Attachment_Sections {
			attachmentSection: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_Tab_Attachment extends DevKit.Controls.ITab {
			Section: tab_Tab_Attachment_Sections;
		}
		interface Tabs {
			general: tab_general;
			Tab_Attachment: tab_Tab_Attachment;
		}
		interface Body {
			Tab: Tabs;
			/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
			CaseOriginCode: DevKit.Controls.OptionSet;
			/** Select the type of case to identify the incident for use in case routing and analysis. */
			CaseTypeCode: DevKit.Controls.OptionSet;
			/** Select the type of case to identify the incident for use in case routing and analysis. */
			CaseTypeCode1: DevKit.Controls.OptionSet;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			CustomerId: DevKit.Controls.Lookup;
			/** Type additional information to describe the case to assist the service team in reaching a resolution. */
			Description: DevKit.Controls.String;
			/** Choose the entitlement that is applicable for the case. */
			EntitlementId: DevKit.Controls.Lookup;
			/** Indicates the date and time when the case was escalated. */
			EscalatedOn: DevKit.Controls.DateTime;
			/** Indicates if the case has been escalated. */
			IsEscalated: DevKit.Controls.Boolean;
			/** Entity Attachments Id before the case record is created */
			msdyn_precreateattachmentsid: DevKit.Controls.String;
			/** Entity Attachments Id before the case record is created */
			msdyn_precreateattachmentsid1: DevKit.Controls.String;
			/** Notes Id before the case record is created */
			msdyn_precreatenotesid: DevKit.Controls.String;
			/** Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported. */
			ProductSerialNumber: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Choose the parent case for a case. */
			ParentCaseId: DevKit.Controls.Lookup;
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
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			TraversedPath: DevKit.Controls.String;
		}
		interface Navigation {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_iottocaseprocess: DevKit.Controls.NavigationItem,
			incident_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			incident_adx_portalcomments: DevKit.Controls.NavigationItem,
			Incident_Appointments: DevKit.Controls.NavigationItem,
			Incident_Emails: DevKit.Controls.NavigationItem,
			incident_existingcase: DevKit.Controls.NavigationItem,
			Incident_IncidentResolutions: DevKit.Controls.NavigationItem,
			incident_master_incident: DevKit.Controls.NavigationItem,
			incident_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			incident_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			incident_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			incident_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			incident_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			incident_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			incident_msfp_alerts: DevKit.Controls.NavigationItem,
			incident_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			incident_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			incident_OpportunityCloses: DevKit.Controls.NavigationItem,
			incident_OrderCloses: DevKit.Controls.NavigationItem,
			incident_parent_incident: DevKit.Controls.NavigationItem,
			Incident_Phonecalls: DevKit.Controls.NavigationItem,
			incident_Posts: DevKit.Controls.NavigationItem,
			Incident_QueueItem: DevKit.Controls.NavigationItem,
			incident_QuoteCloses: DevKit.Controls.NavigationItem,
			Incident_ServiceAppointments: DevKit.Controls.NavigationItem,
			Incident_Tasks: DevKit.Controls.NavigationItem,
			incident_topic: DevKit.Controls.NavigationItem,
			knowledgearticle_incidents: DevKit.Controls.NavigationItem,
			lk_phonetocaseprocess_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_feedback_context: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_caseenrichment_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestion_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casetopic_incident_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_inspectioninstance_CaseId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_intententity_objectid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_iotalert_Case: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_ocliveworkitem: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_originatingqueue_createdincidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestionrequestpayload: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_workorder_ServiceRequest: DevKit.Controls.NavigationItem,
			msdyn_nextaction_regarding_incident: DevKit.Controls.NavigationItem,
			msdyn_readtracker_poly_incident: DevKit.Controls.NavigationItem,
			msdyn_relatedentity_msdyn_entityattachment: DevKit.Controls.NavigationItem,
			msdyn_swarm_incident: DevKit.Controls.NavigationItem,
			msdyn_timetracker_regardingentity_Incident: DevKit.Controls.NavigationItem,
			OriginatingCase_Lead: DevKit.Controls.NavigationItem
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
			Activities: DevKit.Controls.Grid;
			case_associations_control: DevKit.Controls.Grid;
			slatimer: DevKit.Controls.Grid;
		}
	}
	class FormEnhanced_full_case_form extends DevKit.IForm {
		/**
		* Enhanced full case form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Enhanced_full_case_form */
		Body: DevKit.FormEnhanced_full_case_form.Body;
		/** The Header section of form Enhanced_full_case_form */
		Header: DevKit.FormEnhanced_full_case_form.Header;
		/** The Navigation of form Enhanced_full_case_form */
		Navigation: DevKit.FormEnhanced_full_case_form.Navigation;
		/** The Process of form Enhanced_full_case_form */
		Process: DevKit.FormEnhanced_full_case_form.Process;
		/** The Grid of form Enhanced_full_case_form */
		Grid: DevKit.FormEnhanced_full_case_form.Grid;
		/** The SidePanes of form Enhanced_full_case_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEnhanced_quick_case_form {
		interface Header extends DevKit.Controls.IHeader {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
		}
		interface tab_attachment_Sections {
			tab_9_section_1: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			Details: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_attachment extends DevKit.Controls.ITab {
			Section: tab_attachment_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			attachment: tab_attachment;
			general: tab_general;
			notes: tab_notes;
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
			/** Entity Attachments Id before the case record is created */
			msdyn_precreateattachmentsid: DevKit.Controls.String;
			/** Notes Id before the case record is created */
			msdyn_precreatenotesid: DevKit.Controls.String;
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
		}
		interface Navigation {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_iottocaseprocess: DevKit.Controls.NavigationItem,
			incident_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			incident_adx_portalcomments: DevKit.Controls.NavigationItem,
			Incident_Appointments: DevKit.Controls.NavigationItem,
			Incident_Emails: DevKit.Controls.NavigationItem,
			incident_existingcase: DevKit.Controls.NavigationItem,
			Incident_IncidentResolutions: DevKit.Controls.NavigationItem,
			incident_master_incident: DevKit.Controls.NavigationItem,
			incident_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			incident_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			incident_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			incident_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			incident_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			incident_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			incident_msfp_alerts: DevKit.Controls.NavigationItem,
			incident_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			incident_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			incident_OpportunityCloses: DevKit.Controls.NavigationItem,
			incident_OrderCloses: DevKit.Controls.NavigationItem,
			incident_parent_incident: DevKit.Controls.NavigationItem,
			Incident_Phonecalls: DevKit.Controls.NavigationItem,
			incident_Posts: DevKit.Controls.NavigationItem,
			Incident_QueueItem: DevKit.Controls.NavigationItem,
			incident_QuoteCloses: DevKit.Controls.NavigationItem,
			Incident_ServiceAppointments: DevKit.Controls.NavigationItem,
			Incident_Tasks: DevKit.Controls.NavigationItem,
			incident_topic: DevKit.Controls.NavigationItem,
			knowledgearticle_incidents: DevKit.Controls.NavigationItem,
			lk_phonetocaseprocess_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_feedback_context: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_caseenrichment_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestion_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casetopic_incident_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_inspectioninstance_CaseId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_intententity_objectid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_iotalert_Case: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_ocliveworkitem: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_originatingqueue_createdincidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestionrequestpayload: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_workorder_ServiceRequest: DevKit.Controls.NavigationItem,
			msdyn_nextaction_regarding_incident: DevKit.Controls.NavigationItem,
			msdyn_readtracker_poly_incident: DevKit.Controls.NavigationItem,
			msdyn_relatedentity_msdyn_entityattachment: DevKit.Controls.NavigationItem,
			msdyn_swarm_incident: DevKit.Controls.NavigationItem,
			msdyn_timetracker_regardingentity_Incident: DevKit.Controls.NavigationItem,
			OriginatingCase_Lead: DevKit.Controls.NavigationItem
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
	class FormEnhanced_quick_case_form extends DevKit.IForm {
		/**
		* Enhanced quick case form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Enhanced_quick_case_form */
		Body: DevKit.FormEnhanced_quick_case_form.Body;
		/** The Header section of form Enhanced_quick_case_form */
		Header: DevKit.FormEnhanced_quick_case_form.Header;
		/** The Navigation of form Enhanced_quick_case_form */
		Navigation: DevKit.FormEnhanced_quick_case_form.Navigation;
		/** The Process of form Enhanced_quick_case_form */
		Process: DevKit.FormEnhanced_quick_case_form.Process;
		/** The SidePanes of form Enhanced_quick_case_form */
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
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_iottocaseprocess: DevKit.Controls.NavigationItem,
			incident_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			incident_adx_portalcomments: DevKit.Controls.NavigationItem,
			Incident_Appointments: DevKit.Controls.NavigationItem,
			Incident_Emails: DevKit.Controls.NavigationItem,
			incident_existingcase: DevKit.Controls.NavigationItem,
			Incident_IncidentResolutions: DevKit.Controls.NavigationItem,
			incident_master_incident: DevKit.Controls.NavigationItem,
			incident_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			incident_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			incident_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			incident_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			incident_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			incident_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			incident_msfp_alerts: DevKit.Controls.NavigationItem,
			incident_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			incident_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			incident_OpportunityCloses: DevKit.Controls.NavigationItem,
			incident_OrderCloses: DevKit.Controls.NavigationItem,
			incident_parent_incident: DevKit.Controls.NavigationItem,
			Incident_Phonecalls: DevKit.Controls.NavigationItem,
			incident_Posts: DevKit.Controls.NavigationItem,
			Incident_QueueItem: DevKit.Controls.NavigationItem,
			incident_QuoteCloses: DevKit.Controls.NavigationItem,
			Incident_ServiceAppointments: DevKit.Controls.NavigationItem,
			Incident_Tasks: DevKit.Controls.NavigationItem,
			incident_topic: DevKit.Controls.NavigationItem,
			knowledgearticle_incidents: DevKit.Controls.NavigationItem,
			lk_phonetocaseprocess_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_feedback_context: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_caseenrichment_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestion_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casetopic_incident_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_inspectioninstance_CaseId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_intententity_objectid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_iotalert_Case: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_ocliveworkitem: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_originatingqueue_createdincidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestionrequestpayload: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_workorder_ServiceRequest: DevKit.Controls.NavigationItem,
			msdyn_nextaction_regarding_incident: DevKit.Controls.NavigationItem,
			msdyn_readtracker_poly_incident: DevKit.Controls.NavigationItem,
			msdyn_relatedentity_msdyn_entityattachment: DevKit.Controls.NavigationItem,
			msdyn_swarm_incident: DevKit.Controls.NavigationItem,
			msdyn_timetracker_regardingentity_Incident: DevKit.Controls.NavigationItem,
			OriginatingCase_Lead: DevKit.Controls.NavigationItem
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
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_incident_msdyn_iottocaseprocess: DevKit.Controls.NavigationItem,
			incident_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			incident_adx_portalcomments: DevKit.Controls.NavigationItem,
			Incident_Appointments: DevKit.Controls.NavigationItem,
			Incident_Emails: DevKit.Controls.NavigationItem,
			incident_existingcase: DevKit.Controls.NavigationItem,
			Incident_IncidentResolutions: DevKit.Controls.NavigationItem,
			incident_master_incident: DevKit.Controls.NavigationItem,
			incident_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			incident_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			incident_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			incident_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			incident_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			incident_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			incident_msfp_alerts: DevKit.Controls.NavigationItem,
			incident_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			incident_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			incident_OpportunityCloses: DevKit.Controls.NavigationItem,
			incident_OrderCloses: DevKit.Controls.NavigationItem,
			incident_parent_incident: DevKit.Controls.NavigationItem,
			Incident_Phonecalls: DevKit.Controls.NavigationItem,
			incident_Posts: DevKit.Controls.NavigationItem,
			Incident_QueueItem: DevKit.Controls.NavigationItem,
			incident_QuoteCloses: DevKit.Controls.NavigationItem,
			Incident_ServiceAppointments: DevKit.Controls.NavigationItem,
			Incident_Tasks: DevKit.Controls.NavigationItem,
			incident_topic: DevKit.Controls.NavigationItem,
			knowledgearticle_incidents: DevKit.Controls.NavigationItem,
			lk_phonetocaseprocess_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_feedback_context: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_caseenrichment_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestion_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_casetopic_incident_incidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_inspectioninstance_CaseId: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_intententity_objectid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_iotalert_Case: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_ocliveworkitem: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_originatingqueue_createdincidentid: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_suggestionrequestpayload: DevKit.Controls.NavigationItem,
			msdyn_incident_msdyn_workorder_ServiceRequest: DevKit.Controls.NavigationItem,
			msdyn_nextaction_regarding_incident: DevKit.Controls.NavigationItem,
			msdyn_readtracker_poly_incident: DevKit.Controls.NavigationItem,
			msdyn_relatedentity_msdyn_entityattachment: DevKit.Controls.NavigationItem,
			msdyn_swarm_incident: DevKit.Controls.NavigationItem,
			msdyn_timetracker_regardingentity_Incident: DevKit.Controls.NavigationItem,
			OriginatingCase_Lead: DevKit.Controls.NavigationItem
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
		/** Unique identifier of the account with which the case is associated. */
		readonly AccountId: string;
		/** This attribute is used for Sample Service Business Processes. */
		ActivitiesComplete: boolean;
		/** Type the number of service units that were actually required to resolve the case. */
		ActualServiceUnits: number;
		/** Type the number of service units that were billed to the customer for the case. */
		BilledServiceUnits: number;
		/** Details whether the profile is blocked or not. */
		BlockedProfile: boolean;
		/** Shows the duration for which the Case has been active for Active and Resolved Cases. */
		readonly caseage: string;
		/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
		CaseOriginCode: OptionSet.Incident.CaseOriginCode;
		/** Select the type of case to identify the incident for use in case routing and analysis. */
		CaseTypeCode: OptionSet.Incident.CaseTypeCode;
		/** This attribute is used for Sample Service Business Processes. */
		CheckEmail: boolean;
		/** Unique identifier of the contact associated with the case. */
		readonly ContactId: string;
		/** Choose the contract line that the case should be logged under to make sure the customer is charged correctly. */
		ContractDetailId: string;
		/** Choose the service contract that the case should be logged under to make sure the customer is eligible for support services. */
		ContractId: string;
		/** Select the service level for the case to make sure the case is handled correctly. */
		ContractServiceLevelCode: OptionSet.Incident.ContractServiceLevelCode;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the external party who created the record. */
		readonly CreatedByExternalParty: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Tells whether customer service representative has contacted the customer or not. */
		CustomerContacted: boolean;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
		customerid_account: string;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
		customerid_contact: string;
		/** Select the customer's level of satisfaction with the handling and resolution of the case. */
		CustomerSatisfactionCode: OptionSet.Incident.CustomerSatisfactionCode;
		/** Shows the date time when the Case was resolved. */
		deactivatedon_UtcDateAndTime: Date;
		/** Shows whether terms of the associated entitlement should be decremented or not. */
		DecrementEntitlementTerm: boolean;
		/** Type additional information to describe the case to assist the service team in reaching a resolution. */
		Description: string;
		/** The primary email address for the entity. */
		EmailAddress: string;
		/** Choose the entitlement that is applicable for the case. */
		EntitlementId: string;
		/** The default image for the entity. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Indicates the date and time when the case was escalated. */
		readonly EscalatedOn_UtcDateAndTime: Date;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Select an existing case for the customer that has been populated. For internal use only. */
		ExistingCase: string;
		/** For internal use only. */
		FirstResponseByKPIId: string;
		/** Indicates if the first response has been sent. */
		FirstResponseSent: boolean;
		/** Shows the status of the initial response time for the case according to the terms of the SLA. */
		FirstResponseSLAStatus: OptionSet.Incident.FirstResponseSLAStatus;
		/** Enter the date by which a customer service representative has to follow up with the customer on this case. */
		FollowupBy_UtcDateOnly: Date;
		/** This attribute is used for Sample Service Business Processes. */
		FollowUpTaskCreated: boolean;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the case. */
		IncidentId: string;
		/** Select the current stage of the service process for the case to assist service team members when they review or transfer a case. */
		IncidentStageCode: OptionSet.Incident.IncidentStageCode;
		/** Will contain the Influencer score coming from NetBreeze. */
		InfluenceScore: number;
		/** For system use only. */
		IsDecrementing: boolean;
		/** Indicates if the case has been escalated. */
		IsEscalated: boolean;
		/** Choose the article that contains additional information or a resolution for the case, for reference during research or follow up with the customer. */
		KbArticleId: string;
		/** Shows the latest activity associated with the Case and the action performed on that activity. */
		readonly lastinteraction: string;
		/** Contains the date time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Choose the primary case the current case was merged into. */
		MasterId: string;
		/** Tells whether the incident has been merged with another incident. */
		readonly Merged: boolean;
		/** Shows whether the post originated as a public or private message. */
		MessageTypeCode: OptionSet.Incident.MessageTypeCode;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the external party who modified the record. */
		readonly ModifiedByExternalParty: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Survey invite url for customer feedback. */
		msdyn_CaseSurveyInviteUrl: string;
		msdyn_copilotengaged: boolean;
		/** Case's functional location */
		msdyn_FunctionalLocation: string;
		/** Unique identifier for Incident Type associated with Case. */
		msdyn_IncidentType: string;
		/** The iot alert that initiated this case */
		msdyn_iotalert: string;
		/** Entity Attachments Id before the case record is created */
		msdyn_precreateattachmentsid: string;
		/** Notes Id before the case record is created */
		msdyn_precreatenotesid: string;
		/** Shows the unresolved SLA KPI associated with the Case with the earliest expiry time. */
		nextsla: string;
		/** Number of child incidents associated with the incident. */
		readonly NumberOfChildIncidents: number;
		/** Shows the duration in minutes for which the case was on hold. */
		readonly OnHoldTime: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Choose the parent case for a case. */
		ParentCaseId: string;
		/** Select a primary contact for this case. */
		PrimaryContactId: string;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.Incident.PriorityCode;
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
		ProductId: string;
		/** Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported. */
		ProductSerialNumber: string;
		/** Enter the date by when the case must be resolved. */
		ResolveBy_UtcDateAndTime: Date;
		/** For internal use only. */
		ResolveByKPIId: string;
		/** Shows the status of the resolution time for the case according to the terms of the SLA. */
		ResolveBySLAStatus: OptionSet.Incident.ResolveBySLAStatus;
		/** For internal use only. */
		ResponseBy_UtcDateAndTime: Date;
		/** Choose an additional customer contact who can also help resolve the case. */
		ResponsibleContactId: string;
		/** Tells whether the incident has been routed to queue or not. */
		RouteCase: boolean;
		/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
		SentimentValue: number;
		/** Select the stage, in the case resolution process, that the case is in. */
		ServiceStage: OptionSet.Incident.ServiceStage;
		/** Select the severity of this case to indicate the incident's impact on the customer's business. */
		SeverityCode: OptionSet.Incident.SeverityCode;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: string;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Unique identifier of the social profile with which the case is associated. */
		SocialProfileId: string;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Shows whether the case is active, resolved, or canceled. Resolved and canceled cases are read-only and can't be edited unless they are reactivated. */
		StateCode: OptionSet.Incident.StateCode;
		/** Select the case's status. */
		StatusCode: OptionSet.Incident.StatusCode;
		/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
		SubjectId: string;
		/** Shows the case number for customer reference and searching capabilities. This cannot be modified. */
		TicketNumber: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
		Title: string;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the account with which the case is associated. */
			readonly AccountId: string;
			/** This attribute is used for Sample Service Business Processes. */
			readonly ActivitiesComplete: string;
			/** Type the number of service units that were actually required to resolve the case. */
			readonly ActualServiceUnits: string;
			/** Type the number of service units that were billed to the customer for the case. */
			readonly BilledServiceUnits: string;
			/** Details whether the profile is blocked or not. */
			readonly BlockedProfile: string;
			/** Shows the duration for which the Case has been active for Active and Resolved Cases. */
			readonly caseage: string;
			/** Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis. */
			readonly CaseOriginCode: string;
			/** Select the type of case to identify the incident for use in case routing and analysis. */
			readonly CaseTypeCode: string;
			/** This attribute is used for Sample Service Business Processes. */
			readonly CheckEmail: string;
			/** Unique identifier of the contact associated with the case. */
			readonly ContactId: string;
			/** Choose the contract line that the case should be logged under to make sure the customer is charged correctly. */
			readonly ContractDetailId: string;
			/** Choose the service contract that the case should be logged under to make sure the customer is eligible for support services. */
			readonly ContractId: string;
			/** Select the service level for the case to make sure the case is handled correctly. */
			readonly ContractServiceLevelCode: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the external party who created the record. */
			readonly CreatedByExternalParty: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Tells whether customer service representative has contacted the customer or not. */
			readonly CustomerContacted: string;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			readonly customerid_account: string;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			readonly customerid_contact: string;
			/** Select the customer's level of satisfaction with the handling and resolution of the case. */
			readonly CustomerSatisfactionCode: string;
			/** Shows the date time when the Case was resolved. */
			readonly deactivatedon_UtcDateAndTime: string;
			/** Shows whether terms of the associated entitlement should be decremented or not. */
			readonly DecrementEntitlementTerm: string;
			/** Type additional information to describe the case to assist the service team in reaching a resolution. */
			readonly Description: string;
			/** The primary email address for the entity. */
			readonly EmailAddress: string;
			/** Choose the entitlement that is applicable for the case. */
			readonly EntitlementId: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Indicates the date and time when the case was escalated. */
			readonly EscalatedOn_UtcDateAndTime: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Select an existing case for the customer that has been populated. For internal use only. */
			readonly ExistingCase: string;
			/** For internal use only. */
			readonly FirstResponseByKPIId: string;
			/** Indicates if the first response has been sent. */
			readonly FirstResponseSent: string;
			/** Shows the status of the initial response time for the case according to the terms of the SLA. */
			readonly FirstResponseSLAStatus: string;
			/** Enter the date by which a customer service representative has to follow up with the customer on this case. */
			readonly FollowupBy_UtcDateOnly: string;
			/** This attribute is used for Sample Service Business Processes. */
			readonly FollowUpTaskCreated: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the case. */
			readonly IncidentId: string;
			/** Select the current stage of the service process for the case to assist service team members when they review or transfer a case. */
			readonly IncidentStageCode: string;
			/** Will contain the Influencer score coming from NetBreeze. */
			readonly InfluenceScore: string;
			/** For system use only. */
			readonly IsDecrementing: string;
			/** Indicates if the case has been escalated. */
			readonly IsEscalated: string;
			/** Choose the article that contains additional information or a resolution for the case, for reference during research or follow up with the customer. */
			readonly KbArticleId: string;
			/** Shows the latest activity associated with the Case and the action performed on that activity. */
			readonly lastinteraction: string;
			/** Contains the date time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Choose the primary case the current case was merged into. */
			readonly MasterId: string;
			/** Tells whether the incident has been merged with another incident. */
			readonly Merged: string;
			/** Shows whether the post originated as a public or private message. */
			readonly MessageTypeCode: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the external party who modified the record. */
			readonly ModifiedByExternalParty: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Survey invite url for customer feedback. */
			readonly msdyn_CaseSurveyInviteUrl: string;
			readonly msdyn_copilotengaged: string;
			/** Case's functional location */
			readonly msdyn_FunctionalLocation: string;
			/** Unique identifier for Incident Type associated with Case. */
			readonly msdyn_IncidentType: string;
			/** The iot alert that initiated this case */
			readonly msdyn_iotalert: string;
			/** Entity Attachments Id before the case record is created */
			readonly msdyn_precreateattachmentsid: string;
			/** Notes Id before the case record is created */
			readonly msdyn_precreatenotesid: string;
			/** Shows the unresolved SLA KPI associated with the Case with the earliest expiry time. */
			readonly nextsla: string;
			/** Number of child incidents associated with the incident. */
			readonly NumberOfChildIncidents: string;
			/** Shows the duration in minutes for which the case was on hold. */
			readonly OnHoldTime: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Choose the parent case for a case. */
			readonly ParentCaseId: string;
			/** Select a primary contact for this case. */
			readonly PrimaryContactId: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Contains the id of the process associated with the entity. */
			readonly ProcessId: string;
			/** Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product. */
			readonly ProductId: string;
			/** Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported. */
			readonly ProductSerialNumber: string;
			/** Enter the date by when the case must be resolved. */
			readonly ResolveBy_UtcDateAndTime: string;
			/** For internal use only. */
			readonly ResolveByKPIId: string;
			/** Shows the status of the resolution time for the case according to the terms of the SLA. */
			readonly ResolveBySLAStatus: string;
			/** For internal use only. */
			readonly ResponseBy_UtcDateAndTime: string;
			/** Choose an additional customer contact who can also help resolve the case. */
			readonly ResponsibleContactId: string;
			/** Tells whether the incident has been routed to queue or not. */
			readonly RouteCase: string;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			readonly SentimentValue: string;
			/** Select the stage, in the case resolution process, that the case is in. */
			readonly ServiceStage: string;
			/** Select the severity of this case to indicate the incident's impact on the customer's business. */
			readonly SeverityCode: string;
			/** Choose the service level agreement (SLA) that you want to apply to the case record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this case. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Unique identifier of the social profile with which the case is associated. */
			readonly SocialProfileId: string;
			/** Contains the id of the stage where the entity is located. */
			readonly StageId: string;
			/** Shows whether the case is active, resolved, or canceled. Resolved and canceled cases are read-only and can't be edited unless they are reactivated. */
			readonly StateCode: string;
			/** Select the case's status. */
			readonly StatusCode: string;
			/** Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area. */
			readonly SubjectId: string;
			/** Shows the case number for customer reference and searching capabilities. This cannot be modified. */
			readonly TicketNumber: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views. */
			readonly Title: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
		enum CustomerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}