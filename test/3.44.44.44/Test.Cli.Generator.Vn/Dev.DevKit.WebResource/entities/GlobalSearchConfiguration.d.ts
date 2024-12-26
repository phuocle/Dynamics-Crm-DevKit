//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class GlobalSearchConfigurationApi {
		/**
		* DynamicsCrm.DevKit GlobalSearchConfigurationApi
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
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.GlobalSearchConfiguration.ComponentState;
		GlobalSearchConfigurationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly GlobalSearchConfigurationidUnique: string;
		/** Thông tin chỉ định có bật tìm kiếm cụ thể hay không. */
		IsEnabled: boolean;
		/** Thông tin chỉ định khả năng bản địa hóa tên logic của tìm kiếm. */
		IsLocalized: boolean;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Thông tin chỉ định Hộp Tìm kiếm có hiển thị hay không. */
		IsSearchBoxVisible: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		SearchProviderName: string;
		SearchProviderResultsPage: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			readonly GlobalSearchConfigurationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly GlobalSearchConfigurationidUnique: string;
			/** Thông tin chỉ định có bật tìm kiếm cụ thể hay không. */
			readonly IsEnabled: string;
			/** Thông tin chỉ định khả năng bản địa hóa tên logic của tìm kiếm. */
			readonly IsLocalized: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Thông tin chỉ định Hộp Tìm kiếm có hiển thị hay không. */
			readonly IsSearchBoxVisible: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			readonly SearchProviderName: string;
			readonly SearchProviderResultsPage: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
		}
	}
}
declare namespace OptionSet {
	namespace GlobalSearchConfiguration {
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