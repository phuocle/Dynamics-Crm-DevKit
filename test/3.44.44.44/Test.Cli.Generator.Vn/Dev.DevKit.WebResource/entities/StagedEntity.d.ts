//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class StagedEntityApi {
		/**
		* DynamicsCrm.DevKit StagedEntityApi
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
		/** Tên tập hợp của thực thể theo giai đoạn. */
		CollectionName: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Ngày và thời gian tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** ID của trình cung cấp dữ liệu cho thực thể ảo. */
		DataproviderId: string;
		/** ID của nguồn dữ liệu cho thực thể ảo. */
		DatasourceId: string;
		/** Mô tả thực thể với các thuộc tính cho bản cập nhật delta */
		EntityDescription: string;
		/** Tên bộ thực thể của thực thể theo giai đoạn. */
		EntitySetName: string;
		/** Tên tập hợp bên ngoài của thực thể theo giai đoạn cho trường hợp VT. */
		ExternalCollectionName: string;
		/** Tên bên ngoài cho thực thể ảo. */
		ExternalName: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Tên tập hợp logic của thực thể theo giai đoạn. */
		LogicalCollectionName: string;
		/** Tên logic của thực thể theo giai đoạn. */
		LogicalName: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Ngày và giờ đã sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của thực thể theo giai đoạn. */
		Name: string;
		/** Tên tập hợp gốc đã bản địa hóa của thực thể theo giai đoạn. */
		OriginalLocalizedCollectionName: string;
		/** Mô tả đã bản địa hóa thực thể. */
		OriginalLocalizedDescription: string;
		/** Tên gốc đã bản địa hóa của thực thể theo giai đoạn. */
		OriginalLocalizedName: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Tên thực của thực thể theo giai đoạn. */
		PhysicalName: string;
		/** Mã định danh duy nhất cho các phiên bản thực thể */
		StagedEntityId: string;
		/** Trạng thái của Thực thể theo giai đoạn */
		statecode: OptionSet.StagedEntity.statecode;
		/** Lý do dẫn đến trạng thái của Thực thể theo giai đoạn */
		statuscode: OptionSet.StagedEntity.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Tên tập hợp của thực thể theo giai đoạn. */
			readonly CollectionName: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Ngày và thời gian tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** ID của trình cung cấp dữ liệu cho thực thể ảo. */
			readonly DataproviderId: string;
			/** ID của nguồn dữ liệu cho thực thể ảo. */
			readonly DatasourceId: string;
			/** Mô tả thực thể với các thuộc tính cho bản cập nhật delta */
			readonly EntityDescription: string;
			/** Tên bộ thực thể của thực thể theo giai đoạn. */
			readonly EntitySetName: string;
			/** Tên tập hợp bên ngoài của thực thể theo giai đoạn cho trường hợp VT. */
			readonly ExternalCollectionName: string;
			/** Tên bên ngoài cho thực thể ảo. */
			readonly ExternalName: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Tên tập hợp logic của thực thể theo giai đoạn. */
			readonly LogicalCollectionName: string;
			/** Tên logic của thực thể theo giai đoạn. */
			readonly LogicalName: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Ngày và giờ đã sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của thực thể theo giai đoạn. */
			readonly Name: string;
			/** Tên tập hợp gốc đã bản địa hóa của thực thể theo giai đoạn. */
			readonly OriginalLocalizedCollectionName: string;
			/** Mô tả đã bản địa hóa thực thể. */
			readonly OriginalLocalizedDescription: string;
			/** Tên gốc đã bản địa hóa của thực thể theo giai đoạn. */
			readonly OriginalLocalizedName: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Tên thực của thực thể theo giai đoạn. */
			readonly PhysicalName: string;
			/** Mã định danh duy nhất cho các phiên bản thực thể */
			readonly StagedEntityId: string;
			/** Trạng thái của Thực thể theo giai đoạn */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Thực thể theo giai đoạn */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace StagedEntity {
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