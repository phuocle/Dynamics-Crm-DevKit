//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class EntityApi {
		/**
		* DynamicsCrm.DevKit EntityApi
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
		/** Tên bảng địa chỉ của thực thể này. */
		AddressTableName: string;
		/** Tên bảng cơ sở của thực thể này. */
		BaseTableName: string;
		/** Tên tập hợp của thực thể này. */
		CollectionName: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.Entity.ComponentState;
		/** Mã định danh duy nhất của thực thể. */
		EntityId: string;
		/** Tên bộ thực thể của thực thể này. */
		EntitySetName: string;
		/** Tên bảng mở rộng của thực thể này. */
		ExtensionTableName: string;
		/** Tên tập hợp bên ngoài của thực thể này. */
		ExternalCollectionName: string;
		/** Tên bên ngoài của thực thể này. */
		ExternalName: string;
		/** Thực thể này có thuộc loại hoạt động hay không. */
		readonly IsActivity: boolean;
		/** Tên tập hợp logic của thực thể này. */
		LogicalCollectionName: string;
		/** Tên logic của thực thể này. */
		LogicalName: string;
		/** Tên của Thực thể này. */
		Name: string;
		/** Mã loại đối tượng của thực thể này. */
		readonly ObjectTypeCode: number;
		/** Tên tập hợp gốc đã bản địa hóa của thực thể này. */
		OriginalLocalizedCollectionName: string;
		/** Tên gốc đã bản địa hóa của thực thể này. */
		OriginalLocalizedName: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Tên thuộc tính kiểm soát cấp độ mẹ của thực thể này. */
		ParentControllingAttributeName: string;
		/** Tên thực của thực thể này. */
		PhysicalName: string;
		/** Tên dạng xem Báo cáo của thực thể này. */
		ReportViewName: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Số phiên bản của thực thể này. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Tên bảng địa chỉ của thực thể này. */
			readonly AddressTableName: string;
			/** Tên bảng cơ sở của thực thể này. */
			readonly BaseTableName: string;
			/** Tên tập hợp của thực thể này. */
			readonly CollectionName: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của thực thể. */
			readonly EntityId: string;
			/** Tên bộ thực thể của thực thể này. */
			readonly EntitySetName: string;
			/** Tên bảng mở rộng của thực thể này. */
			readonly ExtensionTableName: string;
			/** Tên tập hợp bên ngoài của thực thể này. */
			readonly ExternalCollectionName: string;
			/** Tên bên ngoài của thực thể này. */
			readonly ExternalName: string;
			/** Thực thể này có thuộc loại hoạt động hay không. */
			readonly IsActivity: string;
			/** Tên tập hợp logic của thực thể này. */
			readonly LogicalCollectionName: string;
			/** Tên logic của thực thể này. */
			readonly LogicalName: string;
			/** Tên của Thực thể này. */
			readonly Name: string;
			/** Mã loại đối tượng của thực thể này. */
			readonly ObjectTypeCode: string;
			/** Tên tập hợp gốc đã bản địa hóa của thực thể này. */
			readonly OriginalLocalizedCollectionName: string;
			/** Tên gốc đã bản địa hóa của thực thể này. */
			readonly OriginalLocalizedName: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Tên thuộc tính kiểm soát cấp độ mẹ của thực thể này. */
			readonly ParentControllingAttributeName: string;
			/** Tên thực của thực thể này. */
			readonly PhysicalName: string;
			/** Tên dạng xem Báo cáo của thực thể này. */
			readonly ReportViewName: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Số phiên bản của thực thể này. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Entity {
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