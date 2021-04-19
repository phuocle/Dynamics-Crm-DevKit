'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormLead = function(executionContext, defaultWebResourceName) {
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
			Address1_Composite: {},
			BusinessCard: {},
			CampaignId: {},
			CompanyName: {},
			Competitors: {},
			Description: {},
			DocumentsSubGrid: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			DoNotSendMM: {},
			EMailAddress1: {},
			FullName: {},
			IndustryCode: {},
			JobTitle: {},
			LastUsedInCampaign: {},
			mapcontrol: {},
			MobilePhone: {},
			msdyn_ordertype: {},
			msdyn_ordertype_1: {},
			notescontrol: {},
			NumberOfEmployees: {},
			PreferredContactMethodCode: {},
			Revenue: {},
			SIC: {},
			Stakeholders: {},
			Subject: {},
			Telephone1: {},
			TransactionCurrencyId: {},
			WebSiteUrl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Summary: {
				Section: {
					Contact: {},
					company: {},
					MapSection: {},
					BusinessCard: {},
					SOCIAL_PANE: {},
					RELATED_TAB: {}
				}
			},
			details_tab: {
				Section: {
					lead_information: {},
					marketing_information: {},
					contact_methods: {}
				}
			},
			documents_sharepoint: {
				Section: {
					documents_sharepoint_section: {}
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
			completefinalproposal: {},
			completeinternalreview: {},
			customerneed: {},
			DecisionMaker: {},
			Description: {},
			developproposal: {},
			filedebrief: {},
			finaldecisiondate: {},
			identifycompetitors: {},
			identifycustomercontacts: {},
			identifypursuitteam: {},
			ParentAccountId: {},
			ParentContactId: {},
			presentfinalproposal: {},
			presentproposal: {},
			proposedsolution: {},
			PurchaseProcess: {},
			PurchaseTimeFrame: {},
			sendthankyounote: {}
		}
		devKit.LoadFields(formContext, _Lead_to_Opportunity_Sales_Process, "header_process_");
		process.Lead_to_Opportunity_Sales_Process = _Lead_to_Opportunity_Sales_Process;
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			Stakeholders: {},
			Competitors: {},
			DocumentsSubGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navActivities: {},
			navCampaignsInSFA: {},
			navConnections: {},
			navDocument: {},
			navAsyncOperations: {},
			navAudit: {},
			navProcessSessions: {},
			navLeadCompetitor: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormLead_Sales_Insights = function(executionContext, defaultWebResourceName) {
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
			CompanyName: {},
			Competitors: {},
			Description: {},
			DoNotBulkEMail: {},
			DoNotEMail: {},
			DoNotPhone: {},
			DoNotPostalMail: {},
			DoNotSendMM: {},
			EMailAddress1: {},
			FollowEmail: {},
			FullName: {},
			IndustryCode: {},
			JobTitle: {},
			LastUsedInCampaign: {},
			mapcontrol: {},
			MobilePhone: {},
			notescontrol: {},
			NumberOfEmployees: {},
			PreferredContactMethodCode: {},
			Revenue: {},
			SIC: {},
			Stakeholders: {},
			Subject: {},
			Telephone1: {},
			TransactionCurrencyId: {},
			WebSiteUrl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Summary: {
				Section: {
					Contact: {},
					company: {},
					MapSection: {},
					SOCIAL_PANE: {},
					Summary_section_6: {},
					RELATED_TAB: {}
				}
			},
			details_tab: {
				Section: {
					lead_information: {},
					marketing_information: {},
					contact_methods: {}
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
			completefinalproposal: {},
			completeinternalreview: {},
			customerneed: {},
			DecisionMaker: {},
			Description: {},
			developproposal: {},
			filedebrief: {},
			finaldecisiondate: {},
			identifycompetitors: {},
			identifycustomercontacts: {},
			identifypursuitteam: {},
			ParentAccountId: {},
			ParentContactId: {},
			presentfinalproposal: {},
			presentproposal: {},
			proposedsolution: {},
			PurchaseProcess: {},
			PurchaseTimeFrame: {},
			sendthankyounote: {}
		}
		devKit.LoadFields(formContext, _Lead_to_Opportunity_Sales_Process, "header_process_");
		process.Lead_to_Opportunity_Sales_Process = _Lead_to_Opportunity_Sales_Process;
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			Stakeholders: {},
			Competitors: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navActivities: {},
			navCampaignsInSFA: {},
			navLeadCompetitor: {},
			navConnections: {},
			navDocument: {},
			navAsyncOperations: {},
			navAudit: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormLead_Quick_Create = function(executionContext, defaultWebResourceName) {
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
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		}
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	}
})(MyDog || (MyDog = {}));
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
			Other: 10,
			Partner: 4,
			Public_Relations: 5,
			Seminar: 6,
			Trade_Show: 7,
			Web: 8,
			Word_of_Mouth: 9
		},
		msdyn_ordertype : {
			Item_based: 192350000,
			Service_Maintenance_Based: 690970002,
			Work_based: 192350001
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