//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {

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
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class SharePointDocumentApi {
		/**
		* DynamicsCrm.DevKit SharePointDocumentApi
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
		/** Nhập URL đặt tài liệu SharePoint. */
		readonly AbsoluteUrl: string;
		/** Tên của người đã tạo ứng dụng. */
		readonly AppCreatedBy: string;
		/** Tên của người sửa đổi ứng dụng lần cuối. */
		readonly AppModifiedBy: string;
		/** Tên của tác giả tài liệu SharePoint. */
		Author: string;
		/** Cho biết bơn vị kinh doanh có liên kết với bản ghi. */
		BusinessUnitId: string;
		/** Cho biết kiểm xuất tài liệu SharePoint cho ai. */
		readonly CheckedOutTo: string;
		/** Nhập nhận xét về tài liệu đang kiểm nhập. */
		readonly CheckInComment: string;
		/** Hiện số lượng thư mục con. */
		readonly ChildFolderCount: number;
		/** Hiện số lượng mục con. */
		readonly ChildItemCount: number;
		/** Loại nội dung của tài liệu. */
		readonly ContentType: string;
		/** Hiện mã định danh duy nhất của loại nội dung. */
		readonly ContentTypeId: number;
		/** URL mục nguồn SharePoint */
		readonly CopySource: string;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của tài liệu SharePoint trong thư viện tài liệu. */
		readonly DocumentId: number;
		/** Kiểu vị trí của vị trí tài liệu SharePoint. */
		readonly DocumentLocationType: OptionSet.SharePointDocument.DocumentLocationType;
		/** Url chỉnh sửa của biểu mẫu SharePoint */
		readonly Edit: string;
		/** Hiện URL chỉnh sửa của tài liệu SharePoint. */
		readonly EditUrl: string;
		/** Hiện tỷ giá giữa loại tiền đã liên kết với bản ghi tài liệu SharePoint và loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Hiện kích thước tệp. */
		readonly FileSize: number;
		/** Hiện loại tệp. */
		readonly FileType: string;
		/** Hiện tên đầy đủ của tài liệu SharePoint. */
		readonly FullName: string;
		/** Lưu trữ tên lớp biểu tượng của tài liệu SharePoint. */
		readonly IconClassName: string;
		/** Cho biết khả năng kiểm xuất của tệp. */
		readonly IsCheckedOut: boolean;
		/** Cho biết tệp có phải là thư mục không. */
		readonly IsFolder: boolean;
		/** Cho biết có tìm nạp dữ liệu đệ quy từ vị trí thư mục đã cho hay không. */
		readonly IsRecursiveFetch: boolean;
		/** Mã định danh duy nhất của vị trí tài liệu đã liên kết. */
		readonly LocationId: string;
		/** Tên của vị trí tài liệu đã liên kết. */
		readonly LocationName: string;
		/** Cho biết ngày và giờ cập nhật tài liệu SharePoint lần cuối cùng. Hệ thống hiển thị ngày giờ theo múi giờ đã chọn trong tùy chọn Microsoft Dynamics 365. */
		readonly Modified_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người đã sửa bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức liên kết với tài liệu SharePoint. */
		readonly OrganizationId: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Hiện URL đọc của tài liệu SharePoint. */
		readonly ReadUrl: string;
		/** Chọn bản ghi mẹ có liên kết với bản ghi tài liệu SharePoint. */
		regardingobjectid_account: string;
		/** Chọn bản ghi mẹ có liên kết với bản ghi tài liệu SharePoint. */
		regardingobjectid_adx_portalcomment: string;
		/** Chọn bản ghi mẹ có liên kết với bản ghi tài liệu SharePoint. */
		regardingobjectid_kbarticle: string;
		/** Chọn bản ghi mẹ có liên kết với bản ghi tài liệu SharePoint. */
		regardingobjectid_knowledgearticle: string;
		/** Chọn bản ghi mẹ có liên kết với bản ghi tài liệu SharePoint. */
		regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Vị trí tương đối của tài liệu SharePoint */
		readonly RelativeLocation: string;
		/** Hiển thị loại dịch vụ của trang web SharePoint. */
		ServiceType: OptionSet.SharePointDocument.ServiceType;
		/** Hiện ngày giờ tạo bản ghi tài liệu SharePoint. */
		readonly SharePointCreatedOn_UtcDateAndTime: Date;
		/** Hiện mã định danh duy nhất của bản ghi tài liệu SharePoint. */
		SharePointDocumentId: string;
		/** Cho biết người cập nhật bản ghi tài liệu lần cuối. */
		readonly SharePointModifiedBy: string;
		/** Cho biết tiêu đề hoặc tên mô tả tài liệu SharePoint. */
		readonly Title: string;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		readonly TransactionCurrencyId: string;
		/** Hiện phiên bản tài liệu SharePoint */
		readonly Version: string;
		readonly FormattedValue: {
			/** Nhập URL đặt tài liệu SharePoint. */
			readonly AbsoluteUrl: string;
			/** Tên của người đã tạo ứng dụng. */
			readonly AppCreatedBy: string;
			/** Tên của người sửa đổi ứng dụng lần cuối. */
			readonly AppModifiedBy: string;
			/** Tên của tác giả tài liệu SharePoint. */
			readonly Author: string;
			/** Cho biết bơn vị kinh doanh có liên kết với bản ghi. */
			readonly BusinessUnitId: string;
			/** Cho biết kiểm xuất tài liệu SharePoint cho ai. */
			readonly CheckedOutTo: string;
			/** Nhập nhận xét về tài liệu đang kiểm nhập. */
			readonly CheckInComment: string;
			/** Hiện số lượng thư mục con. */
			readonly ChildFolderCount: string;
			/** Hiện số lượng mục con. */
			readonly ChildItemCount: string;
			/** Loại nội dung của tài liệu. */
			readonly ContentType: string;
			/** Hiện mã định danh duy nhất của loại nội dung. */
			readonly ContentTypeId: string;
			/** URL mục nguồn SharePoint */
			readonly CopySource: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của tài liệu SharePoint trong thư viện tài liệu. */
			readonly DocumentId: string;
			/** Kiểu vị trí của vị trí tài liệu SharePoint. */
			readonly DocumentLocationType: string;
			/** Url chỉnh sửa của biểu mẫu SharePoint */
			readonly Edit: string;
			/** Hiện URL chỉnh sửa của tài liệu SharePoint. */
			readonly EditUrl: string;
			/** Hiện tỷ giá giữa loại tiền đã liên kết với bản ghi tài liệu SharePoint và loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Hiện kích thước tệp. */
			readonly FileSize: string;
			/** Hiện loại tệp. */
			readonly FileType: string;
			/** Hiện tên đầy đủ của tài liệu SharePoint. */
			readonly FullName: string;
			/** Lưu trữ tên lớp biểu tượng của tài liệu SharePoint. */
			readonly IconClassName: string;
			/** Cho biết khả năng kiểm xuất của tệp. */
			readonly IsCheckedOut: string;
			/** Cho biết tệp có phải là thư mục không. */
			readonly IsFolder: string;
			/** Cho biết có tìm nạp dữ liệu đệ quy từ vị trí thư mục đã cho hay không. */
			readonly IsRecursiveFetch: string;
			/** Mã định danh duy nhất của vị trí tài liệu đã liên kết. */
			readonly LocationId: string;
			/** Tên của vị trí tài liệu đã liên kết. */
			readonly LocationName: string;
			/** Cho biết ngày và giờ cập nhật tài liệu SharePoint lần cuối cùng. Hệ thống hiển thị ngày giờ theo múi giờ đã chọn trong tùy chọn Microsoft Dynamics 365. */
			readonly Modified_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người đã sửa bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức liên kết với tài liệu SharePoint. */
			readonly OrganizationId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Hiện URL đọc của tài liệu SharePoint. */
			readonly ReadUrl: string;
			/** Chọn bản ghi mẹ có liên kết với bản ghi tài liệu SharePoint. */
			readonly regardingobjectid_account: string;
			/** Chọn bản ghi mẹ có liên kết với bản ghi tài liệu SharePoint. */
			readonly regardingobjectid_adx_portalcomment: string;
			/** Chọn bản ghi mẹ có liên kết với bản ghi tài liệu SharePoint. */
			readonly regardingobjectid_kbarticle: string;
			/** Chọn bản ghi mẹ có liên kết với bản ghi tài liệu SharePoint. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Chọn bản ghi mẹ có liên kết với bản ghi tài liệu SharePoint. */
			readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
			/** Vị trí tương đối của tài liệu SharePoint */
			readonly RelativeLocation: string;
			/** Hiển thị loại dịch vụ của trang web SharePoint. */
			readonly ServiceType: string;
			/** Hiện ngày giờ tạo bản ghi tài liệu SharePoint. */
			readonly SharePointCreatedOn_UtcDateAndTime: string;
			/** Hiện mã định danh duy nhất của bản ghi tài liệu SharePoint. */
			readonly SharePointDocumentId: string;
			/** Cho biết người cập nhật bản ghi tài liệu lần cuối. */
			readonly SharePointModifiedBy: string;
			/** Cho biết tiêu đề hoặc tên mô tả tài liệu SharePoint. */
			readonly Title: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Hiện phiên bản tài liệu SharePoint */
			readonly Version: string;
		}
	}
}
declare namespace OptionSet {
	namespace SharePointDocument {
		enum DocumentLocationType {
			/** 1 */
			Danh_rieng_cho_Tich_hop_OneNote,
			/** 0 */
			Tong_quat
		}
		enum RegardingObjectTypeCode {
		}
		enum ServiceType {
			/** 3 */
			Cac_nhom_MS,
			/** 2 */
			Duoc_chia_se_voi_toi,
			/** 1 */
			OneDrive,
			/** 0 */
			SharePoint
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