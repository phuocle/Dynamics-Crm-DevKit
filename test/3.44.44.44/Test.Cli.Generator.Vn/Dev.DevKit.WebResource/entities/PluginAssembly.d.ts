//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PluginAssemblyApi {
		/**
		* DynamicsCrm.DevKit PluginAssemblyApi
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
		/** Chỉ định chế độ xác thực với các nguồn web như WebApp */
		AuthType: OptionSet.PluginAssembly.AuthType;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.PluginAssembly.ComponentState;
		/** Số byte của cụm tổ hợp, theo định dạng Base64. */
		Content: string;
		/** Mã định danh duy nhất của người dùng đã tạo cụm tổ hợp bổ trợ. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo cụm tổ hợp bổ trợ. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo pluginassembly. */
		readonly CreatedOnBehalfBy: string;
		/** Mã văn hóa dành cho cụm tổ hợp bổ trợ. */
		Culture: string;
		/** Cấp độ tùy chỉnh. */
		readonly CustomizationLevel: number;
		/** Mô tả của cụm tổ hợp bổ trợ. */
		Description: string;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Thông tin chỉ định khả năng ẩn thành phần này. */
		IsHidden: string;
		/** Thông tin chỉ định khả năng quản lý thành phần này. */
		readonly IsManaged: boolean;
		/** Thông tin về cách thức cô lập cụm tổ hợp bổ trợ khi chạy thực thi; Không / Hộp cát. */
		IsolationMode: OptionSet.PluginAssembly.IsolationMode;
		readonly IsPasswordSet: boolean;
		/** Phần chính của phiên bản cụm tổ hợp. */
		readonly Major: number;
		/** Unique identifier for managedidentity associated with pluginassembly. */
		ManagedIdentityId: string;
		/** Phần phụ của phiên bản cụm tổ hợp. */
		readonly Minor: number;
		/** Mã định danh duy nhất của người dùng đã sửa cụm tổ hợp bổ trợ lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa cụm tổ hợp bổ trợ lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi pluginassembly lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của cụm tổ hợp bổ trợ. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức có liên kết với cụm tổ hợp bổ trợ. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất cho Gói phần bổ trợ liên kết với Cụm tổ hợp bổ trợ. */
		PackageId: string;
		/** Mật khẩu Người dùng */
		Password: string;
		/** Tên tệp của cụm tổ hợp bổ trợ. Dùng khi đặt loại nguồn là 1. */
		Path: string;
		/** Mã định danh duy nhất của cụm tổ hợp bổ trợ. */
		PluginAssemblyId: string;
		/** Mã định danh duy nhất của cụm tổ hợp bổ trợ. */
		readonly PluginAssemblyIdUnique: string;
		/** Mã thông báo khóa công khai của cụm tổ hợp. Bạn có thể lấy giá trị này từ cụm tổ hợp khi dùng phản xạ. */
		PublicKeyToken: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Hàm băm của nguồn cụm tổ hợp. */
		SourceHash: string;
		/** Vị trí của tập hợp, ví dụ: 0=cơ sở dữ liệu, 1=trên ổ đĩa. */
		SourceType: OptionSet.PluginAssembly.SourceType;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Url Web */
		Url: string;
		/** Tên Người dùng */
		UserName: string;
		/** Số phiên bản của cụm tổ hợp. Bạn có thể lấy giá trị từ cụm tổ hợp thông qua phản xạ. */
		Version: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ định chế độ xác thực với các nguồn web như WebApp */
			readonly AuthType: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Số byte của cụm tổ hợp, theo định dạng Base64. */
			readonly Content: string;
			/** Mã định danh duy nhất của người dùng đã tạo cụm tổ hợp bổ trợ. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo cụm tổ hợp bổ trợ. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo pluginassembly. */
			readonly CreatedOnBehalfBy: string;
			/** Mã văn hóa dành cho cụm tổ hợp bổ trợ. */
			readonly Culture: string;
			/** Cấp độ tùy chỉnh. */
			readonly CustomizationLevel: string;
			/** Mô tả của cụm tổ hợp bổ trợ. */
			readonly Description: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Thông tin chỉ định khả năng ẩn thành phần này. */
			readonly IsHidden: string;
			/** Thông tin chỉ định khả năng quản lý thành phần này. */
			readonly IsManaged: string;
			/** Thông tin về cách thức cô lập cụm tổ hợp bổ trợ khi chạy thực thi; Không / Hộp cát. */
			readonly IsolationMode: string;
			readonly IsPasswordSet: string;
			/** Phần chính của phiên bản cụm tổ hợp. */
			readonly Major: string;
			/** Unique identifier for managedidentity associated with pluginassembly. */
			readonly ManagedIdentityId: string;
			/** Phần phụ của phiên bản cụm tổ hợp. */
			readonly Minor: string;
			/** Mã định danh duy nhất của người dùng đã sửa cụm tổ hợp bổ trợ lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa cụm tổ hợp bổ trợ lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi pluginassembly lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của cụm tổ hợp bổ trợ. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với cụm tổ hợp bổ trợ. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất cho Gói phần bổ trợ liên kết với Cụm tổ hợp bổ trợ. */
			readonly PackageId: string;
			/** Mật khẩu Người dùng */
			readonly Password: string;
			/** Tên tệp của cụm tổ hợp bổ trợ. Dùng khi đặt loại nguồn là 1. */
			readonly Path: string;
			/** Mã định danh duy nhất của cụm tổ hợp bổ trợ. */
			readonly PluginAssemblyId: string;
			/** Mã định danh duy nhất của cụm tổ hợp bổ trợ. */
			readonly PluginAssemblyIdUnique: string;
			/** Mã thông báo khóa công khai của cụm tổ hợp. Bạn có thể lấy giá trị này từ cụm tổ hợp khi dùng phản xạ. */
			readonly PublicKeyToken: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Hàm băm của nguồn cụm tổ hợp. */
			readonly SourceHash: string;
			/** Vị trí của tập hợp, ví dụ: 0=cơ sở dữ liệu, 1=trên ổ đĩa. */
			readonly SourceType: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Url Web */
			readonly Url: string;
			/** Tên Người dùng */
			readonly UserName: string;
			/** Số phiên bản của cụm tổ hợp. Bạn có thể lấy giá trị từ cụm tổ hợp thông qua phản xạ. */
			readonly Version: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PluginAssembly {
		enum AuthType {
			/** 0 */
			BasicAuth
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
		enum IsolationMode {
			/** 3 */
			Ben_ngoai,
			/** 2 */
			Hop_cat,
			/** 1 */
			Khong
		}
		enum SourceType {
			/** 3 */
			AzureWebApp,
			/** 0 */
			Co_so_du_lieu,
			/** 4 */
			Luu_tru_tep,
			/** 1 */
			O_dia,
			/** 2 */
			Thong_thuong
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