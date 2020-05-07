//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyusd_auditanddiagnosticssetting_Information {
		interface tab_ActivityTrackingTab_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Diagnosticstab_Sections {
			tab_3_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_UserSchemaSettingstab_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
			tab_4_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ActivityTrackingTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_ActivityTrackingTab_Sections;
		}
		interface tab_Diagnosticstab extends DevKit.Form.Controls.IControlTab {
			Section: tab_Diagnosticstab_Sections;
		}
		interface tab_UserSchemaSettingstab extends DevKit.Form.Controls.IControlTab {
			Section: tab_UserSchemaSettingstab_Sections;
		}
		interface Tabs {
			ActivityTrackingTab: tab_ActivityTrackingTab;
			Diagnosticstab: tab_Diagnosticstab;
			UserSchemaSettingstab: tab_UserSchemaSettingstab;
		}
		interface Body {
			Tab: Tabs;
			TraceSourceSettings: DevKit.Form.Controls.ControlGrid;
			IFRAME_userschemasettings: DevKit.Form.Controls.ControlIFrame;
			/** Select whether activity tracking should be enabled or not. */
			msdyusd_ATEnabled: DevKit.Form.Controls.ControlBoolean;
			/** Select whether activity tracking for action calls should be enabled or not. */
			msdyusd_ATforActionCalls: DevKit.Form.Controls.ControlBoolean;
			/** Select whether activity tracking for agent login should be enabled or not. */
			msdyusd_ATforAgentLogin: DevKit.Form.Controls.ControlBoolean;
			/** Select whether activity tracking for agent scripts should be enabled or not. */
			msdyusd_ATforAgentScripts: DevKit.Form.Controls.ControlBoolean;
			/** Select whether activity tracking for customer session should be enabled or not. */
			msdyusd_ATforCustomerSession: DevKit.Form.Controls.ControlBoolean;
			/** Select whether activity tracking for events should be enabled or not. */
			msdyusd_ATforEvents: DevKit.Form.Controls.ControlBoolean;
			/** Select whether activity tracking for hosted controls should be enabled or not. */
			msdyusd_ATforHostedControl: DevKit.Form.Controls.ControlBoolean;
			/** Select whether activity tracking for sub action calls should be enabled or not. */
			msdyusd_ATforSubActionCalls: DevKit.Form.Controls.ControlBoolean;
			/** Select whether activity tracking for UII Action should be enabled or not. */
			msdyusd_ATforUIIAction: DevKit.Form.Controls.ControlBoolean;
			/** Select whether activity tracking for window navigation rules should be enabled or not. */
			msdyusd_ATforWindowsNavRules: DevKit.Form.Controls.ControlBoolean;
			/** Cache Size Audit & Diagnostics Setting. */
			msdyusd_CacheSize: DevKit.Form.Controls.ControlInteger;
			/** Select whether diagnostic tracking should be enabled or not. */
			msdyusd_DGTEnabled: DevKit.Form.Controls.ControlBoolean;
			/** Select the verbosity level for diagnostics. */
			msdyusd_DGTVerbosityLevel: DevKit.Form.Controls.ControlOptionSet;
			/** Select whether Enable Caching for UII Action should be enabled or not. */
			msdyusd_EnableCaching: DevKit.Form.Controls.ControlBoolean;
			/** Enter the name of the Audit & Diagnostics Setting. */
			msdyusd_name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyusd_auditdiag_tracesourcesetting: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyusd_auditanddiagnosticssetting_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_auditanddiagnosticssetting_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyusd_auditanddiagnosticssetting_Information */
		Body: LuckyMokey.Formmsdyusd_auditanddiagnosticssetting_Information.Body;
		/** The Navigation of form msdyusd_auditanddiagnosticssetting_Information */
		Navigation: LuckyMokey.Formmsdyusd_auditanddiagnosticssetting_Information.Navigation;
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
		/** Select whether diagnostic tracking should be enabled or not. */
		msdyusd_DGTEnabled: DevKit.WebApi.BooleanValue;
		/** Select the verbosity level for diagnostics. */
		msdyusd_DGTVerbosityLevel: DevKit.WebApi.OptionSetValue;
		/** Select whether Enable Caching for UII Action should be enabled or not. */
		msdyusd_EnableCaching: DevKit.WebApi.BooleanValue;
		msdyusd_IsDefault: DevKit.WebApi.BooleanValue;
		/** Enter the name of the Audit & Diagnostics Setting. */
		msdyusd_name: DevKit.WebApi.StringValue;
		/** User Schema Settings */
		msdyusd_userschemasettings: DevKit.WebApi.StringValue;
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
			/** 100000001 */
			Warning,
			/** 100000002 */
			Information,
			/** 100000003 */
			Verbose
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}