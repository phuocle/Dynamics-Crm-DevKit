'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_webfile_Information = function(executionContext, defaultWebResourceName) {
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
			mspp_alloworigin: {},
			mspp_cloudblobaddress: {},
			mspp_contentdisposition: {},
			mspp_displaydate: {},
			mspp_displayorder: {},
			mspp_excludefromsearch: {},
			mspp_expirationdate: {},
			mspp_hiddenfromsitemap: {},
			mspp_masterwebfileid: {},
			mspp_name: {},
			mspp_parentpageid: {},
			mspp_partialurl: {},
			mspp_publishingstateid: {},
			mspp_releasedate: {},
			mspp_summary: {},
			mspp_title: {},
			mspp_websiteid: {},
			WebResource_file_attachment_html: {},
			WebResource_mspp_summary_monaco: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_FBAB524E_5B3C_4DB1_8A8A_74366B17D549: {
				Section: {
					_2B6A953D_2F2F_4CA4_8D4E_7637C1C9A42F: {},
					_FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_2: {},
					_FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_3: {},
					_FBAB524E_5B3C_4DB1_8A8A_74366B17D549_SECTION_4: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			mspp_webfile_masterwebfile: {},
			mspp_webfile_shortcut: {},
			mspp_webfile_webpage_image: {}
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
	OptionSet.mspp_webfile = {
		mspp_contentdisposition : {
			noi_tuyen: 756150000,
			tep_dinh_kem: 756150001
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
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