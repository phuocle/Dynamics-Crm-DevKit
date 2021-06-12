//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_resourceassignment_Information {
		interface Tabs {
		}
		interface Body {
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_resourceassignment_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_resourceassignment_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_resourceassignment_Information */
		Body: DevKit.Formmsdyn_resourceassignment_Information.Body;
	}
	class msdyn_resourceassignmentApi {
		/**
		* DynamicsCrm.DevKit msdyn_resourceassignmentApi
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
		/** Shows the resource. */
		msdyn_bookableresourceid: DevKit.WebApi.LookupValue;
		/** Booking Status */
		msdyn_bookingstatusid: DevKit.WebApi.LookupValue;
		/** Select the commitment type of the assignment (hard or soft). */
		msdyn_CommitType: DevKit.WebApi.OptionSetValue;
		/** Enter the date a resource is assigned from. */
		msdyn_fromdate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the number of hours for which a resource is assigned. */
		msdyn_hours: DevKit.WebApi.DecimalValue;
		/** id for resource assignment in ms project */
		msdyn_msprojectclientid: DevKit.WebApi.StringValue;
		/** Type the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Planned Cost Amount */
		msdyn_plannedcost: DevKit.WebApi.MoneyValue;
		/** Value of the Planned Cost in base currency. */
		msdyn_plannedcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Serialized planned cost contour */
		msdyn_plannedcostcontour: DevKit.WebApi.StringValue;
		/** Planned Sales Amount */
		msdyn_plannedsales: DevKit.WebApi.MoneyValue;
		/** Value of the Planned Sales in base currency. */
		msdyn_plannedsales_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Serialized planned sales contour */
		msdyn_plannedsalescontour: DevKit.WebApi.StringValue;
		/** Serialized planned work schedule for assigned resource */
		msdyn_plannedwork: DevKit.WebApi.StringValue;
		/** Select the project for which the resource is assigned. */
		msdyn_projectid: DevKit.WebApi.LookupValue;
		/** Unique identifier for Project Team Member associated with Resource Assignment. */
		msdyn_projectteamid: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_resourceassignmentId: DevKit.WebApi.GuidValue;
		/** Select the task for which the resource is assigned to. */
		msdyn_taskid: DevKit.WebApi.LookupValue;
		/** Enter the end date until which a resource is assigned. */
		msdyn_todate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Select the user whose capacity is assigned. */
		msdyn_userresourceid: DevKit.WebApi.LookupValue;
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
		/** Status of the Resource Assignment */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Resource Assignment */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_resourceassignment {
		enum msdyn_CommitType {
			/** 192350004 */
			Canceled,
			/** 192350001 */
			Hard_Book,
			/** 192350000 */
			None,
			/** 192350003 */
			Proposed,
			/** 192350002 */
			Soft_Book
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