//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class WizardPageApi {
		/**
		* DynamicsCrm.DevKit WizardPageApi
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
		/** Mã định danh duy nhất của người dùng đã tạo trang trình hướng dẫn. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo trang trình hướng dẫn. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo wizardpage. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của người dùng sửa đổi trang trình hướng dẫn lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi trang trình hướng dẫn lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa wizardpage lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức. */
		readonly OrganizationId: string;
		/** Dữ liệu để đăng trên trang trình hướng dẫn khi yêu cầu trang. */
		PageDataToPost: string;
		/** Số thứ tự của trang trình hướng dẫn. */
		PageSequenceNumber: number;
		/** URL cho trang trình hướng dẫn. */
		PageUrl: string;
		readonly VersionNumber: number;
		/** Mã định danh duy nhất của trình hướng dẫn liên kết với trang trình hướng dẫn này. */
		WebWizardId: string;
		/** Mã định danh duy nhất của trang trình hướng dẫn. */
		WizardPageId: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo trang trình hướng dẫn. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo trang trình hướng dẫn. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo wizardpage. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của người dùng sửa đổi trang trình hướng dẫn lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi trang trình hướng dẫn lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa wizardpage lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức. */
			readonly OrganizationId: string;
			/** Dữ liệu để đăng trên trang trình hướng dẫn khi yêu cầu trang. */
			readonly PageDataToPost: string;
			/** Số thứ tự của trang trình hướng dẫn. */
			readonly PageSequenceNumber: string;
			/** URL cho trang trình hướng dẫn. */
			readonly PageUrl: string;
			readonly VersionNumber: string;
			/** Mã định danh duy nhất của trình hướng dẫn liên kết với trang trình hướng dẫn này. */
			readonly WebWizardId: string;
			/** Mã định danh duy nhất của trang trình hướng dẫn. */
			readonly WizardPageId: string;
		}
	}
}
declare namespace OptionSet {
	namespace WizardPage {
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