//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formpowerpagecomponent_Information {
		interface Tabs {
		}
		interface Body {
			content: DevKit.Controls.String;
			filecontent: DevKit.Controls.File;
			/** Tên của thực thể tùy chỉnh. */
			name: DevKit.Controls.String;
			/** ID chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
			powerpagecomponenttype: DevKit.Controls.OptionSet;
			powerpagesiteid: DevKit.Controls.Lookup;
			powerpagesitelanguageid: DevKit.Controls.Lookup;
			/** Trạng thái của thành phần Power Pages */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			powerpagecomponent_mspp_webformid_adx_webformsession: DevKit.Controls.NavigationItem,
			powerpagecomponent_mspp_webformstepid_adx_webformsession: DevKit.Controls.NavigationItem
		}
	}
	class Formpowerpagecomponent_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form powerpagecomponent_Information */
		Body: DevKit.Formpowerpagecomponent_Information.Body;
		/** The Navigation of form powerpagecomponent_Information */
		Navigation: DevKit.Formpowerpagecomponent_Information.Navigation;
		/** The SidePanes of form powerpagecomponent_Information */
		SidePanes: DevKit.SidePanes;
	}
	class powerpagecomponentApi {
		/**
		* DynamicsCrm.DevKit powerpagecomponentApi
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
		readonly ComponentState: OptionSet.powerpagecomponent.ComponentState;
		content: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Cột nội dung tệp chứa các tệp web cổng thông tin, ví dụ: png, css, v.v. */
		readonly filecontent_name: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của thực thể tùy chỉnh. */
		name: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		powerpagecomponentId: string;
		powerpagecomponenttype: OptionSet.powerpagecomponent.powerpagecomponenttype;
		powerpagesiteid: string;
		powerpagesitelanguageid: string;
		searchcontent: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của thành phần Power Pages */
		statecode: OptionSet.powerpagecomponent.statecode;
		/** Lý do dẫn đến trạng thái của thành phần Power Pages */
		statuscode: OptionSet.powerpagecomponent.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			readonly content: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Cột nội dung tệp chứa các tệp web cổng thông tin, ví dụ: png, css, v.v. */
			readonly filecontent_name: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly name: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly powerpagecomponentId: string;
			readonly powerpagecomponenttype: string;
			readonly powerpagesiteid: string;
			readonly powerpagesitelanguageid: string;
			readonly searchcontent: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của thành phần Power Pages */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của thành phần Power Pages */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace powerpagecomponent {
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
		enum powerpagecomponenttype {
			/** 15 */
			Bieu_mau_co_ban,
			/** 19 */
			Bieu_mau_nang_cao,
			/** 4 */
			Bo_lien_ket_web,
			/** 20 */
			Buoc_bieu_mau_nang_cao,
			/** 30 */
			Chuyen_huong,
			/** 13 */
			Cong_cu_danh_dau_trang,
			/** 17 */
			Danh_sach,
			/** 7 */
			Doan_noi_dung,
			/** 33 */
			Dong_dam_may,
			/** 28 */
			Ho_so_quyen_doi_voi_cot,
			/** 5 */
			Lien_ket_web,
			/** 32 */
			Loi_tat,
			/** 6 */
			Mau_trang,
			/** 8 */
			Mau_web,
			/** 27 */
			Nguoi_tieu_dung_bot,
			/** 31 */
			Quy_tac_chuyen_tiep_trang_thai_phat_hanh,
			/** 10 */
			Quy_tac_kiem_soat_quyen_truy_cap_trang_web,
			/** 18 */
			Quyen_doi_voi_bang,
			/** 29 */
			Quyen_doi_voi_cot,
			/** 16 */
			Sieu_du_lieu_bieu_mau_co_ban,
			/** 21 */
			Sieu_du_lieu_bieu_mau_nang_cao,
			/** 3 */
			Tep_web,
			/** 34 */
			Thanh_phan_UX,
			/** 9 */
			Thiet_dat_trang,
			/** 1 */
			Trang_thai_phat_hanh,
			/** 2 */
			Trang_web,
			/** 12 */
			Truy_cap_website,
			/** 11 */
			Vai_tro_web,
			/** 26 */
			Vi_tri_quang_cao,
			/** 24 */
			Vi_tri_tham_do_y_kien
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