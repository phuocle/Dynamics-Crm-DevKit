//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMaskingRule_Information {
		interface Tabs {
		}
		interface Body {
			/** Description of the secured masking rule */
			Description: DevKit.Controls.String;
			/** The display name of the secured masking rule. */
			DisplayName: DevKit.Controls.String;
			/** Character used to mask */
			MaskedCharacter: DevKit.Controls.String;
			/** Rich text test data evaluated by a secured masking rule */
			MaskedRichTestData: DevKit.Controls.String;
			/** Test data evaluated by a secured masking rule */
			MaskedTestData: DevKit.Controls.String;
			/** The unique name of the secured masking rule. */
			Name: DevKit.Controls.String;
			/** Regular Expression in C# */
			RegularExpression: DevKit.Controls.String;
			/** Rich text test data to evaluate a secured masking rule */
			RichTestData: DevKit.Controls.String;
			/** Test data to evaluate a secured masking rule */
			TestData: DevKit.Controls.String;
		}
	}
	export class FormMaskingRule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form MaskingRule_Information */
		Body: DevKit.FormMaskingRule_Information.Body;
	}
	export class MaskingRuleApi {
		/**
		* DynamicsCrm.DevKit MaskingRuleApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.MaskingRule.ComponentState | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Description of the secured masking rule */
		Description: string | null;
		/** The display name of the secured masking rule. */
		DisplayName: string | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Character used to mask */
		MaskedCharacter: string | null;
		/** Rich text test data evaluated by a secured masking rule */
		MaskedRichTestData: string | null;
		/** Test data evaluated by a secured masking rule */
		MaskedTestData: string | null;
		/** Unique identifier for entity instances */
		MaskingRuleId: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** The unique name of the secured masking rule. */
		Name: string | null;
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Regular Expression in C# */
		RegularExpression: string | null;
		/** Rich text test data to evaluate a secured masking rule */
		RichTestData: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Test data to evaluate a secured masking rule */
		TestData: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Description of the secured masking rule */
			readonly Description: string;
			/** The display name of the secured masking rule. */
			readonly DisplayName: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Character used to mask */
			readonly MaskedCharacter: string;
			/** Rich text test data evaluated by a secured masking rule */
			readonly MaskedRichTestData: string;
			/** Test data evaluated by a secured masking rule */
			readonly MaskedTestData: string;
			/** Unique identifier for entity instances */
			readonly MaskingRuleId: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** The unique name of the secured masking rule. */
			readonly Name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Regular Expression in C# */
			readonly RegularExpression: string;
			/** Rich text test data to evaluate a secured masking rule */
			readonly RichTestData: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Test data to evaluate a secured masking rule */
			readonly TestData: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace MaskingRule {
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