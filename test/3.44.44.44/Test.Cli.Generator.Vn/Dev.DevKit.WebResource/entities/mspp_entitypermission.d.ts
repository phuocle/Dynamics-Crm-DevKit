//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_entitypermission_Information {
		interface tab_mspp_entitypermission_general_Sections {
			mspp_entitypermission_account: DevKit.Controls.Section;
			mspp_entitypermission_children: DevKit.Controls.Section;
			mspp_entitypermission_contact: DevKit.Controls.Section;
			mspp_entitypermission_general: DevKit.Controls.Section;
			mspp_entitypermission_parent: DevKit.Controls.Section;
			mspp_entitypermission_privileges: DevKit.Controls.Section;
			mspp_entitypermission_webroles: DevKit.Controls.Section;
		}
		interface tab_mspp_entitypermission_general extends DevKit.Controls.ITab {
			Section: tab_mspp_entitypermission_general_Sections;
		}
		interface Tabs {
			mspp_entitypermission_general: tab_mspp_entitypermission_general;
		}
		interface Body {
			Tab: Tabs;
			mspp_accountrelationship: DevKit.Controls.String;
			/** Kiểm soát xem người dùng có thể đính kèm bản ghi khác vào bản ghi được chỉ định hay không. Các quyền Gắn thêm và Gắn thêm vào hoạt động kết hợp với nhau. */
			mspp_append: DevKit.Controls.Boolean;
			/** Kiểm soát xem người dùng có thể gắn thêm bản ghi được chỉ định vào bản ghi khác hay không. Các quyền Gắn thêm và Gắn thêm vào hoạt động kết hợp với nhau. */
			mspp_appendto: DevKit.Controls.Boolean;
			mspp_contactrelationship: DevKit.Controls.String;
			/** Đặc quyền tạo sẽ kiểm soát xem bạn có thể tạo bản ghi hay không. */
			mspp_create: DevKit.Controls.Boolean;
			/** Kiểm soát xem người dùng có thể xóa bản ghi hay không. */
			mspp_delete: DevKit.Controls.Boolean;
			mspp_entitylogicalname: DevKit.Controls.String;
			/** Tên của thực thể tùy chỉnh. */
			mspp_entityname: DevKit.Controls.String;
			mspp_parententitypermission: DevKit.Controls.Lookup;
			mspp_parentrelationship: DevKit.Controls.String;
			/** Kiểm soát xem người dùng có thể đọc bản ghi hay không. */
			mspp_read: DevKit.Controls.Boolean;
			mspp_scope: DevKit.Controls.OptionSet;
			/** Mã định danh duy nhất cho website được liên kết với quyền của thực thể */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Kiểm soát xem người dùng có thể cập nhật bản ghi hay không. */
			mspp_write: DevKit.Controls.Boolean;
			WebResource_mspp_accountrelationshipname_selector: DevKit.Controls.WebResource;
			WebResource_mspp_contactrelationship_selector: DevKit.Controls.WebResource;
			WebResource_mspp_entitylogicalname_selector: DevKit.Controls.WebResource;
			WebResource_mspp_parentrelationship_selector: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_entitypermission_parententitypermission: DevKit.Controls.NavigationItem
		}
		interface Grid {
			subgrid_childentitypermissions: DevKit.Controls.Grid;
			subgrid_webroles: DevKit.Controls.Grid;
		}
	}
	class Formmspp_entitypermission_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_entitypermission_Information */
		Body: DevKit.Formmspp_entitypermission_Information.Body;
		/** The Navigation of form mspp_entitypermission_Information */
		Navigation: DevKit.Formmspp_entitypermission_Information.Navigation;
		/** The Grid of form mspp_entitypermission_Information */
		Grid: DevKit.Formmspp_entitypermission_Information.Grid;
		/** The SidePanes of form mspp_entitypermission_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_entitypermissionApi {
		/**
		* DynamicsCrm.DevKit mspp_entitypermissionApi
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
		mspp_accountrelationship: string;
		/** Kiểm soát xem người dùng có thể đính kèm bản ghi khác vào bản ghi được chỉ định hay không. Các quyền Gắn thêm và Gắn thêm vào hoạt động kết hợp với nhau. */
		mspp_append: boolean;
		/** Kiểm soát xem người dùng có thể gắn thêm bản ghi được chỉ định vào bản ghi khác hay không. Các quyền Gắn thêm và Gắn thêm vào hoạt động kết hợp với nhau. */
		mspp_appendto: boolean;
		mspp_contactrelationship: string;
		/** Đặc quyền tạo sẽ kiểm soát xem bạn có thể tạo bản ghi hay không. */
		mspp_create: boolean;
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		/** Kiểm soát xem người dùng có thể xóa bản ghi hay không. */
		mspp_delete: boolean;
		mspp_entitylogicalname: string;
		/** Tên của thực thể tùy chỉnh. */
		mspp_entityname: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_entitypermissionId: string;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		mspp_parententitypermission: string;
		mspp_parentrelationship: string;
		/** Kiểm soát xem người dùng có thể đọc bản ghi hay không. */
		mspp_read: boolean;
		mspp_scope: OptionSet.mspp_entitypermission.mspp_scope;
		/** Mã định danh duy nhất cho website được liên kết với quyền của thực thể */
		mspp_websiteid: string;
		/** Kiểm soát xem người dùng có thể cập nhật bản ghi hay không. */
		mspp_write: boolean;
		/** Trạng thái của quyền đối với bảng */
		statecode: OptionSet.mspp_entitypermission.statecode;
		/** Lý do dẫn đến trạng thái của quyền đối với bảng */
		statuscode: OptionSet.mspp_entitypermission.statuscode;
		readonly FormattedValue: {
			readonly mspp_accountrelationship: string;
			/** Kiểm soát xem người dùng có thể đính kèm bản ghi khác vào bản ghi được chỉ định hay không. Các quyền Gắn thêm và Gắn thêm vào hoạt động kết hợp với nhau. */
			readonly mspp_append: string;
			/** Kiểm soát xem người dùng có thể gắn thêm bản ghi được chỉ định vào bản ghi khác hay không. Các quyền Gắn thêm và Gắn thêm vào hoạt động kết hợp với nhau. */
			readonly mspp_appendto: string;
			readonly mspp_contactrelationship: string;
			/** Đặc quyền tạo sẽ kiểm soát xem bạn có thể tạo bản ghi hay không. */
			readonly mspp_create: string;
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Kiểm soát xem người dùng có thể xóa bản ghi hay không. */
			readonly mspp_delete: string;
			readonly mspp_entitylogicalname: string;
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_entityname: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_entitypermissionId: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			readonly mspp_parententitypermission: string;
			readonly mspp_parentrelationship: string;
			/** Kiểm soát xem người dùng có thể đọc bản ghi hay không. */
			readonly mspp_read: string;
			readonly mspp_scope: string;
			/** Mã định danh duy nhất cho website được liên kết với quyền của thực thể */
			readonly mspp_websiteid: string;
			/** Kiểm soát xem người dùng có thể cập nhật bản ghi hay không. */
			readonly mspp_write: string;
			/** Trạng thái của quyền đối với bảng */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của quyền đối với bảng */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_entitypermission {
		enum mspp_scope {
			/** 756150004 */
			Ban_than,
			/** 756150003 */
			Chinh,
			/** 756150002 */
			Khach_hang,
			/** 756150001 */
			Nguoi_lien_he,
			/** 756150000 */
			Toan_cau
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