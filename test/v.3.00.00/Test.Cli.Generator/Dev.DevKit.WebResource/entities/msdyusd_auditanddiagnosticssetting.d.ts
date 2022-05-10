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
		* Information [Main Form]
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
		/** Select whether activity tracking should be enabled or not. */
		msdyusd_ATEnabled: boolean;
		/** Select whether activity tracking for action calls should be enabled or not. */
		msdyusd_ATforActionCalls: boolean;
		/** Select whether activity tracking for agent login should be enabled or not. */
		msdyusd_ATforAgentLogin: boolean;
		/** Select whether activity tracking for agent scripts should be enabled or not. */
		msdyusd_ATforAgentScripts: boolean;
		/** Select whether activity tracking for customer session should be enabled or not. */
		msdyusd_ATforCustomerSession: boolean;
		/** Select whether activity tracking for events should be enabled or not. */
		msdyusd_ATforEvents: boolean;
		/** Select whether activity tracking for hosted controls should be enabled or not. */
		msdyusd_ATforHostedControl: boolean;
		/** Select whether activity tracking for sub action calls should be enabled or not. */
		msdyusd_ATforSubActionCalls: boolean;
		/** Select whether activity tracking for UII Action should be enabled or not. */
		msdyusd_ATforUIIAction: boolean;
		/** Select whether activity tracking for window navigation rules should be enabled or not. */
		msdyusd_ATforWindowsNavRules: boolean;
		/** Unique identifier for entity instances */
		msdyusd_auditanddiagnosticssettingId: string;
		/** Cache Size Audit & Diagnostics Setting. */
		msdyusd_CacheSize: number;
		/** Choose whether to generate a memory dump for unhandled exceptions. */
		msdyusd_CrashDumpEnabled: boolean;
		/** Select whether diagnostic tracking should be enabled or not. */
		msdyusd_DGTEnabled: boolean;
		/** Select the verbosity level for diagnostics. */
		msdyusd_DGTVerbosityLevel: OptionSet.msdyusd_auditanddiagnosticssetting.msdyusd_DGTVerbosityLevel;
		/** Select whether Enable Caching for UII Action should be enabled or not. */
		msdyusd_EnableCaching: boolean;
		/** Choose whether to collect a diagnostics report when the application closes unexpectedly. */
		msdyusd_ExitMonitoringEnabled: boolean;
		msdyusd_IsDefault: boolean;
		/** Enter the folder name where diagnostics logs are stored. */
		msdyusd_LogsDirectory: string;
		/** Enter the maximum size in megabytes (MB) of the folder where diagnostics logs are stored. */
		msdyusd_MaxDiagnosticLogsSizeInMB: number;
		/** Enter the name of the Audit & Diagnostics Setting. */
		msdyusd_name: string;
		/** Enter the shortcut key combination for on demand diagnostics report collection. */
		msdyusd_ODDShortcut: string;
		/** Shortcut to begin performance marker logs at runtime */
		msdyusd_ODPerfBeginShortcut: string;
		/** Shortcut to end performance marker logs at runtime */
		msdyusd_ODPerfEndShortcut: string;
		/** User Schema Settings */
		msdyusd_userschemasettings: string;
		/** Choose whether to enable Windows Error Reporting. */
		msdyusd_WEREnabled: boolean;
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
		/** Contains the id of the process associated with the entity. */
		processid: string;
		/** Contains the id of the stage where the entity is located. */
		stageid: string;
		/** Status of the Audit & Diagnostics Setting. */
		statecode: OptionSet.msdyusd_auditanddiagnosticssetting.statecode;
		/** Status Reason of the Audit & Diagnostics Setting. */
		statuscode: OptionSet.msdyusd_auditanddiagnosticssetting.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Select whether activity tracking should be enabled or not. */
			readonly msdyusd_ATEnabled: string;
			/** Select whether activity tracking for action calls should be enabled or not. */
			readonly msdyusd_ATforActionCalls: string;
			/** Select whether activity tracking for agent login should be enabled or not. */
			readonly msdyusd_ATforAgentLogin: string;
			/** Select whether activity tracking for agent scripts should be enabled or not. */
			readonly msdyusd_ATforAgentScripts: string;
			/** Select whether activity tracking for customer session should be enabled or not. */
			readonly msdyusd_ATforCustomerSession: string;
			/** Select whether activity tracking for events should be enabled or not. */
			readonly msdyusd_ATforEvents: string;
			/** Select whether activity tracking for hosted controls should be enabled or not. */
			readonly msdyusd_ATforHostedControl: string;
			/** Select whether activity tracking for sub action calls should be enabled or not. */
			readonly msdyusd_ATforSubActionCalls: string;
			/** Select whether activity tracking for UII Action should be enabled or not. */
			readonly msdyusd_ATforUIIAction: string;
			/** Select whether activity tracking for window navigation rules should be enabled or not. */
			readonly msdyusd_ATforWindowsNavRules: string;
			/** Unique identifier for entity instances */
			readonly msdyusd_auditanddiagnosticssettingId: string;
			/** Cache Size Audit & Diagnostics Setting. */
			readonly msdyusd_CacheSize: string;
			/** Choose whether to generate a memory dump for unhandled exceptions. */
			readonly msdyusd_CrashDumpEnabled: string;
			/** Select whether diagnostic tracking should be enabled or not. */
			readonly msdyusd_DGTEnabled: string;
			/** Select the verbosity level for diagnostics. */
			readonly msdyusd_DGTVerbosityLevel: string;
			/** Select whether Enable Caching for UII Action should be enabled or not. */
			readonly msdyusd_EnableCaching: string;
			/** Choose whether to collect a diagnostics report when the application closes unexpectedly. */
			readonly msdyusd_ExitMonitoringEnabled: string;
			readonly msdyusd_IsDefault: string;
			/** Enter the folder name where diagnostics logs are stored. */
			readonly msdyusd_LogsDirectory: string;
			/** Enter the maximum size in megabytes (MB) of the folder where diagnostics logs are stored. */
			readonly msdyusd_MaxDiagnosticLogsSizeInMB: string;
			/** Enter the name of the Audit & Diagnostics Setting. */
			readonly msdyusd_name: string;
			/** Enter the shortcut key combination for on demand diagnostics report collection. */
			readonly msdyusd_ODDShortcut: string;
			/** Shortcut to begin performance marker logs at runtime */
			readonly msdyusd_ODPerfBeginShortcut: string;
			/** Shortcut to end performance marker logs at runtime */
			readonly msdyusd_ODPerfEndShortcut: string;
			/** User Schema Settings */
			readonly msdyusd_userschemasettings: string;
			/** Choose whether to enable Windows Error Reporting. */
			readonly msdyusd_WEREnabled: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Contains the id of the process associated with the entity. */
			readonly processid: string;
			/** Contains the id of the stage where the entity is located. */
			readonly stageid: string;
			/** Status of the Audit & Diagnostics Setting. */
			readonly statecode: string;
			/** Status Reason of the Audit & Diagnostics Setting. */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly traversedpath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}