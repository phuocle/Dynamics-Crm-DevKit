//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SubscriptionSyncInfoApi {
		/**
		* DynamicsCrm.DevKit SubscriptionSyncInfoApi
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
		/** Số phiên bản (thuê bao) máy khách. */
		ClientVersion: string;
		/** Chỉ sử dụng nội bộ. */
		DataSize: number;
		/** Chỉ sử dụng nội bộ. */
		DeleteObjectCount: number;
		/** Chỉ sử dụng nội bộ. */
		readonly EndTime_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		InsertObjectCount: number;
		/** Chỉ sử dụng nội bộ. */
		readonly StartTime_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		SubscriptionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SubscriptionSyncInfoId1: number;
		/** Chỉ sử dụng nội bộ. */
		SyncResult: boolean;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly FormattedValue: {
			/** Số phiên bản (thuê bao) máy khách. */
			readonly ClientVersion: string;
			/** Chỉ sử dụng nội bộ. */
			readonly DataSize: string;
			/** Chỉ sử dụng nội bộ. */
			readonly DeleteObjectCount: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EndTime_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly InsertObjectCount: string;
			/** Chỉ sử dụng nội bộ. */
			readonly StartTime_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SubscriptionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SubscriptionSyncInfoId1: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SyncResult: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace SubscriptionSyncInfo {
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