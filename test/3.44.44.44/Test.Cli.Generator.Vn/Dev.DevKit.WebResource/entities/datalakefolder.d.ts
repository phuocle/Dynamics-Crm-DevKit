//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class datalakefolderApi {
		/**
		* DynamicsCrm.DevKit datalakefolderApi
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
		/** Loại quyền truy cập Azure Data Lake. */
		AccessType: string;
		/** Đường dẫn đến tệp CDM. */
		CDMPath: string;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.datalakefolder.ComponentState;
		/** Điểm cuối bộ chứa Azure Data Lake cho thư mục này. */
		containerendpoint: string;
		/** Nhóm bảo mật cho quyền truy cập của người đóng góp. */
		ContributorSecurityGroupId: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Tên duy nhất cho thực thể. */
		datalakefolder_UniqueName: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		datalakefolderId: string;
		/** Đường dẫn thư mục con đến Delta Lake. */
		deltaLakePath: string;
		/** Thuộc tính mở rộng liên kết với thư mục này. */
		extendedproperties: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Cho biết liệu bộ lưu trữ dữ liệu thư mục có sử dụng dung lượng của khách hàng hay không. */
		iscustomercapacity: boolean;
		/** For internal use only. */
		IsCustomizable: string;
		/** Cho biết bản sao sâu có được bật cho thư mục hay không. */
		isdeepcopyenabled: boolean;
		/** Cho biết kho dữ liệu là được quản lý hay bên ngoài. */
		IsExternalLake: boolean;
		/** Cho biết kho dữ liệu bên ngoài có ở chế độ chỉ đọc hay không. */
		IsExternalLakeReadOnly: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Cho biết siêu dữ liệu và dữ liệu thư mục hiển thị với tất cả các ứng dụng hay chỉ hiển thị với chủ sở hữu thư mục và các ứng dụng có quyền rõ ràng đối với thư mục. */
		isprivate: boolean;
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
		/** ID ứng dụng sở hữu thư mục này. ID ứng dụng sở hữu có toàn quyền kiểm soát, tức là quyền đọc, ghi và thực thi trên thư mục ADLS. */
		owningappid: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của thư mục mẹ cho thư mục này. */
		parentfolderid: string;
		/** Đường dẫn đến thư mục trong bộ chứa Azure Data Lake. */
		path: string;
		/** Nhóm bảo mật cho quyền truy cập của người đọc. */
		ReaderSecurityGroupId: string;
		/** Nhóm nguồn lực Azure của tài khoản lưu trữ. */
		ResourceGroup: string;
		/** Indicates if folder is shared for readaccess for other FPAs. */
		sharedforreadaccess: boolean;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của Thư mục Data Lake */
		statecode: OptionSet.datalakefolder.statecode;
		/** Lý do dẫn đến trạng thái của Thư mục Data Lake */
		statuscode: OptionSet.datalakefolder.statuscode;
		/** Gói đăng ký Azure của tài khoản lưu trữ. */
		Subscription: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Bật đồng bộ hóa sơ đồ với Dataverse. */
		SynchronizeSchemaToDataverse: boolean;
		/** Bật đồng bộ hóa sơ đồ với cơ sở dữ liệu Synapse. */
		SynchronizeSchemaToSynapseDb: boolean;
		/** Azure Tenant của tài khoản lưu trữ. */
		Tenant: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Loại quyền truy cập Azure Data Lake. */
			readonly AccessType: string;
			/** Đường dẫn đến tệp CDM. */
			readonly CDMPath: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Điểm cuối bộ chứa Azure Data Lake cho thư mục này. */
			readonly containerendpoint: string;
			/** Nhóm bảo mật cho quyền truy cập của người đóng góp. */
			readonly ContributorSecurityGroupId: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Tên duy nhất cho thực thể. */
			readonly datalakefolder_UniqueName: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly datalakefolderId: string;
			/** Đường dẫn thư mục con đến Delta Lake. */
			readonly deltaLakePath: string;
			/** Thuộc tính mở rộng liên kết với thư mục này. */
			readonly extendedproperties: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Cho biết liệu bộ lưu trữ dữ liệu thư mục có sử dụng dung lượng của khách hàng hay không. */
			readonly iscustomercapacity: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Cho biết bản sao sâu có được bật cho thư mục hay không. */
			readonly isdeepcopyenabled: string;
			/** Cho biết kho dữ liệu là được quản lý hay bên ngoài. */
			readonly IsExternalLake: string;
			/** Cho biết kho dữ liệu bên ngoài có ở chế độ chỉ đọc hay không. */
			readonly IsExternalLakeReadOnly: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Cho biết siêu dữ liệu và dữ liệu thư mục hiển thị với tất cả các ứng dụng hay chỉ hiển thị với chủ sở hữu thư mục và các ứng dụng có quyền rõ ràng đối với thư mục. */
			readonly isprivate: string;
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
			/** ID ứng dụng sở hữu thư mục này. ID ứng dụng sở hữu có toàn quyền kiểm soát, tức là quyền đọc, ghi và thực thi trên thư mục ADLS. */
			readonly owningappid: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của thư mục mẹ cho thư mục này. */
			readonly parentfolderid: string;
			/** Đường dẫn đến thư mục trong bộ chứa Azure Data Lake. */
			readonly path: string;
			/** Nhóm bảo mật cho quyền truy cập của người đọc. */
			readonly ReaderSecurityGroupId: string;
			/** Nhóm nguồn lực Azure của tài khoản lưu trữ. */
			readonly ResourceGroup: string;
			/** Indicates if folder is shared for readaccess for other FPAs. */
			readonly sharedforreadaccess: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của Thư mục Data Lake */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Thư mục Data Lake */
			readonly statuscode: string;
			/** Gói đăng ký Azure của tài khoản lưu trữ. */
			readonly Subscription: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Bật đồng bộ hóa sơ đồ với Dataverse. */
			readonly SynchronizeSchemaToDataverse: string;
			/** Bật đồng bộ hóa sơ đồ với cơ sở dữ liệu Synapse. */
			readonly SynchronizeSchemaToSynapseDb: string;
			/** Azure Tenant của tài khoản lưu trữ. */
			readonly Tenant: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace datalakefolder {
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