'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormLead = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Address1_City: {},
			Address1_Composite: {},
			Address1_Country: {},
			Address1_Line1: {},
			Address1_PostalCode: {},
			Address1_StateOrProvince: {},
			CadenceWidgetControl: {},
			CampaignId: {},
			cc_1673878245253: {},
			cc_1680511450308: {},
			CompanyName: {},
			CompanyName1: {},
			Competitors: {},
			ContactabilityGridControl: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			DoNotSendMM: {},
			EMailAddress1: {},
			EMailAddress11: {},
			EMailAddress12: {},
			EMailAddress13: {},
			FirstName: {},
			FirstName1: {},
			FormSubmissions: {},
			FullName: {},
			IndustryCode: {},
			IndustryCode1: {},
			JobTitle: {},
			JobTitle1: {},
			LastName: {},
			LastName1: {},
			LastUsedInCampaign: {},
			Lead_Scores_Subgrid: {},
			Leadscores: {},
			LeadSourceCode: {},
			mapcontrol: {},
			MobilePhone: {},
			MobilePhone1: {},
			msdyn_ordertype: {},
			msdyncrm_companysize: {},
			msdyncrm_customerjourneyid: {},
			msdyncrm_degree: {},
			msdyncrm_emailid: {},
			msdyncrm_fieldofstudy: {},
			msdyncrm_graduationdate: {},
			msdyncrm_insights_placeholder: {},
			msdyncrm_insights_placeholder1: {},
			msdyncrm_jobfunction: {},
			msdyncrm_LinkedInCampaign: {},
			msdyncrm_linkedinsubmissioncount: {},
			msdyncrm_marketingformid: {},
			msdyncrm_marketingpageid: {},
			msdyncrm_PurchaseNeed: {},
			msdyncrm_Recycled: {},
			msdyncrm_SalesAccepted: {},
			msdyncrm_SalesReady: {},
			msdyncrm_school: {},
			msdyncrm_seniority: {},
			msdyncrm_sourceform: {},
			msdyncrm_startdate: {},
			msdyncrm_TeleProspectAccepted: {},
			msdyncrm_TeleProspectReady: {},
			msdyncrm_TriggerRecycle: {},
			msdynmkt_customerjourneyid: {},
			msdynmkt_emailid: {},
			msdynmkt_marketingformid: {},
			msevtmgt_originatingeventid: {},
			notescontrol: {},
			NumberOfEmployees: {},
			PreferredContactMethodCode: {},
			Revenue: {},
			SIC: {},
			Stakeholders: {},
			Subject: {},
			Telephone1: {},
			Telephone11: {},
			Telephone12: {},
			TransactionCurrencyId: {},
			WebSiteUrl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			accountInsights: {
				Section: {
					insights_section_2: {}
				}
			},
			contactInsights: {
				Section: {
					insights_section: {}
				}
			},
			details_tab: {
				Section: {
					contact_methods: {},
					EventInformationSection: {},
					lead_information: {},
					marketing_information: {}
				}
			},
			Lead_scores: {
				Section: {
					lead_scores_section: {}
				}
			},
			LinkedIn_Lead_Info: {
				Section: {
					Company: {},
					Education: {},
					LinkedIn_Contact: {},
					LINKEDIN_FORM_SUBMISSIONS: {},
					Source_Context: {}
				}
			},
			rtm_insights: {
				Section: {
					tab_7_section_1: {}
				}
			},
			Summary: {
				Section: {
					company: {},
					Contact: {},
					MapSection: {},
					RELATED_TAB: {},
					SOCIAL_PANE: {},
					Summary_CadenceWidget: {},
					SUMMARY_TAB_ADDRESSINPUT_SECTION: {},
					WKW_Section: {}
				}
			},
			tab_communication: {
				Section: {
					tab_communication_section_communication: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			LeadQualityCode: {},
			LeadSourceCode: {},
			OwnerId: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Lead_to_Opportunity_Sales_Process = {
			BudgetAmount: {},
			DecisionMaker: {},
			Description: {},
			ParentAccountId: {},
			ParentContactId: {},
			PurchaseProcess: {},
			PurchaseTimeFrame: {}
		}
		devKit.LoadFields(formContext, _Lead_to_Opportunity_Sales_Process, "header_process_");
		process.Lead_to_Opportunity_Sales_Process = _Lead_to_Opportunity_Sales_Process;
		var _Lead_to_opportunity_marketing_sales_process = {
			BudgetAmount_Base: {},
			Description: {},
			DoNotBulkEMail: {},
			msdyncrm_PurchaseNeed: {},
			msdyncrm_SalesAccepted: {},
			msdyncrm_SalesReady: {},
			msdyncrm_SalesReady_1: {},
			msdyncrm_TeleProspectAccepted: {},
			msdyncrm_TeleProspectReady: {},
			ParentAccountId: {},
			ParentContactId: {},
			PurchaseProcess: {},
			PurchaseTimeFrame: {}
		}
		devKit.LoadFields(formContext, _Lead_to_opportunity_marketing_sales_process, "header_process_");
		process.Lead_to_opportunity_marketing_sales_process = _Lead_to_opportunity_marketing_sales_process;
		form.Process = process;
		var grid = {
			Competitors: {},
			FormSubmissions: {},
			Lead_Scores_Subgrid: {},
			Leadscores: {},
			Stakeholders: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_originating_lead: {},
			contact_originating_lead: {},
			lead_adx_inviteredemptions: {},
			lead_adx_portalcomments: {},
			Lead_Appointments: {},
			lead_BulkOperations: {},
			lead_CampaignResponses: {},
			Lead_Email_EmailSender: {},
			Lead_Emails: {},
			lead_IncidentResolutions: {},
			lead_msdyn_bookingalerts: {},
			lead_msdyn_copilottranscripts: {},
			lead_msdyn_ocliveworkitems: {},
			lead_msdyn_ocoutboundmessages: {},
			lead_msdyn_ocsessions: {},
			lead_msdyn_ocvoicemails: {},
			lead_msfp_alerts: {},
			lead_msfp_surveyinvites: {},
			lead_msfp_surveyresponses: {},
			lead_OpportunityCloses: {},
			lead_OrderCloses: {},
			Lead_Phonecalls: {},
			lead_Posts: {},
			lead_QuoteCloses: {},
			Lead_ServiceAppointments: {},
			Lead_Tasks: {},
			lk_leadtoopportunitysalesprocess_leadid: {},
			msdyn_lead_dailyleadkpiitem_entityid: {},
			msdyn_lead_msdyn_duplicatedetectionpluginrun_baserecordid: {},
			msdyn_lead_msdyn_duplicateleadmapping: {},
			msdyn_lead_msdyn_duplicateleadmapping_BaseLeadRecord: {},
			msdyn_lead_msdyn_leadkpiitem_leadid: {},
			msdyn_lead_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_lead_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_lead_msdyn_salesroutingrun_targetobject: {},
			msdyn_lead_msdyn_timespent_leadlookup: {},
			msdyn_linkeditemvalidity_polymorphic_leadid: {},
			msdyn_msdyn_salescopilotinsight_lead_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_lead_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_lead: {},
			msdyn_sabackupdiagnostic_lead_msdyn_target: {},
			msdyn_salesroutingdiagnostic_lead_msdyn_target: {},
			msdyn_sequencetarget_lead_msdyn_target: {},
			msdyncrm_lead_marketingformsubmission_matched: {},
			msdyncrm_lead_msdyncrm_geopin: {},
			msdyncrm_lead_msdyncrm_leadscore: {},
			msdyncrm_lead_msdyncrm_leadscore_v2: {},
			msdyncrm_lead_msdyncrm_leadtoopportunity: {},
			msdyncrm_lead_msdyncrm_linkedinformsubmission_Lead: {},
			opportunity_originating_lead: {},
			SourceLead_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormLead_Sales_Insights = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			ActionCards: {},
			Address1_Composite: {},
			CadenceWidgetControl: {},
			cc_1612864425766: {},
			cc_1626168480122: {},
			CompanyName: {},
			Competitors: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			DoNotSendMM: {},
			EMailAddress1: {},
			EMailAddress11: {},
			FollowEmail: {},
			FullName: {},
			Healthwidget: {},
			IndustryCode: {},
			JobTitle: {},
			LastUsedInCampaign: {},
			mapcontrol: {},
			MobilePhone: {},
			MobilePhone1: {},
			notescontrol: {},
			NumberOfEmployees: {},
			PreferredContactMethodCode: {},
			Revenue: {},
			RICONTAINER_CHARTS: {},
			SIC: {},
			Stakeholders: {},
			Subject: {},
			Telephone1: {},
			Telephone11: {},
			TransactionCurrencyId: {},
			WebSiteUrl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			details_tab: {
				Section: {
					contact_methods: {},
					lead_information: {},
					marketing_information: {}
				}
			},
			RAV2: {
				Section: {
					RAV2_section_1: {}
				}
			},
			RELATIONSHIP_ANALYTICS_TAB: {
				Section: {
					Activity_Analysis_section_2: {}
				}
			},
			Summary: {
				Section: {
					company: {},
					Contact: {},
					MapSection: {},
					PredictiveScoreSection: {},
					RELATED_TAB: {},
					SOCIAL_PANE: {},
					Summary_CadenceWidget: {},
					Summary_section_6: {},
					Summary_section_7: {},
					WKW_Section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			LeadQualityCode: {},
			LeadSourceCode: {},
			OwnerId: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Lead_to_Opportunity_Sales_Process = {
			BudgetAmount: {},
			DecisionMaker: {},
			Description: {},
			ParentAccountId: {},
			ParentContactId: {},
			PurchaseProcess: {},
			PurchaseTimeFrame: {}
		}
		devKit.LoadFields(formContext, _Lead_to_Opportunity_Sales_Process, "header_process_");
		process.Lead_to_Opportunity_Sales_Process = _Lead_to_Opportunity_Sales_Process;
		var _Lead_to_opportunity_marketing_sales_process = {
			BudgetAmount_Base: {},
			Description: {},
			DoNotBulkEMail: {},
			msdyncrm_PurchaseNeed: {},
			msdyncrm_SalesAccepted: {},
			msdyncrm_SalesReady: {},
			msdyncrm_SalesReady_1: {},
			msdyncrm_TeleProspectAccepted: {},
			msdyncrm_TeleProspectReady: {},
			ParentAccountId: {},
			ParentContactId: {},
			PurchaseProcess: {},
			PurchaseTimeFrame: {}
		}
		devKit.LoadFields(formContext, _Lead_to_opportunity_marketing_sales_process, "header_process_");
		process.Lead_to_opportunity_marketing_sales_process = _Lead_to_opportunity_marketing_sales_process;
		form.Process = process;
		var grid = {
			Competitors: {},
			Stakeholders: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			account_originating_lead: {},
			contact_originating_lead: {},
			lead_adx_inviteredemptions: {},
			lead_adx_portalcomments: {},
			Lead_Appointments: {},
			lead_BulkOperations: {},
			lead_CampaignResponses: {},
			Lead_Email_EmailSender: {},
			Lead_Emails: {},
			lead_IncidentResolutions: {},
			lead_msdyn_bookingalerts: {},
			lead_msdyn_copilottranscripts: {},
			lead_msdyn_ocliveworkitems: {},
			lead_msdyn_ocoutboundmessages: {},
			lead_msdyn_ocsessions: {},
			lead_msdyn_ocvoicemails: {},
			lead_msfp_alerts: {},
			lead_msfp_surveyinvites: {},
			lead_msfp_surveyresponses: {},
			lead_OpportunityCloses: {},
			lead_OrderCloses: {},
			Lead_Phonecalls: {},
			lead_Posts: {},
			lead_QuoteCloses: {},
			Lead_ServiceAppointments: {},
			Lead_Tasks: {},
			lk_leadtoopportunitysalesprocess_leadid: {},
			msdyn_lead_dailyleadkpiitem_entityid: {},
			msdyn_lead_msdyn_duplicatedetectionpluginrun_baserecordid: {},
			msdyn_lead_msdyn_duplicateleadmapping: {},
			msdyn_lead_msdyn_duplicateleadmapping_BaseLeadRecord: {},
			msdyn_lead_msdyn_leadkpiitem_leadid: {},
			msdyn_lead_msdyn_mostcontacted_regardingObjectId: {},
			msdyn_lead_msdyn_mostcontactedby_regardingObjectId: {},
			msdyn_lead_msdyn_salesroutingrun_targetobject: {},
			msdyn_lead_msdyn_timespent_leadlookup: {},
			msdyn_linkeditemvalidity_polymorphic_leadid: {},
			msdyn_msdyn_salescopilotinsight_lead_msdyn_targetentityid: {},
			msdyn_msdyn_taggedrecord_lead_msdyn_dynamicsrecordid: {},
			msdyn_playbookinstance_lead: {},
			msdyn_sabackupdiagnostic_lead_msdyn_target: {},
			msdyn_salesroutingdiagnostic_lead_msdyn_target: {},
			msdyn_sequencetarget_lead_msdyn_target: {},
			msdyncrm_lead_marketingformsubmission_matched: {},
			msdyncrm_lead_msdyncrm_geopin: {},
			msdyncrm_lead_msdyncrm_leadscore: {},
			msdyncrm_lead_msdyncrm_leadscore_v2: {},
			msdyncrm_lead_msdyncrm_leadtoopportunity: {},
			msdyncrm_lead_msdyncrm_linkedinformsubmission_Lead: {},
			opportunity_originating_lead: {},
			SourceLead_BulkOperationLogs: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormLead_Quick_Create = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			BudgetAmount: {},
			BusinessCard: {},
			CompanyName: {},
			Description: {},
			EMailAddress1: {},
			FirstName: {},
			JobTitle: {},
			LastName: {},
			LeadSourceCode: {},
			MobilePhone: {},
			PurchaseTimeFrame: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Lead = {
		Address1_AddressTypeCode : {
			Default_Value: 1
		},
		Address1_ShippingMethodCode : {
			Default_Value: 1
		},
		Address2_AddressTypeCode : {
			Default_Value: 1
		},
		Address2_ShippingMethodCode : {
			Default_Value: 1
		},
		BudgetStatus : {
			Can_Buy: 2,
			May_Buy: 1,
			No_Committed_Budget: 0,
			Will_Buy: 3
		},
		CustomerIdType : {
		},
		IndustryCode : {
			Accounting: 1,
			Agriculture_and_Non_petrol_Natural_Resource_Extraction: 2,
			Broadcasting_Printing_and_Publishing: 3,
			Brokers: 4,
			Building_Supply_Retail: 5,
			Business_Services: 6,
			Consulting: 7,
			Consumer_Services: 8,
			Design_Direction_and_Creative_Management: 9,
			Distributors_Dispatchers_and_Processors: 10,
			Doctors_Offices_and_Clinics: 11,
			Durable_Manufacturing: 12,
			Eating_and_Drinking_Places: 13,
			Entertainment_Retail: 14,
			Equipment_Rental_and_Leasing: 15,
			Financial: 16,
			Food_and_Tobacco_Processing: 17,
			Inbound_Capital_Intensive_Processing: 18,
			Inbound_Repair_and_Services: 19,
			Insurance: 20,
			Legal_Services: 21,
			Non_Durable_Merchandise_Retail: 22,
			Outbound_Consumer_Service: 23,
			Petrochemical_Extraction_and_Distribution: 24,
			Service_Retail: 25,
			SIG_Affiliations: 26,
			Social_Services: 27,
			Special_Outbound_Trade_Contractors: 28,
			Specialty_Realty: 29,
			Transportation: 30,
			Utility_Creation_and_Distribution: 31,
			Vehicle_Retail: 32,
			Wholesale: 33
		},
		InitialCommunication : {
			Contacted: 0,
			Not_Contacted: 1
		},
		LeadQualityCode : {
			Cold: 3,
			Hot: 1,
			Warm: 2
		},
		LeadSourceCode : {
			Advertisement: 1,
			Employee_Referral: 2,
			External_Referral: 3,
			Journey: 831900000,
			Landing_page: 192350100,
			LinkedIn_Sponsored_Form: 192350000,
			Other: 10,
			Partner: 4,
			Public_Relations: 5,
			Seminar: 6,
			Trade_Show: 7,
			Web: 8,
			Word_of_Mouth: 9
		},
		msdyn_LeadGrade : {
			Grade_A: 0,
			Grade_B: 1,
			Grade_C: 2,
			Grade_D: 3
		},
		msdyn_LeadScoreTrend : {
			Declining: 2,
			Improving: 0,
			Not_enough_info: 3,
			Steady: 1
		},
		msdyn_ordertype : {
			Item_based: 192350000,
			Service_Maintenance_Based: 690970002
		},
		msdyn_salesassignmentresult : {
			Failed: 1,
			Succeeded: 0
		},
		msdyncrm_leadsourcetype : {
			Marketing: 192350000,
			Sales: 192350001,
			Teleprospect: 192350002
		},
		Need : {
			Good_to_have: 2,
			Must_have: 0,
			No_need: 3,
			Should_have: 1
		},
		PreferredContactMethodCode : {
			Any: 1,
			Email: 2,
			Fax: 4,
			Mail: 5,
			Phone: 3
		},
		PriorityCode : {
			Default_Value: 1
		},
		PurchaseProcess : {
			Committee: 1,
			Individual: 0,
			Unknown: 2
		},
		PurchaseTimeFrame : {
			Immediate: 0,
			Next_Quarter: 2,
			This_Quarter: 1,
			This_Year: 3,
			Unknown: 4
		},
		SalesStage : {
			Qualify: 0
		},
		SalesStageCode : {
			Default_Value: 1
		},
		StateCode : {
			Disqualified: 2,
			Open: 0,
			Qualified: 1
		},
		StatusCode : {
			Canceled: 7,
			Cannot_Contact: 5,
			Contacted: 2,
			Lost: 4,
			Marketing_Qualified: 823270000,
			New: 1,
			No_Longer_Interested: 6,
			Qualified: 3
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));