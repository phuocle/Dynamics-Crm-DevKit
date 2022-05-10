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
			/** Shows the Approval Set that the transaction references. */
			msdyn_ApprovalSet: DevKit.Controls.Lookup;
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_projectapproval_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
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
		/** The Process of form msdyn_projectapproval_Information */
		Process: DevKit.Formmsdyn_projectapproval_Information.Process;
		/** The SidePanes of form msdyn_projectapproval_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Shows the Approval Set that the transaction references. */
		msdyn_ApprovalSet: string;
		/** Shows the name of the approver. */
		msdyn_ApprovedBy: string;
		/** Shows the date of the approval. */
		msdyn_ApprovedOn_UtcDateOnly: Date;
		/** Billing type for the project approval line. */
		msdyn_BillingType: OptionSet.msdyn_projectapproval.msdyn_BillingType;
		/** Shows the resource that the entry is submitted for. */
		msdyn_bookableresource: string;
		/** Shows the cost amount of the transaction. */
		readonly msdyn_costamount: number;
		/** Value of the Cost Amount in base currency. */
		readonly msdyn_costamount_Base: number;
		/** Shows the cost price of the transaction. */
		msdyn_CostPrice: number;
		/** Value of the Cost Price in base currency. */
		readonly msdyn_costprice_Base: number;
		/** Shows the hours submitted for the transaction. */
		msdyn_CostQuantity: number;
		/** Shows the date of the transaction. */
		msdyn_date_UtcDateOnly: Date;
		/** Shows the entry type of the transaction. */
		msdyn_EntryType: OptionSet.msdyn_projectapproval.msdyn_EntryType;
		/** Shows the expense category of the transaction. */
		msdyn_ExpenseCategory: string;
		/** Expense Entry Id. */
		msdyn_ExpenseEntry: string;
		/** Shows the external comments entered for the transaction. */
		msdyn_ExternalComments: string;
		/** Shows whether the transaction has a receipt. */
		msdyn_hasreceipt: boolean;
		/** Shows the internal comments entered for the transaction. */
		msdyn_InternalComments: string;
		/** Shows whether the transaction was entered by a journal. */
		msdyn_JournalTransaction: string;
		/** Shows the manager of the person who submitted the transaction. */
		msdyn_Manager: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Shows the project for the transaction. */
		msdyn_Project: string;
		/** Unique identifier for entity instances */
		msdyn_projectapprovalId: string;
		/** Shows the project task for the transaction. */
		msdyn_ProjectTask: string;
		/** Shows the stage of the record. */
		msdyn_recordstage: OptionSet.msdyn_projectapproval.msdyn_recordstage;
		/** Shows the reference ID for the expense entry. */
		msdyn_referenceexpenseid: string;
		/** Shows the journal line ID for the journal transaction. */
		msdyn_referencejournalline: string;
		msdyn_referencetimeid: string;
		/** Shows the role for the resource for this transaction. */
		msdyn_ResourceCategory: string;
		/** Shows the sales amount of the transaction. */
		readonly msdyn_salesamount: number;
		/** Value of the Sales Amount in base currency. */
		readonly msdyn_salesamount_Base: number;
		/** Shows the sales price of the transaction. */
		msdyn_SalesPrice: number;
		/** Value of the Sales Price in base currency. */
		readonly msdyn_salesprice_Base: number;
		/** Shows the billable hours for the transaction. */
		msdyn_SalesQuantity: number;
		/** Resource that has submitted the entry for approval. */
		msdyn_SubmittedBy: string;
		/** Time Entry Id. */
		msdyn_TimeEntry: string;
		/** Shows the transaction category. */
		msdyn_TransactionCategory: string;
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
		/** Status of the ApprovalsTable */
		statecode: OptionSet.msdyn_projectapproval.statecode;
		/** Reason for the status of the ApprovalsTable */
		statuscode: OptionSet.msdyn_projectapproval.statuscode;
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
			/** Shows the Approval Set that the transaction references. */
			readonly msdyn_ApprovalSet: string;
			/** Shows the name of the approver. */
			readonly msdyn_ApprovedBy: string;
			/** Shows the date of the approval. */
			readonly msdyn_ApprovedOn_UtcDateOnly: string;
			/** Billing type for the project approval line. */
			readonly msdyn_BillingType: string;
			/** Shows the resource that the entry is submitted for. */
			readonly msdyn_bookableresource: string;
			/** Shows the cost amount of the transaction. */
			readonly msdyn_costamount: string;
			/** Value of the Cost Amount in base currency. */
			readonly msdyn_costamount_Base: string;
			/** Shows the cost price of the transaction. */
			readonly msdyn_CostPrice: string;
			/** Value of the Cost Price in base currency. */
			readonly msdyn_costprice_Base: string;
			/** Shows the hours submitted for the transaction. */
			readonly msdyn_CostQuantity: string;
			/** Shows the date of the transaction. */
			readonly msdyn_date_UtcDateOnly: string;
			/** Shows the entry type of the transaction. */
			readonly msdyn_EntryType: string;
			/** Shows the expense category of the transaction. */
			readonly msdyn_ExpenseCategory: string;
			/** Expense Entry Id. */
			readonly msdyn_ExpenseEntry: string;
			/** Shows the external comments entered for the transaction. */
			readonly msdyn_ExternalComments: string;
			/** Shows whether the transaction has a receipt. */
			readonly msdyn_hasreceipt: string;
			/** Shows the internal comments entered for the transaction. */
			readonly msdyn_InternalComments: string;
			/** Shows whether the transaction was entered by a journal. */
			readonly msdyn_JournalTransaction: string;
			/** Shows the manager of the person who submitted the transaction. */
			readonly msdyn_Manager: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Shows the project for the transaction. */
			readonly msdyn_Project: string;
			/** Unique identifier for entity instances */
			readonly msdyn_projectapprovalId: string;
			/** Shows the project task for the transaction. */
			readonly msdyn_ProjectTask: string;
			/** Shows the stage of the record. */
			readonly msdyn_recordstage: string;
			/** Shows the reference ID for the expense entry. */
			readonly msdyn_referenceexpenseid: string;
			/** Shows the journal line ID for the journal transaction. */
			readonly msdyn_referencejournalline: string;
			readonly msdyn_referencetimeid: string;
			/** Shows the role for the resource for this transaction. */
			readonly msdyn_ResourceCategory: string;
			/** Shows the sales amount of the transaction. */
			readonly msdyn_salesamount: string;
			/** Value of the Sales Amount in base currency. */
			readonly msdyn_salesamount_Base: string;
			/** Shows the sales price of the transaction. */
			readonly msdyn_SalesPrice: string;
			/** Value of the Sales Price in base currency. */
			readonly msdyn_salesprice_Base: string;
			/** Shows the billable hours for the transaction. */
			readonly msdyn_SalesQuantity: string;
			/** Resource that has submitted the entry for approval. */
			readonly msdyn_SubmittedBy: string;
			/** Time Entry Id. */
			readonly msdyn_TimeEntry: string;
			/** Shows the transaction category. */
			readonly msdyn_TransactionCategory: string;
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
			/** Status of the ApprovalsTable */
			readonly statecode: string;
			/** Reason for the status of the ApprovalsTable */
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