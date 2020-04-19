//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormKnowledgeArticleViews {
		interface Tabs {
		}
		interface Body {
			/** Number of Knowledge Article Views visited per day */
			KnowledgeArticleView: DevKit.Form.Controls.ControlInteger;
			/** Shows where the knowledge was used */
			Location: DevKit.Form.Controls.ControlOptionSet;
			/** Information about the Day */
			ViewDate: DevKit.Form.Controls.ControlDate;
		}
	}
	class FormKnowledgeArticleViews extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form KnowledgeArticleViews
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form KnowledgeArticleViews */
		Body: LuckyStar.FormKnowledgeArticleViews.Body;
	}
	namespace FormKnowledgeArticleViews_MainInteractionCentric {
		interface Tabs {
		}
		interface Body {
			/** Number of Knowledge Article Views visited per day */
			KnowledgeArticleView: DevKit.Form.Controls.ControlInteger;
			/** Shows where the knowledge was used */
			Location: DevKit.Form.Controls.ControlOptionSet;
			/** Information about the Day */
			ViewDate: DevKit.Form.Controls.ControlDate;
		}
	}
	class FormKnowledgeArticleViews_MainInteractionCentric extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form KnowledgeArticleViews_MainInteractionCentric
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form KnowledgeArticleViews_MainInteractionCentric */
		Body: LuckyStar.FormKnowledgeArticleViews_MainInteractionCentric.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Choose the Knowledge Article. */
		KnowledgeArticleId: DevKit.WebApi.LookupValue;
		/** Number of Knowledge Article Views visited per day */
		KnowledgeArticleView: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the Knowledge Article Views */
		KnowledgeArticleViewsId: DevKit.WebApi.GuidValue;
		/** Shows where the knowledge was used */
		Location: DevKit.WebApi.OptionSetValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the knowledge article views. */
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who owns the knowledge article views. */
		OwningUser: DevKit.WebApi.GuidValueReadonly;
		/** Status of the Knowledge Article Views */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Knowledge Article Views */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValueReadonly;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Information about the Day */
		ViewDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
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
//{'JsForm':['KnowledgeArticleViews','KnowledgeArticleViews MainInteractionCentric'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}