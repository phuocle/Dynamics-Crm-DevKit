//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ReportLinkApi {
		/**
		* DynamicsCrm.DevKit ReportLinkApi
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
		/** Mã định danh duy nhất của người dùng đã tạo liên kết báo cáo. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi liên kết báo cáo. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo reportlink. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của báo cáo đã liên kết. */
		LinkedReportId: string;
		/** Tên của báo cáo đã liên kết. */
		LinkedReportName: string;
		/** Loại liên kết của báo cáo. */
		LinkTypeCode: OptionSet.ReportLink.LinkTypeCode;
		/** Mã định danh duy nhất của người dùng sửa đổi liên kết báo cáo lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi liên kết báo cáo lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa reportlink lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu liên kết báo cáo. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu liên kết báo cáo. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của báo cáo chính. */
		ReportId: string;
		/** Mã định danh duy nhất của liên kết báo cáo. */
		ReportLinkId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ReportLinkIdUnique: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo liên kết báo cáo. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi liên kết báo cáo. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo reportlink. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của báo cáo đã liên kết. */
			readonly LinkedReportId: string;
			/** Tên của báo cáo đã liên kết. */
			readonly LinkedReportName: string;
			/** Loại liên kết của báo cáo. */
			readonly LinkTypeCode: string;
			/** Mã định danh duy nhất của người dùng sửa đổi liên kết báo cáo lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi liên kết báo cáo lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa reportlink lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu liên kết báo cáo. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu liên kết báo cáo. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của báo cáo chính. */
			readonly ReportId: string;
			/** Mã định danh duy nhất của liên kết báo cáo. */
			readonly ReportLinkId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ReportLinkIdUnique: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ReportLink {
		enum LinkTypeCode {
			/** 2 */
			Bao_cao_phu,
			/** 1 */
			Truy_van_nguoc,
			/** 3 */
			Truy_van_nguoc_va_bao_cao_phu
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