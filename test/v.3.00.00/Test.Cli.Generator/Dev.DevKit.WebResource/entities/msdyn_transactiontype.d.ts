﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_transactiontype_Information {
		interface tab__FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2_Sections {
			_FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2 extends DevKit.Controls.ITab {
			Section: tab__FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2_Sections;
		}
		interface Tabs {
			_FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2: tab__FB738610_ECE5_4F2C_BE45_09EA8EB0CFE2;
		}
		interface Body {
			Tab: Tabs;
			msdyn_DefaultUnit: DevKit.Controls.Lookup;
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			/** The code of the transaction type. */
			msdyn_TransactionTypeCode: DevKit.Controls.OptionSet;
			msdyn_UnitGroup: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_transactiontype_msdyn_contractlinescheduleofvalue_transactiontype: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_transactiontype_msdyn_expense_TransactionType: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_transactiontype_msdyn_quotelineanalyticsbreakdown_TransactionType: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_transactiontype_msdyn_transactiontype_ParentTransactionType: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_transactiontype_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_transactiontype_Information */
		Body: DevKit.Formmsdyn_transactiontype_Information.Body;
		/** The Navigation of form msdyn_transactiontype_Information */
		Navigation: DevKit.Formmsdyn_transactiontype_Information.Navigation;
		/** The Process of form msdyn_transactiontype_Information */
		Process: DevKit.Formmsdyn_transactiontype_Information.Process;
		/** The SidePanes of form msdyn_transactiontype_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_transactiontypeApi {
		/**
		* DynamicsCrm.DevKit msdyn_transactiontypeApi
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
		msdyn_DefaultUnit: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_TransactionClassification: OptionSet.msdyn_transactiontype.msdyn_TransactionClassification;
		/** The code of the transaction type. */
		msdyn_TransactionTypeCode: OptionSet.msdyn_transactiontype.msdyn_TransactionTypeCode;
		/** Unique identifier for entity instances */
		msdyn_transactiontypeId: string;
		msdyn_UnitGroup: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Transaction Type */
		statecode: OptionSet.msdyn_transactiontype.statecode;
		/** Reason for the status of the Transaction Type */
		statuscode: OptionSet.msdyn_transactiontype.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_transactiontype {
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
		enum msdyn_TransactionTypeCode {
			/** 192350006 */
			Billed_Sales,
			/** 192350000 */
			Cost,
			/** 192350008 */
			Inter_Organizational_Sales,
			/** 192350004 */
			Project_Contract,
			/** 192350007 */
			Resourcing_Unit_Cost,
			/** 192350005 */
			Unbilled_Sales
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