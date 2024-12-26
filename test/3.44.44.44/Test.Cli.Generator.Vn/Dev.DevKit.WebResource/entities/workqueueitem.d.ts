//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class workqueueitemApi {
		/**
		* DynamicsCrm.DevKit workqueueitemApi
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
		/** Ngày và giờ hoàn thành mục trong hàng đợi công việc. */
		completedon_UtcDateOnly: Date;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.workqueueitem.ComponentState;
		/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và thời gian tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất cho người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Ngày và giờ sau đó mục hàng đợi công việc có thể bị loại bỏ khỏi hàng đợi một lần nữa. */
		delayuntil_UtcDateOnly: Date;
		/** Ngữ cảnh thực thi chứa danh sách các lần thử xử lý do hệ thống quản lý, cùng với thông tin gỡ lỗi quan trọng. */
		executioncontext: string;
		/** Ngày hết hạn cho biết thời hạn phải xử lý xong các mục trong hàng đợi công việc. */
		expirydate_UtcDateOnly: Date;
		/** Số thứ tự của lượt nhập đã tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Trường đầu vào chứa dữ liệu về mục công việc thực tế mà bot, con người hoặc các tích hợp dùng để xử lý. */
		input: string;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất cho người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ đã sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất cho người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của mục trong hàng đợi công việc được đặt thành một số tự động theo mặc định (ví dụ: 2023-02-13-000000001). */
		name: string;
		/** Ngày và thời gian di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Giá trị ưu tiên xác định thứ tự chọn và xử lý cho các mục trong hàng đợi công việc trong một hàng đợi công việc. Giá trị thấp hơn tương ứng với mức độ ưu tiên cao hơn, trong đó 1 là cao nhất. */
		priority: number;
		/** Khoảng thời gian xử lý tính bằng giây. */
		processingduration: number;
		processingresult: string;
		/** Ngày và giờ bắt đầu xử lý. */
		processingstarttime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của người dùng xử lý mục này. */
		processinguser: string;
		/** Mã định danh duy nhất cho bộ xử lý (quy trình làm việc, máy trong dòng quy trình, v.v.) đã xử lý mục. */
		processorid: string;
		/** Loại bộ xử lý cho phép hiển thị xem mục đã được xử lý thông qua dòng đám mây, máy trong dòng quy trình hay loại bộ xử lý khác. */
		processortype: OptionSet.workqueueitem.processortype;
		/** Số lần đã sắp lại hàng đợi cho mục. */
		requeuecount: number;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của mục trong hàng đợi công việc (Đã xếp hàng, Đã xử lý, Ngoại lệ, v.v.) */
		statecode: OptionSet.workqueueitem.statecode;
		/** Lý do dẫn đến trạng thái cung cấp thêm ngữ cảnh cho một trạng thái đã đặt (Đã xếp hàng, Đang xử lý, Tạm hoãn, v.v.). */
		statuscode: OptionSet.workqueueitem.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã định danh của mục hàng đợi công việc được sử dụng để xác định duy nhất một mục hàng đợi công việc bên trong hàng đợi công việc. */
		uniqueidbyqueue: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** ID hàng đợi công việc của bản ghi hàng đợi công việc gốc. */
		workqueueid: string;
		/** Mã định danh duy nhất cho phiên bản thực thể. */
		workqueueitemId: string;
		readonly FormattedValue: {
			/** Ngày và giờ hoàn thành mục trong hàng đợi công việc. */
			readonly completedon_UtcDateOnly: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và thời gian tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất cho người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Ngày và giờ sau đó mục hàng đợi công việc có thể bị loại bỏ khỏi hàng đợi một lần nữa. */
			readonly delayuntil_UtcDateOnly: string;
			/** Ngữ cảnh thực thi chứa danh sách các lần thử xử lý do hệ thống quản lý, cùng với thông tin gỡ lỗi quan trọng. */
			readonly executioncontext: string;
			/** Ngày hết hạn cho biết thời hạn phải xử lý xong các mục trong hàng đợi công việc. */
			readonly expirydate_UtcDateOnly: string;
			/** Số thứ tự của lượt nhập đã tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Trường đầu vào chứa dữ liệu về mục công việc thực tế mà bot, con người hoặc các tích hợp dùng để xử lý. */
			readonly input: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất cho người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ đã sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất cho người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của mục trong hàng đợi công việc được đặt thành một số tự động theo mặc định (ví dụ: 2023-02-13-000000001). */
			readonly name: string;
			/** Ngày và thời gian di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Giá trị ưu tiên xác định thứ tự chọn và xử lý cho các mục trong hàng đợi công việc trong một hàng đợi công việc. Giá trị thấp hơn tương ứng với mức độ ưu tiên cao hơn, trong đó 1 là cao nhất. */
			readonly priority: string;
			/** Khoảng thời gian xử lý tính bằng giây. */
			readonly processingduration: string;
			readonly processingresult: string;
			/** Ngày và giờ bắt đầu xử lý. */
			readonly processingstarttime_UtcDateOnly: string;
			/** Mã định danh duy nhất của người dùng xử lý mục này. */
			readonly processinguser: string;
			/** Mã định danh duy nhất cho bộ xử lý (quy trình làm việc, máy trong dòng quy trình, v.v.) đã xử lý mục. */
			readonly processorid: string;
			/** Loại bộ xử lý cho phép hiển thị xem mục đã được xử lý thông qua dòng đám mây, máy trong dòng quy trình hay loại bộ xử lý khác. */
			readonly processortype: string;
			/** Số lần đã sắp lại hàng đợi cho mục. */
			readonly requeuecount: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của mục trong hàng đợi công việc (Đã xếp hàng, Đã xử lý, Ngoại lệ, v.v.) */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái cung cấp thêm ngữ cảnh cho một trạng thái đã đặt (Đã xếp hàng, Đang xử lý, Tạm hoãn, v.v.). */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã định danh của mục hàng đợi công việc được sử dụng để xác định duy nhất một mục hàng đợi công việc bên trong hàng đợi công việc. */
			readonly uniqueidbyqueue: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** ID hàng đợi công việc của bản ghi hàng đợi công việc gốc. */
			readonly workqueueid: string;
			/** Mã định danh duy nhất cho phiên bản thực thể. */
			readonly workqueueitemId: string;
		}
	}
}
declare namespace OptionSet {
	namespace workqueueitem {
		enum ComponentState {
			/** 0 */
			Da_phat_hanh,
			/** 2 */
			Da_xoa,
			/** 3 */
			Da_xoa_Huy_phat_hanh,
			/** 1 */
			Huy_phat_hanh
		}
		enum processortype {
			/** 1 */
			Dong_dam_may,
			/** 0 */
			Khong_co,
			/** 2 */
			May_trong_dong_quy_trinh
		}
		enum statecode {
			/** 0 */
			Da_xep_hang,
			/** 2 */
			Da_xu_ly,
			/** 1 */
			Dang_xu_ly,
			/** 4 */
			Loi,
			/** 3 */
			Tam_hoan
		}
		enum statuscode {
			/** 3 */
			Da_tam_dung,
			/** 0 */
			Da_xep_hang,
			/** 2 */
			Da_xu_ly,
			/** 1 */
			Dang_xu_ly,
			/** 7 */
			Khong_gui_duoc,
			/** 4 */
			Ngoai_le_chung,
			/** 5 */
			Ngoai_le_doi_voi_IT,
			/** 6 */
			Ngoai_le_kinh_doanh,
			/** 8 */
			ProcessingTimeout
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