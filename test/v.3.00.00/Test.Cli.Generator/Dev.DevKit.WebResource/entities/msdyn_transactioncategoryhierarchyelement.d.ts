//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_transactioncategoryhierarchyelement_Information {
		interface tab__2F7899C7_8981_4AA1_823F_F08673E0CDDB_Sections {
			_2F7899C7_8981_4AA1_823F_F08673E0CDDB_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__2F7899C7_8981_4AA1_823F_F08673E0CDDB extends DevKit.Controls.ITab {
			Section: tab__2F7899C7_8981_4AA1_823F_F08673E0CDDB_Sections;
		}
		interface Tabs {
			_2F7899C7_8981_4AA1_823F_F08673E0CDDB: tab__2F7899C7_8981_4AA1_823F_F08673E0CDDB;
		}
		interface Body {
			Tab: Tabs;
			msdyn_ChildCategory: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_ParentCategory: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_transactioncategoryhierarchyelement_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_transactioncategoryhierarchyelement_Information */
		Body: DevKit.Formmsdyn_transactioncategoryhierarchyelement_Information.Body;
		/** The Process of form msdyn_transactioncategoryhierarchyelement_Information */
		Process: DevKit.Formmsdyn_transactioncategoryhierarchyelement_Information.Process;
		/** The SidePanes of form msdyn_transactioncategoryhierarchyelement_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_transactioncategoryhierarchyelementApi {
		/**
		* DynamicsCrm.DevKit msdyn_transactioncategoryhierarchyelementApi
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
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_ChildCategory: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_ParentCategory: string;
		/** Unique identifier for entity instances */
		msdyn_transactioncategoryhierarchyelementId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Transaction Category Hierarchy Element */
		statecode: OptionSet.msdyn_transactioncategoryhierarchyelement.statecode;
		/** Reason for the status of the Transaction Category Hierarchy Element */
		statuscode: OptionSet.msdyn_transactioncategoryhierarchyelement.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_transactioncategoryhierarchyelement {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}