'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ConnectionApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _connection = {
			ConnectionId: { a: 'connectionid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			EffectiveEnd_UtcDateOnly: { a: 'effectiveend' },
			EffectiveStart_UtcDateOnly: { a: 'effectivestart' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsMaster: { a: 'ismaster', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			record1id_account: { b: 'record1id_account', a: '_record1id_value', c: 'accounts', d: 'account' },
			record1id_activitypointer: { b: 'record1id_activitypointer', a: '_record1id_value', c: 'activitypointers', d: 'activitypointer' },
			record1id_adx_invitation: { b: 'record1id_adx_invitation', a: '_record1id_value', c: 'adx_invitations', d: 'adx_invitation' },
			record1id_adx_inviteredemption: { b: 'record1id_adx_inviteredemption', a: '_record1id_value', c: 'adx_inviteredemptions', d: 'adx_inviteredemption' },
			record1id_appointment: { b: 'record1id_appointment', a: '_record1id_value', c: 'appointments', d: 'appointment' },
			profileruleid1: { b: 'profileruleid1', a: '_record1id_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			record1id_contact: { b: 'record1id_contact', a: '_record1id_value', c: 'contacts', d: 'contact' },
			record1id_email: { b: 'record1id_email', a: '_record1id_value', c: 'emails', d: 'email' },
			record1id_fax: { b: 'record1id_fax', a: '_record1id_value', c: 'faxes', d: 'fax' },
			record1id_goal: { b: 'record1id_goal', a: '_record1id_value', c: 'goals', d: 'goal' },
			record1id_knowledgearticle: { b: 'record1id_knowledgearticle', a: '_record1id_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			record1id_knowledgebaserecord: { b: 'record1id_knowledgebaserecord', a: '_record1id_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			record1id_letter: { b: 'record1id_letter', a: '_record1id_value', c: 'letters', d: 'letter' },
			record1id_mspp_publishingstatetransitionrule: { b: 'record1id_mspp_publishingstatetransitionrule', a: '_record1id_value', c: 'mspp_publishingstatetransitionrules', d: 'mspp_publishingstatetransitionrule' },
			record1id_mspp_shortcut: { b: 'record1id_mspp_shortcut', a: '_record1id_value', c: 'mspp_shortcuts', d: 'mspp_shortcut' },
			record1id_mspp_website: { b: 'record1id_mspp_website', a: '_record1id_value', c: 'mspp_websites', d: 'mspp_website' },
			record1id_phonecall: { b: 'record1id_phonecall', a: '_record1id_value', c: 'phonecalls', d: 'phonecall' },
			record1id_position: { b: 'record1id_position', a: '_record1id_value', c: 'positions', d: 'position' },
			record1id_processsession: { b: 'record1id_processsession', a: '_record1id_value', c: 'processsessions', d: 'processsession' },
			record1id_recurringappointmentmaster: { b: 'record1id_recurringappointmentmaster', a: '_record1id_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			record1id_socialactivity: { b: 'record1id_socialactivity', a: '_record1id_value', c: 'socialactivities', d: 'socialactivity' },
			record1id_socialprofile: { b: 'record1id_socialprofile', a: '_record1id_value', c: 'socialprofiles', d: 'socialprofile' },
			record1id_systemuser: { b: 'record1id_systemuser', a: '_record1id_value', c: 'systemusers', d: 'systemuser' },
			record1id_task: { b: 'record1id_task', a: '_record1id_value', c: 'tasks', d: 'task' },
			record1id_team: { b: 'record1id_team', a: '_record1id_value', c: 'teams', d: 'team' },
			record1id_territory: { b: 'record1id_territory', a: '_record1id_value', c: 'territories', d: 'territory' },
			Record1ObjectTypeCode: { a: 'record1objecttypecode', r: true },
			Record1RoleId: { b: 'record1roleid', a: '_record1roleid_value', c: 'connectionroles', d: 'connectionrole' },
			record2id_account: { b: 'record2id_account', a: '_record2id_value', c: 'accounts', d: 'account' },
			record2id_activitypointer: { b: 'record2id_activitypointer', a: '_record2id_value', c: 'activitypointers', d: 'activitypointer' },
			record2id_adx_invitation: { b: 'record2id_adx_invitation', a: '_record2id_value', c: 'adx_invitations', d: 'adx_invitation' },
			record2id_adx_inviteredemption: { b: 'record2id_adx_inviteredemption', a: '_record2id_value', c: 'adx_inviteredemptions', d: 'adx_inviteredemption' },
			record2id_appointment: { b: 'record2id_appointment', a: '_record2id_value', c: 'appointments', d: 'appointment' },
			channelaccessprofileruleid: { b: 'channelaccessprofileruleid', a: '_record2id_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			record2id_contact: { b: 'record2id_contact', a: '_record2id_value', c: 'contacts', d: 'contact' },
			record2id_email: { b: 'record2id_email', a: '_record2id_value', c: 'emails', d: 'email' },
			record2id_fax: { b: 'record2id_fax', a: '_record2id_value', c: 'faxes', d: 'fax' },
			record2id_goal: { b: 'record2id_goal', a: '_record2id_value', c: 'goals', d: 'goal' },
			record2id_knowledgearticle: { b: 'record2id_knowledgearticle', a: '_record2id_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			record2id_knowledgebaserecord: { b: 'record2id_knowledgebaserecord', a: '_record2id_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			record2id_letter: { b: 'record2id_letter', a: '_record2id_value', c: 'letters', d: 'letter' },
			record2id_mspp_publishingstatetransitionrule: { b: 'record2id_mspp_publishingstatetransitionrule', a: '_record2id_value', c: 'mspp_publishingstatetransitionrules', d: 'mspp_publishingstatetransitionrule' },
			record2id_mspp_shortcut: { b: 'record2id_mspp_shortcut', a: '_record2id_value', c: 'mspp_shortcuts', d: 'mspp_shortcut' },
			record2id_mspp_website: { b: 'record2id_mspp_website', a: '_record2id_value', c: 'mspp_websites', d: 'mspp_website' },
			record2id_phonecall: { b: 'record2id_phonecall', a: '_record2id_value', c: 'phonecalls', d: 'phonecall' },
			record2id_position: { b: 'record2id_position', a: '_record2id_value', c: 'positions', d: 'position' },
			record2id_processsession: { b: 'record2id_processsession', a: '_record2id_value', c: 'processsessions', d: 'processsession' },
			record2id_recurringappointmentmaster: { b: 'record2id_recurringappointmentmaster', a: '_record2id_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			record2id_socialactivity: { b: 'record2id_socialactivity', a: '_record2id_value', c: 'socialactivities', d: 'socialactivity' },
			record2id_socialprofile: { b: 'record2id_socialprofile', a: '_record2id_value', c: 'socialprofiles', d: 'socialprofile' },
			record2id_systemuser: { b: 'record2id_systemuser', a: '_record2id_value', c: 'systemusers', d: 'systemuser' },
			record2id_task: { b: 'record2id_task', a: '_record2id_value', c: 'tasks', d: 'task' },
			record2id_team: { b: 'record2id_team', a: '_record2id_value', c: 'teams', d: 'team' },
			record2id_territory: { b: 'record2id_territory', a: '_record2id_value', c: 'territories', d: 'territory' },
			Record2ObjectTypeCode: { a: 'record2objecttypecode', r: true },
			Record2RoleId: { b: 'record2roleid', a: '_record2roleid_value', c: 'connectionroles', d: 'connectionrole' },
			RelatedConnectionId: { b: 'relatedconnectionid', a: '_relatedconnectionid_value', c: 'connections', d: 'connection', r: true },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var connection = {};
		connection.ODataEntity = e;
		connection.FormattedValue = {};
		for (var field in _connection) {
			var a = _connection[field].a;
			var b = _connection[field].b;
			var c = _connection[field].c;
			var d = _connection[field].d;
			var g = _connection[field].g;
			var r = _connection[field].r;
			webApiField(connection, field, e, a, b, c, d, r, u, g);
		}
		connection.Entity = u;
		connection.EntityName = 'connection';
		connection.EntityCollectionName = 'connections';
		connection['@odata.etag'] = e['@odata.etag'];
		connection.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		connection.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return connection;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Connection = {
		Record1IdObjectTypeCode : {
		},
		Record1ObjectTypeCode : {
			Bai_viet_trong_co_so_kien_thuc: 9953,
			Ban_ghi_co_so_kien_thuc: 9930,
			Cuoc_goi_dien_thoai: 4210,
			Cuoc_hen: 4201,
			Cuoc_hen_lap_lai: 4251,
			Email: 4202,
			Fax: 4204,
			Giao_dich_quy_trinh: 4710,
			Ho_so_Mang_xa_hoi: 99,
			Hoat_dong: 4200,
			Hoat_dong_mang_xa_hoi: 4216,
			Loi_moi: 10309,
			Loi_tat: 10331,
			Muc_tieu: 9600,
			Nguoi_dung: 8,
			Nguoi_lien_he: 2,
			Nhiem_vu: 4212,
			Nhom: 9,
			Quy_doi_Loi_moi: 10310,
			Quy_tac_Cau_hinh_Truy_cap_Kenh: 9400,
			Quy_tac_chuyen_tiep_trang_thai_phat_hanh: 10329,
			Tai_khoan: 1,
			Thu_tin: 4207,
			Vi_tri: 50,
			Vung_lanh_tho: 2013,
			Website: 10343
		},
		Record2IdObjectTypeCode : {
		},
		Record2ObjectTypeCode : {
			Bai_viet_trong_co_so_kien_thuc: 9953,
			Ban_ghi_co_so_kien_thuc: 9930,
			Cuoc_goi_dien_thoai: 4210,
			Cuoc_hen: 4201,
			Cuoc_hen_lap_lai: 4251,
			Email: 4202,
			Fax: 4204,
			Giao_dich_quy_trinh: 4710,
			Ho_so_Mang_xa_hoi: 99,
			Hoat_dong: 4200,
			Hoat_dong_mang_xa_hoi: 4216,
			Loi_moi: 10309,
			Loi_tat: 10331,
			Muc_tieu: 9600,
			Nguoi_dung: 8,
			Nguoi_lien_he: 2,
			Nhiem_vu: 4212,
			Nhom: 9,
			Quy_doi_Loi_moi: 10310,
			Quy_tac_Cau_hinh_Truy_cap_Kenh: 9400,
			Quy_tac_chuyen_tiep_trang_thai_phat_hanh: 10329,
			Tai_khoan: 1,
			Thu_tin: 4207,
			Vi_tri: 50,
			Vung_lanh_tho: 2013,
			Website: 10343
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
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