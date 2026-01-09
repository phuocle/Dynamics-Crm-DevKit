//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_analysisjob_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab__F1A26849_5CBD_4343_BE37_A5447D0EA5A6_Sections {
			/** General */
			_BFA242F2_7FBF_468A_85CA_6D52BD4193D1: DevKit.Controls.Section;
			/** System */
			_F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_2: DevKit.Controls.Section;
			/** Section */
			_F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_summary_tab_Sections {
			/** Count of Failures by Severity */
			_E6707165_9B00_4ABC_9DF3_D04E06FEC0F2_SECTION_4: DevKit.Controls.Section;
			/** Overview */
			tab_3_section_overview: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
			/** Section */
			tab_2_section_1: DevKit.Controls.Section;
		}
		/** Job Details */
		interface tab__F1A26849_5CBD_4343_BE37_A5447D0EA5A6 extends DevKit.Controls.ITab {
			Section: tab__F1A26849_5CBD_4343_BE37_A5447D0EA5A6_Sections;
		}
		/** Summary */
		interface tab_summary_tab extends DevKit.Controls.ITab {
			Section: tab_summary_tab_Sections;
		}
		/** Exception Details */
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			/** Job Details */
			_F1A26849_5CBD_4343_BE37_A5447D0EA5A6: tab__F1A26849_5CBD_4343_BE37_A5447D0EA5A6;
			/** Summary */
			summary_tab: tab_summary_tab;
			/** Exception Details */
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** End Time */
			msdyn_EndTime: DevKit.Controls.DateTime;
			/** Error Count */
			msdyn_ErrorCount: DevKit.Controls.Integer;
			/** Error Count */
			msdyn_ErrorCount1: DevKit.Controls.Integer;
			/** Exception */
			msdyn_Exception: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Rule Fail Count */
			msdyn_RuleFailCount: DevKit.Controls.Integer;
			/** Rule Fail Count */
			msdyn_RuleFailCount1: DevKit.Controls.Integer;
			/** Rule Pass Count */
			msdyn_RulePassCount: DevKit.Controls.Integer;
			/** Rule Pass Count */
			msdyn_RulePassCount1: DevKit.Controls.Integer;
			/** Rule Run Count */
			msdyn_RuleRunCount: DevKit.Controls.Integer;
			/** Rule Run Count */
			msdyn_RuleRunCount1: DevKit.Controls.Integer;
			/** Start Time */
			msdyn_StartTime: DevKit.Controls.DateTime;
			/** Suggestion Count */
			msdyn_SuggestionCount: DevKit.Controls.Integer;
			/** Suggestion Count */
			msdyn_SuggestionCount1: DevKit.Controls.Integer;
			/** Warning Count */
			msdyn_WarningCount: DevKit.Controls.Integer;
			/** Warning Count */
			msdyn_WarningCount1: DevKit.Controls.Integer;
			/** Status of the Analysis Job */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Analysis Job */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Grid {
			/** Analysis Results(Analysis Job) */
			AssociatedAnalysisResults: DevKit.Controls.Grid;
		}
	}
	export class Formmsdyn_analysisjob_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_analysisjob_Information */
		Body: DevKit.Formmsdyn_analysisjob_Information.Body;
		/** The Header section of form msdyn_analysisjob_Information */
		Header: DevKit.Formmsdyn_analysisjob_Information.Header;
		/** The Grid of form msdyn_analysisjob_Information */
		Grid: DevKit.Formmsdyn_analysisjob_Information.Grid;
	}
	export class msdyn_analysisjobApi {
		/**
		* DynamicsCrm.DevKit msdyn_analysisjobApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier for entity instances */
		msdyn_analysisjobId: string | null;
		/** Analysis job report stored in excel format.  */
		readonly msdyn_AnalysisJobsReport_name: string | null;
		msdyn_CustomDetails: string | null;
		msdyn_DisplayStatus: string | null;
		msdyn_EndTime_UtcDateAndTime: Date | null;
		msdyn_ErrorCount: number | null;
		msdyn_Exception: string | null;
		/** Health rule set Failure In App Notification Enabled. */
		msdyn_InAppNotificationEnabled: boolean | null;
		/** The name of the custom entity. */
		msdyn_name: string | null;
		msdyn_RuleFailCount: number | null;
		msdyn_RulePassCount: number | null;
		msdyn_RuleRunCount: number | null;
		msdyn_RunCorrelationId: string | null;
		msdyn_sevcriticalcount: number | null;
		msdyn_sevhighcount: number | null;
		msdyn_sevlowcount: number | null;
		msdyn_sevmediumcount: number | null;
		msdyn_StartTime_UtcDateAndTime: Date | null;
		msdyn_SuggestionCount: number | null;
		msdyn_TenantId: string | null;
		/** Health rule set Trigger Type. */
		msdyn_TriggerType: string | null;
		msdyn_WarningCount: number | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Status of the Analysis Job */
		statecode: OptionSet.msdyn_analysisjob.statecode | null;
		/** Reason for the status of the Analysis Job */
		statuscode: OptionSet.msdyn_analysisjob.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Unique identifier for entity instances */
			readonly msdyn_analysisjobId: string;
			/** Analysis job report stored in excel format.  */
			readonly msdyn_AnalysisJobsReport_name: string;
			readonly msdyn_CustomDetails: string;
			readonly msdyn_DisplayStatus: string;
			readonly msdyn_EndTime_UtcDateAndTime: string;
			readonly msdyn_ErrorCount: string;
			readonly msdyn_Exception: string;
			/** Health rule set Failure In App Notification Enabled. */
			readonly msdyn_InAppNotificationEnabled: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_RuleFailCount: string;
			readonly msdyn_RulePassCount: string;
			readonly msdyn_RuleRunCount: string;
			readonly msdyn_RunCorrelationId: string;
			readonly msdyn_sevcriticalcount: string;
			readonly msdyn_sevhighcount: string;
			readonly msdyn_sevlowcount: string;
			readonly msdyn_sevmediumcount: string;
			readonly msdyn_StartTime_UtcDateAndTime: string;
			readonly msdyn_SuggestionCount: string;
			readonly msdyn_TenantId: string;
			/** Health rule set Trigger Type. */
			readonly msdyn_TriggerType: string;
			readonly msdyn_WarningCount: string;
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
			/** Status of the Analysis Job */
			readonly statecode: string;
			/** Reason for the status of the Analysis Job */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_analysisjob {
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Canceled = 2*/
			Canceled = 2,
			/** Complete = 192350001*/
			Complete = 192350001,
			/** Completed_With_Exceptions = 192350003*/
			Completed_With_Exceptions = 192350003,
			/** Exception = 192350002*/
			Exception = 192350002,
			/** Pending = 1*/
			Pending = 1,
			/** Running = 192350000*/
			Running = 192350000
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}