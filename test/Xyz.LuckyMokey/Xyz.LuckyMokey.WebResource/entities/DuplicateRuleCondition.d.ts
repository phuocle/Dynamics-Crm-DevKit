//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Field that is being compared. */
		BaseAttributeName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the condition. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the condition was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the duplicate rule condition. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the condition. */
		DuplicateRuleConditionId: DevKit.WebApi.GuidValue;
		/** Determines whether to consider blank values as non-duplicate values */
		IgnoreBlankValues: DevKit.WebApi.BooleanValue;
		/** Field that is being compared with the base field. */
		MatchingAttributeName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the condition. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the condition was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the duplicate rule condition. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Operator for this rule condition. */
		OperatorCode: DevKit.WebApi.OptionSetValue;
		/** Parameter value of N if the operator is Same First Characters or Same Last Characters. */
		OperatorParam: DevKit.WebApi.IntegerValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the condition. */
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who owns the condition. */
		OwningUser: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the object with which the condition is associated. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
	}
}
declare namespace OptionSet {
	namespace DuplicateRuleCondition {
		enum OperatorCode {
			/** 0 */
			Exact_Match,
			/** 1 */
			Same_First_Characters,
			/** 2 */
			Same_Last_Characters,
			/** 3 */
			Same_Date,
			/** 4 */
			Same_Date_and_Time,
			/** 5 */
			Exact_Match_Pick_List_Label,
			/** 6 */
			Exact_Match_Pick_List_Value
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}