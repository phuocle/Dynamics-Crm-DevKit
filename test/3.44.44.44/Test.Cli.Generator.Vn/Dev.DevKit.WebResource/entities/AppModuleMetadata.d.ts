//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppModuleMetadataApi {
		/**
		* DynamicsCrm.DevKit AppModuleMetadataApi
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
		AppModuleId: string;
		/** Chỉ sử dụng nội bộ. */
		AppModuleMetadataId: string;
		/** Chỉ sử dụng nội bộ. */
		ComponentId: string;
		/** Chỉ sử dụng nội bộ. */
		ComponentIsDefault: boolean;
		/** Chỉ sử dụng nội bộ. */
		ComponentIsQuickFindQuery: boolean;
		/** Chỉ sử dụng nội bộ. */
		ComponentIsTabletEnabled: boolean;
		/** Chỉ sử dụng nội bộ. */
		ComponentIsUserChart: boolean;
		/** Chỉ sử dụng nội bộ. */
		ComponentIsUserForm: boolean;
		/** Chỉ sử dụng nội bộ. */
		ComponentIsUserView: boolean;
		/** Chỉ sử dụng nội bộ. */
		ComponentStateCode: number;
		/** Chỉ sử dụng nội bộ. */
		ComponentSubType: number;
		/** Chỉ sử dụng nội bộ. */
		ComponentType: number;
		/** Chỉ sử dụng nội bộ. */
		ComponentVersion: number;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Chỉ sử dụng nội bộ. */
		ParentComponentId: string;
		/** Chỉ sử dụng nội bộ. */
		State: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly AppModuleId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly AppModuleMetadataId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentIsDefault: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentIsQuickFindQuery: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentIsTabletEnabled: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentIsUserChart: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentIsUserForm: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentIsUserView: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentStateCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentSubType: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentType: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentVersion: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ParentComponentId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly State: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppModuleMetadata {
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