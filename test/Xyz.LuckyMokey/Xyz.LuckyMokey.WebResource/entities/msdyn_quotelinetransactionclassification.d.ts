//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_quotelinetransactionclassification_Information {
		interface tab__88B25A3A_8A9B_4242_A326_AF609BA47CC0_Sections {
			_88B25A3A_8A9B_4242_A326_AF609BA47CC0_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ResourceCategoriesTab_Sections {
			ResourceCategoriesSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_TransactionCategoriesTab_Sections {
			TransactionCategoriesSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab__88B25A3A_8A9B_4242_A326_AF609BA47CC0 extends DevKit.Form.Controls.IControlTab {
			Section: tab__88B25A3A_8A9B_4242_A326_AF609BA47CC0_Sections;
		}
		interface tab_ResourceCategoriesTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_ResourceCategoriesTab_Sections;
		}
		interface tab_TransactionCategoriesTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_TransactionCategoriesTab_Sections;
		}
		interface Tabs {
			_88B25A3A_8A9B_4242_A326_AF609BA47CC0: tab__88B25A3A_8A9B_4242_A326_AF609BA47CC0;
			ResourceCategoriesTab: tab_ResourceCategoriesTab;
			TransactionCategoriesTab: tab_TransactionCategoriesTab;
		}
		interface Body {
			Tab: Tabs;
			ResourceCategoriesGrid: DevKit.Form.Controls.ControlGrid;
			TransactionCategoriesGrid: DevKit.Form.Controls.ControlGrid;
			/** Select whether the transaction classification identified on the quote line will be charged to the customer or not. Valid values are Chargeable, Non-chargeable and Complimentary.   */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			msdyn_Include: DevKit.Form.Controls.ControlBoolean;
			/** Select the transaction classification on the quote line. 4 classifications are supported: Select the time, Expense, Material and Fee. */
			msdyn_TransactionClassification: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_quotelinetransactionclassification_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotelinetransactionclassification_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_quotelinetransactionclassification_Information */
		Body: LuckyMokey.Formmsdyn_quotelinetransactionclassification_Information.Body;
	}
	class msdyn_quotelinetransactionclassificationApi {
		/**
		* DynamicsCrm.DevKit msdyn_quotelinetransactionclassificationApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select whether the transaction classification identified on the quote line will be charged to the customer or not. Valid values are Chargeable, Non-chargeable and Complimentary.   */
		msdyn_BillingType: DevKit.WebApi.OptionSetValue;
		/** Type the name of the custom entity. */
		msdyn_description: DevKit.WebApi.StringValue;
		msdyn_Include: DevKit.WebApi.BooleanValue;
		/** (Deprecated) Type the reference to the Quote line to which this transaction classification is being associated to. */
		msdyn_QuoteLine: DevKit.WebApi.StringValue;
		/** Unique identifier for Quote Line associated with Quote Line Transaction Classification. */
		msdyn_QuoteLineId: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_quotelinetransactionclassificationId: DevKit.WebApi.GuidValue;
		/** Select the transaction classification on the quote line. 4 classifications are supported: Select the time, Expense, Material and Fee. */
		msdyn_TransactionClassification: DevKit.WebApi.OptionSetValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Quote Line Transaction Classification */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Quote Line Transaction Classification */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_quotelinetransactionclassification {
		enum msdyn_BillingType {
			/** 192350000 */
			Non_Chargeable,
			/** 192350001 */
			Chargeable,
			/** 192350002 */
			Complimentary,
			/** 192350003 */
			Not_Available
		}
		enum msdyn_TransactionClassification {
			/** 690970000 */
			Commission,
			/** 690970001 */
			Additional,
			/** 690970002 */
			Tax,
			/** 192350000 */
			Time,
			/** 192350001 */
			Expense,
			/** 192350002 */
			Material,
			/** 192350003 */
			Milestone,
			/** 192350004 */
			Fee
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}