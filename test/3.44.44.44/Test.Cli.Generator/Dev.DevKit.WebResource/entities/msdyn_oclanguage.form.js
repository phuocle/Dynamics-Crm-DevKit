'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_oclanguage_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_languagename: {},
			msdyn_localeid: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage: {},
			msdyn_msdyn_oclanguage_msdyn_ocapplebusinessaccount_ocwidgetlanguage: {},
			msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage: {},
			msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage: {},
			msdyn_msdyn_oclanguage_msdyn_ocgooglebusinessmessagesagentaccount_ocwidgetlanguage: {},
			msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage: {},
			msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid: {},
			msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale: {},
			msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage: {},
			msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage: {},
			msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage: {},
			msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage: {},
			msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage: {},
			msdyn_msdyn_oclanguage_msdyn_ocvoicechannellanguagesetting_languageid: {},
			msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage: {},
			msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage: {},
			msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage: {},
			msdyn_oclanguage_msdyn_oclocalizationdata: {},
			msdyn_oclanguage_msdyn_ocvoice_languageid: {},
			msdyn_ocoutboundmessage_occustomerlocale: {}
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
	OptionSet.msdyn_oclanguage = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
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