//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SystemFormApi {
		/**
		* DynamicsCrm.DevKit SystemFormApi
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
		/** Mã định danh duy nhất của biểu mẫu mẹ. */
		AncestorFormId: string;
		/** Thông tin chỉ định khả năng hệ thống có thể xóa thành phần này. */
		CanBeDeleted: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.SystemForm.ComponentState;
		/** Mô tả biểu mẫu hoặc bảng thông tin. */
		Description: string;
		/** Chỉ định trạng thái của biểu mẫu. */
		FormActivationState: OptionSet.SystemForm.FormActivationState;
		/** Mã định danh duy nhất của biểu mẫu loại bản ghi. */
		FormId: string;
		/** Mã định danh duy nhất của biểu mẫu được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook. */
		readonly FormIdUnique: string;
		/** Trình bày Json của bố cục biểu mẫu. */
		FormJson: string;
		/** Cho biết biểu mẫu này có hay không nằm trong bố cục UI đã cập nhật trong Microsoft Dynamics CRM 2015 hoặc Bản cập nhật Microsoft Dynamics CRM Online 2015. */
		FormPresentation: OptionSet.SystemForm.FormPresentation;
		/** Trình bày XML của bố cục biểu mẫu. */
		FormXml: string;
		/** chênh lệch formXml như trong giải pháp được quản lý. chỉ sử dụng nội bộ */
		readonly FormXmlManaged: string;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		/** Cho biết biểu mẫu này có được hợp nhất hay không với bố cục UI đã cập nhật trong Microsoft Dynamics CRM 2015 hoặc Bản cập nhật Microsoft Dynamics CRM Online 2015. */
		IsAIRMerged: boolean;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Thông tin chỉ định khả năng biểu mẫu hoặc bảng thông tin là mặc định hệ thống. */
		IsDefault: boolean;
		/** Thông tin chỉ định khả năng sẽ bật bảng thông tin cho máy tính để bàn. */
		IsDesktopEnabled: boolean;
		readonly IsManaged: boolean;
		/** Thông tin chỉ định khả năng sẽ bật bảng thông tin cho máy tính bảng. */
		IsTabletEnabled: boolean;
		/** Tên của biểu mẫu. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		readonly PublishedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Loại biểu mẫu, ví dụ: Bảng thông tin hoặc Bản xem trước. */
		Type: OptionSet.SystemForm.Type;
		/** Tên Duy nhất */
		UniqueName: string;
		/** Chỉ sử dụng nội bộ. */
		Version: number;
		/** Cho biết phiên bản của các tùy chỉnh sẽ được đồng bộ với ứng dụng khách Microsoft Dynamics 365 dành cho Outlook. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của biểu mẫu mẹ. */
			readonly AncestorFormId: string;
			/** Thông tin chỉ định khả năng hệ thống có thể xóa thành phần này. */
			readonly CanBeDeleted: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mô tả biểu mẫu hoặc bảng thông tin. */
			readonly Description: string;
			/** Chỉ định trạng thái của biểu mẫu. */
			readonly FormActivationState: string;
			/** Mã định danh duy nhất của biểu mẫu loại bản ghi. */
			readonly FormId: string;
			/** Mã định danh duy nhất của biểu mẫu được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook. */
			readonly FormIdUnique: string;
			/** Trình bày Json của bố cục biểu mẫu. */
			readonly FormJson: string;
			/** Cho biết biểu mẫu này có hay không nằm trong bố cục UI đã cập nhật trong Microsoft Dynamics CRM 2015 hoặc Bản cập nhật Microsoft Dynamics CRM Online 2015. */
			readonly FormPresentation: string;
			/** Trình bày XML của bố cục biểu mẫu. */
			readonly FormXml: string;
			/** chênh lệch formXml như trong giải pháp được quản lý. chỉ sử dụng nội bộ */
			readonly FormXmlManaged: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Cho biết biểu mẫu này có được hợp nhất hay không với bố cục UI đã cập nhật trong Microsoft Dynamics CRM 2015 hoặc Bản cập nhật Microsoft Dynamics CRM Online 2015. */
			readonly IsAIRMerged: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Thông tin chỉ định khả năng biểu mẫu hoặc bảng thông tin là mặc định hệ thống. */
			readonly IsDefault: string;
			/** Thông tin chỉ định khả năng sẽ bật bảng thông tin cho máy tính để bàn. */
			readonly IsDesktopEnabled: string;
			readonly IsManaged: string;
			/** Thông tin chỉ định khả năng sẽ bật bảng thông tin cho máy tính bảng. */
			readonly IsTabletEnabled: string;
			/** Tên của biểu mẫu. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			readonly PublishedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Loại biểu mẫu, ví dụ: Bảng thông tin hoặc Bản xem trước. */
			readonly Type: string;
			/** Tên Duy nhất */
			readonly UniqueName: string;
			/** Chỉ sử dụng nội bộ. */
			readonly Version: string;
			/** Cho biết phiên bản của các tùy chỉnh sẽ được đồng bộ với ứng dụng khách Microsoft Dynamics 365 dành cho Outlook. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SystemForm {
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
		enum FormActivationState {
			/** 1 */
			Hien_hoat,
			/** 0 */
			Khong_hoat_dong
		}
		enum FormPresentation {
			/** 1 */
			AirForm,
			/** 0 */
			ClassicForm,
			/** 2 */
			ConvertedICForm
		}
		enum ObjectTypeCode {
		}
		enum Type {
			/** 1 */
			AppointmentBook,
			/** 102 */
			AppointmentBookBackup,
			/** 4 */
			Ban_xem_truoc,
			/** 0 */
			Bang_thong_tin,
			/** 103 */
			Bang_thong_tin_Power_BI,
			/** 13 */
			Bang_thong_tin_theo_ngu_canh,
			/** 9 */
			Bieu_mau_dong_tac_vu,
			/** 6 */
			Bieu_mau_xem_nhanh,
			/** 2 */
			Chinh,
			/** 12 */
			Chinh_Trai_nghiem_tuong_tac,
			/** 5 */
			Di_dong_Nhanh,
			/** 8 */
			Hop_thoai,
			/** 10 */
			InteractionCentricDashboard,
			/** 100 */
			Khac,
			/** 101 */
			MainBackup,
			/** 3 */
			MiniCampaignBO,
			/** 7 */
			Tao_nhanh,
			/** 11 */
			The
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