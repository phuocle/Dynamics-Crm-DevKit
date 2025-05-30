﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_copilotsummarizationsettingApi = function (e) {
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
		var _msdyn_copilotsummarizationsetting = {
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
			msdyn_allowcreatecase: { a: 'msdyn_allowcreatecase' },
			msdyn_allowcrossgeo: { a: 'msdyn_allowcrossgeo' },
			msdyn_allowtranslation: { a: 'msdyn_allowtranslation' },
			msdyn_autoenabled: { a: 'msdyn_autoenabled' },
			msdyn_autoenableddone: { a: 'msdyn_autoenableddone' },
			msdyn_casesummaryconfiguration: { a: 'msdyn_casesummaryconfiguration' },
			msdyn_casesummaryenabled: { a: 'msdyn_casesummaryenabled' },
			msdyn_consentacceptedon_UtcDateAndTime: { a: 'msdyn_consentacceptedon' },
			msdyn_conversationsummaryconfiguration: { a: 'msdyn_conversationsummaryconfiguration' },
			msdyn_copilotsummarizationsettingId: { a: 'msdyn_copilotsummarizationsettingid' },
			msdyn_enabled: { a: 'msdyn_enabled' },
			msdyn_featureaccessrolelist: { a: 'msdyn_featureaccessrolelist' },
			msdyn_interactionsenabled: { a: 'msdyn_interactionsenabled' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ondemandenabled: { a: 'msdyn_ondemandenabled' },
			msdyn_systemmetadata: { a: 'msdyn_systemmetadata' },
			msdyn_useagentlanguage: { a: 'msdyn_useagentlanguage' },
			msdyn_whenagentjoinsenabled: { a: 'msdyn_whenagentjoinsenabled' },
			msdyn_whenconversationendsenabled: { a: 'msdyn_whenconversationendsenabled' },
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
		var msdyn_copilotsummarizationsetting = {};
		msdyn_copilotsummarizationsetting.ODataEntity = e;
		msdyn_copilotsummarizationsetting.FormattedValue = {};
		for (var field in _msdyn_copilotsummarizationsetting) {
			var a = _msdyn_copilotsummarizationsetting[field].a;
			var b = _msdyn_copilotsummarizationsetting[field].b;
			var c = _msdyn_copilotsummarizationsetting[field].c;
			var d = _msdyn_copilotsummarizationsetting[field].d;
			var g = _msdyn_copilotsummarizationsetting[field].g;
			var r = _msdyn_copilotsummarizationsetting[field].r;
			webApiField(msdyn_copilotsummarizationsetting, field, e, a, b, c, d, r, u, g);
		}
		msdyn_copilotsummarizationsetting.Entity = u;
		msdyn_copilotsummarizationsetting.EntityName = 'msdyn_copilotsummarizationsetting';
		msdyn_copilotsummarizationsetting.EntityCollectionName = 'msdyn_copilotsummarizationsettings';
		msdyn_copilotsummarizationsetting['@odata.etag'] = e['@odata.etag'];
		msdyn_copilotsummarizationsetting.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_copilotsummarizationsetting.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_copilotsummarizationsetting;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_copilotsummarizationsetting = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
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