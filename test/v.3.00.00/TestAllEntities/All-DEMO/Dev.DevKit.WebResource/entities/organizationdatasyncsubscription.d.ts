//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formorganizationdatasyncsubscription_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
		}
	}
	class Formorganizationdatasyncsubscription_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form organizationdatasyncsubscription_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form organizationdatasyncsubscription_Information */
		Body: DevKit.Formorganizationdatasyncsubscription_Information.Body;
	}
	class organizationdatasyncsubscriptionApi {
		/**
		* DynamicsCrm.DevKit organizationdatasyncsubscriptionApi
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
		AadApplicationId: DevKit.WebApi.StringValue;
		BlobPartitionBy: DevKit.WebApi.OptionSetValue;
		CanSyncAllMetadata: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		DataEndpointPostingType: DevKit.WebApi.OptionSetValue;
		DataProcessingType: DevKit.WebApi.OptionSetValue;
		EndpointSettings: DevKit.WebApi.StringValue;
		EntityFilters: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		IsOutOfBoxSubscription: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The name of the custom entity. */
		name: DevKit.WebApi.StringValue;
		NeedCopyAttachmentsToBlob: DevKit.WebApi.BooleanValue;
		/** Unique identifier for entity instances */
		organizationdatasyncsubscriptionId: DevKit.WebApi.GuidValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		PartnerPrefix: DevKit.WebApi.StringValue;
		/** Status of the OrganizationDataSyncSubscription */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the OrganizationDataSyncSubscription */
		statuscode: DevKit.WebApi.OptionSetValue;
		SubscriptionEndpointStatus: DevKit.WebApi.IntegerValue;
		SubscriptionEntities: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of OrganizationDataSyncSubscription. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace organizationdatasyncsubscription {
		enum BlobPartitionBy {
			/** 1 */
			Day,
			/** 2 */
			Month,
			/** 0 */
			None,
			/** 3 */
			Year
		}
		enum DataEndpointPostingType {
			/** 0 */
			DefaultEndpoint,
			/** 2 */
			HTTPS,
			/** 3 */
			ServiceBusEventHub,
			/** 1 */
			ServiceBusTopic
		}
		enum DataProcessingType {
			/** 2 */
			Batch,
			/** 3 */
			Mixed,
			/** 4 */
			NotificationOnly,
			/** 1 */
			Streaming,
			/** 0 */
			Unknown
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 4 */
			Activated,
			/** 5 */
			Deactivated,
			/** 3 */
			Uninitialized
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