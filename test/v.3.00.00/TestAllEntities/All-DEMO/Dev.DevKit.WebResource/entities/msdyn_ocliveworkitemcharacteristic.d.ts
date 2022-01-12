//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocliveworkitemcharacteristic_Information {
		interface Tabs {
		}
		interface Body {
			/** Characteristic linked to the conversation */
			msdyn_characteristic: DevKit.Controls.Lookup;
			/** Created On */
			msdyn_createdon: DevKit.Controls.DateTime;
			/** Last Modified On */
			msdyn_modifiedon: DevKit.Controls.DateTime;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Related Conversation */
			msdyn_ocliveworkitemid: DevKit.Controls.Lookup;
			/** Required rating value for the characteristic */
			msdyn_ratingvalue: DevKit.Controls.Lookup;
			/** Status of the characteristic associated to the conversation */
			msdyn_status: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_ocliveworkitemcharacteristic_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocliveworkitemcharacteristic_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocliveworkitemcharacteristic_Information */
		Body: DevKit.Formmsdyn_ocliveworkitemcharacteristic_Information.Body;
		/** The SidePanes of form msdyn_ocliveworkitemcharacteristic_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocliveworkitemcharacteristicApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocliveworkitemcharacteristicApi
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
		/** Characteristic linked to the conversation */
		msdyn_characteristic: DevKit.WebApi.LookupValue;
		/** Option Set with different type of Source for the characteristic */
		msdyn_characteristicsource: DevKit.WebApi.OptionSetValue;
		/** Confidence of the characteristic linked to the conversation */
		msdyn_confidence: DevKit.WebApi.DoubleValue;
		/** Created On */
		msdyn_createdon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ML Model Id which is used to attach this characteristic */
		msdyn_mlmodelid: DevKit.WebApi.LookupValue;
		/** Last Modified On */
		msdyn_modifiedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_ocliveworkitemcharacteristicId: DevKit.WebApi.GuidValue;
		/** Related Conversation */
		msdyn_ocliveworkitemid: DevKit.WebApi.LookupValue;
		/** Required rating value for the characteristic */
		msdyn_ratingvalue: DevKit.WebApi.LookupValue;
		/** Look up to User who added this characteristic */
		msdyn_skilladdedby: DevKit.WebApi.LookupValue;
		/** Status of the characteristic associated to the conversation */
		msdyn_status: DevKit.WebApi.OptionSetValue;
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
		/** Status of the Conversation Characteristic */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Conversation Characteristic */
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
	namespace msdyn_ocliveworkitemcharacteristic {
		enum msdyn_characteristicsource {
			/** 321240002 */
			Manual,
			/** 321240001 */
			ML_Based,
			/** 321240000 */
			Rule_Based
		}
		enum msdyn_status {
			/** 192350000 */
			Active,
			/** 192350001 */
			Deleted
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