//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormUII_hostedapplication_Information {
		interface tab__C0330026_8257_4219_8BC2_998017D1B6F7_Sections {
			_04CA7CC4_D509_470C_A65B_76067E429B6E: DevKit.Form.Controls.ControlSection;
			_C0330026_8257_4219_8BC2_998017D1B6F7_SECTION_7: DevKit.Form.Controls.ControlSection;
			usdpanel: DevKit.Form.Controls.ControlSection;
			_4B8ADB5C_C3D8_DE11_A899_00155D289C61: DevKit.Form.Controls.ControlSection;
			_BADD49E5_C3D8_DE11_A899_00155D289C61: DevKit.Form.Controls.ControlSection;
			_C6D143EB_C3D8_DE11_A899_00155D289C61: DevKit.Form.Controls.ControlSection;
			_C7D143EB_C3D8_DE11_A899_00155D289C61: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Hosting_Sections {
			ExternalApplicationSettings: DevKit.Form.Controls.ControlSection;
			ApplicationHosting: DevKit.Form.Controls.ControlSection;
			AlternateTopLevelWindow: DevKit.Form.Controls.ControlSection;
			WebApplicationHomePage: DevKit.Form.Controls.ControlSection;
			AssemblyInfo: DevKit.Form.Controls.ControlSection;
			DynamicPositioningAttributes: DevKit.Form.Controls.ControlSection;
			CitrixApplicationSettings: DevKit.Form.Controls.ControlSection;
		}
		interface tab_TranslationServices_Sections {
			tab_6_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__9C1ADB13_C3D8_DE11_A899_00155D289C61_Sections {
			_08B2D4AE_C5D8_DE11_A899_00155D289C61: DevKit.Form.Controls.ControlSection;
		}
		interface tab__B49BA11C_C3D8_DE11_A899_00155D289C61_Sections {
			_4EF881CF_C5D8_DE11_A899_00155D289C61: DevKit.Form.Controls.ControlSection;
		}
		interface tab__1BECAF09_0B9B_49F1_80DE_C827F0ACF7BF_Sections {
			_10AEA57C_4CBD_4F9D_98FE_1445527E4A45: DevKit.Form.Controls.ControlSection;
		}
		interface tab__C0330026_8257_4219_8BC2_998017D1B6F7 extends DevKit.Form.Controls.IControlTab {
			Section: tab__C0330026_8257_4219_8BC2_998017D1B6F7_Sections;
		}
		interface tab_Hosting extends DevKit.Form.Controls.IControlTab {
			Section: tab_Hosting_Sections;
		}
		interface tab_TranslationServices extends DevKit.Form.Controls.IControlTab {
			Section: tab_TranslationServices_Sections;
		}
		interface tab__9C1ADB13_C3D8_DE11_A899_00155D289C61 extends DevKit.Form.Controls.IControlTab {
			Section: tab__9C1ADB13_C3D8_DE11_A899_00155D289C61_Sections;
		}
		interface tab__B49BA11C_C3D8_DE11_A899_00155D289C61 extends DevKit.Form.Controls.IControlTab {
			Section: tab__B49BA11C_C3D8_DE11_A899_00155D289C61_Sections;
		}
		interface tab__1BECAF09_0B9B_49F1_80DE_C827F0ACF7BF extends DevKit.Form.Controls.IControlTab {
			Section: tab__1BECAF09_0B9B_49F1_80DE_C827F0ACF7BF_Sections;
		}
		interface Tabs {
			_C0330026_8257_4219_8BC2_998017D1B6F7: tab__C0330026_8257_4219_8BC2_998017D1B6F7;
			Hosting: tab_Hosting;
			TranslationServices: tab_TranslationServices;
			_9C1ADB13_C3D8_DE11_A899_00155D289C61: tab__9C1ADB13_C3D8_DE11_A899_00155D289C61;
			_B49BA11C_C3D8_DE11_A899_00155D289C61: tab__B49BA11C_C3D8_DE11_A899_00155D289C61;
			_1BECAF09_0B9B_49F1_80DE_C827F0ACF7BF: tab__1BECAF09_0B9B_49F1_80DE_C827F0ACF7BF;
		}
		interface Body {
			Tab: Tabs;
			Languages: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyusd_allowmultiplepages: DevKit.Form.Controls.ControlBoolean;
			msdyusd_CRMWindowHostType: DevKit.Form.Controls.ControlOptionSet;
			msdyusd_DashboardName: DevKit.Form.Controls.ControlString;
			msdyusd_DisplayName: DevKit.Form.Controls.ControlString;
			msdyusd_HostingType: DevKit.Form.Controls.ControlOptionSet;
			/** Number of browser instances available within this control before the user is prompted that they hit the limit. (2-20 are valid) */
			msdyusd_MaximumBrowsers: DevKit.Form.Controls.ControlInteger;
			msdyusd_PanelType: DevKit.Form.Controls.ControlOptionSet;
			msdyusd_SavedURL: DevKit.Form.Controls.ControlString;
			msdyusd_ScanforDataParameters: DevKit.Form.Controls.ControlBoolean;
			msdyusd_XAML: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Determines the Adapter Mode */
			UII_AdapterMode: DevKit.Form.Controls.ControlOptionSet;
			/** Determines the Adapter Type information */
			UII_AdapterType: DevKit.Form.Controls.ControlString;
			/** URI of Adapter . */
			UII_AdapterURI: DevKit.Form.Controls.ControlString;
			/** Determines the Hosting Mode for the Hosted Application */
			UII_ApplicationHostingMode: DevKit.Form.Controls.ControlOptionSet;
			/** Holds Assembly Type information. */
			UII_AssemblyType: DevKit.Form.Controls.ControlString;
			/** Holds Assembly URI */
			UII_AssemblyURI: DevKit.Form.Controls.ControlString;
			/** Stores the Automation Bindings information */
			UII_AutomationXml: DevKit.Form.Controls.ControlString;
			/** Determines with Display Group Panel the application needs to be displayed. */
			UII_DisplayGroup: DevKit.Form.Controls.ControlString;
			/** Stores the Extension Xml file which capture any additional info with the Hosted Application Entity doent allow to enter. */
			UII_ExtensionsXml: DevKit.Form.Controls.ControlString;
			/** Holds the Arguments for External App Settings */
			UII_ExternalAppArguments: DevKit.Form.Controls.ControlString;
			/** Holds the External Application URI . */
			UII_ExternalAppURI: DevKit.Form.Controls.ControlString;
			/** Working Directory of External Application */
			UII_ExternalAppWorkingDirectory: DevKit.Form.Controls.ControlString;
			/** FindWindow class to find the Top Level Window */
			UII_FindWindowClass: DevKit.Form.Controls.ControlString;
			/** Determines the Type of Hosted Application */
			UII_HostedApplicationType: DevKit.Form.Controls.ControlOptionSet;
			/** Holds the ICA File Path for the Citrix Application */
			UII_ICAFileName: DevKit.Form.Controls.ControlString;
			/** Determines if the Hosted Application is a Dynamic Application */
			UII_isAppDynamic: DevKit.Form.Controls.ControlBoolean;
			/** Determines if Attach Input Thread for the Application Process. */
			UII_isAttachInputThread: DevKit.Form.Controls.ControlBoolean;
			/** Determines the dependency with Workflow */
			UII_isDependentonWorkflow: DevKit.Form.Controls.ControlBoolean;
			/** Determines if the application is  Global Application */
			UII_isGlobalApplication: DevKit.Form.Controls.ControlBoolean;
			/** Top Level Window is limit to current Process. */
			UII_isLimittoProcess: DevKit.Form.Controls.ControlBoolean;
			/** Determines if Message Pump is set for the Hosted Application */
			UII_isNoMessagePump: DevKit.Form.Controls.ControlBoolean;
			/** Restore is Minimized */
			UII_isRestoreifMinimized: DevKit.Form.Controls.ControlBoolean;
			/** For Dynamic Positioned App, this setting determines the Frame and caption retainment */
			UII_isRetainFrameandCaption: DevKit.Form.Controls.ControlBoolean;
			/** To Retain on Taskbar */
			UII_isRetainonTaskbar: DevKit.Form.Controls.ControlBoolean;
			/** For Dynamic Positioned Application , determines if System Menu needs to be retained. */
			UII_isRetainSystemMenu: DevKit.Form.Controls.ControlBoolean;
			/** Determines if the Hosted Application need to be displayed in the Toolbar drop down list. */
			UII_isShowinToolbarDropdown: DevKit.Form.Controls.ControlBoolean;
			/** Determines if Hosted Application can SHow Menu . */
			UII_isShowMenu: DevKit.Form.Controls.ControlBoolean;
			/** Determines if new browser process for every instance. */
			UII_isUsenewbrowserprocess: DevKit.Form.Controls.ControlBoolean;
			/** Determines if the webapplication toolbar is enabled. */
			UII_isWebAppUseToolbar: DevKit.Form.Controls.ControlBoolean;
			/** Determines the Main Window Acquisition time for the Hosted Application */
			UII_MainWindowAcquisitionTimeout: DevKit.Form.Controls.ControlInteger;
			/** Check this option to manage the hosting of application using automations. */
			uii_ManageHosting: DevKit.Form.Controls.ControlBoolean;
			/** Check this option to handle the pop ups using automations. */
			uii_ManagePopups: DevKit.Form.Controls.ControlBoolean;
			/** X co-ordinate of Minimum Size */
			UII_MinimumSizeX: DevKit.Form.Controls.ControlInteger;
			/** Y co-ordinate of Minimum Size */
			UII_MinimumSizeY: DevKit.Form.Controls.ControlInteger;
			/** Hosted Application Name. */
			UII_name: DevKit.Form.Controls.ControlString;
			/** X co-ordinate of Optimal Size */
			UII_OptimalSizeX: DevKit.Form.Controls.ControlInteger;
			/** Y co-ordinate of Optimal Size */
			UII_OptimalSizeY: DevKit.Form.Controls.ControlInteger;
			/** Process Acquisition FileName for Remote Application */
			UII_ProcessAcquisitionFilename: DevKit.Form.Controls.ControlString;
			/** Remote Server Side Process Acquisition Attempts */
			UII_remote_ProcessAcquisitionAttempts: DevKit.Form.Controls.ControlInteger;
			/** Remote Server Side Process Acquisition Delay */
			UII_remote_ProcessAcquisitionDelay: DevKit.Form.Controls.ControlInteger;
			/** For Dynamic Positioned Application , Determines the existance of Sizing controls */
			UII_RemoveSizingControls: DevKit.Form.Controls.ControlBoolean;
			/** Holds Sorting Order Value for the Hosted Application. */
			UII_SortOrder: DevKit.Form.Controls.ControlInteger;
			/** Caption to identify the Top Level Window */
			UII_TopLevelWindowCaption: DevKit.Form.Controls.ControlString;
			/** Determines the mode to find the Top Level Window */
			UII_TopLevelWindowMode: DevKit.Form.Controls.ControlOptionSet;
			/** Determines if the user can close the Hosted Application */
			UII_UserCanClose: DevKit.Form.Controls.ControlBoolean;
			/** Holds the Web Application URL */
			UII_WebAppURL: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Status of the UII Hosted Application */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyusd_toolbarstrip_uii_hostedapplication: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormUII_hostedapplication_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form UII_hostedapplication_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form UII_hostedapplication_Information */
		Body: LuckyMokey.FormUII_hostedapplication_Information.Body;
		/** The Footer section of form UII_hostedapplication_Information */
		Footer: LuckyMokey.FormUII_hostedapplication_Information.Footer;
		/** The Navigation of form UII_hostedapplication_Information */
		Navigation: LuckyMokey.FormUII_hostedapplication_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace UII_hostedapplication {
		enum msdyusd_CRMWindowHostType {
			/** 803750006 */
			Agent_Scripting,
			/** 803750002 */
			CCA_Hosted_Application,
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
			/** 803750005 */
			USD_Hosted_Control,
			/** 803750010 */
			User_Notes
		}
		enum msdyusd_HostingType {
			/** 803750000 */
			Internal_WPF,
			/** 803750001 */
			IE_Process
		}
		enum msdyusd_PanelType {
			/** 803750000 */
			Standard_Main_Panel,
			/** 803750003 */
			Ribbon_Main_Panel,
			/** 803750004 */
			Vertical_Split,
			/** 803750005 */
			Horizontal_Split,
			/** 803750002 */
			XAML,
			/** 803750001 */
			User_Defined
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
			/** 1 */
			Use_No_Adapter,
			/** 2 */
			Use_Automation_Adapter_HAT,
			/** 3 */
			Use_Adapter
		}
		enum UII_ApplicationHostingMode {
			/** 1 */
			Host_Outside,
			/** 2 */
			Use_SetParent,
			/** 3 */
			Use_Dynamic_Positioning
		}
		enum UII_HostedApplicationType {
			/** 1 */
			Hosted_Control,
			/** 2 */
			Web_Hosted_Application,
			/** 3 */
			External_Hosted_Application,
			/** 4 */
			Remote_Hosted_Application
		}
		enum UII_TopLevelWindowMode {
			/** 1 */
			None,
			/** 2 */
			Use_VB_Top_Level,
			/** 3 */
			Use_FindWindow
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}