//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class synapsedatabaseApi {
		/**
		* DynamicsCrm.DevKit synapsedatabaseApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.synapsedatabase.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Tên cơ sở dữ liệu Synapse. */
		DatabaseName: string;
		/** Mã định danh duy nhất cho Thư mục Data Lake liên kết với Cơ sở dữ liệu Synapse. */
		datalakefolder: string;
		/** Điểm cuối phát triển cho cơ sở dữ liệu Synapse này. */
		DevelopmentEndpoint: string;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** ID kết nối cho Kho dữ liệu chứa lối tắt đến bảng. */
		LakehouseConnectionId: string;
		/** ID cho Kho dữ liệu chứa lối tắt đến bảng. */
		LakehouseId: string;
		/** ID cho không gian làm việc Power BI chứa Kho dữ liệu */
		LakehouseWorkspaceId: string;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên thực thể tùy chỉnh. */
		name: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Nhóm nguồn lực Azure của cơ sở dữ liệu Synapse. */
		ResourceGroup: string;
		/** Tiền tố sơ đồ để sử dụng cho tên bảng */
		SchemaPrefix: string;
		/** Điểm cuối Sql không máy chủ của cơ sở dữ liệu Synapse. */
		ServerlessSqlEndpoint: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Cấu hình cụm tác vụ Spark */
		SparkPoolConfig: string;
		/** Trạng thái của Cơ sở dữ liệu Synapse */
		statecode: OptionSet.synapsedatabase.statecode;
		/** Lý do dẫn đến trạng thái của Cơ sở dữ liệu Synapse */
		statuscode: OptionSet.synapsedatabase.statuscode;
		/** Gói đăng ký Azure cho cơ sở dữ liệu Synapse */
		Subscription: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		synapsedatabaseId: string;
		/** Azure Tenant của cơ sở dữ liệu Synapse */
		Tenant: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Tên duy nhất cho thực thể. */
		UniqueName: string;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Tên không gian làm việc của cơ sở dữ liệu Synapse. */
		WorkspaceName: string;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Tên cơ sở dữ liệu Synapse. */
			readonly DatabaseName: string;
			/** Mã định danh duy nhất cho Thư mục Data Lake liên kết với Cơ sở dữ liệu Synapse. */
			readonly datalakefolder: string;
			/** Điểm cuối phát triển cho cơ sở dữ liệu Synapse này. */
			readonly DevelopmentEndpoint: string;
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** ID kết nối cho Kho dữ liệu chứa lối tắt đến bảng. */
			readonly LakehouseConnectionId: string;
			/** ID cho Kho dữ liệu chứa lối tắt đến bảng. */
			readonly LakehouseId: string;
			/** ID cho không gian làm việc Power BI chứa Kho dữ liệu */
			readonly LakehouseWorkspaceId: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên thực thể tùy chỉnh. */
			readonly name: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Nhóm nguồn lực Azure của cơ sở dữ liệu Synapse. */
			readonly ResourceGroup: string;
			/** Tiền tố sơ đồ để sử dụng cho tên bảng */
			readonly SchemaPrefix: string;
			/** Điểm cuối Sql không máy chủ của cơ sở dữ liệu Synapse. */
			readonly ServerlessSqlEndpoint: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Cấu hình cụm tác vụ Spark */
			readonly SparkPoolConfig: string;
			/** Trạng thái của Cơ sở dữ liệu Synapse */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Cơ sở dữ liệu Synapse */
			readonly statuscode: string;
			/** Gói đăng ký Azure cho cơ sở dữ liệu Synapse */
			readonly Subscription: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly synapsedatabaseId: string;
			/** Azure Tenant của cơ sở dữ liệu Synapse */
			readonly Tenant: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Tên duy nhất cho thực thể. */
			readonly UniqueName: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Tên không gian làm việc của cơ sở dữ liệu Synapse. */
			readonly WorkspaceName: string;
		}
	}
}
declare namespace OptionSet {
	namespace synapsedatabase {
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