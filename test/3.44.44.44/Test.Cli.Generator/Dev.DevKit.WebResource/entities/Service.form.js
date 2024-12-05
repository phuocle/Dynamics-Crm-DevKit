'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormService_Information = function(executionContext, defaultWebResourceName) {
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
			AnchorOffset: {},
			AnchorOffset1: {},
			Description: {},
			Duration: {},
			Duration1: {},
			Granularity: {},
			Granularity1: {},
			IFRAME_RuleTree: {},
			IFRAME_Scheduling: {},
			InitialStatusCode: {},
			IsSchedulable: {},
			msdyn_RequirementGroupId: {},
			msdyn_SchedulingEngine: {},
			Name: {},
			ResourceSpecId: {},
			ResourceSpecId1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					scheduling: {},
					scheduling_uci: {}
				}
			},
			required_resources: {
				Section: {
					resources: {}
				}
			},
			required_resources_uci: {
				Section: {
					tab_3_section_1: {}
				}
			},
			Resource_Requirements: {
				Section: {
					ResourceRequirement: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			ResourceRequirements: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			adx_inviteredemption_service_serviceid: {},
			adx_portalcomment_service_serviceid: {},
			msdyn_bookingalert_service_serviceid: {},
			msdyn_copilottranscript_service_serviceid: {},
			msdyn_ocliveworkitem_service_serviceid: {},
			msdyn_ocoutboundmessage_service_serviceid: {},
			msdyn_ocsession_service_serviceid: {},
			msdyn_ocvoicemail_service_serviceid: {},
			msfp_alert_service_serviceid: {},
			msfp_surveyinvite_service_serviceid: {},
			msfp_surveyresponse_service_serviceid: {},
			service_accounts: {},
			service_adx_inviteredemptions: {},
			service_adx_portalcomments: {},
			service_appointments: {},
			service_calendar_rules: {},
			service_contacts: {},
			service_emails: {},
			service_incidentresolutions: {},
			service_phonecalls: {},
			service_service_appointments: {},
			service_tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Service = {
		InitialStatusCode : {
			Arrived: 7,
			Canceled: 9,
			Completed: 8,
			In_Progress: 6,
			No_Show: 10,
			Pending: 3,
			Requested: 1,
			Reserved: 4,
			Tentative: 2
		},
		msdyn_SchedulingEngine : {
			Legacy_Scheduling: 0,
			Universal_Resource_Scheduling: 1
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