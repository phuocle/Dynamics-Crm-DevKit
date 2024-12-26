//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ReportApi {
		/**
		* DynamicsCrm.DevKit ReportApi
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
		/** Represents the application id to which a CDS powerbi report belongs to. */
		readonly ApplicationId: string;
		/** Nội dung báo cáo dạng nhị phân (mã hóa base-64). */
		BodyBinary: string;
		/** Nội dung văn bản của tệp RDL dành cho báo cáo của Dịch vụ báo cáo. */
		BodyText: string;
		/** URL cho báo cáo đã liên kết. */
		BodyUrl: string;
		/** Đại diện cho ID tập dữ liệu của một báo cáo. */
		readonly CdsDatasetId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.Report.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo báo cáo. */
		readonly CreatedBy: string;
		/** Số phiên bản chính của Crm, được dùng để xác định phiên bản Crm có báo cáo được tạo. */
		CreatedInMajorVersion: number;
		/** Ngày và giờ tạo báo cáo. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo báo cáo. */
		readonly CreatedOnBehalfBy: string;
		/** XML dùng để xác định báo cáo tùy chỉnh. */
		readonly CustomReportXml: string;
		/** Bộ lọc mặc định dành cho báo cáo. */
		DefaultFilter: string;
		/** Field to represent the dependent report dataset model. */
		DependentModelReportId: string;
		/** Mô tả của báo cáo. */
		Description: string;
		readonly FileContent_name: string;
		/** Tên tệp của báo cáo. */
		FileName: string;
		/** Kích thước tệp của báo cáo. */
		readonly FileSize: number;
		/** Phiên bản có báo cáo được giới thiệu. */
		IntroducedVersion: string;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Thông tin về khả năng báo cáo là báo cáo tùy chỉnh. */
		readonly IsCustomReport: boolean;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Thông tin về khả năng báo cáo là cá nhân hoặc có sẵn cho mọi người dùng. */
		IsPersonal: boolean;
		/** Thông tin về khả năng báo cáo là báo cáo theo lịch. */
		readonly IsScheduledReport: boolean;
		/** Ngôn ngữ sẽ hiển thị báo cáo. */
		LanguageCode: number;
		/** Determine how the report workspace is managed. */
		ManagedType: OptionSet.Report.ManagedType;
		/** Loại MIME của báo cáo. */
		MimeType: string;
		/** Mã định danh duy nhất của người dùng sửa đổi báo cáo lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi báo cáo lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa báo cáo lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của báo cáo. */
		Name: string;
		/** Nội dung Văn bản gốc của tệp RDL dành cho báo cáo của Dịch vụ báo cáo. */
		readonly OriginalBodyText: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu báo cáo. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu báo cáo. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu báo cáo. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của báo cáo mẹ. */
		ParentReportId: string;
		/** Field to maintain the sub application id and feature tag for powerbi reports. */
		PowerBiFeatureTag: string;
		/** Represents the powerbi report id for a CDS report. */
		readonly PowerBiReportId: string;
		/** Field to maintain the internal state of the report */
		readonly PowerBiReportInternalState: string;
		/** Chứa tên của báo cáo Power BI Embedded. */
		readonly PowerBiReportName: string;
		/** Chứa thông tin không gian làm việc của báo cáo Power BI Embedded. */
		readonly PowerBiWorkspaceInfo: string;
		/** Chỉ sử dụng nội bộ. */
		readonly QueryInfo: string;
		/** Giá trị hàm băm của văn bản nội dung báo cáo. */
		readonly RdlHash: number;
		/** Mã định danh duy nhất của báo cáo. */
		ReportId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ReportIdUnique: string;
		/** Tên của báo cáo trên SRS. */
		readonly ReportNameOnSRS: string;
		/** Đại diện cho trạng thái của Báo cáo. */
		ReportStatus: string;
		/** Loại của báo cáo. */
		ReportTypeCode: OptionSet.Report.ReportTypeCode;
		/** Đại diện cho phiên bản của một báo cáo. */
		ReportVersion: number;
		/** XML dùng để xác định lịch báo cáo. */
		readonly ScheduleXml: string;
		/** Ngày ký báo cáo, dùng để nhận dạng báo cáo cho nâng cấp và vá lỗi nóng. */
		SignatureDate_UtcDateOnly: Date;
		/** Mã định danh duy nhất của chữ ký báo cáo, dùng để nhận dạng báo cáo cho nâng cấp và vá lỗi nóng. */
		SignatureId: string;
		/** Chữ ký báo cáo, mã ngôn ngữ dùng để nhận dạng báo cáo cho nâng cấp và vá lỗi nóng. */
		SignatureLcid: number;
		/** Phiên bản chính của chữ ký báo cáo, dùng để nhận dạng báo cáo cho nâng cấp và vá lỗi nóng. */
		SignatureMajorVersion: number;
		/** Phiên bản phụ của chữ ký báo cáo, dùng để nhận dạng báo cáo cho nâng cấp và vá lỗi nóng. */
		SignatureMinorVersion: number;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của báo cáo. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Represents the application id to which a CDS powerbi report belongs to. */
			readonly ApplicationId: string;
			/** Nội dung báo cáo dạng nhị phân (mã hóa base-64). */
			readonly BodyBinary: string;
			/** Nội dung văn bản của tệp RDL dành cho báo cáo của Dịch vụ báo cáo. */
			readonly BodyText: string;
			/** URL cho báo cáo đã liên kết. */
			readonly BodyUrl: string;
			/** Đại diện cho ID tập dữ liệu của một báo cáo. */
			readonly CdsDatasetId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo báo cáo. */
			readonly CreatedBy: string;
			/** Số phiên bản chính của Crm, được dùng để xác định phiên bản Crm có báo cáo được tạo. */
			readonly CreatedInMajorVersion: string;
			/** Ngày và giờ tạo báo cáo. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo báo cáo. */
			readonly CreatedOnBehalfBy: string;
			/** XML dùng để xác định báo cáo tùy chỉnh. */
			readonly CustomReportXml: string;
			/** Bộ lọc mặc định dành cho báo cáo. */
			readonly DefaultFilter: string;
			/** Field to represent the dependent report dataset model. */
			readonly DependentModelReportId: string;
			/** Mô tả của báo cáo. */
			readonly Description: string;
			readonly FileContent_name: string;
			/** Tên tệp của báo cáo. */
			readonly FileName: string;
			/** Kích thước tệp của báo cáo. */
			readonly FileSize: string;
			/** Phiên bản có báo cáo được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Thông tin về khả năng báo cáo là báo cáo tùy chỉnh. */
			readonly IsCustomReport: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Thông tin về khả năng báo cáo là cá nhân hoặc có sẵn cho mọi người dùng. */
			readonly IsPersonal: string;
			/** Thông tin về khả năng báo cáo là báo cáo theo lịch. */
			readonly IsScheduledReport: string;
			/** Ngôn ngữ sẽ hiển thị báo cáo. */
			readonly LanguageCode: string;
			/** Determine how the report workspace is managed. */
			readonly ManagedType: string;
			/** Loại MIME của báo cáo. */
			readonly MimeType: string;
			/** Mã định danh duy nhất của người dùng sửa đổi báo cáo lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi báo cáo lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa báo cáo lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của báo cáo. */
			readonly Name: string;
			/** Nội dung Văn bản gốc của tệp RDL dành cho báo cáo của Dịch vụ báo cáo. */
			readonly OriginalBodyText: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu báo cáo. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu báo cáo. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu báo cáo. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của báo cáo mẹ. */
			readonly ParentReportId: string;
			/** Field to maintain the sub application id and feature tag for powerbi reports. */
			readonly PowerBiFeatureTag: string;
			/** Represents the powerbi report id for a CDS report. */
			readonly PowerBiReportId: string;
			/** Field to maintain the internal state of the report */
			readonly PowerBiReportInternalState: string;
			/** Chứa tên của báo cáo Power BI Embedded. */
			readonly PowerBiReportName: string;
			/** Chứa thông tin không gian làm việc của báo cáo Power BI Embedded. */
			readonly PowerBiWorkspaceInfo: string;
			/** Chỉ sử dụng nội bộ. */
			readonly QueryInfo: string;
			/** Giá trị hàm băm của văn bản nội dung báo cáo. */
			readonly RdlHash: string;
			/** Mã định danh duy nhất của báo cáo. */
			readonly ReportId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ReportIdUnique: string;
			/** Tên của báo cáo trên SRS. */
			readonly ReportNameOnSRS: string;
			/** Đại diện cho trạng thái của Báo cáo. */
			readonly ReportStatus: string;
			/** Loại của báo cáo. */
			readonly ReportTypeCode: string;
			/** Đại diện cho phiên bản của một báo cáo. */
			readonly ReportVersion: string;
			/** XML dùng để xác định lịch báo cáo. */
			readonly ScheduleXml: string;
			/** Ngày ký báo cáo, dùng để nhận dạng báo cáo cho nâng cấp và vá lỗi nóng. */
			readonly SignatureDate_UtcDateOnly: string;
			/** Mã định danh duy nhất của chữ ký báo cáo, dùng để nhận dạng báo cáo cho nâng cấp và vá lỗi nóng. */
			readonly SignatureId: string;
			/** Chữ ký báo cáo, mã ngôn ngữ dùng để nhận dạng báo cáo cho nâng cấp và vá lỗi nóng. */
			readonly SignatureLcid: string;
			/** Phiên bản chính của chữ ký báo cáo, dùng để nhận dạng báo cáo cho nâng cấp và vá lỗi nóng. */
			readonly SignatureMajorVersion: string;
			/** Phiên bản phụ của chữ ký báo cáo, dùng để nhận dạng báo cáo cho nâng cấp và vá lỗi nóng. */
			readonly SignatureMinorVersion: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của báo cáo. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Report {
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
		enum ManagedType {
			/** 1 */
			Customer,
			/** 0 */
			Dataverse
		}
		enum ReportTypeCode {
			/** 3 */
			Bao_cao_da_lien_ket,
			/** 4 */
			Bao_cao_duoc_phan_trang_trong_Power_BI,
			/** 2 */
			Bao_cao_khac,
			/** 5 */
			Bao_cao_phan_tich_trong_Power_BI,
			/** 1 */
			Bao_cao_ve_dich_vu_bao_cao,
			/** 6 */
			Excel_Embedded_Report,
			/** 7 */
			Excel_Embedded_Report_Template
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