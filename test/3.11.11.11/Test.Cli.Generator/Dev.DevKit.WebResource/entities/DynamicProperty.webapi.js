﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.DynamicPropertyApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _dynamicproperty = {
			BaseDynamicPropertyId: { b: 'basedynamicpropertyid', a: '_basedynamicpropertyid_value', c: 'dynamicproperties', d: 'dynamicproperty' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DataType: { a: 'datatype' },
			DefaultAttributeValue: { a: 'defaultattributevalue' },
			DefaultValueDecimal: { a: 'defaultvaluedecimal' },
			DefaultValueDouble: { a: 'defaultvaluedouble' },
			DefaultValueInteger: { a: 'defaultvalueinteger' },
			DefaultValueOptionSet: { b: 'defaultvalueoptionset', a: '_defaultvalueoptionset_value', c: 'dynamicpropertyoptionsetitems', d: 'dynamicpropertyoptionsetitem' },
			DefaultValueString: { a: 'defaultvaluestring' },
			Description: { a: 'description' },
			DMTImportState: { a: 'dmtimportstate' },
			DynamicPropertyId: { a: 'dynamicpropertyid' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsHidden: { a: 'ishidden' },
			IsReadOnly: { a: 'isreadonly' },
			IsRequired: { a: 'isrequired' },
			MaxLengthString: { a: 'maxlengthstring' },
			MaxValueDecimal: { a: 'maxvaluedecimal' },
			MaxValueDouble: { a: 'maxvaluedouble' },
			MaxValueInteger: { a: 'maxvalueinteger' },
			MinValueDecimal: { a: 'minvaluedecimal' },
			MinValueDouble: { a: 'minvaluedouble' },
			MinValueInteger: { a: 'minvalueinteger' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwrittenDynamicPropertyId: { a: 'overwrittendynamicpropertyid' },
			Precision: { a: 'precision' },
			RegardingObjectId: { b: 'regardingobjectid', a: '_regardingobjectid_value', c: 'products', d: 'product' },
			RootDynamicPropertyId: { a: 'rootdynamicpropertyid' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var dynamicproperty = {};
		dynamicproperty.ODataEntity = e;
		dynamicproperty.FormattedValue = {};
		for (var field in _dynamicproperty) {
			var a = _dynamicproperty[field].a;
			var b = _dynamicproperty[field].b;
			var c = _dynamicproperty[field].c;
			var d = _dynamicproperty[field].d;
			var g = _dynamicproperty[field].g;
			var r = _dynamicproperty[field].r;
			webApiField(dynamicproperty, field, e, a, b, c, d, r, u, g);
		}
		dynamicproperty.Entity = u;
		dynamicproperty.EntityName = 'dynamicproperty';
		dynamicproperty.EntityCollectionName = 'dynamicproperties';
		dynamicproperty['@odata.etag'] = e['@odata.etag'];
		dynamicproperty.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		dynamicproperty.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return dynamicproperty;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.DynamicProperty = {
		DataType : {
			Decimal: 1,
			Floating_Point_Number: 2,
			Option_Set: 0,
			Single_Line_Of_Text: 3,
			Whole_Number: 4
		},
		RegardingObjectTypeCode : {
		},
		statecode : {
			Active: 0,
			Draft: 1,
			Retired: 2
		},
		statuscode : {
			Active: 1,
			Draft: 0,
			Retired: 2
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