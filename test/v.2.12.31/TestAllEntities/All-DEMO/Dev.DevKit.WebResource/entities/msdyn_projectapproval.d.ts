//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_projectapproval_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the name of the approver. */
			msdyn_ApprovedBy: DevKit.Controls.Lookup;
			/** Shows the resource that the entry is submitted for. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			/** Shows the stage of the record. */
			msdyn_recordstage: DevKit.Controls.OptionSet;
		}
		interface tab__6D5860C6_AEB2_4D17_9DB3_226A9D6466F5_Sections {
			_column_2_section_1: DevKit.Controls.Section;
			_D55B3080_93D0_497A_A1C6_823D788E066A: DevKit.Controls.Section;
		}
		interface tab__6D5860C6_AEB2_4D17_9DB3_226A9D6466F5 extends DevKit.Controls.ITab {
			Section: tab__6D5860C6_AEB2_4D17_9DB3_226A9D6466F5_Sections;
		}
		interface Tabs {
			_6D5860C6_AEB2_4D17_9DB3_226A9D6466F5: tab__6D5860C6_AEB2_4D17_9DB3_226A9D6466F5;
		}
		interface Body {
			Tab: Tabs;
			/** Billing type for the project approval line. */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Shows the hours submitted for the transaction. */
			msdyn_CostQuantity: DevKit.Controls.Decimal;
			/** Expense Entry Id. */
			msdyn_ExpenseEntry: DevKit.Controls.Lookup;
			/** Shows the external comments entered for the transaction. */
			msdyn_ExternalComments: DevKit.Controls.String;
			/** Shows whether the transaction has a receipt. */
			msdyn_hasreceipt: DevKit.Controls.Boolean;
			/** Shows the sales price of the transaction. */
			msdyn_SalesPrice: DevKit.Controls.Money;
			/** Shows the billable hours for the transaction. */
			msdyn_SalesQuantity: DevKit.Controls.Decimal;
			/** Resource that has submitted the entry for approval. */
			msdyn_SubmittedBy: DevKit.Controls.Lookup;
			/** Time Entry Id. */
			msdyn_TimeEntry: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface quickForm_ExpenseEntryDetail_Body {
			msdyn_Amount: DevKit.Controls.QuickView;
			msdyn_ExpenseCategory: DevKit.Controls.QuickView;
			msdyn_externaldescription: DevKit.Controls.QuickView;
			msdyn_Price: DevKit.Controls.QuickView;
			msdyn_Project: DevKit.Controls.QuickView;
			msdyn_Quantity: DevKit.Controls.QuickView;
			msdyn_Salestaxamount: DevKit.Controls.QuickView;
			msdyn_totalamount: DevKit.Controls.QuickView;
			msdyn_TransactionDate: DevKit.Controls.QuickView;
			msdyn_Unit: DevKit.Controls.QuickView;
			msdyn_UnitGroup: DevKit.Controls.QuickView;
			TransactionCurrencyId: DevKit.Controls.QuickView;
		}
		interface quickForm_TimeEntryDetail_Body {
			msdyn_date: DevKit.Controls.QuickView;
			msdyn_description: DevKit.Controls.QuickView;
			msdyn_duration: DevKit.Controls.QuickView;
			msdyn_project: DevKit.Controls.QuickView;
			msdyn_projectTask: DevKit.Controls.QuickView;
			msdyn_resourceCategory: DevKit.Controls.QuickView;
			msdyn_type: DevKit.Controls.QuickView;
		}
		interface quickForm_ExpenseEntryDetail extends DevKit.Controls.IQuickView {
			Body: quickForm_ExpenseEntryDetail_Body;
		}
		interface quickForm_TimeEntryDetail extends DevKit.Controls.IQuickView {
			Body: quickForm_TimeEntryDetail_Body;
		}
		interface QuickForm {
			ExpenseEntryDetail: quickForm_ExpenseEntryDetail;
			TimeEntryDetail: quickForm_TimeEntryDetail;
		}
	}
	class Formmsdyn_projectapproval_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_projectapproval_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_projectapproval_Information */
		Body: DevKit.Formmsdyn_projectapproval_Information.Body;
		/** The Header section of form msdyn_projectapproval_Information */
		Header: DevKit.Formmsdyn_projectapproval_Information.Header;
		/** The QuickForm of form msdyn_projectapproval_Information */
		QuickForm: DevKit.Formmsdyn_projectapproval_Information.QuickForm;
	}
	class msdyn_projectapprovalApi {
		/**
		* DynamicsCrm.DevKit msdyn_projectapprovalApi
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
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the name of the approver. */
		msdyn_ApprovedBy: DevKit.WebApi.LookupValue;
		/** Shows the date of the approval. */
		msdyn_ApprovedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Billing type for the project approval line. */
		msdyn_BillingType: DevKit.WebApi.OptionSetValue;
		/** Shows the resource that the entry is submitted for. */
		msdyn_bookableresource: DevKit.WebApi.LookupValue;
		/** Shows the cost amount of the transaction. */
		msdyn_costamount: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Cost Amount in base currency. */
		msdyn_costamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the cost price of the transaction. */
		msdyn_CostPrice: DevKit.WebApi.MoneyValue;
		/** Value of the Cost Price in base currency. */
		msdyn_costprice_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the hours submitted for the transaction. */
		msdyn_CostQuantity: DevKit.WebApi.DecimalValue;
		/** Shows the date of the transaction. */
		msdyn_date_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the entry type of the transaction. */
		msdyn_EntryType: DevKit.WebApi.OptionSetValue;
		/** Shows the expense category of the transaction. */
		msdyn_ExpenseCategory: DevKit.WebApi.LookupValue;
		/** Expense Entry Id. */
		msdyn_ExpenseEntry: DevKit.WebApi.LookupValue;
		/** Shows the external comments entered for the transaction. */
		msdyn_ExternalComments: DevKit.WebApi.StringValue;
		/** Shows whether the transaction has a receipt. */
		msdyn_hasreceipt: DevKit.WebApi.BooleanValue;
		/** Shows the internal comments entered for the transaction. */
		msdyn_InternalComments: DevKit.WebApi.StringValue;
		/** Shows whether the transaction was entered by a journal. */
		msdyn_JournalTransaction: DevKit.WebApi.StringValue;
		/** Shows the manager of the person who submitted the transaction. */
		msdyn_Manager: DevKit.WebApi.LookupValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Shows the project for the transaction. */
		msdyn_Project: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_projectapprovalId: DevKit.WebApi.GuidValue;
		/** Shows the project task for the transaction. */
		msdyn_ProjectTask: DevKit.WebApi.LookupValue;
		/** Shows the stage of the record. */
		msdyn_recordstage: DevKit.WebApi.OptionSetValue;
		/** Shows the reference ID for the expense entry. */
		msdyn_referenceexpenseid: DevKit.WebApi.StringValue;
		/** Shows the journal line ID for the journal transaction. */
		msdyn_referencejournalline: DevKit.WebApi.LookupValue;
		msdyn_referencetimeid: DevKit.WebApi.StringValue;
		/** Shows the role for the resource for this transaction. */
		msdyn_ResourceCategory: DevKit.WebApi.LookupValue;
		/** Shows the sales amount of the transaction. */
		msdyn_salesamount: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Sales Amount in base currency. */
		msdyn_salesamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the sales price of the transaction. */
		msdyn_SalesPrice: DevKit.WebApi.MoneyValue;
		/** Value of the Sales Price in base currency. */
		msdyn_salesprice_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the billable hours for the transaction. */
		msdyn_SalesQuantity: DevKit.WebApi.DecimalValue;
		/** Resource that has submitted the entry for approval. */
		msdyn_SubmittedBy: DevKit.WebApi.LookupValue;
		/** Time Entry Id. */
		msdyn_TimeEntry: DevKit.WebApi.LookupValue;
		/** Shows the transaction category. */
		msdyn_TransactionCategory: DevKit.WebApi.LookupValue;
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
		/** Status of the ApprovalsTable */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the ApprovalsTable */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_projectapproval {
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
		enum msdyn_EntryType {
			/** 1 */
			Expense,
			/** 0 */
			Time
		}
		enum msdyn_recordstage {
			/** 2 */
			Approved,
			/** 3 */
			Pending,
			/** 5 */
			Recall_Request_Approved,
			/** 6 */
			Recall_Request_Rejected,
			/** 4 */
			Recall_Requested,
			/** 1 */
			Rejected,
			/** 0 */
			Submitted
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}