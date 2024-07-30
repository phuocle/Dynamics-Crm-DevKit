//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class datalakeworkspaceApi {
		/**
		* DynamicsCrm.DevKit datalakeworkspaceApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.datalakeworkspace.ComponentState;
		/** Điểm cuối bộ chứa Azure Data Lake cho không gian làm việc này. */
		readonly containerendpoint: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Tên duy nhất cho thực thể. */
		datalakeworkspace_UniqueName: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		datalakeworkspaceId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Cho biết liệu bộ lưu trữ dữ liệu không gian làm việc có sử dụng dung lượng của khách hàng hay không. */
		iscustomercapacity: boolean;
		/** For internal use only. */
		IsCustomizable: string;
		/** Cho biết bản sao sâu có được bật cho không gian làm việc hay không. */
		isdeepcopyenabled: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Cho biết siêu dữ liệu và dữ liệu không gian làm việc hiển thị với tất cả các ứng dụng hay chỉ hiển thị với chủ sở hữu không gian làm việc và các ứng dụng có quyền rõ ràng đối với không gian làm việc. */
		isprivate: boolean;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên thực thể tùy chỉnh. */
		name: string;
		/** Mã định danh duy nhất cho tổ chức */
		readonly OrganizationId: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** ID ứng dụng sở hữu không gian làm việc này. ID ứng dụng sở hữu có toàn quyền kiểm soát, tức là quyền đọc, ghi và thực thi trên thư mục ADLS. */
		owningappid: string;
		/** Đường dẫn đến không gian làm việc trong bộ chứa Azure Data Lake. */
		readonly path: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của Không gian làm việc Data Lake */
		readonly statecode: OptionSet.datalakeworkspace.statecode;
		/** Lý do dẫn đến trạng thái của Không gian làm việc Data Lake */
		readonly statuscode: OptionSet.datalakeworkspace.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** ID đối tượng thuê AAD nơi ID ứng dụng sở hữu được đăng ký. */
		tenantid: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** ID ứng dụng được cho phép trong ID Đối tượng thuê AAD để truy cập API Đồ thị. */
		whitelistedappid: string;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Điểm cuối bộ chứa Azure Data Lake cho không gian làm việc này. */
			readonly containerendpoint: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Tên duy nhất cho thực thể. */
			readonly datalakeworkspace_UniqueName: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly datalakeworkspaceId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Cho biết liệu bộ lưu trữ dữ liệu không gian làm việc có sử dụng dung lượng của khách hàng hay không. */
			readonly iscustomercapacity: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Cho biết bản sao sâu có được bật cho không gian làm việc hay không. */
			readonly isdeepcopyenabled: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Cho biết siêu dữ liệu và dữ liệu không gian làm việc hiển thị với tất cả các ứng dụng hay chỉ hiển thị với chủ sở hữu không gian làm việc và các ứng dụng có quyền rõ ràng đối với không gian làm việc. */
			readonly isprivate: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên thực thể tùy chỉnh. */
			readonly name: string;
			/** Mã định danh duy nhất cho tổ chức */
			readonly OrganizationId: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** ID ứng dụng sở hữu không gian làm việc này. ID ứng dụng sở hữu có toàn quyền kiểm soát, tức là quyền đọc, ghi và thực thi trên thư mục ADLS. */
			readonly owningappid: string;
			/** Đường dẫn đến không gian làm việc trong bộ chứa Azure Data Lake. */
			readonly path: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của Không gian làm việc Data Lake */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Không gian làm việc Data Lake */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** ID đối tượng thuê AAD nơi ID ứng dụng sở hữu được đăng ký. */
			readonly tenantid: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** ID ứng dụng được cho phép trong ID Đối tượng thuê AAD để truy cập API Đồ thị. */
			readonly whitelistedappid: string;
		}
	}
}
declare namespace OptionSet {
	namespace datalakeworkspace {
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