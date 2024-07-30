//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class appactionApi {
		/**
		* DynamicsCrm.DevKit appactionApi
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
		/** Mã định danh duy nhất của phiên bản thực thể */
		appactionId: string;
		/** Mã định danh duy nhất cho AppModule được liên kết với Lệnh hiện đại */
		AppModuleId: string;
		ButtonAccessibilityText: string;
		/** Văn bản nhãn kết xuất cho Nút lệnh hiện đại */
		ButtonLabelText: string;
		/** Thứ tự của Nút lệnh hiện đại (Không còn dùng) */
		ButtonSequencePriority: number;
		/** Mô tả chú giải công cụ cho Nút lệnh hiện đại */
		ButtonTooltipDescription: string;
		/** Tiêu đề chú giải công cụ cho Nút lệnh hiện đại */
		ButtonTooltipTitle: string;
		/** Loại máy khách được liên kết với Lệnh hiện đại */
		ClientType: Array<OptionSet.appaction.ClientType>;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.appaction.ComponentState;
		/** Phạm vi ngữ cảnh được liên kết với Lệnh hiện đại */
		Context: OptionSet.appaction.Context;
		/** Thực thể ngữ cảnh được liên kết với Lệnh hiện đại */
		ContextEntity: string;
		/** Tên ngữ cảnh được liên kết với Lệnh hiện đại */
		ContextValue: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Biểu tượng phông chữ cho Nút lệnh hiện đại */
		FontIcon: string;
		/** Tiêu đề nhóm cho Nút nhóm lệnh hiện đại */
		GroupTitle: string;
		Hidden: boolean;
		/** Mã định danh duy nhất của Webresource của biểu tượng từ thực thể Webresource được sử dụng bởi Lệnh hiện đại được liên kết */
		IconWebResourceId: string;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Cờ cho biết Nút lệnh hiện đại bị tắt để ngăn người dùng cuối sử dụng, tức là mục tương đương với ruy băng sẽ hiển thị */
		IsDisabled: boolean;
		/** Cờ cho biết Tiêu đề nút của Nhóm lệnh hiện đại bị ẩn */
		isGroupTitleHidden: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Vị trí của thanh Lệnh được liên kết với Lệnh hiện đại. */
		Location: OptionSet.appaction.Location;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của thực thể AppAction. */
		name: string;
		/** Tên của Thư viện thành phần nơi lưu Hành động FX. */
		OnClickEventFormulaComponentLibrary: string;
		/** Mã định danh duy nhất của Thư viện thành phần được liên kết với Lệnh hiện đại. */
		OnClickEventFormulaComponentLibraryId: string;
		/** Tên của Thành phần cho Lệnh hiện đại FX. */
		OnClickEventFormulaComponentName: string;
		/** Tên của Hàm cho Lệnh hiện đại FX. */
		OnClickEventFormulaFunctionName: string;
		/** Tên của Hàm cho Lệnh hiện đại JS. */
		OnClickEventJavaScriptFunctionName: string;
		/** Tham số của Hàm cho Lệnh hiện đại JS. */
		OnClickEventJavaScriptParameters: string;
		/** Mã định danh duy nhất của JavaScript WebResource từ thực thể Webresource được sử dụng bởi Lệnh hiện đại JS được liên kết. */
		OnClickEventJavaScriptWebResourceId: string;
		/** Loại hành động được liên kết với Lệnh hiện đại. */
		OnClickEventType: OptionSet.appaction.OnClickEventType;
		/** Mã định danh duy nhất cho tổ chức */
		readonly OrganizationId: string;
		/** Nguồn gốc của hành động ứng dụng. */
		Origin: OptionSet.appaction.Origin;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Mã định danh duy nhất cho Lệnh hiện đại mẹ được liên kết với Lệnh hiện đại. */
		ParentAppActionId: string;
		/** Thứ tự của Nút lệnh hiện đại sẽ được hiển thị. */
		Sequence: number;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của Hành động ứng dụng */
		statecode: OptionSet.appaction.statecode;
		/** Lý do dẫn đến trạng thái của Hành động ứng dụng */
		statuscode: OptionSet.appaction.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Loại Nút lệnh hiện đại */
		Type: OptionSet.appaction.Type;
		/** Tên duy nhất của AppAction */
		UniqueName: string;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Tên của Thư viện thành phần nơi lưu Quy tắc hiển thị FX được liên kết với Lệnh hiện đại. */
		VisibilityFormulaComponentLibrary: string;
		/** Mã định danh duy nhất của Thư viện thành phần được liên kết với Lệnh hiện đại. */
		VisibilityFormulaComponentLibraryId: string;
		/** Tên của Thành phần cho Quy tắc hiển thị FX được liên kết với Lệnh hiện đại. */
		VisibilityFormulaComponentName: string;
		/** Tên của Hàm cho Quy tắc hiển thị FX được liên kết với Lệnh hiện đại. */
		VisibilityFormulaFunctionName: string;
		/** Loại chế độ hiển thị của Lệnh hiện đại phải là FX/Cũ hoặc Không có. */
		VisibilityType: OptionSet.appaction.VisibilityType;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly appactionId: string;
			/** Mã định danh duy nhất cho AppModule được liên kết với Lệnh hiện đại */
			readonly AppModuleId: string;
			readonly ButtonAccessibilityText: string;
			/** Văn bản nhãn kết xuất cho Nút lệnh hiện đại */
			readonly ButtonLabelText: string;
			/** Thứ tự của Nút lệnh hiện đại (Không còn dùng) */
			readonly ButtonSequencePriority: string;
			/** Mô tả chú giải công cụ cho Nút lệnh hiện đại */
			readonly ButtonTooltipDescription: string;
			/** Tiêu đề chú giải công cụ cho Nút lệnh hiện đại */
			readonly ButtonTooltipTitle: string;
			/** Loại máy khách được liên kết với Lệnh hiện đại */
			readonly ClientType: Array<string>;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Phạm vi ngữ cảnh được liên kết với Lệnh hiện đại */
			readonly Context: string;
			/** Thực thể ngữ cảnh được liên kết với Lệnh hiện đại */
			readonly ContextEntity: string;
			/** Tên ngữ cảnh được liên kết với Lệnh hiện đại */
			readonly ContextValue: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Biểu tượng phông chữ cho Nút lệnh hiện đại */
			readonly FontIcon: string;
			/** Tiêu đề nhóm cho Nút nhóm lệnh hiện đại */
			readonly GroupTitle: string;
			readonly Hidden: string;
			/** Mã định danh duy nhất của Webresource của biểu tượng từ thực thể Webresource được sử dụng bởi Lệnh hiện đại được liên kết */
			readonly IconWebResourceId: string;
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Cờ cho biết Nút lệnh hiện đại bị tắt để ngăn người dùng cuối sử dụng, tức là mục tương đương với ruy băng sẽ hiển thị */
			readonly IsDisabled: string;
			/** Cờ cho biết Tiêu đề nút của Nhóm lệnh hiện đại bị ẩn */
			readonly isGroupTitleHidden: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Vị trí của thanh Lệnh được liên kết với Lệnh hiện đại. */
			readonly Location: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của thực thể AppAction. */
			readonly name: string;
			/** Tên của Thư viện thành phần nơi lưu Hành động FX. */
			readonly OnClickEventFormulaComponentLibrary: string;
			/** Mã định danh duy nhất của Thư viện thành phần được liên kết với Lệnh hiện đại. */
			readonly OnClickEventFormulaComponentLibraryId: string;
			/** Tên của Thành phần cho Lệnh hiện đại FX. */
			readonly OnClickEventFormulaComponentName: string;
			/** Tên của Hàm cho Lệnh hiện đại FX. */
			readonly OnClickEventFormulaFunctionName: string;
			/** Tên của Hàm cho Lệnh hiện đại JS. */
			readonly OnClickEventJavaScriptFunctionName: string;
			/** Tham số của Hàm cho Lệnh hiện đại JS. */
			readonly OnClickEventJavaScriptParameters: string;
			/** Mã định danh duy nhất của JavaScript WebResource từ thực thể Webresource được sử dụng bởi Lệnh hiện đại JS được liên kết. */
			readonly OnClickEventJavaScriptWebResourceId: string;
			/** Loại hành động được liên kết với Lệnh hiện đại. */
			readonly OnClickEventType: string;
			/** Mã định danh duy nhất cho tổ chức */
			readonly OrganizationId: string;
			/** Nguồn gốc của hành động ứng dụng. */
			readonly Origin: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Mã định danh duy nhất cho Lệnh hiện đại mẹ được liên kết với Lệnh hiện đại. */
			readonly ParentAppActionId: string;
			/** Thứ tự của Nút lệnh hiện đại sẽ được hiển thị. */
			readonly Sequence: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của Hành động ứng dụng */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Hành động ứng dụng */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Loại Nút lệnh hiện đại */
			readonly Type: string;
			/** Tên duy nhất của AppAction */
			readonly UniqueName: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Tên của Thư viện thành phần nơi lưu Quy tắc hiển thị FX được liên kết với Lệnh hiện đại. */
			readonly VisibilityFormulaComponentLibrary: string;
			/** Mã định danh duy nhất của Thư viện thành phần được liên kết với Lệnh hiện đại. */
			readonly VisibilityFormulaComponentLibraryId: string;
			/** Tên của Thành phần cho Quy tắc hiển thị FX được liên kết với Lệnh hiện đại. */
			readonly VisibilityFormulaComponentName: string;
			/** Tên của Hàm cho Quy tắc hiển thị FX được liên kết với Lệnh hiện đại. */
			readonly VisibilityFormulaFunctionName: string;
			/** Loại chế độ hiển thị của Lệnh hiện đại phải là FX/Cũ hoặc Không có. */
			readonly VisibilityType: string;
		}
	}
}
declare namespace OptionSet {
	namespace appaction {
		enum ClientType {
			/** 1 */
			Thiet_bi_di_dong,
			/** 0 */
			Trinh_duyet,
			/** 2 */
			Ung_dung_thu
		}
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
		enum Context {
			/** 0 */
			Tat_ca,
			/** 1 */
			Thuc_the
		}
		enum Location {
			/** 6 */
			Bang_thong_tin,
			/** 0 */
			Bieu_mau,
			/** 4 */
			Bieu_mau_nhanh,
			/** 1 */
			Luoi_chinh,
			/** 2 */
			Luoi_con,
			/** 3 */
			Luoi_lien_ket,
			/** 5 */
			Tieu_de_chung
		}
		enum OnClickEventType {
			/** 1 */
			Cong_thuc,
			/** 2 */
			JavaScript,
			/** 0 */
			Khong_co
		}
		enum Origin {
			/** 1 */
			Da_di_chuyen,
			/** 2 */
			Da_di_chuyen_o_cap_do_nang_cao,
			/** 0 */
			Mac_dinh
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
		}
		enum Type {
			/** 3 */
			Nhom,
			/** 2 */
			Nut_chia_tach,
			/** 1 */
			Nut_tha_xuong,
			/** 0 */
			Nut_tieu_chuan
		}
		enum VisibilityType {
			/** 1 */
			Cong_thuc,
			/** 0 */
			Khong_co,
			/** 2 */
			Quy_tac_co_dien
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