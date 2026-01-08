'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.ServiceEndpointApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _serviceendpoint = {
			AuthType: { a: 'authtype', g: 'Integer' },
			AuthValue: { a: 'authvalue' },
			ComponentState: { a: 'componentstate', r: true, g: 'Integer' },
			ConnectionMode: { a: 'connectionmode', g: 'Integer' },
			Contract: { a: 'contract', g: 'Integer' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			IntroducedVersion: { a: 'introducedversion' },
			IsAuthValueSet: { a: 'isauthvalueset', r: true, g: 'Boolean' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true, g: 'Boolean' },
			IsSASKeySet: { a: 'issaskeyset', r: true, g: 'Boolean' },
			IsSASTokenSet: { a: 'issastokenset', r: true, g: 'Boolean' },
			KeyVaultReferenceId: { b: 'keyvaultreferenceid', a: '_keyvaultreferenceid_value', c: 'keyvaultreferences', d: 'keyvaultreference' },
			ManagedIdentityId: { b: 'managedidentityid', a: '_managedidentityid_value', c: 'managedidentities', d: 'managedidentity' },
			MessageCharset: { a: 'messagecharset', g: 'Integer' },
			MessageFormat: { a: 'messageformat', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			NamespaceAddress: { a: 'namespaceaddress' },
			NamespaceFormat: { a: 'namespaceformat', g: 'Integer' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true, g: 'DateTime' },
			Path: { a: 'path' },
			RuntimeIntegrationProperties: { a: 'runtimeintegrationproperties' },
			SASKey: { a: 'saskey' },
			SASKeyName: { a: 'saskeyname' },
			SASToken: { a: 'sastoken' },
			SchemaType: { a: 'schematype', g: 'Integer' },
			ServiceEndpointId: { a: 'serviceendpointid' },
			ServiceEndpointIdUnique: { a: 'serviceendpointidunique', r: true },
			SolutionId: { a: 'solutionid', r: true },
			SolutionNamespace: { a: 'solutionnamespace' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			Url: { a: 'url' },
			UseKeyVaultConfiguration: { a: 'usekeyvaultconfiguration', g: 'Boolean' },
			UserClaim: { a: 'userclaim', g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const serviceendpoint = {};
		serviceendpoint.ODataEntity = e;
		serviceendpoint.FormattedValue = {};
		for (const field in _serviceendpoint) {
			const fieldConfig = _serviceendpoint[field];
			webApiField(serviceendpoint, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		serviceendpoint.Entity = u;
		serviceendpoint.EntityName = 'serviceendpoint';
		serviceendpoint.EntityCollectionName = 'serviceendpoints';
		serviceendpoint['@odata.etag'] = e?.['@odata.etag'];
		serviceendpoint.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		serviceendpoint.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return serviceendpoint;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.ServiceEndpoint = {
		AuthType: { Access_Key: 8, ACS: 1, Connection_String: 7, Http_Header: 5, Http_Query_String: 6, Managed_Identity: 9, Not_Specified: 0, SAS_Key: 2, SAS_Token: 3, Webhook_Key: 4 },
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		ConnectionMode: { Federated: 2, Normal: 1 },
		Contract: { Container_Storage: 11, Event_Grid: 9, Event_Hub: 7, Managed_Data_Lake: 10, OneWay: 1, Queue: 2, Queue_Persistent: 6, Rest: 3, Topic: 5, TwoWay: 4, Webhook: 8 },
		MessageCharset: { Default: 0, UTF8: 1, Windows1252: 2 },
		MessageFormat: { Binary_XML: 1, Json: 2, Text_XML: 3 },
		NamespaceFormat: { Namespace_Address: 2, Namespace_Name: 1 },
		SchemaType: { Cloud_Events: 2, Event_Grid: 1 },
		UserClaim: { None: 1, UserId: 2, UserInfo: 3 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));