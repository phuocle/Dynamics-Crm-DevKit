//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ReportCategoryApi {
		/**
		* DynamicsCrm.DevKit ReportCategoryApi
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
		/** Thể loại của báo cáo. */
		CategoryCode: OptionSet.ReportCategory.CategoryCode;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.ReportCategory.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo thể loại báo cáo. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi thể loại báo cáo. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo thể loại báo cáo. */
		readonly CreatedOnBehalfBy: string;
		/** Tỉ giá đối với loại tiền liên kết với thể loại báo cáo liên quan đến loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng đã sửa đổi thể loại báo cáo lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi thể loại báo cáo lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa thể loại báo cáo lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu thể loại báo cáo. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu thể loại báo cáo. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của thể loại báo cáo. */
		ReportCategoryId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ReportCategoryIdUnique: string;
		/** Mã định danh duy nhất của báo cáo. */
		ReportId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã định danh duy nhất của loại tiền liên kết với Thể loại báo cáo. */
		TransactionCurrencyId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của thể loại báo cáo. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Thể loại của báo cáo. */
			readonly CategoryCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo thể loại báo cáo. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi thể loại báo cáo. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo thể loại báo cáo. */
			readonly CreatedOnBehalfBy: string;
			/** Tỉ giá đối với loại tiền liên kết với thể loại báo cáo liên quan đến loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi thể loại báo cáo lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi thể loại báo cáo lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa thể loại báo cáo lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu thể loại báo cáo. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu thể loại báo cáo. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của thể loại báo cáo. */
			readonly ReportCategoryId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ReportCategoryIdUnique: string;
			/** Mã định danh duy nhất của báo cáo. */
			readonly ReportId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã định danh duy nhất của loại tiền liên kết với Thể loại báo cáo. */
			readonly TransactionCurrencyId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của thể loại báo cáo. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ReportCategory {
		enum CategoryCode {
			/** 1 */
			Bao_cao_ban_hang,
			/** 2 */
			Bao_cao_dich_vu,
			/** 4 */
			Bao_cao_quan_tri,
			/** 3 */
			Bao_cao_tiep_thi
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