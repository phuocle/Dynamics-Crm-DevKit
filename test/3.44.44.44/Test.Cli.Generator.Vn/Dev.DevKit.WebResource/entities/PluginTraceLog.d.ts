//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Header extends DevKit.Controls.IHeader {
			/** Tên của thông báo đã kích hoạt phần bổ trợ này. */
			MessageName: DevKit.Controls.String;
			/** Loại mã tùy chỉnh. */
			OperationType: DevKit.Controls.OptionSet;
			/** Thực thể mà phần bổ trợ được thực thi, nếu có. */
			PrimaryEntity: DevKit.Controls.String;
		}
		interface tab_Configuration_Sections {
			Configuration_Context: DevKit.Controls.Section;
			Configuration_General: DevKit.Controls.Section;
		}
		interface tab_Execution_Sections {
			Execution_Performance: DevKit.Controls.Section;
		}
		interface tab_Configuration extends DevKit.Controls.ITab {
			Section: tab_Configuration_Sections;
		}
		interface tab_Execution extends DevKit.Controls.ITab {
			Section: tab_Execution_Sections;
		}
		interface Tabs {
			Configuration: tab_Configuration;
			Execution: tab_Execution;
		}
		interface Body {
			Tab: Tabs;
			/** Đặt cấu hình không bảo mật cho nhật ký truy vết phần bổ trợ. */
			Configuration: DevKit.Controls.String;
			/** Mã định danh duy nhất để theo dõi thực thi hoạt động của quy trình tùy chỉnh hoặc phần bổ trợ. */
			CorrelationId: DevKit.Controls.String;
			/** Độ sâu thực thi của hoạt động của quy trình tùy chỉnh hoặc phần bổ trợ. */
			Depth: DevKit.Controls.Integer;
			/** Chi tiết ngoại lệ. */
			ExceptionDetails: DevKit.Controls.String;
			/** Nguồn gốc sự kiện. Hãy đặt thành true nếu đó là truy vết hệ thống; nếu không đặt thành false. */
			IsSystemCreated: DevKit.Controls.Boolean;
			/** Văn bản truy vết từ phần bổ trợ. */
			MessageBlock: DevKit.Controls.String;
			/** Tên của thông báo đã kích hoạt phần bổ trợ này. */
			MessageName: DevKit.Controls.String;
			/** Loại thực thi. */
			Mode: DevKit.Controls.OptionSet;
			/** Loại mã tùy chỉnh. */
			OperationType: DevKit.Controls.OptionSet;
			/** Thời gian thực thi yêu cầu, tính bằng mili giây. */
			PerformanceExecutionDuration: DevKit.Controls.Integer;
			/** Thời gian thực thi yêu cầu, tính bằng mili giây. */
			PerformanceExecutionStartTime: DevKit.Controls.DateTime;
			/** Khóa duy trì quy trình không đồng bộ. */
			PersistenceKey: DevKit.Controls.String;
			/** ID bước đăng ký phần bổ trợ. */
			PluginStepId: DevKit.Controls.String;
			/** Thực thể mà phần bổ trợ được thực thi, nếu có. */
			PrimaryEntity: DevKit.Controls.String;
			/** Mã định danh duy nhất của yêu cầu thông báo. */
			RequestId: DevKit.Controls.String;
			/** Đặt cấu hình bảo mật cho nhật ký truy vết phần bổ trợ. */
			SecureConfiguration: DevKit.Controls.String;
			/** Tên loại của phần bổ trợ. */
			TypeName: DevKit.Controls.String;
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
		/** The Header section of form Thong_tin */
		Header: DevKit.FormThong_tin.Header;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class PluginTraceLogApi {
		/**
		* DynamicsCrm.DevKit PluginTraceLogApi
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
		/** Đặt cấu hình không bảo mật cho nhật ký truy vết phần bổ trợ. */
		readonly Configuration: string;
		/** Mã định danh duy nhất để theo dõi thực thi hoạt động của quy trình tùy chỉnh hoặc phần bổ trợ. */
		readonly CorrelationId: string;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Độ sâu thực thi của hoạt động của quy trình tùy chỉnh hoặc phần bổ trợ. */
		readonly Depth: number;
		/** Chi tiết ngoại lệ. */
		readonly ExceptionDetails: string;
		/** Nguồn gốc sự kiện. Hãy đặt thành true nếu đó là truy vết hệ thống; nếu không đặt thành false. */
		readonly IsSystemCreated: boolean;
		/** Văn bản truy vết từ phần bổ trợ. */
		readonly MessageBlock: string;
		/** Tên của thông báo đã kích hoạt phần bổ trợ này. */
		readonly MessageName: string;
		/** Loại thực thi. */
		readonly Mode: OptionSet.PluginTraceLog.Mode;
		/** Loại mã tùy chỉnh. */
		readonly OperationType: OptionSet.PluginTraceLog.OperationType;
		/** Mã định danh duy nhất cho tổ chức. */
		readonly OrganizationId: string;
		/** Thời gian xây dựng, tính bằng mili giây. */
		readonly PerformanceConstructorDuration: number;
		/** Ngày và giờ xây dựng. */
		readonly PerformanceConstructorStartTime_UtcDateAndTime: Date;
		/** Thời gian thực thi yêu cầu, tính bằng mili giây. */
		readonly PerformanceExecutionDuration: number;
		/** Thời gian thực thi yêu cầu, tính bằng mili giây. */
		readonly PerformanceExecutionStartTime_UtcDateAndTime: Date;
		/** Khóa duy trì quy trình không đồng bộ. */
		readonly PersistenceKey: string;
		/** ID bước đăng ký phần bổ trợ. */
		readonly PluginStepId: string;
		/** Mã định danh duy nhất của phiên bản thực thể. */
		readonly PluginTraceLogId: string;
		/** Thực thể mà phần bổ trợ được thực thi, nếu có. */
		readonly PrimaryEntity: string;
		/** Cấu hình phần bổ trợ có định dạng là văn bản được lập chuỗi. */
		readonly Profile: string;
		/** Mã định danh duy nhất của yêu cầu thông báo. */
		readonly RequestId: string;
		/** Đặt cấu hình bảo mật cho nhật ký truy vết phần bổ trợ. */
		readonly SecureConfiguration: string;
		/** Tên loại của phần bổ trợ. */
		readonly TypeName: string;
		readonly FormattedValue: {
			/** Đặt cấu hình không bảo mật cho nhật ký truy vết phần bổ trợ. */
			readonly Configuration: string;
			/** Mã định danh duy nhất để theo dõi thực thi hoạt động của quy trình tùy chỉnh hoặc phần bổ trợ. */
			readonly CorrelationId: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Độ sâu thực thi của hoạt động của quy trình tùy chỉnh hoặc phần bổ trợ. */
			readonly Depth: string;
			/** Chi tiết ngoại lệ. */
			readonly ExceptionDetails: string;
			/** Nguồn gốc sự kiện. Hãy đặt thành true nếu đó là truy vết hệ thống; nếu không đặt thành false. */
			readonly IsSystemCreated: string;
			/** Văn bản truy vết từ phần bổ trợ. */
			readonly MessageBlock: string;
			/** Tên của thông báo đã kích hoạt phần bổ trợ này. */
			readonly MessageName: string;
			/** Loại thực thi. */
			readonly Mode: string;
			/** Loại mã tùy chỉnh. */
			readonly OperationType: string;
			/** Mã định danh duy nhất cho tổ chức. */
			readonly OrganizationId: string;
			/** Thời gian xây dựng, tính bằng mili giây. */
			readonly PerformanceConstructorDuration: string;
			/** Ngày và giờ xây dựng. */
			readonly PerformanceConstructorStartTime_UtcDateAndTime: string;
			/** Thời gian thực thi yêu cầu, tính bằng mili giây. */
			readonly PerformanceExecutionDuration: string;
			/** Thời gian thực thi yêu cầu, tính bằng mili giây. */
			readonly PerformanceExecutionStartTime_UtcDateAndTime: string;
			/** Khóa duy trì quy trình không đồng bộ. */
			readonly PersistenceKey: string;
			/** ID bước đăng ký phần bổ trợ. */
			readonly PluginStepId: string;
			/** Mã định danh duy nhất của phiên bản thực thể. */
			readonly PluginTraceLogId: string;
			/** Thực thể mà phần bổ trợ được thực thi, nếu có. */
			readonly PrimaryEntity: string;
			/** Cấu hình phần bổ trợ có định dạng là văn bản được lập chuỗi. */
			readonly Profile: string;
			/** Mã định danh duy nhất của yêu cầu thông báo. */
			readonly RequestId: string;
			/** Đặt cấu hình bảo mật cho nhật ký truy vết phần bổ trợ. */
			readonly SecureConfiguration: string;
			/** Tên loại của phần bổ trợ. */
			readonly TypeName: string;
		}
	}
}
declare namespace OptionSet {
	namespace PluginTraceLog {
		enum Mode {
			/** 0 */
			Dong_bo,
			/** 1 */
			Khong_dong_bo
		}
		enum OperationType {
			/** 2 */
			Hoat_dong_cua_Quy_trinh,
			/** 0 */
			Khong_xac_dinh,
			/** 1 */
			Phan_bo_tro
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