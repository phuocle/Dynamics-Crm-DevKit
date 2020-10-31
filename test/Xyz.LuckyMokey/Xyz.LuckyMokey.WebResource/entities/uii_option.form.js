'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formuii_option_Information = function(executionContext, defaultWebResourceName) {
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
			IFRAME_PrivacyHelp: {},
			msdyusd_GlobalOption: {},
			notescontrol: {},
			OwnerId: {},
			uii_name: {},
			uii_value: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_5AD926F2_BA35_49BB_A8E1_5F145D5E93BC: {
				Section: {
					_706FA85F_131A_40EB_814D_5FEBD225D232: {}
				}
			},
			_B1D11343_999F_4087_9639_B174555F8DD1: {
				Section: {
					_B091D713_73A9_4924_A907_F758B24ED473: {}
				}
			},
			_90B52AA5_E49E_48DF_B94F_D75C1FC1A284: {
				Section: {
					_9E1248BB_174F_4004_AA6A_1A1CD184AC5D: {}
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
		var quickForm = {

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
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.uii_option = {
		msdyusd_GlobalOption : {
			ClientCacheVersionNumber: 100000000,
			CRM_UI_Base_Url: 100000001,
			HelpImproveUSD: 100000002,
			maxNumberOfSessions: 100000003,
			Others: 1000000040,
			ProcessTerminationThreshold: 100000004,
			ShowScriptErrors: 100000005,
			IEProcessKeyboardShortcut: 100000006
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