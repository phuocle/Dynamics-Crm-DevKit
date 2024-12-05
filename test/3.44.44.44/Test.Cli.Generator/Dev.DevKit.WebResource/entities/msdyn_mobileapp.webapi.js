'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_mobileappApi = function (e) {
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
		var _msdyn_mobileapp = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_actionButtonHighlight: { a: 'msdyn_actionbuttonhighlight' },
			msdyn_adalClientId: { a: 'msdyn_adalclientid' },
			msdyn_adalRedirectUri: { a: 'msdyn_adalredirecturi' },
			msdyn_AndroidAppCenterAPIToken: { a: 'msdyn_androidappcenterapitoken' },
			msdyn_AndroidAppCenterAPITokenSaved: { a: 'msdyn_androidappcenterapitokensaved' },
			msdyn_appCenterAppIdAab: { a: 'msdyn_appcenterappidaab' },
			msdyn_appCenterAppIdApk: { a: 'msdyn_appcenterappidapk' },
			msdyn_appCenterAppIdIpa: { a: 'msdyn_appcenterappidipa' },
			msdyn_appIcon1024x1024_name: { a: 'msdyn_appicon1024x1024', r: true },
			msdyn_appIcon120x120_name: { a: 'msdyn_appicon120x120', r: true },
			msdyn_appIcon152x152_name: { a: 'msdyn_appicon152x152', r: true },
			msdyn_appIcon167x167_name: { a: 'msdyn_appicon167x167', r: true },
			msdyn_appIcon180x180_name: { a: 'msdyn_appicon180x180', r: true },
			msdyn_appIconHdpi_name: { a: 'msdyn_appiconhdpi', r: true },
			msdyn_appIconMdpi_name: { a: 'msdyn_appiconmdpi', r: true },
			msdyn_appIconXdpi_name: { a: 'msdyn_appiconxdpi', r: true },
			msdyn_appIconXxhdpi_name: { a: 'msdyn_appiconxxhdpi', r: true },
			msdyn_appIconXxxhdpi_name: { a: 'msdyn_appiconxxxhdpi', r: true },
			msdyn_branch: { a: 'msdyn_branch' },
			msdyn_buildDetails: { a: 'msdyn_builddetails' },
			msdyn_bundleIdentifier: { a: 'msdyn_bundleidentifier' },
			msdyn_buttonColor: { a: 'msdyn_buttoncolor' },
			msdyn_customDimensions: { a: 'msdyn_customdimensions' },
			msdyn_displayName: { a: 'msdyn_displayname' },
			msdyn_fillColor: { a: 'msdyn_fillcolor' },
			msdyn_headingTextColor: { a: 'msdyn_headingtextcolor' },
			msdyn_hyperLinkColor: { a: 'msdyn_hyperlinkcolor' },
			msdyn_IOSAppCenterAPIToken: { a: 'msdyn_iosappcenterapitoken' },
			msdyn_IOSAppCenterAPITokenSaved: { a: 'msdyn_iosappcenterapitokensaved' },
			msdyn_iosEnterpriseSigningEnabled: { a: 'msdyn_iosenterprisesigningenabled' },
			msdyn_keyVaultUri: { a: 'msdyn_keyvaulturi' },
			msdyn_launchAppResources_name: { a: 'msdyn_launchappresources', r: true },
			msdyn_mobileAppDefinitionAndroid_name: { a: 'msdyn_mobileappdefinitionandroid', r: true },
			msdyn_mobileAppDefinitionIOS_name: { a: 'msdyn_mobileappdefinitionios', r: true },
			msdyn_mobileappId: { a: 'msdyn_mobileappid' },
			msdyn_orgName: { a: 'msdyn_orgname' },
			msdyn_platformType: { a: 'msdyn_platformtype' },
			msdyn_primaryPublishedAppName: { b: 'msdyn_primarypublishedappname', a: '_msdyn_primarypublishedappname_value', c: 'canvasapps', d: 'canvasapp' },
			msdyn_proDev_customPackage_name: { a: 'msdyn_prodev_custompackage', r: true },
			msdyn_pushNotificationsAndroidJson_name: { a: 'msdyn_pushnotificationsandroidjson', r: true },
			msdyn_pushNotificationsEnabled_android: { a: 'msdyn_pushnotificationsenabled_android' },
			msdyn_pushNotificationsEnabled_ios: { a: 'msdyn_pushnotificationsenabled_ios' },
			msdyn_pushNotificationsIosPlist_name: { a: 'msdyn_pushnotificationsiosplist', r: true },
			msdyn_recentBuild: { a: 'msdyn_recentbuild' },
			msdyn_secondaryApps: { a: 'msdyn_secondaryapps' },
			msdyn_secondaryPublishedAppNames: { a: 'msdyn_secondarypublishedappnames' },
			msdyn_statusBarContentColorMode: { a: 'msdyn_statusbarcontentcolormode' },
			msdyn_tenantSplashImage_name: { a: 'msdyn_tenantsplashimage', r: true },
			msdyn_tenantWelcomeImage_name: { a: 'msdyn_tenantwelcomeimage', r: true },
			msdyn_UniqueName: { a: 'msdyn_uniquename' },
			name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_mobileapp = {};
		msdyn_mobileapp.ODataEntity = e;
		msdyn_mobileapp.FormattedValue = {};
		for (var field in _msdyn_mobileapp) {
			var a = _msdyn_mobileapp[field].a;
			var b = _msdyn_mobileapp[field].b;
			var c = _msdyn_mobileapp[field].c;
			var d = _msdyn_mobileapp[field].d;
			var g = _msdyn_mobileapp[field].g;
			var r = _msdyn_mobileapp[field].r;
			webApiField(msdyn_mobileapp, field, e, a, b, c, d, r, u, g);
		}
		msdyn_mobileapp.Entity = u;
		msdyn_mobileapp.EntityName = 'msdyn_mobileapp';
		msdyn_mobileapp.EntityCollectionName = 'msdyn_mobileapps';
		msdyn_mobileapp['@odata.etag'] = e['@odata.etag'];
		msdyn_mobileapp.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_mobileapp.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_mobileapp;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_mobileapp = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
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