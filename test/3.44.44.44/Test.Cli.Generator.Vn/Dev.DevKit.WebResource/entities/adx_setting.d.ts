//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formadx_setting_Information {
		interface Tabs {
		}
		interface Body {
			adx_description: DevKit.Controls.String;
			/** Tên thực thể tùy chỉnh. */
			adx_name: DevKit.Controls.String;
			adx_value: DevKit.Controls.String;
			/** ID Chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formadx_setting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form adx_setting_Information */
		Body: DevKit.Formadx_setting_Information.Body;
		/** The Navigation of form adx_setting_Information */
		Navigation: DevKit.Formadx_setting_Information.Navigation;
		/** The SidePanes of form adx_setting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class adx_settingApi {
		/**
		* DynamicsCrm.DevKit adx_settingApi
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
		adx_description: string;
		adx_encryptedcontent: string;
		/** Tên thực thể tùy chỉnh. */
		adx_name: string;
		/** Hiển thị các phiên bản thực thể. */
		adx_settingId: string;
		adx_value: string;
		/** Hiển thị người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Hiển thị thời gian tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Hiển thị người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Hiển thị người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Hiển thị thời gian sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Hiển thị người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Hiển thị thời gian di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Hiển thị đơn vị kinh doanh sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Trạng thái Thiết đặt */
		statecode: OptionSet.adx_setting.statecode;
		/** Chọn trạng thái của Thiết đặt. */
		statuscode: OptionSet.adx_setting.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Hiển thị mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			readonly adx_description: string;
			readonly adx_encryptedcontent: string;
			/** Tên thực thể tùy chỉnh. */
			readonly adx_name: string;
			/** Hiển thị các phiên bản thực thể. */
			readonly adx_settingId: string;
			readonly adx_value: string;
			/** Hiển thị người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Hiển thị thời gian tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Hiển thị người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Hiển thị người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Hiển thị thời gian sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Hiển thị người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Hiển thị thời gian di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Hiển thị đơn vị kinh doanh sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Trạng thái Thiết đặt */
			readonly statecode: string;
			/** Chọn trạng thái của Thiết đặt. */
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
	namespace adx_setting {
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