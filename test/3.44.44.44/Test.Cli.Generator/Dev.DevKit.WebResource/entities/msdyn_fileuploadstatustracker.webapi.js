'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_fileuploadstatustrackerApi = function (e) {
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
		var _msdyn_fileuploadstatustracker = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_attempt: { a: 'msdyn_attempt' },
			msdyn_errorcode: { a: 'msdyn_errorcode' },
			msdyn_errormessage: { a: 'msdyn_errormessage' },
			msdyn_fileuploadstatus: { a: 'msdyn_fileuploadstatus' },
			msdyn_fileuploadstatustrackerId: { a: 'msdyn_fileuploadstatustrackerid' },
			msdyn_forecastconfigurationid: { b: 'msdyn_forecastconfigurationid', a: '_msdyn_forecastconfigurationid_value', c: 'msdyn_forecastconfigurations', d: 'msdyn_forecastconfiguration' },
			msdyn_forecastrecurrenceupdatedetailslist: { a: 'msdyn_forecastrecurrenceupdatedetailslist' },
			msdyn_uploadedon_TimezoneDateAndTime: { a: 'msdyn_uploadedon' },
			msdyn_uploadfilename: { a: 'msdyn_uploadfilename' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_fileuploadstatustracker = {};
		msdyn_fileuploadstatustracker.ODataEntity = e;
		msdyn_fileuploadstatustracker.FormattedValue = {};
		for (var field in _msdyn_fileuploadstatustracker) {
			var a = _msdyn_fileuploadstatustracker[field].a;
			var b = _msdyn_fileuploadstatustracker[field].b;
			var c = _msdyn_fileuploadstatustracker[field].c;
			var d = _msdyn_fileuploadstatustracker[field].d;
			var g = _msdyn_fileuploadstatustracker[field].g;
			var r = _msdyn_fileuploadstatustracker[field].r;
			webApiField(msdyn_fileuploadstatustracker, field, e, a, b, c, d, r, u, g);
		}
		msdyn_fileuploadstatustracker.Entity = u;
		msdyn_fileuploadstatustracker.EntityName = 'msdyn_fileuploadstatustracker';
		msdyn_fileuploadstatustracker.EntityCollectionName = 'msdyn_fileuploadstatustrackers';
		msdyn_fileuploadstatustracker['@odata.etag'] = e['@odata.etag'];
		msdyn_fileuploadstatustracker.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_fileuploadstatustracker.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_fileuploadstatustracker;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_fileuploadstatustracker = {
		msdyn_fileuploadstatus : {
			FileUploaded: 1,
			ParsingInProgress: 2,
			UpdateFailed: 4,
			UpdateSuccess: 3
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