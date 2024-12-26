'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_marketingformfieldApi = function (e) {
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
		var _msdynmkt_marketingformfield = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_allowedvalidationtypes: { a: 'msdynmkt_allowedvalidationtypes' },
			msdynmkt_allowemptyoption: { a: 'msdynmkt_allowemptyoption' },
			msdynmkt_countrycode: { a: 'msdynmkt_countrycode' },
			msdynmkt_date_defaultvalue_UtcDateOnly: { a: 'msdynmkt_date_defaultvalue' },
			msdynmkt_datetime_defaultvalue_UtcDateAndTime: { a: 'msdynmkt_datetime_defaultvalue' },
			msdynmkt_datetime_displayoption: { a: 'msdynmkt_datetime_displayoption' },
			msdynmkt_defaultvalue: { a: 'msdynmkt_defaultvalue' },
			msdynmkt_errormessage: { a: 'msdynmkt_errormessage' },
			msdynmkt_fieldoptions: { a: 'msdynmkt_fieldoptions' },
			msdynmkt_fieldtype: { a: 'msdynmkt_fieldtype' },
			msdynmkt_hide: { a: 'msdynmkt_hide' },
			msdynmkt_icon: { a: 'msdynmkt_icon' },
			msdynmkt_lookup_targets: { a: 'msdynmkt_lookup_targets' },
			msdynmkt_marketingformfieldId: { a: 'msdynmkt_marketingformfieldid' },
			msdynmkt_maxlength: { a: 'msdynmkt_maxlength' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_optionsetdisplayoption: { a: 'msdynmkt_optionsetdisplayoption' },
			msdynmkt_placeholder: { a: 'msdynmkt_placeholder' },
			msdynmkt_prefill: { a: 'msdynmkt_prefill' },
			msdynmkt_publicvisibility: { a: 'msdynmkt_publicvisibility' },
			msdynmkt_required: { a: 'msdynmkt_required' },
			msdynmkt_targetentity: { a: 'msdynmkt_targetentity' },
			msdynmkt_targetproperty: { a: 'msdynmkt_targetproperty' },
			msdynmkt_twooption_displayoption: { a: 'msdynmkt_twooption_displayoption' },
			msdynmkt_validation: { a: 'msdynmkt_validation' },
			msdynmkt_validationpattern: { a: 'msdynmkt_validationpattern' },
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
		var msdynmkt_marketingformfield = {};
		msdynmkt_marketingformfield.ODataEntity = e;
		msdynmkt_marketingformfield.FormattedValue = {};
		for (var field in _msdynmkt_marketingformfield) {
			var a = _msdynmkt_marketingformfield[field].a;
			var b = _msdynmkt_marketingformfield[field].b;
			var c = _msdynmkt_marketingformfield[field].c;
			var d = _msdynmkt_marketingformfield[field].d;
			var g = _msdynmkt_marketingformfield[field].g;
			var r = _msdynmkt_marketingformfield[field].r;
			webApiField(msdynmkt_marketingformfield, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_marketingformfield.Entity = u;
		msdynmkt_marketingformfield.EntityName = 'msdynmkt_marketingformfield';
		msdynmkt_marketingformfield.EntityCollectionName = 'msdynmkt_marketingformfields';
		msdynmkt_marketingformfield['@odata.etag'] = e['@odata.etag'];
		msdynmkt_marketingformfield.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_marketingformfield.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_marketingformfield;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_marketingformfield = {
		msdynmkt_datetime_displayoption : {
			Date: 100000000,
			Date_Time: 100000001
		},
		msdynmkt_optionsetdisplayoption : {
			Dropdown: 100000001,
			Radio_button: 100000000
		},
		msdynmkt_twooption_displayoption : {
			Checkbox: 100000001,
			Radio_button: 100000000
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