'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormUII_hostedapplication_Information = function(executionContext, defaultWebResourceName) {
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
			Languages: {},
			msdyusd_allowmultiplepages: {},
			msdyusd_CRMWindowHostType: {},
			msdyusd_DashboardName: {},
			msdyusd_DisplayName: {},
			msdyusd_HostingType: {},
			msdyusd_MaximumBrowsers: {},
			msdyusd_PanelType: {},
			msdyusd_SavedURL: {},
			msdyusd_ScanforDataParameters: {},
			msdyusd_XAML: {},
			notescontrol: {},
			OwnerId: {},
			UII_AdapterMode: {},
			UII_AdapterType: {},
			UII_AdapterURI: {},
			UII_ApplicationHostingMode: {},
			UII_AssemblyType: {},
			UII_AssemblyURI: {},
			UII_AutomationXml: {},
			UII_DisplayGroup: {},
			UII_ExtensionsXml: {},
			UII_ExternalAppArguments: {},
			UII_ExternalAppURI: {},
			UII_ExternalAppWorkingDirectory: {},
			UII_FindWindowClass: {},
			UII_HostedApplicationType: {},
			UII_ICAFileName: {},
			UII_isAppDynamic: {},
			UII_isAttachInputThread: {},
			UII_isDependentonWorkflow: {},
			UII_isGlobalApplication: {},
			UII_isLimittoProcess: {},
			UII_isNoMessagePump: {},
			UII_isRestoreifMinimized: {},
			UII_isRetainFrameandCaption: {},
			UII_isRetainonTaskbar: {},
			UII_isRetainSystemMenu: {},
			UII_isShowinToolbarDropdown: {},
			UII_isShowMenu: {},
			UII_isUsenewbrowserprocess: {},
			UII_isWebAppUseToolbar: {},
			UII_MainWindowAcquisitionTimeout: {},
			uii_ManageHosting: {},
			uii_ManagePopups: {},
			UII_MinimumSizeX: {},
			UII_MinimumSizeY: {},
			UII_name: {},
			UII_OptimalSizeX: {},
			UII_OptimalSizeY: {},
			UII_ProcessAcquisitionFilename: {},
			UII_remote_ProcessAcquisitionAttempts: {},
			UII_remote_ProcessAcquisitionDelay: {},
			UII_RemoveSizingControls: {},
			UII_SortOrder: {},
			UII_TopLevelWindowCaption: {},
			UII_TopLevelWindowMode: {},
			UII_UserCanClose: {},
			UII_WebAppURL: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_C0330026_8257_4219_8BC2_998017D1B6F7: {
				Section: {
					_04CA7CC4_D509_470C_A65B_76067E429B6E: {},
					_C0330026_8257_4219_8BC2_998017D1B6F7_SECTION_7: {},
					usdpanel: {},
					_4B8ADB5C_C3D8_DE11_A899_00155D289C61: {},
					_BADD49E5_C3D8_DE11_A899_00155D289C61: {},
					_C6D143EB_C3D8_DE11_A899_00155D289C61: {},
					_C7D143EB_C3D8_DE11_A899_00155D289C61: {}
				}
			},
			Hosting: {
				Section: {
					ExternalApplicationSettings: {},
					ApplicationHosting: {},
					AlternateTopLevelWindow: {},
					WebApplicationHomePage: {},
					AssemblyInfo: {},
					DynamicPositioningAttributes: {},
					CitrixApplicationSettings: {}
				}
			},
			TranslationServices: {
				Section: {
					tab_6_section_1: {}
				}
			},
			_9C1ADB13_C3D8_DE11_A899_00155D289C61: {
				Section: {
					_08B2D4AE_C5D8_DE11_A899_00155D289C61: {}
				}
			},
			_B49BA11C_C3D8_DE11_A899_00155D289C61: {
				Section: {
					_4EF881CF_C5D8_DE11_A899_00155D289C61: {}
				}
			},
			_1BECAF09_0B9B_49F1_80DE_C827F0ACF7BF: {
				Section: {
					_10AEA57C_4CBD_4F9D_98FE_1445527E4A45: {}
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
			nav_msdyusd_toolbarstrip_uii_hostedapplication: {}
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
	OptionSet.UII_hostedapplication = {
		msdyusd_CRMWindowHostType : {
			Agent_Scripting: 803750006,
			CCA_Hosted_Application: 803750002,
			Connection_Manager: 803750011,
			CRM_Dialog: 803750000,
			CRM_Page: 803750003,
			CTI_Desktop_Manager: 803750014,
			Debugger: 803750016,
			Global_Manager: 803750001,
			Interactive_Service_Hub_Page: 803750021,
			KM_Control: 803750019,
			Listener_Hosted_Control: 803750020,
			Panel_Layout: 803750015,
			Popup_Notification: 803750022,
			Ribbon_Hosted_Control: 803750007,
			Session_Lines: 803750012,
			Session_Tabs: 803750009,
			Standard_Web_Application: 803750004,
			Todo_List: 803750017,
			Toolbar_Container: 803750008,
			Tree_Bar: 803750013,
			USD_Hosted_Control: 803750005,
			User_Notes: 803750010
		},
		msdyusd_HostingType : {
			Internal_WPF: 803750000,
			IE_Process: 803750001
		},
		msdyusd_PanelType : {
			Standard_Main_Panel: 803750000,
			Ribbon_Main_Panel: 803750003,
			Vertical_Split: 803750004,
			Horizontal_Split: 803750005,
			XAML: 803750002,
			User_Defined: 803750001
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		UII_AdapterMode : {
			Use_No_Adapter: 1,
			Use_Automation_Adapter_HAT: 2,
			Use_Adapter: 3
		},
		UII_ApplicationHostingMode : {
			Host_Outside: 1,
			Use_SetParent: 2,
			Use_Dynamic_Positioning: 3
		},
		UII_HostedApplicationType : {
			Hosted_Control: 1,
			Web_Hosted_Application: 2,
			External_Hosted_Application: 3,
			Remote_Hosted_Application: 4
		},
		UII_TopLevelWindowMode : {
			None: 1,
			Use_VB_Top_Level: 2,
			Use_FindWindow: 3
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