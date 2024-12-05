'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ocrichobjectApi = function (e) {
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
		var _msdyn_ocrichobject = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_allowagenttoedit: { a: 'msdyn_allowagenttoedit' },
			msdyn_locale: { a: 'msdyn_locale' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_objectjson: { a: 'msdyn_objectjson' },
			msdyn_objectjsonfile_name: { a: 'msdyn_objectjsonfile', r: true },
			msdyn_ocrichobjectId: { a: 'msdyn_ocrichobjectid' },
			msdyn_ocrichobjecttype: { a: 'msdyn_ocrichobjecttype' },
			msdyn_streamsource: { a: 'msdyn_streamsource' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
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
		var msdyn_ocrichobject = {};
		msdyn_ocrichobject.ODataEntity = e;
		msdyn_ocrichobject.FormattedValue = {};
		for (var field in _msdyn_ocrichobject) {
			var a = _msdyn_ocrichobject[field].a;
			var b = _msdyn_ocrichobject[field].b;
			var c = _msdyn_ocrichobject[field].c;
			var d = _msdyn_ocrichobject[field].d;
			var g = _msdyn_ocrichobject[field].g;
			var r = _msdyn_ocrichobject[field].r;
			webApiField(msdyn_ocrichobject, field, e, a, b, c, d, r, u, g);
		}
		msdyn_ocrichobject.Entity = u;
		msdyn_ocrichobject.EntityName = 'msdyn_ocrichobject';
		msdyn_ocrichobject.EntityCollectionName = 'msdyn_ocrichobjects';
		msdyn_ocrichobject['@odata.etag'] = e['@odata.etag'];
		msdyn_ocrichobject.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ocrichobject.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ocrichobject;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocrichobject = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_locale : {
			ar_SA: 1025,
			bg_BG: 1026,
			ca_ES: 1027,
			cs_CZ: 1029,
			da_DK: 1030,
			de_DE: 1031,
			el_GR: 1032,
			en_US: 1033,
			es_ES: 3082,
			et_EE: 1061,
			eu_ES: 1069,
			fi_FI: 1035,
			fr_FR: 1036,
			gl_ES: 1110,
			he_IL: 1037,
			hi_IN: 1081,
			hr_HR: 1050,
			hu_HU: 1038,
			id_ID: 1057,
			it_IT: 1040,
			ja_JP: 1041,
			kk_KZ: 1087,
			ko_KR: 1042,
			lt_LT: 1063,
			lv_LV: 1062,
			ms_MY: 1086,
			nb_NO: 1044,
			nl_NL: 1043,
			pl_PL: 1045,
			pt_BR: 1046,
			pt_PT: 2070,
			ro_RO: 1048,
			ru_RU: 1049,
			sk_SK: 1051,
			sl_SI: 1060,
			sr_Cyrl_CS: 3098,
			sr_Latn_CS: 2074,
			sv_SE: 1053,
			th_TH: 1054,
			tr_TR: 1055,
			uk_UA: 1058,
			vi_VN: 1066,
			zh_CN: 2052,
			zh_HK: 3076,
			zh_TW: 1028
		},
		msdyn_ocrichobjecttype : {
			Apple_Pay: 192350006,
			Authentication: 192350007,
			Custom_JSON: 192350004,
			Forms: 192350009,
			List_Picker: 192350002,
			Suggested_Reply: 192350005,
			Time_Picker: 192350003,
			Video_Rich_Link: 192350001,
			Website_Rich_Link: 192350000
		},
		msdyn_streamsource : {
			Apple_Messages_for_Business: 192450000,
			Co_browse: 192390000,
			Custom: 192350002,
			Entity_Records: 192350000,
			Facebook: 192330000,
			Googles_Business_Messages: 192450001,
			LINE: 192310000,
			Live_chat: 192360000,
			Microsoft_Teams: 19241000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Twitter: 192350001,
			Video: 192380000,
			Voice: 192370000,
			Voice_call: 192440000,
			WeChat: 192320000,
			WhatsApp: 192300000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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