//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class WebWizardApi {
		/**
		* DynamicsCrm.DevKit WebWizardApi
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
		/** Đặc quyền đã yêu cầu dùng trình hướng dẫn này, phân cách bằng dấu phẩy (,). */
		AccessPrivileges: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.WebWizard.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo định nghĩa trình hướng dẫn. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo định nghĩa trình hướng dẫn. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo webwizard. */
		readonly CreatedOnBehalfBy: string;
		/** Phiên bản có thành phần được đưa vào. */
		IntroducedVersion: string;
		/** Thông tin chỉ định khả năng quản lý thành phần này. */
		readonly IsManaged: boolean;
		/** Thông tin về khả năng hệ thống đã xác định không đổi tất cả các trang dùng cho trình hướng dẫn này. */
		IsStaticPageSequence: boolean;
		/** Mã định danh duy nhất của người dùng đã sửa định nghĩa trình hướng dẫn lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi định nghĩa trình hướng dẫn lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa webwizard lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của trình hướng dẫn. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Số thứ tự của trang đầu tiên của trình hướng dẫn này. */
		StartPageSequenceNumber: number;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Tiêu đề của trình hướng dẫn. */
		TitleResourceString: string;
		readonly VersionNumber: number;
		/** Mã định danh duy nhất của trình hướng dẫn. */
		WebWizardId: string;
		/** Mã định danh duy nhất của Trình hướng dẫn Web. */
		readonly WebWizardIdUnique: string;
		/** Chiều cao cửa sổ cho trình hướng dẫn. */
		WizardPageHeight: number;
		/** Chiều rộng cửa sổ cho trình hướng dẫn. */
		WizardPageWidth: number;
		readonly FormattedValue: {
			/** Đặc quyền đã yêu cầu dùng trình hướng dẫn này, phân cách bằng dấu phẩy (,). */
			readonly AccessPrivileges: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo định nghĩa trình hướng dẫn. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo định nghĩa trình hướng dẫn. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo webwizard. */
			readonly CreatedOnBehalfBy: string;
			/** Phiên bản có thành phần được đưa vào. */
			readonly IntroducedVersion: string;
			/** Thông tin chỉ định khả năng quản lý thành phần này. */
			readonly IsManaged: string;
			/** Thông tin về khả năng hệ thống đã xác định không đổi tất cả các trang dùng cho trình hướng dẫn này. */
			readonly IsStaticPageSequence: string;
			/** Mã định danh duy nhất của người dùng đã sửa định nghĩa trình hướng dẫn lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi định nghĩa trình hướng dẫn lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa webwizard lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của trình hướng dẫn. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Số thứ tự của trang đầu tiên của trình hướng dẫn này. */
			readonly StartPageSequenceNumber: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Tiêu đề của trình hướng dẫn. */
			readonly TitleResourceString: string;
			readonly VersionNumber: string;
			/** Mã định danh duy nhất của trình hướng dẫn. */
			readonly WebWizardId: string;
			/** Mã định danh duy nhất của Trình hướng dẫn Web. */
			readonly WebWizardIdUnique: string;
			/** Chiều cao cửa sổ cho trình hướng dẫn. */
			readonly WizardPageHeight: string;
			/** Chiều rộng cửa sổ cho trình hướng dẫn. */
			readonly WizardPageWidth: string;
		}
	}
}
declare namespace OptionSet {
	namespace WebWizard {
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