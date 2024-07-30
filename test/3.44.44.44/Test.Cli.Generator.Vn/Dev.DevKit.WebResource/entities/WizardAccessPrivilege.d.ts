//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class WizardAccessPrivilegeApi {
		/**
		* DynamicsCrm.DevKit WizardAccessPrivilegeApi
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
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi đặc quyền truy cập trình hướng dẫn. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi đặc quyền truy cập trình hướng dẫn. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo wizardaccessprivilege. */
		readonly CreatedOnBehalfBy: string;
		/** Tên lôgic của thực thể yêu cầu phải có đặc quyền truy cập. */
		EntityName1: string;
		/** Mã định danh duy nhất của người dùng đã sửa bản ghi đặc quyền truy cập trình hướng dẫn lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa bản ghi đặc quyền truy cập trình hướng dẫn. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi wizardaccessprivilege lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức liên kết với đặc quyền truy cập trình hướng dẫn. */
		readonly OrganizationId: string;
		/** Tên của đặc quyền đã yêu cầu để truy cập trình hướng dẫn. */
		PrivilegeName: string;
		readonly VersionNumber: number;
		/** Mã định danh duy nhất của trình hướng dẫn liên kết với bản ghi đặc quyền truy cập trình hướng dẫn này. */
		WebWizardId: string;
		/** Mã định danh duy nhất của đặc quyền truy cập. */
		WizardAccessPrivilegeId: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi đặc quyền truy cập trình hướng dẫn. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi đặc quyền truy cập trình hướng dẫn. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo wizardaccessprivilege. */
			readonly CreatedOnBehalfBy: string;
			/** Tên lôgic của thực thể yêu cầu phải có đặc quyền truy cập. */
			readonly EntityName1: string;
			/** Mã định danh duy nhất của người dùng đã sửa bản ghi đặc quyền truy cập trình hướng dẫn lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa bản ghi đặc quyền truy cập trình hướng dẫn. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi wizardaccessprivilege lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức liên kết với đặc quyền truy cập trình hướng dẫn. */
			readonly OrganizationId: string;
			/** Tên của đặc quyền đã yêu cầu để truy cập trình hướng dẫn. */
			readonly PrivilegeName: string;
			readonly VersionNumber: string;
			/** Mã định danh duy nhất của trình hướng dẫn liên kết với bản ghi đặc quyền truy cập trình hướng dẫn này. */
			readonly WebWizardId: string;
			/** Mã định danh duy nhất của đặc quyền truy cập. */
			readonly WizardAccessPrivilegeId: string;
		}
	}
}
declare namespace OptionSet {
	namespace WizardAccessPrivilege {
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