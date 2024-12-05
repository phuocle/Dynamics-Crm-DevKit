'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_casefollowupandclosureconfigurationApi = function (e) {
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
		var _msdyn_casefollowupandclosureconfiguration = {
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
			msdyn_activationmode: { a: 'msdyn_activationmode' },
			msdyn_casefollowupandclosureconfigurationId: { a: 'msdyn_casefollowupandclosureconfigurationid' },
			msdyn_caseresolutionattributes: { a: 'msdyn_caseresolutionattributes' },
			msdyn_conditionname: { a: 'msdyn_conditionname' },
			msdyn_conditionXml: { a: 'msdyn_conditionxml' },
			msdyn_followupemailattributes: { a: 'msdyn_followupemailattributes' },
			msdyn_followuptrigger: { a: 'msdyn_followuptrigger' },
			msdyn_followupwaittimes: { a: 'msdyn_followupwaittimes' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_numoffollowups: { a: 'msdyn_numoffollowups' },
			msdyn_preresolutionperiod: { a: 'msdyn_preresolutionperiod' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
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
		var msdyn_casefollowupandclosureconfiguration = {};
		msdyn_casefollowupandclosureconfiguration.ODataEntity = e;
		msdyn_casefollowupandclosureconfiguration.FormattedValue = {};
		for (var field in _msdyn_casefollowupandclosureconfiguration) {
			var a = _msdyn_casefollowupandclosureconfiguration[field].a;
			var b = _msdyn_casefollowupandclosureconfiguration[field].b;
			var c = _msdyn_casefollowupandclosureconfiguration[field].c;
			var d = _msdyn_casefollowupandclosureconfiguration[field].d;
			var g = _msdyn_casefollowupandclosureconfiguration[field].g;
			var r = _msdyn_casefollowupandclosureconfiguration[field].r;
			webApiField(msdyn_casefollowupandclosureconfiguration, field, e, a, b, c, d, r, u, g);
		}
		msdyn_casefollowupandclosureconfiguration.Entity = u;
		msdyn_casefollowupandclosureconfiguration.EntityName = 'msdyn_casefollowupandclosureconfiguration';
		msdyn_casefollowupandclosureconfiguration.EntityCollectionName = 'msdyn_casefollowupandclosureconfigurations';
		msdyn_casefollowupandclosureconfiguration['@odata.etag'] = e['@odata.etag'];
		msdyn_casefollowupandclosureconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_casefollowupandclosureconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_casefollowupandclosureconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_casefollowupandclosureconfiguration = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_activationmode : {
			Active: 419550001,
			Inactive: 419550000
		},
		msdyn_numoffollowups : {
			_1: 419550001,
			_2: 419550002,
			_3: 419550003,
			_4: 419550004,
			_5: 419550005
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