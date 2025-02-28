﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_columnpermission_Information {
		interface Tabs {
		}
		interface Body {
			/** Tên của thực thể tùy chỉnh. */
			mspp_columnname: DevKit.Controls.String;
			mspp_columnpermissionprofileid: DevKit.Controls.Lookup;
			mspp_permissions: DevKit.Controls.MultiOptionSet;
			WebResource_mspp_columnnameselector: DevKit.Controls.WebResource;
		}
		interface Navigation {

		}
	}
	class Formmspp_columnpermission_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_columnpermission_Information */
		Body: DevKit.Formmspp_columnpermission_Information.Body;
		/** The Navigation of form mspp_columnpermission_Information */
		Navigation: DevKit.Formmspp_columnpermission_Information.Navigation;
		/** The SidePanes of form mspp_columnpermission_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_columnpermissionApi {
		/**
		* DynamicsCrm.DevKit mspp_columnpermissionApi
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
		/** Tên của thực thể tùy chỉnh. */
		mspp_columnname: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_columnpermissionId: string;
		mspp_columnpermissionprofileid: string;
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		mspp_permissions: Array<OptionSet.mspp_columnpermission.mspp_permissions>;
		/** Trạng thái của quyền đối với cột */
		statecode: OptionSet.mspp_columnpermission.statecode;
		/** Lý do dẫn đến trạng thái của quyền đối với cột */
		statuscode: OptionSet.mspp_columnpermission.statuscode;
		readonly FormattedValue: {
			/** Tên của thực thể tùy chỉnh. */
			readonly mspp_columnname: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_columnpermissionId: string;
			readonly mspp_columnpermissionprofileid: string;
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			readonly mspp_permissions: Array<string>;
			/** Trạng thái của quyền đối với cột */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của quyền đối với cột */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_columnpermission {
		enum mspp_permissions {
			/** 746610002 */
			Cap_nhat,
			/** 746610001 */
			Doc,
			/** 746610000 */
			Tao
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