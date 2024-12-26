//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			FileFormat: DevKit.Controls.OptionSet;
			FileScope: DevKit.Controls.OptionSet;
			/** Tên thực thể tùy chỉnh. */
			name: DevKit.Controls.String;
		}
		interface Navigation {
			solutioncomponentconfig_solutioncomponentattrconfig: DevKit.Controls.NavigationItem
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
	class solutioncomponentconfigurationApi {
		/**
		* DynamicsCrm.DevKit solutioncomponentconfigurationApi
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
		/** Boolean cho biết có cho phép khóa xuất không có tiền tố hay không. */
		AllowExportKeyWithoutPrefix: boolean;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.solutioncomponentconfiguration.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Tính năng tự động loại bỏ phần phụ thuộc không hỗ trợ danh sách cấu phần cần thiết được phân tách bằng dấu phẩy */
		DependencyRemovalDisabledForComponents: string;
		/** Mã định danh duy nhất cho Thực thể liên kết với Cấu hình thành phần giải pháp. */
		EntityId: string;
		FileFormat: OptionSet.solutioncomponentconfiguration.FileFormat;
		FileScope: OptionSet.solutioncomponentconfiguration.FileScope;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Boolean cho biết liệu thành phần có bật giao diện người dùng không. */
		isdisplayable: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Boolean cho biết liệu thành phần có phải là thành phần con 1-1 không. */
		IsOneToOneChildComponent: boolean;
		IsSoftDeleteEnabled: boolean;
		/** Boolean cho biết liệu thành phần có được lập phiên bản hay không. */
		IsVersioningEnabled: boolean;
		/** Boolean cho biết liệu thành phần có giữ lại thao tác tùy chỉnh không được quản lý sau khi chuyển đổi hay không. */
		KeepActiveCustomizationAfterConversion: boolean;
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
		/** Mã định danh duy nhất của phiên bản thực thể */
		solutioncomponentconfigurationId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của Cấu hình thành phần giải pháp */
		statecode: OptionSet.solutioncomponentconfiguration.statecode;
		/** Lý do dẫn đến trạng thái của Cấu hình thành phần giải pháp */
		statuscode: OptionSet.solutioncomponentconfiguration.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Boolean cho biết có cho phép khóa xuất không có tiền tố hay không. */
			readonly AllowExportKeyWithoutPrefix: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Tính năng tự động loại bỏ phần phụ thuộc không hỗ trợ danh sách cấu phần cần thiết được phân tách bằng dấu phẩy */
			readonly DependencyRemovalDisabledForComponents: string;
			/** Mã định danh duy nhất cho Thực thể liên kết với Cấu hình thành phần giải pháp. */
			readonly EntityId: string;
			readonly FileFormat: string;
			readonly FileScope: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Boolean cho biết liệu thành phần có bật giao diện người dùng không. */
			readonly isdisplayable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Boolean cho biết liệu thành phần có phải là thành phần con 1-1 không. */
			readonly IsOneToOneChildComponent: string;
			readonly IsSoftDeleteEnabled: string;
			/** Boolean cho biết liệu thành phần có được lập phiên bản hay không. */
			readonly IsVersioningEnabled: string;
			/** Boolean cho biết liệu thành phần có giữ lại thao tác tùy chỉnh không được quản lý sau khi chuyển đổi hay không. */
			readonly KeepActiveCustomizationAfterConversion: string;
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
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly solutioncomponentconfigurationId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của Cấu hình thành phần giải pháp */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Cấu hình thành phần giải pháp */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace solutioncomponentconfiguration {
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
		enum FileFormat {
			/** 1 */
			json,
			/** 0 */
			xml
		}
		enum FileScope {
			/** 1 */
			Ca_nhan,
			/** 0 */
			Khong_co,
			/** 2 */
			Toan_cau
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