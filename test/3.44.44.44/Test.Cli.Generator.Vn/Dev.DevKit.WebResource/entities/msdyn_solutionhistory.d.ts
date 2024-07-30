//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Header extends DevKit.Controls.IHeader {
			msdyn_endtime: DevKit.Controls.DateTime;
			msdyn_result: DevKit.Controls.Boolean;
			msdyn_starttime: DevKit.Controls.DateTime;
			msdyn_totaltime: DevKit.Controls.Integer;
		}
		interface Tabs {
		}
		interface Body {
			msdyn_errorcode: DevKit.Controls.String;
			msdyn_exceptionmessage: DevKit.Controls.String;
			msdyn_ismanaged: DevKit.Controls.Boolean;
			msdyn_isoverwritecustomizations: DevKit.Controls.Boolean;
			msdyn_ispatch: DevKit.Controls.Boolean;
			/** Tên thực thể tùy chỉnh. */
			msdyn_name: DevKit.Controls.String;
			msdyn_operation: DevKit.Controls.OptionSet;
			msdyn_publishername: DevKit.Controls.String;
			msdyn_solutionversion: DevKit.Controls.String;
			msdyn_suboperation: DevKit.Controls.OptionSet;
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
		/** The Header section of form Thong_tin */
		Header: DevKit.FormThong_tin.Header;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_solutionhistoryApi {
		/**
		* DynamicsCrm.DevKit msdyn_solutionhistoryApi
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
		msdyn_activityid: string;
		msdyn_correlationid: string;
		msdyn_endtime_UtcDateAndTime: Date;
		msdyn_errorcode: string;
		msdyn_exceptionmessage: string;
		msdyn_exceptionstack: string;
		msdyn_ismanaged: boolean;
		msdyn_isoverwritecustomizations: boolean;
		msdyn_ispatch: boolean;
		/** Số lần thử lại tối đa. */
		msdyn_maxretries: number;
		/** Tên thực thể tùy chỉnh. */
		msdyn_name: string;
		msdyn_operation: OptionSet.msdyn_solutionhistory.msdyn_operation;
		msdyn_packagename: string;
		msdyn_packageversion: string;
		msdyn_publisherid: string;
		msdyn_publishername: string;
		msdyn_result: boolean;
		/** Số lần thử lại */
		msdyn_retrycount: number;
		/** Mã định danh duy nhất của phiên bản thực thể */
		msdyn_solutionhistoryId: string;
		msdyn_solutionid: string;
		msdyn_solutionversion: string;
		msdyn_starttime_UtcDateAndTime: Date;
		msdyn_status: OptionSet.msdyn_solutionhistory.msdyn_status;
		msdyn_suboperation: OptionSet.msdyn_solutionhistory.msdyn_suboperation;
		msdyn_totaltime: number;
		readonly FormattedValue: {
			readonly msdyn_activityid: string;
			readonly msdyn_correlationid: string;
			readonly msdyn_endtime_UtcDateAndTime: string;
			readonly msdyn_errorcode: string;
			readonly msdyn_exceptionmessage: string;
			readonly msdyn_exceptionstack: string;
			readonly msdyn_ismanaged: string;
			readonly msdyn_isoverwritecustomizations: string;
			readonly msdyn_ispatch: string;
			/** Số lần thử lại tối đa. */
			readonly msdyn_maxretries: string;
			/** Tên thực thể tùy chỉnh. */
			readonly msdyn_name: string;
			readonly msdyn_operation: string;
			readonly msdyn_packagename: string;
			readonly msdyn_packageversion: string;
			readonly msdyn_publisherid: string;
			readonly msdyn_publishername: string;
			readonly msdyn_result: string;
			/** Số lần thử lại */
			readonly msdyn_retrycount: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly msdyn_solutionhistoryId: string;
			readonly msdyn_solutionid: string;
			readonly msdyn_solutionversion: string;
			readonly msdyn_starttime_UtcDateAndTime: string;
			readonly msdyn_status: string;
			readonly msdyn_suboperation: string;
			readonly msdyn_totaltime: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_solutionhistory {
		enum msdyn_operation {
			/** 5 */
			Cung_cap_Ngon_ngu,
			/** 1 */
			Do_cai_dat,
			/** 9 */
			Khong_co,
			/** 0 */
			Nhap,
			/** 6 */
			Nhap_Ban_dich,
			/** 3 */
			Phat_hanh,
			/** 4 */
			Phat_hanh_Tat_ca,
			/** 7 */
			Thao_tac_Sieu_du_lieu_trong_Ruy_bang,
			/** 8 */
			Trang_thai_Dat_Quy_trinh_lam_viec,
			/** 2 */
			Xuat
		}
		enum msdyn_status {
			/** 0 */
			Da_bat_dau,
			/** 1 */
			Da_hoan_thanh
		}
		enum msdyn_suboperation {
			/** 3 */
			Cap_nhat,
			/** 0 */
			Khong_co,
			/** 1 */
			Moi,
			/** 2 */
			Nang_cap,
			/** 4 */
			Xoa
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