//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormQueueItem_Information {
		interface tab_general_Sections {
			information: DevKit.Controls.Section;
			Time_Information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Hiện ngày gán bản ghi cho hàng đợi. */
			EnteredOn: DevKit.Controls.DateTime;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Chọn hàng đợi có mục gán cho nó. */
			QueueId: DevKit.Controls.Lookup;
			/** Cho biết người đang làm việc trên mục trong hàng đợi. */
			WorkerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormQueueItem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form QueueItem_Information */
		Body: DevKit.FormQueueItem_Information.Body;
		/** The Navigation of form QueueItem_Information */
		Navigation: DevKit.FormQueueItem_Information.Navigation;
		/** The SidePanes of form QueueItem_Information */
		SidePanes: DevKit.SidePanes;
	}
	class QueueItemApi {
		/**
		* DynamicsCrm.DevKit QueueItemApi
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
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Hiện ngày gán bản ghi cho hàng đợi. */
		readonly EnteredOn_UtcDateAndTime: Date;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa queueitem lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_activitypointer: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_adx_inviteredemption: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_adx_portalcomment: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_appointment: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_chat: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_email: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_fax: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_knowledgearticle: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_letter: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_msdyn_knowledgearticletemplate: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_phonecall: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_recurringappointmentmaster: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_socialactivity: string;
		/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
		objectid_task: string;
		/** Chọn loại mục trong hàng đợi, như loại hoạt động, trường hợp hoặc cuộc hẹn. */
		readonly ObjectTypeCode: OptionSet.QueueItem.ObjectTypeCode;
		/** Mã định danh duy nhất của tổ chức có liên kết với mục trong hàng đợi. */
		readonly OrganizationId: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu mục trong hàng đợi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu mục trong hàng đợi. */
		readonly OwningUser: string;
		/** Mức ưu tiên của mục trong hàng đợi. */
		Priority: number;
		/** Chọn hàng đợi có mục gán cho nó. */
		QueueId: string;
		/** Mã định danh duy nhất của hạng mục trong hàng đợi. */
		QueueItemId: string;
		/** Người gửi đã tạo mục trong hàng đợi. */
		Sender: string;
		/** Trạng thái của mục trong hàng đợi. */
		State: number;
		/** Cho biết bản ghi hàng đợi là hiện hoạt hay không hiện hoạt. Bản ghi hàng đợi không hiện hoạt có trạng thái chỉ đọc và bạn chỉ có thể sửa bản ghi khi kích hoạt lại chúng. */
		StateCode: OptionSet.QueueItem.StateCode;
		/** Lý do cho trạng thái của mục trong hàng đợi. */
		Status: number;
		/** Chọn trạng thái của mục. */
		StatusCode: OptionSet.QueueItem.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Hiển thị tiêu đề hoặc tên mô tả bản ghi hàng đợi. Giá trị này được sao chép từ bản ghi được gán cho hàng đợi. */
		Title: string;
		/** Người nhận nằm trong dòng Đến của thư dành cho mục trong hàng đợi email. */
		ToRecipients: string;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của mục trong hàng đợi. */
		readonly VersionNumber: number;
		/** Cho biết người đang làm việc trên mục trong hàng đợi. */
		workerid_systemuser: string;
		/** Cho biết người đang làm việc trên mục trong hàng đợi. */
		workerid_team: string;
		/** Hiện ngày giờ gán mục trong hàng đợi cho người dùng lần cuối. */
		readonly WorkerIdModifiedOn_UtcDateOnly: Date;
		readonly FormattedValue: {
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Hiện ngày gán bản ghi cho hàng đợi. */
			readonly EnteredOn_UtcDateAndTime: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa queueitem lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_activitypointer: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_adx_inviteredemption: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_adx_portalcomment: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_appointment: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_chat: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_email: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_fax: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_knowledgearticle: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_letter: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_msdyn_knowledgearticletemplate: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_phonecall: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_recurringappointmentmaster: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_socialactivity: string;
			/** Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi. */
			readonly objectid_task: string;
			/** Chọn loại mục trong hàng đợi, như loại hoạt động, trường hợp hoặc cuộc hẹn. */
			readonly ObjectTypeCode: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với mục trong hàng đợi. */
			readonly OrganizationId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu mục trong hàng đợi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu mục trong hàng đợi. */
			readonly OwningUser: string;
			/** Mức ưu tiên của mục trong hàng đợi. */
			readonly Priority: string;
			/** Chọn hàng đợi có mục gán cho nó. */
			readonly QueueId: string;
			/** Mã định danh duy nhất của hạng mục trong hàng đợi. */
			readonly QueueItemId: string;
			/** Người gửi đã tạo mục trong hàng đợi. */
			readonly Sender: string;
			/** Trạng thái của mục trong hàng đợi. */
			readonly State: string;
			/** Cho biết bản ghi hàng đợi là hiện hoạt hay không hiện hoạt. Bản ghi hàng đợi không hiện hoạt có trạng thái chỉ đọc và bạn chỉ có thể sửa bản ghi khi kích hoạt lại chúng. */
			readonly StateCode: string;
			/** Lý do cho trạng thái của mục trong hàng đợi. */
			readonly Status: string;
			/** Chọn trạng thái của mục. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Hiển thị tiêu đề hoặc tên mô tả bản ghi hàng đợi. Giá trị này được sao chép từ bản ghi được gán cho hàng đợi. */
			readonly Title: string;
			/** Người nhận nằm trong dòng Đến của thư dành cho mục trong hàng đợi email. */
			readonly ToRecipients: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của mục trong hàng đợi. */
			readonly VersionNumber: string;
			/** Cho biết người đang làm việc trên mục trong hàng đợi. */
			readonly workerid_systemuser: string;
			/** Cho biết người đang làm việc trên mục trong hàng đợi. */
			readonly workerid_team: string;
			/** Hiện ngày giờ gán mục trong hàng đợi cho người dùng lần cuối. */
			readonly WorkerIdModifiedOn_UtcDateOnly: string;
		}
	}
}
declare namespace OptionSet {
	namespace QueueItem {
		enum ObjectIdTypeCode {
		}
		enum ObjectTypeCode {
			/** 9953 */
			Bai_viet_trong_co_so_kien_thuc,
			/** 4210 */
			Cuoc_goi_dien_thoai,
			/** 4201 */
			Cuoc_hen,
			/** 4251 */
			Cuoc_hen_lap_lai,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 4200 */
			Hoat_dong,
			/** 4216 */
			Hoat_dong_mang_xa_hoi,
			/** 10201 */
			Knowledge_Article_Template,
			/** 10311 */
			Nhan_xet_Cong_thong_tin,
			/** 4212 */
			Nhiem_vu,
			/** 10310 */
			Quy_doi_Loi_moi,
			/** 4207 */
			Thu_tin,
			/** 10185 */
			Tro_chuyen_qua_Teams
		}
		enum StateCode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum StatusCode {
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
		}
		enum WorkerIdType {
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