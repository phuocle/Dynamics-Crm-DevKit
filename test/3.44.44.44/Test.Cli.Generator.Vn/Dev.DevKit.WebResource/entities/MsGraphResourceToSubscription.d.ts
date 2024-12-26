//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class MsGraphResourceToSubscriptionApi {
		/**
		* DynamicsCrm.DevKit MsGraphResourceToSubscriptionApi
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
		/** Chỉ sử dụng nội bộ. Ngày và giờ tạo bản ghi trong Graph. */
		CreatedInGraphOn_TimezoneDateAndTime: Date;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier for entity instances */
		MsGraphResourceToSubscriptionId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		ResourceId: string;
		/** Chỉ sử dụng nội bộ. Hiển thị các tùy chọn khác nhau cho loại nguồn lực. */
		ResourceType: OptionSet.MsGraphResourceToSubscription.ResourceType;
		/** Status of the Nguồn lực MS Graph với gói đăng ký */
		statecode: OptionSet.MsGraphResourceToSubscription.statecode;
		/** Reason for the status of the Nguồn lực MS Graph với gói đăng ký */
		statuscode: OptionSet.MsGraphResourceToSubscription.statuscode;
		SubscriptionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. Ngày và giờ tạo bản ghi trong Graph. */
			readonly CreatedInGraphOn_TimezoneDateAndTime: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier for entity instances */
			readonly MsGraphResourceToSubscriptionId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			readonly ResourceId: string;
			/** Chỉ sử dụng nội bộ. Hiển thị các tùy chọn khác nhau cho loại nguồn lực. */
			readonly ResourceType: string;
			/** Status of the Nguồn lực MS Graph với gói đăng ký */
			readonly statecode: string;
			/** Reason for the status of the Nguồn lực MS Graph với gói đăng ký */
			readonly statuscode: string;
			readonly SubscriptionId: string;
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
	namespace MsGraphResourceToSubscription {
		enum ResourceType {
			/** 0 */
			Tin_nhan_tro_chuyen_tren_Teams
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}