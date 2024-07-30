//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formadx_externalidentity_Information {
		interface Tabs {
		}
		interface Body {
			/** Mã định danh duy nhất cho Người liên hệ được liên kết với Danh tính Bên ngoài. */
			adx_contactid: DevKit.Controls.Lookup;
			adx_identityprovidername: DevKit.Controls.String;
			/** Hiển thị tên của thực thể tùy chỉnh. */
			adx_username: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formadx_externalidentity_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form adx_externalidentity_Information */
		Body: DevKit.Formadx_externalidentity_Information.Body;
		/** The Navigation of form adx_externalidentity_Information */
		Navigation: DevKit.Formadx_externalidentity_Information.Navigation;
		/** The SidePanes of form adx_externalidentity_Information */
		SidePanes: DevKit.SidePanes;
	}
	class adx_externalidentityApi {
		/**
		* DynamicsCrm.DevKit adx_externalidentityApi
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
		/** Mã định danh duy nhất cho Người liên hệ được liên kết với Danh tính Bên ngoài. */
		adx_contactid: string;
		/** Hiển thị các phiên bản thực thể. */
		adx_externalidentityId: string;
		adx_identityprovidername: string;
		/** Hiển thị tên của thực thể tùy chỉnh. */
		adx_username: string;
		/** Hiển thị người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Hiển thị người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Hiển thị số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Hiển thị người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Hiển thị người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Hiển thị tổ chức. */
		readonly OrganizationId: string;
		/** Hiển thị ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Cho biết danh tính bên ngoài là hiện hoạt hay không hiện hoạt. Các bản ghi không hoạt động là bản ghi ở trạng thái chỉ đọc và không thể chỉnh sửa trừ khi được kích hoạt lại. */
		statecode: OptionSet.adx_externalidentity.statecode;
		/** Chọn trạng thái của danh tính bên ngoài. */
		statuscode: OptionSet.adx_externalidentity.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Hiển thị mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất cho Người liên hệ được liên kết với Danh tính Bên ngoài. */
			readonly adx_contactid: string;
			/** Hiển thị các phiên bản thực thể. */
			readonly adx_externalidentityId: string;
			readonly adx_identityprovidername: string;
			/** Hiển thị tên của thực thể tùy chỉnh. */
			readonly adx_username: string;
			/** Hiển thị người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Hiển thị người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Hiển thị số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Hiển thị người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Hiển thị người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Hiển thị tổ chức. */
			readonly OrganizationId: string;
			/** Hiển thị ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Cho biết danh tính bên ngoài là hiện hoạt hay không hiện hoạt. Các bản ghi không hoạt động là bản ghi ở trạng thái chỉ đọc và không thể chỉnh sửa trừ khi được kích hoạt lại. */
			readonly statecode: string;
			/** Chọn trạng thái của danh tính bên ngoài. */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Hiển thị mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace adx_externalidentity {
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