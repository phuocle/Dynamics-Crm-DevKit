//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {
			/** Tên hiển thị trong sổ địa chỉ cho người dùng. */
			DisplayName: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormThong_tin extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin */
		Body: DevKit.FormThong_tin.Body;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class aaduserApi {
		/**
		* DynamicsCrm.DevKit aaduserApi
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
		/** Mã định danh duy nhất của Microsoft Entra ID. */
		aaduserId: string;
		/** Cho biết Tài khoản của một Microsoft Entra ID có được bật hay không. */
		AccountEnabled: boolean;
		/** Số điện thoại doanh nghiệp cho người dùng */
		BusinessPhones: string;
		/** Thành phố. */
		City: string;
		/** Tên công ty. */
		CompanyName: string;
		/** Ngày giờ tạo Microsoft Entra ID. */
		readonly CreatedDateTime_UtcDateAndTime: Date;
		/** Tên hiển thị trong sổ địa chỉ cho người dùng. */
		DisplayName: string;
		/** Tên gọi (tên) của người dùng. */
		GivenName: string;
		/** Mã định danh duy nhất cho Microsoft Entra ID */
		id1: string;
		/** ImAddresses cho người dùng */
		ImAddresses: string;
		/** Chức danh của người dùng. */
		JobTitle: string;
		/** Địa chỉ SMTP cho người dùng. */
		Mail: string;
		/** Số điện thoại di động chính cho người dùng. */
		MobilePhone: string;
		/** Vị trí văn phòng tại địa điểm kinh doanh của người dùng. */
		OfficeLocation: string;
		/** Mã bưu điện. */
		PostalCode: string;
		/** Ngôn ngữ ưa dùng cho người dùng. Cần tuân thủ Mã ISO 639-1; ví dụ: 'en-US'. */
		PreferredLanguage: string;
		/** Địa chỉ đường phố. */
		StreetAddress: string;
		/** Họ của người dùng. */
		surname: string;
		/** Tên chính của người dùng (UPN) cho người dùng. */
		UserPrincipalName: string;
		/** Loại người dùng. */
		UserType: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của Microsoft Entra ID. */
			readonly aaduserId: string;
			/** Cho biết Tài khoản của một Microsoft Entra ID có được bật hay không. */
			readonly AccountEnabled: string;
			/** Số điện thoại doanh nghiệp cho người dùng */
			readonly BusinessPhones: string;
			/** Thành phố. */
			readonly City: string;
			/** Tên công ty. */
			readonly CompanyName: string;
			/** Ngày giờ tạo Microsoft Entra ID. */
			readonly CreatedDateTime_UtcDateAndTime: string;
			/** Tên hiển thị trong sổ địa chỉ cho người dùng. */
			readonly DisplayName: string;
			/** Tên gọi (tên) của người dùng. */
			readonly GivenName: string;
			/** Mã định danh duy nhất cho Microsoft Entra ID */
			readonly id1: string;
			/** ImAddresses cho người dùng */
			readonly ImAddresses: string;
			/** Chức danh của người dùng. */
			readonly JobTitle: string;
			/** Địa chỉ SMTP cho người dùng. */
			readonly Mail: string;
			/** Số điện thoại di động chính cho người dùng. */
			readonly MobilePhone: string;
			/** Vị trí văn phòng tại địa điểm kinh doanh của người dùng. */
			readonly OfficeLocation: string;
			/** Mã bưu điện. */
			readonly PostalCode: string;
			/** Ngôn ngữ ưa dùng cho người dùng. Cần tuân thủ Mã ISO 639-1; ví dụ: 'en-US'. */
			readonly PreferredLanguage: string;
			/** Địa chỉ đường phố. */
			readonly StreetAddress: string;
			/** Họ của người dùng. */
			readonly surname: string;
			/** Tên chính của người dùng (UPN) cho người dùng. */
			readonly UserPrincipalName: string;
			/** Loại người dùng. */
			readonly UserType: string;
		}
	}
}
declare namespace OptionSet {
	namespace aaduser {
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