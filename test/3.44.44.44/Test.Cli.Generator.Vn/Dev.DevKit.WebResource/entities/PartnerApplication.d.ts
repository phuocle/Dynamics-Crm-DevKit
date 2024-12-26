//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBieu_mau_chinh_ung_dung_doi_tac {
		interface Tabs {
		}
		interface Body {
			/** Chỉ định vai trò của ứng dụng. */
			ApplicationRole: DevKit.Controls.OptionSet;
			/** Tên của ứng dụng đối tác. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** ID chính của ứng dụng đối tác. */
			PrincipalId: DevKit.Controls.String;
			/** Chọn việc ứng dụng đối tác có dùng máy chủ xác thực hay không. */
			UseAuthorizationServer: DevKit.Controls.Boolean;
		}
		interface Navigation {
			emailserverprofile_incoming_partnerapplication: DevKit.Controls.NavigationItem,
			emailserverprofile_outgoing_partnerapplication: DevKit.Controls.NavigationItem
		}
	}
	class FormBieu_mau_chinh_ung_dung_doi_tac extends DevKit.IForm {
		/**
		* Biểu mẫu chính ứng dụng đối tác [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Bieu_mau_chinh_ung_dung_doi_tac */
		Body: DevKit.FormBieu_mau_chinh_ung_dung_doi_tac.Body;
		/** The Navigation of form Bieu_mau_chinh_ung_dung_doi_tac */
		Navigation: DevKit.FormBieu_mau_chinh_ung_dung_doi_tac.Navigation;
		/** The SidePanes of form Bieu_mau_chinh_ung_dung_doi_tac */
		SidePanes: DevKit.SidePanes;
	}
	class PartnerApplicationApi {
		/**
		* DynamicsCrm.DevKit PartnerApplicationApi
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
		/** Chỉ định vai trò của ứng dụng. */
		ApplicationRole: OptionSet.PartnerApplication.ApplicationRole;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Chứa URL siêu dữ liệu. */
		MetadataUrl: string;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của ứng dụng đối tác. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức được liên kết với bản ghi. */
		readonly OrganizationId: string;
		/** Mã định danh duy nhất của ứng dụng đối tác. */
		PartnerApplicationId: string;
		/** ID chính của ứng dụng đối tác. */
		PrincipalId: string;
		/** Cho biết miền gốc. */
		Realm: string;
		/** Hiện trạng thái của ứng dụng đối tác. */
		readonly StateCode: OptionSet.PartnerApplication.StateCode;
		/** Chọn trạng thái của ứng dụng đối tác. */
		StatusCode: OptionSet.PartnerApplication.StatusCode;
		/** Cho biết ID đối tượng thuê. */
		TenantId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Chọn việc ứng dụng đối tác có dùng máy chủ xác thực hay không. */
		UseAuthorizationServer: boolean;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của ứng dụng đối tác. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ định vai trò của ứng dụng. */
			readonly ApplicationRole: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Chứa URL siêu dữ liệu. */
			readonly MetadataUrl: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của ứng dụng đối tác. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức được liên kết với bản ghi. */
			readonly OrganizationId: string;
			/** Mã định danh duy nhất của ứng dụng đối tác. */
			readonly PartnerApplicationId: string;
			/** ID chính của ứng dụng đối tác. */
			readonly PrincipalId: string;
			/** Cho biết miền gốc. */
			readonly Realm: string;
			/** Hiện trạng thái của ứng dụng đối tác. */
			readonly StateCode: string;
			/** Chọn trạng thái của ứng dụng đối tác. */
			readonly StatusCode: string;
			/** Cho biết ID đối tượng thuê. */
			readonly TenantId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Chọn việc ứng dụng đối tác có dùng máy chủ xác thực hay không. */
			readonly UseAuthorizationServer: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của ứng dụng đối tác. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PartnerApplication {
		enum ApplicationRole {
			/** 1 */
			May_chu,
			/** 0 */
			May_khach
		}
		enum StateCode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum StatusCode {
			/** 1 */
			Da_bat,
			/** 2 */
			Da_tat
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