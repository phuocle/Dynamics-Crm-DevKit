'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormImportfile = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			CompletedOn: {},
			CreatedBy: {},
			CreatedOn: {},
			EnableDuplicateDetection: {},
			FailureCount: {},
			import_Logs_Failure: {},
			import_Logs_Failures: {},
			import_Logs_Succes: {},
			ImportMapId: {},
			Name: {},
			PartialFailureCount: {},
			RecordsOwnerId: {},
			Size: {},
			Source: {},
			StatusCode: {},
			SuccessCount: {},
			TargetEntityName: {},
			TotalCount: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			failureTab: {
				Section: {
					failureSection: {}
				}
			},
			partialFailureTab: {
				Section: {
					partialFailureSection: {}
				}
			},
			successTab: {
				Section: {
					successSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ImportFile = {
		DataDelimiterCode : {
			DoubleQuote: 1,
			Khong: 2,
			SingleQuote: 3
		},
		FieldDelimiterCode : {
			Dau_cham_phay: 4,
			Dau_hai_cham: 1,
			Dau_phay: 2,
			Tab: 3
		},
		FileTypeCode : {
			CSV: 0,
			Tep_dinh_kem: 2,
			Trang_tinh_XML_2003: 1,
			XLSX: 3
		},
		ProcessCode : {
			Bo_qua: 2,
			Noi_bo: 3,
			Quy_trinh: 1
		},
		ProcessingStatus : {
			Chua_bat_dau: 1,
			Chuyen_doi_Chu_so_huu: 7,
			Chuyen_doi_Danh_sach_chon: 6,
			Chuyen_doi_Hoan_hanh: 8,
			Chuyen_doi_Khoa_Chinh: 12,
			Chuyen_doi_Phuc_hop: 4,
			Chuyen_doi_Tra_cuu: 5,
			Dang_phan_tich: 2,
			Nhap_Chuyen_qua_1: 9,
			Nhap_Chuyen_qua_2: 10,
			Nhap_Hoan_thanh: 11,
			Phan_tich_Hoan_thanh: 3
		},
		RecordsOwnerIdType : {
		},
		StateCode : {
			Hien_hoat: 0
		},
		StatusCode : {
			Da_gui: 0,
			Da_hoan_thanh: 4,
			Dang_chuyen_doi: 2,
			Dang_nhap: 3,
			Dang_phan_tich: 1,
			Khong_thanh_cong: 5
		},
		UpsertModeCode : {
			Bo_qua: 2,
			Cap_nhat: 1,
			Tao: 0
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));