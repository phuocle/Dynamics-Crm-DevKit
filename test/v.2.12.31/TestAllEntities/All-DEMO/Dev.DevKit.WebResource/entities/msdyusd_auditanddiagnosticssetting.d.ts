//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyusd_auditanddiagnosticssetting_Information {
		interface tab_ActivityTrackingTab_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_Diagnosticstab_Sections {
			Diagnosticstab_section_2: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_UserSchemaSettingstab_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_UCI: DevKit.Controls.Section;
		}
		interface tab_ActivityTrackingTab extends DevKit.Controls.ITab {
			Section: tab_ActivityTrackingTab_Sections;
		}
		interface tab_Diagnosticstab extends DevKit.Controls.ITab {
			Section: tab_Diagnosticstab_Sections;
		}
		interface tab_UserSchemaSettingstab extends DevKit.Controls.ITab {
			Section: tab_UserSchemaSettingstab_Sections;
		}
		interface Tabs {
			ActivityTrackingTab: tab_ActivityTrackingTab;
			Diagnosticstab: tab_Diagnosticstab;
			UserSchemaSettingstab: tab_UserSchemaSettingstab;
		}
		interface Body {
			Tab: Tabs;
			IFRAME_userschemasettings: DevKit.Controls.IFrame;
			/** Select whether activity tracking should be enabled or not. */
			msdyusd_ATEnabled: DevKit.Controls.Boolean;
			/** Select whether activity tracking for action calls should be enabled or not. */
			msdyusd_ATforActionCalls: DevKit.Controls.Boolean;
			/** Select whether activity tracking for agent login should be enabled or not. */
			msdyusd_ATforAgentLogin: DevKit.Controls.Boolean;
			/** Select whether activity tracking for agent scripts should be enabled or not. */
			msdyusd_ATforAgentScripts: DevKit.Controls.Boolean;
			/** Select whether activity tracking for customer session should be enabled or not. */
			msdyusd_ATforCustomerSession: DevKit.Controls.Boolean;
			/** Select whether activity tracking for events should be enabled or not. */
			msdyusd_ATforEvents: DevKit.Controls.Boolean;
			/** Select whether activity tracking for hosted controls should be enabled or not. */
			msdyusd_ATforHostedControl: DevKit.Controls.Boolean;
			/** Select whether activity tracking for sub action calls should be enabled or not. */
			msdyusd_ATforSubActionCalls: DevKit.Controls.Boolean;
			/** Select whether activity tracking for UII Action should be enabled or not. */
			msdyusd_ATforUIIAction: DevKit.Controls.Boolean;
			/** Select whether activity tracking for window navigation rules should be enabled or not. */
			msdyusd_ATforWindowsNavRules: DevKit.Controls.Boolean;
			/** Cache Size Audit & Diagnostics Setting. */
			msdyusd_CacheSize: DevKit.Controls.Integer;
			/** Choose whether to generate a memory dump for unhandled exceptions. */
			msdyusd_CrashDumpEnabled: DevKit.Controls.Boolean;
			/** Select whether diagnostic tracking should be enabled or not. */
			msdyusd_DGTEnabled: DevKit.Controls.Boolean;
			/** Select the verbosity level for diagnostics. */
			msdyusd_DGTVerbosityLevel: DevKit.Controls.OptionSet;
			/** Select whether Enable Caching for UII Action should be enabled or not. */
			msdyusd_EnableCaching: DevKit.Controls.Boolean;
			/** Choose whether to collect a diagnostics report when the application closes unexpectedly. */
			msdyusd_ExitMonitoringEnabled: DevKit.Controls.Boolean;
			/** Enter the folder name where diagnostics logs are stored. */
			msdyusd_LogsDirectory: DevKit.Controls.String;
			/** Enter the maximum size in megabytes (MB) of the folder where diagnostics logs are stored. */
			msdyusd_MaxDiagnosticLogsSizeInMB: DevKit.Controls.Integer;
			/** Enter the name of the Audit & Diagnostics Setting. */
			msdyusd_name: DevKit.Controls.String;
			/** Enter the shortcut key combination for on demand diagnostics report collection. */
			msdyusd_ODDShortcut: DevKit.Controls.String;
			/** Shortcut to begin performance marker logs at runtime */
			msdyusd_ODPerfBeginShortcut: DevKit.Controls.String;
			/** Shortcut to end performance marker logs at runtime */
			msdyusd_ODPerfEndShortcut: DevKit.Controls.String;
			usercontrol_id: DevKit.Controls.ActionCards;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyusd_auditdiag_tracesourcesetting: DevKit.Controls.NavigationItem
		}
		interface Grid {
			TraceSourceSettings: DevKit.Controls.Grid;
		}
	}
	class Formmsdyusd_auditanddiagnosticssetting_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_auditanddiagnosticssetting_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyusd_auditanddiagnosticssetting_Information */
		Body: DevKit.Formmsdyusd_auditanddiagnosticssetting_Information.Body;
		/** The Navigation of form msdyusd_auditanddiagnosticssetting_Information */
		Navigation: DevKit.Formmsdyusd_auditanddiagnosticssetting_Information.Navigation;
		/** The Grid of form msdyusd_auditanddiagnosticssetting_Information */
		Grid: DevKit.Formmsdyusd_auditanddiagnosticssetting_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyusd_auditanddiagnosticssetting {
		enum msdyusd_DGTVerbosityLevel {
			/** 100000000 */
			Error,
			/** 100000002 */
			Information,
			/** 100000003 */
			Verbose,
			/** 100000001 */
			Warning
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}