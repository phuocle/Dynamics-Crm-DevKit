'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynci_PersonalizationUserApi = function (e) {
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
		var _msdynci_personalizationuser = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynci_AlternateKeyReference: { b: 'msdynci_AlternateKeyReference', a: '_msdynci_alternatekeyreference_value', c: 'msdynci_alternatekeies', d: 'msdynci_alternatekey' },
			msdynci_HostDomain: { a: 'msdynci_hostdomain' },
			msdynci_OrgId: { a: 'msdynci_orgid' },
			msdynci_OrgTenantId: { a: 'msdynci_orgtenantid' },
			msdynci_personalizationcookiereference: { b: 'msdynci_personalizationcookiereference', a: '_msdynci_personalizationcookiereference_value', c: 'msdynci_personalizationcookies', d: 'msdynci_personalizationcookie' },
			msdynci_PersonalizationUserId: { a: 'msdynci_personalizationuserid' },
			msdynci_SDKVersion: { a: 'msdynci_sdkversion' },
			msdynci_SessionDuration: { a: 'msdynci_sessionduration' },
			msdynci_SessionDurationMs: { a: 'msdynci_sessiondurationms' },
			msdynci_SessionId: { a: 'msdynci_sessionid' },
			msdynci_SignalId: { a: 'msdynci_signalid' },
			msdynci_SignalName: { a: 'msdynci_signalname' },
			msdynci_SignalSource: { a: 'msdynci_signalsource' },
			msdynci_SignalTimestamp: { a: 'msdynci_signaltimestamp' },
			msdynci_SignalTimeZone: { a: 'msdynci_signaltimezone' },
			msdynci_SignalVersion: { a: 'msdynci_signalversion' },
			msdynci_UserAuthId: { a: 'msdynci_userauthid' },
			msdynci_UserEntityId: { a: 'msdynci_userentityid' },
			msdynci_UserEntityType: { a: 'msdynci_userentitytype' },
			msdynci_UserLocalId: { a: 'msdynci_userlocalid' },
			msdynci_UserState: { a: 'msdynci_userstate' },
			msdynci_UserTrackingContext: { a: 'msdynci_usertrackingcontext' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynci_personalizationuser = {};
		msdynci_personalizationuser.ODataEntity = e;
		msdynci_personalizationuser.FormattedValue = {};
		for (var field in _msdynci_personalizationuser) {
			var a = _msdynci_personalizationuser[field].a;
			var b = _msdynci_personalizationuser[field].b;
			var c = _msdynci_personalizationuser[field].c;
			var d = _msdynci_personalizationuser[field].d;
			var g = _msdynci_personalizationuser[field].g;
			var r = _msdynci_personalizationuser[field].r;
			webApiField(msdynci_personalizationuser, field, e, a, b, c, d, r, u, g);
		}
		msdynci_personalizationuser.Entity = u;
		msdynci_personalizationuser.EntityName = 'msdynci_personalizationuser';
		msdynci_personalizationuser.EntityCollectionName = 'msdynci_personalizationusers';
		msdynci_personalizationuser['@odata.etag'] = e['@odata.etag'];
		msdynci_personalizationuser.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynci_personalizationuser.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynci_personalizationuser;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynci_PersonalizationUser = {
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