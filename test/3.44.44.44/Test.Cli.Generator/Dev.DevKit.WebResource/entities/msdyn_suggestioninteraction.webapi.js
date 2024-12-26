'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_suggestioninteractionApi = function (e) {
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
		var _msdyn_suggestioninteraction = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_interactioncontext: { a: 'msdyn_interactioncontext' },
			msdyn_interactiontype: { a: 'msdyn_interactiontype' },
			msdyn_suggestedentity_incident: { b: 'msdyn_suggestedentity_incident', a: '_msdyn_suggestedentity_value', c: 'incidents', d: 'incident' },
			msdyn_suggestedentity_knowledgearticle: { b: 'msdyn_suggestedentity_knowledgearticle', a: '_msdyn_suggestedentity_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			msdyn_suggestionfor_incident: { b: 'msdyn_suggestionfor_incident', a: '_msdyn_suggestionfor_value', c: 'incidents', d: 'incident' },
			msdyn_suggestionfor_msdyn_ocliveworkitem: { b: 'msdyn_suggestionfor_msdyn_ocliveworkitem', a: '_msdyn_suggestionfor_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			msdyn_suggestioninteractionId: { a: 'msdyn_suggestioninteractionid' },
			msdyn_suggestionrequestpayload: { b: 'msdyn_suggestionrequestpayload', a: '_msdyn_suggestionrequestpayload_value', c: 'msdyn_suggestionrequestpayloads', d: 'msdyn_suggestionrequestpayload' },
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
		var msdyn_suggestioninteraction = {};
		msdyn_suggestioninteraction.ODataEntity = e;
		msdyn_suggestioninteraction.FormattedValue = {};
		for (var field in _msdyn_suggestioninteraction) {
			var a = _msdyn_suggestioninteraction[field].a;
			var b = _msdyn_suggestioninteraction[field].b;
			var c = _msdyn_suggestioninteraction[field].c;
			var d = _msdyn_suggestioninteraction[field].d;
			var g = _msdyn_suggestioninteraction[field].g;
			var r = _msdyn_suggestioninteraction[field].r;
			webApiField(msdyn_suggestioninteraction, field, e, a, b, c, d, r, u, g);
		}
		msdyn_suggestioninteraction.Entity = u;
		msdyn_suggestioninteraction.EntityName = 'msdyn_suggestioninteraction';
		msdyn_suggestioninteraction.EntityCollectionName = 'msdyn_suggestioninteractions';
		msdyn_suggestioninteraction['@odata.etag'] = e['@odata.etag'];
		msdyn_suggestioninteraction.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_suggestioninteraction.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_suggestioninteraction;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_suggestioninteraction = {
		msdyn_suggestedentityIdType : {
		},
		msdyn_suggestionforIdType : {
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