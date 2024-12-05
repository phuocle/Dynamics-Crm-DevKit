'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_marketingformfieldApi = function (e) {
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
		var _msdyncrm_marketingformfield = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_contactmapping: { a: 'msdyncrm_contactmapping' },
			msdyncrm_contactmapping_target: { a: 'msdyncrm_contactmapping_target' },
			msdyncrm_defaultformlabel: { a: 'msdyncrm_defaultformlabel' },
			msdyncrm_defaultformplaceholder: { a: 'msdyncrm_defaultformplaceholder' },
			msdyncrm_format: { a: 'msdyncrm_format' },
			msdyncrm_leadmapping: { a: 'msdyncrm_leadmapping' },
			msdyncrm_leadmapping_target: { a: 'msdyncrm_leadmapping_target' },
			msdyncrm_lookup_target: { a: 'msdyncrm_lookup_target' },
			msdyncrm_marketingformfieldId: { a: 'msdyncrm_marketingformfieldid' },
			msdyncrm_marketingformfieldtype: { a: 'msdyncrm_marketingformfieldtype' },
			msdyncrm_marketingprovided: { a: 'msdyncrm_marketingprovided' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_prototype_attribute: { a: 'msdyncrm_prototype_attribute' },
			msdyncrm_prototype_entity: { a: 'msdyncrm_prototype_entity' },
			msdyncrm_prototype_target: { a: 'msdyncrm_prototype_target' },
			msdyncrm_PublicVisibility: { a: 'msdyncrm_publicvisibility' },
			msdyncrm_renderas: { a: 'msdyncrm_renderas' },
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
		var msdyncrm_marketingformfield = {};
		msdyncrm_marketingformfield.ODataEntity = e;
		msdyncrm_marketingformfield.FormattedValue = {};
		for (var field in _msdyncrm_marketingformfield) {
			var a = _msdyncrm_marketingformfield[field].a;
			var b = _msdyncrm_marketingformfield[field].b;
			var c = _msdyncrm_marketingformfield[field].c;
			var d = _msdyncrm_marketingformfield[field].d;
			var g = _msdyncrm_marketingformfield[field].g;
			var r = _msdyncrm_marketingformfield[field].r;
			webApiField(msdyncrm_marketingformfield, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_marketingformfield.Entity = u;
		msdyncrm_marketingformfield.EntityName = 'msdyncrm_marketingformfield';
		msdyncrm_marketingformfield.EntityCollectionName = 'msdyncrm_marketingformfields';
		msdyncrm_marketingformfield['@odata.etag'] = e['@odata.etag'];
		msdyncrm_marketingformfield.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_marketingformfield.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_marketingformfield;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_marketingformfield = {
		msdyncrm_format : {
			Date: 6,
			Date_and_time: 7,
			Email: 3,
			Phone: 5,
			Text: 1,
			Text_area: 2,
			URL: 4
		},
		msdyncrm_marketingformfieldtype : {
			Currency: 9,
			Date_and_time: 8,
			Decimal_number: 7,
			Floating_point_number: 6,
			Lookup: 11,
			Multi_select_option_set: 10,
			Multiple_lines_of_text: 2,
			Option_set: 3,
			Single_line_of_text: 1,
			Two_options: 4,
			Whole_number: 5
		},
		msdyncrm_renderas : {
			Checkbox: 7,
			Checkbox_list: 12,
			Date_picker: 10,
			Date_time_picker: 11,
			Drop_down: 8,
			Email_input: 2,
			Lookup: 13,
			Number_input: 5,
			Phone_input: 4,
			Radio_buttons: 9,
			Text_area: 6,
			Text_box: 1,
			URL_input: 3
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