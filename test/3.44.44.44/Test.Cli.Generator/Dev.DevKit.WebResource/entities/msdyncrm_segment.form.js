'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_segment_Information = function(executionContext, defaultWebResourceName) {
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
			CustomerJourneyInsightsCtrl: {},
			LinkedInAudienceWizard: {},
			MembersControl: {},
			ModifiedOn: {},
			msdyncrm_description: {},
			msdyncrm_externalsegmenturl: {},
			msdyncrm_externalsource: {},
			msdyncrm_lastevaluationtime: {},
			msdyncrm_lastupdatedtime: {},
			msdyncrm_nextevaluation: {},
			msdyncrm_scope: {},
			msdyncrm_segmentevaluationtype: {},
			msdyncrm_segmentfilterquery: {},
			msdyncrm_segmentmemberids: {},
			msdyncrm_segmentname: {},
			msdyncrm_segmentname1: {},
			msdyncrm_segmentnameview: {},
			msdyncrm_segmentquery: {},
			msdyncrm_segmentquery1: {},
			msdyncrm_segmentqueryname: {},
			msdyncrm_segmentrefreshrateintervalminutes: {},
			msdyncrm_segmentsize: {},
			msdyncrm_SegmentTemplate: {},
			msdyncrm_segmenttimezone: {},
			msdyncrm_segmenttype: {},
			OwnerId: {},
			RelatedCustomerJourneys: {},
			statecode: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			definition_tab: {
				Section: {
					_65A9C7F2_83F0_4388_8364_6F3BA63B773A_SECTION_2: {}
				}
			},
			general_tab: {
				Section: {
					section_customerjourneys_using_segment: {}
				}
			},
			insights_plana_tab: {
				Section: {
					_AE2AF4DC_E077_4A23_8BFA_5D35648D178C_SECTION_4: {}
				}
			},
			insights_tab: {
				Section: {
					InsightsTab_SegmentMembersOverTime: {}
				}
			},
			LinkedInAudienceTab: {
				Section: {
					tab_linkedin_section: {}
				}
			},
			members_tab: {
				Section: {
					_2DEE70B4_EEE0_42A7_8CCA_E15097F16981_SECTION_3: {},
					_77E78764_16EF_4EBF_92CA_1779521FBB3B_SECTION_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyncrm_segmentname: {},
			msdyncrm_segmentsize: {},
			msdyncrm_segmenttype: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdyncrm_msdyncrm_segment_contact: {},
			msdyncrm_msdyncrm_segment_msdyncrm_customerjourney_SuppressionSegmentId: {},
			msdyncrm_msdyncrm_segment_msdyncrm_linkedinaudience_segment: {},
			msdyncrm_msdyncrm_segment_msdyncrm_segmentactivity_SegmentID: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormNew_Static_Segment = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_description: {},
			msdyncrm_scope: {},
			msdyncrm_segmentname: {},
			msdyncrm_segmenttimezone: {},
			msdyncrm_segmenttype: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general_tab: {
				Section: {
					general_section: {}
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
	DevKit.Formmsdyncrm_segment_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_description: {},
			msdyncrm_segmentfilterquery: {},
			msdyncrm_segmentmemberids: {},
			msdyncrm_segmentname: {},
			msdyncrm_segmentquery: {},
			msdyncrm_segmentqueryname: {},
			msdyncrm_segmenttype: {},
			OwnerId: {}
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
	OptionSet.msdyncrm_segment = {
		msdyncrm_externalsource : {
			Customer_Insight: 192350000
		},
		msdyncrm_querytype : {
			Interaction_based: 192350000,
			Profile_based: 192350001
		},
		msdyncrm_scope : {
			Business_unit: 270100001,
			Organization: 270100000
		},
		msdyncrm_segmentactivationstatus : {
			Active: 192350000,
			Disabled: 192350001
		},
		msdyncrm_segmenttype : {
			Compound_segment: 192350002,
			Dynamic_segment: 192350000,
			Static_segment: 192350001
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 192350000,
			Error: 192350005,
			Expired: 192350004,
			Going_live: 192350006,
			Live: 192350001,
			Live_editable: 192350003,
			Stopped: 192350002,
			Stopping: 192350007
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