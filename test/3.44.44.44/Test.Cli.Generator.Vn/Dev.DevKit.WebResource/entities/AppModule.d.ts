//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppModuleApi {
		/**
		* DynamicsCrm.DevKit AppModuleApi
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
		/** Trường này dùng để lưu trữ nội dung mô tả do trí tuệ nhân tạo đã tạo cho ứng dụng dựa trên mô hình */
		aiappdescription: string;
		/** Trường này lưu trữ thời gian mà trí tuệ nhân tạo đã tạo ra nội dung mô tả ứng dụng gần đây nhất. */
		aidescriptiongeneratedon_UtcDateAndTime: Date;
		/** Trường này dùng để lưu trữ biểu đồ ứng dụng cho ứng dụng dựa trên mô hình */
		appgraph: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		AppModuleId: string;
		/** Mã định danh duy nhất của Mô-đun Ứng dụng được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook */
		AppModuleIdUnique: string;
		/** Phiên bản Mô-đun Ứng dụng */
		AppModuleVersion: string;
		/** Xml Mô-đun Ứng dụng Được quản lý */
		AppModuleXmlManaged: string;
		/** Loại Máy khách như Web hoặc UCI */
		ClientType: number;
		/** Chỉ sử dụng nội bộ */
		readonly ComponentState: OptionSet.AppModule.ComponentState;
		/** Chứa XML cấu hình */
		ConfigXML: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả về thực thể */
		Description: string;
		/** Thông tin mô tả Mô-đun Ứng dụng */
		readonly Descriptor: string;
		/** Quy trình Xử lý Sự kiện Mô-đun Ứng dụng */
		EventHandlers: string;
		/** Nhân tố biểu mẫu */
		FormFactor: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Phiên bản trong đó quy tắc tương tự được giới thiệu. */
		IntroducedVersion: string;
		/** Là mặc định */
		IsDefault: boolean;
		/** Là nổi bật */
		IsFeatured: boolean;
		/** Được quản lý */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên Mô-đun Ứng dụng */
		Name: string;
		/** Loại điều hướng ứng dụng */
		NavigationType: OptionSet.AppModule.NavigationType;
		/** Máy khách mà ứng dụng này được tối ưu hóa */
		OptimizedFor: string;
		/** Mã định danh duy nhất của tổ chức liên kết với ứng dụng. */
		readonly OrganizationId: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Ngày và giờ xuất bản bản ghi. */
		PublishedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của nhà phát hành. */
		PublisherId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Trạng thái của Ứng dụng dựa trên mô hình */
		statecode: OptionSet.AppModule.statecode;
		/** Lý do dẫn đến trạng thái của Ứng dụng dựa trên mô hình */
		statuscode: OptionSet.AppModule.statuscode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Tên duy nhất của mô-đun ứng dụng */
		UniqueName: string;
		/** Chứa URL */
		URL: string;
		readonly VersionNumber: number;
		/** Mã định danh duy nhất của Tài nguyên Web */
		WebResourceId: string;
		/** Mã định danh duy nhất của Tài nguyên Web dưới dạng ID Trang Chào mừng */
		WelcomePageId: string;
		readonly FormattedValue: {
			/** Trường này dùng để lưu trữ nội dung mô tả do trí tuệ nhân tạo đã tạo cho ứng dụng dựa trên mô hình */
			readonly aiappdescription: string;
			/** Trường này lưu trữ thời gian mà trí tuệ nhân tạo đã tạo ra nội dung mô tả ứng dụng gần đây nhất. */
			readonly aidescriptiongeneratedon_UtcDateAndTime: string;
			/** Trường này dùng để lưu trữ biểu đồ ứng dụng cho ứng dụng dựa trên mô hình */
			readonly appgraph: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly AppModuleId: string;
			/** Mã định danh duy nhất của Mô-đun Ứng dụng được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook */
			readonly AppModuleIdUnique: string;
			/** Phiên bản Mô-đun Ứng dụng */
			readonly AppModuleVersion: string;
			/** Xml Mô-đun Ứng dụng Được quản lý */
			readonly AppModuleXmlManaged: string;
			/** Loại Máy khách như Web hoặc UCI */
			readonly ClientType: string;
			/** Chỉ sử dụng nội bộ */
			readonly ComponentState: string;
			/** Chứa XML cấu hình */
			readonly ConfigXML: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả về thực thể */
			readonly Description: string;
			/** Thông tin mô tả Mô-đun Ứng dụng */
			readonly Descriptor: string;
			/** Quy trình Xử lý Sự kiện Mô-đun Ứng dụng */
			readonly EventHandlers: string;
			/** Nhân tố biểu mẫu */
			readonly FormFactor: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Phiên bản trong đó quy tắc tương tự được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Là mặc định */
			readonly IsDefault: string;
			/** Là nổi bật */
			readonly IsFeatured: string;
			/** Được quản lý */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên Mô-đun Ứng dụng */
			readonly Name: string;
			/** Loại điều hướng ứng dụng */
			readonly NavigationType: string;
			/** Máy khách mà ứng dụng này được tối ưu hóa */
			readonly OptimizedFor: string;
			/** Mã định danh duy nhất của tổ chức liên kết với ứng dụng. */
			readonly OrganizationId: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Ngày và giờ xuất bản bản ghi. */
			readonly PublishedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của nhà phát hành. */
			readonly PublisherId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Trạng thái của Ứng dụng dựa trên mô hình */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Ứng dụng dựa trên mô hình */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Tên duy nhất của mô-đun ứng dụng */
			readonly UniqueName: string;
			/** Chứa URL */
			readonly URL: string;
			readonly VersionNumber: string;
			/** Mã định danh duy nhất của Tài nguyên Web */
			readonly WebResourceId: string;
			/** Mã định danh duy nhất của Tài nguyên Web dưới dạng ID Trang Chào mừng */
			readonly WelcomePageId: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppModule {
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
		enum NavigationType {
			/** 1 */
			Da_phien,
			/** 0 */
			Mot_phien
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 3 */
			Da_xoa,
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