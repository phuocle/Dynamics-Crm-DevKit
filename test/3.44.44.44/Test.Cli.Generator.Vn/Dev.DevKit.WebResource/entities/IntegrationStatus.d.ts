//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class IntegrationStatusApi {
		/**
		* DynamicsCrm.DevKit IntegrationStatusApi
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
		/** Mã định danh duy nhất của người dùng đã tạo trạng thái tích hợp. */
		readonly CreatedBy: string;
		/** Ngày và giờ đã tạo trạng thái tích hợp. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo integrationstatus. */
		readonly CreatedOnBehalfBy: string;
		/** Chỉ sử dụng nội bộ. */
		IntegrationEntryId: string;
		/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối trạng thái tích hợp. */
		readonly ModifiedBy: string;
		/** Ngày và giờ đã sửa đổi lần cuối trạng thái tích hợp. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối integrationstatus. */
		readonly ModifiedOnBehalfBy: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ObjectId: string;
		/** Mã định danh duy nhất của tổ chức được liên kết với trạng thái tích hợp. */
		readonly OrganizationId: string;
		/** Trạng thái tích hợp. */
		StateCode: OptionSet.IntegrationStatus.StateCode;
		/** Chỉ sử dụng nội bộ. */
		StateDescription: string;
		/** Lý do dẫn đến trạng thái tích hợp. */
		StatusCode: OptionSet.IntegrationStatus.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		StatusDescription: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SystemName: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo trạng thái tích hợp. */
			readonly CreatedBy: string;
			/** Ngày và giờ đã tạo trạng thái tích hợp. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo integrationstatus. */
			readonly CreatedOnBehalfBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IntegrationEntryId: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối trạng thái tích hợp. */
			readonly ModifiedBy: string;
			/** Ngày và giờ đã sửa đổi lần cuối trạng thái tích hợp. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối integrationstatus. */
			readonly ModifiedOnBehalfBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ObjectId: string;
			/** Mã định danh duy nhất của tổ chức được liên kết với trạng thái tích hợp. */
			readonly OrganizationId: string;
			/** Trạng thái tích hợp. */
			readonly StateCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly StateDescription: string;
			/** Lý do dẫn đến trạng thái tích hợp. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly StatusDescription: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SystemName: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace IntegrationStatus {
		enum ObjectTypeCode {
		}
		enum StateCode {
		}
		enum StatusCode {
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