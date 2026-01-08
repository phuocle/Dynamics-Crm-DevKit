//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class OfficeGraphDocumentApi {
		/**
		* DynamicsCrm.DevKit OfficeGraphDocumentApi
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
		/** Shows Author Names of Office Graph Document. */
		readonly AuthorNames: string | null;
		/** Shows Created By of Office Graph Document. */
		readonly CreatedBy: string | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedTime_UtcDateAndTime: Date | null;
		/** Document Id. */
		DocumentId: string | null;
		/** Document Last Modified By */
		readonly DocumentLastModifiedBy: string | null;
		/** Document Last Modified On */
		readonly DocumentLastModifiedOn_UtcDateAndTime: Date | null;
		/** document preview metadata */
		readonly DocumentPreviewMetadata: string | null;
		/** Exchange rate for the currency associated with the Office Graph Document with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** File Extension of Office Graph Document. */
		readonly FileExtension: string | null;
		/** Shows the File Type of Office Graph Document. */
		readonly FileType: string | null;
		/** Shows modified by of Office Graph Document. */
		readonly ModifiedBy: string | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedTime_UtcDateAndTime: Date | null;
		/** Unique identifier for entity instances */
		OfficeGraphDocumentId: string | null;
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/** Shows the Preview Image Url Office Graph Document. */
		readonly PreviewImageUrl: string | null;
		/** Shows Query Type of child folders */
		readonly QueryType: number | null;
		/** The relevancy rank of the document retrieved */
		readonly Rank: number | null;
		/** The online read url */
		readonly ReadUrl: string | null;
		/** Secondary File Extension of Office Graph Document. */
		readonly SecondaryFileExtension: string | null;
		/** The title of the parent document site */
		readonly SiteTitle: string | null;
		/** The site url for the parent document site */
		readonly SiteUrl: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** The title of the entity. */
		Title: string | null;
		/** Exchange rate for the currency associated with the Office Graph Document with respect to the base currency. */
		TransactionCurrencyId: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		readonly VersionNumber: number | null;
		/** Shows View Count of child folders. */
		readonly ViewCount: number | null;
		/** Shows the Web Location Url of Office Graph Document. */
		readonly WebLocationUrl: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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