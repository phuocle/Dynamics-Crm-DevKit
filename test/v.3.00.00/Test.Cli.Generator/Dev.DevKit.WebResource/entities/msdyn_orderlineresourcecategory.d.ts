//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_orderlineresourcecategory_Information {
		interface tab__2D187AD5_0373_4D39_B4E5_27AB42DFCF85_Sections {
			_2D187AD5_0373_4D39_B4E5_27AB42DFCF85_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__2D187AD5_0373_4D39_B4E5_27AB42DFCF85 extends DevKit.Controls.ITab {
			Section: tab__2D187AD5_0373_4D39_B4E5_27AB42DFCF85_Sections;
		}
		interface Tabs {
			_2D187AD5_0373_4D39_B4E5_27AB42DFCF85: tab__2D187AD5_0373_4D39_B4E5_27AB42DFCF85;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether this role will be charged to the customer or not. Only transactions logged by chargeable roles will add to the invoice total */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Select the role that is being associated to the project contract line. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_orderlineresourcecategory_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_orderlineresourcecategory_Information */
		Body: DevKit.Formmsdyn_orderlineresourcecategory_Information.Body;
		/** The Process of form msdyn_orderlineresourcecategory_Information */
		Process: DevKit.Formmsdyn_orderlineresourcecategory_Information.Process;
		/** The SidePanes of form msdyn_orderlineresourcecategory_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_orderlineresourcecategoryApi {
		/**
		* DynamicsCrm.DevKit msdyn_orderlineresourcecategoryApi
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
		/** Select whether this role will be charged to the customer or not. Only transactions logged by chargeable roles will add to the invoice total */
		msdyn_BillingType: OptionSet.msdyn_orderlineresourcecategory.msdyn_BillingType;
		/** (Deprecated) Project contract line corresponding to this record. */
		msdyn_ContractLine: string;
		/** Unique identifier for Project Contract Line associated with Project Contract Line Resource Category. */
		msdyn_ContractLineId: string;
		/** Select the transaction classification that this role is associated to on the project contract line. */
		msdyn_ContractLineTransactionClassification: string;
		/** Type the name of the custom entity. */
		msdyn_description: string;
		/** Shows the entity instances. */
		msdyn_orderlineresourcecategoryId: string;
		/** Select the role that is being associated to the project contract line. */
		msdyn_ResourceCategory: string;
		/** Transaction type corresponding to this record */
		msdyn_TransactionClassification: OptionSet.msdyn_orderlineresourcecategory.msdyn_TransactionClassification;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Project Contract Line Resource Category */
		statecode: OptionSet.msdyn_orderlineresourcecategory.statecode;
		/** Reason for the status of the Project Contract Line Resource Category */
		statuscode: OptionSet.msdyn_orderlineresourcecategory.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_orderlineresourcecategory {
		enum msdyn_BillingType {
			/** 192350001 */
			Chargeable,
			/** 192350002 */
			Complimentary,
			/** 192350000 */
			Non_Chargeable,
			/** 192350003 */
			Not_Available
		}
		enum msdyn_TransactionClassification {
			/** 690970001 */
			Additional,
			/** 690970000 */
			Commission,
			/** 192350001 */
			Expense,
			/** 192350004 */
			Fee,
			/** 192350002 */
			Material,
			/** 192350003 */
			Milestone,
			/** 690970002 */
			Tax,
			/** 192350000 */
			Time
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}