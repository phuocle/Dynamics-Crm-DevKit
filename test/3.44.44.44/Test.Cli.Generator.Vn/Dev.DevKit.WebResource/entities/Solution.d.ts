//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab__9129B06A_8446_77D8_2BD2_027C5006BE41_Sections {
			solutionmarketplacesection: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			description: DevKit.Controls.Section;
			solution_information: DevKit.Controls.Section;
		}
		interface tab__9129B06A_8446_77D8_2BD2_027C5006BE41 extends DevKit.Controls.ITab {
			Section: tab__9129B06A_8446_77D8_2BD2_027C5006BE41_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			_9129B06A_8446_77D8_2BD2_027C5006BE41: tab__9129B06A_8446_77D8_2BD2_027C5006BE41;
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Liên kết đến trang cấu hình tùy chọn cho giải pháp này. */
			ConfigurationPageId: DevKit.Controls.Lookup;
			/** Mô tả của giải pháp. */
			Description: DevKit.Controls.String;
			/** Tên hiển thị của người dùng cho giải pháp. */
			FriendlyName: DevKit.Controls.String;
			IFRAME_SolutionsMarketplace: DevKit.Controls.IFrame;
			/** Ngày và giờ cài đặt/nâng cấp giải pháp. */
			InstalledOn: DevKit.Controls.Date;
			/** Cho biết đã quản lý hay không được quản lý giải pháp. */
			IsManaged: DevKit.Controls.Boolean;
			/** Mã định danh duy nhất của nhà phát hành. */
			PublisherId: DevKit.Controls.Lookup;
			/** Tên duy nhất của giải pháp này */
			UniqueName: DevKit.Controls.String;
			/** Phiên bản giải pháp dùng để xác định một giải pháp dành cho việc nâng cấp và các hotfix. */
			Version: DevKit.Controls.String;
		}
		interface Navigation {
			solution_fieldsecurityprofile: DevKit.Controls.NavigationItem,
			solution_parent_solution: DevKit.Controls.NavigationItem,
			solution_role: DevKit.Controls.NavigationItem,
			solution_solutioncomponent: DevKit.Controls.NavigationItem,
			user_settings_preferred_solution: DevKit.Controls.NavigationItem
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
	class SolutionApi {
		/**
		* DynamicsCrm.DevKit SolutionApi
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
		/** Liên kết đến trang cấu hình tùy chọn cho giải pháp này. */
		ConfigurationPageId: string;
		/** Mã định danh duy nhất của người dùng đã tạo giải pháp. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo giải pháp. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo giải pháp. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả của giải pháp. */
		Description: string;
		/** ID trường cho URL blob được dùng để lưu trữ tệp. */
		readonly FileId_name: string;
		/** Tên hiển thị của người dùng cho giải pháp. */
		FriendlyName: string;
		/** Ngày và giờ cài đặt/nâng cấp giải pháp. */
		readonly InstalledOn_UtcDateOnly: Date;
		/** Thông tin về khả năng giải pháp được quản lý api. */
		readonly IsApiManaged: boolean;
		/** Cho biết giải pháp có phải là nội bộ hay không. */
		readonly IsInternal: boolean;
		/** Cho biết đã quản lý hay không được quản lý giải pháp. */
		readonly IsManaged: boolean;
		/** Cho biết có hiển thị giải pháp bên ngoài nền tảng không. */
		readonly IsVisible: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi giải pháp lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi giải pháp lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi giải pháp. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức liên kết với giải pháp. */
		readonly OrganizationId: string;
		/** Mã định danh duy nhất của giải pháp cha. Chỉ được phép là giá trị không rỗng nếu giải pháp này là bản vá. */
		readonly ParentSolutionId: string;
		readonly PinpointAssetId: string;
		/** Mã định danh của nhà phát hành giải pháp này trong Microsoft Pinpoint. */
		readonly PinpointPublisherId: number;
		/** Vùng bản địa mặc định của giải pháp trong Microsoft Pinpoint. */
		readonly PinpointSolutionDefaultLocale: string;
		/** Mã định danh của giải pháp trong Microsoft Pinpoint. */
		readonly PinpointSolutionId: number;
		/** Mã định danh duy nhất của nhà phát hành. */
		PublisherId: string;
		/** Mã định danh duy nhất của giải pháp. */
		SolutionId: string;
		/** Phiên bản của tổ chức nguồn gói giải pháp */
		SolutionPackageVersion: string;
		/** Loại Giải pháp */
		SolutionType: OptionSet.Solution.SolutionType;
		/** The template suffix of this solution */
		TemplateSuffix: string;
		/** thumbprint of the solution signature */
		Thumbprint: string;
		/** Tên duy nhất của giải pháp này */
		UniqueName: string;
		/** Ngày và giờ cập nhật giải pháp. */
		readonly UpdatedOn_UtcDateAndTime: Date;
		/** Contains component info for the solution upgrade operation */
		readonly UpgradeInfo: string;
		/** Phiên bản giải pháp dùng để xác định một giải pháp dành cho việc nâng cấp và các hotfix. */
		Version: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Liên kết đến trang cấu hình tùy chọn cho giải pháp này. */
			readonly ConfigurationPageId: string;
			/** Mã định danh duy nhất của người dùng đã tạo giải pháp. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo giải pháp. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo giải pháp. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả của giải pháp. */
			readonly Description: string;
			/** ID trường cho URL blob được dùng để lưu trữ tệp. */
			readonly FileId_name: string;
			/** Tên hiển thị của người dùng cho giải pháp. */
			readonly FriendlyName: string;
			/** Ngày và giờ cài đặt/nâng cấp giải pháp. */
			readonly InstalledOn_UtcDateOnly: string;
			/** Thông tin về khả năng giải pháp được quản lý api. */
			readonly IsApiManaged: string;
			/** Cho biết giải pháp có phải là nội bộ hay không. */
			readonly IsInternal: string;
			/** Cho biết đã quản lý hay không được quản lý giải pháp. */
			readonly IsManaged: string;
			/** Cho biết có hiển thị giải pháp bên ngoài nền tảng không. */
			readonly IsVisible: string;
			/** Mã định danh duy nhất của người dùng sửa đổi giải pháp lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi giải pháp lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi giải pháp. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức liên kết với giải pháp. */
			readonly OrganizationId: string;
			/** Mã định danh duy nhất của giải pháp cha. Chỉ được phép là giá trị không rỗng nếu giải pháp này là bản vá. */
			readonly ParentSolutionId: string;
			readonly PinpointAssetId: string;
			/** Mã định danh của nhà phát hành giải pháp này trong Microsoft Pinpoint. */
			readonly PinpointPublisherId: string;
			/** Vùng bản địa mặc định của giải pháp trong Microsoft Pinpoint. */
			readonly PinpointSolutionDefaultLocale: string;
			/** Mã định danh của giải pháp trong Microsoft Pinpoint. */
			readonly PinpointSolutionId: string;
			/** Mã định danh duy nhất của nhà phát hành. */
			readonly PublisherId: string;
			/** Mã định danh duy nhất của giải pháp. */
			readonly SolutionId: string;
			/** Phiên bản của tổ chức nguồn gói giải pháp */
			readonly SolutionPackageVersion: string;
			/** Loại Giải pháp */
			readonly SolutionType: string;
			/** The template suffix of this solution */
			readonly TemplateSuffix: string;
			/** thumbprint of the solution signature */
			readonly Thumbprint: string;
			/** Tên duy nhất của giải pháp này */
			readonly UniqueName: string;
			/** Ngày và giờ cập nhật giải pháp. */
			readonly UpdatedOn_UtcDateAndTime: string;
			/** Contains component info for the solution upgrade operation */
			readonly UpgradeInfo: string;
			/** Phiên bản giải pháp dùng để xác định một giải pháp dành cho việc nâng cấp và các hotfix. */
			readonly Version: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Solution {
		enum SolutionType {
			/** 1 */
			Anh_chup_nhanh,
			/** 0 */
			Khong_co,
			/** 2 */
			Noi_bo
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