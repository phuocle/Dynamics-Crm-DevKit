//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class OfflineCommandDefinitionApi {
		/**
		* DynamicsCrm.DevKit OfflineCommandDefinitionApi
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
		/** Định nghĩa Lệnh của Lệnh không phải là CRUD */
		CommandDefinition: string;
		/** Mã định danh duy nhất của Định nghĩa Lệnh cho Microsoft Dynamics 365. */
		CommandDefinitionId: string;
		/** Tên Lệnh của Lệnh không phải là CRUD. */
		CommandName: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức liên kết với lệnh không phải là CRUD. */
		readonly OrganizationId: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Tên Logic Thực thể Chính của thực thể sử dụng lệnh */
		PrimaryEntityLogicalName: string;
		/** Mã định danh duy nhất của giải pháp. */
		SolutionName: string;
		/** Chỉ sử dụng nội bộ */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Định nghĩa Lệnh của Lệnh không phải là CRUD */
			readonly CommandDefinition: string;
			/** Mã định danh duy nhất của Định nghĩa Lệnh cho Microsoft Dynamics 365. */
			readonly CommandDefinitionId: string;
			/** Tên Lệnh của Lệnh không phải là CRUD. */
			readonly CommandName: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức liên kết với lệnh không phải là CRUD. */
			readonly OrganizationId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Tên Logic Thực thể Chính của thực thể sử dụng lệnh */
			readonly PrimaryEntityLogicalName: string;
			/** Mã định danh duy nhất của giải pháp. */
			readonly SolutionName: string;
			/** Chỉ sử dụng nội bộ */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace OfflineCommandDefinition {
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