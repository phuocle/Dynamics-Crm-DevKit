//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormRecommendedDocument_Information {
		interface Tabs {
		}
		interface Body {

		}
	}
	class FormRecommendedDocument_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form RecommendedDocument_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form RecommendedDocument_Information */
		Body: LuckyMokey.FormRecommendedDocument_Information.Body;
	}
	class RecommendedDocumentApi {
		/**
		* DynamicsCrm.DevKit RecommendedDocumentApi
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
		/** Type the URL where the recommended document is located. */
		AbsoluteUrl: DevKit.WebApi.StringValueReadonly;
		/** Shows the associated record name of the recommended document. */
		AssociatedRecordName: DevKit.WebApi.StringValue;
		/** Shows the name of the author of the recommended document. */
		Author: DevKit.WebApi.StringValue;
		/** Select the document content type. */
		ContentType: DevKit.WebApi.StringValueReadonly;
		/** Shows the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the Edit URL of the recommended document. */
		EditUrl: DevKit.WebApi.StringValueReadonly;
		/** Shows the exchange rate for the currency associated with the recommended document with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the external document. */
		ExternalDocumentId: DevKit.WebApi.StringValue;
		/** Shows who last updated the document record. */
		ExternalModifiedBy: DevKit.WebApi.StringValue;
		/** Shows the file size. */
		FileSize: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the file type. */
		FileType: DevKit.WebApi.StringValueReadonly;
		/** Shows the full name of the recommended document. */
		FullName: DevKit.WebApi.StringValueReadonly;
		/** Stores the Icon Class name of the recommended document. */
		IconClassName: DevKit.WebApi.StringValueReadonly;
		/** Shows the location of the recommended document. */
		Location: DevKit.WebApi.StringValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the Read URL of the recommended document. */
		ReadUrl: DevKit.WebApi.StringValueReadonly;
		/** Shows the recommended document record. */
		RecommendedDocumentId: DevKit.WebApi.GuidValue;
		/** Choose the parent record that the recommended document record is associated with. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		/** Shows the source storage of the recommended document. */
		Source: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type a title for the entity. */
		Title: DevKit.WebApi.StringValue;
		/** Shows the exchange rate for the currency associated with the recommended document with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Shows the recommended document version. */
		Version: DevKit.WebApi.StringValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RecommendedDocument {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}