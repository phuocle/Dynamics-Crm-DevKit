'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_livechatengagementctxApi = function (e) {
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
		var _msdyn_livechatengagementctx = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_browser: { a: 'msdyn_browser' },
			msdyn_City: { a: 'msdyn_city' },
			msdyn_country: { a: 'msdyn_country' },
			msdyn_device: { a: 'msdyn_device' },
			msdyn_isauthenticated: { a: 'msdyn_isauthenticated' },
			msdyn_isproactivechat: { a: 'msdyn_isproactivechat' },
			msdyn_latitude: { a: 'msdyn_latitude' },
			msdyn_livechatengagementctxId: { a: 'msdyn_livechatengagementctxid' },
			msdyn_livechatengagementid: { a: 'msdyn_livechatengagementid' },
			msdyn_liveworkitemid: { b: 'msdyn_liveworkitemid', a: '_msdyn_liveworkitemid_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			msdyn_locale: { a: 'msdyn_locale' },
			msdyn_longitude: { a: 'msdyn_longitude' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_originurl: { a: 'msdyn_originurl' },
			msdyn_os: { a: 'msdyn_os' },
			msdyn_portalcontactid: { a: 'msdyn_portalcontactid' },
			msdyn_PostalCode: { a: 'msdyn_postalcode' },
			msdyn_State: { a: 'msdyn_state' },
			msdyn_Street1: { a: 'msdyn_street1' },
			msdyn_Street2: { a: 'msdyn_street2' },
			msdyn_Street3: { a: 'msdyn_street3' },
			msdyn_widgetappid: { a: 'msdyn_widgetappid' },
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
		var msdyn_livechatengagementctx = {};
		msdyn_livechatengagementctx.ODataEntity = e;
		msdyn_livechatengagementctx.FormattedValue = {};
		for (var field in _msdyn_livechatengagementctx) {
			var a = _msdyn_livechatengagementctx[field].a;
			var b = _msdyn_livechatengagementctx[field].b;
			var c = _msdyn_livechatengagementctx[field].c;
			var d = _msdyn_livechatengagementctx[field].d;
			var g = _msdyn_livechatengagementctx[field].g;
			var r = _msdyn_livechatengagementctx[field].r;
			webApiField(msdyn_livechatengagementctx, field, e, a, b, c, d, r, u, g);
		}
		msdyn_livechatengagementctx.Entity = u;
		msdyn_livechatengagementctx.EntityName = 'msdyn_livechatengagementctx';
		msdyn_livechatengagementctx.EntityCollectionName = 'msdyn_livechatengagementctxes';
		msdyn_livechatengagementctx['@odata.etag'] = e['@odata.etag'];
		msdyn_livechatengagementctx.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_livechatengagementctx.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_livechatengagementctx;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_livechatengagementctx = {
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