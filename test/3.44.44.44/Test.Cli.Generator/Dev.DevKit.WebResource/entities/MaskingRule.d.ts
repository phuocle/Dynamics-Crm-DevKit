﻿//@ts-check
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
		interface Navigation {
			maskingrule_attributemaskingrule: DevKit.Controls.NavigationItem
		}
	}
	class FormMaskingRule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form MaskingRule_Information */
		Body: DevKit.FormMaskingRule_Information.Body;
		/** The Navigation of form MaskingRule_Information */
		Navigation: DevKit.FormMaskingRule_Information.Navigation;
		/** The SidePanes of form MaskingRule_Information */
		SidePanes: DevKit.SidePanes;
	}
	class MaskingRuleApi {
		/**
		* DynamicsCrm.DevKit MaskingRuleApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.MaskingRule.ComponentState;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Description of the secured masking rule */
		Description: string;
		/** The display name of the secured masking rule. */
		DisplayName: string;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Character used to mask */
		MaskedCharacter: string;
		/** Rich text test data evaluated by a secured masking rule */
		MaskedRichTestData: string;
		/** Test data evaluated by a secured masking rule */
		MaskedTestData: string;
		/** Unique identifier for entity instances */
		MaskingRuleId: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** The unique name of the secured masking rule. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Regular Expression in C# */
		RegularExpression: string;
		/** Rich text test data to evaluate a secured masking rule */
		RichTestData: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Test data to evaluate a secured masking rule */
		TestData: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}