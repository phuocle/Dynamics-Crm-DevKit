//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ClientUpdateApi {
		/**
		* DynamicsCrm.DevKit ClientUpdateApi
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
		/** Mã định danh duy nhất của bản cập nhật ứng dụng khách. */
		ClientUpdateId: string;
		/** Chỉ sử dụng nội bộ. Ngày và giờ tạo mã lệnh ClientUpdate trên máy chủ. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mô tả về bản cập nhật ứng dụng khách. */
		Description: string;
		/** Nội dung của bản cập nhật ứng dụng khách. */
		SqlScript: string;
		readonly VersionNumber: number;
		/** Chỉ sử dụng nội bộ. Phải do ứng dụng khách đặt thành 1 sau khi thực hiện thao tác. */
		WasExecuted: boolean;
		/** Chỉ sử dụng nội bộ. Giá trị là: 1 - Trước SchemaChanges; 2 - Sau SchemaChanges nhưng trước khi Tải dữ liệu xuống; 3 - Sau khi tải dữ liệu xuống. */
		WhenExecute: OptionSet.ClientUpdate.WhenExecute;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của bản cập nhật ứng dụng khách. */
			readonly ClientUpdateId: string;
			/** Chỉ sử dụng nội bộ. Ngày và giờ tạo mã lệnh ClientUpdate trên máy chủ. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mô tả về bản cập nhật ứng dụng khách. */
			readonly Description: string;
			/** Nội dung của bản cập nhật ứng dụng khách. */
			readonly SqlScript: string;
			readonly VersionNumber: string;
			/** Chỉ sử dụng nội bộ. Phải do ứng dụng khách đặt thành 1 sau khi thực hiện thao tác. */
			readonly WasExecuted: string;
			/** Chỉ sử dụng nội bộ. Giá trị là: 1 - Trước SchemaChanges; 2 - Sau SchemaChanges nhưng trước khi Tải dữ liệu xuống; 3 - Sau khi tải dữ liệu xuống. */
			readonly WhenExecute: string;
		}
	}
}
declare namespace OptionSet {
	namespace ClientUpdate {
		enum WhenExecute {
			/** 2 */
			Sau_khi_SchemaChanges_nhung_truoc_khi_Tai_xuong_du_lieu,
			/** 3 */
			Sau_khi_tai_xuong_du_lieu,
			/** 1 */
			Truoc_khi_SchemaChanges
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