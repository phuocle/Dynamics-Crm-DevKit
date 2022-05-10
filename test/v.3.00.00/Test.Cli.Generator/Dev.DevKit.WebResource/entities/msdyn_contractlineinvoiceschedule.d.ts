//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_contractlineinvoiceschedule_Project_Information {
		interface tab_GeneralTab_Sections {
			GeneralSection: DevKit.Controls.Section;
			InvoiceSection: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** Select the Invoice associated with Project contract line invoice schedule. */
			msdyn_Invoice: DevKit.Controls.Lookup;
			/** Enter the date on which invoice should get created */
			msdyn_InvoiceRunDate: DevKit.Controls.Date;
			/** Select the invoice status, for example, Not Run, Run Successful, or Run Failed. */
			msdyn_InvoiceRunStatus: DevKit.Controls.OptionSet;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Enter the date before or on which the transaction will be picked for invoicing by the invoice creation job. */
			msdyn_transactioncutoffdate: DevKit.Controls.Date;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_contractlineinvoiceschedule_Project_Information extends DevKit.IForm {
		/**
		* Project Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_contractlineinvoiceschedule_Project_Information */
		Body: DevKit.Formmsdyn_contractlineinvoiceschedule_Project_Information.Body;
		/** The Process of form msdyn_contractlineinvoiceschedule_Project_Information */
		Process: DevKit.Formmsdyn_contractlineinvoiceschedule_Project_Information.Process;
		/** The SidePanes of form msdyn_contractlineinvoiceschedule_Project_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_contractlineinvoiceschedule_Project_Quick_Create {
		interface tab_tab_1_Sections {
			GeneralSection: DevKit.Controls.Section;
			InvoiceSection: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the date on which invoice should get created */
			msdyn_InvoiceRunDate: DevKit.Controls.Date;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Enter the date before or on which the transaction will be picked for invoicing by the invoice creation job. */
			msdyn_transactioncutoffdate: DevKit.Controls.Date;
		}
	}
	class Formmsdyn_contractlineinvoiceschedule_Project_Quick_Create extends DevKit.IForm {
		/**
		* Project Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_contractlineinvoiceschedule_Project_Quick_Create */
		Body: DevKit.Formmsdyn_contractlineinvoiceschedule_Project_Quick_Create.Body;
	}
	class msdyn_contractlineinvoicescheduleApi {
		/**
		* DynamicsCrm.DevKit msdyn_contractlineinvoicescheduleApi
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
		/** (Deprecated) Shows the associated project contract line for this invoice schedule. */
		msdyn_ContractLine: string;
		/** Unique identifier for Project Contract Line associated with Project Contract Line Invoice Schedule. */
		msdyn_ContractLineId: string;
		/** Unique identifier for entity instances */
		msdyn_contractlineinvoicescheduleId: string;
		/** Select the billing milestone for a project contract line. */
		msdyn_ContractLineScheduleOfValue: string;
		/** Select the Invoice associated with Project contract line invoice schedule. */
		msdyn_Invoice: string;
		/** Enter the date on which invoice should get created */
		msdyn_InvoiceRunDate_UtcDateOnly: Date;
		/** Select the invoice status, for example, Not Run, Run Successful, or Run Failed. */
		msdyn_InvoiceRunStatus: OptionSet.msdyn_contractlineinvoiceschedule.msdyn_InvoiceRunStatus;
		/** Type the name of the custom entity. */
		msdyn_name: string;
		/** Enter the date before or on which the transaction will be picked for invoicing by the invoice creation job. */
		msdyn_transactioncutoffdate_UtcDateOnly: Date;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the project contract line invoice schedule */
		statecode: OptionSet.msdyn_contractlineinvoiceschedule.statecode;
		/** Reason for the status of the project contract line invoice schedule */
		statuscode: OptionSet.msdyn_contractlineinvoiceschedule.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
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
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** (Deprecated) Shows the associated project contract line for this invoice schedule. */
			readonly msdyn_ContractLine: string;
			/** Unique identifier for Project Contract Line associated with Project Contract Line Invoice Schedule. */
			readonly msdyn_ContractLineId: string;
			/** Unique identifier for entity instances */
			readonly msdyn_contractlineinvoicescheduleId: string;
			/** Select the billing milestone for a project contract line. */
			readonly msdyn_ContractLineScheduleOfValue: string;
			/** Select the Invoice associated with Project contract line invoice schedule. */
			readonly msdyn_Invoice: string;
			/** Enter the date on which invoice should get created */
			readonly msdyn_InvoiceRunDate_UtcDateOnly: string;
			/** Select the invoice status, for example, Not Run, Run Successful, or Run Failed. */
			readonly msdyn_InvoiceRunStatus: string;
			/** Type the name of the custom entity. */
			readonly msdyn_name: string;
			/** Enter the date before or on which the transaction will be picked for invoicing by the invoice creation job. */
			readonly msdyn_transactioncutoffdate_UtcDateOnly: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the project contract line invoice schedule */
			readonly statecode: string;
			/** Reason for the status of the project contract line invoice schedule */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_contractlineinvoiceschedule {
		enum msdyn_InvoiceRunStatus {
			/** 192350000 */
			Not_Run,
			/** 192350002 */
			Run_Failed,
			/** 192350001 */
			Run_Successful
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