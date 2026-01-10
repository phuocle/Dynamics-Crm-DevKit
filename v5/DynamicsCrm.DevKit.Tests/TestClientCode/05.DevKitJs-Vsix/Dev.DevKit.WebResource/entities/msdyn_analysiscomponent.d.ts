//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_analysiscomponent_Information {
		interface tab_tab_2_Sections {
			/** Section */
			tab_2_section_1: DevKit.Controls.Section;
			/** Section */
			tab_2_section_2: DevKit.Controls.Section;
		}
		/** Summary */
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			/** Summary */
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Analysis Component Type */
			msdyn_AnalysisComponentType: DevKit.Controls.OptionSet;
			/** The parent Analysis Job that analyzed this particular Analysis Component. */
			msdyn_AnalysisJobId: DevKit.Controls.Lookup;
			/** Component Id */
			msdyn_ComponentId: DevKit.Controls.String;
			/** Component Name */
			msdyn_ComponentName: DevKit.Controls.String;
			/** Component Type */
			msdyn_ComponentType: DevKit.Controls.OptionSet;
			/** Error Count */
			msdyn_ErrorCount: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Retry Count */
			msdyn_RetryCount: DevKit.Controls.Integer;
			/** Rule Fail Count */
			msdyn_RuleFailCount: DevKit.Controls.Integer;
			/** Rule Pass Count */
			msdyn_RulePassCount: DevKit.Controls.Integer;
			/** Rule Pass Rate */
			msdyn_RulePassRate: DevKit.Controls.Integer;
			/** The Solution Health Rule Set for which this is analysis component is for. */
			msdyn_SolutionHealthRuleSetId: DevKit.Controls.Lookup;
			/** Warning Count */
			msdyn_WarningCount: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Analysis Component */
			statuscode: DevKit.Controls.OptionSet;
		}
	}
	export class Formmsdyn_analysiscomponent_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_analysiscomponent_Information */
		Body: DevKit.Formmsdyn_analysiscomponent_Information.Body;
	}
	export class msdyn_analysiscomponentApi {
		/**
		* DynamicsCrm.DevKit msdyn_analysiscomponentApi
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
		msdyn_analysiscomponentId: string | null;
		msdyn_AnalysisComponentType: OptionSet.msdyn_analysiscomponent.msdyn_AnalysisComponentType | null;
		/** The parent Analysis Job that analyzed this particular Analysis Component. */
		msdyn_AnalysisJobId: string | null;
		msdyn_ComponentId: string | null;
		msdyn_ComponentName: string | null;
		msdyn_ComponentType: OptionSet.msdyn_analysiscomponent.msdyn_ComponentType | null;
		msdyn_ComponentVersion: string | null;
		msdyn_ErrorCount: number | null;
		/** The name of the custom entity. */
		msdyn_name: string | null;
		msdyn_RetryCount: number | null;
		msdyn_RuleFailCount: number | null;
		msdyn_RulePassCount: number | null;
		msdyn_RulePassRate: number | null;
		msdyn_sevcriticalcount: number | null;
		msdyn_sevhighcount: number | null;
		msdyn_sevlowcount: number | null;
		msdyn_sevmediumcount: number | null;
		/** The Solution Health Rule Set for which this is analysis component is for. */
		msdyn_SolutionHealthRuleSetId: string | null;
		msdyn_SuggestionCount: number | null;
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
		/** Status of the Analysis Component */
		statecode: OptionSet.msdyn_analysiscomponent.statecode | null;
		/** Reason for the status of the Analysis Component */
		statuscode: OptionSet.msdyn_analysiscomponent.statuscode | null;
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
			readonly msdyn_analysiscomponentId: string;
			readonly msdyn_AnalysisComponentType: string;
			/** The parent Analysis Job that analyzed this particular Analysis Component. */
			readonly msdyn_AnalysisJobId: string;
			readonly msdyn_ComponentId: string;
			readonly msdyn_ComponentName: string;
			readonly msdyn_ComponentType: string;
			readonly msdyn_ComponentVersion: string;
			readonly msdyn_ErrorCount: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_RetryCount: string;
			readonly msdyn_RuleFailCount: string;
			readonly msdyn_RulePassCount: string;
			readonly msdyn_RulePassRate: string;
			readonly msdyn_sevcriticalcount: string;
			readonly msdyn_sevhighcount: string;
			readonly msdyn_sevlowcount: string;
			readonly msdyn_sevmediumcount: string;
			/** The Solution Health Rule Set for which this is analysis component is for. */
			readonly msdyn_SolutionHealthRuleSetId: string;
			readonly msdyn_SuggestionCount: string;
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
			/** Status of the Analysis Component */
			readonly statecode: string;
			/** Reason for the status of the Analysis Component */
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
	namespace msdyn_analysiscomponent {
		enum msdyn_AnalysisComponentType {
			/** Component_Health = 192350001*/
			Component_Health = 192350001,
			/** Object_Health = 192350002*/
			Object_Health = 192350002,
			/** Organization_Health = 192350000*/
			Organization_Health = 192350000
		}
		enum msdyn_ComponentType {
			/** Configuration = 192350005*/
			Configuration = 192350005,
			/** Entity = 192350001*/
			Entity = 192350001,
			/** Form = 192350003*/
			Form = 192350003,
			/** Plugin = 192350004*/
			Plugin = 192350004,
			/** Solution = 192350000*/
			Solution = 192350000,
			/** View = 192350002*/
			View = 192350002
		}
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