//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class OrganizationUIApi {
		/**
		* DynamicsCrm.DevKit OrganizationUIApi
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
		readonly ComponentState: OptionSet.OrganizationUI.ComponentState;
		/** Chỉ sử dụng nội bộ. */
		FieldXml: string;
		/** Mã định danh duy nhất của biểu mẫu loại bản ghi. */
		FormId: string;
		/** Mã định danh duy nhất của biểu mẫu được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook. */
		readonly FormIdUnique: string;
		/** Trình bày XML của bố cục biểu mẫu. */
		FormXml: string;
		/** Biểu diễn nhị phân của biểu tượng dùng trong dạng xem lưới của loại bản ghi. */
		GridIcon: string;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		readonly IsManaged: boolean;
		/** Biểu diễn nhị phân của biểu tượng lớn dùng trong biểu mẫu của loại bản ghi. */
		LargeEntityIcon: string;
		/** Mã định danh duy nhất của tổ chức. */
		readonly OrganizationId: string;
		/** Biểu diễn nhị phân của biểu tượng lớn dùng trong ứng dụng khách Microsoft Dynamics 365 dành cho Outlook đối với loại bản ghi này. */
		OutlookShortcutIcon: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		PreviewColumnsetXml: string;
		/** Chỉ sử dụng nội bộ. */
		PreviewXml: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		Version: number;
		/** Cho biết phiên bản của các tùy chỉnh sẽ được đồng bộ với ứng dụng khách Microsoft Dynamics 365 dành cho Outlook. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Chỉ sử dụng nội bộ. */
			readonly FieldXml: string;
			/** Mã định danh duy nhất của biểu mẫu loại bản ghi. */
			readonly FormId: string;
			/** Mã định danh duy nhất của biểu mẫu được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook. */
			readonly FormIdUnique: string;
			/** Trình bày XML của bố cục biểu mẫu. */
			readonly FormXml: string;
			/** Biểu diễn nhị phân của biểu tượng dùng trong dạng xem lưới của loại bản ghi. */
			readonly GridIcon: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			readonly IsManaged: string;
			/** Biểu diễn nhị phân của biểu tượng lớn dùng trong biểu mẫu của loại bản ghi. */
			readonly LargeEntityIcon: string;
			/** Mã định danh duy nhất của tổ chức. */
			readonly OrganizationId: string;
			/** Biểu diễn nhị phân của biểu tượng lớn dùng trong ứng dụng khách Microsoft Dynamics 365 dành cho Outlook đối với loại bản ghi này. */
			readonly OutlookShortcutIcon: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PreviewColumnsetXml: string;
			/** Chỉ sử dụng nội bộ. */
			readonly PreviewXml: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly Version: string;
			/** Cho biết phiên bản của các tùy chỉnh sẽ được đồng bộ với ứng dụng khách Microsoft Dynamics 365 dành cho Outlook. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace OrganizationUI {
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
		enum ObjectTypeCode {
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