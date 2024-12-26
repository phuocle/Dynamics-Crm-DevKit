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
		interface tab_accountInsights_Sections {
			insights_section_2: DevKit.Controls.Section;
		}
		interface tab_contactInsights_Sections {
			insights_section: DevKit.Controls.Section;
		}
		interface tab_details_tab_Sections {
			contact_methods: DevKit.Controls.Section;
			EventInformationSection: DevKit.Controls.Section;
			lead_information: DevKit.Controls.Section;
			marketing_information: DevKit.Controls.Section;
		}
		interface tab_Lead_scores_Sections {
			lead_scores_section: DevKit.Controls.Section;
		}
		interface tab_LinkedIn_Lead_Info_Sections {
			Company: DevKit.Controls.Section;
			Education: DevKit.Controls.Section;
			LinkedIn_Contact: DevKit.Controls.Section;
			LINKEDIN_FORM_SUBMISSIONS: DevKit.Controls.Section;
			Source_Context: DevKit.Controls.Section;
		}
		interface tab_rtm_insights_Sections {
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			company: DevKit.Controls.Section;
			Contact: DevKit.Controls.Section;
			MapSection: DevKit.Controls.Section;
			RELATED_TAB: DevKit.Controls.Section;
			SOCIAL_PANE: DevKit.Controls.Section;
			Summary_CadenceWidget: DevKit.Controls.Section;
			SUMMARY_TAB_ADDRESSINPUT_SECTION: DevKit.Controls.Section;
			WKW_Section: DevKit.Controls.Section;
		}
		interface tab_tab_communication_Sections {
			tab_communication_section_communication: DevKit.Controls.Section;
		}
		interface tab_accountInsights extends DevKit.Controls.ITab {
			Section: tab_accountInsights_Sections;
		}
		interface tab_contactInsights extends DevKit.Controls.ITab {
			Section: tab_contactInsights_Sections;
		}
		interface tab_details_tab extends DevKit.Controls.ITab {
			Section: tab_details_tab_Sections;
		}
		interface tab_Lead_scores extends DevKit.Controls.ITab {
			Section: tab_Lead_scores_Sections;
		}
		interface tab_LinkedIn_Lead_Info extends DevKit.Controls.ITab {
			Section: tab_LinkedIn_Lead_Info_Sections;
		}
		interface tab_rtm_insights extends DevKit.Controls.ITab {
			Section: tab_rtm_insights_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface tab_tab_communication extends DevKit.Controls.ITab {
			Section: tab_tab_communication_Sections;
		}
		interface Tabs {
			accountInsights: tab_accountInsights;
			contactInsights: tab_contactInsights;
			details_tab: tab_details_tab;
			Lead_scores: tab_Lead_scores;
			LinkedIn_Lead_Info: tab_LinkedIn_Lead_Info;
			rtm_insights: tab_rtm_insights;
			Summary: tab_Summary;
			tab_communication: tab_tab_communication;
		}
		interface Body {
			Tab: Tabs;
			/** Type the city for the primary address. */
			Address1_City: DevKit.Controls.String;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Type the country or region for the primary address. */
			Address1_Country: DevKit.Controls.String;
			address1_line1: DevKit.Controls.ActionCards;
			/** Type the ZIP Code or postal code for the primary address. */
			Address1_PostalCode: DevKit.Controls.String;
			/** Type the state or province of the primary address. */
			Address1_StateOrProvince: DevKit.Controls.String;
			CadenceWidgetControl: DevKit.Controls.ActionCards;
			/** Choose the campaign that the lead was generated from to track the effectiveness of marketing campaigns and identify  communications received by the lead. */
			CampaignId: DevKit.Controls.Lookup;
			cc_1673878245253: DevKit.Controls.ActionCards;
			cc_1680511450308: DevKit.Controls.ActionCards;
			/** Type the name of the company associated with the lead. This becomes the account name when the lead is qualified and converted to a customer account. */
			CompanyName: DevKit.Controls.String;
			/** Type the name of the company associated with the lead. This becomes the account name when the lead is qualified and converted to a customer account. */
			CompanyName1: DevKit.Controls.String;
			ContactabilityGridControl: DevKit.Controls.ActionCards;
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
			/** Type the primary email address for the lead. */
			EMailAddress11: DevKit.Controls.String;
			/** Type the primary email address for the lead. */
			EMailAddress12: DevKit.Controls.String;
			/** Type the primary email address for the lead. */
			EMailAddress13: DevKit.Controls.String;
			/** Type the first name of the primary contact for the lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName: DevKit.Controls.String;
			/** Type the first name of the primary contact for the lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			FirstName1: DevKit.Controls.String;
			/** Combines and shows the lead's first and last names so the full name can be displayed in views and reports. */
			FullName: DevKit.Controls.String;
			/** Select the primary industry in which the lead's business is focused, for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Controls.OptionSet;
			/** Select the primary industry in which the lead's business is focused, for use in marketing segmentation and demographic analysis. */
			IndustryCode1: DevKit.Controls.OptionSet;
			/** Type the job title of the primary contact for this lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Type the job title of the primary contact for this lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle1: DevKit.Controls.String;
			/** Type the last name of the primary contact for the lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName: DevKit.Controls.String;
			/** Type the last name of the primary contact for the lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			LastName1: DevKit.Controls.String;
			/** Shows the date when the lead was last included in a marketing campaign or quick campaign. */
			LastUsedInCampaign: DevKit.Controls.Date;
			LeadAccountInsightsCtrl: DevKit.Controls.ActionCards;
			LeadContactInsightsCtrl: DevKit.Controls.ActionCards;
			/** Select the primary marketing source that prompted the lead to contact you. */
			LeadSourceCode: DevKit.Controls.OptionSet;
			mapcontrol: DevKit.Controls.Map;
			/** Type the mobile phone number for the primary contact for the lead. */
			MobilePhone: DevKit.Controls.String;
			/** Type the mobile phone number for the primary contact for the lead. */
			MobilePhone1: DevKit.Controls.String;
			/** Whether the Opportunity created when qualifying this Lead is for an Item- based or a Work-based sale */
			msdyn_ordertype: DevKit.Controls.OptionSet;
			/** Enter the size of the company the lead belongs to */
			msdyncrm_companysize: DevKit.Controls.String;
			msdyncrm_customerjourneyid: DevKit.Controls.Lookup;
			/** Enter the highest education level achieved */
			msdyncrm_degree: DevKit.Controls.String;
			msdyncrm_emailid: DevKit.Controls.Lookup;
			/** Enter the lead's field of study */
			msdyncrm_fieldofstudy: DevKit.Controls.String;
			/** Enter the lead's graduation date from the last school or university */
			msdyncrm_graduationdate: DevKit.Controls.String;
			/** Enter the lead's job function */
			msdyncrm_jobfunction: DevKit.Controls.String;
			msdyncrm_LinkedInCampaign: DevKit.Controls.Lookup;
			/** Number of submissions by this lead */
			msdyncrm_linkedinsubmissioncount: DevKit.Controls.Integer;
			msdyncrm_marketingformid: DevKit.Controls.Lookup;
			msdyncrm_marketingpageid: DevKit.Controls.Lookup;
			msdyncrm_PurchaseNeed: DevKit.Controls.Boolean;
			msdyncrm_Recycled: DevKit.Controls.Boolean;
			msdyncrm_SalesAccepted: DevKit.Controls.Boolean;
			msdyncrm_SalesReady: DevKit.Controls.Boolean;
			/** Enter the last school or university attended */
			msdyncrm_school: DevKit.Controls.String;
			/** Enter the lead's seniority in their organization */
			msdyncrm_seniority: DevKit.Controls.String;
			/** LinkedIn form this lead came from */
			msdyncrm_sourceform: DevKit.Controls.Lookup;
			/** Enter the start date for the last school or university */
			msdyncrm_startdate: DevKit.Controls.String;
			msdyncrm_TeleProspectAccepted: DevKit.Controls.Boolean;
			msdyncrm_TeleProspectReady: DevKit.Controls.Boolean;
			msdyncrm_TriggerRecycle: DevKit.Controls.Boolean;
			msdynmkt_customerjourneyid: DevKit.Controls.Lookup;
			msdynmkt_emailid: DevKit.Controls.Lookup;
			msdynmkt_marketingformid: DevKit.Controls.Lookup;
			/** For leads created by registering for an event in Microsoft Dynamics 365, this identifies the relevant event. This is used to relate the lead to the data on the originating event. */
			msevtmgt_originatingeventid: DevKit.Controls.Lookup;
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
			/** Type the work phone number for the primary contact for the lead. */
			Telephone11: DevKit.Controls.String;
			/** Type the work phone number for the primary contact for the lead. */
			Telephone12: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Type the website URL for the company associated with this lead. */
			WebSiteUrl: DevKit.Controls.String;
		}
		interface Navigation {
			account_originating_lead: DevKit.Controls.NavigationItem,
			contact_originating_lead: DevKit.Controls.NavigationItem,
			lead_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			lead_adx_portalcomments: DevKit.Controls.NavigationItem,
			Lead_Appointments: DevKit.Controls.NavigationItem,
			lead_BulkOperations: DevKit.Controls.NavigationItem,
			lead_CampaignResponses: DevKit.Controls.NavigationItem,
			Lead_Email_EmailSender: DevKit.Controls.NavigationItem,
			Lead_Emails: DevKit.Controls.NavigationItem,
			lead_IncidentResolutions: DevKit.Controls.NavigationItem,
			lead_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			lead_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			lead_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			lead_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			lead_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			lead_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			lead_msfp_alerts: DevKit.Controls.NavigationItem,
			lead_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			lead_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			lead_OpportunityCloses: DevKit.Controls.NavigationItem,
			lead_OrderCloses: DevKit.Controls.NavigationItem,
			Lead_Phonecalls: DevKit.Controls.NavigationItem,
			lead_Posts: DevKit.Controls.NavigationItem,
			lead_QuoteCloses: DevKit.Controls.NavigationItem,
			Lead_ServiceAppointments: DevKit.Controls.NavigationItem,
			Lead_Tasks: DevKit.Controls.NavigationItem,
			lk_leadtoopportunitysalesprocess_leadid: DevKit.Controls.NavigationItem,
			msdyn_lead_dailyleadkpiitem_entityid: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_duplicatedetectionpluginrun_baserecordid: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_duplicateleadmapping: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_duplicateleadmapping_BaseLeadRecord: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_leadkpiitem_leadid: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_mostcontacted_regardingObjectId: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_mostcontactedby_regardingObjectId: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_salesroutingrun_targetobject: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_timespent_leadlookup: DevKit.Controls.NavigationItem,
			msdyn_linkeditemvalidity_polymorphic_leadid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_lead_msdyn_targetentityid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_taggedrecord_lead_msdyn_dynamicsrecordid: DevKit.Controls.NavigationItem,
			msdyn_playbookinstance_lead: DevKit.Controls.NavigationItem,
			msdyn_sabackupdiagnostic_lead_msdyn_target: DevKit.Controls.NavigationItem,
			msdyn_salesroutingdiagnostic_lead_msdyn_target: DevKit.Controls.NavigationItem,
			msdyn_sequencetarget_lead_msdyn_target: DevKit.Controls.NavigationItem,
			msdyncrm_lead_marketingformsubmission_matched: DevKit.Controls.NavigationItem,
			msdyncrm_lead_msdyncrm_geopin: DevKit.Controls.NavigationItem,
			msdyncrm_lead_msdyncrm_leadscore: DevKit.Controls.NavigationItem,
			msdyncrm_lead_msdyncrm_leadscore_v2: DevKit.Controls.NavigationItem,
			msdyncrm_lead_msdyncrm_leadtoopportunity: DevKit.Controls.NavigationItem,
			msdyncrm_lead_msdyncrm_linkedinformsubmission_Lead: DevKit.Controls.NavigationItem,
			opportunity_originating_lead: DevKit.Controls.NavigationItem,
			SourceLead_BulkOperationLogs: DevKit.Controls.NavigationItem
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
		interface ProcessLead_to_opportunity_marketing_sales_process {
			/** Value of the Budget Amount in base currency. */
			BudgetAmount_Base: DevKit.Controls.Money;
			/** Type additional information to describe the lead, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Select whether the lead accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the lead can be added to marketing lists, but will be excluded from the email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			msdyncrm_PurchaseNeed: DevKit.Controls.Boolean;
			msdyncrm_SalesAccepted: DevKit.Controls.Boolean;
			msdyncrm_SalesReady: DevKit.Controls.Boolean;
			msdyncrm_SalesReady_1: DevKit.Controls.Boolean;
			msdyncrm_TeleProspectAccepted: DevKit.Controls.Boolean;
			msdyncrm_TeleProspectReady: DevKit.Controls.Boolean;
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
			Lead_to_opportunity_marketing_sales_process: ProcessLead_to_opportunity_marketing_sales_process;
		}
		interface Grid {
			Competitors: DevKit.Controls.Grid;
			FormSubmissions: DevKit.Controls.Grid;
			Lead_Scores_Subgrid: DevKit.Controls.Grid;
			Leadscores: DevKit.Controls.Grid;
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
		interface tab_RAV2_Sections {
			RAV2_section_1: DevKit.Controls.Section;
		}
		interface tab_RELATIONSHIP_ANALYTICS_TAB_Sections {
			Activity_Analysis_section_2: DevKit.Controls.Section;
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
			Summary_section_7: DevKit.Controls.Section;
			WKW_Section: DevKit.Controls.Section;
		}
		interface tab_details_tab extends DevKit.Controls.ITab {
			Section: tab_details_tab_Sections;
		}
		interface tab_RAV2 extends DevKit.Controls.ITab {
			Section: tab_RAV2_Sections;
		}
		interface tab_RELATIONSHIP_ANALYTICS_TAB extends DevKit.Controls.ITab {
			Section: tab_RELATIONSHIP_ANALYTICS_TAB_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			details_tab: tab_details_tab;
			RAV2: tab_RAV2;
			RELATIONSHIP_ANALYTICS_TAB: tab_RELATIONSHIP_ANALYTICS_TAB;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			ActionCards: DevKit.Controls.ActionCards;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			CadenceWidgetControl: DevKit.Controls.ActionCards;
			cc_1612864425766: DevKit.Controls.ActionCards;
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
			/** Type the primary email address for the lead. */
			EMailAddress11: DevKit.Controls.String;
			/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the lead. */
			FollowEmail: DevKit.Controls.Boolean;
			/** Combines and shows the lead's first and last names so the full name can be displayed in views and reports. */
			FullName: DevKit.Controls.String;
			Healthwidget: DevKit.Controls.ActionCards;
			/** Select the primary industry in which the lead's business is focused, for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Controls.OptionSet;
			/** Type the job title of the primary contact for this lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			JobTitle: DevKit.Controls.String;
			/** Shows the date when the lead was last included in a marketing campaign or quick campaign. */
			LastUsedInCampaign: DevKit.Controls.Date;
			mapcontrol: DevKit.Controls.Map;
			/** Type the mobile phone number for the primary contact for the lead. */
			MobilePhone: DevKit.Controls.String;
			/** Type the mobile phone number for the primary contact for the lead. */
			MobilePhone1: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Type the number of employees that work at the company associated with the lead, for use in marketing segmentation and demographic analysis. */
			NumberOfEmployees: DevKit.Controls.Integer;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Controls.OptionSet;
			/** Type the annual revenue of the company associated with the lead to provide an understanding of the prospect's business. */
			Revenue: DevKit.Controls.Money;
			RICONTAINER_CHARTS: DevKit.Controls.ActionCards;
			/** Type the Standard Industrial Classification (SIC) code that indicates the lead's primary industry of business for use in marketing segmentation and demographic analysis. */
			SIC: DevKit.Controls.String;
			/** Type a subject or descriptive name, such as the expected order, company name, or marketing source list, to identify the lead. */
			Subject: DevKit.Controls.String;
			/** Type the work phone number for the primary contact for the lead. */
			Telephone1: DevKit.Controls.String;
			/** Type the work phone number for the primary contact for the lead. */
			Telephone11: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Type the website URL for the company associated with this lead. */
			WebSiteUrl: DevKit.Controls.String;
		}
		interface Navigation {
			account_originating_lead: DevKit.Controls.NavigationItem,
			contact_originating_lead: DevKit.Controls.NavigationItem,
			lead_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			lead_adx_portalcomments: DevKit.Controls.NavigationItem,
			Lead_Appointments: DevKit.Controls.NavigationItem,
			lead_BulkOperations: DevKit.Controls.NavigationItem,
			lead_CampaignResponses: DevKit.Controls.NavigationItem,
			Lead_Email_EmailSender: DevKit.Controls.NavigationItem,
			Lead_Emails: DevKit.Controls.NavigationItem,
			lead_IncidentResolutions: DevKit.Controls.NavigationItem,
			lead_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			lead_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			lead_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			lead_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			lead_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			lead_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			lead_msfp_alerts: DevKit.Controls.NavigationItem,
			lead_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			lead_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			lead_OpportunityCloses: DevKit.Controls.NavigationItem,
			lead_OrderCloses: DevKit.Controls.NavigationItem,
			Lead_Phonecalls: DevKit.Controls.NavigationItem,
			lead_Posts: DevKit.Controls.NavigationItem,
			lead_QuoteCloses: DevKit.Controls.NavigationItem,
			Lead_ServiceAppointments: DevKit.Controls.NavigationItem,
			Lead_Tasks: DevKit.Controls.NavigationItem,
			lk_leadtoopportunitysalesprocess_leadid: DevKit.Controls.NavigationItem,
			msdyn_lead_dailyleadkpiitem_entityid: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_duplicatedetectionpluginrun_baserecordid: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_duplicateleadmapping: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_duplicateleadmapping_BaseLeadRecord: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_leadkpiitem_leadid: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_mostcontacted_regardingObjectId: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_mostcontactedby_regardingObjectId: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_salesroutingrun_targetobject: DevKit.Controls.NavigationItem,
			msdyn_lead_msdyn_timespent_leadlookup: DevKit.Controls.NavigationItem,
			msdyn_linkeditemvalidity_polymorphic_leadid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_lead_msdyn_targetentityid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_taggedrecord_lead_msdyn_dynamicsrecordid: DevKit.Controls.NavigationItem,
			msdyn_playbookinstance_lead: DevKit.Controls.NavigationItem,
			msdyn_sabackupdiagnostic_lead_msdyn_target: DevKit.Controls.NavigationItem,
			msdyn_salesroutingdiagnostic_lead_msdyn_target: DevKit.Controls.NavigationItem,
			msdyn_sequencetarget_lead_msdyn_target: DevKit.Controls.NavigationItem,
			msdyncrm_lead_marketingformsubmission_matched: DevKit.Controls.NavigationItem,
			msdyncrm_lead_msdyncrm_geopin: DevKit.Controls.NavigationItem,
			msdyncrm_lead_msdyncrm_leadscore: DevKit.Controls.NavigationItem,
			msdyncrm_lead_msdyncrm_leadscore_v2: DevKit.Controls.NavigationItem,
			msdyncrm_lead_msdyncrm_leadtoopportunity: DevKit.Controls.NavigationItem,
			msdyncrm_lead_msdyncrm_linkedinformsubmission_Lead: DevKit.Controls.NavigationItem,
			opportunity_originating_lead: DevKit.Controls.NavigationItem,
			SourceLead_BulkOperationLogs: DevKit.Controls.NavigationItem
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
		interface ProcessLead_to_opportunity_marketing_sales_process {
			/** Value of the Budget Amount in base currency. */
			BudgetAmount_Base: DevKit.Controls.Money;
			/** Type additional information to describe the lead, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Select whether the lead accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the lead can be added to marketing lists, but will be excluded from the email. */
			DoNotBulkEMail: DevKit.Controls.Boolean;
			msdyncrm_PurchaseNeed: DevKit.Controls.Boolean;
			msdyncrm_SalesAccepted: DevKit.Controls.Boolean;
			msdyncrm_SalesReady: DevKit.Controls.Boolean;
			msdyncrm_SalesReady_1: DevKit.Controls.Boolean;
			msdyncrm_TeleProspectAccepted: DevKit.Controls.Boolean;
			msdyncrm_TeleProspectReady: DevKit.Controls.Boolean;
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
			Lead_to_opportunity_marketing_sales_process: ProcessLead_to_opportunity_marketing_sales_process;
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
		/** Unique identifier of the account with which the lead is associated. */
		readonly AccountId: string;
		/** Unique identifier for address 1. */
		Address1_AddressId: string;
		/** Select the primary address type. */
		Address1_AddressTypeCode: OptionSet.Lead.Address1_AddressTypeCode;
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
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: OptionSet.Lead.Address1_ShippingMethodCode;
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
		Address2_AddressTypeCode: OptionSet.Lead.Address2_AddressTypeCode;
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
		/** Select a shipping method for deliveries sent to this address. */
		Address2_ShippingMethodCode: OptionSet.Lead.Address2_ShippingMethodCode;
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
		/** Information about the budget amount of the lead's company or organization. */
		BudgetAmount: number;
		/** Value of the Budget Amount in base currency. */
		readonly BudgetAmount_Base: number;
		/** Information about the budget status of the lead's company or organization. */
		BudgetStatus: OptionSet.Lead.BudgetStatus;
		/** Stores Image of the Business Card */
		BusinessCard: string;
		/** Stores Business Card Control Properties. */
		BusinessCardAttributes: string;
		/** Choose the campaign that the lead was generated from to track the effectiveness of marketing campaigns and identify  communications received by the lead. */
		CampaignId: string;
		/** Type the name of the company associated with the lead. This becomes the account name when the lead is qualified and converted to a customer account. */
		CompanyName: string;
		/** Select whether the lead confirmed interest in your offerings. This helps in determining the lead quality. */
		ConfirmInterest: boolean;
		/** Unique identifier of the contact with which the lead is associated. */
		readonly ContactId: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
		customerid_account: string;
		/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
		customerid_contact: string;
		/** Select whether your notes include information about who makes the purchase decisions at the lead's company. */
		DecisionMaker: boolean;
		/** Type additional information to describe the lead, such as an excerpt from the company's website. */
		Description: string;
		/** Select whether the lead accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the lead can be added to marketing lists, but will be excluded from the email. */
		DoNotBulkEMail: boolean;
		/** Select whether the lead allows direct email sent from Microsoft Dynamics 365. */
		DoNotEMail: boolean;
		/** Select whether the lead allows faxes. */
		DoNotFax: boolean;
		/** Select whether the lead allows phone calls. */
		DoNotPhone: boolean;
		/** Select whether the lead allows direct mail. */
		DoNotPostalMail: boolean;
		/** Select whether the lead accepts marketing materials, such as brochures or catalogs. Leads that opt out can be excluded from marketing initiatives. */
		DoNotSendMM: boolean;
		/** Type the primary email address for the lead. */
		EMailAddress1: string;
		/** Type the secondary email address for the lead. */
		EMailAddress2: string;
		/** Type a third email address for the lead. */
		EMailAddress3: string;
		/** Shows the default image for the record. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Type the estimated revenue value that this lead will generate to assist in sales forecasting and planning. */
		EstimatedAmount: number;
		/** Value of the Est. Value in base currency. */
		readonly EstimatedAmount_Base: number;
		/** Enter the expected close date for the lead, so that the sales team can schedule timely follow-up meetings to move the prospect to the next sales stage. */
		EstimatedCloseDate_DateOnly: Date;
		/** Type a numeric value of the lead's estimated value, such as a product quantity, if no revenue amount can be specified in the Est. Value field. This can be used for sales forecasting and planning. */
		EstimatedValue: number;
		/** Select whether the fit between the lead's requirements and your offerings was evaluated. */
		EvaluateFit: boolean;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Type the fax number for the primary contact for the lead. */
		Fax: string;
		/** Type the first name of the primary contact for the lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
		FirstName: string;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the lead. */
		FollowEmail: boolean;
		/** Combines and shows the lead's first and last names so the full name can be displayed in views and reports. */
		readonly FullName: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Select the primary industry in which the lead's business is focused, for use in marketing segmentation and demographic analysis. */
		IndustryCode: OptionSet.Lead.IndustryCode;
		/** Choose whether someone from the sales team contacted this lead earlier. */
		InitialCommunication: OptionSet.Lead.InitialCommunication;
		/** Information about whether the contact was auto-created when promoting an email or an appointment. */
		readonly IsAutoCreate: boolean;
		/** Indicates whether the lead is private or visible to the entire organization. */
		readonly IsPrivate: boolean;
		/** Type the job title of the primary contact for this lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
		JobTitle: string;
		/** Type the last name of the primary contact for the lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
		LastName: string;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Shows the date when the lead was last included in a marketing campaign or quick campaign. */
		LastUsedInCampaign_UtcDateOnly: Date;
		/** Unique identifier of the lead. */
		LeadId: string;
		/** Select a rating value to indicate the lead's potential to become a customer. */
		LeadQualityCode: OptionSet.Lead.LeadQualityCode;
		/** Select the primary marketing source that prompted the lead to contact you. */
		LeadSourceCode: OptionSet.Lead.LeadSourceCode;
		/** Unique identifier of the master lead for merge. */
		readonly MasterId: string;
		/** Tells whether the lead has been merged with another lead. */
		readonly Merged: boolean;
		/** Type the middle name or initial of the primary contact for the lead to make sure the prospect is addressed correctly. */
		MiddleName: string;
		/** Type the mobile phone number for the primary contact for the lead. */
		MobilePhone: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Describes whether lead is opted out or not */
		msdyn_gdproptout: boolean;
		msdyn_LeadGrade: OptionSet.Lead.msdyn_LeadGrade;
		/** LeadKPIId */
		msdyn_leadkpiid: string;
		msdyn_LeadScore: number;
		msdyn_LeadScoreTrend: OptionSet.Lead.msdyn_LeadScoreTrend;
		/** Whether the Opportunity created when qualifying this Lead is for an Item- based or a Work-based sale */
		msdyn_ordertype: OptionSet.Lead.msdyn_ordertype;
		/** Predictive score */
		msdyn_PredictiveScoreId: string;
		/** Result of the assignment rule process */
		msdyn_salesassignmentresult: OptionSet.Lead.msdyn_salesassignmentresult;
		msdyn_ScoreHistory: string;
		msdyn_ScoreReasons: string;
		/** Unique identifier for Segment associated with Lead. */
		msdyn_segmentid: string;
		msdyncrm_code: string;
		/** Enter the size of the company the lead belongs to */
		msdyncrm_companysize: string;
		msdyncrm_Contactid: string;
		msdyncrm_customerjourneyid: string;
		/** Enter the highest education level achieved */
		msdyncrm_degree: string;
		msdyncrm_emailid: string;
		/** Enter the lead's field of study */
		msdyncrm_fieldofstudy: string;
		/** Enter the lead's graduation date from the last school or university */
		msdyncrm_graduationdate: string;
		/** Enter the industry the lead belongs to */
		msdyncrm_industry: string;
		msdyncrm_insights_placeholder: string;
		/** Enter the lead's job function */
		msdyncrm_jobfunction: string;
		msdyncrm_latestsubmissiondate_UtcDateAndTime: Date;
		msdyncrm_Leadid: string;
		msdyncrm_leadsourcetype: OptionSet.Lead.msdyncrm_leadsourcetype;
		msdyncrm_LinkedInCampaign: string;
		/** Number of submissions by this lead */
		readonly msdyncrm_linkedinsubmissioncount: number;
		/** Last Updated time of rollup field LinkedIn Form Submissions. */
		readonly msdyncrm_linkedinsubmissioncount_Date_UtcDateAndTime: Date;
		/** State of rollup field LinkedIn Form Submissions. */
		readonly msdyncrm_linkedinsubmissioncount_State: number;
		msdyncrm_marketingformid: string;
		msdyncrm_marketingformsubmissiondateprecise: string;
		msdyncrm_marketingpageid: string;
		msdyncrm_Profileid: string;
		msdyncrm_PurchaseNeed: boolean;
		msdyncrm_Recycled: boolean;
		msdyncrm_SalesAccepted: boolean;
		msdyncrm_SalesReady: boolean;
		msdyncrm_sasToken: string;
		/** Enter the last school or university attended */
		msdyncrm_school: string;
		msdyncrm_scores: number;
		msdyncrm_scoringgrade: string;
		/** Enter the lead's seniority in their organization */
		msdyncrm_seniority: string;
		/** LinkedIn form this lead came from */
		msdyncrm_sourceform: string;
		/** Enter the start date for the last school or university */
		msdyncrm_startdate: string;
		msdyncrm_TeleProspectAccepted: boolean;
		msdyncrm_TeleProspectReady: boolean;
		msdyncrm_TriggerRecycle: boolean;
		msdynmkt_customerjourneyid: string;
		msdynmkt_emailid: string;
		msdynmkt_issalesreadysetmanually: boolean;
		/** The Journey action id in which the lead is created. */
		msdynmkt_JourneyActionId: string;
		msdynmkt_marketingformid: string;
		/** For leads created by registering for an event in Microsoft Dynamics 365, this identifies the relevant event. This is used to relate the lead to the data on the originating event. */
		msevtmgt_originatingeventid: string;
		/** Choose how high the level of need is for the lead's company. */
		Need: OptionSet.Lead.Need;
		/** Type the number of employees that work at the company associated with the lead, for use in marketing segmentation and demographic analysis. */
		NumberOfEmployees: number;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** This attribute is used for Sample Service Business Processes. */
		OriginatingCaseId: string;
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
		/** Type the pager number for the primary contact for the lead. */
		Pager: string;
		/** Choose an account to connect this lead to, so that the relationship is visible in reports and analytics. */
		ParentAccountId: string;
		/** Choose a contact to connect this lead to, so that the relationship is visible in reports and analytics. */
		ParentContactId: string;
		/** Shows whether the lead participates in workflow rules. */
		ParticipatesInWorkflow: boolean;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: OptionSet.Lead.PreferredContactMethodCode;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.Lead.PriorityCode;
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
		PurchaseProcess: OptionSet.Lead.PurchaseProcess;
		/** Choose how long the lead will likely take to make the purchase, so the sales team will be aware. */
		PurchaseTimeFrame: OptionSet.Lead.PurchaseTimeFrame;
		/** Type comments about the qualification or scoring of the lead. */
		QualificationComments: string;
		/** Choose the opportunity that the lead was qualified on and then converted to. */
		QualifyingOpportunityId: string;
		/** Related Campaign Response. */
		RelatedObjectId: string;
		/** Type the annual revenue of the company associated with the lead to provide an understanding of the prospect's business. */
		Revenue: number;
		/** Value of the Annual Revenue in base currency. */
		readonly Revenue_Base: number;
		/** Select the sales stage of this lead to aid the sales team in their efforts to convert this lead to an opportunity. */
		SalesStage: OptionSet.Lead.SalesStage;
		/** Select the sales process stage for the lead to help determine the probability of the lead converting to an opportunity. */
		SalesStageCode: OptionSet.Lead.SalesStageCode;
		/** Type the salutation of the primary contact for this lead to make sure the prospect is addressed correctly in sales calls, email messages, and marketing campaigns. */
		Salutation: string;
		/** Enter the date and time of the prospecting follow-up meeting with the lead. */
		ScheduleFollowUp_Prospect_UtcDateOnly: Date;
		/** Enter the date and time of the qualifying follow-up meeting with the lead. */
		ScheduleFollowUp_Qualify_UtcDateOnly: Date;
		/** Type the Standard Industrial Classification (SIC) code that indicates the lead's primary industry of business for use in marketing segmentation and demographic analysis. */
		SIC: string;
		/** Choose the service level agreement (SLA) that you want to apply to the Lead record. */
		SLAId: string;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Shows whether the lead is open, qualified, or disqualified. Qualified and disqualified leads are read-only and can't be edited unless they are reactivated. */
		StateCode: OptionSet.Lead.StateCode;
		/** Select the lead's status. */
		StatusCode: OptionSet.Lead.StatusCode;
		/** Type a subject or descriptive name, such as the expected order, company name, or marketing source list, to identify the lead. */
		Subject: string;
		/** Number of users or conversations followed the record */
		TeamsFollowed: number;
		/** Type the work phone number for the primary contact for the lead. */
		Telephone1: string;
		/** Type the home phone number for the primary contact for the lead. */
		Telephone2: string;
		/** Type an alternate phone number for the primary contact for the lead. */
		Telephone3: string;
		/** Total time spent for emails (read and write) and meetings by me in relation to the lead record. */
		readonly TimeSpentByMeOnEmailAndMeetings: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Type the website URL for the company associated with this lead. */
		WebSiteUrl: string;
		/** Type the phonetic spelling of the lead's company name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the prospect. */
		YomiCompanyName: string;
		/** Type the phonetic spelling of the lead's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the prospect. */
		YomiFirstName: string;
		/** Combines and shows the lead's Yomi first and last names so the full phonetic name can be displayed in views and reports. */
		readonly YomiFullName: string;
		/** Type the phonetic spelling of the lead's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the prospect. */
		YomiLastName: string;
		/** Type the phonetic spelling of the lead's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the prospect. */
		YomiMiddleName: string;
		readonly FormattedValue: {
			/** Unique identifier of the account with which the lead is associated. */
			readonly AccountId: string;
			/** Unique identifier for address 1. */
			readonly Address1_AddressId: string;
			/** Select the primary address type. */
			readonly Address1_AddressTypeCode: string;
			/** Type the city for the primary address. */
			readonly Address1_City: string;
			/** Shows the complete primary address. */
			readonly Address1_Composite: string;
			/** Type the country or region for the primary address. */
			readonly Address1_Country: string;
			/** Type the county for the primary address. */
			readonly Address1_County: string;
			/** Type the fax number associated with the primary address. */
			readonly Address1_Fax: string;
			/** Type the latitude value for the primary address for use in mapping and other applications. */
			readonly Address1_Latitude: string;
			/** Type the first line of the primary address. */
			readonly Address1_Line1: string;
			/** Type the second line of the primary address. */
			readonly Address1_Line2: string;
			/** Type the third line of the primary address. */
			readonly Address1_Line3: string;
			/** Type the longitude value for the primary address for use in mapping and other applications. */
			readonly Address1_Longitude: string;
			/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
			readonly Address1_Name: string;
			/** Type the ZIP Code or postal code for the primary address. */
			readonly Address1_PostalCode: string;
			/** Type the post office box number of the primary address. */
			readonly Address1_PostOfficeBox: string;
			/** Select a shipping method for deliveries sent to this address. */
			readonly Address1_ShippingMethodCode: string;
			/** Type the state or province of the primary address. */
			readonly Address1_StateOrProvince: string;
			/** Type the main phone number associated with the primary address. */
			readonly Address1_Telephone1: string;
			/** Type a second phone number associated with the primary address. */
			readonly Address1_Telephone2: string;
			/** Type a third phone number associated with the primary address. */
			readonly Address1_Telephone3: string;
			/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
			readonly Address1_UPSZone: string;
			/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
			readonly Address1_UTCOffset: string;
			/** Unique identifier for address 2. */
			readonly Address2_AddressId: string;
			/** Select the secondary address type. */
			readonly Address2_AddressTypeCode: string;
			/** Type the city for the secondary address. */
			readonly Address2_City: string;
			/** Shows the complete secondary address. */
			readonly Address2_Composite: string;
			/** Type the country or region for the secondary address. */
			readonly Address2_Country: string;
			/** Type the county for the secondary address. */
			readonly Address2_County: string;
			/** Type the fax number associated with the secondary address. */
			readonly Address2_Fax: string;
			/** Type the latitude value for the secondary address for use in mapping and other applications. */
			readonly Address2_Latitude: string;
			/** Type the first line of the secondary address. */
			readonly Address2_Line1: string;
			/** Type the second line of the secondary address. */
			readonly Address2_Line2: string;
			/** Type the third line of the secondary address. */
			readonly Address2_Line3: string;
			/** Type the longitude value for the secondary address for use in mapping and other applications. */
			readonly Address2_Longitude: string;
			/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
			readonly Address2_Name: string;
			/** Type the ZIP Code or postal code for the secondary address. */
			readonly Address2_PostalCode: string;
			/** Type the post office box number of the secondary address. */
			readonly Address2_PostOfficeBox: string;
			/** Select a shipping method for deliveries sent to this address. */
			readonly Address2_ShippingMethodCode: string;
			/** Type the state or province of the secondary address. */
			readonly Address2_StateOrProvince: string;
			/** Type the main phone number associated with the secondary address. */
			readonly Address2_Telephone1: string;
			/** Type a second phone number associated with the secondary address. */
			readonly Address2_Telephone2: string;
			/** Type a third phone number associated with the secondary address. */
			readonly Address2_Telephone3: string;
			/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
			readonly Address2_UPSZone: string;
			/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
			readonly Address2_UTCOffset: string;
			/** Information about the budget amount of the lead's company or organization. */
			readonly BudgetAmount: string;
			/** Value of the Budget Amount in base currency. */
			readonly BudgetAmount_Base: string;
			/** Information about the budget status of the lead's company or organization. */
			readonly BudgetStatus: string;
			/** Stores Image of the Business Card */
			readonly BusinessCard: string;
			/** Stores Business Card Control Properties. */
			readonly BusinessCardAttributes: string;
			/** Choose the campaign that the lead was generated from to track the effectiveness of marketing campaigns and identify  communications received by the lead. */
			readonly CampaignId: string;
			/** Type the name of the company associated with the lead. This becomes the account name when the lead is qualified and converted to a customer account. */
			readonly CompanyName: string;
			/** Select whether the lead confirmed interest in your offerings. This helps in determining the lead quality. */
			readonly ConfirmInterest: string;
			/** Unique identifier of the contact with which the lead is associated. */
			readonly ContactId: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			readonly customerid_account: string;
			/** Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities. */
			readonly customerid_contact: string;
			/** Select whether your notes include information about who makes the purchase decisions at the lead's company. */
			readonly DecisionMaker: string;
			/** Type additional information to describe the lead, such as an excerpt from the company's website. */
			readonly Description: string;
			/** Select whether the lead accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the lead can be added to marketing lists, but will be excluded from the email. */
			readonly DoNotBulkEMail: string;
			/** Select whether the lead allows direct email sent from Microsoft Dynamics 365. */
			readonly DoNotEMail: string;
			/** Select whether the lead allows faxes. */
			readonly DoNotFax: string;
			/** Select whether the lead allows phone calls. */
			readonly DoNotPhone: string;
			/** Select whether the lead allows direct mail. */
			readonly DoNotPostalMail: string;
			/** Select whether the lead accepts marketing materials, such as brochures or catalogs. Leads that opt out can be excluded from marketing initiatives. */
			readonly DoNotSendMM: string;
			/** Type the primary email address for the lead. */
			readonly EMailAddress1: string;
			/** Type the secondary email address for the lead. */
			readonly EMailAddress2: string;
			/** Type a third email address for the lead. */
			readonly EMailAddress3: string;
			/** Shows the default image for the record. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Type the estimated revenue value that this lead will generate to assist in sales forecasting and planning. */
			readonly EstimatedAmount: string;
			/** Value of the Est. Value in base currency. */
			readonly EstimatedAmount_Base: string;
			/** Enter the expected close date for the lead, so that the sales team can schedule timely follow-up meetings to move the prospect to the next sales stage. */
			readonly EstimatedCloseDate_DateOnly: string;
			/** Type a numeric value of the lead's estimated value, such as a product quantity, if no revenue amount can be specified in the Est. Value field. This can be used for sales forecasting and planning. */
			readonly EstimatedValue: string;
			/** Select whether the fit between the lead's requirements and your offerings was evaluated. */
			readonly EvaluateFit: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Type the fax number for the primary contact for the lead. */
			readonly Fax: string;
			/** Type the first name of the primary contact for the lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			readonly FirstName: string;
			/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the lead. */
			readonly FollowEmail: string;
			/** Combines and shows the lead's first and last names so the full name can be displayed in views and reports. */
			readonly FullName: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Select the primary industry in which the lead's business is focused, for use in marketing segmentation and demographic analysis. */
			readonly IndustryCode: string;
			/** Choose whether someone from the sales team contacted this lead earlier. */
			readonly InitialCommunication: string;
			/** Information about whether the contact was auto-created when promoting an email or an appointment. */
			readonly IsAutoCreate: string;
			/** Indicates whether the lead is private or visible to the entire organization. */
			readonly IsPrivate: string;
			/** Type the job title of the primary contact for this lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			readonly JobTitle: string;
			/** Type the last name of the primary contact for the lead to make sure the prospect is addressed correctly in sales calls, email, and marketing campaigns. */
			readonly LastName: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Shows the date when the lead was last included in a marketing campaign or quick campaign. */
			readonly LastUsedInCampaign_UtcDateOnly: string;
			/** Unique identifier of the lead. */
			readonly LeadId: string;
			/** Select a rating value to indicate the lead's potential to become a customer. */
			readonly LeadQualityCode: string;
			/** Select the primary marketing source that prompted the lead to contact you. */
			readonly LeadSourceCode: string;
			/** Unique identifier of the master lead for merge. */
			readonly MasterId: string;
			/** Tells whether the lead has been merged with another lead. */
			readonly Merged: string;
			/** Type the middle name or initial of the primary contact for the lead to make sure the prospect is addressed correctly. */
			readonly MiddleName: string;
			/** Type the mobile phone number for the primary contact for the lead. */
			readonly MobilePhone: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Describes whether lead is opted out or not */
			readonly msdyn_gdproptout: string;
			readonly msdyn_LeadGrade: string;
			/** LeadKPIId */
			readonly msdyn_leadkpiid: string;
			readonly msdyn_LeadScore: string;
			readonly msdyn_LeadScoreTrend: string;
			/** Whether the Opportunity created when qualifying this Lead is for an Item- based or a Work-based sale */
			readonly msdyn_ordertype: string;
			/** Predictive score */
			readonly msdyn_PredictiveScoreId: string;
			/** Result of the assignment rule process */
			readonly msdyn_salesassignmentresult: string;
			readonly msdyn_ScoreHistory: string;
			readonly msdyn_ScoreReasons: string;
			/** Unique identifier for Segment associated with Lead. */
			readonly msdyn_segmentid: string;
			readonly msdyncrm_code: string;
			/** Enter the size of the company the lead belongs to */
			readonly msdyncrm_companysize: string;
			readonly msdyncrm_Contactid: string;
			readonly msdyncrm_customerjourneyid: string;
			/** Enter the highest education level achieved */
			readonly msdyncrm_degree: string;
			readonly msdyncrm_emailid: string;
			/** Enter the lead's field of study */
			readonly msdyncrm_fieldofstudy: string;
			/** Enter the lead's graduation date from the last school or university */
			readonly msdyncrm_graduationdate: string;
			/** Enter the industry the lead belongs to */
			readonly msdyncrm_industry: string;
			readonly msdyncrm_insights_placeholder: string;
			/** Enter the lead's job function */
			readonly msdyncrm_jobfunction: string;
			readonly msdyncrm_latestsubmissiondate_UtcDateAndTime: string;
			readonly msdyncrm_Leadid: string;
			readonly msdyncrm_leadsourcetype: string;
			readonly msdyncrm_LinkedInCampaign: string;
			/** Number of submissions by this lead */
			readonly msdyncrm_linkedinsubmissioncount: string;
			/** Last Updated time of rollup field LinkedIn Form Submissions. */
			readonly msdyncrm_linkedinsubmissioncount_Date_UtcDateAndTime: string;
			/** State of rollup field LinkedIn Form Submissions. */
			readonly msdyncrm_linkedinsubmissioncount_State: string;
			readonly msdyncrm_marketingformid: string;
			readonly msdyncrm_marketingformsubmissiondateprecise: string;
			readonly msdyncrm_marketingpageid: string;
			readonly msdyncrm_Profileid: string;
			readonly msdyncrm_PurchaseNeed: string;
			readonly msdyncrm_Recycled: string;
			readonly msdyncrm_SalesAccepted: string;
			readonly msdyncrm_SalesReady: string;
			readonly msdyncrm_sasToken: string;
			/** Enter the last school or university attended */
			readonly msdyncrm_school: string;
			readonly msdyncrm_scores: string;
			readonly msdyncrm_scoringgrade: string;
			/** Enter the lead's seniority in their organization */
			readonly msdyncrm_seniority: string;
			/** LinkedIn form this lead came from */
			readonly msdyncrm_sourceform: string;
			/** Enter the start date for the last school or university */
			readonly msdyncrm_startdate: string;
			readonly msdyncrm_TeleProspectAccepted: string;
			readonly msdyncrm_TeleProspectReady: string;
			readonly msdyncrm_TriggerRecycle: string;
			readonly msdynmkt_customerjourneyid: string;
			readonly msdynmkt_emailid: string;
			readonly msdynmkt_issalesreadysetmanually: string;
			/** The Journey action id in which the lead is created. */
			readonly msdynmkt_JourneyActionId: string;
			readonly msdynmkt_marketingformid: string;
			/** For leads created by registering for an event in Microsoft Dynamics 365, this identifies the relevant event. This is used to relate the lead to the data on the originating event. */
			readonly msevtmgt_originatingeventid: string;
			/** Choose how high the level of need is for the lead's company. */
			readonly Need: string;
			/** Type the number of employees that work at the company associated with the lead, for use in marketing segmentation and demographic analysis. */
			readonly NumberOfEmployees: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** This attribute is used for Sample Service Business Processes. */
			readonly OriginatingCaseId: string;
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
			/** Type the pager number for the primary contact for the lead. */
			readonly Pager: string;
			/** Choose an account to connect this lead to, so that the relationship is visible in reports and analytics. */
			readonly ParentAccountId: string;
			/** Choose a contact to connect this lead to, so that the relationship is visible in reports and analytics. */
			readonly ParentContactId: string;
			/** Shows whether the lead participates in workflow rules. */
			readonly ParticipatesInWorkflow: string;
			/** Select the preferred method of contact. */
			readonly PreferredContactMethodCode: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Contains the id of the process associated with the entity. */
			readonly ProcessId: string;
			/** Choose whether an individual or a committee will be involved in the  purchase process for the lead. */
			readonly PurchaseProcess: string;
			/** Choose how long the lead will likely take to make the purchase, so the sales team will be aware. */
			readonly PurchaseTimeFrame: string;
			/** Type comments about the qualification or scoring of the lead. */
			readonly QualificationComments: string;
			/** Choose the opportunity that the lead was qualified on and then converted to. */
			readonly QualifyingOpportunityId: string;
			/** Related Campaign Response. */
			readonly RelatedObjectId: string;
			/** Type the annual revenue of the company associated with the lead to provide an understanding of the prospect's business. */
			readonly Revenue: string;
			/** Value of the Annual Revenue in base currency. */
			readonly Revenue_Base: string;
			/** Select the sales stage of this lead to aid the sales team in their efforts to convert this lead to an opportunity. */
			readonly SalesStage: string;
			/** Select the sales process stage for the lead to help determine the probability of the lead converting to an opportunity. */
			readonly SalesStageCode: string;
			/** Type the salutation of the primary contact for this lead to make sure the prospect is addressed correctly in sales calls, email messages, and marketing campaigns. */
			readonly Salutation: string;
			/** Enter the date and time of the prospecting follow-up meeting with the lead. */
			readonly ScheduleFollowUp_Prospect_UtcDateOnly: string;
			/** Enter the date and time of the qualifying follow-up meeting with the lead. */
			readonly ScheduleFollowUp_Qualify_UtcDateOnly: string;
			/** Type the Standard Industrial Classification (SIC) code that indicates the lead's primary industry of business for use in marketing segmentation and demographic analysis. */
			readonly SIC: string;
			/** Choose the service level agreement (SLA) that you want to apply to the Lead record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this case. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Contains the id of the stage where the entity is located. */
			readonly StageId: string;
			/** Shows whether the lead is open, qualified, or disqualified. Qualified and disqualified leads are read-only and can't be edited unless they are reactivated. */
			readonly StateCode: string;
			/** Select the lead's status. */
			readonly StatusCode: string;
			/** Type a subject or descriptive name, such as the expected order, company name, or marketing source list, to identify the lead. */
			readonly Subject: string;
			/** Number of users or conversations followed the record */
			readonly TeamsFollowed: string;
			/** Type the work phone number for the primary contact for the lead. */
			readonly Telephone1: string;
			/** Type the home phone number for the primary contact for the lead. */
			readonly Telephone2: string;
			/** Type an alternate phone number for the primary contact for the lead. */
			readonly Telephone3: string;
			/** Total time spent for emails (read and write) and meetings by me in relation to the lead record. */
			readonly TimeSpentByMeOnEmailAndMeetings: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Type the website URL for the company associated with this lead. */
			readonly WebSiteUrl: string;
			/** Type the phonetic spelling of the lead's company name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the prospect. */
			readonly YomiCompanyName: string;
			/** Type the phonetic spelling of the lead's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the prospect. */
			readonly YomiFirstName: string;
			/** Combines and shows the lead's Yomi first and last names so the full phonetic name can be displayed in views and reports. */
			readonly YomiFullName: string;
			/** Type the phonetic spelling of the lead's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the prospect. */
			readonly YomiLastName: string;
			/** Type the phonetic spelling of the lead's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the prospect. */
			readonly YomiMiddleName: string;
		}
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
		enum CustomerIdType {
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
			/** 831900000 */
			Journey,
			/** 192350100 */
			Landing_page,
			/** 192350000 */
			LinkedIn_Sponsored_Form,
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
			Service_Maintenance_Based
		}
		enum msdyn_salesassignmentresult {
			/** 1 */
			Failed,
			/** 0 */
			Succeeded
		}
		enum msdyncrm_leadsourcetype {
			/** 192350000 */
			Marketing,
			/** 192350001 */
			Sales,
			/** 192350002 */
			Teleprospect
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
			/** 823270000 */
			Marketing_Qualified,
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}