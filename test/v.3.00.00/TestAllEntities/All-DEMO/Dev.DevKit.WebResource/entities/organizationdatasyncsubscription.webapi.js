'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.organizationdatasyncsubscriptionApi = function (e) {
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
		var organizationdatasyncsubscription = {
			AadApplicationId: { a: 'aadapplicationid' },
			BlobPartitionBy: { a: 'blobpartitionby' },
			CanSyncAllMetadata: { a: 'cansyncallmetadata' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DataEndpointPostingType: { a: 'dataendpointpostingtype' },
			DataProcessingType: { a: 'dataprocessingtype' },
			EndpointSettings: { a: 'endpointsettings' },
			EntityFilters: { a: 'entityfilters' },
			EntitySettings: { a: 'entitysettings' },
			FullSyncOnly: { a: 'fullsynconly' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsOutOfBoxSubscription: { a: 'isoutofboxsubscription' },
			MigrationState: { a: 'migrationstate' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			NeedCopyAttachmentsToBlob: { a: 'needcopyattachmentstoblob' },
			NeedToCopyFilesToBlob: { a: 'needtocopyfilestoblob' },
			NewEntities: { a: 'newentities' },
			organizationdatasyncsubscriptionId: { a: 'organizationdatasyncsubscriptionid' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PartnerPrefix: { a: 'partnerprefix' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SubscriptionEndpointStatus: { a: 'subscriptionendpointstatus' },
			SubscriptionEntities: { a: 'subscriptionentities' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UnsubscribedEntities: { a: 'unsubscribedentities' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in organizationdatasyncsubscription) {
			var a = organizationdatasyncsubscription[field].a;
			var b = organizationdatasyncsubscription[field].b;
			var c = organizationdatasyncsubscription[field].c;
			var d = organizationdatasyncsubscription[field].d;
			var g = organizationdatasyncsubscription[field].g;
			var r = organizationdatasyncsubscription[field].r;
			organizationdatasyncsubscription[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		organizationdatasyncsubscription.Entity = u;
		organizationdatasyncsubscription.EntityName = 'organizationdatasyncsubscription';
		organizationdatasyncsubscription.EntityCollectionName = 'organizationdatasyncsubscriptions';
		organizationdatasyncsubscription['@odata.etag'] = e['@odata.etag'];
		organizationdatasyncsubscription.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		organizationdatasyncsubscription.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return organizationdatasyncsubscription;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.organizationdatasyncsubscription = {
		BlobPartitionBy : {
			Day: 1,
			Month: 2,
			None: 0,
			Year: 3
		},
		DataEndpointPostingType : {
			DefaultEndpoint: 0,
			HTTPS: 2,
			ServiceBusEventHub: 3,
			ServiceBusTopic: 1
		},
		DataProcessingType : {
			Batch: 2,
			Mixed: 3,
			NotificationOnly: 4,
			Streaming: 1,
			Unknown: 0
		},
		MigrationState : {
			DsfCloudService: 0,
			DsfSdk: 1
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Activated: 4,
			Deactivated: 5,
			Uninitialized: 3
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