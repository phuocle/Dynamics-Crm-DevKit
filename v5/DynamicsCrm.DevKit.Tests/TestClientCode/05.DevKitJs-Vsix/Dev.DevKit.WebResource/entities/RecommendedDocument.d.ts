//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRecommendedDocument_Information {
		interface Tabs {
		}
		interface Body {

		}
	}
	export class FormRecommendedDocument_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form RecommendedDocument_Information */
		Body: DevKit.FormRecommendedDocument_Information.Body;
	}
	export class RecommendedDocumentApi {
		/**
		* DynamicsCrm.DevKit RecommendedDocumentApi
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
		/** Type the URL where the recommended document is located. */
		readonly AbsoluteUrl: string | null;
		/** Shows the associated record name of the recommended document. */
		AssociatedRecordName: string | null;
		/** Shows the name of the author of the recommended document. */
		Author: string | null;
		/** Select the document content type. */
		readonly ContentType: string | null;
		/** Shows the user who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Shows the Edit URL of the recommended document. */
		readonly EditUrl: string | null;
		/** Shows the exchange rate for the currency associated with the recommended document with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Shows the external document. */
		ExternalDocumentId: string | null;
		/** Shows who last updated the document record. */
		ExternalModifiedBy: string | null;
		/** Shows the file size. */
		readonly FileSize: number | null;
		/** Shows the file type. */
		readonly FileType: string | null;
		/** Shows the full name of the recommended document. */
		readonly FullName: string | null;
		/** Stores the Icon Class name of the recommended document. */
		readonly IconClassName: string | null;
		/** Shows the location of the recommended document. */
		readonly Location: string | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Shows the organization. */
		readonly OrganizationId: string | null;
		/** Shows the Read URL of the recommended document. */
		readonly ReadUrl: string | null;
		/** Shows the recommended document record. */
		RecommendedDocumentId: string | null;
		/** Shows the source storage of the recommended document. */
		Source: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Type a title for the entity. */
		Title: string | null;
		/** Shows the exchange rate for the currency associated with the recommended document with respect to the base currency. */
		TransactionCurrencyId: string | null;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Shows the recommended document version. */
		readonly Version: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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