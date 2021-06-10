'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormCase = function(executionContext, defaultWebResourceName) {
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
			msdyn_FunctionalLocation: {},
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
			_Enhanced_SLA_Details_Tab: {
				Section: {
					Applicable_SLAENHANCED: {},
					SLAKPIInstances: {}
				}
			},
			ADDITIONALDETAILS_TAB: {
				Section: {
					escalations: {},
					parentcaseandtype: {},
					responses: {}
				}
			},
			AssociatedKnowledgeBaseRecords: {
				Section: {
					Articles: {},
					KnowledgeArticles: {}
				}
			},
			CASERELATIONSHIP_TAB: {
				Section: {
					ChildCases: {},
					MergedCases: {},
					Research: {},
					Solutions: {}
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
			},
			general: {
				Section: {
					Applicable_SLASTANDARD: {},
					Customer: {},
					Details: {},
					TabsControl: {}
				}
			},
			KBARTICLE_TAB: {
				Section: {
					contract_and_product_information: {},
					kb_article: {}
				}
			},
			SOCIALDETAILS_TAB: {
				Section: {
					scores: {},
					social: {},
					social3: {}
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
			customerpane_qfc: {
				EMailAddress1: {},
				FullName: {},
				MobilePhone: {},
				ParentCustomerId: {},
				Telephone1: {}
			},
			firstresponseslaquickform: {

			},
			resolvebyslaquickform: {

			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			RelatedSolutionGrid: {},
			MergedCasesGrid: {},
			ChildCasesGrid: {},
			Associated_Articles: {},
			Associated_KnowledgeArticles: {},
			SLA_KPI_Instances_List: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_incident_msdyn_workorder_ServiceRequest: {},
			navActivities: {},
			navActivityHistory: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	DevKit.FormCase_for_Interactive_experience = function(executionContext, defaultWebResourceName) {
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
			_Enhanced_SLA_Details_Tab: {
				Section: {
					SLAKPIInstances: {}
				}
			},
			CASERELATIONSHIP_TAB: {
				Section: {
					ChildCases: {},
					KnowledgeArticles: {},
					MergedCases: {},
					Solutions: {}
				}
			},
			Details: {
				Section: {
					Additional_Details: {},
					Applicable_SLASTANDARD: {},
					Case_Details: {},
					Social_Response: {}
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
			},
			Summary: {
				Section: {
					Case_Details_Summary: {},
					General_Info: {},
					SLAKPI_Timer_Section: {},
					Timeline: {}
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
			case_qfc: {
			},
			customerpane_qfc: {
				EMailAddress1: {},
				FullName: {},
				MobilePhone: {},
				ParentCustomerId: {},
				Telephone1: {}
			},
			FirstResponseByKPI: {

			},
			ResolveByKPI: {

			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			MergedCasesGrid: {},
			ChildCasesGrid: {},
			Associated_KnowledgeArticles: {},
			SLA_KPI_Instances_List: {},
			Devices: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	DevKit.FormCase_for_Multisession_experience = function(executionContext, defaultWebResourceName) {
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
			CaseTypeCode: {},
			ChildCasesGrid: {},
			CustomerId: {},
			Description: {},
			EntitlementId: {},
			EscalatedOn: {},
			FirstResponseSent: {},
			FollowupBy: {},
			IsEscalated: {},
			MergedCasesGrid: {},
			notescontrol: {},
			ParentCaseId: {},
			PriorityCode: {},
			ProductId: {},
			relatedCases: {},
			ResolveBy: {},
			ResponseBy: {},
			StatusCode: {},
			SubjectId: {},
			Title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			CASERELATIONSHIP_TAB: {
				Section: {
					Applicable_SLASTANDARD: {},
					Case_Details: {},
					ChildCases: {},
					KnowledgeArticles: {},
					MergedCases: {},
					RelatedCases: {}
				}
			},
			Summary: {
				Section: {
					Case_Details_Summary: {},
					TabsControl: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CaseOriginCode: {},
			CreatedOn: {},
			OwnerId: {},
			TicketNumber: {}
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
		var grid = {
			Associated_KnowledgeArticles: {},
			relatedCases: {},
			ChildCasesGrid: {},
			MergedCasesGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navActivities: {},
			navActivityHistory: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	DevKit.FormIncident_Information = function(executionContext, defaultWebResourceName) {
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
			general: {
				Section: {
					assignment_information: {},
					contract_and_product_information: {},
					overview: {}
				}
			},
			notesandkb: {
				Section: {
					kb_article: {},
					notes: {}
				}
			},
			tab_recordwall: {
				Section: {
					tab_recordwall_section_1: {}
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
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	DevKit.FormTimelineWallControl_Case_Main = function(executionContext, defaultWebResourceName) {
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
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	DevKit.FormCase_Quick_Create_for_Multisession = function(executionContext, defaultWebResourceName) {
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
			CaseTypeCode: {},
			CustomerId: {},
			Description: {},
			OwnerId: {},
			ParentCaseId: {},
			PriorityCode: {},
			StatusCode: {},
			SubjectId: {},
			Title: {}
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
	DevKit.FormApp_for_Outlook_Case_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			CaseOriginCode: {},
			CaseTypeCode: {},
			CustomerId: {},
			Description: {},
			EntitlementId: {},
			OwnerId: {},
			ParentCaseId: {},
			PrimaryContactId: {},
			ProductId: {},
			ResolveBy: {},
			ResponseBy: {},
			SubjectId: {},
			Title: {}
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
	DevKit.FormCase_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			CaseOriginCode: {},
			CaseTypeCode: {},
			CustomerId: {},
			Description: {},
			EntitlementId: {},
			msdyn_IncidentType: {},
			msdyn_iotalert: {},
			OwnerId: {},
			ParentCaseId: {},
			PrimaryContactId: {},
			ProductId: {},
			ResolveBy: {},
			ResponseBy: {},
			SubjectId: {},
			Title: {}
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Incident = {
		CaseOriginCode : {
			Email: 2,
			Facebook: 2483,
			IoT: 700610000,
			Phone: 1,
			Twitter: 3986,
			Web: 3
		},
		CaseTypeCode : {
			Problem: 2,
			Question: 1,
			Request: 3
		},
		ContractServiceLevelCode : {
			Bronze: 3,
			Gold: 1,
			Silver: 2
		},
		CustomerSatisfactionCode : {
			Dissatisfied: 2,
			Neutral: 3,
			Satisfied: 4,
			Very_Dissatisfied: 1,
			Very_Satisfied: 5
		},
		FirstResponseSLAStatus : {
			In_Progress: 1,
			Nearing_Noncompliance: 2,
			Noncompliant: 4,
			Succeeded: 3
		},
		IncidentStageCode : {
			Default_Value: 1
		},
		int_CustomerEffort : {
			High: 121590002,
			Low: 121590000,
			Medium: 121590001
		},
		MessageTypeCode : {
			Private_Message: 1,
			Public_Message: 0
		},
		PriorityCode : {
			High: 1,
			Low: 3,
			Normal: 2
		},
		ResolveBySLAStatus : {
			In_Progress: 1,
			Nearing_Noncompliance: 2,
			Noncompliant: 4,
			Succeeded: 3
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
			Cancelled: 2,
			Resolved: 1
		},
		StatusCode : {
			Cancelled: 6,
			In_Progress: 1,
			Information_Provided: 1000,
			Merged: 2000,
			On_Hold: 2,
			Problem_Solved: 5,
			Researching: 4,
			Waiting_for_Details: 3
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