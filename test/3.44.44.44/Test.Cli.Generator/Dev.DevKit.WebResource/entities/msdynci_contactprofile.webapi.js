'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynci_contactprofileApi = function (e) {
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
		var _msdynci_contactprofile = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynci_birthdate_UtcDateAndTime: { a: 'msdynci_birthdate' },
			msdynci_city: { a: 'msdynci_city' },
			msdynci_contactid: { a: 'msdynci_contactid' },
			msdynci_contactprofileId: { a: 'msdynci_contactprofileid' },
			msdynci_countryorregion: { a: 'msdynci_countryorregion' },
			msdynci_customerid: { a: 'msdynci_customerid' },
			msdynci_entityname: { a: 'msdynci_entityname' },
			msdynci_firstname: { a: 'msdynci_firstname' },
			msdynci_gender: { a: 'msdynci_gender' },
			msdynci_id: { a: 'msdynci_id' },
			msdynci_identifier: { a: 'msdynci_identifier' },
			msdynci_jobtitle: { a: 'msdynci_jobtitle' },
			msdynci_lastname: { a: 'msdynci_lastname' },
			msdynci_lookupfield_customer: { b: 'msdynci_lookupfield_customer', a: '_msdynci_lookupfield_customer_value', c: 'msdynci_customerprofiles', d: 'msdynci_customerprofile' },
			msdynci_postalcode: { a: 'msdynci_postalcode' },
			msdynci_primaryemail: { a: 'msdynci_primaryemail' },
			msdynci_primaryphone: { a: 'msdynci_primaryphone' },
			msdynci_sourceid: { a: 'msdynci_sourceid' },
			msdynci_stateorprovince: { a: 'msdynci_stateorprovince' },
			msdynci_streetaddress: { a: 'msdynci_streetaddress' },
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
		var msdynci_contactprofile = {};
		msdynci_contactprofile.ODataEntity = e;
		msdynci_contactprofile.FormattedValue = {};
		for (var field in _msdynci_contactprofile) {
			var a = _msdynci_contactprofile[field].a;
			var b = _msdynci_contactprofile[field].b;
			var c = _msdynci_contactprofile[field].c;
			var d = _msdynci_contactprofile[field].d;
			var g = _msdynci_contactprofile[field].g;
			var r = _msdynci_contactprofile[field].r;
			webApiField(msdynci_contactprofile, field, e, a, b, c, d, r, u, g);
		}
		msdynci_contactprofile.Entity = u;
		msdynci_contactprofile.EntityName = 'msdynci_contactprofile';
		msdynci_contactprofile.EntityCollectionName = 'msdynci_contactprofiles';
		msdynci_contactprofile['@odata.etag'] = e['@odata.etag'];
		msdynci_contactprofile.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynci_contactprofile.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynci_contactprofile;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynci_contactprofile = {
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