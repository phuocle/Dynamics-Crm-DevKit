//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKnowledge_Base_Articles {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the unique ID of the linked knowledge base (KB) article. */
			UniqueId: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Controls.Note;
			/** Shows the internal Parature service desk URL of the knowledge base records. */
			PrivateUrl: DevKit.Controls.String;
			/** Shows the public Parature portal URL of the knowledge base records. */
			PublicUrl: DevKit.Controls.String;
			/** Shows the title of the knowledge base (KB) Record. */
			Title: DevKit.Controls.String;
			/** Shows the unique ID of the linked knowledge base (KB) article. */
			UniqueId: DevKit.Controls.String;
		}
	}
	export class FormKnowledge_Base_Articles extends DevKit.IForm {
		/**
		* Knowledge Base Articles [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Knowledge_Base_Articles */
		Body: DevKit.FormKnowledge_Base_Articles.Body;
		/** The Header section of form Knowledge_Base_Articles */
		Header: DevKit.FormKnowledge_Base_Articles.Header;
	}
	export class KnowledgeBaseRecordApi {
		/**
		* DynamicsCrm.DevKit KnowledgeBaseRecordApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Exchange rate for the currency associated with the knowledge base record with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** This field will be used to store the Unique ID of the associated Knowledge Base records */
		KnowledgeBaseRecordId: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/** Shows the internal Parature service desk URL of the knowledge base records. */
		PrivateUrl: string | null;
		/** Shows the public Parature portal URL of the knowledge base records. */
		PublicUrl: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Shows the title of the knowledge base (KB) Record. */
		Title: string | null;
		/** Exchange rate for the currency associated with the Knowledge Base Record with respect to the base currency. */
		TransactionCurrencyId: string | null;
		/** Shows the unique ID of the linked knowledge base (KB) article. */
		UniqueId: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Exchange rate for the currency associated with the knowledge base record with respect to the base currency. */
			readonly ExchangeRate: string;
			/** This field will be used to store the Unique ID of the associated Knowledge Base records */
			readonly KnowledgeBaseRecordId: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Shows the internal Parature service desk URL of the knowledge base records. */
			readonly PrivateUrl: string;
			/** Shows the public Parature portal URL of the knowledge base records. */
			readonly PublicUrl: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the title of the knowledge base (KB) Record. */
			readonly Title: string;
			/** Exchange rate for the currency associated with the Knowledge Base Record with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** Shows the unique ID of the linked knowledge base (KB) article. */
			readonly UniqueId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace KnowledgeBaseRecord {
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