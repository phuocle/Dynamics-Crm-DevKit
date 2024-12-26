//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** ObjectId của tập dữ liệu Power BI */
			DatasetObjectId: DevKit.Controls.String;
			/** Chỉ định liệu kết nối Dataverse trong tập dữ liệu này có cần được cập nhật khi nhập giải pháp để phù hợp với môi trường Dataverse mục tiêu. Chỉ áp dụng nếu tập dữ liệu có chính xác một kết nối như vậy. */
			DataverseConnectionUpdateEnabled: DevKit.Controls.Boolean;
			/** Etag của tập dữ liệu Power BI tại thời điểm tạo gói */
			Etag: DevKit.Controls.String;
			/** Tên thực thể tùy chỉnh. */
			name: DevKit.Controls.String;
			/** ID chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
			package: DevKit.Controls.ELSE1???;//package - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** Tên duy nhất cho thực thể. */
			UniqueName: DevKit.Controls.String;
			/** ObjectId của không gian làm việc Power BI nơi chứa tập dữ liệu */
			WorkspaceObjectId: DevKit.Controls.String;
		}
		interface Navigation {
			powerbidataset_powerbimashupparameter: DevKit.Controls.NavigationItem,
			powerbidataset_powerbireport: DevKit.Controls.NavigationItem
		}
	}
	class FormThong_tin extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin */
		Body: DevKit.FormThong_tin.Body;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class powerbidatasetApi {
		/**
		* DynamicsCrm.DevKit powerbidatasetApi
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
		readonly ComponentState: OptionSet.powerbidataset.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** ObjectId của tập dữ liệu Power BI */
		DatasetObjectId: string;
		/** ObjectId gốc của tập dữ liệu Power BI */
		DatasetOriginalObjectId: string;
		/** Chỉ định liệu kết nối Dataverse trong tập dữ liệu này có cần được cập nhật khi nhập giải pháp để phù hợp với môi trường Dataverse mục tiêu. Chỉ áp dụng nếu tập dữ liệu có chính xác một kết nối như vậy. */
		DataverseConnectionUpdateEnabled: boolean;
		/** Etag của tập dữ liệu Power BI tại thời điểm tạo gói */
		Etag: string;
		/** Số thứ tự của sự kiện thành phần nhập đã tạo bản ghi Power BI này. */
		ImportPowerBIComponentSequenceNumber: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
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
		/** Mã định danh duy nhất cho đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Gói Power BI (ZIP) để tạo lại tập dữ liệu khi nhập giải pháp */
		readonly Package_name: string;
		/** Mã định danh duy nhất cho phiên bản thực thể */
		powerbidatasetId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của Tập dữ liệu Power BI */
		statecode: OptionSet.powerbidataset.statecode;
		/** Lý do dẫn đến trạng thái của Tập dữ liệu Power BI */
		statuscode: OptionSet.powerbidataset.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Tên duy nhất cho thực thể. */
		UniqueName: string;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** ObjectId của không gian làm việc Power BI nơi chứa tập dữ liệu */
		WorkspaceObjectId: string;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** ObjectId của tập dữ liệu Power BI */
			readonly DatasetObjectId: string;
			/** ObjectId gốc của tập dữ liệu Power BI */
			readonly DatasetOriginalObjectId: string;
			/** Chỉ định liệu kết nối Dataverse trong tập dữ liệu này có cần được cập nhật khi nhập giải pháp để phù hợp với môi trường Dataverse mục tiêu. Chỉ áp dụng nếu tập dữ liệu có chính xác một kết nối như vậy. */
			readonly DataverseConnectionUpdateEnabled: string;
			/** Etag của tập dữ liệu Power BI tại thời điểm tạo gói */
			readonly Etag: string;
			/** Số thứ tự của sự kiện thành phần nhập đã tạo bản ghi Power BI này. */
			readonly ImportPowerBIComponentSequenceNumber: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
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
			/** Mã định danh duy nhất cho đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Gói Power BI (ZIP) để tạo lại tập dữ liệu khi nhập giải pháp */
			readonly Package_name: string;
			/** Mã định danh duy nhất cho phiên bản thực thể */
			readonly powerbidatasetId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của Tập dữ liệu Power BI */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Tập dữ liệu Power BI */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Tên duy nhất cho thực thể. */
			readonly UniqueName: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** ObjectId của không gian làm việc Power BI nơi chứa tập dữ liệu */
			readonly WorkspaceObjectId: string;
		}
	}
}
declare namespace OptionSet {
	namespace powerbidataset {
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