'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_cannedmessageApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var property = {};
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return EMPTY_STRING;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return EMPTY_STRING;
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
					value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(property, 'FormattedValue', {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(property, 'Value', {
					get: getValue
				});
			}
			else {
				Object.defineProperty(property, 'Value', {
					get: getValue,
					set: setValue
				});
			}
			return property;
		}
		var msdyn_cannedmessage = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_cannedmessageId: { a: 'msdyn_cannedmessageid' },
			msdyn_Locale_Field: { a: 'msdyn_locale_field' },
			msdyn_message: { a: 'msdyn_message' },
			msdyn_tagscontrolfield: { a: 'msdyn_tagscontrolfield' },
			msdyn_title: { a: 'msdyn_title' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_cannedmessage) {
			var a = msdyn_cannedmessage[field].a;
			var b = msdyn_cannedmessage[field].b;
			var c = msdyn_cannedmessage[field].c;
			var d = msdyn_cannedmessage[field].d;
			var g = msdyn_cannedmessage[field].g;
			var r = msdyn_cannedmessage[field].r;
			msdyn_cannedmessage[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_cannedmessage.Entity = u;
		msdyn_cannedmessage.EntityName = 'msdyn_cannedmessage';
		msdyn_cannedmessage.EntityCollectionName = 'msdyn_cannedmessages';
		msdyn_cannedmessage['@odata.etag'] = e['@odata.etag'];
		msdyn_cannedmessage.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_cannedmessage.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_cannedmessage;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.msdyn_cannedmessage = {
			msdyn_Locale_Field : {
				arSA: 1025,
				bgBG: 1026,
				caES: 1027,
				csCZ: 1029,
				daDK: 1030,
				deDE: 1031,
				elGR: 1032,
				enUS: 1033,
				esES: 3082,
				etEE: 1061,
				euES: 1069,
				fiFI: 1035,
				frFR: 1036,
				glES: 1110,
				heIL: 1037,
				hiIN: 1081,
				hrHR: 1050,
				huHU: 1038,
				idID: 1057,
				itIT: 1040,
				jaJP: 1041,
				kkKZ: 1087,
				koKR: 1042,
				ltLT: 1063,
				lvLV: 1062,
				msMY: 1086,
				nbNO: 1044,
				nlNL: 1043,
				plPL: 1045,
				ptBR: 1046,
				ptPT: 2070,
				roRO: 1048,
				ruRU: 1049,
				skSK: 1051,
				slSI: 1060,
				srCyrlCS: 3098,
				svSE: 1053,
				thTH: 1054,
				trTR: 1055,
				ukUA: 1058,
				viVN: 1066,
				zhCN: 2052,
				zhHK: 3076,
				zhTW: 1028
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