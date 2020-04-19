'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormCase = function(executionContext, defaultWebResourceName) {
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
			ActualServiceUnits: {},
			Associated_Articles: {},
			Associated_KnowledgeArticles: {},
			BlockedProfile: {},
			CaseOriginCode: {},
			CaseResearch_LinkControl: {},
			CaseTypeCode: {},
			ChildCasesGrid: {},
			ContractDetailId: {},
			ContractId: {},
			ContractServiceLevelCode: {},
			CustomerId: {},
			CustomerId_1: {},
			CustomerSatisfactionCode: {},
			Description: {},
			EntitlementId: {},
			EscalatedOn: {},
			FirstResponseByKPIId: {},
			FirstResponseSent: {},
			FollowupBy: {},
			InfluenceScore: {},
			IsEscalated: {},
			KbArticleId: {},
			kbviewer: {},
			MergedCasesGrid: {},
			MessageTypeCode: {},
			msdyn_IncidentType: {},
			msdyn_iotalert: {},
			msdyn_iotalert_1: {},
			notescontrol: {},
			ParentCaseId: {},
			PrimaryContactId: {},
			ProductId: {},
			ProductSerialNumber: {},
			RelatedSolutionGrid: {},
			ResolveBy: {},
			ResolveByKPIId: {},
			ResponseBy: {},
			SentimentValue: {},
			SLA_KPI_Instances_List: {},
			SocialProfileId: {},
			SubjectId: {},
			TicketNumber: {},
			Title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					Details: {},
					Applicable_SLASTANDARD: {},
					TabsControl: {},
					Customer: {}
				}
			},
			CASERELATIONSHIP_TAB: {
				Section: {
					Solutions: {},
					Research: {},
					MergedCases: {},
					ChildCases: {}
				}
			},
			AssociatedKnowledgeBaseRecords: {
				Section: {
					Articles: {},
					KnowledgeArticles: {}
				}
			},
			_Enhanced_SLA_Details_Tab: {
				Section: {
					Applicable_SLAENHANCED: {},
					SLAKPIInstances: {}
				}
			},
			ADDITIONALDETAILS_TAB: {
				Section: {
					parentcaseandtype: {},
					escalations: {},
					responses: {}
				}
			},
			SOCIALDETAILS_TAB: {
				Section: {
					social: {},
					scores: {},
					social3: {}
				}
			},
			KBARTICLE_TAB: {
				Section: {
					kb_article: {},
					contract_and_product_information: {}
				}
			},
			DeviceInsightsTab: {
				Section: {
					DeviceInsightsSection: {}
				}
			},
			FieldService: {
				Section: {
					tab_8_section_1: {},
					tab_8_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			OwnerId: {},
			PriorityCode: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Phone_to_Case_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		var _Case_to_Work_Order_Business_Process = {
			CustomerId: {},
			ExistingCase: {},
			msdyn_billingaccount: {},
			msdyn_primaryincidenttype: {},
			msdyn_priority: {},
			msdyn_serviceaccount: {},
			msdyn_substatus: {},
			msdyn_systemstatus: {},
			msdyn_workordertype: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		form.Process = process;
		var quickForm = {
			customerpane_qfc: {},
			firstresponseslaquickform: {},
			resolvebyslaquickform: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navActivities: {},
			navActivityHistory: {},
			nav_msdyn_incident_msdyn_workorder_ServiceRequest: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormCase_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
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
			Associated_KnowledgeArticles: {},
			BlockedProfile: {},
			case_kbsearchcontrol: {},
			CaseOriginCode: {},
			CaseOriginCode_1: {},
			CaseTypeCode: {},
			ChildCasesGrid: {},
			CustomerId: {},
			CustomerId_1: {},
			CustomerId_2: {},
			CustomerId_3: {},
			Description: {},
			Description_1: {},
			Devices: {},
			EntitlementId: {},
			EntitlementId_1: {},
			EscalatedOn: {},
			FirstResponseByKPIId: {},
			FirstResponseSent: {},
			FollowupBy: {},
			InfluenceScore: {},
			IsEscalated: {},
			MergedCasesGrid: {},
			MessageTypeCode: {},
			msdyn_iotalert: {},
			msdyn_iotalert_1: {},
			msdyn_iotalert_2: {},
			notescontrol: {},
			ParentCaseId: {},
			PrimaryContactId: {},
			ProductId: {},
			ProductId_1: {},
			ResolveBy: {},
			ResolveByKPIId: {},
			ResponseBy: {},
			SentimentValue: {},
			SLA_KPI_Instances_List: {},
			SocialProfileId: {},
			SubjectId: {},
			SubjectId_1: {},
			TicketNumber: {},
			TicketNumber_1: {},
			Title: {},
			Title_1: {},
			Title_2: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Summary: {
				Section: {
					General_Info: {},
					SLAKPI_Timer_Section: {},
					Case_Details_Summary: {},
					Timeline: {}
				}
			},
			Details: {
				Section: {
					Case_Details: {},
					Additional_Details: {},
					Applicable_SLASTANDARD: {},
					Social_Response: {}
				}
			},
			CASERELATIONSHIP_TAB: {
				Section: {
					MergedCases: {},
					ChildCases: {},
					KnowledgeArticles: {},
					Solutions: {}
				}
			},
			_Enhanced_SLA_Details_Tab: {
				Section: {
					SLAKPIInstances: {}
				}
			},
			DeviceInsightsTab: {
				Section: {
					DeviceInsightsSection: {}
				}
			},
			DeviceTab: {
				Section: {
					DeviceSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			OwnerId: {},
			PriorityCode: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Phone_to_Case_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		var _Case_to_Work_Order_Business_Process = {
			CustomerId: {},
			ExistingCase: {},
			msdyn_billingaccount: {},
			msdyn_primaryincidenttype: {},
			msdyn_priority: {},
			msdyn_serviceaccount: {},
			msdyn_substatus: {},
			msdyn_systemstatus: {},
			msdyn_workordertype: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		form.Process = process;
		var quickForm = {
			customerpane_qfc: {},
			FirstResponseByKPI: {},
			ResolveByKPI: {},
			case_qfc: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormIncident_Information = function(executionContext, defaultWebResourceName) {
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
			CaseOriginCode: {},
			CaseTypeCode: {},
			ContractDetailId: {},
			ContractId: {},
			ContractServiceLevelCode: {},
			CustomerId: {},
			CustomerSatisfactionCode: {},
			FollowupBy: {},
			KbArticleId: {},
			kbviewer: {},
			notescontrol: {},
			OwnerId: {},
			PriorityCode: {},
			ProductId: {},
			ProductSerialNumber: {},
			StatusCode: {},
			SubjectId: {},
			Title: {},
			WebResource_RecordWall: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_recordwall: {
				Section: {
					tab_recordwall_section_1: {}
				}
			},
			general: {
				Section: {
					overview: {},
					assignment_information: {},
					contract_and_product_information: {}
				}
			},
			notesandkb: {
				Section: {
					notes: {},
					kb_article: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Phone_to_Case_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		var _Case_to_Work_Order_Business_Process = {
			CustomerId: {},
			ExistingCase: {},
			msdyn_billingaccount: {},
			msdyn_primaryincidenttype: {},
			msdyn_priority: {},
			msdyn_serviceaccount: {},
			msdyn_substatus: {},
			msdyn_systemstatus: {},
			msdyn_workordertype: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navActivities: {},
			navActivityHistory: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormTimelineWallControl_Case_Main = function(executionContext, defaultWebResourceName) {
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
			notescontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					SOCIAL_PANE_TAB: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Phone_to_Case_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		var _Case_to_Work_Order_Business_Process = {
			CustomerId: {},
			ExistingCase: {},
			msdyn_billingaccount: {},
			msdyn_primaryincidenttype: {},
			msdyn_priority: {},
			msdyn_serviceaccount: {},
			msdyn_substatus: {},
			msdyn_systemstatus: {},
			msdyn_workordertype: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navActivities: {},
			navActivityHistory: {}
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
	OptionSet.Incident = {
		CaseOriginCode : {
			Phone: 1,
			Email: 2,
			Web: 3,
			Facebook: 2483,
			Twitter: 3986,
			IoT: 700610000
		},
		CaseTypeCode : {
			Question: 1,
			Problem: 2,
			Request: 3
		},
		ContractServiceLevelCode : {
			Gold: 1,
			Silver: 2,
			Bronze: 3
		},
		CustomerSatisfactionCode : {
			Very_Satisfied: 5,
			Satisfied: 4,
			Neutral: 3,
			Dissatisfied: 2,
			Very_Dissatisfied: 1
		},
		FirstResponseSLAStatus : {
			In_Progress: 1,
			Nearing_Noncompliance: 2,
			Succeeded: 3,
			Noncompliant: 4
		},
		IncidentStageCode : {
			Default_Value: 1
		},
		int_CustomerEffort : {
			Low: 121590000,
			Medium: 121590001,
			High: 121590002
		},
		MessageTypeCode : {
			Public_Message: 0,
			Private_Message: 1
		},
		PriorityCode : {
			High: 1,
			Normal: 2,
			Low: 3
		},
		ResolveBySLAStatus : {
			In_Progress: 1,
			Nearing_Noncompliance: 2,
			Succeeded: 3,
			Noncompliant: 4
		},
		ServiceStage : {
			Identify: 0,
			Research: 1,
			Resolve: 2
		},
		SeverityCode : {
			Default_Value: 1
		},
		StateCode : {
			Active: 0,
			Resolved: 1,
			Cancelled: 2
		},
		StatusCode : {
			Problem_Solved: 5,
			Information_Provided: 1000,
			Cancelled: 6,
			Merged: 2000,
			In_Progress: 1,
			On_Hold: 2,
			Waiting_for_Details: 3,
			Researching: 4
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