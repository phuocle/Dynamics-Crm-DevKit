//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SiteMapApi {
		/**
		* DynamicsCrm.DevKit SiteMapApi
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
		readonly ComponentState: OptionSet.SiteMap.ComponentState;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Hiển thị người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Bật để cho phép thu gọn nhóm sơ đồ trang web. */
		EnableCollapsibleGroups: boolean;
		/** Thông tin về khả năng sơ đồ trang web có được liên kết với mô-đun ứng dụng hay không. */
		IsAppAware: boolean;
		readonly IsManaged: boolean;
		/** Cho biết người cập nhật bản ghi lần cuối. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics CRM. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		readonly OrganizationId: string;
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Bật để hiển thị nút trang chủ trong sơ đồ trang web. */
		ShowHome: boolean;
		/** Bật để hiển thị danh sách thả xuống được ghim lại trong sơ đồ trang web. */
		ShowPinned: boolean;
		/** Bật để hiển thị danh sách thả xuống gần đây trong sơ đồ trang web. */
		ShowRecents: boolean;
		readonly SiteMapId: string;
		readonly SiteMapIdUnique: string;
		SiteMapName: string;
		SiteMapNameUnique: string;
		SiteMapXml: string;
		readonly SiteMapXmlManaged: string;
		readonly SolutionId: string;
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			readonly ComponentState: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Hiển thị người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Bật để cho phép thu gọn nhóm sơ đồ trang web. */
			readonly EnableCollapsibleGroups: string;
			/** Thông tin về khả năng sơ đồ trang web có được liên kết với mô-đun ứng dụng hay không. */
			readonly IsAppAware: string;
			readonly IsManaged: string;
			/** Cho biết người cập nhật bản ghi lần cuối. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ đã chọn theo tùy chọn Microsoft Dynamics CRM. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			readonly OrganizationId: string;
			readonly OverwriteTime_UtcDateOnly: string;
			/** Bật để hiển thị nút trang chủ trong sơ đồ trang web. */
			readonly ShowHome: string;
			/** Bật để hiển thị danh sách thả xuống được ghim lại trong sơ đồ trang web. */
			readonly ShowPinned: string;
			/** Bật để hiển thị danh sách thả xuống gần đây trong sơ đồ trang web. */
			readonly ShowRecents: string;
			readonly SiteMapId: string;
			readonly SiteMapIdUnique: string;
			readonly SiteMapName: string;
			readonly SiteMapNameUnique: string;
			readonly SiteMapXml: string;
			readonly SiteMapXmlManaged: string;
			readonly SolutionId: string;
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SiteMap {
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