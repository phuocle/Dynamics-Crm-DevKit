//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPowerPagesLog_Information {
		interface Tabs {
		}
		interface Body {
			Name: DevKit.Controls.String;
			/** ID chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormPowerPagesLog_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form PowerPagesLog_Information */
		Body: DevKit.FormPowerPagesLog_Information.Body;
		/** The Navigation of form PowerPagesLog_Information */
		Navigation: DevKit.FormPowerPagesLog_Information.Navigation;
		/** The SidePanes of form PowerPagesLog_Information */
		SidePanes: DevKit.SidePanes;
	}
	class PowerPagesLogApi {
		/**
		* DynamicsCrm.DevKit PowerPagesLogApi
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
		ClientIP: string;
		Content: string;
		/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất cho người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Số thứ tự của lượt nhập đã tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất cho người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		Name: string;
		/** Ngày giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** ID phân vùng lô-gic. Một phân vùng lô-gic bao gồm một tập hợp các bản ghi có cùng ID phân vùng. */
		PartitionId: string;
		PortalId: string;
		/** Mã định danh duy nhất cho các phiên bản thực thể */
		PowerPagesLogId: string;
		RequestPath: string;
		RequestUrl: string;
		/** Thời gian hoạt động chính thức tính bằng giây. */
		TTLInSeconds: number;
		Type: OptionSet.PowerPagesLog.Type;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			readonly ClientIP: string;
			readonly Content: string;
			/** Mã định danh duy nhất cho người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất cho người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Số thứ tự của lượt nhập đã tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất cho người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			readonly Name: string;
			/** Ngày giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** ID phân vùng lô-gic. Một phân vùng lô-gic bao gồm một tập hợp các bản ghi có cùng ID phân vùng. */
			readonly PartitionId: string;
			readonly PortalId: string;
			/** Mã định danh duy nhất cho các phiên bản thực thể */
			readonly PowerPagesLogId: string;
			readonly RequestPath: string;
			readonly RequestUrl: string;
			/** Thời gian hoạt động chính thức tính bằng giây. */
			readonly TTLInSeconds: string;
			readonly Type: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PowerPagesLog {
		enum Type {
			/** 1 */
			CDNLog,
			/** 0 */
			WAFLog
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