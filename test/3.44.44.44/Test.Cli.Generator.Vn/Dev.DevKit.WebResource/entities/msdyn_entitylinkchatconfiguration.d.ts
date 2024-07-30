//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCau_hinh_cuoc_tro_chuyen_lien_ket_thuc_the {
		interface Tabs {
		}
		interface Body {
			/** Tên cấu hình nhóm liên kết. */
			msdyn_Name: DevKit.Controls.String;
			/** ID chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormCau_hinh_cuoc_tro_chuyen_lien_ket_thuc_the extends DevKit.IForm {
		/**
		* Cấu hình cuộc trò chuyện liên kết thực thể [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Cau_hinh_cuoc_tro_chuyen_lien_ket_thuc_the */
		Body: DevKit.FormCau_hinh_cuoc_tro_chuyen_lien_ket_thuc_the.Body;
		/** The Navigation of form Cau_hinh_cuoc_tro_chuyen_lien_ket_thuc_the */
		Navigation: DevKit.FormCau_hinh_cuoc_tro_chuyen_lien_ket_thuc_the.Navigation;
		/** The SidePanes of form Cau_hinh_cuoc_tro_chuyen_lien_ket_thuc_the */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_entitylinkchatconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_entitylinkchatconfigurationApi
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
		readonly ComponentState: OptionSet.msdyn_entitylinkchatconfiguration.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Số thứ tự của lượt nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** ID dạng xem của dạng xem ngữ cảnh đã chọn. */
		msdyn_ContextViewId: string;
		/** Giá trị của Bật thông báo giới thiệu do trí tuệ nhân tạo tạo */
		msdyn_EnableAiIntroductionMessage: boolean;
		/** Giá trị của gợi ý Bật trí tuệ nhân tạo */
		msdyn_EnableAiSuggestion: boolean;
		/** Bật cuộc trò chuyện tự động đặt tên */
		msdyn_EnableAutoNameChats: boolean;
		/** Bật tin nhắn khởi động */
		msdyn_EnableKickoffMessage: boolean;
		/** Bật gợi ý dựa trên logic */
		msdyn_EnableLogicBasedSuggestion: boolean;
		/** Mã định danh duy nhất của phiên bản thực thể */
		msdyn_entitylinkchatconfigurationId: string;
		/** Thiết lập thực thể cho cấu hình nhóm liên kết. */
		msdyn_EntityType: string;
		/** Danh sách thuộc tính mà chúng ta muốn bật cho nội dung cập nhật sự kiện của bot */
		msdyn_filteringAttributes: string;
		/** Để cho biết có bật nội dung cập nhật sự kiện của bot cho bản ghi này không */
		msdyn_isEnabledForBot: boolean;
		/** Tên cấu hình nhóm liên kết. */
		msdyn_Name: string;
		/** Giá trị của trình liên kết cuộc trò chuyện gần đây có thể hủy liên kết */
		msdyn_RecentChatLinkerCanUnlink: boolean;
		/** Giá trị của chủ sở hữu bản ghi có thể hủy liên kết */
		msdyn_RecordOwnerCanUnlink: boolean;
		/** Tên duy nhất cho thực thể. */
		msdyn_UniqueName: string;
		/** Giá trị của người dùng có thể tham gia trò chuyện */
		msdyn_UserCanJoinChat: boolean;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của cấu hình cuộc trò chuyện liên kết thực thể */
		statecode: OptionSet.msdyn_entitylinkchatconfiguration.statecode;
		/** Lý do dẫn đến trạng thái của cấu hình cuộc trò chuyện liên kết thực thể */
		statuscode: OptionSet.msdyn_entitylinkchatconfiguration.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Số thứ tự của lượt nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** ID dạng xem của dạng xem ngữ cảnh đã chọn. */
			readonly msdyn_ContextViewId: string;
			/** Giá trị của Bật thông báo giới thiệu do trí tuệ nhân tạo tạo */
			readonly msdyn_EnableAiIntroductionMessage: string;
			/** Giá trị của gợi ý Bật trí tuệ nhân tạo */
			readonly msdyn_EnableAiSuggestion: string;
			/** Bật cuộc trò chuyện tự động đặt tên */
			readonly msdyn_EnableAutoNameChats: string;
			/** Bật tin nhắn khởi động */
			readonly msdyn_EnableKickoffMessage: string;
			/** Bật gợi ý dựa trên logic */
			readonly msdyn_EnableLogicBasedSuggestion: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly msdyn_entitylinkchatconfigurationId: string;
			/** Thiết lập thực thể cho cấu hình nhóm liên kết. */
			readonly msdyn_EntityType: string;
			/** Danh sách thuộc tính mà chúng ta muốn bật cho nội dung cập nhật sự kiện của bot */
			readonly msdyn_filteringAttributes: string;
			/** Để cho biết có bật nội dung cập nhật sự kiện của bot cho bản ghi này không */
			readonly msdyn_isEnabledForBot: string;
			/** Tên cấu hình nhóm liên kết. */
			readonly msdyn_Name: string;
			/** Giá trị của trình liên kết cuộc trò chuyện gần đây có thể hủy liên kết */
			readonly msdyn_RecentChatLinkerCanUnlink: string;
			/** Giá trị của chủ sở hữu bản ghi có thể hủy liên kết */
			readonly msdyn_RecordOwnerCanUnlink: string;
			/** Tên duy nhất cho thực thể. */
			readonly msdyn_UniqueName: string;
			/** Giá trị của người dùng có thể tham gia trò chuyện */
			readonly msdyn_UserCanJoinChat: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của cấu hình cuộc trò chuyện liên kết thực thể */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của cấu hình cuộc trò chuyện liên kết thực thể */
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
	namespace msdyn_entitylinkchatconfiguration {
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