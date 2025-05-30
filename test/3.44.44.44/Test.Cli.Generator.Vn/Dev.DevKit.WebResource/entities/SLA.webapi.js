﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SLAApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
				}
				if (isMultiOptionSet) {
					return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
				}
				return entity[logicalName + f];
			};
			var getValue = function () {
				if (entity[logicalName] === undefined || entity[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName];
					}
					return null;
				}
				if (isMultiOptionSet) {
					return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
				}
				return entity[logicalName];
			};
			var setValue = function (value) {
				if (isMultiOptionSet) value = value.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		var _sla = {
			AllowPauseResume: { a: 'allowpauseresume' },
			ApplicableFrom: { a: 'applicablefrom' },
			ApplicableFromPickList: { a: 'applicablefrompicklist' },
			BusinessHoursId: { b: 'businesshoursid', a: '_businesshoursid_value', c: 'calendars', d: 'calendar' },
			ChangedAttributeList: { a: 'changedattributelist' },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ExchangeRate: { a: 'exchangerate', r: true },
			IsDefault: { a: 'isdefault' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			ObjectTypeCode: { a: 'objecttypecode', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit' },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team' },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser' },
			PrimaryEntityOTC: { a: 'primaryentityotc' },
			SLAId: { a: 'slaid' },
			SLAIdUnique: { a: 'slaidunique', r: true },
			SLAType: { a: 'slatype' },
			slaversion: { a: 'slaversion' },
			SolutionId: { a: 'solutionid', r: true },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			VersionNumber: { a: 'versionnumber', r: true },
			WorkflowId: { b: 'workflowid', a: '_workflowid_value', c: 'workflows', d: 'workflow' }
		};
		if (e === undefined) e = {};
		var u = {};
		var sla = {};
		sla.ODataEntity = e;
		sla.FormattedValue = {};
		for (var field in _sla) {
			var a = _sla[field].a;
			var b = _sla[field].b;
			var c = _sla[field].c;
			var d = _sla[field].d;
			var g = _sla[field].g;
			var r = _sla[field].r;
			webApiField(sla, field, e, a, b, c, d, r, u, g);
		}
		sla.Entity = u;
		sla.EntityName = 'sla';
		sla.EntityCollectionName = 'slas';
		sla['@odata.etag'] = e['@odata.etag'];
		sla.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		sla.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return sla;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SLA = {
		ApplicableFromPickList : {
			Co: 2,
			Khong: 1
		},
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		ObjectTypeCode : {
			ACIViewMapper: 8040,
			ActionCardUserState: 9968,
			AI_Builder_Dataset: 10142,
			AI_Builder_Dataset_File: 10143,
			AI_Builder_Dataset_Record: 10144,
			AI_Builder_Datasets_Container: 10145,
			AI_Builder_Feedback_Loop: 10135,
			AI_Builder_File: 10146,
			AI_Builder_File_Attached_Data: 10147,
			AI_Configuration: 402,
			AI_Event: 10134,
			AI_Form_Processing_Document: 10136,
			AI_Model: 401,
			AI_Object_Detection_Bounding_Box: 10139,
			AI_Object_Detection_Image: 10137,
			AI_Object_Detection_Image_Mapping: 10140,
			AI_Object_Detection_Label: 10138,
			AI_Plugin_Conversation_Starter: 10119,
			AI_Plugin_Conversation_Starter_Mapping: 10120,
			AI_Plugin_Governance: 10121,
			AI_Plugin_Governance_Extended: 10122,
			AI_Template: 400,
			AICopilot: 10117,
			AIPlugin: 10126,
			AIPluginAuth: 10118,
			AIPluginExternalSchema: 10127,
			AIPluginExternalSchemaProperty: 10128,
			AIPluginInstance: 10129,
			AIPluginOperation: 10130,
			AIPluginOperationParameter: 10131,
			AIPluginOperationResponseTemplate: 10123,
			AIPluginTitle: 10124,
			AIPluginUserSetting: 10132,
			Anh_xa_bien_doi: 4426,
			Anh_xa_chu_so_huu: 4420,
			Anh_xa_chuoi: 1043,
			Anh_xa_Cot: 4417,
			Anh_xa_gia_tri_danh_sach: 4418,
			Anh_xa_Id_Dong_bo_Exchange: 4120,
			Anh_xa_ngay_dau_thoi_gian: 9932,
			Anh_xa_nguoi_dung: 2016,
			Anh_xa_tham_so_bien_doi: 4427,
			Anh_xa_the_ruy_bang_den_lenh: 1113,
			Anh_xa_Thuc_the_Nhap: 4428,
			Anh_xa_thuc_the_phan_tich_van_ban: 9945,
			Anh_xa_Thuoc_tinh_Dong_bo: 1401,
			Anh_xa_Tra_cuu: 4419,
			Anh_xa_trang_thai: 1075,
			API_tuy_chinh: 10027,
			App_Insights_Metadata: 10167,
			Application: 1204,
			ApplicationUser: 10072,
			ArchiveCleanupInfo: 10223,
			ArchiveCleanupOperation: 10224,
			Background_Operation: 10212,
			Bai_dang: 8000,
			Bai_viet: 127,
			Bai_viet_duoc_Lap_chi_muc: 126,
			Bai_viet_trong_co_so_kien_thuc: 9953,
			Ban_do_Chuoi_Hien_thi: 4101,
			Ban_do_Don_vi_Kinh_doanh: 6,
			Ban_do_Du_lieu: 4411,
			Ban_do_thuc_the_SystemUser_BusinessUnit: 42,
			Ban_do_Thuoc_tinh: 4601,
			Ban_do_Thuoc_tinh_Dong_bo_Chinh: 1404,
			Ban_do_trinh_quan_ly_nguoi_dung_he_thong: 51,
			Ban_do_vai_tro_cua_moi_quan_he: 4501,
			Ban_ghi_co_so_kien_thuc: 9930,
			Ban_ghi_PM: 10273,
			Ban_ghi_Trung_lap: 4415,
			Ban_luu_y_bai_dang: 8002,
			Bang_thong_tin_Hieu_suat_Du_lieu: 4450,
			Bang_thong_tin_nguoi_dung: 1031,
			Bao_cao: 9100,
			Bao_cao_Power_BI: 10288,
			Bao_cao_quet_Power_Pages: 10353,
			Ben_Hoat_dong: 135,
			Ben_ngoai: 3008,
			Bieu_do_he_thong: 1111,
			Bieu_do_nguoi_dung: 1112,
			Bieu_mau_co_ban: 10321,
			Bieu_mau_he_thong: 1030,
			Bieu_mau_nhieu_buoc: 10335,
			Bo_kich_hoat_quy_trinh: 4712,
			Bo_lien_ket_web: 10339,
			Bo_loc_thong_bao_sdk: 4607,
			Bo_quy_tac_dinh_tuyen: 8181,
			Bo_Quy_tac_Tinh_trang_Giai_phap: 10284,
			BotContent: 10150,
			BulkArchiveConfig: 10225,
			BulkArchiveFailureDetail: 10226,
			BulkArchiveOperation: 10227,
			BulkArchiveOperationDetail: 10228,
			Buoc_bieu_mau: 10337,
			Buoc_phe_duyet: 10097,
			Buoc_xu_ly_thong_bao_sdk: 4608,
			Canh_cua_Nut_thanh_phan_ung_dung_dua_tren_mo_hinh: 10062,
			CanvasApp_Extended_Metadata: 10068,
			Cap_nhat_ung_dung_khach: 36,
			Cap_thong_bao_sdk: 4613,
			CascadeGrantRevokeAccessRecordsTracker: 10057,
			CascadeGrantRevokeAccessVersionTracker: 10058,
			Cau_hinh_Anh_xa_Thuoc_tinh_Dong_bo: 1400,
			Cau_hinh_bao_mat_buoc_xu_ly_thong_bao_sdk: 4616,
			Cau_hinh_Bao_mat_He_thong_cap_bac: 9919,
			Cau_hinh_Bao_mat_Truong: 1200,
			Cau_hinh_cua_anh_xa_thuoc_tinh_dong_bo_nhom: 1403,
			Cau_hinh_cuoc_tro_chuyen_lien_ket_thuc_the: 10257,
			Cau_hinh_Hinh_anh_Thuc_the: 432,
			Cau_hinh_ISV: 4705,
			Cau_hinh_lo_thanh_phan_giai_phap: 10001,
			Cau_hinh_mac_dinh_cua_dieu_khien_tuy_chinh: 9755,
			Cau_hinh_May_chu_Email: 9605,
			Cau_hinh_Mobile_Offline: 9866,
			Cau_hinh_moi_quan_he_thanh_phan_giai_phap: 10003,
			Cau_hinh_nhom: 1203,
			Cau_hinh_phan_tich_thuc_the: 430,
			Cau_hinh_Quy_trinh: 9650,
			Cau_hinh_thanh_phan_giai_phap: 10002,
			Cau_hinh_Thuoc_tinh_Hinh_anh: 431,
			Cau_hinh_thuoc_tinh_thanh_phan_giai_phap: 10000,
			Cau_hinh_Tim_kiem_Chung: 54,
			Cau_hinh_truy_cap_kenh: 3005,
			Cau_hinh_tu_dong_hoa_quy_tac_cong_viec_PM: 10265,
			Cau_hinh_Ung_dung: 9012,
			Cau_hinh_Xu_ly_du_lieu: 10040,
			Chenh_lech_ruy_bang: 1130,
			Chi_muc_thuc_the: 9815,
			Chi_tiet_Ket_qua_Phan_tich: 10281,
			Chia_se_truong: 44,
			Cho_Tat_ca_Mo_hinh_Phe_duyet: 10099,
			Cho_Tat_ca_Mo_hinh_Phe_duyet_Hanh_dong: 10098,
			Chu_de_129: 129,
			Chu_de_2015: 2015,
			Chu_ky_Email: 9997,
			Chu_so_huu: 7,
			Chu_the_nguoi_dung_he_thong: 14,
			Chuoi_Hien_thi: 4102,
			Chuyen_huong: 10330,
			Chuyen_tham_quan: 10149,
			Co_so_du_lieu_Synapse: 10043,
			Cong_cu_danh_dau_trang: 10332,
			Cong_viec_He_thong: 4700,
			Cong_viec_Nhap: 9107,
			Cong_viec_Nhap_Du_lieu: 4410,
			Cong_viec_Phan_tich: 10278,
			Cong_viec_tong_so: 9511,
			Connection_Instance: 373,
			ConversationTranscript: 10151,
			Copilot: 10152,
			CopilotExampleQuestion: 10299,
			CopilotGlossaryTerm: 10300,
			CopilotSynonyms: 10301,
			Cum_to_hop_bo_tro: 4605,
			Cuoc_goi_dien_thoai: 4210,
			Cuoc_hen: 4201,
			Cuoc_hen_lap_lai: 4251,
			Da_luu_Cau_hinh_Hieu_biet_To_chuc: 1309,
			Dac_quyen_truy_cap_trinh_huong_dan_web: 4803,
			Dac_tinh_Quan_he_phu_thuoc: 7108,
			Dang_ky: 29,
			Dang_ky_cho_quy_trinh_lam_viec: 4702,
			Dang_ky_Cuoc_goi_lai: 301,
			Dang_ky_theo_doi_thu_cong_doi_tuong: 37,
			Dang_xem: 1039,
			Dang_xem_Bai_viet_trong_Co_so_kien_thuc: 9955,
			Dang_xem_da_luu: 4230,
			Dang_xem_PM: 10276,
			Danh_muc: 10024,
			Danh_sach: 10323,
			Danh_tinh_Ben_ngoai: 10308,
			Data_Movement_Service_Request: 10172,
			Data_Movement_Service_Request_Status: 10173,
			Dataflow: 418,
			Dataflow_Connection_Reference: 10168,
			Dataflow_DatalakeFolder: 10171,
			Dataflow_Template: 10170,
			DataflowRefreshHistory: 10052,
			Dau_vet: 8050,
			DelegatedAuthorization: 10055,
			Deleted_Record_Reference: 10246,
			DelveActionHub: 9961,
			Di_chuyen_hanh_dong_ung_dung: 10249,
			Dia_chi: 1071,
			Dia_chi_khong_phan_giai: 2012,
			Dia_chi_nha_phat_hanh: 7102,
			Dia_chi_Noi_bo: 1003,
			Diem_cuoi_dich_vu: 4618,
			Dieu_khien_tuy_chinh: 9753,
			Dieu_kien_Quy_tac_Trung_lap: 4416,
			Dinh_nghia_Lenh_Ngoai_tuyen: 9870,
			Dinh_nghia_mui_gio: 4810,
			Dinh_nghia_Thanh_phan_Giai_phap: 7104,
			Dinh_nghia_thiet_dat: 10067,
			DMS_Sync_Request: 10174,
			DMS_Sync_Status: 10175,
			Doan_noi_dung: 10320,
			Doi_so_Quy_tac_Tinh_trang_Giai_phap: 10283,
			Don_vi_Kinh_doanh: 10,
			DS_thuc_the_loi_Power_Pages: 10327,
			Du_lieu_Mau_Phe_duyet_Co_ban: 10100,
			Du_lieu_nhi_phan_dong_man_hinh_nen: 10090,
			Du_lieu_nhi_phan_quy_trinh_lam_viec: 10076,
			Du_lieu_phien_ban_thuc_the_nguoi_dung: 2501,
			Du_lieu_SharePoint: 9509,
			Duong_dan_trinh_mo_rong_su_kien: 18085,
			DVFileSearch: 10111,
			DVFileSearchAttribute: 10112,
			DVFileSearchEntity: 10113,
			DVTableSearch: 10114,
			DVTableSearchAttribute: 10115,
			DVTableSearchEntity: 10116,
			ElasticFileAttachment: 7755,
			Email: 4202,
			EnableArchivalRequest: 10229,
			EntityRecordFilter: 73,
			EntityRefreshHistory: 10053,
			Environment_Variable_Definition: 380,
			Environment_Variable_Value: 381,
			ExportSolutionUpload: 10012,
			Fabric_AISkill: 10166,
			Favorite_knowledge_article: 10197,
			Fax: 4204,
			FeatureControlSetting: 10013,
			FederatedKnowledgeConfiguration: 10181,
			FederatedKnowledgeEntityConfiguration: 10182,
			File_Upload: 10290,
			FileAttachment: 55,
			Flow_Log: 10091,
			Flow_Run: 10092,
			FxExpression: 10206,
			Gan_danh_muc: 10025,
			Gan_danh_muc_noi_bo: 10026,
			Ghi_chu: 5,
			Ghim_tren_dong_thoi_gian: 10260,
			Gia_tri_Tuy_chon_Da_lua_chon: 9912,
			Giai_doan_cua_Quy_trinh: 4724,
			Giai_phap: 7100,
			Giao_dich_quy_trinh: 4710,
			Giay_goi_cho_ngay_le: 9996,
			Giay_phep: 2027,
			Goi_phan_bo_tro: 10030,
			Goi_y_Tai_lieu: 1189,
			Ham_bam_Email: 4023,
			Hang_doi: 2020,
			Hang_doi_cong_viec: 10088,
			Hanh_dong_ung_dung: 10248,
			Hien_thi_truc_quan_bao_cao: 9103,
			Hinh_anh_buoc_xu_ly_thong_bao_sdk: 4615,
			Hinh_anh_may_trong_dong_quy_trinh: 10084,
			Ho_so_Mang_xa_hoi: 99,
			Ho_so_quyen_doi_voi_cot: 10319,
			Hoat_dong: 4200,
			Hoat_dong_Khong_dong_bo_Sieu_du_lieu_cua_Mo_dun_Ung_dung: 8702,
			Hoat_dong_khong_dong_bo_sieu_du_lieu_theo_giai_doan: 10021,
			Hoat_dong_mang_xa_hoi: 4216,
			Hop_thu: 9606,
			Insights_Store_Data_Source: 10243,
			Insights_Store_Virtual_Entity: 10244,
			Integrated_search_provider: 10188,
			Ket_noi: 3234,
			Ket_noi_Dich_vu_Azure: 9936,
			Ket_qua_Phan_tich: 10280,
			Key_Vault_Reference: 10022,
			Khac_biet_Sieu_du_lieu: 4231,
			Kho_noi_dung_gui_toi_goi: 10360,
			Khoa_Thuc_the: 9810,
			Khoa_Xu_ly_Lien_dong: 4011,
			Khong_gian_lam_viec_Data_Lake: 10038,
			Kiem_tra: 4567,
			Knowledge_Article_Attachment: 10199,
			Knowledge_Article_Image: 10193,
			Knowledge_article_language_setting: 10198,
			Knowledge_Article_Template: 10201,
			Knowledge_Asset_Configuration: 10176,
			Knowledge_Configuration: 10194,
			Knowledge_Federated_Article: 10190,
			Knowledge_Federated_Article_Incident: 10191,
			Knowledge_Interaction_Insight: 10195,
			Knowledge_Management_Setting: 10189,
			Knowledge_personalization: 10200,
			Knowledge_search_filter: 10203,
			Knowledge_Search_Insight: 10196,
			Knowledge_search_personal_filter_config: 10202,
			Ky_hieu_mo_ta_Hinh_anh: 1007,
			Lenh_tren_ruy_bang: 1116,
			Lich: 4003,
			Lich_PM: 10266,
			Lich_su_Giai_phap: 10004,
			Lich_su_phan_tich_PM: 10264,
			Lich_Tai_chinh_Hang_thang: 2003,
			Lich_Tai_chinh_Hang_thang_Co_dinh: 2004,
			Lich_tai_chinh_nguoi_dung: 1086,
			Lich_tai_khoa_hang_quy: 2002,
			Lich_tai_khoa_sau_thang: 2001,
			Lich_Tai_khoa_Thuong_nien: 2000,
			Lien_ket_bao_cao: 9104,
			Lien_ket_dau_vet: 8051,
			Lien_ket_Muc_Cau_hinh_Mobile_Offline: 9868,
			Lien_ket_web: 10338,
			Loai_bo_tro: 4602,
			Loai_The_Hanh_dong: 9983,
			Loai_tien: 9105,
			LocalConfigStore: 9201,
			Loi_dong_bo: 9869,
			Loi_moi: 10309,
			Loi_tat: 10331,
			Loi_Xoa_Hang_loat: 4425,
			Lop_Thanh_phan: 10006,
			Ma_loai_doi_tuong_quyen: 31,
			Ma_Loai_Doi_tuong_Vai_tro_Ket_noi: 3233,
			MainFewShot: 10291,
			MakerFewShot: 10292,
			Managed_Identity: 10023,
			Mang_may_trong_dong_quy_trinh: 10086,
			Mau_Bai_viet: 1016,
			Mau_Bo_loc: 30,
			Mau_email: 2010,
			Mau_nhom: 92,
			Mau_PM: 10275,
			Mau_quy_trinh_PM: 10270,
			Mau_Tai_lieu: 9940,
			Mau_Tai_lieu_Ca_nhan: 9941,
			Mau_trang: 10325,
			Mau_Tron_Thu: 9106,
			Mau_vai_tro: 1037,
			Mau_web: 10346,
			May_chu_Uy_quyen: 1094,
			May_khach_dang_ky: 1072,
			May_trong_dong_quy_trinh: 10082,
			MetadataForArchival: 10230,
			Microsoft_Entra_ID: 10018,
			Mo_dun_dong_man_hinh_nen: 10078,
			Mo_hinh_Phe_duyet_Hanh_dong: 10093,
			Mo_hinh_Tim_kiem_trong_Co_so_kien_thuc: 9947,
			Mo_phong_PM: 10274,
			Mobile_App: 10242,
			MobileOfflineProfileExtension: 10214,
			MobileOfflineProfileItemFilter: 10215,
			Module_Run_Detail: 10177,
			Moi_quan_he_cua_Thuc_the: 9811,
			Moi_quan_he_Khach_hang: 4502,
			Muc_ben_ngoai: 9987,
			Muc_Cau_hinh_Mobile_Offline: 9867,
			Muc_nhap_Dong_bo_hoa_Dang_ky_Ngoai_tuyen: 47,
			Muc_nhap_Dong_bo_hoa_Dang_ky_Outlook: 48,
			Muc_quy_tac: 8199,
			Muc_quy_tac_cau_hinh_truy_cap_kenh: 9401,
			Muc_quy_tac_tao_va_cap_nhat_ban_ghi: 9301,
			Muc_SLA: 9751,
			Muc_tieu: 9600,
			Muc_trang_thai_the: 10254,
			Muc_trong_hang_doi: 2029,
			Muc_trong_hang_doi_cong_viec: 10089,
			MultiEntitySearch: 9910,
			Ngon_ngu: 9957,
			Ngon_ngu_cua_website: 10345,
			Ngon_ngu_trang_web: 10304,
			Nguoi_dung: 8,
			Nguoi_lien_he: 2,
			Nguon_Du_lieu_Lich_su_Giai_phap: 10005,
			Nguon_Du_lieu_Lop_Thanh_phan: 10007,
			Nguon_du_lieu_OData_v4: 10075,
			Nguon_du_lieu_phien_ban_thanh_phan: 10050,
			Nguon_Du_lieu_Thuc_the_Ao: 85,
			Nguon_du_lieu_trinh_ket_noi_ao: 10261,
			Nguon_luc_MS_Graph_voi_goi_dang_ky: 10210,
			Nha_cung_cap_Du_lieu_Thuc_the_Ao: 78,
			Nha_phat_hanh: 7101,
			Nhan_Ban_dia_hoa_Du_lieu_Doanh_nghiep: 4232,
			Nhan_xet_10165: 10165,
			Nhan_xet_8005: 8005,
			Nhan_xet_Cong_thong_tin: 10311,
			Nhan_xet_ve_Bai_viet: 1082,
			Nhap_Du_lieu: 4413,
			Nhat_ky_Nhap: 4423,
			Nhat_ky_Power_Pages: 10354,
			Nhat_ky_quy_trinh: 4706,
			Nhat_ky_Truy_vet_Phan_bo_tro: 4619,
			Nhiem_vu: 4212,
			Nhom: 9,
			Nhom_boi_canh_ruy_bang: 1115,
			Nhom_may_trong_dong_quy_trinh: 10083,
			Nhom_Thuoc_tinh_Kenh: 1234,
			NL2SQ_Registration_Information: 5004,
			NonRelational_Data_Source: 10031,
			Nut_Quan_he_phu_thuoc: 7106,
			Nut_thanh_phan_ung_dung_dua_tren_mo_hinh: 10063,
			OptionSet: 9809,
			OrganizationDataSyncFnoState: 10221,
			OrganizationDataSyncState: 10222,
			OrganizationDataSyncSubscription: 10218,
			OrganizationDataSyncSubscriptionEntity: 10219,
			OrganizationDataSyncSubscriptionFnoTable: 10220,
			Package: 10008,
			Package_History: 10009,
			Phan_cong_nguon_luc_cho_dong_quy_trinh: 10079,
			Phan_dinh_kem_tep_hoat_dong: 10184,
			Phan_hoi: 9958,
			Phan_hoi_Phe_duyet: 10096,
			Phan_hoi_thong_bao_sdk: 4610,
			Phe_duyet: 10094,
			Phe_duyet_Flow: 10101,
			Phien_ban_Cau_hinh_Ung_dung: 9013,
			Phien_ban_Dong_Quy_trinh_Cong_viec: 4725,
			Phien_ban_hinh_anh_may_trong_dong_quy_trinh: 10085,
			Phien_ban_lich_PM: 10267,
			Phien_ban_quy_trinh_PM: 10272,
			Phien_ban_sieu_du_lieu_mo_rong_cho_quy_trinh_PM: 10269,
			Phien_ban_SLA_KPI: 9752,
			Phien_ban_thanh_phan: 10049,
			Phien_ban_thanh_phan_Noi_bo: 10051,
			Phien_bieu_mau_nhieu_buoc: 10313,
			Phien_dong: 4720,
			Planner_Business_Scenario: 10208,
			Planner_Sync_Action: 10209,
			powerbidatasetapdx: 10286,
			powerbireportapdx: 10289,
			PowerfxRule: 10207,
			PrincipalEntityBusinessUnitMap: 61,
			Privilege_Checker_Log: 76,
			Privilege_Checker_Run: 75,
			Privileges_Removal_Setting: 103,
			ProvisionLanguageForUser: 10032,
			Quan_he_phu_thuoc: 7105,
			Quan_he_phu_thuoc_khong_hop_le: 7107,
			Quan_he_phu_thuoc_quy_trinh: 4704,
			Quan_he_phu_thuoc_Sieu_du_lieu_AppModule: 8701,
			QueueItemCount: 2023,
			QueueMemberCount: 2024,
			Quy_doi_Loi_moi: 10310,
			Quy_tac_Cau_hinh_Truy_cap_Kenh: 9400,
			Quy_tac_chuyen_tiep_trang_thai_phat_hanh: 10329,
			Quy_tac_hanh_dong_ung_dung: 10250,
			Quy_tac_He_thong_cap_bac: 8840,
			Quy_tac_kiem_soat_quyen_truy_cap_trang_web: 10341,
			Quy_tac_lap_lai: 4250,
			Quy_tac_Lich: 4004,
			Quy_tac_mui_gio: 4811,
			Quy_tac_Phat_hien_Su_trung_lap: 4414,
			Quy_tac_ruy_bang: 1117,
			Quy_tac_tao_va_cap_nhat_ban_ghi: 9300,
			Quy_tac_Tinh_trang_Giai_phap: 10282,
			Quy_tac_Tuong_tu: 9951,
			Quy_tac_Tuong_tu_Nang_cao: 9949,
			Quy_trinh: 4703,
			Quy_trinh_da_het_han: 955,
			Quy_trinh_Dich_thuat: 951,
			Quy_trinh_moi: 950,
			Quyen: 1023,
			Quyen_cua_Truong: 1201,
			Quyen_doi_voi_bang: 10324,
			Quyen_doi_voi_cot: 10318,
			Quyen_trong_Khong_gian_lam_viec_Data_Lake: 10039,
			Quyen_trong_Thu_muc_Data_Lake: 10037,
			Recently_Used: 5000,
			ReconciliationEntityInfo: 10231,
			ReconciliationEntityStepInfo: 10232,
			ReconciliationInfo: 10233,
			Record_Filter: 72,
			Report_Parameter: 10213,
			Restore_Deleted_Records_Configuration: 10247,
			RetainedData_Excel: 10042,
			RetentionCleanupInfo: 10234,
			RetentionCleanupOperation: 10235,
			RetentionConfig: 10236,
			RetentionFailureDetail: 10237,
			RetentionOperation: 10238,
			RetentionOperationDetail: 10239,
			RevokeInheritedAccessRecordsTracker: 10059,
			RoleEditorLayout: 10245,
			RuntimeDependency: 7200,
			Ruy_bang_ung_dung: 1120,
			Salesforce_Structured_Object: 10178,
			Salesforce_Structured_QnA_Config: 10179,
			Schedule: 10169,
			Search_provider: 10192,
			Search_Telemetry: 10297,
			SearchAttributeSettings: 10293,
			SearchCustomAnalyzer: 10294,
			SearchRelationshipSettings: 10295,
			SearchResultsCache: 10296,
			Secured_Masking_Column: 9820,
			Secured_Masking_Rule: 74,
			Service_Configuration: 10186,
			Service_Plan: 101,
			Service_Plan_Custom_Control: 10070,
			Service_Plan_Mapping: 10069,
			Shared_Link_Setting: 10054,
			Shared_Object: 10033,
			Shared_Workspace: 10034,
			Shared_Workspace_Pool: 10035,
			SideloadedAIPlugin: 10125,
			Sieu_du_lieu_AppModule: 8700,
			Sieu_du_lieu_bieu_mau_co_ban: 10322,
			Sieu_du_lieu_bieu_mau_nhieu_buoc: 10336,
			Sieu_du_lieu_May_khach_trong_Ruy_bang: 4579,
			Sieu_du_lieu_Ruy_bang_de_Xu_ly: 9880,
			Sieu_du_lieu_thuc_the_ao: 10211,
			Sieu_du_lieu_ung_dung_he_thong: 7000,
			Sieu_du_lieu_ung_dung_nguoi_dung: 7001,
			Site_Power_Pages_da_xuat_ban: 10305,
			SLA_KPI: 10187,
			So_do_Thuc_the: 4600,
			So_do_trang_web: 4709,
			So_lieu_Hieu_biet_To_chuc: 9699,
			So_lieu_Muc_tieu: 9603,
			SocialInsightsConfiguration: 1300,
			Solution_Component_Count_Data_Source: 10017,
			Solution_Component_Count_Summary: 10015,
			Solution_Component_Data_Source: 10016,
			Solution_Component_Summary: 10014,
			SolutionHistoryData: 9890,
			StageSolutionUpload: 10011,
			Su_kien_trong_quy_trinh: 10081,
			Su_kien_trong_Trinh_mo_rong: 4711,
			SuggestionCardTemplate: 1190,
			SupportUserTable: 10205,
			Synapse_Link_External_Table_State: 10044,
			Synapse_Link_Profile: 10045,
			Synapse_Link_Profile_Entity: 10046,
			Synapse_Link_Profile_Entity_State: 10047,
			Synapse_Link_Schedule: 10048,
			SystemUserAuthorizationChangeTracker: 60,
			Tac_vu_duoc_suy_luan_PM: 10268,
			Tai_khoan: 1,
			Tai_lieu_Office: 4490,
			Tai_lieu_Office_Graph: 9950,
			Tai_lieu_SharePoint: 9507,
			Tai_nguyen_dieu_khien_tuy_chinh: 9754,
			Tai_nguyen_web: 9333,
			Tap_du_lieu_Power_BI: 10285,
			TdsMetadata: 10060,
			TeamMobileOfflineProfileMembership: 10216,
			Ten_da_ban_dia_hoa_mui_gio: 4812,
			Tep_dinh_kem_1001: 1001,
			Tep_dinh_kem_1002: 1002,
			Tep_dinh_kem_van_ban_nhieu_dinh_dang: 10258,
			Tep_Excel_da_xuat: 10041,
			Tep_gui_toi_danh_muc: 10359,
			Tep_Nguon_Nhap: 4412,
			Tep_Ung_dung: 4707,
			Tep_web: 10334,
			Tham_chieu_ket_noi: 10110,
			Tham_so_giai_doan_quy_trinh: 10087,
			Tham_so_phan_mem_ghep_Power_BI: 10287,
			Tham_so_yeu_cau_API_tuy_chinh: 10028,
			Thanh_phan_Copilot: 10153,
			Thanh_phan_giai_phap: 7103,
			Thanh_phan_Mo_dun_Ung_dung: 9007,
			Thanh_phan_Phan_tich: 10277,
			Thanh_phan_trang_web: 10302,
			Thanh_phan_Ung_dung_dua_tren_Mo_hinh: 10061,
			Thao_tac_Xoa_Hang_loat: 4424,
			Thay_the_phan_tich: 10279,
			The: 10253,
			The_Hanh_dong: 9962,
			The_loai: 9959,
			The_loai_bai_viet_trong_co_so_kien_thuc: 9960,
			The_loai_lien_quan_cua_bao_cao: 9102,
			The_loai_Theo_doi_Hop_thu: 9609,
			Theo_doi: 8003,
			Thich: 8006,
			Thiet_dat: 10312,
			Thiet_dat_Dieu_huong: 9900,
			Thiet_dat_mo_rong_cho_doi_tuong_dieu_khien_tuy_chinh: 10259,
			Thiet_dat_nguoi_dung: 150,
			Thiet_dat_nguoi_dung_cho_quy_trinh_PM: 10271,
			Thiet_dat_Nguoi_dung_The_Hanh_dong: 9973,
			Thiet_dat_nguoi_dung_ung_dung_dua_tren_mo_hinh: 10065,
			Thiet_dat_PDF: 10183,
			Thiet_dat_to_chuc: 10066,
			Thiet_dat_trang: 10333,
			Thiet_dat_UI_thuc_the_nguoi_dung: 2500,
			Thiet_dat_ung_dung_dua_tren_mo_hinh: 10064,
			Thoa_thuan_Cap_do_Dich_vu: 9750,
			Thong_bao_10240: 10240,
			Thong_bao_132: 132,
			Thong_bao_4110: 4110,
			Thong_bao_Hieu_biet_To_chuc: 9690,
			Thong_bao_sdk: 4606,
			Thong_ke_Dang_ky_Ngoai_tuyen: 45,
			Thong_ke_Dang_ky_Outlook: 46,
			Thong_ke_Hop_thu: 9607,
			Thong_ke_loai_bo_tro: 4603,
			Thong_ke_ve_to_chuc: 4708,
			Thong_tin_dong_bo_dang_ky: 33,
			Thong_tin_theo_doi_thuc_the_da_xoa: 35,
			Thong_tin_xac_thuc: 10077,
			Thu_muc_Data_Lake: 10036,
			Thu_muc_Tu_dong_Theo_doi_Hop_thu: 9608,
			Thu_tin: 4207,
			Thuc_the: 9800,
			Thuc_the_lien_quan_cua_bao_cao: 9101,
			Thuc_the_moi_quan_he: 9813,
			Thuc_the_theo_giai_doan: 10019,
			Thuoc_tinh: 9808,
			Thuoc_tinh_chi_muc: 9816,
			Thuoc_tinh_Duoc_quan_ly: 9812,
			Thuoc_tinh_Kenh: 1236,
			Thuoc_tinh_moi_quan_he: 9814,
			Thuoc_tinh_phan_hoi_API_tuy_chinh: 10029,
			Thuoc_tinh_thuc_the_theo_giai_doan: 10020,
			Thuoc_tinh_Tim_kiem_Nguoi_dung: 52,
			Thuoc_tinh_tong_so: 9510,
			Tim_kiem_Email: 4299,
			To_chuc: 1019,
			Ton_dong_sao_chep: 1140,
			Tong_the_Cau_hinh_Ung_dung: 9011,
			Trang_SharePoint: 9502,
			Trang_thai_Cap_ngon_ngu: 9875,
			Trang_thai_phat_hanh: 10328,
			Trang_thai_Tich_hop: 3000,
			Trang_trinh_huong_dan: 4802,
			Trang_Tro_giup: 10148,
			Trang_web_10303: 10303,
			Trang_web_10340: 10340,
			Trinh_huong_dan_web: 4800,
			Trinh_ket_noi: 372,
			Tro_chuyen_qua_Teams: 10185,
			Truong_phan_hoi_thong_bao_sdk: 4611,
			Truong_tong_so: 9604,
			Truong_yeu_cau_thong_bao_sdk: 4614,
			Truy_cap_website: 10344,
			Truy_van_Tinh_tong_so: 9602,
			Truy_vet_co_lien_quan: 8052,
			Tuong_tac_doi_voi_Email: 9986,
			Tuyen_tap_thanh_phan_copilot: 10154,
			UI_to_chuc: 1021,
			Ung_dung_Bang_tuy_bien: 300,
			Ung_dung_dinh_huong_mo_hinh: 9006,
			Ung_dung_doi_tac: 1095,
			Ung_dung_thong_tin_xac_thuc_dong_quy_trinh: 10080,
			Ung_vien_cot_bang_ao: 10262,
			UntrackedEmail: 4220,
			UserMobileOfflineProfileMembership: 10217,
			Vai_tro_bai_dang: 8001,
			Vai_tro_bao_mat: 1036,
			Vai_tro_cua_moi_quan_he: 4500,
			Vai_tro_Ket_noi: 3231,
			Vai_tro_Mo_dun_Ung_dung: 9009,
			Vai_tro_web: 10342,
			Vi_tri: 50,
			Vi_tri_quang_cao: 10317,
			Vi_tri_tai_lieu: 9508,
			Vi_tri_tham_do_y_kien: 10326,
			ViewAsExampleQuestion: 10298,
			Vung_lanh_tho: 2013,
			Website: 10343,
			Workflow_Action_Status: 10180,
			Xep_hang_nguoi_dung: 10241,
			Yeu_cau_Phe_duyet: 10095,
			Yeu_cau_thong_bao_sdk: 4609
		},
		SLAType : {
			Chuan: 0,
			Nang_cao: 1
		},
		slaversion : {
			Version_UC: 100000001,
			Version_WC: 100000000
		},
		StateCode : {
			Ban_nhap: 0,
			Hien_hoat: 1
		},
		StatusCode : {
			Ban_nhap: 1,
			Hien_hoat: 2
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