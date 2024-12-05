'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_eventpurchaseattendeeApi = function (e) {
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
		var _msevtmgt_eventpurchaseattendee = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msevtmgt_AttendeeContactId: { b: 'msevtmgt_AttendeeContactId', a: '_msevtmgt_attendeecontactid_value', c: 'contacts', d: 'contact' },
			msevtmgt_eventpurchaseattendeeId: { a: 'msevtmgt_eventpurchaseattendeeid' },
			msevtmgt_eventpurchasecontactid: { b: 'msevtmgt_eventpurchasecontactid', a: '_msevtmgt_eventpurchasecontactid_value', c: 'msevtmgt_eventpurchasecontacts', d: 'msevtmgt_eventpurchasecontact' },
			msevtmgt_EventRegistrationId: { b: 'msevtmgt_EventRegistrationId', a: '_msevtmgt_eventregistrationid_value', c: 'msevtmgt_eventregistrations', d: 'msevtmgt_eventregistration' },
			msevtmgt_name: { a: 'msevtmgt_name' },
			msevtmgt_PurchaseId: { b: 'msevtmgt_PurchaseId', a: '_msevtmgt_purchaseid_value', c: 'msevtmgt_eventpurchases', d: 'msevtmgt_eventpurchase' },
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
		var msevtmgt_eventpurchaseattendee = {};
		msevtmgt_eventpurchaseattendee.ODataEntity = e;
		msevtmgt_eventpurchaseattendee.FormattedValue = {};
		for (var field in _msevtmgt_eventpurchaseattendee) {
			var a = _msevtmgt_eventpurchaseattendee[field].a;
			var b = _msevtmgt_eventpurchaseattendee[field].b;
			var c = _msevtmgt_eventpurchaseattendee[field].c;
			var d = _msevtmgt_eventpurchaseattendee[field].d;
			var g = _msevtmgt_eventpurchaseattendee[field].g;
			var r = _msevtmgt_eventpurchaseattendee[field].r;
			webApiField(msevtmgt_eventpurchaseattendee, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_eventpurchaseattendee.Entity = u;
		msevtmgt_eventpurchaseattendee.EntityName = 'msevtmgt_eventpurchaseattendee';
		msevtmgt_eventpurchaseattendee.EntityCollectionName = 'msevtmgt_eventpurchaseattendees';
		msevtmgt_eventpurchaseattendee['@odata.etag'] = e['@odata.etag'];
		msevtmgt_eventpurchaseattendee.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_eventpurchaseattendee.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_eventpurchaseattendee;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_eventpurchaseattendee = {
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