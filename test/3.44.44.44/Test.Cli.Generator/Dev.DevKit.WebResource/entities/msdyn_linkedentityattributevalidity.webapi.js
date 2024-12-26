'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_linkedentityattributevalidityApi = function (e) {
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
		var _msdyn_linkedentityattributevalidity = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_attributename: { a: 'msdyn_attributename' },
			msdyn_attributetype: { a: 'msdyn_attributetype' },
			msdyn_datahash: { a: 'msdyn_datahash' },
			msdyn_datavalidity: { a: 'msdyn_datavalidity' },
			msdyn_errorcode: { a: 'msdyn_errorcode' },
			msdyn_linkedentityattributevalidityId: { a: 'msdyn_linkedentityattributevalidityid' },
			msdyn_linkeditemlookup_contact: { b: 'msdyn_linkeditemlookup_contact', a: '_msdyn_linkeditemlookup_value', c: 'contacts', d: 'contact' },
			msdyn_linkeditemlookup_lead: { b: 'msdyn_linkeditemlookup_lead', a: '_msdyn_linkeditemlookup_value', c: 'leads', d: 'lead' },
			msdyn_validationresponse: { a: 'msdyn_validationresponse' },
			msdyn_validationstatus: { a: 'msdyn_validationstatus' },
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
		var msdyn_linkedentityattributevalidity = {};
		msdyn_linkedentityattributevalidity.ODataEntity = e;
		msdyn_linkedentityattributevalidity.FormattedValue = {};
		for (var field in _msdyn_linkedentityattributevalidity) {
			var a = _msdyn_linkedentityattributevalidity[field].a;
			var b = _msdyn_linkedentityattributevalidity[field].b;
			var c = _msdyn_linkedentityattributevalidity[field].c;
			var d = _msdyn_linkedentityattributevalidity[field].d;
			var g = _msdyn_linkedentityattributevalidity[field].g;
			var r = _msdyn_linkedentityattributevalidity[field].r;
			webApiField(msdyn_linkedentityattributevalidity, field, e, a, b, c, d, r, u, g);
		}
		msdyn_linkedentityattributevalidity.Entity = u;
		msdyn_linkedentityattributevalidity.EntityName = 'msdyn_linkedentityattributevalidity';
		msdyn_linkedentityattributevalidity.EntityCollectionName = 'msdyn_linkedentityattributevalidities';
		msdyn_linkedentityattributevalidity['@odata.etag'] = e['@odata.etag'];
		msdyn_linkedentityattributevalidity.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_linkedentityattributevalidity.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_linkedentityattributevalidity;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_linkedentityattributevalidity = {
		msdyn_attributetype : {
			Email: 0,
			Phone: 1
		},
		msdyn_datavalidity : {
			Invalid: 0,
			Unknown: 2,
			Valid: 1
		},
		msdyn_errorcode : {
			Address_Malformed: 380,
			Domain_exists: 210,
			Domain_Exists_But_Disposable: 360,
			Domain_Exists_But_Expired_Recently: 250,
			Domain_Exists_But_Expires_Soon: 220,
			Domain_Exists_But_Spam: 400,
			Domain_Expired: 320,
			Domain_Invalid: 340,
			Domain_Unknown: 350,
			Email_Does_Not_Exist: 390,
			Email_Exists: 200,
			Email_Exists_But_Hub: 370,
			Email_Exists_But_Spam: 420,
			Fake_Alias: 410,
			None: 230,
			Root_Domain_exists: 240,
			Unknown: 0,
			Validation_In_Progress: 300
		},
		msdyn_linkeditemlookupIdType : {
		},
		msdyn_validationstatus : {
			Failed: 2,
			In_Progress: 3,
			New: 0,
			Success: 1
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