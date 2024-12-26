//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ExpanderEventApi {
		/**
		* DynamicsCrm.DevKit ExpanderEventApi
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
		/** URI lưu trữ ngữ cảnh. */
		ContextUri: string;
		/** Mã định danh duy nhất được dùng để tương quan giữa các sự kiện trong trình mở rộng và viện dẫn thông báo SDK. */
		CorrelationId: string;
		/** Mã định danh duy nhất của người dùng đã tạo sự kiện. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo sự kiện. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo sự kiện. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của sự kiện trong trình mở rộng. */
		ExpanderEventId: string;
		/** Mã định danh duy nhất của người dùng sửa đổi sự kiện lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi sự kiện lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sự kiện lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên sự kiện. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức liên kết với sự kiện. */
		readonly OrganizationId: string;
		/** Khối lượng công việc đã đăng ký để gửi một sự kiện. */
		Registrations: string;
		/** Số phiên bản của sự kiện. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** URI lưu trữ ngữ cảnh. */
			readonly ContextUri: string;
			/** Mã định danh duy nhất được dùng để tương quan giữa các sự kiện trong trình mở rộng và viện dẫn thông báo SDK. */
			readonly CorrelationId: string;
			/** Mã định danh duy nhất của người dùng đã tạo sự kiện. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo sự kiện. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo sự kiện. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của sự kiện trong trình mở rộng. */
			readonly ExpanderEventId: string;
			/** Mã định danh duy nhất của người dùng sửa đổi sự kiện lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi sự kiện lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sự kiện lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên sự kiện. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức liên kết với sự kiện. */
			readonly OrganizationId: string;
			/** Khối lượng công việc đã đăng ký để gửi một sự kiện. */
			readonly Registrations: string;
			/** Số phiên bản của sự kiện. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ExpanderEvent {
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