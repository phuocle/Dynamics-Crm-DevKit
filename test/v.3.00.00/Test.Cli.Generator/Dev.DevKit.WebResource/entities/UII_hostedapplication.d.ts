﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormUII_hostedapplication_Information {
		interface tab__1BECAF09_0B9B_49F1_80DE_C827F0ACF7BF_Sections {
			_10AEA57C_4CBD_4F9D_98FE_1445527E4A45: DevKit.Controls.Section;
		}
		interface tab__9C1ADB13_C3D8_DE11_A899_00155D289C61_Sections {
			_08B2D4AE_C5D8_DE11_A899_00155D289C61: DevKit.Controls.Section;
		}
		interface tab__B49BA11C_C3D8_DE11_A899_00155D289C61_Sections {
			_4EF881CF_C5D8_DE11_A899_00155D289C61: DevKit.Controls.Section;
		}
		interface tab__C0330026_8257_4219_8BC2_998017D1B6F7_Sections {
			_04CA7CC4_D509_470C_A65B_76067E429B6E: DevKit.Controls.Section;
			_4B8ADB5C_C3D8_DE11_A899_00155D289C61: DevKit.Controls.Section;
			_BADD49E5_C3D8_DE11_A899_00155D289C61: DevKit.Controls.Section;
			_C0330026_8257_4219_8BC2_998017D1B6F7_SECTION_7: DevKit.Controls.Section;
			_C6D143EB_C3D8_DE11_A899_00155D289C61: DevKit.Controls.Section;
			_C7D143EB_C3D8_DE11_A899_00155D289C61: DevKit.Controls.Section;
			CIFConfiguration: DevKit.Controls.Section;
			usdpanel: DevKit.Controls.Section;
		}
		interface tab_Hosting_Sections {
			AlternateTopLevelWindow: DevKit.Controls.Section;
			ApplicationHosting: DevKit.Controls.Section;
			AssemblyInfo: DevKit.Controls.Section;
			CitrixApplicationSettings: DevKit.Controls.Section;
			DynamicPositioningAttributes: DevKit.Controls.Section;
			ExternalApplicationSettings: DevKit.Controls.Section;
			WebApplicationHomePage: DevKit.Controls.Section;
		}
		interface tab_TranslationServices_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab__1BECAF09_0B9B_49F1_80DE_C827F0ACF7BF extends DevKit.Controls.ITab {
			Section: tab__1BECAF09_0B9B_49F1_80DE_C827F0ACF7BF_Sections;
		}
		interface tab__9C1ADB13_C3D8_DE11_A899_00155D289C61 extends DevKit.Controls.ITab {
			Section: tab__9C1ADB13_C3D8_DE11_A899_00155D289C61_Sections;
		}
		interface tab__B49BA11C_C3D8_DE11_A899_00155D289C61 extends DevKit.Controls.ITab {
			Section: tab__B49BA11C_C3D8_DE11_A899_00155D289C61_Sections;
		}
		interface tab__C0330026_8257_4219_8BC2_998017D1B6F7 extends DevKit.Controls.ITab {
			Section: tab__C0330026_8257_4219_8BC2_998017D1B6F7_Sections;
		}
		interface tab_Hosting extends DevKit.Controls.ITab {
			Section: tab_Hosting_Sections;
		}
		interface tab_TranslationServices extends DevKit.Controls.ITab {
			Section: tab_TranslationServices_Sections;
		}
		interface Tabs {
			_1BECAF09_0B9B_49F1_80DE_C827F0ACF7BF: tab__1BECAF09_0B9B_49F1_80DE_C827F0ACF7BF;
			_9C1ADB13_C3D8_DE11_A899_00155D289C61: tab__9C1ADB13_C3D8_DE11_A899_00155D289C61;
			_B49BA11C_C3D8_DE11_A899_00155D289C61: tab__B49BA11C_C3D8_DE11_A899_00155D289C61;
			_C0330026_8257_4219_8BC2_998017D1B6F7: tab__C0330026_8257_4219_8BC2_998017D1B6F7;
			Hosting: tab_Hosting;
			TranslationServices: tab_TranslationServices;
		}
		interface Body {
			Tab: Tabs;
			msdyusd_allowmultiplepages: DevKit.Controls.Boolean;
			msdyusd_APIVersion: DevKit.Controls.OptionSet;
			msdyusd_CifUrl: DevKit.Controls.String;
			msdyusd_CRMWindowHostType: DevKit.Controls.OptionSet;
			msdyusd_CustomParameters: DevKit.Controls.String;
			msdyusd_DashboardName: DevKit.Controls.String;
			msdyusd_DisplayName: DevKit.Controls.String;
			msdyusd_HostingType: DevKit.Controls.OptionSet;
			/** Number of browser instances available within this control before the user is prompted that they hit the limit. (2-20 are valid) */
			msdyusd_MaximumBrowsers: DevKit.Controls.Integer;
			msdyusd_PanelType: DevKit.Controls.OptionSet;
			/** Enable or disable pre-fetching of entity data */
			msdyusd_prefetchdata: DevKit.Controls.Boolean;
			msdyusd_SavedURL: DevKit.Controls.String;
			msdyusd_ScanforDataParameters: DevKit.Controls.Boolean;
			msdyusd_TrustedDomain: DevKit.Controls.String;
			msdyusd_XAML: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Determines the Adapter Mode */
			UII_AdapterMode: DevKit.Controls.OptionSet;
			/** Determines the Adapter Type information */
			UII_AdapterType: DevKit.Controls.String;
			/** URI of Adapter . */
			UII_AdapterURI: DevKit.Controls.String;
			/** Determines the Hosting Mode for the Hosted Application */
			UII_ApplicationHostingMode: DevKit.Controls.OptionSet;
			/** Holds Assembly Type information. */
			UII_AssemblyType: DevKit.Controls.String;
			/** Holds Assembly URI */
			UII_AssemblyURI: DevKit.Controls.String;
			/** Stores the Automation Bindings information */
			UII_AutomationXml: DevKit.Controls.String;
			/** Determines with Display Group Panel the application needs to be displayed. */
			UII_DisplayGroup: DevKit.Controls.String;
			/** Stores the Extension Xml file which capture any additional info with the Hosted Application Entity doent allow to enter. */
			UII_ExtensionsXml: DevKit.Controls.String;
			/** Holds the Arguments for External App Settings */
			UII_ExternalAppArguments: DevKit.Controls.String;
			/** Holds the External Application URI . */
			UII_ExternalAppURI: DevKit.Controls.String;
			/** Working Directory of External Application */
			UII_ExternalAppWorkingDirectory: DevKit.Controls.String;
			/** FindWindow class to find the Top Level Window */
			UII_FindWindowClass: DevKit.Controls.String;
			/** Determines the Type of Hosted Application */
			UII_HostedApplicationType: DevKit.Controls.OptionSet;
			/** Holds the ICA File Path for the Citrix Application */
			UII_ICAFileName: DevKit.Controls.String;
			/** Determines if the Hosted Application is a Dynamic Application */
			UII_isAppDynamic: DevKit.Controls.Boolean;
			/** Determines if Attach Input Thread for the Application Process. */
			UII_isAttachInputThread: DevKit.Controls.Boolean;
			/** Determines the dependency with Workflow */
			UII_isDependentonWorkflow: DevKit.Controls.Boolean;
			/** Determines if the application is  Global Application */
			UII_isGlobalApplication: DevKit.Controls.Boolean;
			/** Top Level Window is limit to current Process. */
			UII_isLimittoProcess: DevKit.Controls.Boolean;
			/** Determines if Message Pump is set for the Hosted Application */
			UII_isNoMessagePump: DevKit.Controls.Boolean;
			/** Restore is Minimized */
			UII_isRestoreifMinimized: DevKit.Controls.Boolean;
			/** For Dynamic Positioned App, this setting determines the Frame and caption retainment */
			UII_isRetainFrameandCaption: DevKit.Controls.Boolean;
			/** To Retain on Taskbar */
			UII_isRetainonTaskbar: DevKit.Controls.Boolean;
			/** For Dynamic Positioned Application , determines if System Menu needs to be retained. */
			UII_isRetainSystemMenu: DevKit.Controls.Boolean;
			/** Determines if the Hosted Application need to be displayed in the Toolbar drop down list. */
			UII_isShowinToolbarDropdown: DevKit.Controls.Boolean;
			/** Determines if Hosted Application can SHow Menu . */
			UII_isShowMenu: DevKit.Controls.Boolean;
			/** Determines if new browser process for every instance. */
			UII_isUsenewbrowserprocess: DevKit.Controls.Boolean;
			/** Determines if the webapplication toolbar is enabled. */
			UII_isWebAppUseToolbar: DevKit.Controls.Boolean;
			/** Determines the Main Window Acquisition time for the Hosted Application */
			UII_MainWindowAcquisitionTimeout: DevKit.Controls.Integer;
			/** Check this option to manage the hosting of application using automations. */
			uii_ManageHosting: DevKit.Controls.Boolean;
			/** Check this option to handle the pop ups using automations. */
			uii_ManagePopups: DevKit.Controls.Boolean;
			/** X co-ordinate of Minimum Size */
			UII_MinimumSizeX: DevKit.Controls.Integer;
			/** Y co-ordinate of Minimum Size */
			UII_MinimumSizeY: DevKit.Controls.Integer;
			/** Hosted Application Name. */
			UII_name: DevKit.Controls.String;
			/** X co-ordinate of Optimal Size */
			UII_OptimalSizeX: DevKit.Controls.Integer;
			/** Y co-ordinate of Optimal Size */
			UII_OptimalSizeY: DevKit.Controls.Integer;
			/** Process Acquisition FileName for Remote Application */
			UII_ProcessAcquisitionFilename: DevKit.Controls.String;
			/** Remote Server Side Process Acquisition Attempts */
			UII_remote_ProcessAcquisitionAttempts: DevKit.Controls.Integer;
			/** Remote Server Side Process Acquisition Delay */
			UII_remote_ProcessAcquisitionDelay: DevKit.Controls.Integer;
			/** For Dynamic Positioned Application , Determines the existance of Sizing controls */
			UII_RemoveSizingControls: DevKit.Controls.Boolean;
			/** Holds Sorting Order Value for the Hosted Application. */
			UII_SortOrder: DevKit.Controls.Integer;
			/** Caption to identify the Top Level Window */
			UII_TopLevelWindowCaption: DevKit.Controls.String;
			/** Determines the mode to find the Top Level Window */
			UII_TopLevelWindowMode: DevKit.Controls.OptionSet;
			/** Determines if the user can close the Hosted Application */
			UII_UserCanClose: DevKit.Controls.Boolean;
			/** Holds the Web Application URL */
			UII_WebAppURL: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the UII Hosted Application */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyusd_toolbarstrip_uii_hostedapplication: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Languages: DevKit.Controls.Grid;
		}
	}
	class FormUII_hostedapplication_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form UII_hostedapplication_Information */
		Body: DevKit.FormUII_hostedapplication_Information.Body;
		/** The Footer section of form UII_hostedapplication_Information */
		Footer: DevKit.FormUII_hostedapplication_Information.Footer;
		/** The Navigation of form UII_hostedapplication_Information */
		Navigation: DevKit.FormUII_hostedapplication_Information.Navigation;
		/** The Process of form UII_hostedapplication_Information */
		Process: DevKit.FormUII_hostedapplication_Information.Process;
		/** The Grid of form UII_hostedapplication_Information */
		Grid: DevKit.FormUII_hostedapplication_Information.Grid;
		/** The SidePanes of form UII_hostedapplication_Information */
		SidePanes: DevKit.SidePanes;
	}
	class UII_hostedapplicationApi {
		/**
		* DynamicsCrm.DevKit UII_hostedapplicationApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdyusd_allowmultiplepages: boolean;
		msdyusd_APIVersion: OptionSet.UII_hostedapplication.msdyusd_APIVersion;
		msdyusd_AutoLaunch: boolean;
		msdyusd_CifUrl: string;
		msdyusd_CRMWindowHostType: OptionSet.UII_hostedapplication.msdyusd_CRMWindowHostType;
		msdyusd_CustomParameters: string;
		msdyusd_DashboardName: string;
		msdyusd_DisplayName: string;
		msdyusd_HostingType: OptionSet.UII_hostedapplication.msdyusd_HostingType;
		/** Number of browser instances available within this control before the user is prompted that they hit the limit. (2-20 are valid) */
		msdyusd_MaximumBrowsers: number;
		msdyusd_PanelType: OptionSet.UII_hostedapplication.msdyusd_PanelType;
		/** Enable or disable pre-fetching of entity data */
		msdyusd_prefetchdata: boolean;
		msdyusd_SavedURL: string;
		msdyusd_ScanforDataParameters: boolean;
		msdyusd_SpecifyURL: boolean;
		msdyusd_TrustedDomain: string;
		msdyusd_XAML: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the UII Hosted Application */
		statecode: OptionSet.UII_hostedapplication.statecode;
		/** Reason for the status of the UII Hosted Application */
		statuscode: OptionSet.UII_hostedapplication.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Determines the Adapter Mode */
		UII_AdapterMode: OptionSet.UII_hostedapplication.UII_AdapterMode;
		/** Determines the Adapter Type information */
		UII_AdapterType: string;
		/** URI of Adapter . */
		UII_AdapterURI: string;
		/** Determines the Hosting Mode for the Hosted Application */
		UII_ApplicationHostingMode: OptionSet.UII_hostedapplication.UII_ApplicationHostingMode;
		/** Holds Assembly Type information. */
		UII_AssemblyType: string;
		/** Holds Assembly URI */
		UII_AssemblyURI: string;
		/** Stores the Automation Bindings information */
		UII_AutomationXml: string;
		/** Determines with Display Group Panel the application needs to be displayed. */
		UII_DisplayGroup: string;
		/** Stores the Extension Xml file which capture any additional info with the Hosted Application Entity doent allow to enter. */
		UII_ExtensionsXml: string;
		/** Holds the Arguments for External App Settings */
		UII_ExternalAppArguments: string;
		/** Holds the External Application URI . */
		UII_ExternalAppURI: string;
		/** Working Directory of External Application */
		UII_ExternalAppWorkingDirectory: string;
		/** FindWindow class to find the Top Level Window */
		UII_FindWindowClass: string;
		/** Unique identifier for entity instances */
		UII_hostedapplicationId: string;
		/** Determines the Type of Hosted Application */
		UII_HostedApplicationType: OptionSet.UII_hostedapplication.UII_HostedApplicationType;
		/** Holds the ICA File Path for the Citrix Application */
		UII_ICAFileName: string;
		/** Determines if the Hosted Application is a Dynamic Application */
		UII_isAppDynamic: boolean;
		/** Determines if Attach Input Thread for the Application Process. */
		UII_isAttachInputThread: boolean;
		/** Enable/Disable Auto Sign On feature for the Hosted Application */
		UII_isAutoSignOn: boolean;
		/** Determines the dependency with Workflow */
		UII_isDependentonWorkflow: boolean;
		/** Determines if the application is  Global Application */
		UII_isGlobalApplication: boolean;
		/** Top Level Window is limit to current Process. */
		UII_isLimittoProcess: boolean;
		/** Determines if Message Pump is set for the Hosted Application */
		UII_isNoMessagePump: boolean;
		/** Restore is Minimized */
		UII_isRestoreifMinimized: boolean;
		/** For Dynamic Positioned App, this setting determines the Frame and caption retainment */
		UII_isRetainFrameandCaption: boolean;
		/** To Retain on Taskbar */
		UII_isRetainonTaskbar: boolean;
		/** For Dynamic Positioned Application , determines if System Menu needs to be retained. */
		UII_isRetainSystemMenu: boolean;
		/** Determines if the Hosted Application need to be displayed in the Toolbar drop down list. */
		UII_isShowinToolbarDropdown: boolean;
		/** Determines if Hosted Application can SHow Menu . */
		UII_isShowMenu: boolean;
		/** Determines if new browser process for every instance. */
		UII_isUsenewbrowserprocess: boolean;
		/** Determines if the webapplication toolbar is enabled. */
		UII_isWebAppUseToolbar: boolean;
		/** Determines the Main Window Acquisition time for the Hosted Application */
		UII_MainWindowAcquisitionTimeout: number;
		/** This application life cycle will be managed through automations. */
		uii_managedApplication: boolean;
		/** Check this option to manage the hosting of application using automations. */
		uii_ManageHosting: boolean;
		/** Check this option to handle the pop ups using automations. */
		uii_ManagePopups: boolean;
		/** X co-ordinate of Minimum Size */
		UII_MinimumSizeX: number;
		/** Y co-ordinate of Minimum Size */
		UII_MinimumSizeY: number;
		/** Hosted Application Name. */
		UII_name: string;
		/** X co-ordinate of Optimal Size */
		UII_OptimalSizeX: number;
		/** Y co-ordinate of Optimal Size */
		UII_OptimalSizeY: number;
		/** Process Acquisition FileName for Remote Application */
		UII_ProcessAcquisitionFilename: string;
		/** Remote Server Side Process Acquisition Attempts */
		UII_remote_ProcessAcquisitionAttempts: number;
		/** Remote Server Side Process Acquisition Delay */
		UII_remote_ProcessAcquisitionDelay: number;
		/** For Dynamic Positioned Application , Determines the existance of Sizing controls */
		UII_RemoveSizingControls: boolean;
		/** Holds Sorting Order Value for the Hosted Application. */
		UII_SortOrder: number;
		/** Caption to identify the Top Level Window */
		UII_TopLevelWindowCaption: string;
		/** Determines the mode to find the Top Level Window */
		UII_TopLevelWindowMode: OptionSet.UII_hostedapplication.UII_TopLevelWindowMode;
		/** Determines if the user can close the Hosted Application */
		UII_UserCanClose: boolean;
		/** Holds the Web Application URL */
		UII_WebAppURL: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace UII_hostedapplication {
		enum msdyusd_APIVersion {
			/** 100000000 */
			_10
		}
		enum msdyusd_CRMWindowHostType {
			/** 803750006 */
			Agent_Scripting,
			/** 803750002 */
			CCA_Hosted_Application,
			/** 803750025 */
			Channel_Integration_Framework,
			/** 803750011 */
			Connection_Manager,
			/** 803750000 */
			CRM_Dialog,
			/** 803750003 */
			CRM_Page,
			/** 803750014 */
			CTI_Desktop_Manager,
			/** 803750016 */
			Debugger,
			/** 803750001 */
			Global_Manager,
			/** 803750021 */
			Interactive_Service_Hub_Page,
			/** 803750019 */
			KM_Control,
			/** 803750020 */
			Listener_Hosted_Control,
			/** 803750015 */
			Panel_Layout,
			/** 803750022 */
			Popup_Notification,
			/** 803750007 */
			Ribbon_Hosted_Control,
			/** 803750012 */
			Session_Lines,
			/** 803750009 */
			Session_Tabs,
			/** 803750004 */
			Standard_Web_Application,
			/** 803750017 */
			Todo_List,
			/** 803750008 */
			Toolbar_Container,
			/** 803750013 */
			Tree_Bar,
			/** 803750024 */
			Unified_Interface_KM_Control,
			/** 803750023 */
			Unified_Interface_Page,
			/** 803750005 */
			USD_Hosted_Control,
			/** 803750010 */
			User_Notes
		}
		enum msdyusd_HostingType {
			/** 803750003 */
			Chrome_Process,
			/** 803750002 */
			Edge_Process,
			/** 803750001 */
			IE_Process,
			/** 803750000 */
			Internal_WPF
		}
		enum msdyusd_PanelType {
			/** 803750005 */
			Horizontal_Split,
			/** 803750003 */
			Ribbon_Main_Panel,
			/** 803750000 */
			Standard_Main_Panel,
			/** 803750001 */
			User_Defined,
			/** 803750004 */
			Vertical_Split,
			/** 803750002 */
			XAML
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum UII_AdapterMode {
			/** 3 */
			Use_Adapter,
			/** 2 */
			Use_Automation_Adapter_HAT,
			/** 1 */
			Use_No_Adapter
		}
		enum UII_ApplicationHostingMode {
			/** 1 */
			Host_Outside,
			/** 3 */
			Use_Dynamic_Positioning,
			/** 2 */
			Use_SetParent
		}
		enum UII_HostedApplicationType {
			/** 3 */
			External_Hosted_Application,
			/** 1 */
			Hosted_Control,
			/** 4 */
			Remote_Hosted_Application,
			/** 2 */
			Web_Hosted_Application
		}
		enum UII_TopLevelWindowMode {
			/** 1 */
			None,
			/** 3 */
			Use_FindWindow,
			/** 2 */
			Use_VB_Top_Level
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}