'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_salesocmessageApi = function (e) {
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
		var _msdyn_salesocmessage = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_channeltype: { a: 'msdyn_channeltype' },
			msdyn_clientactivityid: { a: 'msdyn_clientactivityid' },
			msdyn_content: { a: 'msdyn_content' },
			msdyn_conversationid: { b: 'msdyn_conversationid', a: '_msdyn_conversationid_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			msdyn_entityid: { a: 'msdyn_entityid' },
			msdyn_entityname: { a: 'msdyn_entityname' },
			msdyn_from: { a: 'msdyn_from' },
			msdyn_isinbound: { a: 'msdyn_isinbound' },
			msdyn_messagedetails: { a: 'msdyn_messagedetails' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ownerviewstate: { a: 'msdyn_ownerviewstate' },
			msdyn_salesocmessageId: { a: 'msdyn_salesocmessageid' },
			msdyn_statusdetails: { a: 'msdyn_statusdetails' },
			msdyn_to: { a: 'msdyn_to' },
			msdyn_version: { a: 'msdyn_version' },
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
		var msdyn_salesocmessage = {};
		msdyn_salesocmessage.ODataEntity = e;
		msdyn_salesocmessage.FormattedValue = {};
		for (var field in _msdyn_salesocmessage) {
			var a = _msdyn_salesocmessage[field].a;
			var b = _msdyn_salesocmessage[field].b;
			var c = _msdyn_salesocmessage[field].c;
			var d = _msdyn_salesocmessage[field].d;
			var g = _msdyn_salesocmessage[field].g;
			var r = _msdyn_salesocmessage[field].r;
			webApiField(msdyn_salesocmessage, field, e, a, b, c, d, r, u, g);
		}
		msdyn_salesocmessage.Entity = u;
		msdyn_salesocmessage.EntityName = 'msdyn_salesocmessage';
		msdyn_salesocmessage.EntityCollectionName = 'msdyn_salesocmessages';
		msdyn_salesocmessage['@odata.etag'] = e['@odata.etag'];
		msdyn_salesocmessage.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_salesocmessage.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_salesocmessage;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_salesocmessage = {
		msdyn_ownerviewstate : {
			Hidden: 192350002,
			Seen: 192350001,
			Unseen: 192350000
		},
		statecode : {
			Fail: 1,
			Success: 0
		},
		statuscode : {
			Delivered: 4,
			InboundProcessingFailure: 6,
			InboundProcessingSuccessful: 7,
			NotDelivered: 5,
			NotSent: 1,
			SendingAborted: 0,
			SendingFailed: 2,
			Sent: 3
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