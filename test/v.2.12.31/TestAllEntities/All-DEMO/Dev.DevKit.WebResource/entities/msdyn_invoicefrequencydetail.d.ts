//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_invoicefrequencydetail_Project_Information {
		interface Tabs {
		}
		interface Body {
			/** Specify the day(s) of the month on which invoicing should run */
			msdyn_dayofmonth: DevKit.Controls.OptionSet;
			/** Select the invoice frequency. */
			msdyn_invoicefrequency: DevKit.Controls.Lookup;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Specifies which occurrence of a weekday the invoicing job should run if there are multiple occurrences of a weekday in the selected period */
			msdyn_occurrenceofweekday: DevKit.Controls.OptionSet;
			/** Select the weekday of the invoicing job run. */
			msdyn_weekday: DevKit.Controls.OptionSet;
		}
	}
	class Formmsdyn_invoicefrequencydetail_Project_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_invoicefrequencydetail_Project_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_invoicefrequencydetail_Project_Information */
		Body: DevKit.Formmsdyn_invoicefrequencydetail_Project_Information.Body;
	}
	class msdyn_invoicefrequencydetailApi {
		/**
		* DynamicsCrm.DevKit msdyn_invoicefrequencydetailApi
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
		/** Specify the day(s) of the month on which invoicing should run */
		msdyn_dayofmonth: DevKit.WebApi.OptionSetValue;
		/** Select the invoice frequency. */
		msdyn_invoicefrequency: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_invoicefrequencydetailId: DevKit.WebApi.GuidValue;
		/** Type the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Specifies which occurrence of a weekday the invoicing job should run if there are multiple occurrences of a weekday in the selected period */
		msdyn_occurrenceofweekday: DevKit.WebApi.OptionSetValue;
		/** Select the weekday of the invoicing job run. */
		msdyn_weekday: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Invoice Frequency Detail */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Invoice Frequency Detail */
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
	namespace msdyn_invoicefrequencydetail {
		enum msdyn_dayofmonth {
			/** 192350001 */
			_1,
			/** 192350010 */
			_10,
			/** 192350011 */
			_11,
			/** 192350012 */
			_12,
			/** 192350013 */
			_13,
			/** 192350014 */
			_14,
			/** 192350015 */
			_15,
			/** 192350016 */
			_16,
			/** 192350017 */
			_17,
			/** 192350018 */
			_18,
			/** 192350019 */
			_19,
			/** 192350002 */
			_2,
			/** 192350020 */
			_20,
			/** 192350021 */
			_21,
			/** 192350022 */
			_22,
			/** 192350023 */
			_23,
			/** 192350024 */
			_24,
			/** 192350025 */
			_25,
			/** 192350026 */
			_26,
			/** 192350027 */
			_27,
			/** 192350028 */
			_28,
			/** 192350029 */
			_29,
			/** 192350003 */
			_3,
			/** 192350030 */
			_30,
			/** 192350031 */
			_31,
			/** 192350004 */
			_4,
			/** 192350005 */
			_5,
			/** 192350006 */
			_6,
			/** 192350007 */
			_7,
			/** 192350008 */
			_8,
			/** 192350009 */
			_9
		}
		enum msdyn_occurrenceofweekday {
			/** 192350000 */
			First,
			/** 192350003 */
			Fourth,
			/** 192350004 */
			Last,
			/** 192350001 */
			Second,
			/** 192350002 */
			Third
		}
		enum msdyn_weekday {
			/** 192350005 */
			Friday,
			/** 192350001 */
			Monday,
			/** 192350006 */
			Saturday,
			/** 192350000 */
			Sunday,
			/** 192350004 */
			Thursday,
			/** 192350002 */
			Tuesday,
			/** 192350003 */
			Wednesday
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
//{'JsForm':['Project Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}