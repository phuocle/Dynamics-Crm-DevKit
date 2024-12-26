'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyusd_windowroute_Information = function(executionContext, defaultWebResourceName) {
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
			CTISearches: {},
			msdyusd_Action: {},
			msdyusd_Application: {},
			msdyusd_Condition: {},
			msdyusd_DashboardFrame: {},
			msdyusd_Destination: {},
			msdyusd_Direction: {},
			msdyusd_Entity: {},
			msdyusd_EntitySearch: {},
			msdyusd_field: {},
			msdyusd_From: {},
			msdyusd_FromSearch: {},
			msdyusd_HideNavBar: {},
			msdyusd_HideRibbon: {},
			msdyusd_InitiatingActivity: {},
			msdyusd_MultipleMatches: {},
			msdyusd_MultipleMatchesDecision: {},
			msdyusd_name: {},
			msdyusd_NoMatchDecision: {},
			msdyusd_NoMatchesAction: {},
			msdyusd_Order: {},
			msdyusd_RouteType: {},
			msdyusd_showtab: {},
			msdyusd_SingleMatchAction: {},
			msdyusd_SingleMatchDecision: {},
			msdyusd_SourceFrame: {},
			msdyusd_url: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			CTITab: {
				Section: {
					CTI: {},
					MultipleMatchesTab: {},
					NoMatchesTab: {},
					SingleMatchTab: {}
				}
			},
			GeneralTab: {
				Section: {
					_B27D995D_EA0A_4463_9253_92F19878B844_SECTION_2: {}
				}
			},
			ResultTab: {
				Section: {
					EntitySearch: {},
					OptionsSection: {},
					Result: {},
					Tab: {}
				}
			},
			tab_5: {
				Section: {
					tab_5_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			statecode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			CTISearches: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyusd_windowroute_agentscriptaction: {},
			nav_msdyusd_windowroute_ctisearch: {}
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
	OptionSet.msdyusd_windowroute = {
		msdyusd_Action : {
			Create_Session: 803750000,
			Default: 803750004,
			In_Place: 803750005,
			None: 803750003,
			Route_Window: 803750002,
			Show_Outside: 803750001
		},
		msdyusd_Destination : {
			Entity_Search: 803750001,
			Tab: 803750000
		},
		msdyusd_Direction : {
			Both: 2,
			Inbound: 1,
			Outbound: 0
		},
		msdyusd_MultipleMatchesDecision : {
			Create_Session_then_Do_Action: 803750002,
			Do_Action: 803750000,
			Next_Rule: 803750001
		},
		msdyusd_NoMatchDecision : {
			Create_Session_then_Do_Action: 803750002,
			Do_Action: 803750000,
			Next_Rule: 803750001
		},
		msdyusd_RouteType : {
			In_Place: 803750003,
			Menu_Chosen: 803750002,
			OnLoad: 803750001,
			Popup: 803750000
		},
		msdyusd_SingleMatchDecision : {
			Create_Session_Load_Match_then_Do_Action: 803750003,
			Create_Session_then_Do_Action: 803750002,
			Do_Action: 803750000,
			Next_Rule: 803750001
		},
		OwnerIdType : {
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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