//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PrincipalSyncAttributeMapApi {
		/**
		* DynamicsCrm.DevKit PrincipalSyncAttributeMapApi
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
		/** Xác định hướng chấp nhận đồng bộ. */
		AllowedSyncDirection: number;
		/** Tên Hiển thị Thuộc tính CRM. */
		AttributeCRMDisplayName: string;
		/** Tên thuộc tính CRM. */
		AttributeCRMName: string;
		/** Tên Hiển thị Thuộc tính Exchange. */
		AttributeExchangeDisplayName: string;
		/** Tên thuộc tính Exchange. */
		AttributeExchangeName: string;
		/** Thuộc tính đã tính. */
		ComputedProperties: string;
		/** Hướng đồng bộ định */
		DefaultSyncDirection: OptionSet.PrincipalSyncAttributeMap.DefaultSyncDirection;
		/** Chỉ định khả năng ánh xạ là thuộc tính đã tính */
		readonly IsComputed: boolean;
		/** Tên ánh xạ. */
		MappingName: string;
		/** Mã định danh duy nhất của tổ chức được liên kết. */
		readonly OrganizationId: string;
		/** Ánh xạ thuộc tính đồng bộ mẹ mà ánh xạ này thuộc về */
		ParentPrincipalSyncAttributeMappingId: string;
		PrincipalId: string;
		/** Mã định danh duy nhất của ánh xạ thuộc tính đồng bộ nguyên tắc. */
		PrincipalSyncAttributeMapId: string;
		/** Hướng đồng bộ */
		SyncDirection: OptionSet.PrincipalSyncAttributeMap.SyncDirection;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Xác định hướng chấp nhận đồng bộ. */
			readonly AllowedSyncDirection: string;
			/** Tên Hiển thị Thuộc tính CRM. */
			readonly AttributeCRMDisplayName: string;
			/** Tên thuộc tính CRM. */
			readonly AttributeCRMName: string;
			/** Tên Hiển thị Thuộc tính Exchange. */
			readonly AttributeExchangeDisplayName: string;
			/** Tên thuộc tính Exchange. */
			readonly AttributeExchangeName: string;
			/** Thuộc tính đã tính. */
			readonly ComputedProperties: string;
			/** Hướng đồng bộ định */
			readonly DefaultSyncDirection: string;
			/** Chỉ định khả năng ánh xạ là thuộc tính đã tính */
			readonly IsComputed: string;
			/** Tên ánh xạ. */
			readonly MappingName: string;
			/** Mã định danh duy nhất của tổ chức được liên kết. */
			readonly OrganizationId: string;
			/** Ánh xạ thuộc tính đồng bộ mẹ mà ánh xạ này thuộc về */
			readonly ParentPrincipalSyncAttributeMappingId: string;
			readonly PrincipalId: string;
			/** Mã định danh duy nhất của ánh xạ thuộc tính đồng bộ nguyên tắc. */
			readonly PrincipalSyncAttributeMapId: string;
			/** Hướng đồng bộ */
			readonly SyncDirection: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PrincipalSyncAttributeMap {
		enum DefaultSyncDirection {
			/** 3 */
			Hai_chieu,
			/** 0 */
			Khong,
			/** 2 */
			ToCRM,
			/** 1 */
			ToExchange
		}
		enum EntityTypeCode {
		}
		enum SyncDirection {
			/** 3 */
			Hai_chieu,
			/** 0 */
			Khong,
			/** 2 */
			ToCRM,
			/** 1 */
			ToExchange
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