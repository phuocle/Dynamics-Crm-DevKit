'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_dailyopportunitykpiitemApi = function (e) {
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
		var _msdyn_dailyopportunitykpiitem = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_computationaccuracy: { a: 'msdyn_computationaccuracy' },
			msdyn_dailyopportunitykpiitemId: { a: 'msdyn_dailyopportunitykpiitemid' },
			msdyn_date_UtcDateOnly: { a: 'msdyn_date' },
			msdyn_emailsreceived: { a: 'msdyn_emailsreceived' },
			msdyn_emailssent: { a: 'msdyn_emailssent' },
			msdyn_entityid: { b: 'msdyn_entityid', a: '_msdyn_entityid_value', c: 'opportunities', d: 'opportunity' },
			msdyn_liemailssent: { a: 'msdyn_liemailssent' },
			msdyn_meetingsreceived: { a: 'msdyn_meetingsreceived' },
			msdyn_meetingssent: { a: 'msdyn_meetingssent' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_opportunityId: { a: 'msdyn_opportunityid' },
			msdyn_phonecallsmade: { a: 'msdyn_phonecallsmade' },
			msdyn_phonecallsreceived: { a: 'msdyn_phonecallsreceived' },
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
		var msdyn_dailyopportunitykpiitem = {};
		msdyn_dailyopportunitykpiitem.ODataEntity = e;
		msdyn_dailyopportunitykpiitem.FormattedValue = {};
		for (var field in _msdyn_dailyopportunitykpiitem) {
			var a = _msdyn_dailyopportunitykpiitem[field].a;
			var b = _msdyn_dailyopportunitykpiitem[field].b;
			var c = _msdyn_dailyopportunitykpiitem[field].c;
			var d = _msdyn_dailyopportunitykpiitem[field].d;
			var g = _msdyn_dailyopportunitykpiitem[field].g;
			var r = _msdyn_dailyopportunitykpiitem[field].r;
			webApiField(msdyn_dailyopportunitykpiitem, field, e, a, b, c, d, r, u, g);
		}
		msdyn_dailyopportunitykpiitem.Entity = u;
		msdyn_dailyopportunitykpiitem.EntityName = 'msdyn_dailyopportunitykpiitem';
		msdyn_dailyopportunitykpiitem.EntityCollectionName = 'msdyn_dailyopportunitykpiitems';
		msdyn_dailyopportunitykpiitem['@odata.etag'] = e['@odata.etag'];
		msdyn_dailyopportunitykpiitem.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_dailyopportunitykpiitem.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_dailyopportunitykpiitem;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_dailyopportunitykpiitem = {
		msdyn_computationaccuracy : {
			Complete: 100000000,
			Partial: 100000001
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