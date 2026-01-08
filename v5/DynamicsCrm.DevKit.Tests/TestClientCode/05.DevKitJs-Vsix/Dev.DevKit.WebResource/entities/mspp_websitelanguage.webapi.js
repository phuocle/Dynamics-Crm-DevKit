'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.mspp_websitelanguageApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _mspp_websitelanguage = {
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon', g: 'DateTime' },
			mspp_description: { a: 'mspp_description' },
			mspp_displayname: { a: 'mspp_displayname' },
			mspp_languagecode: { a: 'mspp_languagecode' },
			mspp_lcid: { a: 'mspp_lcid', g: 'Integer' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon', g: 'DateTime' },
			mspp_name: { a: 'mspp_name' },
			mspp_publishingstate: { b: 'mspp_publishingstate', a: '_mspp_publishingstate_value', c: 'mspp_publishingstates', d: 'mspp_publishingstate' },
			mspp_systemlanguage: { a: 'mspp_systemlanguage', g: 'Integer' },
			mspp_websiteid: { b: 'mspp_websiteid', a: '_mspp_websiteid_value', c: 'mspp_websites', d: 'mspp_website' },
			mspp_websitelanguageId: { a: 'mspp_websitelanguageid' },
			mspp_websitelcid: { a: 'mspp_websitelcid', g: 'Integer' },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const mspp_websitelanguage = {};
		mspp_websitelanguage.ODataEntity = e;
		mspp_websitelanguage.FormattedValue = {};
		for (const field in _mspp_websitelanguage) {
			const fieldConfig = _mspp_websitelanguage[field];
			webApiField(mspp_websitelanguage, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		mspp_websitelanguage.Entity = u;
		mspp_websitelanguage.EntityName = 'mspp_websitelanguage';
		mspp_websitelanguage.EntityCollectionName = 'mspp_websitelanguages';
		mspp_websitelanguage['@odata.etag'] = e?.['@odata.etag'];
		mspp_websitelanguage.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		mspp_websitelanguage.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return mspp_websitelanguage;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_websitelanguage = {
		mspp_websitelcid: { Arabic: 1025, Basque_Basque: 1069, Bulgarian_Bulgaria: 1026, Catalan_Catalan: 1027, Chinese_China: 2052, Chinese_Hong_Kong_SAR: 3076, Chinese_Traditional: 1028, Croatian_Croatia: 1050, Czech_Czech_Republic: 1029, Danish_Denmark: 1030, Dutch_Netherlands: 1043, English: 1033, Estonian_Estonia: 1061, Finnish_Finland: 1035, French_France: 1036, Galician_Spain: 1110, German_Germany: 1031, Greek_Greece: 1032, Hebrew: 1037, Hindi_India: 1081, Hungarian_Hungary: 1038, Indonesian_Indonesia: 1057, Italian_Italy: 1040, Japanese_Japan: 1041, Kazakh_Kazakhstan: 1087, Korean_Korea: 1042, Latvian_Latvia: 1062, Lithuanian_Lithuania: 1063, Malay_Malaysia: 1086, Norwegian_Bokmal_Norway: 1044, Polish_Poland: 1045, Portuguese_Brazil: 1046, Portuguese_Portugal: 2070, Romanian_Romania: 1048, Russian_Russia: 1049, Serbian_Cyrillic_Serbia: 3098, Serbian_Latin_Serbia: 2074, Slovak_Slovakia: 1051, Slovenian_Slovenia: 1060, Spanish_Traditional_Sort_Spain: 3082, Swedish_Sweden: 1053, Thai_Thailand: 1054, Turkish_Turkiye: 1055, Ukrainian_Ukraine: 1058, Vietnamese_Vietnam: 1066 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));