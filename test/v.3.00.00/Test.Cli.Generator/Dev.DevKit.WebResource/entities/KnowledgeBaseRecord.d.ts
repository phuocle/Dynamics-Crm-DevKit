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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormKnowledge_Base_Articles extends DevKit.IForm {
		/**
		* Knowledge Base Articles [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Knowledge_Base_Articles */
		Body: DevKit.FormKnowledge_Base_Articles.Body;
		/** The Header section of form Knowledge_Base_Articles */
		Header: DevKit.FormKnowledge_Base_Articles.Header;
		/** The Process of form Knowledge_Base_Articles */
		Process: DevKit.FormKnowledge_Base_Articles.Process;
		/** The SidePanes of form Knowledge_Base_Articles */
		SidePanes: DevKit.SidePanes;
	}
	class KnowledgeBaseRecordApi {
		/**
		* DynamicsCrm.DevKit KnowledgeBaseRecordApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Exchange rate for the currency associated with the knowledge base record with respect to the base currency. */
		readonly ExchangeRate: number;
		/** This field will be used to store the Unique ID of the associated Knowledge Base records */
		KnowledgeBaseRecordId: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Shows the internal Parature service desk URL of the knowledge base records. */
		PrivateUrl: string;
		/** Shows the public Parature portal URL of the knowledge base records. */
		PublicUrl: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the title of the knowledge base (KB) Record. */
		Title: string;
		/** Exchange rate for the currency associated with the Knowledge Base Record with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Shows the unique ID of the linked knowledge base (KB) article. */
		UniqueId: string;
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace KnowledgeBaseRecord {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}