'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.botcomponentApi = function (e) {
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
		var _botcomponent = {
			AccentColor: { a: 'accentcolor' },
			botcomponentId: { a: 'botcomponentid' },
			Category: { a: 'category' },
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			ComponentType: { a: 'componenttype' },
			Content: { a: 'content' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Data: { a: 'data' },
			Description: { a: 'description' },
			FileData_name: { a: 'filedata', r: true },
			HelpLink: { a: 'helplink' },
			IconUrl: { a: 'iconurl' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			Language: { a: 'language' },
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
			ParentBotComponentCollectionId: { b: 'ParentBotComponentCollectionId', a: '_parentbotcomponentcollectionid_value', c: 'botcomponentcollections', d: 'botcomponentcollection' },
			ParentBotComponentId: { b: 'ParentBotComponentId', a: '_parentbotcomponentid_value', c: 'botcomponents', d: 'botcomponent' },
			ParentBotId: { b: 'ParentBotId', a: '_parentbotid_value', c: 'bots', d: 'bot' },
			ReusePolicy: { a: 'reusepolicy' },
			SchemaName: { a: 'schemaname' },
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
		var botcomponent = {};
		botcomponent.ODataEntity = e;
		botcomponent.FormattedValue = {};
		for (var field in _botcomponent) {
			var a = _botcomponent[field].a;
			var b = _botcomponent[field].b;
			var c = _botcomponent[field].c;
			var d = _botcomponent[field].d;
			var g = _botcomponent[field].g;
			var r = _botcomponent[field].r;
			webApiField(botcomponent, field, e, a, b, c, d, r, u, g);
		}
		botcomponent.Entity = u;
		botcomponent.EntityName = 'botcomponent';
		botcomponent.EntityCollectionName = 'botcomponents';
		botcomponent['@odata.etag'] = e['@odata.etag'];
		botcomponent.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		botcomponent.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return botcomponent;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.botcomponent = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		ComponentType : {
			Ban_dich_bot_V2: 10,
			Bien_bot_V2: 12,
			Bien_so_bot: 2,
			Chu_de: 0,
			Chu_de_V2: 9,
			Dinh_kem_tep_bot: 14,
			GPT_tuy_chinh: 15,
			Hieu_ngon_ngu: 6,
			Hop_thoai: 4,
			Ky_nang: 1,
			Ky_nang_V2: 13,
			Luoc_do_hop_thoai: 8,
			Nguon_kien_thuc: 16,
			Tao_ngon_ngu: 7,
			Thuc_the_bot: 3,
			Thuc_the_bot_V2: 11,
			Trinh_kich_hoat: 5
		},
		Language : {
			Tieng_A_Rap: 1025,
			Tieng_Anh: 1033,
			Tieng_Anh_Australia: 3081,
			Tieng_Anh_Vuong_quoc_Anh: 2057,
			Tieng_Ba_Lan: 1045,
			Tieng_Bo_Dao_Nha_Brazil: 1046,
			Tieng_Dan_Mach: 1030,
			Tieng_Duc: 1031,
			Tieng_Ha_Lan: 1043,
			Tieng_Han: 1042,
			Tieng_Hindi: 1081,
			Tieng_Hy_Lap: 1032,
			Tieng_Indonesia: 1057,
			Tieng_Italy: 1040,
			Tieng_Na_Uy: 1044,
			Tieng_Nga: 1049,
			Tieng_Nhat: 1041,
			Tieng_Phan_Lan: 1035,
			Tieng_Phap: 1036,
			Tieng_Phap_Canada: 3084,
			Tieng_Sec: 1029,
			Tieng_Tay_Ban_Nha: 1034,
			Tieng_Tay_Ban_Nha_Hoa_Ky: 21514,
			Tieng_Thai: 1054,
			Tieng_Tho_Nhi_Ky: 1055,
			Tieng_Thuy_Dien: 1053,
			Tieng_Trung_Gian_the: 2052,
			Tieng_Trung_Phon_the: 1028
		},
		ReusePolicy : {
			Cong_khai: 2,
			Khong_co: 0,
			Rieng_tu: 1
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