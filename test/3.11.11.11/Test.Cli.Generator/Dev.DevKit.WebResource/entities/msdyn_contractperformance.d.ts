//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_contractperformance_Information {
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
	class Formmsdyn_contractperformance_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_contractperformance_Information */
		Body: DevKit.Formmsdyn_contractperformance_Information.Body;
		/** The Process of form msdyn_contractperformance_Information */
		Process: DevKit.Formmsdyn_contractperformance_Information.Process;
		/** The SidePanes of form msdyn_contractperformance_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_contractperformanceApi {
		/**
		* DynamicsCrm.DevKit msdyn_contractperformanceApi
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
		/** Type the Billed amount for the order. */
		msdyn_BilledAmount: number;
		/** Value of the Billed Amount in base currency. */
		readonly msdyn_billedamount_Base: number;
		/** Code to identify billing type. */
		msdyn_BillingTypeCode: number;
		/** name of billing Type */
		msdyn_BillingTypeName: string;
		/** Unique identifier of contractline id. */
		msdyn_ContractLineId: string;
		/** Unique identifier for entity instances */
		msdyn_contractperformanceId: string;
		/** Type the Contracted amount attached with the contract. */
		msdyn_Contractvalue: number;
		/** Value of the Contract value in base currency. */
		readonly msdyn_contractvalue_Base: number;
		/** Type the Cost incurred amount for the order. */
		msdyn_CostIncurred: number;
		/** Value of the Cost Incurred in base currency. */
		readonly msdyn_costincurred_Base: number;
		/** 1,000,000,000,000.0000 */
		msdyn_EstimatedCost: number;
		/** Value of the Estimated Cost in base currency. */
		readonly msdyn_estimatedcost_Base: number;
		/** Expected margin of contract and contractLine */
		msdyn_ExpectedMargin: number;
		/** Gross Margin of contract and contract line */
		msdyn_GrossMargin: number;
		/** Record is Product Type or not */
		msdyn_IsProduct: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Choose the related order so that order data and contractPerformance data are linked for reporting and analytics. */
		msdyn_salesorderid: string;
		/** Array of transaction classification which converted into string */
		msdyn_TransactionClassification: string;
		msdyn_Unit: string;
		msdyn_UnitPrice: number;
		/** Value of the Unit Price in base currency. */
		readonly msdyn_unitprice_Base: number;
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
		/** Status of the Contract Performance */
		statecode: OptionSet.msdyn_contractperformance.statecode;
		/** Reason for the status of the Contract Performance */
		statuscode: OptionSet.msdyn_contractperformance.statuscode;
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
			/** Type the Billed amount for the order. */
			readonly msdyn_BilledAmount: string;
			/** Value of the Billed Amount in base currency. */
			readonly msdyn_billedamount_Base: string;
			/** Code to identify billing type. */
			readonly msdyn_BillingTypeCode: string;
			/** name of billing Type */
			readonly msdyn_BillingTypeName: string;
			/** Unique identifier of contractline id. */
			readonly msdyn_ContractLineId: string;
			/** Unique identifier for entity instances */
			readonly msdyn_contractperformanceId: string;
			/** Type the Contracted amount attached with the contract. */
			readonly msdyn_Contractvalue: string;
			/** Value of the Contract value in base currency. */
			readonly msdyn_contractvalue_Base: string;
			/** Type the Cost incurred amount for the order. */
			readonly msdyn_CostIncurred: string;
			/** Value of the Cost Incurred in base currency. */
			readonly msdyn_costincurred_Base: string;
			/** 1,000,000,000,000.0000 */
			readonly msdyn_EstimatedCost: string;
			/** Value of the Estimated Cost in base currency. */
			readonly msdyn_estimatedcost_Base: string;
			/** Expected margin of contract and contractLine */
			readonly msdyn_ExpectedMargin: string;
			/** Gross Margin of contract and contract line */
			readonly msdyn_GrossMargin: string;
			/** Record is Product Type or not */
			readonly msdyn_IsProduct: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Choose the related order so that order data and contractPerformance data are linked for reporting and analytics. */
			readonly msdyn_salesorderid: string;
			/** Array of transaction classification which converted into string */
			readonly msdyn_TransactionClassification: string;
			readonly msdyn_Unit: string;
			readonly msdyn_UnitPrice: string;
			/** Value of the Unit Price in base currency. */
			readonly msdyn_unitprice_Base: string;
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
			/** Status of the Contract Performance */
			readonly statecode: string;
			/** Reason for the status of the Contract Performance */
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
	namespace msdyn_contractperformance {
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