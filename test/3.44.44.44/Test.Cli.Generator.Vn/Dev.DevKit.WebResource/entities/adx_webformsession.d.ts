//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormInformation_Enhanced {
		interface Tabs {
		}
		interface Body {
			adx_anonymousidentification: DevKit.Controls.String;
			/** Mã định danh duy nhất cho Người liên hệ được liên kết với Phiên biểu mẫu nhiều bước. */
			adx_contact: DevKit.Controls.Lookup;
			/** Chỉ mục của bước hiện tại mà người dùng truy cập lần cuối. */
			adx_currentstepindex: DevKit.Controls.Integer;
			/** Loại tên thực thể tùy chỉnh. */
			adx_name: DevKit.Controls.String;
			adx_primaryrecordentitykeyname: DevKit.Controls.String;
			adx_primaryrecordentitylogicalname: DevKit.Controls.String;
			/** Hiển thị ID bản ghi chính do biểu mẫu nhiều bước tạo ra. Được dùng để truy xuất bản ghi phiên thích hợp. */
			adx_primaryrecordid: DevKit.Controls.String;
			/** Lịch sử các bước trong JSON */
			adx_stephistory: DevKit.Controls.String;
			/** Mã định danh duy nhất cho Người dùng được liên kết với Phiên biểu mẫu nhiều bước. */
			adx_systemuser: DevKit.Controls.Lookup;
			adx_userhostaddress: DevKit.Controls.String;
			adx_useridentityname: DevKit.Controls.String;
			/** Mã định danh duy nhất cho biểu mẫu web được liên kết với phiên biểu mẫu web. */
			mspp_webformid: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho phiên bản thực thể */
			mspp_webformstepid: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormInformation_Enhanced extends DevKit.IForm {
		/**
		* Information (Enhanced) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Information_Enhanced */
		Body: DevKit.FormInformation_Enhanced.Body;
		/** The Navigation of form Information_Enhanced */
		Navigation: DevKit.FormInformation_Enhanced.Navigation;
		/** The SidePanes of form Information_Enhanced */
		SidePanes: DevKit.SidePanes;
	}
	class adx_webformsessionApi {
		/**
		* DynamicsCrm.DevKit adx_webformsessionApi
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
		adx_anonymousidentification: string;
		/** Mã định danh duy nhất cho Người liên hệ được liên kết với Phiên biểu mẫu nhiều bước. */
		adx_contact: string;
		/** Chỉ mục của bước hiện tại mà người dùng truy cập lần cuối. */
		adx_currentstepindex: number;
		/** Loại tên thực thể tùy chỉnh. */
		adx_name: string;
		adx_primaryrecordentitykeyname: string;
		adx_primaryrecordentitylogicalname: string;
		/** Hiển thị ID bản ghi chính do biểu mẫu nhiều bước tạo ra. Được dùng để truy xuất bản ghi phiên thích hợp. */
		adx_primaryrecordid: string;
		/** Lịch sử các bước trong JSON */
		adx_stephistory: string;
		/** Mã định danh duy nhất cho Người dùng được liên kết với Phiên biểu mẫu nhiều bước. */
		adx_systemuser: string;
		adx_userhostaddress: string;
		adx_useridentityname: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		adx_webformsessionId: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn giải pháp. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Hiển thị số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn giải pháp. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất cho biểu mẫu web được liên kết với phiên biểu mẫu web. */
		mspp_webformid: string;
		/** Mã định danh duy nhất cho phiên bản thực thể */
		mspp_webformstepid: string;
		/** Hiển thị tổ chức. */
		readonly OrganizationId: string;
		/** Cho biết ngày và giờ di chuyển bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn giải pháp. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Cho biết lý do dẫn đến trạng thái của phiên biểu mẫu nhiều bước. */
		statecode: OptionSet.adx_webformsession.statecode;
		/** Chọn trạng thái của Phiên biểu mẫu nhiều bước.
 */
		statuscode: OptionSet.adx_webformsession.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Hiển thị mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			readonly adx_anonymousidentification: string;
			/** Mã định danh duy nhất cho Người liên hệ được liên kết với Phiên biểu mẫu nhiều bước. */
			readonly adx_contact: string;
			/** Chỉ mục của bước hiện tại mà người dùng truy cập lần cuối. */
			readonly adx_currentstepindex: string;
			/** Loại tên thực thể tùy chỉnh. */
			readonly adx_name: string;
			readonly adx_primaryrecordentitykeyname: string;
			readonly adx_primaryrecordentitylogicalname: string;
			/** Hiển thị ID bản ghi chính do biểu mẫu nhiều bước tạo ra. Được dùng để truy xuất bản ghi phiên thích hợp. */
			readonly adx_primaryrecordid: string;
			/** Lịch sử các bước trong JSON */
			readonly adx_stephistory: string;
			/** Mã định danh duy nhất cho Người dùng được liên kết với Phiên biểu mẫu nhiều bước. */
			readonly adx_systemuser: string;
			readonly adx_userhostaddress: string;
			readonly adx_useridentityname: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly adx_webformsessionId: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn giải pháp. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Hiển thị số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn giải pháp. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất cho biểu mẫu web được liên kết với phiên biểu mẫu web. */
			readonly mspp_webformid: string;
			/** Mã định danh duy nhất cho phiên bản thực thể */
			readonly mspp_webformstepid: string;
			/** Hiển thị tổ chức. */
			readonly OrganizationId: string;
			/** Cho biết ngày và giờ di chuyển bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn giải pháp. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Cho biết lý do dẫn đến trạng thái của phiên biểu mẫu nhiều bước. */
			readonly statecode: string;
			/** Chọn trạng thái của Phiên biểu mẫu nhiều bước.
 */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Hiển thị mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace adx_webformsession {
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