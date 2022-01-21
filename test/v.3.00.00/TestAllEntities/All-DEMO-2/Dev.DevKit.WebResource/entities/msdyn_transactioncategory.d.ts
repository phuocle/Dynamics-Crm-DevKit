//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_transactioncategory_Information {
		interface tab__4EE119BD_DC5A_4657_9359_C0361849634A_Sections {
			_0DB3DC26_6905_4F70_AEA5_0465394A8256: DevKit.Controls.Section;
			_4EE119BD_DC5A_4657_9359_C0361849634A_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__4EE119BD_DC5A_4657_9359_C0361849634A extends DevKit.Controls.ITab {
			Section: tab__4EE119BD_DC5A_4657_9359_C0361849634A_Sections;
		}
		interface Tabs {
			_4EE119BD_DC5A_4657_9359_C0361849634A: tab__4EE119BD_DC5A_4657_9359_C0361849634A;
		}
		interface Body {
			Tab: Tabs;
			/** Select the default billing type of project transactions in this category. Valid values are Chargeable, Non chargeable or Complimentary. Only chargeable transactions will add to an invoice total */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			msdyn_DefaultUnit: DevKit.Controls.Lookup;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Select the unit schedule that is associated with the transaction category. */
			msdyn_UnitGroup: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_transactioncategory_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_transactioncategory_Information */
		Body: DevKit.Formmsdyn_transactioncategory_Information.Body;
		/** The Process of form msdyn_transactioncategory_Information */
		Process: DevKit.Formmsdyn_transactioncategory_Information.Process;
		/** The SidePanes of form msdyn_transactioncategory_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_transactioncategoryApi {
		/**
		* DynamicsCrm.DevKit msdyn_transactioncategoryApi
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
		/** Select the default billing type of project transactions in this category. Valid values are Chargeable, Non chargeable or Complimentary. Only chargeable transactions will add to an invoice total */
		msdyn_BillingType: DevKit.WebApi.OptionSetValue;
		msdyn_DefaultUnit: DevKit.WebApi.LookupValue;
		/** Type the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_transactioncategoryId: DevKit.WebApi.GuidValue;
		/** Select the unit schedule that is associated with the transaction category. */
		msdyn_UnitGroup: DevKit.WebApi.LookupValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Transaction Category */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Transaction Category */
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
	namespace msdyn_transactioncategory {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}