//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** Tên thực thể tùy chỉnh. */
			msdyn_name: DevKit.Controls.String;
			/** ID chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_pmsimulation_pmviewid_msdyn_pmview: DevKit.Controls.NavigationItem,
			msdyn_pmview_msdyn_pmview: DevKit.Controls.NavigationItem
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
	class msdyn_pmviewApi {
		/**
		* DynamicsCrm.DevKit msdyn_pmviewApi
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
		readonly ComponentState: OptionSet.msdyn_pmview.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
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
		msdyn_configuration: string;
		msdyn_isprivate: boolean;
		/** Tên thực thể tùy chỉnh. */
		msdyn_name: string;
		/** Túi thuộc tính JSON cho dữ liệu đầu ra cụ thể của dạng xem. */
		msdyn_outputdata: string;
		/** Mã định danh duy nhất cho Dạng xem PM liên kết với Dạng xem PM. */
		msdyn_parentpmviewid: string;
		/** Mã định danh duy nhất cho Phiên bản lịch PM liên kết với Dạng xem PM. */
		msdyn_pmcalendarversionid: string;
		/** Mã định danh duy nhất cho Phiên bản siêu dữ liệu mở rộng cho quy trình PM được liên kết với Dạng xem PM. */
		msdyn_pmprocessextendedmetadataversionid: string;
		/** Mã định danh duy nhất cho Phiên bản quy trình PM liên kết với Dạng xem PM. */
		msdyn_pmprocessversionid: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		msdyn_pmviewId: string;
		/** Loại của dạng xem. */
		msdyn_type: OptionSet.msdyn_pmview.msdyn_type;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của Dạng xem PM */
		statecode: OptionSet.msdyn_pmview.statecode;
		/** Lý do dẫn đến trạng thái của Dạng xem PM */
		statuscode: OptionSet.msdyn_pmview.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
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
			readonly msdyn_configuration: string;
			readonly msdyn_isprivate: string;
			/** Tên thực thể tùy chỉnh. */
			readonly msdyn_name: string;
			/** Túi thuộc tính JSON cho dữ liệu đầu ra cụ thể của dạng xem. */
			readonly msdyn_outputdata: string;
			/** Mã định danh duy nhất cho Dạng xem PM liên kết với Dạng xem PM. */
			readonly msdyn_parentpmviewid: string;
			/** Mã định danh duy nhất cho Phiên bản lịch PM liên kết với Dạng xem PM. */
			readonly msdyn_pmcalendarversionid: string;
			/** Mã định danh duy nhất cho Phiên bản siêu dữ liệu mở rộng cho quy trình PM được liên kết với Dạng xem PM. */
			readonly msdyn_pmprocessextendedmetadataversionid: string;
			/** Mã định danh duy nhất cho Phiên bản quy trình PM liên kết với Dạng xem PM. */
			readonly msdyn_pmprocessversionid: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly msdyn_pmviewId: string;
			/** Loại của dạng xem. */
			readonly msdyn_type: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của Dạng xem PM */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Dạng xem PM */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdyn_pmview {
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
		enum msdyn_type {
			/** 2 */
			Anh_tuc_thoi,
			/** 1 */
			Lien_tuc,
			/** 3 */
			Lop_so_sanh,
			/** 4 */
			Ngu_canh_tam_thoi,
			/** 0 */
			Tam_thoi
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