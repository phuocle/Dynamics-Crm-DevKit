//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ReportVisibilityApi {
		/**
		* DynamicsCrm.DevKit ReportVisibilityApi
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
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.ReportVisibility.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi hiển thị trực quan báo cáo. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi hiển thị trực quan báo cáo. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo reportvisibility. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi hiển thị trực quan báo cáo lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi hiển thị trực quan báo cáo lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi reportvisibility lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi hiển thị trực quan báo cáo. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi hiển thị trực quan báo cáo. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của báo cáo. */
		ReportId: string;
		/** Mã định danh duy nhất của bản ghi hiển thị trực quan báo cáo. */
		ReportVisibilityId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ReportVisibilityIdUnique: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		/** Loại hiển thị trực quan của báo cáo. */
		VisibilityCode: OptionSet.ReportVisibility.VisibilityCode;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi hiển thị trực quan báo cáo. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi hiển thị trực quan báo cáo. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo reportvisibility. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi hiển thị trực quan báo cáo lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi hiển thị trực quan báo cáo lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi reportvisibility lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi hiển thị trực quan báo cáo. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi hiển thị trực quan báo cáo. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của báo cáo. */
			readonly ReportId: string;
			/** Mã định danh duy nhất của bản ghi hiển thị trực quan báo cáo. */
			readonly ReportVisibilityId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ReportVisibilityIdUnique: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
			/** Loại hiển thị trực quan của báo cáo. */
			readonly VisibilityCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace ReportVisibility {
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
		enum VisibilityCode {
			/** 2 */
			Bieu_mau_cho_loai_ban_ghi_lien_quan,
			/** 3 */
			Danh_sach_cho_loai_ban_ghi_lien_quan,
			/** 1 */
			Khu_vuc_bao_cao
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