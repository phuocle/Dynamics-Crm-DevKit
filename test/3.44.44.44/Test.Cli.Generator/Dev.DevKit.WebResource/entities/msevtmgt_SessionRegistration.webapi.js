'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_SessionRegistrationApi = function (e) {
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
		var _msevtmgt_sessionregistration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msevtmgt_ContactId: { b: 'msevtmgt_ContactId', a: '_msevtmgt_contactid_value', c: 'contacts', d: 'contact' },
			msevtmgt_createdFromApi: { a: 'msevtmgt_createdfromapi' },
			msevtmgt_Event: { b: 'msevtmgt_Event', a: '_msevtmgt_event_value', c: 'msevtmgt_events', d: 'msevtmgt_event' },
			msevtmgt_iscanceled: { a: 'msevtmgt_iscanceled' },
			msevtmgt_Name: { a: 'msevtmgt_name' },
			msevtmgt_publishingstate: { a: 'msevtmgt_publishingstate' },
			msevtmgt_RegistrationID: { b: 'msevtmgt_RegistrationID', a: '_msevtmgt_registrationid_value', c: 'msevtmgt_eventregistrations', d: 'msevtmgt_eventregistration' },
			msevtmgt_registrationnotificationseen: { a: 'msevtmgt_registrationnotificationseen' },
			msevtmgt_registrationoperation: { a: 'msevtmgt_registrationoperation' },
			msevtmgt_registrationstatus: { a: 'msevtmgt_registrationstatus' },
			msevtmgt_SessionId: { b: 'msevtmgt_SessionId', a: '_msevtmgt_sessionid_value', c: 'msevtmgt_sessions', d: 'msevtmgt_session' },
			msevtmgt_SessionRegistrationId: { a: 'msevtmgt_sessionregistrationid' },
			msevtmgt_SyncedWithProvider: { a: 'msevtmgt_syncedwithprovider' },
			msevtmgt_TimesCheckedIn: { a: 'msevtmgt_timescheckedin' },
			msevtmgt_WebinarRegistrationID: { a: 'msevtmgt_webinarregistrationid' },
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
		var msevtmgt_sessionregistration = {};
		msevtmgt_sessionregistration.ODataEntity = e;
		msevtmgt_sessionregistration.FormattedValue = {};
		for (var field in _msevtmgt_sessionregistration) {
			var a = _msevtmgt_sessionregistration[field].a;
			var b = _msevtmgt_sessionregistration[field].b;
			var c = _msevtmgt_sessionregistration[field].c;
			var d = _msevtmgt_sessionregistration[field].d;
			var g = _msevtmgt_sessionregistration[field].g;
			var r = _msevtmgt_sessionregistration[field].r;
			webApiField(msevtmgt_sessionregistration, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_sessionregistration.Entity = u;
		msevtmgt_sessionregistration.EntityName = 'msevtmgt_sessionregistration';
		msevtmgt_sessionregistration.EntityCollectionName = 'msevtmgt_sessionregistrations';
		msevtmgt_sessionregistration['@odata.etag'] = e['@odata.etag'];
		msevtmgt_sessionregistration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_sessionregistration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_sessionregistration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_SessionRegistration = {
		msevtmgt_publishingstate : {
			Failed_to_publish: 100000003,
			Parent_webinar_failed: 100000002,
			Pending: 100000000,
			Published: 100000001,
			Webinar_provider_error: 100000004
		},
		msevtmgt_SyncedWithProvider : {
			No: 100000001,
			Yes: 100000002
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