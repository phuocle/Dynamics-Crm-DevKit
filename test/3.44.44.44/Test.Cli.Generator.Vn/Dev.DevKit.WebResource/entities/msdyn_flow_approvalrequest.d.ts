﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** Tên yêu cầu phê duyệt. */
			msdyn_flow_approvalrequest_name: DevKit.Controls.String;
			/** ID Chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

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
	class msdyn_flow_approvalrequestApi {
		/**
		* DynamicsCrm.DevKit msdyn_flow_approvalrequestApi
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
		/** Liệu có thể chỉ định lại yêu cầu phê duyệt cho người dùng khác hay không. */
		msdyn_flow_approvalrequest_allowreassignment: boolean;
		/** Phê duyệt đã được liên kết. */
		msdyn_flow_approvalrequest_approval: string;
		/** Khóa tra cứu khớp với ID phê duyệt và giai đoạn trong XML tìm nạp dữ liệu. */
		msdyn_flow_approvalrequest_approvalstagekey: string;
		/** Ngày đến hạn. */
		msdyn_flow_approvalrequest_dueon_UtcDateAndTime: Date;
		/** Ngày hết hạn. */
		msdyn_flow_approvalrequest_expireson_UtcDateAndTime: Date;
		/** Ngày thông báo cuối cùng. */
		msdyn_flow_approvalrequest_lastnotifiedon_UtcDateAndTime: Date;
		/** Tên yêu cầu phê duyệt. */
		msdyn_flow_approvalrequest_name: string;
		/** Tần suất thông báo theo giờ. */
		msdyn_flow_approvalrequest_notificationfrequency: number;
		/** Bộ các tùy chọn phản hồi sẵn có. */
		msdyn_flow_approvalrequest_options: string;
		/** Không gian phi cấu trúc để lưu trữ những thông tin ngoại lai liên quan đến yêu cầu phê duyệt cho các dịch vụ của đối tác. */
		msdyn_flow_approvalrequest_partnermetadata: string;
		/** Yêu cầu phê duyệt đã chỉ định lại nội dung này. */
		msdyn_flow_approvalrequest_reassignedfrom: string;
		/** Các tùy chọn phản hồi, phân cách bằng dấu phẩy. */
		msdyn_flow_approvalrequest_responseoptions: string;
		msdyn_flow_approvalrequest_responseoptionstype: OptionSet.msdyn_flow_approvalrequest.msdyn_flow_approvalrequest_responseoptionstype;
		/** Giai đoạn gán phê duyệt liên kết. */
		msdyn_flow_approvalrequest_stage: OptionSet.msdyn_flow_approvalrequest.msdyn_flow_approvalrequest_stage;
		msdyn_flow_approvalrequest_stepnumber: number;
		/** Mã định danh duy nhất của phiên bản thực thể */
		msdyn_flow_approvalrequestId: string;
		/** Trường phản chiếu phê duyệt đã được liên kết cho chỉ mục ràng buộc. */
		msdyn_flow_approvalrequestidx_approvalid: string;
		/** Trường phản chiếu ID người dùng sở hữu cho chỉ mục ràng buộc. */
		msdyn_flow_approvalrequestidx_owninguserid: string;
		/** Trường phản chiếu "ID được chỉ định lại từ" cho chỉ mục ràng buộc. */
		msdyn_flow_approvalrequestidx_reassignedfromid: string;
		/** Trường phản chiếu giai đoạn cho chỉ mục ràng buộc. */
		msdyn_flow_approvalrequestidx_stage: string;
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
		/** Trạng thái Yêu cầu Phê duyệt */
		statecode: OptionSet.msdyn_flow_approvalrequest.statecode;
		/** Lý do dẫn đến trạng thái của yêu cầu. */
		statuscode: OptionSet.msdyn_flow_approvalrequest.statuscode;
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
			/** Liệu có thể chỉ định lại yêu cầu phê duyệt cho người dùng khác hay không. */
			readonly msdyn_flow_approvalrequest_allowreassignment: string;
			/** Phê duyệt đã được liên kết. */
			readonly msdyn_flow_approvalrequest_approval: string;
			/** Khóa tra cứu khớp với ID phê duyệt và giai đoạn trong XML tìm nạp dữ liệu. */
			readonly msdyn_flow_approvalrequest_approvalstagekey: string;
			/** Ngày đến hạn. */
			readonly msdyn_flow_approvalrequest_dueon_UtcDateAndTime: string;
			/** Ngày hết hạn. */
			readonly msdyn_flow_approvalrequest_expireson_UtcDateAndTime: string;
			/** Ngày thông báo cuối cùng. */
			readonly msdyn_flow_approvalrequest_lastnotifiedon_UtcDateAndTime: string;
			/** Tên yêu cầu phê duyệt. */
			readonly msdyn_flow_approvalrequest_name: string;
			/** Tần suất thông báo theo giờ. */
			readonly msdyn_flow_approvalrequest_notificationfrequency: string;
			/** Bộ các tùy chọn phản hồi sẵn có. */
			readonly msdyn_flow_approvalrequest_options: string;
			/** Không gian phi cấu trúc để lưu trữ những thông tin ngoại lai liên quan đến yêu cầu phê duyệt cho các dịch vụ của đối tác. */
			readonly msdyn_flow_approvalrequest_partnermetadata: string;
			/** Yêu cầu phê duyệt đã chỉ định lại nội dung này. */
			readonly msdyn_flow_approvalrequest_reassignedfrom: string;
			/** Các tùy chọn phản hồi, phân cách bằng dấu phẩy. */
			readonly msdyn_flow_approvalrequest_responseoptions: string;
			readonly msdyn_flow_approvalrequest_responseoptionstype: string;
			/** Giai đoạn gán phê duyệt liên kết. */
			readonly msdyn_flow_approvalrequest_stage: string;
			readonly msdyn_flow_approvalrequest_stepnumber: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly msdyn_flow_approvalrequestId: string;
			/** Trường phản chiếu phê duyệt đã được liên kết cho chỉ mục ràng buộc. */
			readonly msdyn_flow_approvalrequestidx_approvalid: string;
			/** Trường phản chiếu ID người dùng sở hữu cho chỉ mục ràng buộc. */
			readonly msdyn_flow_approvalrequestidx_owninguserid: string;
			/** Trường phản chiếu "ID được chỉ định lại từ" cho chỉ mục ràng buộc. */
			readonly msdyn_flow_approvalrequestidx_reassignedfromid: string;
			/** Trường phản chiếu giai đoạn cho chỉ mục ràng buộc. */
			readonly msdyn_flow_approvalrequestidx_stage: string;
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
			/** Trạng thái Yêu cầu Phê duyệt */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của yêu cầu. */
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
	namespace msdyn_flow_approvalrequest {
		enum msdyn_flow_approvalrequest_responseoptionstype {
			/** 192350001 */
			BasicApproveReject,
			/** 192350002 */
			CustomOptions,
			/** 192350000 */
			NotSpecified
		}
		enum msdyn_flow_approvalrequest_stage {
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
			/** 192350000 */
			Da_chi_dinh_lai,
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
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