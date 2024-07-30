'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.powerpagecomponentApi = function (e) {
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
		var _powerpagecomponent = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			content: { a: 'content' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			filecontent_name: { a: 'filecontent', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			powerpagecomponentId: { a: 'powerpagecomponentid' },
			powerpagecomponenttype: { a: 'powerpagecomponenttype' },
			powerpagesiteid: { b: 'powerpagesiteid', a: '_powerpagesiteid_value', c: 'powerpagesites', d: 'powerpagesite' },
			powerpagesitelanguageid: { b: 'powerpagesitelanguageid', a: '_powerpagesitelanguageid_value', c: 'powerpagesitelanguages', d: 'powerpagesitelanguage' },
			searchcontent: { a: 'searchcontent' },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var powerpagecomponent = {};
		powerpagecomponent.ODataEntity = e;
		powerpagecomponent.FormattedValue = {};
		for (var field in _powerpagecomponent) {
			var a = _powerpagecomponent[field].a;
			var b = _powerpagecomponent[field].b;
			var c = _powerpagecomponent[field].c;
			var d = _powerpagecomponent[field].d;
			var g = _powerpagecomponent[field].g;
			var r = _powerpagecomponent[field].r;
			webApiField(powerpagecomponent, field, e, a, b, c, d, r, u, g);
		}
		powerpagecomponent.Entity = u;
		powerpagecomponent.EntityName = 'powerpagecomponent';
		powerpagecomponent.EntityCollectionName = 'powerpagecomponents';
		powerpagecomponent['@odata.etag'] = e['@odata.etag'];
		powerpagecomponent.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		powerpagecomponent.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return powerpagecomponent;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.powerpagecomponent = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		powerpagecomponenttype : {
			Bieu_mau_co_ban: 15,
			Bieu_mau_nang_cao: 19,
			Bo_lien_ket_web: 4,
			Buoc_bieu_mau_nang_cao: 20,
			Chuyen_huong: 30,
			Cong_cu_danh_dau_trang: 13,
			Danh_sach: 17,
			Doan_noi_dung: 7,
			Dong_dam_may: 33,
			Ho_so_quyen_doi_voi_cot: 28,
			Lien_ket_web: 5,
			Loi_tat: 32,
			Mau_trang: 6,
			Mau_web: 8,
			Nguoi_tieu_dung_bot: 27,
			Quy_tac_chuyen_tiep_trang_thai_phat_hanh: 31,
			Quy_tac_kiem_soat_quyen_truy_cap_trang_web: 10,
			Quyen_doi_voi_bang: 18,
			Quyen_doi_voi_cot: 29,
			Sieu_du_lieu_bieu_mau_co_ban: 16,
			Sieu_du_lieu_bieu_mau_nang_cao: 21,
			Tep_web: 3,
			Thanh_phan_UX: 34,
			Thiet_dat_trang: 9,
			Trang_thai_phat_hanh: 1,
			Trang_web: 2,
			Truy_cap_website: 12,
			Vai_tro_web: 11,
			Vi_tri_quang_cao: 26,
			Vi_tri_tham_do_y_kien: 24
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
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