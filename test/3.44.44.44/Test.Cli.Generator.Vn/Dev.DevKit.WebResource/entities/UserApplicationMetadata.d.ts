//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class UserApplicationMetadataApi {
		/**
		* DynamicsCrm.DevKit UserApplicationMetadataApi
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
		AssociatedEntityLogicalName: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Chỉ sử dụng nội bộ. */
		Data: string;
		/** Chỉ sử dụng nội bộ. */
		Dependency: string;
		/** Chỉ sử dụng nội bộ. */
		DisplayName: string;
		/** Chỉ sử dụng nội bộ. */
		FormFactor: number;
		/** Chỉ sử dụng nội bộ. */
		IsDefault: boolean;
		/** Chỉ sử dụng nội bộ. */
		Lcid: number;
		/** Chỉ sử dụng nội bộ. */
		MetadataSubtype: number;
		/** Chỉ sử dụng nội bộ. */
		MetadataType: number;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Chỉ sử dụng nội bộ. */
		SourceId: string;
		/** Chỉ sử dụng nội bộ. */
		State: number;
		/** Chỉ sử dụng nội bộ. */
		UserApplicationMetadataId: string;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly AssociatedEntityLogicalName: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly Data: string;
			/** Chỉ sử dụng nội bộ. */
			readonly Dependency: string;
			/** Chỉ sử dụng nội bộ. */
			readonly DisplayName: string;
			/** Chỉ sử dụng nội bộ. */
			readonly FormFactor: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsDefault: string;
			/** Chỉ sử dụng nội bộ. */
			readonly Lcid: string;
			/** Chỉ sử dụng nội bộ. */
			readonly MetadataSubtype: string;
			/** Chỉ sử dụng nội bộ. */
			readonly MetadataType: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SourceId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly State: string;
			/** Chỉ sử dụng nội bộ. */
			readonly UserApplicationMetadataId: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserApplicationMetadata {
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