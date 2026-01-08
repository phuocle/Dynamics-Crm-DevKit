'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.organizationdatasyncsubscriptionApi = function (e) {
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
		const _organizationdatasyncsubscription = {
			AadApplicationId: { a: 'aadapplicationid' },
			BlobPartitionBy: { a: 'blobpartitionby', g: 'Integer' },
			CanSyncAllMetadata: { a: 'cansyncallmetadata', g: 'Boolean' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DataEndpointPostingType: { a: 'dataendpointpostingtype', g: 'Integer' },
			DataProcessingType: { a: 'dataprocessingtype', g: 'Integer' },
			EndpointSettings: { a: 'endpointsettings' },
			EntityFilters: { a: 'entityfilters' },
			EntitySettings: { a: 'entitysettings' },
			FullSyncOnly: { a: 'fullsynconly', g: 'Boolean' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			IsOutOfBoxSubscription: { a: 'isoutofboxsubscription', g: 'Boolean' },
			MigrationState: { a: 'migrationstate', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			NeedCopyAttachmentsToBlob: { a: 'needcopyattachmentstoblob', g: 'Boolean' },
			NeedToCopyFilesToBlob: { a: 'needtocopyfilestoblob', g: 'Boolean' },
			NewEntities: { a: 'newentities' },
			NewFnoTables: { a: 'newfnotables' },
			organizationdatasyncsubscriptionId: { a: 'organizationdatasyncsubscriptionid' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			PartnerPrefix: { a: 'partnerprefix' },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' },
			SubscribedToAllEntities: { a: 'subscribedtoallentities', g: 'Boolean' },
			SubscriptionEndpointStatus: { a: 'subscriptionendpointstatus', g: 'Integer' },
			SubscriptionEntities: { a: 'subscriptionentities' },
			SubscriptionFnoTables: { a: 'subscriptionfnotables' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			UnsubscribedEntities: { a: 'unsubscribedentities' },
			UnsubscribedFnoTables: { a: 'unsubscribedfnotables' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const organizationdatasyncsubscription = {};
		organizationdatasyncsubscription.ODataEntity = e;
		organizationdatasyncsubscription.FormattedValue = {};
		for (const field in _organizationdatasyncsubscription) {
			const fieldConfig = _organizationdatasyncsubscription[field];
			webApiField(organizationdatasyncsubscription, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		organizationdatasyncsubscription.Entity = u;
		organizationdatasyncsubscription.EntityName = 'organizationdatasyncsubscription';
		organizationdatasyncsubscription.EntityCollectionName = 'organizationdatasyncsubscriptions';
		organizationdatasyncsubscription['@odata.etag'] = e?.['@odata.etag'];
		organizationdatasyncsubscription.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		organizationdatasyncsubscription.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return organizationdatasyncsubscription;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.organizationdatasyncsubscription = {
		BlobPartitionBy: { Day: 1, Month: 2, None: 0, Year: 3 },
		DataEndpointPostingType: { DefaultEndpoint: 0, HTTPS: 2, ServiceBusEventHub: 3, ServiceBusTopic: 1 },
		DataProcessingType: { Batch: 2, Mixed: 3, NotificationOnly: 4, Streaming: 1, Unknown: 0 },
		MigrationState: { DsfCloudService: 0, DsfSdk: 1 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Activated: 4, Deactivated: 5, Uninitialized: 3 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));