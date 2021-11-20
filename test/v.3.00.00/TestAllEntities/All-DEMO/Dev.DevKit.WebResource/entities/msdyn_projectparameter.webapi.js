'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_projectparameterApi = function (e) {
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
		var msdyn_projectparameter = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Allowskillupdatebyresource: { a: 'msdyn_allowskillupdatebyresource' },
			msdyn_BackgroundApprovalThreshold: { a: 'msdyn_backgroundapprovalthreshold' },
			msdyn_defaultorganizationalunit: { b: 'msdyn_defaultorganizationalunit', a: '_msdyn_defaultorganizationalunit_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			msdyn_defaultWorkTemplate: { b: 'msdyn_defaultWorkTemplate', a: '_msdyn_defaultworktemplate_value', c: 'msdyn_workhourtemplates', d: 'msdyn_workhourtemplate' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_invoicefrequency: { b: 'msdyn_invoicefrequency', a: '_msdyn_invoicefrequency_value', c: 'msdyn_invoicefrequencies', d: 'msdyn_invoicefrequency' },
			msdyn_pricelistdefaultingiscurrencyagnostic: { a: 'msdyn_pricelistdefaultingiscurrencyagnostic' },
			msdyn_projectmanagerrole: { b: 'msdyn_projectmanagerrole', a: '_msdyn_projectmanagerrole_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			msdyn_projectparameterId: { a: 'msdyn_projectparameterid' },
			msdyn_Projectresourcerequirementsvisibletore: { a: 'msdyn_projectresourcerequirementsvisibletore' },
			msdyn_resourceallocationmode: { a: 'msdyn_resourceallocationmode' },
			msdyn_teammemberrole: { b: 'msdyn_teammemberrole', a: '_msdyn_teammemberrole_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			msdyn_upgradebatchsize: { a: 'msdyn_upgradebatchsize' },
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
		for (var field in msdyn_projectparameter) {
			var a = msdyn_projectparameter[field].a;
			var b = msdyn_projectparameter[field].b;
			var c = msdyn_projectparameter[field].c;
			var d = msdyn_projectparameter[field].d;
			var g = msdyn_projectparameter[field].g;
			var r = msdyn_projectparameter[field].r;
			msdyn_projectparameter[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_projectparameter.Entity = u;
		msdyn_projectparameter.EntityName = 'msdyn_projectparameter';
		msdyn_projectparameter.EntityCollectionName = 'msdyn_projectparameters';
		msdyn_projectparameter['@odata.etag'] = e['@odata.etag'];
		msdyn_projectparameter.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_projectparameter.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_projectparameter;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.msdyn_projectparameter = {
			msdyn_resourceallocationmode : {
				Centralized: 1,
				Hybrid: 2
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