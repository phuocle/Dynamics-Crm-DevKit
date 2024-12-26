//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormGoi {
		interface Tabs {
		}
		interface Body {
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ sửa đổi bản ghi. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Mã định danh duy nhất của người dùng đại diện sửa đổi bản ghi. */
			ModifiedOnBehalfBy: DevKit.Controls.Lookup;
			/** Công việc không đồng bộ được sử dụng để theo dõi hoạt động này.  */
			mspcat_AsyncOperationId: DevKit.Controls.String;
			/** Loại triển khai dự kiến sử dụng cho gói này */
			mspcat_IntendedDeploymentType: DevKit.Controls.OptionSet;
			mspcat_Name: DevKit.Controls.String;
			/** Mô tả hoạt động yêu cầu trên gói này */
			mspcat_Operation: DevKit.Controls.OptionSet;
			mspcat_packagefile: DevKit.Controls.File;
			mspcat_ProcessingMessage: DevKit.Controls.String;
			/** Liên kết giữa tên duy nhất của giải pháp và gói danh mục */
			mspcat_SolutionUniqueName: DevKit.Controls.String;
			/** ID chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
			/** Trạng thái của kho gói */
			statecode: DevKit.Controls.OptionSet;
			/** Lý do dẫn đến trạng thái của kho gói */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			mspcat_mspcat_catalogsubmissionfiles_PackageStor: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Subgrid_new_1: DevKit.Controls.Grid;
		}
	}
	class FormGoi extends DevKit.IForm {
		/**
		* Gói [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Goi */
		Body: DevKit.FormGoi.Body;
		/** The Navigation of form Goi */
		Navigation: DevKit.FormGoi.Navigation;
		/** The Grid of form Goi */
		Grid: DevKit.FormGoi.Grid;
		/** The SidePanes of form Goi */
		SidePanes: DevKit.SidePanes;
	}
	class mspcat_PackageStoreApi {
		/**
		* DynamicsCrm.DevKit mspcat_PackageStoreApi
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
		/** Mã định danh duy nhất của người dùng tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Số thứ tự của lần nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Công việc không đồng bộ được sử dụng để theo dõi hoạt động này.  */
		mspcat_AsyncOperationId: string;
		/** Loại triển khai dự kiến sử dụng cho gói này */
		mspcat_IntendedDeploymentType: OptionSet.mspcat_PackageStore.mspcat_IntendedDeploymentType;
		mspcat_Name: string;
		/** Mô tả hoạt động yêu cầu trên gói này */
		mspcat_Operation: OptionSet.mspcat_PackageStore.mspcat_Operation;
		/** Tệp lưu trữ gói */
		readonly mspcat_PackageFile_name: string;
		/** Mã định danh duy nhất cho phiên bản thực thể */
		mspcat_PackageStoreId: string;
		mspcat_ProcessingMessage: string;
		/** Liên kết giữa tên duy nhất của giải pháp và gói danh mục */
		mspcat_SolutionUniqueName: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Trạng thái của kho gói */
		statecode: OptionSet.mspcat_PackageStore.statecode;
		/** Lý do dẫn đến trạng thái của kho gói */
		statuscode: OptionSet.mspcat_PackageStore.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Số thứ tự của lần nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Công việc không đồng bộ được sử dụng để theo dõi hoạt động này.  */
			readonly mspcat_AsyncOperationId: string;
			/** Loại triển khai dự kiến sử dụng cho gói này */
			readonly mspcat_IntendedDeploymentType: string;
			readonly mspcat_Name: string;
			/** Mô tả hoạt động yêu cầu trên gói này */
			readonly mspcat_Operation: string;
			/** Tệp lưu trữ gói */
			readonly mspcat_PackageFile_name: string;
			/** Mã định danh duy nhất cho phiên bản thực thể */
			readonly mspcat_PackageStoreId: string;
			readonly mspcat_ProcessingMessage: string;
			/** Liên kết giữa tên duy nhất của giải pháp và gói danh mục */
			readonly mspcat_SolutionUniqueName: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Trạng thái của kho gói */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của kho gói */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspcat_PackageStore {
		enum mspcat_IntendedDeploymentType {
			/** 526430001 */
			Mau,
			/** 526430000 */
			Tieu_chuan
		}
		enum mspcat_Operation {
			/** 958090000 */
			Gui_den_danh_muc,
			/** 526430001 */
			Tai_goi_len,
			/** 958090001 */
			Tao_goi
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 958090003 */
			Ban_nhap,
			/** 958090004 */
			Da_gui,
			/** 958090001 */
			Da_hoan_tat,
			/** 958090000 */
			Dang_chay,
			/** 1 */
			Dang_cho,
			/** 2 */
			Khong_hoat_dong,
			/** 958090002 */
			Khong_thanh_cong
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