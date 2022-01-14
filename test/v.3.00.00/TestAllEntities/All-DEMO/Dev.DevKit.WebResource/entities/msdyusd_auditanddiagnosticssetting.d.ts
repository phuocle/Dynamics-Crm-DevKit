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
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			TraceSourceSettings: DevKit.Controls.Grid;
		}
	}
	class Formmsdyusd_auditanddiagnosticssetting_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_auditanddiagnosticssetting_Information Main Form
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
		/** The Process of form msdyusd_auditanddiagnosticssetting_Information */
		Process: DevKit.Formmsdyusd_auditanddiagnosticssetting_Information.Process;
		/** The Grid of form msdyusd_auditanddiagnosticssetting_Information */
		Grid: DevKit.Formmsdyusd_auditanddiagnosticssetting_Information.Grid;
		/** The SidePanes of form msdyusd_auditanddiagnosticssetting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyusd_auditanddiagnosticssettingApi {
		/**
		* DynamicsCrm.DevKit msdyusd_auditanddiagnosticssettingApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select whether activity tracking should be enabled or not. */
		msdyusd_ATEnabled: DevKit.WebApi.BooleanValue;
		/** Select whether activity tracking for action calls should be enabled or not. */
		msdyusd_ATforActionCalls: DevKit.WebApi.BooleanValue;
		/** Select whether activity tracking for agent login should be enabled or not. */
		msdyusd_ATforAgentLogin: DevKit.WebApi.BooleanValue;
		/** Select whether activity tracking for agent scripts should be enabled or not. */
		msdyusd_ATforAgentScripts: DevKit.WebApi.BooleanValue;
		/** Select whether activity tracking for customer session should be enabled or not. */
		msdyusd_ATforCustomerSession: DevKit.WebApi.BooleanValue;
		/** Select whether activity tracking for events should be enabled or not. */
		msdyusd_ATforEvents: DevKit.WebApi.BooleanValue;
		/** Select whether activity tracking for hosted controls should be enabled or not. */
		msdyusd_ATforHostedControl: DevKit.WebApi.BooleanValue;
		/** Select whether activity tracking for sub action calls should be enabled or not. */
		msdyusd_ATforSubActionCalls: DevKit.WebApi.BooleanValue;
		/** Select whether activity tracking for UII Action should be enabled or not. */
		msdyusd_ATforUIIAction: DevKit.WebApi.BooleanValue;
		/** Select whether activity tracking for window navigation rules should be enabled or not. */
		msdyusd_ATforWindowsNavRules: DevKit.WebApi.BooleanValue;
		/** Unique identifier for entity instances */
		msdyusd_auditanddiagnosticssettingId: DevKit.WebApi.GuidValue;
		/** Cache Size Audit & Diagnostics Setting. */
		msdyusd_CacheSize: DevKit.WebApi.IntegerValue;
		/** Choose whether to generate a memory dump for unhandled exceptions. */
		msdyusd_CrashDumpEnabled: DevKit.WebApi.BooleanValue;
		/** Select whether diagnostic tracking should be enabled or not. */
		msdyusd_DGTEnabled: DevKit.WebApi.BooleanValue;
		/** Select the verbosity level for diagnostics. */
		msdyusd_DGTVerbosityLevel: DevKit.WebApi.OptionSetValue;
		/** Select whether Enable Caching for UII Action should be enabled or not. */
		msdyusd_EnableCaching: DevKit.WebApi.BooleanValue;
		/** Choose whether to collect a diagnostics report when the application closes unexpectedly. */
		msdyusd_ExitMonitoringEnabled: DevKit.WebApi.BooleanValue;
		msdyusd_IsDefault: DevKit.WebApi.BooleanValue;
		/** Enter the folder name where diagnostics logs are stored. */
		msdyusd_LogsDirectory: DevKit.WebApi.StringValue;
		/** Enter the maximum size in megabytes (MB) of the folder where diagnostics logs are stored. */
		msdyusd_MaxDiagnosticLogsSizeInMB: DevKit.WebApi.IntegerValue;
		/** Enter the name of the Audit & Diagnostics Setting. */
		msdyusd_name: DevKit.WebApi.StringValue;
		/** Enter the shortcut key combination for on demand diagnostics report collection. */
		msdyusd_ODDShortcut: DevKit.WebApi.StringValue;
		/** Shortcut to begin performance marker logs at runtime */
		msdyusd_ODPerfBeginShortcut: DevKit.WebApi.StringValue;
		/** Shortcut to end performance marker logs at runtime */
		msdyusd_ODPerfEndShortcut: DevKit.WebApi.StringValue;
		/** User Schema Settings */
		msdyusd_userschemasettings: DevKit.WebApi.StringValue;
		/** Choose whether to enable Windows Error Reporting. */
		msdyusd_WEREnabled: DevKit.WebApi.BooleanValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Contains the id of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Contains the id of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the Audit & Diagnostics Setting. */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Status Reason of the Audit & Diagnostics Setting. */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}