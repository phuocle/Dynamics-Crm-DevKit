﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class DuplicateRuleConditionApi {
		/**
		* DynamicsCrm.DevKit DuplicateRuleConditionApi
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
		/** Field that is being compared. */
		BaseAttributeName: string;
		/** Unique identifier of the user who created the condition. */
		readonly CreatedBy: string;
		/** Date and time when the condition was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the duplicate rule condition. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier of the condition. */
		DuplicateRuleConditionId: string;
		/** Determines whether to consider blank values as non-duplicate values */
		IgnoreBlankValues: boolean;
		/** Field that is being compared with the base field. */
		MatchingAttributeName: string;
		/** Unique identifier of the user who last modified the condition. */
		readonly ModifiedBy: string;
		/** Date and time when the condition was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the duplicate rule condition. */
		readonly ModifiedOnBehalfBy: string;
		/** Operator for this rule condition. */
		OperatorCode: OptionSet.DuplicateRuleCondition.OperatorCode;
		/** Parameter value of N if the operator is Same First Characters or Same Last Characters. */
		OperatorParam: number;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier of the business unit that owns the condition. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the user who owns the condition. */
		readonly OwningUser: string;
		/** Unique identifier of the object with which the condition is associated. */
		RegardingObjectId: string;
		UniqueRuleName: string;
		readonly FormattedValue: {
			/** Field that is being compared. */
			readonly BaseAttributeName: string;
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
			readonly UniqueRuleName: string;
		}
	}
}
declare namespace OptionSet {
	namespace DuplicateRuleCondition {
		enum OperatorCode {
			/** 0 */
			Exact_Match,
			/** 5 */
			Exact_Match_Pick_List_Label,
			/** 6 */
			Exact_Match_Pick_List_Value,
			/** 3 */
			Same_Date,
			/** 4 */
			Same_Date_and_Time,
			/** 1 */
			Same_First_Characters,
			/** 2 */
			Same_Last_Characters
		}
		enum OwnerIdType {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}