//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class CanvasAppApi {
		/**
		* DynamicsCrm.DevKit CanvasAppApi
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
		/** Mã định danh duy nhất của người dùng đã tạo ứng dụng bảng tùy biến. */
		AADCreatedById: string;
		/** Mã định danh duy nhất của người dùng đã sửa đổi ứng dụng lần cuối. */
		AADLastModifiedById: string;
		/** Mã định danh duy nhất của người dùng đã phát hành ứng dụng lần cuối. */
		AADLastPublishedById: string;
		/** Cho biết liệu ứng dụng bảng tùy biến có được đánh dấu để bỏ qua sự chấp thuận từ quản trị viên. */
		AdminControlBypassConsent: boolean;
		/** Các quan hệ phụ thuộc của thành phần ứng dụng. */
		AppComponentDependencies: string;
		/** Các thành phần ứng dụng. */
		AppComponents: string;
		/** URI mở ứng dụng. */
		AppOpenUri: string;
		/** Phiên bản ứng dụng. */
		AppVersion: string;
		/** Tài sản cho Ứng dụng canvas. */
		readonly Assets_name: string;
		/** Tham chiếu ủy quyền của ứng dụng. */
		AuthorizationReferences: string;
		/** Màu ảnh nền. */
		BackgroundColor: string;
		/** Hình nền cho Ứng dụng canvas. */
		readonly BackgroundImage_name: string;
		/** Cho biết liệu ứng dụng bảng tùy biến có bỏ qua sự chấp thuận từ khách hàng hay không. */
		BypassConsent: boolean;
		/** Loại ứng dụng canvas. */
		CanConsumeAppPass: boolean;
		/** Chỉ sử dụng nội bộ. */
		CanvasAppId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly CanvasAppRowId: string;
		/** Loại ứng dụng canvas. */
		CanvasAppType: OptionSet.CanvasApp.CanvasAppType;
		/** Sử dụng nội bộ. Chi tiết quan hệ phụ thuộc của ứng dụng. */
		CdsDependencies: string;
		/** Thông báo cam kết của ứng dụng. */
		CommitMessage: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.CanvasApp.ComponentState;
		/** Tham chiếu kết nối của ứng dụng. */
		ConnectionReferences: string;
		/** Phiên bản máy khách đã được dùng để làm tác giả cho ứng dụng. */
		CreatedByClientVersion: string;
		/** Ngày và giờ tạo ứng dụng. */
		CreatedTime_UtcDateAndTime: Date;
		/** Tham chiếu cơ sở dữ liệu của ứng dụng. */
		DatabaseReferences: string;
		/** Mô tả ứng dụng. */
		Description: string;
		/** Tên hiển thị của ứng dụng. */
		DisplayName: string;
		/** Tài liệu cho Ứng dụng canvas. */
		readonly Document_name: string;
		/** Sử dụng nội bộ. Thông tin ứng dụng được nhúng. */
		EmbeddedApp: string;
		/** Mã định danh của mục thư viện. */
		GalleryItemId: string;
		/** Phiên bản có ứng dụng bảng tùy biến được đưa vào. */
		IntroducedVersion: string;
		/** Cho biết liệu ứng dụng bảng tùy biến có chứa tham chiếu CDS 1.0 hay không. */
		IsCdsUpgraded: boolean;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Cho biết liệu ứng dụng bảng tùy biến có phải là ứng dụng nổi bật hay không. */
		IsFeaturedApp: boolean;
		/** Cho biết liệu ứng dụng bảng tùy biến có phải là ứng dụng chính hay không. */
		IsHeroApp: boolean;
		/** Cho biết liệu ứng dụng bảng tùy biến có bị ẩn khỏi danh sách người dùng hay không. */
		IsHidden: boolean;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Biểu tượng lớn cho Ứng dụng canvas. */
		readonly LargeIcon_name: string;
		/** Ngày và giờ sửa đổi ứng dụng lần cuối. */
		LastModifiedTime_UtcDateAndTime: Date;
		/** Ngày và giờ phát hành ứng dụng lần cuối. */
		LastPublishTime_UtcDateAndTime: Date;
		/** Biểu tượng trung bình cho Ứng dụng canvas. */
		readonly MediumIcon_name: string;
		/** Phiên bản máy khách đã được dùng để làm tác giả cho ứng dụng. */
		MinClientVersion: string;
		/** Tên CanvasApp */
		Name: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu quy trình. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu quy trình. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu quy trình. */
		readonly OwningUser: string;
		/** Nhà phát hành ứng dụng. */
		Publisher: string;
		/** Biểu tượng nhỏ cho Ứng dụng canvas. */
		readonly SmallIcon_name: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Giá trị cho biết liệu ứng dụng có sẵn sàng để sử dụng hay không. */
		Status: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Thẻ siêu dữ liệu của ứng dụng. */
		Tags: string;
		/** Biểu tượng Teams cho Ứng dụng canvas. */
		readonly TeamsIcon_name: string;
		/** ID ứng dụng canvas duy nhất toàn cầu */
		UniqueCanvasAppId: string;
		readonly VersionNumber: number;
		/** Biểu tượng rộng cho Ứng dụng canvas. */
		readonly WideIcon_name: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo ứng dụng bảng tùy biến. */
			readonly AADCreatedById: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi ứng dụng lần cuối. */
			readonly AADLastModifiedById: string;
			/** Mã định danh duy nhất của người dùng đã phát hành ứng dụng lần cuối. */
			readonly AADLastPublishedById: string;
			/** Cho biết liệu ứng dụng bảng tùy biến có được đánh dấu để bỏ qua sự chấp thuận từ quản trị viên. */
			readonly AdminControlBypassConsent: string;
			/** Các quan hệ phụ thuộc của thành phần ứng dụng. */
			readonly AppComponentDependencies: string;
			/** Các thành phần ứng dụng. */
			readonly AppComponents: string;
			/** URI mở ứng dụng. */
			readonly AppOpenUri: string;
			/** Phiên bản ứng dụng. */
			readonly AppVersion: string;
			/** Tài sản cho Ứng dụng canvas. */
			readonly Assets_name: string;
			/** Tham chiếu ủy quyền của ứng dụng. */
			readonly AuthorizationReferences: string;
			/** Màu ảnh nền. */
			readonly BackgroundColor: string;
			/** Hình nền cho Ứng dụng canvas. */
			readonly BackgroundImage_name: string;
			/** Cho biết liệu ứng dụng bảng tùy biến có bỏ qua sự chấp thuận từ khách hàng hay không. */
			readonly BypassConsent: string;
			/** Loại ứng dụng canvas. */
			readonly CanConsumeAppPass: string;
			/** Chỉ sử dụng nội bộ. */
			readonly CanvasAppId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly CanvasAppRowId: string;
			/** Loại ứng dụng canvas. */
			readonly CanvasAppType: string;
			/** Sử dụng nội bộ. Chi tiết quan hệ phụ thuộc của ứng dụng. */
			readonly CdsDependencies: string;
			/** Thông báo cam kết của ứng dụng. */
			readonly CommitMessage: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Tham chiếu kết nối của ứng dụng. */
			readonly ConnectionReferences: string;
			/** Phiên bản máy khách đã được dùng để làm tác giả cho ứng dụng. */
			readonly CreatedByClientVersion: string;
			/** Ngày và giờ tạo ứng dụng. */
			readonly CreatedTime_UtcDateAndTime: string;
			/** Tham chiếu cơ sở dữ liệu của ứng dụng. */
			readonly DatabaseReferences: string;
			/** Mô tả ứng dụng. */
			readonly Description: string;
			/** Tên hiển thị của ứng dụng. */
			readonly DisplayName: string;
			/** Tài liệu cho Ứng dụng canvas. */
			readonly Document_name: string;
			/** Sử dụng nội bộ. Thông tin ứng dụng được nhúng. */
			readonly EmbeddedApp: string;
			/** Mã định danh của mục thư viện. */
			readonly GalleryItemId: string;
			/** Phiên bản có ứng dụng bảng tùy biến được đưa vào. */
			readonly IntroducedVersion: string;
			/** Cho biết liệu ứng dụng bảng tùy biến có chứa tham chiếu CDS 1.0 hay không. */
			readonly IsCdsUpgraded: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Cho biết liệu ứng dụng bảng tùy biến có phải là ứng dụng nổi bật hay không. */
			readonly IsFeaturedApp: string;
			/** Cho biết liệu ứng dụng bảng tùy biến có phải là ứng dụng chính hay không. */
			readonly IsHeroApp: string;
			/** Cho biết liệu ứng dụng bảng tùy biến có bị ẩn khỏi danh sách người dùng hay không. */
			readonly IsHidden: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Biểu tượng lớn cho Ứng dụng canvas. */
			readonly LargeIcon_name: string;
			/** Ngày và giờ sửa đổi ứng dụng lần cuối. */
			readonly LastModifiedTime_UtcDateAndTime: string;
			/** Ngày và giờ phát hành ứng dụng lần cuối. */
			readonly LastPublishTime_UtcDateAndTime: string;
			/** Biểu tượng trung bình cho Ứng dụng canvas. */
			readonly MediumIcon_name: string;
			/** Phiên bản máy khách đã được dùng để làm tác giả cho ứng dụng. */
			readonly MinClientVersion: string;
			/** Tên CanvasApp */
			readonly Name: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu quy trình. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu quy trình. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu quy trình. */
			readonly OwningUser: string;
			/** Nhà phát hành ứng dụng. */
			readonly Publisher: string;
			/** Biểu tượng nhỏ cho Ứng dụng canvas. */
			readonly SmallIcon_name: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Giá trị cho biết liệu ứng dụng có sẵn sàng để sử dụng hay không. */
			readonly Status: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Thẻ siêu dữ liệu của ứng dụng. */
			readonly Tags: string;
			/** Biểu tượng Teams cho Ứng dụng canvas. */
			readonly TeamsIcon_name: string;
			/** ID ứng dụng canvas duy nhất toàn cầu */
			readonly UniqueCanvasAppId: string;
			readonly VersionNumber: string;
			/** Biểu tượng rộng cho Ứng dụng canvas. */
			readonly WideIcon_name: string;
		}
	}
}
declare namespace OptionSet {
	namespace CanvasApp {
		enum CanvasAppType {
			/** 1 */
			Thu_vien_thanh_phan_ung_dung,
			/** 2 */
			Trang_bang_tuy_bien_tuy_chinh,
			/** 0 */
			Ung_dung_Canvas_co_dien,
			/** 3 */
			Ung_dung_Hop_nhat
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