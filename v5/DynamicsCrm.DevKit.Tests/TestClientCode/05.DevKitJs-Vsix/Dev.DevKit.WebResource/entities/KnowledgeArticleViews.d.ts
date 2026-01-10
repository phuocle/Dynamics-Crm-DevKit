//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKnowledgeArticleViews {
		interface Tabs {
		}
		interface Body {
			/** Number of Knowledge Article Views visited per day */
			KnowledgeArticleView: DevKit.Controls.Integer;
			/** Shows where the knowledge was used */
			Location: DevKit.Controls.OptionSet;
			/** Information about the Day */
			ViewDate: DevKit.Controls.DateOnly;
		}
	}
	export class FormKnowledgeArticleViews extends DevKit.IForm {
		/**
		* KnowledgeArticleViews [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form KnowledgeArticleViews */
		Body: DevKit.FormKnowledgeArticleViews.Body;
	}
	namespace FormKnowledgeArticleViews_MainInteractionCentric {
		interface Tabs {
		}
		interface Body {
			/** Number of Knowledge Article Views visited per day */
			KnowledgeArticleView: DevKit.Controls.Integer;
			/** Shows where the knowledge was used */
			Location: DevKit.Controls.OptionSet;
			/** Information about the Day */
			ViewDate: DevKit.Controls.DateOnly;
		}
	}
	export class FormKnowledgeArticleViews_MainInteractionCentric extends DevKit.IForm {
		/**
		* KnowledgeArticleViews MainInteractionCentric [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form KnowledgeArticleViews_MainInteractionCentric */
		Body: DevKit.FormKnowledgeArticleViews_MainInteractionCentric.Body;
	}
	export class KnowledgeArticleViewsApi {
		/**
		* DynamicsCrm.DevKit KnowledgeArticleViewsApi
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
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Choose the Knowledge Article. */
		KnowledgeArticleId: string | null;
		/** Number of Knowledge Article Views visited per day */
		KnowledgeArticleView: number | null;
		/** Unique identifier of the Knowledge Article Views */
		KnowledgeArticleViewsId: string | null;
		/** Shows where the knowledge was used */
		Location: OptionSet.KnowledgeArticleViews.Location | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the knowledge article views. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the user who owns the knowledge article views. */
		readonly OwningUser: string | null;
		/** Status of the Knowledge Article Views */
		statecode: OptionSet.KnowledgeArticleViews.statecode | null;
		/** Reason for the status of the Knowledge Article Views */
		statuscode: OptionSet.KnowledgeArticleViews.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		readonly TransactionCurrencyId: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		readonly VersionNumber: number | null;
		/** Information about the Day */
		ViewDate_UtcDateOnly: Date | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Choose the Knowledge Article. */
			readonly KnowledgeArticleId: string;
			/** Number of Knowledge Article Views visited per day */
			readonly KnowledgeArticleView: string;
			/** Unique identifier of the Knowledge Article Views */
			readonly KnowledgeArticleViewsId: string;
			/** Shows where the knowledge was used */
			readonly Location: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the knowledge article views. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the knowledge article views. */
			readonly OwningUser: string;
			/** Status of the Knowledge Article Views */
			readonly statecode: string;
			/** Reason for the status of the Knowledge Article Views */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
			/** Information about the Day */
			readonly ViewDate_UtcDateOnly: string;
		}
	}
}
declare namespace OptionSet {
	namespace KnowledgeArticleViews {
		enum Location {
			/** Internal = 1*/
			Internal = 1,
			/** Web = 2*/
			Web = 2
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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