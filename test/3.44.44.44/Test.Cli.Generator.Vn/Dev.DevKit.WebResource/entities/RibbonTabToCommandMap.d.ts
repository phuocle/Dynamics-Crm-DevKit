//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RibbonTabToCommandMapApi {
		/**
		* DynamicsCrm.DevKit RibbonTabToCommandMapApi
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
		/** Id lệnh của kiểm soát trong thẻ đó. */
		Command: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.RibbonTabToCommandMap.ComponentState;
		/** Id kiểm soát trong thẻ đó. */
		ControlId: string;
		/** Hệ thống sẽ xuất thực thể áp dụng quy tắc này, cũng là thực thể nhập quy tắc này từ đó. */
		Entity2: string;
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của tổ chức. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của tùy chỉnh ruy băng có liên kết với lệnh trên ruy băng. */
		RibbonDiffId: string;
		/** Mã định danh duy nhất. */
		RibbonTabToCommandMapId: string;
		/** Mã định danh duy nhất của biểu mẫu được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook. */
		readonly RibbonTabToCommandMapUniqueId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Id của thẻ */
		TabId: string;
		/** Cho biết phiên bản của các tùy chỉnh sẽ được đồng bộ với ứng dụng khách Microsoft Dynamics 365 dành cho Outlook. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Id lệnh của kiểm soát trong thẻ đó. */
			readonly Command: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Id kiểm soát trong thẻ đó. */
			readonly ControlId: string;
			/** Hệ thống sẽ xuất thực thể áp dụng quy tắc này, cũng là thực thể nhập quy tắc này từ đó. */
			readonly Entity2: string;
			readonly IsManaged: string;
			/** Mã định danh duy nhất của tổ chức. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của tùy chỉnh ruy băng có liên kết với lệnh trên ruy băng. */
			readonly RibbonDiffId: string;
			/** Mã định danh duy nhất. */
			readonly RibbonTabToCommandMapId: string;
			/** Mã định danh duy nhất của biểu mẫu được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook. */
			readonly RibbonTabToCommandMapUniqueId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Id của thẻ */
			readonly TabId: string;
			/** Cho biết phiên bản của các tùy chỉnh sẽ được đồng bộ với ứng dụng khách Microsoft Dynamics 365 dành cho Outlook. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RibbonTabToCommandMap {
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