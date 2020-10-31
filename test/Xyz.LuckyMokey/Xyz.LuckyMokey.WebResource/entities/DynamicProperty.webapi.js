'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.DynamicPropertyApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
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
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var dynamicproperty = {
			BaseDynamicPropertyId: { b: 'basedynamicpropertyid', a: '_basedynamicpropertyid_value', c: 'dynamicproperties', d: 'dynamicproperty' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DataType: { a: 'datatype' },
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
		for (var field in dynamicproperty) {
			var a = dynamicproperty[field].a;
			var b = dynamicproperty[field].b;
			var c = dynamicproperty[field].c;
			var d = dynamicproperty[field].d;
			var g = dynamicproperty[field].g;
			var r = dynamicproperty[field].r;
			dynamicproperty[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		dynamicproperty.Entity = u;
		dynamicproperty.EntityName = 'dynamicproperty';
		dynamicproperty.EntityCollectionName = 'dynamicproperties';
		dynamicproperty['@odata.etag'] = e['@odata.etag'];
		dynamicproperty.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		dynamicproperty.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return dynamicproperty;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.DynamicProperty = {
		DataType : {
			Option_Set: 0,
			Decimal: 1,
			Floating_Point_Number: 2,
			Single_Line_Of_Text: 3,
			Whole_Number: 4
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