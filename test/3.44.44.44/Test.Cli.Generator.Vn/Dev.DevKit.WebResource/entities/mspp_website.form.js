'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_website_Information = function(executionContext, defaultWebResourceName) {
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
			grid_advancedforms: {},
			grid_basicforms: {},
			grid_childpages: {},
			grid_lists: {},
			grid_pagetemplates: {},
			grid_rootpages: {},
			grid_sitemarkers: {},
			grid_sitesettings: {},
			grid_websiteaccesspermissions: {},
			mspp_defaultlanguage: {},
			mspp_footerwebtemplateid: {},
			mspp_headerwebtemplateid: {},
			mspp_name: {},
			mspp_parentwebsiteid: {},
			mspp_partialurl: {},
			mspp_primarydomainname: {},
			mspp_website_language: {},
			SupportedLanguagesSubgrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_A36E3E44_6924_4722_8D78_44175EAD950B: {
				Section: {
					_139917FD_C4F2_411C_BCAB_D810AD4B3A5A: {},
					_A36E3E44_6924_4722_8D78_44175EAD950B_SECTION_2: {},
					tab_13_section_2: {}
				}
			},
			tab_advancedforms: {
				Section: {
					tab_12_section_3: {}
				}
			},
			tab_basicforms: {
				Section: {
					tab_11_section_2: {}
				}
			},
			tab_childpages: {
				Section: {
					tab_5_section_1: {}
				}
			},
			tab_lists: {
				Section: {
					tab_10_section_2: {}
				}
			},
			tab_pagetemplates: {
				Section: {
					tab_10_section_1: {}
				}
			},
			tab_rootpages: {
				Section: {
					tab_12_section_2: {}
				}
			},
			tab_sitemarkers: {
				Section: {
					tab_9_section_1: {}
				}
			},
			tab_sitesettings: {
				Section: {
					tab_8_section_1: {}
				}
			},
			tab_websiteaccesspermissions: {
				Section: {
					tab_12_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			grid_advancedforms: {},
			grid_basicforms: {},
			grid_childpages: {},
			grid_lists: {},
			grid_pagetemplates: {},
			grid_rootpages: {},
			grid_sitemarkers: {},
			grid_sitesettings: {},
			grid_websiteaccesspermissions: {},
			SupportedLanguagesSubgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			mspp_columnpermissionprofile_website: {},
			mspp_mspp_website_mspp_websitelanguage: {},
			mspp_website_adplacement: {},
			mspp_website_adx_inviteredemptions: {},
			mspp_website_adx_portalcomments: {},
			mspp_website_Appointments: {},
			mspp_website_contentsnippet: {},
			mspp_website_Emails: {},
			mspp_website_entityform: {},
			mspp_website_entitylist: {},
			mspp_website_mspp_entitypermission: {},
			mspp_website_mspp_webtemplate: {},
			mspp_website_pagetemplate: {},
			mspp_website_parentwebsite: {},
			mspp_website_PhoneCalls: {},
			mspp_website_pollplacement: {},
			mspp_website_publishingstate: {},
			mspp_website_publishingstatetransition: {},
			mspp_website_redirect: {},
			mspp_website_shortcut: {},
			mspp_website_sitemarker: {},
			mspp_website_sitesetting: {},
			mspp_website_Tasks: {},
			mspp_website_webfile: {},
			mspp_website_webform: {},
			mspp_website_weblinkset: {},
			mspp_website_webpage: {},
			mspp_website_webpageaccesscontrolrule: {},
			mspp_website_webrole: {},
			mspp_website_websiteaccess: {}
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
	OptionSet.mspp_website = {
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