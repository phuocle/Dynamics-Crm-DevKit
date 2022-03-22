'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.UII_hostedapplicationApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
				}
				if (isMultiOptionSet) {
					return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
				}
				return entity[logicalName + f];
			};
			var getValue = function () {
				if (entity[logicalName] === undefined || entity[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName];
					}
					return null;
				}
				if (isMultiOptionSet) {
					return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
				}
				return entity[logicalName];
			};
			var setValue = function (value) {
				if (isMultiOptionSet) value = value.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		var _uii_hostedapplication = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyusd_allowmultiplepages: { a: 'msdyusd_allowmultiplepages' },
			msdyusd_APIVersion: { a: 'msdyusd_apiversion' },
			msdyusd_AutoLaunch: { a: 'msdyusd_autolaunch' },
			msdyusd_CifUrl: { a: 'msdyusd_cifurl' },
			msdyusd_CRMWindowHostType: { a: 'msdyusd_crmwindowhosttype' },
			msdyusd_CustomParameters: { a: 'msdyusd_customparameters' },
			msdyusd_DashboardName: { a: 'msdyusd_dashboardname' },
			msdyusd_DisplayName: { a: 'msdyusd_displayname' },
			msdyusd_HostingType: { a: 'msdyusd_hostingtype' },
			msdyusd_MaximumBrowsers: { a: 'msdyusd_maximumbrowsers' },
			msdyusd_PanelType: { a: 'msdyusd_paneltype' },
			msdyusd_prefetchdata: { a: 'msdyusd_prefetchdata' },
			msdyusd_SavedURL: { a: 'msdyusd_savedurl' },
			msdyusd_ScanforDataParameters: { a: 'msdyusd_scanfordataparameters' },
			msdyusd_SpecifyURL: { a: 'msdyusd_specifyurl' },
			msdyusd_TrustedDomain: { a: 'msdyusd_trusteddomain' },
			msdyusd_XAML: { a: 'msdyusd_xaml' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UII_AdapterMode: { a: 'uii_adaptermode' },
			UII_AdapterType: { a: 'uii_adaptertype' },
			UII_AdapterURI: { a: 'uii_adapteruri' },
			UII_ApplicationHostingMode: { a: 'uii_applicationhostingmode' },
			UII_AssemblyType: { a: 'uii_assemblytype' },
			UII_AssemblyURI: { a: 'uii_assemblyuri' },
			UII_AutomationXml: { a: 'uii_automationxml' },
			UII_DisplayGroup: { a: 'uii_displaygroup' },
			UII_ExtensionsXml: { a: 'uii_extensionsxml' },
			UII_ExternalAppArguments: { a: 'uii_externalapparguments' },
			UII_ExternalAppURI: { a: 'uii_externalappuri' },
			UII_ExternalAppWorkingDirectory: { a: 'uii_externalappworkingdirectory' },
			UII_FindWindowClass: { a: 'uii_findwindowclass' },
			UII_hostedapplicationId: { a: 'uii_hostedapplicationid' },
			UII_HostedApplicationType: { a: 'uii_hostedapplicationtype' },
			UII_ICAFileName: { a: 'uii_icafilename' },
			UII_isAppDynamic: { a: 'uii_isappdynamic' },
			UII_isAttachInputThread: { a: 'uii_isattachinputthread' },
			UII_isAutoSignOn: { a: 'uii_isautosignon' },
			UII_isDependentonWorkflow: { a: 'uii_isdependentonworkflow' },
			UII_isGlobalApplication: { a: 'uii_isglobalapplication' },
			UII_isLimittoProcess: { a: 'uii_islimittoprocess' },
			UII_isNoMessagePump: { a: 'uii_isnomessagepump' },
			UII_isRestoreifMinimized: { a: 'uii_isrestoreifminimized' },
			UII_isRetainFrameandCaption: { a: 'uii_isretainframeandcaption' },
			UII_isRetainonTaskbar: { a: 'uii_isretainontaskbar' },
			UII_isRetainSystemMenu: { a: 'uii_isretainsystemmenu' },
			UII_isShowinToolbarDropdown: { a: 'uii_isshowintoolbardropdown' },
			UII_isShowMenu: { a: 'uii_isshowmenu' },
			UII_isUsenewbrowserprocess: { a: 'uii_isusenewbrowserprocess' },
			UII_isWebAppUseToolbar: { a: 'uii_iswebappusetoolbar' },
			UII_MainWindowAcquisitionTimeout: { a: 'uii_mainwindowacquisitiontimeout' },
			uii_managedApplication: { a: 'uii_managedapplication' },
			uii_ManageHosting: { a: 'uii_managehosting' },
			uii_ManagePopups: { a: 'uii_managepopups' },
			UII_MinimumSizeX: { a: 'uii_minimumsizex' },
			UII_MinimumSizeY: { a: 'uii_minimumsizey' },
			UII_name: { a: 'uii_name' },
			UII_OptimalSizeX: { a: 'uii_optimalsizex' },
			UII_OptimalSizeY: { a: 'uii_optimalsizey' },
			UII_ProcessAcquisitionFilename: { a: 'uii_processacquisitionfilename' },
			UII_remote_ProcessAcquisitionAttempts: { a: 'uii_remote_processacquisitionattempts' },
			UII_remote_ProcessAcquisitionDelay: { a: 'uii_remote_processacquisitiondelay' },
			UII_RemoveSizingControls: { a: 'uii_removesizingcontrols' },
			UII_SortOrder: { a: 'uii_sortorder' },
			UII_TopLevelWindowCaption: { a: 'uii_toplevelwindowcaption' },
			UII_TopLevelWindowMode: { a: 'uii_toplevelwindowmode' },
			UII_UserCanClose: { a: 'uii_usercanclose' },
			UII_WebAppURL: { a: 'uii_webappurl' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var uii_hostedapplication = {};
		uii_hostedapplication.ODataEntity = e;
		uii_hostedapplication.FormattedValue = {};
		for (var field in _uii_hostedapplication) {
			var a = _uii_hostedapplication[field].a;
			var b = _uii_hostedapplication[field].b;
			var c = _uii_hostedapplication[field].c;
			var d = _uii_hostedapplication[field].d;
			var g = _uii_hostedapplication[field].g;
			var r = _uii_hostedapplication[field].r;
			webApiField(uii_hostedapplication, field, e, a, b, c, d, r, u, g);
		}
		uii_hostedapplication.Entity = u;
		uii_hostedapplication.EntityName = 'uii_hostedapplication';
		uii_hostedapplication.EntityCollectionName = 'uii_hostedapplications';
		uii_hostedapplication['@odata.etag'] = e['@odata.etag'];
		uii_hostedapplication.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		uii_hostedapplication.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return uii_hostedapplication;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.UII_hostedapplication = {
		msdyusd_APIVersion : {
			_10: 100000000
		},
		msdyusd_CRMWindowHostType : {
			Agent_Scripting: 803750006,
			CCA_Hosted_Application: 803750002,
			Channel_Integration_Framework: 803750025,
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
			Unified_Interface_KM_Control: 803750024,
			Unified_Interface_Page: 803750023,
			USD_Hosted_Control: 803750005,
			User_Notes: 803750010
		},
		msdyusd_HostingType : {
			Chrome_Process: 803750003,
			Edge_Process: 803750002,
			IE_Process: 803750001,
			Internal_WPF: 803750000
		},
		msdyusd_PanelType : {
			Horizontal_Split: 803750005,
			Ribbon_Main_Panel: 803750003,
			Standard_Main_Panel: 803750000,
			User_Defined: 803750001,
			Vertical_Split: 803750004,
			XAML: 803750002
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
			Use_Adapter: 3,
			Use_Automation_Adapter_HAT: 2,
			Use_No_Adapter: 1
		},
		UII_ApplicationHostingMode : {
			Host_Outside: 1,
			Use_Dynamic_Positioning: 3,
			Use_SetParent: 2
		},
		UII_HostedApplicationType : {
			External_Hosted_Application: 3,
			Hosted_Control: 1,
			Remote_Hosted_Application: 4,
			Web_Hosted_Application: 2
		},
		UII_TopLevelWindowMode : {
			None: 1,
			Use_FindWindow: 3,
			Use_VB_Top_Level: 2
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