//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRecommendedDocument_Information {
		interface Tabs {
		}
		interface Body {

		}
		interface Navigation {

		}
	}
	class FormRecommendedDocument_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RecommendedDocument_Information */
		Body: DevKit.FormRecommendedDocument_Information.Body;
		/** The Navigation of form RecommendedDocument_Information */
		Navigation: DevKit.FormRecommendedDocument_Information.Navigation;
		/** The SidePanes of form RecommendedDocument_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Type the URL where the recommended document is located. */
		readonly AbsoluteUrl: string;
		/** Shows the associated record name of the recommended document. */
		AssociatedRecordName: string;
		/** Shows the name of the author of the recommended document. */
		Author: string;
		/** Select the document content type. */
		readonly ContentType: string;
		/** Shows the user who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the Edit URL of the recommended document. */
		readonly EditUrl: string;
		/** Shows the exchange rate for the currency associated with the recommended document with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Shows the external document. */
		ExternalDocumentId: string;
		/** Shows who last updated the document record. */
		ExternalModifiedBy: string;
		/** Shows the file size. */
		readonly FileSize: number;
		/** Shows the file type. */
		readonly FileType: string;
		/** Shows the full name of the recommended document. */
		readonly FullName: string;
		/** Stores the Icon Class name of the recommended document. */
		readonly IconClassName: string;
		/** Shows the location of the recommended document. */
		readonly Location: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the organization. */
		readonly OrganizationId: string;
		/** Shows the Read URL of the recommended document. */
		readonly ReadUrl: string;
		/** Shows the recommended document record. */
		RecommendedDocumentId: string;
		/** Shows the source storage of the recommended document. */
		Source: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Type a title for the entity. */
		Title: string;
		/** Shows the exchange rate for the currency associated with the recommended document with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Shows the recommended document version. */
		readonly Version: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Type the URL where the recommended document is located. */
			readonly AbsoluteUrl: string;
			/** Shows the associated record name of the recommended document. */
			readonly AssociatedRecordName: string;
			/** Shows the name of the author of the recommended document. */
			readonly Author: string;
			/** Select the document content type. */
			readonly ContentType: string;
			/** Shows the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the Edit URL of the recommended document. */
			readonly EditUrl: string;
			/** Shows the exchange rate for the currency associated with the recommended document with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Shows the external document. */
			readonly ExternalDocumentId: string;
			/** Shows who last updated the document record. */
			readonly ExternalModifiedBy: string;
			/** Shows the file size. */
			readonly FileSize: string;
			/** Shows the file type. */
			readonly FileType: string;
			/** Shows the full name of the recommended document. */
			readonly FullName: string;
			/** Stores the Icon Class name of the recommended document. */
			readonly IconClassName: string;
			/** Shows the location of the recommended document. */
			readonly Location: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the organization. */
			readonly OrganizationId: string;
			/** Shows the Read URL of the recommended document. */
			readonly ReadUrl: string;
			/** Shows the recommended document record. */
			readonly RecommendedDocumentId: string;
			/** Shows the source storage of the recommended document. */
			readonly Source: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Type a title for the entity. */
			readonly Title: string;
			/** Shows the exchange rate for the currency associated with the recommended document with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Shows the recommended document version. */
			readonly Version: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RecommendedDocument {
		enum RegardingObjectTypeCode {
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