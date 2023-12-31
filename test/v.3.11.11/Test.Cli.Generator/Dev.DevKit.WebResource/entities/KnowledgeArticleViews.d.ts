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
			ViewDate: DevKit.Controls.Date;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormKnowledgeArticleViews extends DevKit.IForm {
		/**
		* KnowledgeArticleViews [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form KnowledgeArticleViews */
		Body: DevKit.FormKnowledgeArticleViews.Body;
		/** The Process of form KnowledgeArticleViews */
		Process: DevKit.FormKnowledgeArticleViews.Process;
		/** The SidePanes of form KnowledgeArticleViews */
		SidePanes: DevKit.SidePanes;
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
			ViewDate: DevKit.Controls.Date;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormKnowledgeArticleViews_MainInteractionCentric extends DevKit.IForm {
		/**
		* KnowledgeArticleViews MainInteractionCentric [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form KnowledgeArticleViews_MainInteractionCentric */
		Body: DevKit.FormKnowledgeArticleViews_MainInteractionCentric.Body;
		/** The Process of form KnowledgeArticleViews_MainInteractionCentric */
		Process: DevKit.FormKnowledgeArticleViews_MainInteractionCentric.Process;
		/** The SidePanes of form KnowledgeArticleViews_MainInteractionCentric */
		SidePanes: DevKit.SidePanes;
	}
	class KnowledgeArticleViewsApi {
		/**
		* DynamicsCrm.DevKit KnowledgeArticleViewsApi
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
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Choose the Knowledge Article. */
		KnowledgeArticleId: string;
		/** Number of Knowledge Article Views visited per day */
		KnowledgeArticleView: number;
		/** Unique identifier of the Knowledge Article Views */
		KnowledgeArticleViewsId: string;
		/** Shows where the knowledge was used */
		Location: OptionSet.KnowledgeArticleViews.Location;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier of the business unit that owns the knowledge article views. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the user who owns the knowledge article views. */
		readonly OwningUser: string;
		/** Status of the Knowledge Article Views */
		statecode: OptionSet.KnowledgeArticleViews.statecode;
		/** Reason for the status of the Knowledge Article Views */
		statuscode: OptionSet.KnowledgeArticleViews.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		readonly TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		/** Information about the Day */
		ViewDate_UtcDateOnly: Date;
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
			/** 1 */
			Internal,
			/** 2 */
			Web
		}
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}