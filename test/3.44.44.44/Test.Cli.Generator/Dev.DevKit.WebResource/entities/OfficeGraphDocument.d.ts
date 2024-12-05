//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormOfficeGraphDocument_Information {
		interface Tabs {
		}
		interface Body {

		}
		interface Navigation {

		}
	}
	class FormOfficeGraphDocument_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form OfficeGraphDocument_Information */
		Body: DevKit.FormOfficeGraphDocument_Information.Body;
		/** The Navigation of form OfficeGraphDocument_Information */
		Navigation: DevKit.FormOfficeGraphDocument_Information.Navigation;
		/** The SidePanes of form OfficeGraphDocument_Information */
		SidePanes: DevKit.SidePanes;
	}
	class OfficeGraphDocumentApi {
		/**
		* DynamicsCrm.DevKit OfficeGraphDocumentApi
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
		/** Shows Author Names of Office Graph Document. */
		readonly AuthorNames: string;
		/** Shows Created By of Office Graph Document. */
		readonly CreatedBy: string;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Date and time when the record was created. */
		readonly CreatedTime_UtcDateAndTime: Date;
		/** Document Id. */
		DocumentId: string;
		/** Document Last Modified By */
		readonly DocumentLastModifiedBy: string;
		/** Document Last Modified On */
		readonly DocumentLastModifiedOn_UtcDateAndTime: Date;
		/** document preview metadata */
		readonly DocumentPreviewMetadata: string;
		/** Exchange rate for the currency associated with the Office Graph Document with respect to the base currency. */
		readonly ExchangeRate: number;
		/** File Extension of Office Graph Document. */
		readonly FileExtension: string;
		/** Shows the File Type of Office Graph Document. */
		readonly FileType: string;
		/** Shows modified by of Office Graph Document. */
		readonly ModifiedBy: string;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedTime_UtcDateAndTime: Date;
		/** Unique identifier for entity instances */
		OfficeGraphDocumentId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Shows the Preview Image Url Office Graph Document. */
		readonly PreviewImageUrl: string;
		/** Shows Query Type of child folders */
		readonly QueryType: number;
		/** The relevancy rank of the document retrieved */
		readonly Rank: number;
		/** The online read url */
		readonly ReadUrl: string;
		/** Secondary File Extension of Office Graph Document. */
		readonly SecondaryFileExtension: string;
		/** The title of the parent document site */
		readonly SiteTitle: string;
		/** The site url for the parent document site */
		readonly SiteUrl: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** The title of the entity. */
		Title: string;
		/** Exchange rate for the currency associated with the Office Graph Document with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		/** Shows View Count of child folders. */
		readonly ViewCount: number;
		/** Shows the Web Location Url of Office Graph Document. */
		readonly WebLocationUrl: string;
		readonly FormattedValue: {
			/** Shows Author Names of Office Graph Document. */
			readonly AuthorNames: string;
			/** Shows Created By of Office Graph Document. */
			readonly CreatedBy: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Date and time when the record was created. */
			readonly CreatedTime_UtcDateAndTime: string;
			/** Document Id. */
			readonly DocumentId: string;
			/** Document Last Modified By */
			readonly DocumentLastModifiedBy: string;
			/** Document Last Modified On */
			readonly DocumentLastModifiedOn_UtcDateAndTime: string;
			/** document preview metadata */
			readonly DocumentPreviewMetadata: string;
			/** Exchange rate for the currency associated with the Office Graph Document with respect to the base currency. */
			readonly ExchangeRate: string;
			/** File Extension of Office Graph Document. */
			readonly FileExtension: string;
			/** Shows the File Type of Office Graph Document. */
			readonly FileType: string;
			/** Shows modified by of Office Graph Document. */
			readonly ModifiedBy: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedTime_UtcDateAndTime: string;
			/** Unique identifier for entity instances */
			readonly OfficeGraphDocumentId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Shows the Preview Image Url Office Graph Document. */
			readonly PreviewImageUrl: string;
			/** Shows Query Type of child folders */
			readonly QueryType: string;
			/** The relevancy rank of the document retrieved */
			readonly Rank: string;
			/** The online read url */
			readonly ReadUrl: string;
			/** Secondary File Extension of Office Graph Document. */
			readonly SecondaryFileExtension: string;
			/** The title of the parent document site */
			readonly SiteTitle: string;
			/** The site url for the parent document site */
			readonly SiteUrl: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** The title of the entity. */
			readonly Title: string;
			/** Exchange rate for the currency associated with the Office Graph Document with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
			/** Shows View Count of child folders. */
			readonly ViewCount: string;
			/** Shows the Web Location Url of Office Graph Document. */
			readonly WebLocationUrl: string;
		}
	}
}
declare namespace OptionSet {
	namespace OfficeGraphDocument {
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