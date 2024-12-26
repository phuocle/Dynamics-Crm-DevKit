//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class StagedEntityAttributeApi {
		/**
		* DynamicsCrm.DevKit StagedEntityAttributeApi
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
		/** Mô tả thuộc tính với các thuộc tính để tạo siêu dữ liệu không đồng bộ */
		AttributeDescription: string;
		/** AttributeTypeId cho thuộc tính theo giai đoạn. */
		AttributeTypeId: string;
		/** ComponentState cho thuộc tính theo giai đoạn */
		ComponentState: number;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Ngày và thời gian tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** ID của thực thể cho thuộc tính theo giai đoạn. */
		EntityId: string;
		/** Tên bên ngoài của thuộc tính theo giai đoạn cho thực thể ảo. */
		ExternalName: string;
		/** Xác định xem Thuộc tính theo giai đoạn có nhiều nhãn hay không */
		HasMultipleLabels: boolean;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Xác định xem Thuộc tính theo giai đoạn có phải Là logic không */
		IsLogical: boolean;
		/** Xác định xem Thuộc tính theo giai đoạn có phải là Khóa chính không */
		IsPKAttribute: boolean;
		/** LogicalName của thuộc tính theo giai đoạn. */
		LogicalName: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Ngày và giờ đã sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của thuộc tính theo giai đoạn. */
		Name: string;
		/** Mô tả đã bản địa hóa của thuộc tính. */
		OriginalLocalizedDescription: string;
		/** Tên gốc đã bản địa hóa của thuộc tính theo giai đoạn. */
		OriginalLocalizedName: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** OverwriteTime cho thuộc tính theo giai đoạn. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** PhysicalName của thuộc tính theo giai đoạn. */
		PhysicalName: string;
		/** SolutionId cho thuộc tính theo giai đoạn. */
		SolutionId: string;
		/** Mã định danh duy nhất của phiên bản thuộc tính thực thể */
		StagedEntityAttributeId: string;
		/** Trạng thái của thuộc tính thực thể theo giai đoạn */
		statecode: OptionSet.StagedEntityAttribute.statecode;
		/** Lý do dẫn đến trạng thái của Thuộc tính thực thể theo giai đoạn */
		statuscode: OptionSet.StagedEntityAttribute.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Xác định xem Thuộc tính theo giai đoạn có phải là ValidForReadAPI không */
		ValidForReadAPI: boolean;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mô tả thuộc tính với các thuộc tính để tạo siêu dữ liệu không đồng bộ */
			readonly AttributeDescription: string;
			/** AttributeTypeId cho thuộc tính theo giai đoạn. */
			readonly AttributeTypeId: string;
			/** ComponentState cho thuộc tính theo giai đoạn */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Ngày và thời gian tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** ID của thực thể cho thuộc tính theo giai đoạn. */
			readonly EntityId: string;
			/** Tên bên ngoài của thuộc tính theo giai đoạn cho thực thể ảo. */
			readonly ExternalName: string;
			/** Xác định xem Thuộc tính theo giai đoạn có nhiều nhãn hay không */
			readonly HasMultipleLabels: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Xác định xem Thuộc tính theo giai đoạn có phải Là logic không */
			readonly IsLogical: string;
			/** Xác định xem Thuộc tính theo giai đoạn có phải là Khóa chính không */
			readonly IsPKAttribute: string;
			/** LogicalName của thuộc tính theo giai đoạn. */
			readonly LogicalName: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Ngày và giờ đã sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của thuộc tính theo giai đoạn. */
			readonly Name: string;
			/** Mô tả đã bản địa hóa của thuộc tính. */
			readonly OriginalLocalizedDescription: string;
			/** Tên gốc đã bản địa hóa của thuộc tính theo giai đoạn. */
			readonly OriginalLocalizedName: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** OverwriteTime cho thuộc tính theo giai đoạn. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** PhysicalName của thuộc tính theo giai đoạn. */
			readonly PhysicalName: string;
			/** SolutionId cho thuộc tính theo giai đoạn. */
			readonly SolutionId: string;
			/** Mã định danh duy nhất của phiên bản thuộc tính thực thể */
			readonly StagedEntityAttributeId: string;
			/** Trạng thái của thuộc tính thực thể theo giai đoạn */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Thuộc tính thực thể theo giai đoạn */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Xác định xem Thuộc tính theo giai đoạn có phải là ValidForReadAPI không */
			readonly ValidForReadAPI: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace StagedEntityAttribute {
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