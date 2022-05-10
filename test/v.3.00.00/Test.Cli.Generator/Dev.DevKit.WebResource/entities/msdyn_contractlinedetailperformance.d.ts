//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_contractlinedetailperformance_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_contractlinedetailperformance_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_contractlinedetailperformance_Information */
		Body: DevKit.Formmsdyn_contractlinedetailperformance_Information.Body;
		/** The Process of form msdyn_contractlinedetailperformance_Information */
		Process: DevKit.Formmsdyn_contractlinedetailperformance_Information.Process;
		/** The SidePanes of form msdyn_contractlinedetailperformance_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_contractlinedetailperformanceApi {
		/**
		* DynamicsCrm.DevKit msdyn_contractlinedetailperformanceApi
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
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_BilledAmount: number;
		/** Value of the Billed Amount in base currency. */
		readonly msdyn_billedamount_Base: number;
		msdyn_BilledQuantity: number;
		msdyn_Category: string;
		/** Unique identifier of the Contract. */
		msdyn_ContractId: string;
		/** Unique identifier for entity instances */
		msdyn_contractlinedetailperformanceId: string;
		/** Unique identifier of the ContractLine. */
		msdyn_ContractLineId: string;
		/** Unique identifier for Contract Performance associated with Contract Line Detail Performance. */
		msdyn_ContractPerformanceId: string;
		msdyn_CostIncurred: number;
		/** Value of the Cost Incurred in base currency. */
		readonly msdyn_costincurred_Base: number;
		msdyn_LoggedHours: number;
		msdyn_LoggedQuantity: number;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_Role: string;
		msdyn_TransactionClass: string;
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
		/** Status of the Contract Line Detail Performance */
		statecode: OptionSet.msdyn_contractlinedetailperformance.statecode;
		/** Reason for the status of the Contract Line Detail Performance */
		statuscode: OptionSet.msdyn_contractlinedetailperformance.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_BilledAmount: string;
			/** Value of the Billed Amount in base currency. */
			readonly msdyn_billedamount_Base: string;
			readonly msdyn_BilledQuantity: string;
			readonly msdyn_Category: string;
			/** Unique identifier of the Contract. */
			readonly msdyn_ContractId: string;
			/** Unique identifier for entity instances */
			readonly msdyn_contractlinedetailperformanceId: string;
			/** Unique identifier of the ContractLine. */
			readonly msdyn_ContractLineId: string;
			/** Unique identifier for Contract Performance associated with Contract Line Detail Performance. */
			readonly msdyn_ContractPerformanceId: string;
			readonly msdyn_CostIncurred: string;
			/** Value of the Cost Incurred in base currency. */
			readonly msdyn_costincurred_Base: string;
			readonly msdyn_LoggedHours: string;
			readonly msdyn_LoggedQuantity: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_Role: string;
			readonly msdyn_TransactionClass: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Contract Line Detail Performance */
			readonly statecode: string;
			/** Reason for the status of the Contract Line Detail Performance */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_contractlinedetailperformance {
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}