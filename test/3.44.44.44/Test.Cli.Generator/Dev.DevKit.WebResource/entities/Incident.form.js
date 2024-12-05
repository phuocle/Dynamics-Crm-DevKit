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
			CustomerId1: {},
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
			msdyn_iotalert1: {},
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
			Title: {},
			TraversedPath: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Enhanced_SLA_Details_Tab: {
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
					case_summary_section: {},
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
		var _Case_to_Work_Order_Business_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			CustomerId: {},
			msdyn_IncidentType: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
		var _IoT_Alert_to_Case_Process = {
			CustomerId: {},
			CustomerId_1: {},
			OwnerId: {},
			PrimaryContactId: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _IoT_Alert_to_Case_Process, "header_process_");
		process.IoT_Alert_to_Case_Process = _IoT_Alert_to_Case_Process;
		var _Phone_to_Case_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
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
			Associated_Articles: {},
			Associated_KnowledgeArticles: {},
			ChildCasesGrid: {},
			MergedCasesGrid: {},
			RelatedSolutionGrid: {},
			SLA_KPI_Instances_List: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_incident_msdyn_iottocaseprocess: {},
			incident_adx_inviteredemptions: {},
			incident_adx_portalcomments: {},
			Incident_Appointments: {},
			Incident_Emails: {},
			incident_existingcase: {},
			Incident_IncidentResolutions: {},
			incident_master_incident: {},
			incident_msdyn_bookingalerts: {},
			incident_msdyn_copilottranscripts: {},
			incident_msdyn_ocliveworkitems: {},
			incident_msdyn_ocoutboundmessages: {},
			incident_msdyn_ocsessions: {},
			incident_msdyn_ocvoicemails: {},
			incident_msfp_alerts: {},
			incident_msfp_surveyinvites: {},
			incident_msfp_surveyresponses: {},
			incident_OpportunityCloses: {},
			incident_OrderCloses: {},
			incident_parent_incident: {},
			Incident_Phonecalls: {},
			incident_Posts: {},
			Incident_QueueItem: {},
			incident_QuoteCloses: {},
			Incident_ServiceAppointments: {},
			Incident_Tasks: {},
			incident_topic: {},
			knowledgearticle_incidents: {},
			lk_phonetocaseprocess_incidentid: {},
			msdyn_incident_feedback_context: {},
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_incident_msdyn_caseenrichment_caseid: {},
			msdyn_incident_msdyn_casesuggestion_suggestedentity: {},
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: {},
			msdyn_incident_msdyn_casetopic_incident_incidentid: {},
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: {},
			msdyn_incident_msdyn_inspectioninstance_CaseId: {},
			msdyn_incident_msdyn_intententity_objectid: {},
			msdyn_incident_msdyn_iotalert_Case: {},
			msdyn_incident_msdyn_ocliveworkitem: {},
			msdyn_incident_msdyn_originatingqueue_createdincidentid: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: {},
			msdyn_incident_msdyn_suggestionrequestpayload: {},
			msdyn_incident_msdyn_workorder_ServiceRequest: {},
			msdyn_nextaction_regarding_incident: {},
			msdyn_readtracker_poly_incident: {},
			msdyn_relatedentity_msdyn_entityattachment: {},
			msdyn_swarm_incident: {},
			msdyn_timetracker_regardingentity_Incident: {},
			OriginatingCase_Lead: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormCase_for_Customer_Card = function(executionContext, defaultWebResourceName) {
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
			Title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					general_section_6: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			CustomerId: {},
			msdyn_IncidentType: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
		var _IoT_Alert_to_Case_Process = {
			CustomerId: {},
			CustomerId_1: {},
			OwnerId: {},
			PrimaryContactId: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _IoT_Alert_to_Case_Process, "header_process_");
		process.IoT_Alert_to_Case_Process = _IoT_Alert_to_Case_Process;
		var _Phone_to_Case_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var navigation = {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_incident_msdyn_iottocaseprocess: {},
			incident_adx_inviteredemptions: {},
			incident_adx_portalcomments: {},
			Incident_Appointments: {},
			Incident_Emails: {},
			incident_existingcase: {},
			Incident_IncidentResolutions: {},
			incident_master_incident: {},
			incident_msdyn_bookingalerts: {},
			incident_msdyn_copilottranscripts: {},
			incident_msdyn_ocliveworkitems: {},
			incident_msdyn_ocoutboundmessages: {},
			incident_msdyn_ocsessions: {},
			incident_msdyn_ocvoicemails: {},
			incident_msfp_alerts: {},
			incident_msfp_surveyinvites: {},
			incident_msfp_surveyresponses: {},
			incident_OpportunityCloses: {},
			incident_OrderCloses: {},
			incident_parent_incident: {},
			Incident_Phonecalls: {},
			incident_Posts: {},
			Incident_QueueItem: {},
			incident_QuoteCloses: {},
			Incident_ServiceAppointments: {},
			Incident_Tasks: {},
			incident_topic: {},
			knowledgearticle_incidents: {},
			lk_phonetocaseprocess_incidentid: {},
			msdyn_incident_feedback_context: {},
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_incident_msdyn_caseenrichment_caseid: {},
			msdyn_incident_msdyn_casesuggestion_suggestedentity: {},
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: {},
			msdyn_incident_msdyn_casetopic_incident_incidentid: {},
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: {},
			msdyn_incident_msdyn_inspectioninstance_CaseId: {},
			msdyn_incident_msdyn_intententity_objectid: {},
			msdyn_incident_msdyn_iotalert_Case: {},
			msdyn_incident_msdyn_ocliveworkitem: {},
			msdyn_incident_msdyn_originatingqueue_createdincidentid: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: {},
			msdyn_incident_msdyn_suggestionrequestpayload: {},
			msdyn_incident_msdyn_workorder_ServiceRequest: {},
			msdyn_nextaction_regarding_incident: {},
			msdyn_readtracker_poly_incident: {},
			msdyn_relatedentity_msdyn_entityattachment: {},
			msdyn_swarm_incident: {},
			msdyn_timetracker_regardingentity_Incident: {},
			OriginatingCase_Lead: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
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
			CaseOriginCode1: {},
			CaseTypeCode: {},
			ChildCasesGrid: {},
			CustomerId: {},
			CustomerId1: {},
			CustomerId2: {},
			CustomerId3: {},
			Description: {},
			Description1: {},
			Devices: {},
			EntitlementId: {},
			EntitlementId1: {},
			EscalatedOn: {},
			FirstResponseByKPIId: {},
			FirstResponseSent: {},
			FollowupBy: {},
			InfluenceScore: {},
			IsEscalated: {},
			MergedCasesGrid: {},
			MessageTypeCode: {},
			msdyn_iotalert: {},
			msdyn_iotalert1: {},
			msdyn_iotalert2: {},
			notescontrol: {},
			ParentCaseId: {},
			PrimaryContactId: {},
			ProductId: {},
			ProductId1: {},
			ResolveBy: {},
			ResolveByKPIId: {},
			ResponseBy: {},
			SentimentValue: {},
			SLA_KPI_Instances_List: {},
			SocialProfileId: {},
			SubjectId: {},
			SubjectId1: {},
			SwarmSubgrid: {},
			TicketNumber: {},
			TicketNumber1: {},
			Title: {},
			Title1: {},
			Title2: {},
			TraversedPath: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Enhanced_SLA_Details_Tab: {
				Section: {
					SLAKPIInstances: {}
				}
			},
			CASERELATIONSHIP_TAB: {
				Section: {
					ChildCases: {},
					KnowledgeArticles: {},
					MergedCases: {},
					Solutions: {},
					SwarmSection: {}
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
					copilot_summary_section: {},
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
		var _Case_to_Work_Order_Business_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			CustomerId: {},
			msdyn_IncidentType: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
		var _IoT_Alert_to_Case_Process = {
			CustomerId: {},
			CustomerId_1: {},
			OwnerId: {},
			PrimaryContactId: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _IoT_Alert_to_Case_Process, "header_process_");
		process.IoT_Alert_to_Case_Process = _IoT_Alert_to_Case_Process;
		var _Phone_to_Case_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
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
			Associated_KnowledgeArticles: {},
			ChildCasesGrid: {},
			Devices: {},
			MergedCasesGrid: {},
			SLA_KPI_Instances_List: {},
			SwarmSubgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_incident_msdyn_iottocaseprocess: {},
			incident_adx_inviteredemptions: {},
			incident_adx_portalcomments: {},
			Incident_Appointments: {},
			Incident_Emails: {},
			incident_existingcase: {},
			Incident_IncidentResolutions: {},
			incident_master_incident: {},
			incident_msdyn_bookingalerts: {},
			incident_msdyn_copilottranscripts: {},
			incident_msdyn_ocliveworkitems: {},
			incident_msdyn_ocoutboundmessages: {},
			incident_msdyn_ocsessions: {},
			incident_msdyn_ocvoicemails: {},
			incident_msfp_alerts: {},
			incident_msfp_surveyinvites: {},
			incident_msfp_surveyresponses: {},
			incident_OpportunityCloses: {},
			incident_OrderCloses: {},
			incident_parent_incident: {},
			Incident_Phonecalls: {},
			incident_Posts: {},
			Incident_QueueItem: {},
			incident_QuoteCloses: {},
			Incident_ServiceAppointments: {},
			Incident_Tasks: {},
			incident_topic: {},
			knowledgearticle_incidents: {},
			lk_phonetocaseprocess_incidentid: {},
			msdyn_incident_feedback_context: {},
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_incident_msdyn_caseenrichment_caseid: {},
			msdyn_incident_msdyn_casesuggestion_suggestedentity: {},
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: {},
			msdyn_incident_msdyn_casetopic_incident_incidentid: {},
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: {},
			msdyn_incident_msdyn_inspectioninstance_CaseId: {},
			msdyn_incident_msdyn_intententity_objectid: {},
			msdyn_incident_msdyn_iotalert_Case: {},
			msdyn_incident_msdyn_ocliveworkitem: {},
			msdyn_incident_msdyn_originatingqueue_createdincidentid: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: {},
			msdyn_incident_msdyn_suggestionrequestpayload: {},
			msdyn_incident_msdyn_workorder_ServiceRequest: {},
			msdyn_nextaction_regarding_incident: {},
			msdyn_readtracker_poly_incident: {},
			msdyn_relatedentity_msdyn_entityattachment: {},
			msdyn_swarm_incident: {},
			msdyn_timetracker_regardingentity_Incident: {},
			OriginatingCase_Lead: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
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
			Activities: {},
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
			msdyn_precreateattachmentsid: {},
			notescontrol: {},
			ParentCaseId: {},
			PriorityCode: {},
			ProductId: {},
			ProductSerialNumber: {},
			relatedCases: {},
			ResolveBy: {},
			ResponseBy: {},
			StatusCode: {},
			SubjectId: {},
			SwarmSubgrid: {},
			Title: {},
			TraversedPath: {}
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
					queueitemdetails: {},
					RelatedCases: {},
					SwarmSection: {}
				}
			},
			Summary: {
				Section: {
					Case_Details_Summary: {},
					copilot_summary_section: {},
					dueActivitySection: {},
					TabsControl: {}
				}
			},
			Tab_Attachment: {
				Section: {
					attachmentSection: {}
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
		var _Case_to_Work_Order_Business_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			CustomerId: {},
			msdyn_IncidentType: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
		var _IoT_Alert_to_Case_Process = {
			CustomerId: {},
			CustomerId_1: {},
			OwnerId: {},
			PrimaryContactId: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _IoT_Alert_to_Case_Process, "header_process_");
		process.IoT_Alert_to_Case_Process = _IoT_Alert_to_Case_Process;
		var _Phone_to_Case_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var grid = {
			Activities: {},
			Associated_KnowledgeArticles: {},
			ChildCasesGrid: {},
			MergedCasesGrid: {},
			relatedCases: {},
			SwarmSubgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_incident_msdyn_iottocaseprocess: {},
			incident_adx_inviteredemptions: {},
			incident_adx_portalcomments: {},
			Incident_Appointments: {},
			Incident_Emails: {},
			incident_existingcase: {},
			Incident_IncidentResolutions: {},
			incident_master_incident: {},
			incident_msdyn_bookingalerts: {},
			incident_msdyn_copilottranscripts: {},
			incident_msdyn_ocliveworkitems: {},
			incident_msdyn_ocoutboundmessages: {},
			incident_msdyn_ocsessions: {},
			incident_msdyn_ocvoicemails: {},
			incident_msfp_alerts: {},
			incident_msfp_surveyinvites: {},
			incident_msfp_surveyresponses: {},
			incident_OpportunityCloses: {},
			incident_OrderCloses: {},
			incident_parent_incident: {},
			Incident_Phonecalls: {},
			incident_Posts: {},
			Incident_QueueItem: {},
			incident_QuoteCloses: {},
			Incident_ServiceAppointments: {},
			Incident_Tasks: {},
			incident_topic: {},
			knowledgearticle_incidents: {},
			lk_phonetocaseprocess_incidentid: {},
			msdyn_incident_feedback_context: {},
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_incident_msdyn_caseenrichment_caseid: {},
			msdyn_incident_msdyn_casesuggestion_suggestedentity: {},
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: {},
			msdyn_incident_msdyn_casetopic_incident_incidentid: {},
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: {},
			msdyn_incident_msdyn_inspectioninstance_CaseId: {},
			msdyn_incident_msdyn_intententity_objectid: {},
			msdyn_incident_msdyn_iotalert_Case: {},
			msdyn_incident_msdyn_ocliveworkitem: {},
			msdyn_incident_msdyn_originatingqueue_createdincidentid: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: {},
			msdyn_incident_msdyn_suggestionrequestpayload: {},
			msdyn_incident_msdyn_workorder_ServiceRequest: {},
			msdyn_nextaction_regarding_incident: {},
			msdyn_readtracker_poly_incident: {},
			msdyn_relatedentity_msdyn_entityattachment: {},
			msdyn_swarm_incident: {},
			msdyn_timetracker_regardingentity_Incident: {},
			OriginatingCase_Lead: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEnhanced_full_case_form = function(executionContext, defaultWebResourceName) {
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
			Activities: {},
			case_associations_control: {},
			CaseOriginCode: {},
			CaseTypeCode: {},
			CaseTypeCode1: {},
			CreatedOn: {},
			CustomerId: {},
			Description: {},
			EntitlementId: {},
			EscalatedOn: {},
			IsEscalated: {},
			msdyn_precreateattachmentsid: {},
			msdyn_precreateattachmentsid1: {},
			msdyn_precreatenotesid: {},
			notescontrol: {},
			ParentCaseId: {},
			PriorityCode: {},
			ProductId: {},
			ProductSerialNumber: {},
			ProductSerialNumber1: {},
			slatimer: {},
			StatusCode: {},
			SubjectId: {},
			Title: {},
			TraversedPath: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					attachment: {},
					caseassociation: {},
					copilot_summary_section: {},
					description: {},
					Details: {},
					general_section_10: {},
					notes: {},
					queueitemdetails: {},
					slaTimer: {},
					Timeline: {}
				}
			},
			Tab_Attachment: {
				Section: {
					attachmentSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			StatusCode: {},
			TicketNumber: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			CustomerId: {},
			msdyn_IncidentType: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
		var _IoT_Alert_to_Case_Process = {
			CustomerId: {},
			CustomerId_1: {},
			OwnerId: {},
			PrimaryContactId: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _IoT_Alert_to_Case_Process, "header_process_");
		process.IoT_Alert_to_Case_Process = _IoT_Alert_to_Case_Process;
		var _Phone_to_Case_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var grid = {
			Activities: {},
			case_associations_control: {},
			slatimer: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_incident_msdyn_iottocaseprocess: {},
			incident_adx_inviteredemptions: {},
			incident_adx_portalcomments: {},
			Incident_Appointments: {},
			Incident_Emails: {},
			incident_existingcase: {},
			Incident_IncidentResolutions: {},
			incident_master_incident: {},
			incident_msdyn_bookingalerts: {},
			incident_msdyn_copilottranscripts: {},
			incident_msdyn_ocliveworkitems: {},
			incident_msdyn_ocoutboundmessages: {},
			incident_msdyn_ocsessions: {},
			incident_msdyn_ocvoicemails: {},
			incident_msfp_alerts: {},
			incident_msfp_surveyinvites: {},
			incident_msfp_surveyresponses: {},
			incident_OpportunityCloses: {},
			incident_OrderCloses: {},
			incident_parent_incident: {},
			Incident_Phonecalls: {},
			incident_Posts: {},
			Incident_QueueItem: {},
			incident_QuoteCloses: {},
			Incident_ServiceAppointments: {},
			Incident_Tasks: {},
			incident_topic: {},
			knowledgearticle_incidents: {},
			lk_phonetocaseprocess_incidentid: {},
			msdyn_incident_feedback_context: {},
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_incident_msdyn_caseenrichment_caseid: {},
			msdyn_incident_msdyn_casesuggestion_suggestedentity: {},
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: {},
			msdyn_incident_msdyn_casetopic_incident_incidentid: {},
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: {},
			msdyn_incident_msdyn_inspectioninstance_CaseId: {},
			msdyn_incident_msdyn_intententity_objectid: {},
			msdyn_incident_msdyn_iotalert_Case: {},
			msdyn_incident_msdyn_ocliveworkitem: {},
			msdyn_incident_msdyn_originatingqueue_createdincidentid: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: {},
			msdyn_incident_msdyn_suggestionrequestpayload: {},
			msdyn_incident_msdyn_workorder_ServiceRequest: {},
			msdyn_nextaction_regarding_incident: {},
			msdyn_readtracker_poly_incident: {},
			msdyn_relatedentity_msdyn_entityattachment: {},
			msdyn_swarm_incident: {},
			msdyn_timetracker_regardingentity_Incident: {},
			OriginatingCase_Lead: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEnhanced_quick_case_form = function(executionContext, defaultWebResourceName) {
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
			CustomerId: {},
			Description: {},
			msdyn_precreateattachmentsid: {},
			msdyn_precreatenotesid: {},
			OwnerId: {},
			PriorityCode: {},
			ProductId: {},
			ProductSerialNumber: {},
			StatusCode: {},
			SubjectId: {},
			Title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			attachment: {
				Section: {
					tab_9_section_1: {}
				}
			},
			general: {
				Section: {
					Details: {}
				}
			},
			notes: {
				Section: {
					tab_8_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			PriorityCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			CustomerId: {},
			msdyn_IncidentType: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
		var _IoT_Alert_to_Case_Process = {
			CustomerId: {},
			CustomerId_1: {},
			OwnerId: {},
			PrimaryContactId: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _IoT_Alert_to_Case_Process, "header_process_");
		process.IoT_Alert_to_Case_Process = _IoT_Alert_to_Case_Process;
		var _Phone_to_Case_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var navigation = {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_incident_msdyn_iottocaseprocess: {},
			incident_adx_inviteredemptions: {},
			incident_adx_portalcomments: {},
			Incident_Appointments: {},
			Incident_Emails: {},
			incident_existingcase: {},
			Incident_IncidentResolutions: {},
			incident_master_incident: {},
			incident_msdyn_bookingalerts: {},
			incident_msdyn_copilottranscripts: {},
			incident_msdyn_ocliveworkitems: {},
			incident_msdyn_ocoutboundmessages: {},
			incident_msdyn_ocsessions: {},
			incident_msdyn_ocvoicemails: {},
			incident_msfp_alerts: {},
			incident_msfp_surveyinvites: {},
			incident_msfp_surveyresponses: {},
			incident_OpportunityCloses: {},
			incident_OrderCloses: {},
			incident_parent_incident: {},
			Incident_Phonecalls: {},
			incident_Posts: {},
			Incident_QueueItem: {},
			incident_QuoteCloses: {},
			Incident_ServiceAppointments: {},
			Incident_Tasks: {},
			incident_topic: {},
			knowledgearticle_incidents: {},
			lk_phonetocaseprocess_incidentid: {},
			msdyn_incident_feedback_context: {},
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_incident_msdyn_caseenrichment_caseid: {},
			msdyn_incident_msdyn_casesuggestion_suggestedentity: {},
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: {},
			msdyn_incident_msdyn_casetopic_incident_incidentid: {},
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: {},
			msdyn_incident_msdyn_inspectioninstance_CaseId: {},
			msdyn_incident_msdyn_intententity_objectid: {},
			msdyn_incident_msdyn_iotalert_Case: {},
			msdyn_incident_msdyn_ocliveworkitem: {},
			msdyn_incident_msdyn_originatingqueue_createdincidentid: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: {},
			msdyn_incident_msdyn_suggestionrequestpayload: {},
			msdyn_incident_msdyn_workorder_ServiceRequest: {},
			msdyn_nextaction_regarding_incident: {},
			msdyn_readtracker_poly_incident: {},
			msdyn_relatedentity_msdyn_entityattachment: {},
			msdyn_swarm_incident: {},
			msdyn_timetracker_regardingentity_Incident: {},
			OriginatingCase_Lead: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
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
		var _Case_to_Work_Order_Business_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			CustomerId: {},
			msdyn_IncidentType: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
		var _IoT_Alert_to_Case_Process = {
			CustomerId: {},
			CustomerId_1: {},
			OwnerId: {},
			PrimaryContactId: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _IoT_Alert_to_Case_Process, "header_process_");
		process.IoT_Alert_to_Case_Process = _IoT_Alert_to_Case_Process;
		var _Phone_to_Case_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var navigation = {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_incident_msdyn_iottocaseprocess: {},
			incident_adx_inviteredemptions: {},
			incident_adx_portalcomments: {},
			Incident_Appointments: {},
			Incident_Emails: {},
			incident_existingcase: {},
			Incident_IncidentResolutions: {},
			incident_master_incident: {},
			incident_msdyn_bookingalerts: {},
			incident_msdyn_copilottranscripts: {},
			incident_msdyn_ocliveworkitems: {},
			incident_msdyn_ocoutboundmessages: {},
			incident_msdyn_ocsessions: {},
			incident_msdyn_ocvoicemails: {},
			incident_msfp_alerts: {},
			incident_msfp_surveyinvites: {},
			incident_msfp_surveyresponses: {},
			incident_OpportunityCloses: {},
			incident_OrderCloses: {},
			incident_parent_incident: {},
			Incident_Phonecalls: {},
			incident_Posts: {},
			Incident_QueueItem: {},
			incident_QuoteCloses: {},
			Incident_ServiceAppointments: {},
			Incident_Tasks: {},
			incident_topic: {},
			knowledgearticle_incidents: {},
			lk_phonetocaseprocess_incidentid: {},
			msdyn_incident_feedback_context: {},
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_incident_msdyn_caseenrichment_caseid: {},
			msdyn_incident_msdyn_casesuggestion_suggestedentity: {},
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: {},
			msdyn_incident_msdyn_casetopic_incident_incidentid: {},
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: {},
			msdyn_incident_msdyn_inspectioninstance_CaseId: {},
			msdyn_incident_msdyn_intententity_objectid: {},
			msdyn_incident_msdyn_iotalert_Case: {},
			msdyn_incident_msdyn_ocliveworkitem: {},
			msdyn_incident_msdyn_originatingqueue_createdincidentid: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: {},
			msdyn_incident_msdyn_suggestionrequestpayload: {},
			msdyn_incident_msdyn_workorder_ServiceRequest: {},
			msdyn_nextaction_regarding_incident: {},
			msdyn_readtracker_poly_incident: {},
			msdyn_relatedentity_msdyn_entityattachment: {},
			msdyn_swarm_incident: {},
			msdyn_timetracker_regardingentity_Incident: {},
			OriginatingCase_Lead: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
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
		var _Case_to_Work_Order_Business_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			CustomerId: {},
			msdyn_IncidentType: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
		var _IoT_Alert_to_Case_Process = {
			CustomerId: {},
			CustomerId_1: {},
			OwnerId: {},
			PrimaryContactId: {},
			Title: {}
		}
		devKit.LoadFields(formContext, _IoT_Alert_to_Case_Process, "header_process_");
		process.IoT_Alert_to_Case_Process = _IoT_Alert_to_Case_Process;
		var _Phone_to_Case_Process = {
			CustomerId: {},
			ExistingCase: {},
			OwnerId: {},
			PrimaryContactId: {}
		}
		devKit.LoadFields(formContext, _Phone_to_Case_Process, "header_process_");
		process.Phone_to_Case_Process = _Phone_to_Case_Process;
		form.Process = process;
		var navigation = {
			bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_incident_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_incident_msdyn_iottocaseprocess: {},
			incident_adx_inviteredemptions: {},
			incident_adx_portalcomments: {},
			Incident_Appointments: {},
			Incident_Emails: {},
			incident_existingcase: {},
			Incident_IncidentResolutions: {},
			incident_master_incident: {},
			incident_msdyn_bookingalerts: {},
			incident_msdyn_copilottranscripts: {},
			incident_msdyn_ocliveworkitems: {},
			incident_msdyn_ocoutboundmessages: {},
			incident_msdyn_ocsessions: {},
			incident_msdyn_ocvoicemails: {},
			incident_msfp_alerts: {},
			incident_msfp_surveyinvites: {},
			incident_msfp_surveyresponses: {},
			incident_OpportunityCloses: {},
			incident_OrderCloses: {},
			incident_parent_incident: {},
			Incident_Phonecalls: {},
			incident_Posts: {},
			Incident_QueueItem: {},
			incident_QuoteCloses: {},
			Incident_ServiceAppointments: {},
			Incident_Tasks: {},
			incident_topic: {},
			knowledgearticle_incidents: {},
			lk_phonetocaseprocess_incidentid: {},
			msdyn_incident_feedback_context: {},
			msdyn_incident_msdyn_aicontactsuggestion_sourcerecord: {},
			msdyn_incident_msdyn_caseenrichment_caseid: {},
			msdyn_incident_msdyn_casesuggestion_suggestedentity: {},
			msdyn_incident_msdyn_casesuggestionrequestpayload_caseid: {},
			msdyn_incident_msdyn_casetopic_incident_incidentid: {},
			msdyn_incident_msdyn_federatedarticleincident_IncidentId: {},
			msdyn_incident_msdyn_inspectioninstance_CaseId: {},
			msdyn_incident_msdyn_intententity_objectid: {},
			msdyn_incident_msdyn_iotalert_Case: {},
			msdyn_incident_msdyn_ocliveworkitem: {},
			msdyn_incident_msdyn_originatingqueue_createdincidentid: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestedentity: {},
			msdyn_incident_msdyn_suggestioninteraction_msdyn_suggestionfor: {},
			msdyn_incident_msdyn_suggestionrequestpayload: {},
			msdyn_incident_msdyn_workorder_ServiceRequest: {},
			msdyn_nextaction_regarding_incident: {},
			msdyn_readtracker_poly_incident: {},
			msdyn_relatedentity_msdyn_entityattachment: {},
			msdyn_swarm_incident: {},
			msdyn_timetracker_regardingentity_Incident: {},
			OriginatingCase_Lead: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
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
		CustomerIdType : {
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