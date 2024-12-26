'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_mostcontactedbyApi = function (e) {
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
		var _msdyn_mostcontactedby = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_account_regardingObjectId: { b: 'msdyn_account_regardingObjectId', a: '_msdyn_account_regardingobjectid_value', c: 'accounts', d: 'account' },
			msdyn_computationaccuracy: { a: 'msdyn_computationaccuracy' },
			msdyn_contact_regardingObjectId: { b: 'msdyn_contact_regardingObjectId', a: '_msdyn_contact_regardingobjectid_value', c: 'contacts', d: 'contact' },
			msdyn_entityid: { a: 'msdyn_entityid' },
			msdyn_entityImage_url: { a: 'msdyn_entityimage_url' },
			msdyn_entityname: { a: 'msdyn_entityname' },
			msdyn_kpidatajson: { a: 'msdyn_kpidatajson' },
			msdyn_lastcontactedon: { a: 'msdyn_lastcontactedon' },
			msdyn_lead_regardingObjectId: { b: 'msdyn_lead_regardingObjectId', a: '_msdyn_lead_regardingobjectid_value', c: 'leads', d: 'lead' },
			msdyn_mostcontactedbyId: { a: 'msdyn_mostcontactedbyid' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_numberofemails: { a: 'msdyn_numberofemails' },
			msdyn_numberofinmails: { a: 'msdyn_numberofinmails' },
			msdyn_numberofmeetings: { a: 'msdyn_numberofmeetings' },
			msdyn_numberofphonecalls: { a: 'msdyn_numberofphonecalls' },
			msdyn_opportunity_regardingObjectId: { b: 'msdyn_opportunity_regardingObjectId', a: '_msdyn_opportunity_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			msdyn_primaryname: { a: 'msdyn_primaryname' },
			msdyn_regardingentityid: { a: 'msdyn_regardingentityid' },
			msdyn_regardingentityname: { a: 'msdyn_regardingentityname' },
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
		var msdyn_mostcontactedby = {};
		msdyn_mostcontactedby.ODataEntity = e;
		msdyn_mostcontactedby.FormattedValue = {};
		for (var field in _msdyn_mostcontactedby) {
			var a = _msdyn_mostcontactedby[field].a;
			var b = _msdyn_mostcontactedby[field].b;
			var c = _msdyn_mostcontactedby[field].c;
			var d = _msdyn_mostcontactedby[field].d;
			var g = _msdyn_mostcontactedby[field].g;
			var r = _msdyn_mostcontactedby[field].r;
			webApiField(msdyn_mostcontactedby, field, e, a, b, c, d, r, u, g);
		}
		msdyn_mostcontactedby.Entity = u;
		msdyn_mostcontactedby.EntityName = 'msdyn_mostcontactedby';
		msdyn_mostcontactedby.EntityCollectionName = 'msdyn_mostcontactedbies';
		msdyn_mostcontactedby['@odata.etag'] = e['@odata.etag'];
		msdyn_mostcontactedby.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_mostcontactedby.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_mostcontactedby;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_mostcontactedby = {
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