'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_datainsightsandanalyticsfeature_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_enablecsparenthelptext: {},
			msdyn_enableocparenthelptext: {},
			msdyn_enableurtogglehelptext: {},
			msdyn_isenabled: {},
			msdyn_name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_dasfeature_copilot_datainsightsandanalyticsfeatureId: {},
			msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId: {},
			msdyn_dasfeature_dascxp_datainsightsandanalyticsfeatureid: {},
			msdyn_dasfeature_dasforecast_datainsightsandanalyticsfeatureId: {},
			msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid: {},
			msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid: {},
			msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid: {},
			msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId: {},
			msdyn_dasfeature_dasmc_datainsightsandanalyticsfeatureId: {},
			msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid: {},
			msdyn_dasfeature_dasoc_rt_datainsightsandanalyticsfeatureid: {},
			msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid: {},
			msdyn_dasfeature_dassareporting_datainsightsandanalyticsfeatureid: {},
			msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid: {},
			msdyn_dasfeature_dasurrt_datainsightsandanalyticsfeatureId: {},
			msdyn_dataanalyticsdataset_datainsightsandanalyticsfeatureid: {},
			msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId: {},
			msdyn_feature_customizedreport_datainsightsandanalyticsfeatureId: {},
			msdyn_msdyn_dataanalyticsworkspace_datainsightsandanalyticsfeatureid: {},
			msdyn_msdyn_datainsightsandanalyticsfeature_msdyn_forecastsettingsandsummary_diafeatureid: {}
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
	OptionSet.msdyn_datainsightsandanalyticsfeature = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_datasourcemode : {
			DirectQuery: 487460001,
			Import: 487460000
		},
		msdyn_provisionstatus : {
			Not_Provisioned: 192350001,
			Provision_Failed: 192350002,
			Provision_in_Progress: 192350003,
			Provisioned: 192350000
		},
		msdyn_reporttype : {
			Default: 192350000,
			Draft: 192350002,
			Published: 192350001
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