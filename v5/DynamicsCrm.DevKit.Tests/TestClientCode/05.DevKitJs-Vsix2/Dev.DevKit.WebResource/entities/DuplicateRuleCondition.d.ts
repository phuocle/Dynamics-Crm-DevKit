//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class DuplicateRuleConditionApi {
		/**
		* DynamicsCrm.DevKit DuplicateRuleConditionApi
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
		/** Field that is being compared. */
		BaseAttributeName: string | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.DuplicateRuleCondition.ComponentState | null;
		/** Unique identifier of the user who created the condition. */
		readonly CreatedBy: string | null;
		/** Date and time when the condition was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the duplicate rule condition. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the condition. */
		DuplicateRuleConditionId: string | null;
		/** Determines whether to consider blank values as non-duplicate values */
		IgnoreBlankValues: boolean | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Field that is being compared with the base field. */
		MatchingAttributeName: string | null;
		/** Unique identifier of the user who last modified the condition. */
		readonly ModifiedBy: string | null;
		/** Date and time when the condition was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the duplicate rule condition. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Operator for this rule condition. */
		OperatorCode: OptionSet.DuplicateRuleCondition.OperatorCode | null;
		/** Parameter value of N if the operator is Same First Characters or Same Last Characters. */
		OperatorParam: number | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the condition. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the user who owns the condition. */
		readonly OwningUser: string | null;
		/** Unique identifier of the object with which the condition is associated. */
		RegardingObjectId: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		UniqueRuleName: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Field that is being compared. */
			readonly BaseAttributeName: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the condition. */
			readonly CreatedBy: string;
			/** Date and time when the condition was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the duplicate rule condition. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the condition. */
			readonly DuplicateRuleConditionId: string;
			/** Determines whether to consider blank values as non-duplicate values */
			readonly IgnoreBlankValues: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Field that is being compared with the base field. */
			readonly MatchingAttributeName: string;
			/** Unique identifier of the user who last modified the condition. */
			readonly ModifiedBy: string;
			/** Date and time when the condition was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the duplicate rule condition. */
			readonly ModifiedOnBehalfBy: string;
			/** Operator for this rule condition. */
			readonly OperatorCode: string;
			/** Parameter value of N if the operator is Same First Characters or Same Last Characters. */
			readonly OperatorParam: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the condition. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the condition. */
			readonly OwningUser: string;
			/** Unique identifier of the object with which the condition is associated. */
			readonly RegardingObjectId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			readonly UniqueRuleName: string;
		}
	}
}
declare namespace OptionSet {
	namespace DuplicateRuleCondition {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum OperatorCode {
			/** Exact_Match = 0*/
			Exact_Match = 0,
			/** Exact_Match_Pick_List_Label = 5*/
			Exact_Match_Pick_List_Label = 5,
			/** Exact_Match_Pick_List_Value = 6*/
			Exact_Match_Pick_List_Value = 6,
			/** Same_Date = 3*/
			Same_Date = 3,
			/** Same_Date_and_Time = 4*/
			Same_Date_and_Time = 4,
			/** Same_First_Characters = 1*/
			Same_First_Characters = 1,
			/** Same_Last_Characters = 2*/
			Same_Last_Characters = 2
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