//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class EventExpanderBreadcrumbApi {
		/**
		* DynamicsCrm.DevKit EventExpanderBreadcrumbApi
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
		/** Ngày và giờ hoàn tất đường dẫn trình mở rộng sự kiện. */
		CompletedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất được dùng để tương quan. */
		CorrelationId: string;
		/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
		CreatedBy: string;
		/** Ngày giờ tạo bản ghi. */
		CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Tải trọng sự kiện. */
		Data: string;
		/** ID tệp cho URL blob được dùng để lưu trữ tệp. */
		DataBlobId: string;
		/** Mã lỗi của đường dẫn trình mở rộng sự kiện trong trường hợp không thành công. */
		ErrorCode: number;
		/** Mã định danh duy nhất cho phiên bản thực thể. */
		EventExpanderBreadcrumbId: string;
		/** Ngày giờ bắt đầu quy trình của Trình mở rộng. */
		ExpanderStartTime_UtcDateAndTime: Date;
		/** Thông báo thân thiện cho người dùng cuối. */
		FriendlyMessage: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người dùng gần đây nhất đã sửa đổi bản ghi. */
		ModifiedBy: string;
		/** Ngày và giờ gần đây nhất sửa đổi đường dẫn trình mở rộng sự kiện. */
		ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của đường dẫn trình mở rộng sự kiện. */
		Name: string;
		/** Số lần thử lại đường dẫn. */
		OperationType: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string;
		/** Cho biết có phải sự kiện sẽ chỉ chạy sau ngày giờ chỉ định hay không. */
		PostponeUntil_UtcDateAndTime: Date;
		/** Số lần thử lại đường dẫn. */
		RetryCount: number;
		/** Ngày giờ bắt đầu đường dẫn trình mở rộng sự kiện. */
		StartedOn_UtcDateAndTime: Date;
		/** Trạng thái của đường dẫn trình mở rộng sự kiện. */
		StateCode: OptionSet.EventExpanderBreadcrumb.StateCode;
		/** Lý do dẫn đến trạng thái của đường dẫn trình mở rộng sự kiện. */
		StatusCode: OptionSet.EventExpanderBreadcrumb.StatusCode;
		/** Time to live in seconds. */
		TTLInSeconds: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Tên của khối lượng công việc. */
		Workload: string;
		readonly FormattedValue: {
			/** Ngày và giờ hoàn tất đường dẫn trình mở rộng sự kiện. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất được dùng để tương quan. */
			readonly CorrelationId: string;
			/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Tải trọng sự kiện. */
			readonly Data: string;
			/** ID tệp cho URL blob được dùng để lưu trữ tệp. */
			readonly DataBlobId: string;
			/** Mã lỗi của đường dẫn trình mở rộng sự kiện trong trường hợp không thành công. */
			readonly ErrorCode: string;
			/** Mã định danh duy nhất cho phiên bản thực thể. */
			readonly EventExpanderBreadcrumbId: string;
			/** Ngày giờ bắt đầu quy trình của Trình mở rộng. */
			readonly ExpanderStartTime_UtcDateAndTime: string;
			/** Thông báo thân thiện cho người dùng cuối. */
			readonly FriendlyMessage: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người dùng gần đây nhất đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ gần đây nhất sửa đổi đường dẫn trình mở rộng sự kiện. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của đường dẫn trình mở rộng sự kiện. */
			readonly Name: string;
			/** Số lần thử lại đường dẫn. */
			readonly OperationType: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** Cho biết có phải sự kiện sẽ chỉ chạy sau ngày giờ chỉ định hay không. */
			readonly PostponeUntil_UtcDateAndTime: string;
			/** Số lần thử lại đường dẫn. */
			readonly RetryCount: string;
			/** Ngày giờ bắt đầu đường dẫn trình mở rộng sự kiện. */
			readonly StartedOn_UtcDateAndTime: string;
			/** Trạng thái của đường dẫn trình mở rộng sự kiện. */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của đường dẫn trình mở rộng sự kiện. */
			readonly StatusCode: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Tên của khối lượng công việc. */
			readonly Workload: string;
		}
	}
}
declare namespace OptionSet {
	namespace EventExpanderBreadcrumb {
		enum StateCode {
			/** 2 */
			Bi_khoa,
			/** 3 */
			Da_hoan_tat,
			/** 0 */
			San_sang
		}
		enum StatusCode {
			/** 32 */
			Da_huy,
			/** 0 */
			Dang_cho_tai_nguyen,
			/** 22 */
			Dang_huy,
			/** 20 */
			Dang_thuc_hien,
			/** 31 */
			Khong_thanh_cong,
			/** 30 */
			Thanh_cong
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