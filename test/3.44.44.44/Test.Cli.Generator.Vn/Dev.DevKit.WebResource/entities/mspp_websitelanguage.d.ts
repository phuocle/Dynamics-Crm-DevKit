//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_websitelanguage_Information {
		interface tab__6FA2C0DC_1585_4CA4_86A7_285DB3B27222_Sections {
			_8F9F4F14_3F39_499E_AAD1_E161FABE27C6: DevKit.Controls.Section;
		}
		interface tab__6FA2C0DC_1585_4CA4_86A7_285DB3B27222 extends DevKit.Controls.ITab {
			Section: tab__6FA2C0DC_1585_4CA4_86A7_285DB3B27222_Sections;
		}
		interface Tabs {
			_6FA2C0DC_1585_4CA4_86A7_285DB3B27222: tab__6FA2C0DC_1585_4CA4_86A7_285DB3B27222;
		}
		interface Body {
			Tab: Tabs;
			mspp_description: DevKit.Controls.String;
			/** Tên hiển thị đã bản địa hóa của ngôn ngữ cổng thông tin */
			mspp_displayname: DevKit.Controls.String;
			/** Mã định danh bản địa hoặc ngôn ngữ xuất hiện trong URL để cho biết ngôn ngữ của cổng thông tin */
			mspp_languagecode: DevKit.Controls.String;
			/** ID bản địa được gán cho ngôn ngữ cổng thông tin */
			mspp_lcid: DevKit.Controls.Integer;
			/** Tên ngôn ngữ của cổng thông tin */
			mspp_name: DevKit.Controls.String;
			/** Tra cứu trạng thái phát hành – trạng thái phát hành của phiên bản website/ngôn ngữ này (bản nháp/đã phát hành) */
			mspp_publishingstate: DevKit.Controls.Lookup;
			/** Ngôn ngữ hệ thống xác định ngôn ngữ cổng thông tin nào khả dụng */
			mspp_systemlanguage: DevKit.Controls.Integer;
			/** Tra cứu website */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Thuộc tính này chỉ được sử dụng trong Ứng dụng quản lý Power Pages và chỉ dành cho mục đích giao diện người dùng. Giá trị của thuộc tính được ánh xạ tới mspp_systemlanguage. */
			mspp_websitelcid: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			mspp_mspp_websitelanguage_mspp_website_DefaultLanguage: DevKit.Controls.NavigationItem,
			mspp_websitelanguage_contentsnippet_contentsnippetlanguageid: DevKit.Controls.NavigationItem,
			mspp_websitelanguage_weblinkset: DevKit.Controls.NavigationItem,
			mspp_websitelanguage_webpage_webpagelanguageid: DevKit.Controls.NavigationItem
		}
	}
	class Formmspp_websitelanguage_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_websitelanguage_Information */
		Body: DevKit.Formmspp_websitelanguage_Information.Body;
		/** The Navigation of form mspp_websitelanguage_Information */
		Navigation: DevKit.Formmspp_websitelanguage_Information.Navigation;
		/** The SidePanes of form mspp_websitelanguage_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_websitelanguageApi {
		/**
		* DynamicsCrm.DevKit mspp_websitelanguageApi
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
		/** Hiển thị người đã tạo bản ghi. */
		mspp_createdby: string;
		/** Hiển thị ngày và giờ tạo bản ghi. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_description: string;
		/** Tên hiển thị đã bản địa hóa của ngôn ngữ cổng thông tin */
		mspp_displayname: string;
		/** Mã định danh bản địa hoặc ngôn ngữ xuất hiện trong URL để cho biết ngôn ngữ của cổng thông tin */
		mspp_languagecode: string;
		/** ID bản địa được gán cho ngôn ngữ cổng thông tin */
		mspp_lcid: number;
		/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
		mspp_modifiedby: string;
		/** Hiển thị ngày và giờ sửa đổi bản ghi. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** Tên ngôn ngữ của cổng thông tin */
		mspp_name: string;
		/** Tra cứu trạng thái phát hành – trạng thái phát hành của phiên bản website/ngôn ngữ này (bản nháp/đã phát hành) */
		mspp_publishingstate: string;
		/** Ngôn ngữ hệ thống xác định ngôn ngữ cổng thông tin nào khả dụng */
		mspp_systemlanguage: number;
		/** Tra cứu website */
		mspp_websiteid: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		mspp_websitelanguageId: string;
		/** Thuộc tính này chỉ được sử dụng trong Ứng dụng quản lý Power Pages và chỉ dành cho mục đích giao diện người dùng. Giá trị của thuộc tính được ánh xạ tới mspp_systemlanguage. */
		mspp_websitelcid: OptionSet.mspp_websitelanguage.mspp_websitelcid;
		/** Trạng thái của ngôn ngữ website */
		statecode: OptionSet.mspp_websitelanguage.statecode;
		/** Lý do dẫn đến trạng thái của ngôn ngữ website */
		statuscode: OptionSet.mspp_websitelanguage.statuscode;
		readonly FormattedValue: {
			/** Hiển thị người đã tạo bản ghi. */
			readonly mspp_createdby: string;
			/** Hiển thị ngày và giờ tạo bản ghi. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_description: string;
			/** Tên hiển thị đã bản địa hóa của ngôn ngữ cổng thông tin */
			readonly mspp_displayname: string;
			/** Mã định danh bản địa hoặc ngôn ngữ xuất hiện trong URL để cho biết ngôn ngữ của cổng thông tin */
			readonly mspp_languagecode: string;
			/** ID bản địa được gán cho ngôn ngữ cổng thông tin */
			readonly mspp_lcid: string;
			/** Hiển thị người gần đây nhất đã cập nhật bản ghi. */
			readonly mspp_modifiedby: string;
			/** Hiển thị ngày và giờ sửa đổi bản ghi. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** Tên ngôn ngữ của cổng thông tin */
			readonly mspp_name: string;
			/** Tra cứu trạng thái phát hành – trạng thái phát hành của phiên bản website/ngôn ngữ này (bản nháp/đã phát hành) */
			readonly mspp_publishingstate: string;
			/** Ngôn ngữ hệ thống xác định ngôn ngữ cổng thông tin nào khả dụng */
			readonly mspp_systemlanguage: string;
			/** Tra cứu website */
			readonly mspp_websiteid: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly mspp_websitelanguageId: string;
			/** Thuộc tính này chỉ được sử dụng trong Ứng dụng quản lý Power Pages và chỉ dành cho mục đích giao diện người dùng. Giá trị của thuộc tính được ánh xạ tới mspp_systemlanguage. */
			readonly mspp_websitelcid: string;
			/** Trạng thái của ngôn ngữ website */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của ngôn ngữ website */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_websitelanguage {
		enum mspp_websitelcid {
			/** 1025 */
			Tieng_A_Rap,
			/** 1033 */
			Tieng_Anh,
			/** 1045 */
			Tieng_Ba_Lan_Ba_Lan,
			/** 1069 */
			Tieng_Basque_Basque,
			/** 2070 */
			Tieng_Bo_Dao_Nha_Bo_Dao_Nha,
			/** 1046 */
			Tieng_Bo_Dao_Nha_Brazil,
			/** 1026 */
			Tieng_Bulgaria_Bulgaria,
			/** 1027 */
			Tieng_Catalan_Catalan,
			/** 1050 */
			Tieng_Croatia_Croatia,
			/** 1030 */
			Tieng_Dan_Mach_Dan_Mach,
			/** 1037 */
			Tieng_Do_Thai,
			/** 1031 */
			Tieng_Duc_Duc,
			/** 1061 */
			Tieng_Estonia_Estonia,
			/** 1110 */
			Tieng_Galician_Tay_Ban_Nha,
			/** 1043 */
			Tieng_Ha_Lan_Ha_Lan,
			/** 1042 */
			Tieng_Han_Han_Quoc,
			/** 1081 */
			Tieng_Hindi_An_Do,
			/** 1038 */
			Tieng_Hungary_Hungary,
			/** 1032 */
			Tieng_Hy_Lap_Hy_Lap,
			/** 1057 */
			Tieng_Indonesia_Indonesia,
			/** 1040 */
			Tieng_Italy_Italy,
			/** 1087 */
			Tieng_Kazakh_Kazakhstan,
			/** 1062 */
			Tieng_Latvia_Latvia,
			/** 1063 */
			Tieng_Litva_Litva,
			/** 1086 */
			Tieng_Ma_Lai_Malaysia,
			/** 1044 */
			Tieng_Na_Uy_Bokmal_Na_Uy,
			/** 1049 */
			Tieng_Nga_Nga,
			/** 1041 */
			Tieng_Nhat_Nhat_Ban,
			/** 1035 */
			Tieng_Phan_Lan_Phan_Lan,
			/** 1036 */
			Tieng_Phap_Phap,
			/** 1048 */
			Tieng_Romania_Romania,
			/** 1029 */
			Tieng_Sec_Cong_hoa_Sec,
			/** 3098 */
			Tieng_Serbia_Cyrillic_Serbia,
			/** 2074 */
			Tieng_Serbia_Latinh_Serbia,
			/** 1051 */
			Tieng_Slovak_Slovakia,
			/** 1060 */
			Tieng_Slovenia_Slovenia,
			/** 3082 */
			Tieng_Tay_Ban_Nha_Cach_sap_xep_Truyen_thong_Tay_Ban_Nha,
			/** 1054 */
			Tieng_Thai_Thai_Lan,
			/** 1055 */
			Tieng_Tho_Nhi_Ky_Tho_Nhi_Ky,
			/** 1053 */
			Tieng_Thuy_Dien_Thuy_Dien,
			/** 3076 */
			Tieng_Trung_Dac_khu_Hanh_chinh_Hong_Kong,
			/** 1028 */
			Tieng_Trung_Phon_the,
			/** 2052 */
			Tieng_Trung_Trung_Quoc,
			/** 1058 */
			Tieng_Ukraina_Ukraina,
			/** 1066 */
			Tieng_Viet_Viet_Nam
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