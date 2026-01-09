//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formv4_accountbpf_Information {
		interface tab_StageStep3_Sections {
			/** Stage 1 */
			StageStep3_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep9_Sections {
			/** Stage 2 */
			StageStep9_section1: DevKit.Controls.Section;
		}
		/** Stage 1 */
		interface tab_StageStep3 extends DevKit.Controls.ITab {
			Section: tab_StageStep3_Sections;
		}
		/** Stage 2 */
		interface tab_StageStep9 extends DevKit.Controls.ITab {
			Section: tab_StageStep9_Sections;
		}
		interface Tabs {
			/** Stage 1 */
			StageStep3: tab_StageStep3;
			/** Stage 2 */
			StageStep9: tab_StageStep9;
		}
		interface Body {
			Tab: Tabs;

		}
	}
	export class Formv4_accountbpf_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form v4_accountbpf_Information */
		Body: DevKit.Formv4_accountbpf_Information.Body;
	}
	export class v4_accountbpfApi {
		/**
		* DynamicsCrm.DevKit v4_accountbpfApi
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
		/** Unique identifier of the active stage for the Business Process Flow instance. */
		ActiveStageId: string | null;
		/** Date and time when current active stage is started */
		ActiveStageStartedOn_UtcDateOnly: Date | null;
		bpf_accountid: string | null;
		/** Duration of Business Process Flow */
		readonly bpf_Duration: number | null;
		/** Description */
		bpf_name: string | null;
		/** Unique identifier for entity instances */
		BusinessProcessFlowInstanceId: string | null;
		/** Date and time when Business Process Flow instance is completed. */
		CompletedOn_UtcDateOnly: Date | null;
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
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Unique identifier of the workflow associated to the Business Process Flow instance. */
		ProcessId: string | null;
		/** Status of the AccountBPF */
		statecode: OptionSet.v4_accountbpf.statecode | null;
		/** Reason for the status of the AccountBPF */
		statuscode: OptionSet.v4_accountbpf.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Comma delimited string of process stage ids that represent visited stages of the Business Process Flow instance. */
		TraversedPath: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the active stage for the Business Process Flow instance. */
			readonly ActiveStageId: string;
			/** Date and time when current active stage is started */
			readonly ActiveStageStartedOn_UtcDateOnly: string;
			readonly bpf_accountid: string;
			/** Duration of Business Process Flow */
			readonly bpf_Duration: string;
			/** Description */
			readonly bpf_name: string;
			/** Unique identifier for entity instances */
			readonly BusinessProcessFlowInstanceId: string;
			/** Date and time when Business Process Flow instance is completed. */
			readonly CompletedOn_UtcDateOnly: string;
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
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique identifier of the workflow associated to the Business Process Flow instance. */
			readonly ProcessId: string;
			/** Status of the AccountBPF */
			readonly statecode: string;
			/** Reason for the status of the AccountBPF */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Comma delimited string of process stage ids that represent visited stages of the Business Process Flow instance. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace v4_accountbpf {
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Aborted = 3*/
			Aborted = 3,
			/** Active = 1*/
			Active = 1,
			/** Finished = 2*/
			Finished = 2
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