//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
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
		/** (Deprecated) Shows the associated project contract line for this invoice schedule. */
		msdyn_ContractLine: DevKit.WebApi.StringValue;
		/** Unique identifier for Project Contract Line associated with Project Contract Line Invoice Schedule. */
		msdyn_ContractLineId: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_contractlineinvoicescheduleId: DevKit.WebApi.GuidValue;
		/** Select the billing milestone for a project contract line. */
		msdyn_ContractLineScheduleOfValue: DevKit.WebApi.LookupValue;
		/** Select the Invoice associated with Project contract line invoice schedule. */
		msdyn_Invoice: DevKit.WebApi.LookupValue;
		/** Enter the date on which invoice should get created */
		msdyn_InvoiceRunDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Select the invoice status, for example, Not Run, Run Successful, or Run Failed. */
		msdyn_InvoiceRunStatus: DevKit.WebApi.OptionSetValue;
		/** Type the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Enter the date before or on which the transaction will be picked for invoicing by the invoice creation job. */
		msdyn_transactioncutoffdate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the project contract line invoice schedule */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the project contract line invoice schedule */
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
	namespace msdyn_contractlineinvoiceschedule {
		enum msdyn_InvoiceRunStatus {
			/** 192350000 */
			Not_Run,
			/** 192350001 */
			Run_Successful,
			/** 192350002 */
			Run_Failed
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}