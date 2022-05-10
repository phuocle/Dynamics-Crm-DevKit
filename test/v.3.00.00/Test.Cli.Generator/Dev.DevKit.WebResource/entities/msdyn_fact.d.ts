//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_fact_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_fact_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_fact_Information */
		Body: DevKit.Formmsdyn_fact_Information.Body;
		/** The Process of form msdyn_fact_Information */
		Process: DevKit.Formmsdyn_fact_Information.Process;
		/** The SidePanes of form msdyn_fact_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_factApi {
		/**
		* DynamicsCrm.DevKit msdyn_factApi
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
		msdyn_AccountCustomer: string;
		msdyn_AccountVendor: string;
		msdyn_ActChargeableBilledSalesAmount: number;
		/** Value of the Actual Chargeable Billed Sales Amount in base currency. */
		readonly msdyn_actchargeablebilledsalesamount_Base: number;
		msdyn_ActChargeableBilledSalesQuantity: number;
		msdyn_ActChargeableCostAmount: number;
		/** Value of the Actual Chargeable Cost Amount in base currency. */
		readonly msdyn_actchargeablecostamount_Base: number;
		msdyn_ActChargeableCostQuantity: number;
		msdyn_ActChargeableUnbilledSalesAmount: number;
		/** Value of the Actual Chargeable Unbilled Sales Amount in base currency. */
		readonly msdyn_actchargeableunbilledsalesamount_Base: number;
		msdyn_ActChargeableUnbilledSalesQuantity: number;
		msdyn_ActNoChargeBilledSalesAmount: number;
		/** Value of the Actual No Charge Billed Sales Amount in base currency. */
		readonly msdyn_actnochargebilledsalesamount_Base: number;
		msdyn_ActNoChargeBilledSalesQuantity: number;
		msdyn_ActNoChargeCostAmount: number;
		/** Value of the Actual No Charge Cost Amount in base currency. */
		readonly msdyn_actnochargecostamount_Base: number;
		msdyn_ActNoChargeCostQuantity: number;
		msdyn_ActNoChargeUnbilledSalesAmount: number;
		/** Value of the Actual No Charge Unbilled Sales Amount in base currency. */
		readonly msdyn_actnochargeunbilledsalesamount_Base: number;
		msdyn_ActNoChargeUnbilledSalesQuantity: number;
		msdyn_ActNonChargeableCostAmount: number;
		/** Value of the Actual Non Chargeable Cost Amount in base currency. */
		readonly msdyn_actnonchargeablecostamount_Base: number;
		msdyn_ActNonChargeableCostQuantity: number;
		msdyn_ActNonChargeableUnbilledSalesAmount: number;
		/** Value of the Actual Non Chargeable Unbilled Sales Amount in base currency. */
		readonly msdyn_actnonchargeableunbilledsalesamount_Base: number;
		msdyn_ActNonChargeableUnbilledSalesQuantity: number;
		msdyn_bookableresource: string;
		msdyn_ContactCustomer: string;
		msdyn_ContactVendor: string;
		msdyn_CustomerType: OptionSet.msdyn_fact.msdyn_CustomerType;
		/** Enter the transaction date of the business event. */
		msdyn_DocumentDate_UtcDateOnly: Date;
		readonly msdyn_earnedrevenue: number;
		/** Value of the Earned Revenue in base currency. */
		readonly msdyn_earnedrevenue_Base: number;
		/** Enter the end date for this transaction. */
		msdyn_EndDate_UtcDateOnly: Date;
		msdyn_EstChargeableBilledSalesAmount: number;
		/** Value of the Estimated Chargeable Billed Sales Amount in base currency. */
		readonly msdyn_estchargeablebilledsalesamount_Base: number;
		msdyn_EstChargeableBilledSalesQuantity: number;
		msdyn_EstChargeableCostAmount: number;
		/** Value of the Estimated Chargeable Cost Amount in base currency. */
		readonly msdyn_estchargeablecostamount_Base: number;
		msdyn_EstChargeableCostQuantity: number;
		msdyn_EstChargeableUnbilledSalesAmount: number;
		/** Value of the Estimated Chargeable Unbilled Sales Amount in base currency. */
		readonly msdyn_estchargeableunbilledsalesamount_Base: number;
		msdyn_EstChargeableUnbilledSalesQuantity: number;
		msdyn_Estimate: string;
		msdyn_estimatelineid: string;
		msdyn_EstNoChargeBilledSalesAmount: number;
		/** Value of the Estimated No Charge Billed Sales Amount in base currency. */
		readonly msdyn_estnochargebilledsalesamount_Base: number;
		msdyn_EstNoChargeBilledSalesQuantity: number;
		msdyn_EstNoChargeCostAmount: number;
		/** Value of the Estimated No Charge Cost Amount in base currency. */
		readonly msdyn_estnochargecostamount_Base: number;
		msdyn_EstNoChargeCostQuantity: number;
		msdyn_EstNoChargeUnbilledSalesAmount: number;
		/** Value of the Estimated No Charge Unbilled Sales Amount in base currency. */
		readonly msdyn_estnochargeunbilledsalesamount_Base: number;
		msdyn_EstNoChargeUnbilledSalesQuantity: number;
		msdyn_EstNonChargeableCostAmount: number;
		/** Value of the Estimated Non Chargeable Cost Amount in base currency. */
		readonly msdyn_estnonchargeablecostamount_Base: number;
		msdyn_EstNonChargeableCostQuantity: number;
		msdyn_EstNonChargeableUnbilledSalesAmount: number;
		/** Value of the Estimated Non Chargeable Unbilled Sales Amount in base currency. */
		readonly msdyn_estnonchargeableunbilledsalesamount_Base: number;
		msdyn_EstNonChargeableUnbilledSalesQuantity: number;
		/** Unique identifier for entity instances */
		msdyn_factId: string;
		msdyn_FactType: OptionSet.msdyn_fact.msdyn_FactType;
		readonly msdyn_grossmargin: number;
		/** Value of the Gross Margin in base currency. */
		readonly msdyn_grossmargin_Base: number;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_Product: string;
		msdyn_Project: string;
		msdyn_ResourceCategory: string;
		msdyn_SalesContract: string;
		/** (Deprecated) */
		msdyn_SalesContractLine: string;
		/** Unique identifier for Project Contract Line associated with Fact. */
		msdyn_SalesContractLineId: string;
		/** Enter the start date. */
		msdyn_StartDate_UtcDateOnly: Date;
		msdyn_Task: string;
		readonly msdyn_totalcost: number;
		/** Value of the Total Cost in base currency. */
		readonly msdyn_totalcost_Base: number;
		readonly msdyn_totalhours: number;
		msdyn_TransactionCategory: string;
		msdyn_TransactionClassification: OptionSet.msdyn_fact.msdyn_TransactionClassification;
		msdyn_VendorType: OptionSet.msdyn_fact.msdyn_VendorType;
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
		/** Status of the Fact */
		statecode: OptionSet.msdyn_fact.statecode;
		/** Reason for the status of the Fact */
		statuscode: OptionSet.msdyn_fact.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the currency associated with the entity. */
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
			readonly msdyn_AccountCustomer: string;
			readonly msdyn_AccountVendor: string;
			readonly msdyn_ActChargeableBilledSalesAmount: string;
			/** Value of the Actual Chargeable Billed Sales Amount in base currency. */
			readonly msdyn_actchargeablebilledsalesamount_Base: string;
			readonly msdyn_ActChargeableBilledSalesQuantity: string;
			readonly msdyn_ActChargeableCostAmount: string;
			/** Value of the Actual Chargeable Cost Amount in base currency. */
			readonly msdyn_actchargeablecostamount_Base: string;
			readonly msdyn_ActChargeableCostQuantity: string;
			readonly msdyn_ActChargeableUnbilledSalesAmount: string;
			/** Value of the Actual Chargeable Unbilled Sales Amount in base currency. */
			readonly msdyn_actchargeableunbilledsalesamount_Base: string;
			readonly msdyn_ActChargeableUnbilledSalesQuantity: string;
			readonly msdyn_ActNoChargeBilledSalesAmount: string;
			/** Value of the Actual No Charge Billed Sales Amount in base currency. */
			readonly msdyn_actnochargebilledsalesamount_Base: string;
			readonly msdyn_ActNoChargeBilledSalesQuantity: string;
			readonly msdyn_ActNoChargeCostAmount: string;
			/** Value of the Actual No Charge Cost Amount in base currency. */
			readonly msdyn_actnochargecostamount_Base: string;
			readonly msdyn_ActNoChargeCostQuantity: string;
			readonly msdyn_ActNoChargeUnbilledSalesAmount: string;
			/** Value of the Actual No Charge Unbilled Sales Amount in base currency. */
			readonly msdyn_actnochargeunbilledsalesamount_Base: string;
			readonly msdyn_ActNoChargeUnbilledSalesQuantity: string;
			readonly msdyn_ActNonChargeableCostAmount: string;
			/** Value of the Actual Non Chargeable Cost Amount in base currency. */
			readonly msdyn_actnonchargeablecostamount_Base: string;
			readonly msdyn_ActNonChargeableCostQuantity: string;
			readonly msdyn_ActNonChargeableUnbilledSalesAmount: string;
			/** Value of the Actual Non Chargeable Unbilled Sales Amount in base currency. */
			readonly msdyn_actnonchargeableunbilledsalesamount_Base: string;
			readonly msdyn_ActNonChargeableUnbilledSalesQuantity: string;
			readonly msdyn_bookableresource: string;
			readonly msdyn_ContactCustomer: string;
			readonly msdyn_ContactVendor: string;
			readonly msdyn_CustomerType: string;
			/** Enter the transaction date of the business event. */
			readonly msdyn_DocumentDate_UtcDateOnly: string;
			readonly msdyn_earnedrevenue: string;
			/** Value of the Earned Revenue in base currency. */
			readonly msdyn_earnedrevenue_Base: string;
			/** Enter the end date for this transaction. */
			readonly msdyn_EndDate_UtcDateOnly: string;
			readonly msdyn_EstChargeableBilledSalesAmount: string;
			/** Value of the Estimated Chargeable Billed Sales Amount in base currency. */
			readonly msdyn_estchargeablebilledsalesamount_Base: string;
			readonly msdyn_EstChargeableBilledSalesQuantity: string;
			readonly msdyn_EstChargeableCostAmount: string;
			/** Value of the Estimated Chargeable Cost Amount in base currency. */
			readonly msdyn_estchargeablecostamount_Base: string;
			readonly msdyn_EstChargeableCostQuantity: string;
			readonly msdyn_EstChargeableUnbilledSalesAmount: string;
			/** Value of the Estimated Chargeable Unbilled Sales Amount in base currency. */
			readonly msdyn_estchargeableunbilledsalesamount_Base: string;
			readonly msdyn_EstChargeableUnbilledSalesQuantity: string;
			readonly msdyn_Estimate: string;
			readonly msdyn_estimatelineid: string;
			readonly msdyn_EstNoChargeBilledSalesAmount: string;
			/** Value of the Estimated No Charge Billed Sales Amount in base currency. */
			readonly msdyn_estnochargebilledsalesamount_Base: string;
			readonly msdyn_EstNoChargeBilledSalesQuantity: string;
			readonly msdyn_EstNoChargeCostAmount: string;
			/** Value of the Estimated No Charge Cost Amount in base currency. */
			readonly msdyn_estnochargecostamount_Base: string;
			readonly msdyn_EstNoChargeCostQuantity: string;
			readonly msdyn_EstNoChargeUnbilledSalesAmount: string;
			/** Value of the Estimated No Charge Unbilled Sales Amount in base currency. */
			readonly msdyn_estnochargeunbilledsalesamount_Base: string;
			readonly msdyn_EstNoChargeUnbilledSalesQuantity: string;
			readonly msdyn_EstNonChargeableCostAmount: string;
			/** Value of the Estimated Non Chargeable Cost Amount in base currency. */
			readonly msdyn_estnonchargeablecostamount_Base: string;
			readonly msdyn_EstNonChargeableCostQuantity: string;
			readonly msdyn_EstNonChargeableUnbilledSalesAmount: string;
			/** Value of the Estimated Non Chargeable Unbilled Sales Amount in base currency. */
			readonly msdyn_estnonchargeableunbilledsalesamount_Base: string;
			readonly msdyn_EstNonChargeableUnbilledSalesQuantity: string;
			/** Unique identifier for entity instances */
			readonly msdyn_factId: string;
			readonly msdyn_FactType: string;
			readonly msdyn_grossmargin: string;
			/** Value of the Gross Margin in base currency. */
			readonly msdyn_grossmargin_Base: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_Product: string;
			readonly msdyn_Project: string;
			readonly msdyn_ResourceCategory: string;
			readonly msdyn_SalesContract: string;
			/** (Deprecated) */
			readonly msdyn_SalesContractLine: string;
			/** Unique identifier for Project Contract Line associated with Fact. */
			readonly msdyn_SalesContractLineId: string;
			/** Enter the start date. */
			readonly msdyn_StartDate_UtcDateOnly: string;
			readonly msdyn_Task: string;
			readonly msdyn_totalcost: string;
			/** Value of the Total Cost in base currency. */
			readonly msdyn_totalcost_Base: string;
			readonly msdyn_totalhours: string;
			readonly msdyn_TransactionCategory: string;
			readonly msdyn_TransactionClassification: string;
			readonly msdyn_VendorType: string;
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
			/** Status of the Fact */
			readonly statecode: string;
			/** Reason for the status of the Fact */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_fact {
		enum msdyn_CustomerType {
			/** 192350001 */
			Account,
			/** 192350002 */
			Contact
		}
		enum msdyn_FactType {
			/** 192350000 */
			Actual,
			/** 192350001 */
			Estimate
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
		enum msdyn_VendorType {
			/** 192350001 */
			Account,
			/** 192350002 */
			Contact
		}
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