//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** Xác định người dùng nào có thể tương tác với bot. */
			accesscontrolpolicy: DevKit.Controls.OptionSet;
			/** Lưu trữ thông tin cùng với dữ liệu kê khai ứng dụng, chẳng hạn như thông tin ứng dụng Teams. */
			applicationmanifestinformation: DevKit.Controls.String;
			/** Lưu trữ thông tin cho cấu hình xác thực. */
			authenticationconfiguration: DevKit.Controls.String;
			/** Xác định cách thức xác thực bot với người dùng. */
			authenticationmode: DevKit.Controls.OptionSet;
			/** Xác định sẽ kích hoạt xác thực bot tại điểm nào. Có thể thực thi bảo mật tại một điểm nhập của bot, nhờ đó không cần phải dùng đến các nút xác thực rõ ràng trong dòng quy trình đối thoại. */
			authenticationtrigger: DevKit.Controls.OptionSet;
			/** Chứa danh sách được phân tách bằng dấu phẩy bao gồm lên đến 20 ID nhóm Azure Active Directory được phép tương tác với bot. Trường này bị bỏ qua nến Chính sách kiểm soát truy cập không được đặt là Thành viên nhóm. */
			authorizedsecuritygroupids: DevKit.Controls.String;
			/** Dùng để lưu trữ nội dung dữ liệu cấu hình bot. */
			Configuration: DevKit.Controls.String;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ tạo bản ghi. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Dùng để xác định trực quan bot của bạn trong các kênh và dịch vụ. Được thể hiện trong chuỗi mã hóa base64. Phải ở định dạng PNG và có kích cỡ không quá 30K. Giá trị này có thể thay đổi bất cứ lúc nào. */
			iconbase64: DevKit.Controls.String;
			/** Mã ngôn ngữ (LCID) của Copilot này. */
			Language: DevKit.Controls.OptionSet;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ sửa đổi bản ghi. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Tên hiển thị của Copilot. */
			name: DevKit.Controls.String;
			/** ID Chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất cho tham chiếu kết nối được liên kết với Copilot. */
			ProviderConnectionReferenceId: DevKit.Controls.Lookup;
			/** Mã định danh duy nhất của người dùng đã phát hành bot lần cuối. */
			publishedby: DevKit.Controls.Lookup;
			/** Ngày và giờ phát hành Copilot lần cuối */
			publishedon: DevKit.Controls.DateTime;
			RuntimeProvider: DevKit.Controls.OptionSet;
			/** Tên duy nhất để nhận dạng Copilot. */
			SchemaName: DevKit.Controls.String;
			/** Trạng thái của Copilot */
			statecode: DevKit.Controls.OptionSet;
			/** Lý do dẫn đến trạng thái của Copilot */
			statuscode: DevKit.Controls.OptionSet;
			/** Danh sách các ngôn ngữ bot này hỗ trợ */
			SupportedLanguages: DevKit.Controls.MultiOptionSet;
			/** Dùng để lưu thông tin về các hoạt động đồng bộ hóa của bot */
			SynchronizationStatus: DevKit.Controls.String;
			/** Dùng để xác định mẫu và phiên bản được sử dụng cho nội dung mặc định của bot */
			Template: DevKit.Controls.String;
		}
		interface Navigation {
			bot_conversationtranscript: DevKit.Controls.NavigationItem,
			botcomponent_parent_bot: DevKit.Controls.NavigationItem,
			Comment_Artifact_Bot: DevKit.Controls.NavigationItem
		}
		interface Grid {
			BotComponents: DevKit.Controls.Grid;
			ComponentCollections: DevKit.Controls.Grid;
			ConversationTranscripts: DevKit.Controls.Grid;
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
	class botApi {
		/**
		* DynamicsCrm.DevKit botApi
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
		/** Xác định người dùng nào có thể tương tác với bot. */
		accesscontrolpolicy: OptionSet.bot.accesscontrolpolicy;
		/** Lưu trữ thông tin cùng với dữ liệu kê khai ứng dụng, chẳng hạn như thông tin ứng dụng Teams. */
		applicationmanifestinformation: string;
		/** Lưu trữ thông tin cho cấu hình xác thực. */
		authenticationconfiguration: string;
		/** Xác định cách thức xác thực bot với người dùng. */
		authenticationmode: OptionSet.bot.authenticationmode;
		/** Xác định sẽ kích hoạt xác thực bot tại điểm nào. Có thể thực thi bảo mật tại một điểm nhập của bot, nhờ đó không cần phải dùng đến các nút xác thực rõ ràng trong dòng quy trình đối thoại. */
		authenticationtrigger: OptionSet.bot.authenticationtrigger;
		/** Chứa danh sách được phân tách bằng dấu phẩy bao gồm lên đến 20 ID nhóm Azure Active Directory được phép tương tác với bot. Trường này bị bỏ qua nến Chính sách kiểm soát truy cập không được đặt là Thành viên nhóm. */
		authorizedsecuritygroupids: string;
		/** Mã định danh duy nhất của Copilot. */
		botId: string;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.bot.ComponentState;
		/** Dùng để lưu trữ nội dung dữ liệu cấu hình bot. */
		Configuration: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Dùng để xác định trực quan bot của bạn trong các kênh và dịch vụ. Được thể hiện trong chuỗi mã hóa base64. Phải ở định dạng PNG và có kích cỡ không quá 30K. Giá trị này có thể thay đổi bất cứ lúc nào. */
		iconbase64: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Mã ngôn ngữ (LCID) của Copilot này. */
		Language: OptionSet.bot.Language;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên hiển thị của Copilot. */
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
		/** Mã định danh duy nhất cho tham chiếu kết nối được liên kết với Copilot. */
		ProviderConnectionReferenceId: string;
		/** Mã định danh duy nhất của người dùng đã phát hành bot lần cuối. */
		publishedby: string;
		/** Ngày và giờ phát hành Copilot lần cuối */
		publishedon_UtcDateAndTime: Date;
		RuntimeProvider: OptionSet.bot.RuntimeProvider;
		/** Tên duy nhất để nhận dạng Copilot. */
		SchemaName: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của Copilot */
		statecode: OptionSet.bot.statecode;
		/** Lý do dẫn đến trạng thái của Copilot */
		statuscode: OptionSet.bot.statuscode;
		/** Danh sách các ngôn ngữ bot này hỗ trợ */
		SupportedLanguages: Array<OptionSet.bot.SupportedLanguages>;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Dùng để lưu thông tin về các hoạt động đồng bộ hóa của bot */
		SynchronizationStatus: string;
		/** Dùng để xác định mẫu và phiên bản được sử dụng cho nội dung mặc định của bot */
		Template: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Xác định người dùng nào có thể tương tác với bot. */
			readonly accesscontrolpolicy: string;
			/** Lưu trữ thông tin cùng với dữ liệu kê khai ứng dụng, chẳng hạn như thông tin ứng dụng Teams. */
			readonly applicationmanifestinformation: string;
			/** Lưu trữ thông tin cho cấu hình xác thực. */
			readonly authenticationconfiguration: string;
			/** Xác định cách thức xác thực bot với người dùng. */
			readonly authenticationmode: string;
			/** Xác định sẽ kích hoạt xác thực bot tại điểm nào. Có thể thực thi bảo mật tại một điểm nhập của bot, nhờ đó không cần phải dùng đến các nút xác thực rõ ràng trong dòng quy trình đối thoại. */
			readonly authenticationtrigger: string;
			/** Chứa danh sách được phân tách bằng dấu phẩy bao gồm lên đến 20 ID nhóm Azure Active Directory được phép tương tác với bot. Trường này bị bỏ qua nến Chính sách kiểm soát truy cập không được đặt là Thành viên nhóm. */
			readonly authorizedsecuritygroupids: string;
			/** Mã định danh duy nhất của Copilot. */
			readonly botId: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Dùng để lưu trữ nội dung dữ liệu cấu hình bot. */
			readonly Configuration: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Dùng để xác định trực quan bot của bạn trong các kênh và dịch vụ. Được thể hiện trong chuỗi mã hóa base64. Phải ở định dạng PNG và có kích cỡ không quá 30K. Giá trị này có thể thay đổi bất cứ lúc nào. */
			readonly iconbase64: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Mã ngôn ngữ (LCID) của Copilot này. */
			readonly Language: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên hiển thị của Copilot. */
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
			/** Mã định danh duy nhất cho tham chiếu kết nối được liên kết với Copilot. */
			readonly ProviderConnectionReferenceId: string;
			/** Mã định danh duy nhất của người dùng đã phát hành bot lần cuối. */
			readonly publishedby: string;
			/** Ngày và giờ phát hành Copilot lần cuối */
			readonly publishedon_UtcDateAndTime: string;
			readonly RuntimeProvider: string;
			/** Tên duy nhất để nhận dạng Copilot. */
			readonly SchemaName: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của Copilot */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Copilot */
			readonly statuscode: string;
			/** Danh sách các ngôn ngữ bot này hỗ trợ */
			readonly SupportedLanguages: Array<string>;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Dùng để lưu thông tin về các hoạt động đồng bộ hóa của bot */
			readonly SynchronizationStatus: string;
			/** Dùng để xác định mẫu và phiên bản được sử dụng cho nội dung mặc định của bot */
			readonly Template: string;
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
	namespace bot {
		enum accesscontrolpolicy {
			/** 0 */
			Bat_ky,
			/** 2 */
			Thanh_vien_nhom,
			/** 1 */
			Trinh_doc_Copilot
		}
		enum authenticationmode {
			/** 3 */
			Azure_Active_Directory_tuy_chinh,
			/** 0 */
			Chua_duoc_chi_dinh,
			/** 2 */
			Duoc_tich_hop,
			/** 1 */
			Khong_co,
			/** 4 */
			OAuth2_chung
		}
		enum authenticationtrigger {
			/** 0 */
			Khi_can_thiet,
			/** 1 */
			Luon_luon
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
		enum RuntimeProvider {
			/** 0 */
			Power_Virtual_Agents,
			/** 1 */
			Vo_Nuance_Mix
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 3 */
			Cung_cap,
			/** 1 */
			Da_cung_cap,
			/** 2 */
			Da_huy_cung_ung,
			/** 4 */
			Khong_cung_cap_duoc,
			/** 5 */
			Thieu_giay_phep
		}
		enum SupportedLanguages {
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