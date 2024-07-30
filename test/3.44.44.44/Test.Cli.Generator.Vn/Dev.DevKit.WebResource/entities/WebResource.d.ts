//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class WebResourceApi {
		/**
		* DynamicsCrm.DevKit WebResourceApi
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
		/** Thông tin chỉ định khả năng hệ thống có thể xóa thành phần này. */
		CanBeDeleted: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.WebResource.ComponentState;
		/** Byte của tài nguyên web, trong định dạng Base64. */
		Content: string;
		/** Tham chiếu đến tệp nội dung trên Azure. */
		readonly ContentFileRef_name: string;
		/** Trình bày Json của nội dung nguồn lực. */
		ContentJson: string;
		/** Tham chiếu đến tệp nội dung Json trên Azure. */
		readonly ContentJsonFileRef_name: string;
		/** Mã định danh duy nhất của người dùng đã tạo tài nguyên web. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo tài nguyên web. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo tài nguyên web. */
		readonly CreatedOnBehalfBy: string;
		/** Chỉ sử dụng nội bộ. */
		DependencyXml: string;
		/** Mô tả về tài nguyên web. */
		Description: string;
		/** Tên hiển thị của tài nguyên web. */
		DisplayName: string;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		/** Thông tin chỉ định xem tài nguyên web này có khả dụng cho máy khách di động trong chế độ ngoại tuyến hay không. */
		IsAvailableForMobileOffline: boolean;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Thông tin chỉ định khả năng sẽ bật tài nguyên web này cho máy khách di động. */
		IsEnabledForMobileClient: boolean;
		/** Thông tin chỉ định khả năng ẩn thành phần này. */
		IsHidden: string;
		readonly IsManaged: boolean;
		/** Ngôn ngữ của tài nguyên web. */
		LanguageCode: number;
		/** Mã định danh duy nhất của người dùng sửa đổi tài nguyên web lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi tài nguyên web lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa tài nguyên web. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của tài nguyên web. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức liên kết với tài nguyên web. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Tài nguyên web Silverlight yêu cầu phải có số phiên bản thời gian chạy Silverlight. */
		SilverlightVersion: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		/** Mã định danh duy nhất của tài nguyên web. */
		WebResourceId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly WebResourceIdUnique: string;
		/** Danh sách thả xuống để chọn loại tài nguyên web. */
		WebResourceType: OptionSet.WebResource.WebResourceType;
		readonly FormattedValue: {
			/** Thông tin chỉ định khả năng hệ thống có thể xóa thành phần này. */
			readonly CanBeDeleted: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Byte của tài nguyên web, trong định dạng Base64. */
			readonly Content: string;
			/** Tham chiếu đến tệp nội dung trên Azure. */
			readonly ContentFileRef_name: string;
			/** Trình bày Json của nội dung nguồn lực. */
			readonly ContentJson: string;
			/** Tham chiếu đến tệp nội dung Json trên Azure. */
			readonly ContentJsonFileRef_name: string;
			/** Mã định danh duy nhất của người dùng đã tạo tài nguyên web. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo tài nguyên web. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo tài nguyên web. */
			readonly CreatedOnBehalfBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly DependencyXml: string;
			/** Mô tả về tài nguyên web. */
			readonly Description: string;
			/** Tên hiển thị của tài nguyên web. */
			readonly DisplayName: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Thông tin chỉ định xem tài nguyên web này có khả dụng cho máy khách di động trong chế độ ngoại tuyến hay không. */
			readonly IsAvailableForMobileOffline: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Thông tin chỉ định khả năng sẽ bật tài nguyên web này cho máy khách di động. */
			readonly IsEnabledForMobileClient: string;
			/** Thông tin chỉ định khả năng ẩn thành phần này. */
			readonly IsHidden: string;
			readonly IsManaged: string;
			/** Ngôn ngữ của tài nguyên web. */
			readonly LanguageCode: string;
			/** Mã định danh duy nhất của người dùng sửa đổi tài nguyên web lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi tài nguyên web lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa tài nguyên web. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của tài nguyên web. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức liên kết với tài nguyên web. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Tài nguyên web Silverlight yêu cầu phải có số phiên bản thời gian chạy Silverlight. */
			readonly SilverlightVersion: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
			/** Mã định danh duy nhất của tài nguyên web. */
			readonly WebResourceId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly WebResourceIdUnique: string;
			/** Danh sách thả xuống để chọn loại tài nguyên web. */
			readonly WebResourceType: string;
		}
	}
}
declare namespace OptionSet {
	namespace WebResource {
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
		enum WebResourceType {
			/** 12 */
			Chuoi_RESX,
			/** 7 */
			Dinh_dang_GIF,
			/** 10 */
			Dinh_dang_ICO,
			/** 6 */
			Dinh_dang_JPG,
			/** 5 */
			Dinh_dang_PNG,
			/** 11 */
			Dinh_dang_vec_to_SVG,
			/** 4 */
			Du_lieu_XML,
			/** 3 */
			Script_JScript,
			/** 8 */
			Silverlight_XAP,
			/** 2 */
			To_mau_CSS,
			/** 9 */
			To_mau_XSL,
			/** 1 */
			Trang_web_HTML
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