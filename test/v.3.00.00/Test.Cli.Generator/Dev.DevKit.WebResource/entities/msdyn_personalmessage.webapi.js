'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_personalmessageApi = function (e) {
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
		var _msdyn_personalmessage = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_locale_field: { a: 'msdyn_locale_field' },
			msdyn_message: { a: 'msdyn_message' },
			msdyn_personalmessageId: { a: 'msdyn_personalmessageid' },
			msdyn_tagscontrolfield: { a: 'msdyn_tagscontrolfield' },
			msdyn_title: { a: 'msdyn_title' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_personalmessage = {};
		msdyn_personalmessage.ODataEntity = e;
		msdyn_personalmessage.FormattedValue = {};
		for (var field in _msdyn_personalmessage) {
			var a = _msdyn_personalmessage[field].a;
			var b = _msdyn_personalmessage[field].b;
			var c = _msdyn_personalmessage[field].c;
			var d = _msdyn_personalmessage[field].d;
			var g = _msdyn_personalmessage[field].g;
			var r = _msdyn_personalmessage[field].r;
			webApiField(msdyn_personalmessage, field, e, a, b, c, d, r, u, g);
		}
		msdyn_personalmessage.Entity = u;
		msdyn_personalmessage.EntityName = 'msdyn_personalmessage';
		msdyn_personalmessage.EntityCollectionName = 'msdyn_personalmessages';
		msdyn_personalmessage['@odata.etag'] = e['@odata.etag'];
		msdyn_personalmessage.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_personalmessage.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_personalmessage;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_personalmessage = {
		msdyn_locale_field : {
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
			nb_NO: 1044,
			nl_NL: 1043,
			pl_PL: 1045,
			pt_BR: 1046,
			pt_PT: 2070,
			ro_RO: 1048,
			ru_RU: 1049,
			sk_SK: 1051,
			sr_Latn_CS: 2074,
			sv_SE: 1053,
			th_TH: 1054,
			tr_TR: 1055,
			zh_CN: 2052,
			zh_HK: 3076,
			zh_TW: 1028
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