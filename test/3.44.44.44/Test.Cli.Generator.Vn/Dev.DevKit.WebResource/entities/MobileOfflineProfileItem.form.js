'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormMuc_Cau_hinh_Mobile_Offline = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			Name: {},
			profileassociationgrid: {},
			RecordDistributionCriteria: {},
			RecordsOwnedByMe: {},
			RecordsOwnedByMyBusinessUnit: {},
			RecordsOwnedByMyTeam: {},
			SelectedEntityTypeCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			GENERALINFORMATION_TAB: {
				Section: {
					Entity_Selection: {},
					MOBILE_OFFLINE_PROFILE_ITEM_ASSOCIATIONS: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			profileassociationgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			MobileOfflineProfileItem_MobileOfflineProfileItemAssociation: {}
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
	OptionSet.MobileOfflineProfileItem = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		RecordDistributionCriteria : {
			Bo_loc_du_lieu_khac: 2,
			Bo_loc_du_lieu_tuy_chinh: 3,
			Chi_tai_xuong_du_lieu_co_lien_quan: 0,
			Tat_ca_ban_ghi: 1
		},
		SelectedEntityTypeCode : {
			Cuoc_hen: 4201,
			Email: 4202,
			Hang_doi: 2020,
			Khach_hang: 1,
			Knowledge_Article_Attachment: 10199,
			Knowledge_Article_Image: 10193,
			Ky_hieu_mo_ta_Hinh_anh: 1007,
			Luu_y: 5,
			Muc_trong_hang_doi: 2029,
			Nguoi_dung: 8,
			Nguoi_lien_he: 2,
			Nhiem_vu: 4212,
			Nhom: 9,
			OrganizationDataSyncFnoState: 10221,
			OrganizationDataSyncState: 10222,
			Phan_dinh_kem_tep_hoat_dong: 10184,
			Phien_ban_SLA_KPI: 9752,
			Tep_dinh_kem: 1001
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