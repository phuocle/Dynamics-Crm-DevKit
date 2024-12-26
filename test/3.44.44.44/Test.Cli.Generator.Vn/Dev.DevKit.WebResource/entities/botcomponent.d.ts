//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** Màu chủ đề cho thành phần có thể tái sử dụng lại này */
			AccentColor: DevKit.Controls.String;
			/** Thể loại của thành phần copilot. */
			Category: DevKit.Controls.String;
			/** Loại phụ của thành phần copilot. */
			ComponentType: DevKit.Controls.OptionSet;
			/** Nội dung hoặc siêu dữ liệu của Thành phần Bot xác định cấu trúc và thuộc tính của nó. */
			Content: DevKit.Controls.String;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ tạo bản ghi. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Nội dung của Thành phần Bot ở định dạng OBI */
			Data: DevKit.Controls.String;
			/** Chứa văn bản có thể tìm kiếm cho thành phần bot */
			Description: DevKit.Controls.String;
			/** Liên kết để tìm hiểu thêm về thành phần này */
			HelpLink: DevKit.Controls.String;
			/** URL biểu tượng cho thành phần này */
			IconUrl: DevKit.Controls.String;
			/** Ngôn ngữ của thành phần copilot */
			Language: DevKit.Controls.OptionSet;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ sửa đổi bản ghi. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Tên thực thể tùy chỉnh. */
			name: DevKit.Controls.String;
			/** ID Chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho tuyển tập thành phần copilot được liên kết với thành phần copilot. */
			ParentBotComponentCollectionId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho thành phần copilot được liên kết với thành phần copilot. */
			ParentBotComponentId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho Bot được liên kết với Thành phần. */
			ParentBotId: DevKit.Controls.Lookup;
			/** Chính sách tái sử dụng cho thành phần copilot */
			ReusePolicy: DevKit.Controls.OptionSet;
			SchemaName: DevKit.Controls.String;
			/** Trạng thái của BotComponent */
			statecode: DevKit.Controls.OptionSet;
			/** Lý do dẫn đến trạng thái của BotComponent */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			botcomponent_parent_botcomponent: DevKit.Controls.NavigationItem,
			Comment_Artifact_BotComponent: DevKit.Controls.NavigationItem
		}
		interface Grid {
			ChildComponents: DevKit.Controls.Grid;
			RelatedBotComponents: DevKit.Controls.Grid;
			RelatedBots: DevKit.Controls.Grid;
			RelatedProcesses: DevKit.Controls.Grid;
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
		/** The Grid of form Thong_tin */
		Grid: DevKit.FormThong_tin.Grid;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class botcomponentApi {
		/**
		* DynamicsCrm.DevKit botcomponentApi
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
		/** Màu chủ đề cho thành phần có thể tái sử dụng lại này */
		AccentColor: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		botcomponentId: string;
		/** Thể loại của thành phần copilot. */
		Category: string;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.botcomponent.ComponentState;
		/** Loại phụ của thành phần copilot. */
		ComponentType: OptionSet.botcomponent.ComponentType;
		/** Nội dung hoặc siêu dữ liệu của Thành phần Bot xác định cấu trúc và thuộc tính của nó. */
		Content: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Nội dung của Thành phần Bot ở định dạng OBI */
		Data: string;
		/** Chứa văn bản có thể tìm kiếm cho thành phần bot */
		Description: string;
		/** Đây là thuộc tính loại tệp để lưu trữ Tệp đính kèm. */
		readonly FileData_name: string;
		/** Liên kết để tìm hiểu thêm về thành phần này */
		HelpLink: string;
		/** URL biểu tượng cho thành phần này */
		IconUrl: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Ngôn ngữ của thành phần copilot */
		Language: OptionSet.botcomponent.Language;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên thực thể tùy chỉnh. */
		name: string;
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
		/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất cho tuyển tập thành phần copilot được liên kết với thành phần copilot. */
		ParentBotComponentCollectionId: string;
		/** Mã định danh duy nhất cho thành phần copilot được liên kết với thành phần copilot. */
		ParentBotComponentId: string;
		/** Mã định danh duy nhất cho Bot được liên kết với Thành phần. */
		ParentBotId: string;
		/** Chính sách tái sử dụng cho thành phần copilot */
		ReusePolicy: OptionSet.botcomponent.ReusePolicy;
		SchemaName: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của BotComponent */
		statecode: OptionSet.botcomponent.statecode;
		/** Lý do dẫn đến trạng thái của BotComponent */
		statuscode: OptionSet.botcomponent.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Màu chủ đề cho thành phần có thể tái sử dụng lại này */
			readonly AccentColor: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly botcomponentId: string;
			/** Thể loại của thành phần copilot. */
			readonly Category: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Loại phụ của thành phần copilot. */
			readonly ComponentType: string;
			/** Nội dung hoặc siêu dữ liệu của Thành phần Bot xác định cấu trúc và thuộc tính của nó. */
			readonly Content: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Nội dung của Thành phần Bot ở định dạng OBI */
			readonly Data: string;
			/** Chứa văn bản có thể tìm kiếm cho thành phần bot */
			readonly Description: string;
			/** Đây là thuộc tính loại tệp để lưu trữ Tệp đính kèm. */
			readonly FileData_name: string;
			/** Liên kết để tìm hiểu thêm về thành phần này */
			readonly HelpLink: string;
			/** URL biểu tượng cho thành phần này */
			readonly IconUrl: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Ngôn ngữ của thành phần copilot */
			readonly Language: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên thực thể tùy chỉnh. */
			readonly name: string;
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
			/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất cho tuyển tập thành phần copilot được liên kết với thành phần copilot. */
			readonly ParentBotComponentCollectionId: string;
			/** Mã định danh duy nhất cho thành phần copilot được liên kết với thành phần copilot. */
			readonly ParentBotComponentId: string;
			/** Mã định danh duy nhất cho Bot được liên kết với Thành phần. */
			readonly ParentBotId: string;
			/** Chính sách tái sử dụng cho thành phần copilot */
			readonly ReusePolicy: string;
			readonly SchemaName: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của BotComponent */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của BotComponent */
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
	namespace botcomponent {
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
		enum ComponentType {
			/** 10 */
			Ban_dich_bot_V2,
			/** 12 */
			Bien_bot_V2,
			/** 2 */
			Bien_so_bot,
			/** 0 */
			Chu_de,
			/** 9 */
			Chu_de_V2,
			/** 14 */
			Dinh_kem_tep_bot,
			/** 15 */
			GPT_tuy_chinh,
			/** 6 */
			Hieu_ngon_ngu,
			/** 4 */
			Hop_thoai,
			/** 1 */
			Ky_nang,
			/** 13 */
			Ky_nang_V2,
			/** 8 */
			Luoc_do_hop_thoai,
			/** 16 */
			Nguon_kien_thuc,
			/** 7 */
			Tao_ngon_ngu,
			/** 3 */
			Thuc_the_bot,
			/** 11 */
			Thuc_the_bot_V2,
			/** 5 */
			Trinh_kich_hoat
		}
		enum Language {
			/** 1025 */
			Tieng_A_Rap,
			/** 1033 */
			Tieng_Anh,
			/** 3081 */
			Tieng_Anh_Australia,
			/** 2057 */
			Tieng_Anh_Vuong_quoc_Anh,
			/** 1045 */
			Tieng_Ba_Lan,
			/** 1046 */
			Tieng_Bo_Dao_Nha_Brazil,
			/** 1030 */
			Tieng_Dan_Mach,
			/** 1031 */
			Tieng_Duc,
			/** 1043 */
			Tieng_Ha_Lan,
			/** 1042 */
			Tieng_Han,
			/** 1081 */
			Tieng_Hindi,
			/** 1032 */
			Tieng_Hy_Lap,
			/** 1057 */
			Tieng_Indonesia,
			/** 1040 */
			Tieng_Italy,
			/** 1044 */
			Tieng_Na_Uy,
			/** 1049 */
			Tieng_Nga,
			/** 1041 */
			Tieng_Nhat,
			/** 1035 */
			Tieng_Phan_Lan,
			/** 1036 */
			Tieng_Phap,
			/** 3084 */
			Tieng_Phap_Canada,
			/** 1029 */
			Tieng_Sec,
			/** 1034 */
			Tieng_Tay_Ban_Nha,
			/** 21514 */
			Tieng_Tay_Ban_Nha_Hoa_Ky,
			/** 1054 */
			Tieng_Thai,
			/** 1055 */
			Tieng_Tho_Nhi_Ky,
			/** 1053 */
			Tieng_Thuy_Dien,
			/** 2052 */
			Tieng_Trung_Gian_the,
			/** 1028 */
			Tieng_Trung_Phon_the
		}
		enum ReusePolicy {
			/** 2 */
			Cong_khai,
			/** 0 */
			Khong_co,
			/** 1 */
			Rieng_tu
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