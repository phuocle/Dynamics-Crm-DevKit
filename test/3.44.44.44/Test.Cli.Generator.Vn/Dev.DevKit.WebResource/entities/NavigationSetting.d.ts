//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class NavigationSettingApi {
		/**
		* DynamicsCrm.DevKit NavigationSettingApi
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
		/** Nhập vị trí của NavigationSetting này theo như cách hiển thị trong nhóm của thiết đặt điều hướng đó tại menu Thiết lập Nâng cao. */
		AdvancedSettingOrder: number;
		/** Nhập bản ghi Thiết đặt Ứng dụng liên kết với Thiết đặt Điều hướng này. */
		AppConfigId: string;
		/** Chỉ sử dụng trong hệ thống. */
		AppConfigIdUnique: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.NavigationSetting.ComponentState;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập một mô tả để diễn tả chi tiết Thiết đặt Điều hướng đó. */
		Description: string;
		/** Nhập tên của nhóm mà bản ghi Thiết đặt Điều hướng này thể hiện. */
		GroupName: string;
		/** Mã định danh tài nguyên web của biểu tượng được dùng cho khu vực hoặc khu vực con thiết đặt điều hướng. */
		IconResourceId: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
		readonly ImportSequenceNumber: number;
		/** Phiên bản trong đó quy tắc tương tự được đưa vào. */
		IntroducedVersion: string;
		/** Chỉ sử dụng nội bộ. */
		readonly IsManaged: boolean;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tiêu đề hoặc tên mô tả Thiết đặt Điều hướng để có thể nhận diện thiết đặt đó trong các dạng xem Dynamics CRM. */
		Name: string;
		/** Xác định một trang hay nhóm các trang thiết đặt được định cấu hình để sử dụng trong một ứng dụng đơn. */
		NavigationSettingId: string;
		/** Chỉ sử dụng trong hệ thống. */
		NavigationSettingIdUnique: string;
		/** Nhập Mã Loại Đối tượng của thực thể liên kết có trang được thể hiện bằng bản ghi Thiết đặt Điều hướng này. */
		ObjectTypeCode: number;
		/** Trường do hệ thống điền để xác định tổ chức sở hữu bản ghi Thiết đặt Điều hướng này. */
		readonly OrganizationId: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		readonly OverriddenCreatedOn_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Nhập URL xác định vị trí của trang được liên kết với bản ghi Thiết đặt Điều hướng này. */
		PageUrl: string;
		/** Bản ghi Thiết đặt Điều hướng thể hiện nhóm có chứa bản ghi này. */
		ParentNavigationSettingId: string;
		/** Nhập Mặt nạ Đặc quyền cho thực thể liên kết với trang thiết đặt điều hướng này, đây sẽ là yêu cầu tối thiểu để trang khả dụng với một người dùng. */
		Privileges: number;
		/** Chọn mức độ hoàn thành thiết lập cho trang Thiết đặt Điều hướng này. */
		ProgressState: boolean;
		/** Nhập vị trí của NavigationSetting này theo như cách hiển thị trong menu Thiết lập Nhanh. */
		QuickSettingOrder: number;
		/** Tài nguyên Web sẽ được liên kết với bản ghi Thiết đặt Điều hướng này. */
		ResourceId: string;
		/** Chọn loại nhóm mà bản ghi Thiết đặt Điều hướng này biểu thị. Điều này sẽ xác định menu nào trong số ba menu tùy chỉnh trong ứng dụng sẽ chứa nhóm này. */
		SettingType: OptionSet.NavigationSetting.SettingType;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		readonly FormattedValue: {
			/** Nhập vị trí của NavigationSetting này theo như cách hiển thị trong nhóm của thiết đặt điều hướng đó tại menu Thiết lập Nâng cao. */
			readonly AdvancedSettingOrder: string;
			/** Nhập bản ghi Thiết đặt Ứng dụng liên kết với Thiết đặt Điều hướng này. */
			readonly AppConfigId: string;
			/** Chỉ sử dụng trong hệ thống. */
			readonly AppConfigIdUnique: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập một mô tả để diễn tả chi tiết Thiết đặt Điều hướng đó. */
			readonly Description: string;
			/** Nhập tên của nhóm mà bản ghi Thiết đặt Điều hướng này thể hiện. */
			readonly GroupName: string;
			/** Mã định danh tài nguyên web của biểu tượng được dùng cho khu vực hoặc khu vực con thiết đặt điều hướng. */
			readonly IconResourceId: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Phiên bản trong đó quy tắc tương tự được đưa vào. */
			readonly IntroducedVersion: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsManaged: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tiêu đề hoặc tên mô tả Thiết đặt Điều hướng để có thể nhận diện thiết đặt đó trong các dạng xem Dynamics CRM. */
			readonly Name: string;
			/** Xác định một trang hay nhóm các trang thiết đặt được định cấu hình để sử dụng trong một ứng dụng đơn. */
			readonly NavigationSettingId: string;
			/** Chỉ sử dụng trong hệ thống. */
			readonly NavigationSettingIdUnique: string;
			/** Nhập Mã Loại Đối tượng của thực thể liên kết có trang được thể hiện bằng bản ghi Thiết đặt Điều hướng này. */
			readonly ObjectTypeCode: string;
			/** Trường do hệ thống điền để xác định tổ chức sở hữu bản ghi Thiết đặt Điều hướng này. */
			readonly OrganizationId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Nhập URL xác định vị trí của trang được liên kết với bản ghi Thiết đặt Điều hướng này. */
			readonly PageUrl: string;
			/** Bản ghi Thiết đặt Điều hướng thể hiện nhóm có chứa bản ghi này. */
			readonly ParentNavigationSettingId: string;
			/** Nhập Mặt nạ Đặc quyền cho thực thể liên kết với trang thiết đặt điều hướng này, đây sẽ là yêu cầu tối thiểu để trang khả dụng với một người dùng. */
			readonly Privileges: string;
			/** Chọn mức độ hoàn thành thiết lập cho trang Thiết đặt Điều hướng này. */
			readonly ProgressState: string;
			/** Nhập vị trí của NavigationSetting này theo như cách hiển thị trong menu Thiết lập Nhanh. */
			readonly QuickSettingOrder: string;
			/** Tài nguyên Web sẽ được liên kết với bản ghi Thiết đặt Điều hướng này. */
			readonly ResourceId: string;
			/** Chọn loại nhóm mà bản ghi Thiết đặt Điều hướng này biểu thị. Điều này sẽ xác định menu nào trong số ba menu tùy chỉnh trong ứng dụng sẽ chứa nhóm này. */
			readonly SettingType: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
		}
	}
}
declare namespace OptionSet {
	namespace NavigationSetting {
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
		enum SettingType {
			/** 1 */
			Thiet_lap_Co_ban,
			/** 0 */
			Thiet_lap_Nang_cao,
			/** 3 */
			Tom_tat_Thiet_lap_Co_ban,
			/** 2 */
			Tom_tat_Thiet_lap_Nang_cao
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