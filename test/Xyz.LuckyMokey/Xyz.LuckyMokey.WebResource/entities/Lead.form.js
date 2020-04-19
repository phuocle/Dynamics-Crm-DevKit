'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormLead = function(executionContext, defaultWebResourceName) {
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
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
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
			No_Committed_Budget: 0,
			May_Buy: 1,
			Can_Buy: 2,
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
			Hot: 1,
			Warm: 2,
			Cold: 3
		},
		LeadSourceCode : {
			Advertisement: 1,
			Employee_Referral: 2,
			External_Referral: 3,
			Partner: 4,
			Public_Relations: 5,
			Seminar: 6,
			Trade_Show: 7,
			Web: 8,
			Word_of_Mouth: 9,
			Other: 10
		},
		msdyn_ordertype : {
			Work_based: 192350001,
			Item_based: 192350000,
			Service_Maintenance_Based: 690970002
		},
		Need : {
			Must_have: 0,
			Should_have: 1,
			Good_to_have: 2,
			No_need: 3
		},
		PreferredContactMethodCode : {
			Any: 1,
			Email: 2,
			Phone: 3,
			Fax: 4,
			Mail: 5
		},
		PriorityCode : {
			Default_Value: 1
		},
		PurchaseProcess : {
			Individual: 0,
			Committee: 1,
			Unknown: 2
		},
		PurchaseTimeFrame : {
			Immediate: 0,
			This_Quarter: 1,
			Next_Quarter: 2,
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
			Open: 0,
			Qualified: 1,
			Disqualified: 2
		},
		StatusCode : {
			New: 1,
			Contacted: 2,
			Qualified: 3,
			Lost: 4,
			Cannot_Contact: 5,
			No_Longer_Interested: 6,
			Canceled: 7
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