'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_socialpost_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			msdyncrm_Attachemnts: {},
			msdyncrm_attachmentname: {},
			msdyncrm_CalendarDisplayOptions: {},
			msdyncrm_linkedInvisibility: {},
			msdyncrm_linkedInvisibility1: {},
			msdyncrm_linkedInvisibility: {},
			msdyncrm_name: {},
			msdyncrm_name1: {},
			msdyncrm_name2: {},
			msdyncrm_networkId: {},
			msdyncrm_networkpages: {},
			msdyncrm_networkpages1: {},
			msdyncrm_postas: {},
			msdyncrm_postas1: {},
			msdyncrm_postattachment: {},
			msdyncrm_postingfrom: {},
			msdyncrm_PostingPeriod: {},
			msdyncrm_postinguser: {},
			msdyncrm_postinguserid: {},
			msdyncrm_poststate: {},
			msdyncrm_poststate1: {},
			msdyncrm_PostText: {},
			msdyncrm_PostText1: {},
			msdyncrm_postUrl: {},
			msdyncrm_socialchannel: {},
			msdyncrm_socialchannel1: {},
			msdyncrm_socialchannel2: {},
			msdyncrm_socialconfiguration: {},
			msdyncrm_socialconfiguration1: {},
			msdyncrm_socialconfiguration2: {},
			msdyncrm_socialpostId: {},
			msdyncrm_StartDate: {},
			msdyncrm_StartDate1: {},
			OwnerId: {},
			PostInsightsCtrl: {},
			ProTipsControl: {},
			SocialPostHostControl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			content_tab: {
				Section: {
					content_tab_section_2: {},
					tab_2_section_1: {}
				}
			},
			general_tab: {
				Section: {
					tab_3_section_1: {},
					tab_3_section_2: {}
				}
			},
			insights_tab: {
				Section: {
					InsightsTab_Audience: {}
				}
			},
			new_content_tab: {
				Section: {
					new_content_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyncrm_name: {},
			msdyncrm_poststate: {},
			msdyncrm_socialchannel: {},
			msdyncrm_StartDate: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdyncrm_msdyncrm_socialpost_msdyncrm_socialpost_Attachemnts: {},
			msdyncrm_postingishts_msdyncrm_socialpost: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSocial_Post_v2 = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_linkedInvisibility: {},
			msdyncrm_name: {},
			msdyncrm_networkpages: {},
			msdyncrm_postas: {},
			msdyncrm_postattachment: {},
			msdyncrm_poststate: {},
			msdyncrm_PostText: {},
			msdyncrm_socialchannel: {},
			msdyncrm_socialconfiguration: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			NewEditorForm: {
				Section: {
					section1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyncrm_msdyncrm_socialpost_msdyncrm_socialpost_Attachemnts: {},
			msdyncrm_postingishts_msdyncrm_socialpost: {}
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
	OptionSet.msdyncrm_socialpost = {
		msdyncrm_linkedInvisibility : {
			Connections: 270100000,
			Public: 270100001
		},
		msdyncrm_postas : {
			Company: 270100001,
			User: 270100000
		},
		msdyncrm_postingfrom : {
			User_0: 270100000,
			User_1: 270100001,
			User_10: 270100010,
			User_2: 270100002,
			User_3: 270100003,
			User_4: 270100004,
			User_5: 270100005,
			User_6: 270100006,
			User_7: 270100007,
			User_8: 270100008,
			User_9: 270100009
		},
		msdyncrm_PostingPeriod : {
			On_demand: 270100003,
			Post_now: 270100000,
			Schedule: 270100002,
			Schedule_later: 270100001
		},
		msdyncrm_poststate : {
			Disconnected: 270100006,
			Draft: 270100000,
			Failed: 270100004,
			Going_live: 270100005,
			Live: 270100002,
			New: 270100003,
			Scheduled: 270100001
		},
		msdyncrm_socialchannel : {
			Facebook: 270100001,
			Instagram: 270100003,
			LinkedIn: 270100002,
			Twitter: 270100000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 2,
			New: 1,
			Published: 3
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