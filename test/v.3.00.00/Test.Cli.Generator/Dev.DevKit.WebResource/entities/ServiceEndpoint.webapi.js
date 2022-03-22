'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ServiceEndpointApi = function (e) {
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
		var _serviceendpoint = {
			AuthType: { a: 'authtype' },
			AuthValue: { a: 'authvalue' },
			ComponentState: { a: 'componentstate', r: true },
			ConnectionMode: { a: 'connectionmode' },
			Contract: { a: 'contract' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			IntroducedVersion: { a: 'introducedversion' },
			IsAuthValueSet: { a: 'isauthvalueset', r: true },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			IsSASKeySet: { a: 'issaskeyset', r: true },
			IsSASTokenSet: { a: 'issastokenset', r: true },
			KeyVaultReferenceId: { b: 'keyvaultreferenceid', a: '_keyvaultreferenceid_value', c: 'keyvaultreferences', d: 'keyvaultreference' },
			MessageCharset: { a: 'messagecharset' },
			MessageFormat: { a: 'messageformat' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			NamespaceAddress: { a: 'namespaceaddress' },
			NamespaceFormat: { a: 'namespaceformat' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			Path: { a: 'path' },
			RuntimeIntegrationProperties: { a: 'runtimeintegrationproperties' },
			SASKey: { a: 'saskey' },
			SASKeyName: { a: 'saskeyname' },
			SASToken: { a: 'sastoken' },
			SchemaType: { a: 'schematype' },
			ServiceEndpointId: { a: 'serviceendpointid' },
			ServiceEndpointIdUnique: { a: 'serviceendpointidunique', r: true },
			SolutionId: { a: 'solutionid', r: true },
			SolutionNamespace: { a: 'solutionnamespace' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			Url: { a: 'url' },
			UseKeyVaultConfiguration: { a: 'usekeyvaultconfiguration' },
			UserClaim: { a: 'userclaim' }
		};
		if (e === undefined) e = {};
		var u = {};
		var serviceendpoint = {};
		serviceendpoint.ODataEntity = e;
		serviceendpoint.FormattedValue = {};
		for (var field in _serviceendpoint) {
			var a = _serviceendpoint[field].a;
			var b = _serviceendpoint[field].b;
			var c = _serviceendpoint[field].c;
			var d = _serviceendpoint[field].d;
			var g = _serviceendpoint[field].g;
			var r = _serviceendpoint[field].r;
			webApiField(serviceendpoint, field, e, a, b, c, d, r, u, g);
		}
		serviceendpoint.Entity = u;
		serviceendpoint.EntityName = 'serviceendpoint';
		serviceendpoint.EntityCollectionName = 'serviceendpoints';
		serviceendpoint['@odata.etag'] = e['@odata.etag'];
		serviceendpoint.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		serviceendpoint.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return serviceendpoint;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ServiceEndpoint = {
		AuthType : {
			Access_Key: 8,
			ACS: 1,
			Connection_String: 7,
			Http_Header: 5,
			Http_Query_String: 6,
			SAS_Key: 2,
			SAS_Token: 3,
			Webhook_Key: 4
		},
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		ConnectionMode : {
			Federated: 2,
			Normal: 1
		},
		Contract : {
			Event_Grid: 9,
			Event_Hub: 7,
			OneWay: 1,
			Queue: 2,
			Queue_Persistent: 6,
			Rest: 3,
			Topic: 5,
			TwoWay: 4,
			Webhook: 8
		},
		MessageCharset : {
			Default: 0,
			UTF8: 1
		},
		MessageFormat : {
			Binary_XML: 1,
			Json: 2,
			Text_XML: 3
		},
		NamespaceFormat : {
			Namespace_Address: 2,
			Namespace_Name: 1
		},
		SchemaType : {
			Cloud_Events: 2,
			Event_Grid: 1
		},
		UserClaim : {
			None: 1,
			UserId: 2,
			UserInfo: 3
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