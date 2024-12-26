//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** Tên phê duyệt. */
			msdyn_flow_approval_name: DevKit.Controls.String;
			/** ID Chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_flow_approvalrelationship_approvalrequests: DevKit.Controls.NavigationItem,
			msdyn_flow_approvalrelationship_approvalresponses: DevKit.Controls.NavigationItem,
			msdyn_flow_approvalrelationship_approvalsteps: DevKit.Controls.NavigationItem,
			msdyn_flow_approvalrelationship_flowapprovals: DevKit.Controls.NavigationItem
		}
	}
	class FormThong_tin extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin */
		Body: DevKit.FormThong_tin.Body;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_flow_approvalApi {
		/**
		* DynamicsCrm.DevKit msdyn_flow_approvalApi
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
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_flow_approval_additionalfields: string;
		/** Trường Boolean cho phép người phê duyệt chỉ định lại yêu cầu phê duyệt. */
		msdyn_flow_approval_allowreassign: boolean;
		/** Khóa tra cứu khớp với ID phê duyệt và giai đoạn trong XML tìm nạp dữ liệu. */
		msdyn_flow_approval_approvalstagekey: string;
		/** Dữ liệu mẫu phê duyệt cơ bản đã được liên kết. */
		msdyn_flow_approval_basicapprovalmodel: string;
		/** Chuỗi do người dùng xác định cho phép người tạo phê duyệt phân loại một phê duyệt. */
		msdyn_flow_approval_category: string;
		/** Ngày hoàn thành. */
		msdyn_flow_approval_completedon_UtcDateAndTime: Date;
		msdyn_flow_approval_currentstepnumber: number;
		/** Mô tả phê duyệt. */
		msdyn_flow_approval_details: string;
		/** Ngày đến hạn. */
		msdyn_flow_approval_dueon_UtcDateAndTime: Date;
		/** Ngày hết hạn. */
		msdyn_flow_approval_expireson_UtcDateAndTime: Date;
		/** Liên kết tùy chọn đến mục cần phê duyệt. */
		msdyn_flow_approval_itemlink: string;
		/** Mô tả không bắt buộc cho liên kết mục. */
		msdyn_flow_approval_itemlinkdescription: string;
		/** Hàm băm liên kết mục để kích hoạt truy vấn. */
		msdyn_flow_approval_itemlinkhash: string;
		/** ID mô hình phê duyệt. */
		msdyn_flow_approval_modelid: string;
		/** Tên bảng chứa mô hình phê duyệt. */
		msdyn_flow_approval_modeltype: string;
		/** Tên phê duyệt. */
		msdyn_flow_approval_name: string;
		/** Giá trị băm của một ID đối tác duy nhất được liên kết với một tài liệu. Dùng cho các tình huống tìm kiếm. */
		msdyn_flow_approval_partneridhash: string;
		/** Không gian phi cấu trúc để lưu trữ những thông tin ngoại lai gắn với việc phê duyệt các dịch vụ của đối tác. */
		msdyn_flow_approval_partnermetadata: string;
		/** Mức ưu tiên của phê duyệt. */
		msdyn_flow_approval_priority: OptionSet.msdyn_flow_approval.msdyn_flow_approval_priority;
		/** Loại yêu cầu đã tạo phê duyệt, bất kể là từ mẫu phê duyệt, quy trình chữ ký điện tử, v.v. */
		msdyn_flow_approval_requesttype: OptionSet.msdyn_flow_approval.msdyn_flow_approval_requesttype;
		/** Kết quả phê duyệt cuối cùng. */
		msdyn_flow_approval_result: string;
		/** Liệu có gửi thông báo bằng email do hệ thống tạo cho phê duyệt này hay không. */
		msdyn_flow_approval_sendemail: boolean;
		/** Nguồn của yêu cầu đã tạo phê duyệt. */
		msdyn_flow_approval_source: string;
		/** Giai đoạn. */
		msdyn_flow_approval_stage: OptionSet.msdyn_flow_approval.msdyn_flow_approval_stage;
		/** Danh sách các chuỗi do người dùng xác định được phân tách bằng dấu chấm phẩy để giúp lọc và tìm kiếm các phê duyệt. */
		msdyn_flow_approval_tags: string;
		/** ID chuỗi được mã hóa Base64 của biểu mẫu phê duyệt mẫu. */
		msdyn_flow_approval_templateformid: string;
		/** ID chuỗi được mã hóa Base64 của biểu mẫu dùng để tạo phê duyệt. */
		msdyn_flow_approval_templateid: string;
		/** ID chuỗi được mã hóa Base64 phản hồi phê duyệt theo mẫu duy nhất. */
		msdyn_flow_approval_templateresponseId: string;
		/** Tiêu đề. */
		msdyn_flow_approval_title: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		msdyn_flow_approvalId: string;
		/** Trường Boolean cho phép người phụ trách việc phê duyệt có khả năng hủy phê duyệt. */
		new_msdyn_flow_approval_allowcancel: boolean;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Trạng thái Phê duyệt */
		statecode: OptionSet.msdyn_flow_approval.statecode;
		/** Lý do dẫn đến trạng thái phê duyệt. */
		statuscode: OptionSet.msdyn_flow_approval.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_flow_approval_additionalfields: string;
			/** Trường Boolean cho phép người phê duyệt chỉ định lại yêu cầu phê duyệt. */
			readonly msdyn_flow_approval_allowreassign: string;
			/** Khóa tra cứu khớp với ID phê duyệt và giai đoạn trong XML tìm nạp dữ liệu. */
			readonly msdyn_flow_approval_approvalstagekey: string;
			/** Dữ liệu mẫu phê duyệt cơ bản đã được liên kết. */
			readonly msdyn_flow_approval_basicapprovalmodel: string;
			/** Chuỗi do người dùng xác định cho phép người tạo phê duyệt phân loại một phê duyệt. */
			readonly msdyn_flow_approval_category: string;
			/** Ngày hoàn thành. */
			readonly msdyn_flow_approval_completedon_UtcDateAndTime: string;
			readonly msdyn_flow_approval_currentstepnumber: string;
			/** Mô tả phê duyệt. */
			readonly msdyn_flow_approval_details: string;
			/** Ngày đến hạn. */
			readonly msdyn_flow_approval_dueon_UtcDateAndTime: string;
			/** Ngày hết hạn. */
			readonly msdyn_flow_approval_expireson_UtcDateAndTime: string;
			/** Liên kết tùy chọn đến mục cần phê duyệt. */
			readonly msdyn_flow_approval_itemlink: string;
			/** Mô tả không bắt buộc cho liên kết mục. */
			readonly msdyn_flow_approval_itemlinkdescription: string;
			/** Hàm băm liên kết mục để kích hoạt truy vấn. */
			readonly msdyn_flow_approval_itemlinkhash: string;
			/** ID mô hình phê duyệt. */
			readonly msdyn_flow_approval_modelid: string;
			/** Tên bảng chứa mô hình phê duyệt. */
			readonly msdyn_flow_approval_modeltype: string;
			/** Tên phê duyệt. */
			readonly msdyn_flow_approval_name: string;
			/** Giá trị băm của một ID đối tác duy nhất được liên kết với một tài liệu. Dùng cho các tình huống tìm kiếm. */
			readonly msdyn_flow_approval_partneridhash: string;
			/** Không gian phi cấu trúc để lưu trữ những thông tin ngoại lai gắn với việc phê duyệt các dịch vụ của đối tác. */
			readonly msdyn_flow_approval_partnermetadata: string;
			/** Mức ưu tiên của phê duyệt. */
			readonly msdyn_flow_approval_priority: string;
			/** Loại yêu cầu đã tạo phê duyệt, bất kể là từ mẫu phê duyệt, quy trình chữ ký điện tử, v.v. */
			readonly msdyn_flow_approval_requesttype: string;
			/** Kết quả phê duyệt cuối cùng. */
			readonly msdyn_flow_approval_result: string;
			/** Liệu có gửi thông báo bằng email do hệ thống tạo cho phê duyệt này hay không. */
			readonly msdyn_flow_approval_sendemail: string;
			/** Nguồn của yêu cầu đã tạo phê duyệt. */
			readonly msdyn_flow_approval_source: string;
			/** Giai đoạn. */
			readonly msdyn_flow_approval_stage: string;
			/** Danh sách các chuỗi do người dùng xác định được phân tách bằng dấu chấm phẩy để giúp lọc và tìm kiếm các phê duyệt. */
			readonly msdyn_flow_approval_tags: string;
			/** ID chuỗi được mã hóa Base64 của biểu mẫu phê duyệt mẫu. */
			readonly msdyn_flow_approval_templateformid: string;
			/** ID chuỗi được mã hóa Base64 của biểu mẫu dùng để tạo phê duyệt. */
			readonly msdyn_flow_approval_templateid: string;
			/** ID chuỗi được mã hóa Base64 phản hồi phê duyệt theo mẫu duy nhất. */
			readonly msdyn_flow_approval_templateresponseId: string;
			/** Tiêu đề. */
			readonly msdyn_flow_approval_title: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly msdyn_flow_approvalId: string;
			/** Trường Boolean cho phép người phụ trách việc phê duyệt có khả năng hủy phê duyệt. */
			readonly new_msdyn_flow_approval_allowcancel: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Trạng thái Phê duyệt */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái phê duyệt. */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_flow_approval {
		enum msdyn_flow_approval_priority {
			/** 192350000 */
			Khan_cap,
			/** 192350001 */
			Quan_trong,
			/** 192350003 */
			Thap,
			/** 192350002 */
			Trung_binh
		}
		enum msdyn_flow_approval_requesttype {
			/** 192350001 */
			Co_ban,
			/** 192350000 */
			Khac,
			/** 192350002 */
			Ky_dien_tu,
			/** 192350003 */
			Mau
		}
		enum msdyn_flow_approval_stage {
			/** 192350001 */
			Co_ban,
			/** 192351000 */
			Hoan_thanh,
			/** 192350000 */
			Khong_chi_dinh
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 192350005 */
			Da_het_han,
			/** 192350004 */
			Da_hoan_thanh,
			/** 192350006 */
			Da_huy,
			/** 192350007 */
			Da_huy_bo,
			/** 192350000 */
			Da_tao,
			/** 192350002 */
			Da_treo,
			/** 192350001 */
			Dang_cho_xu_ly
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