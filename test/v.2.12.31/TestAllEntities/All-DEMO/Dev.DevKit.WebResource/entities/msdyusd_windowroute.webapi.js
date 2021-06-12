'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyusd_windowrouteApi = function (e) {
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
		var msdyusd_windowroute = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyusd_Action: { a: 'msdyusd_action' },
			msdyusd_Application: { b: 'msdyusd_Application', a: '_msdyusd_application_value', c: 'uii_hostedapplications', d: 'uii_hostedapplication' },
			msdyusd_ApplicationAction: { b: 'msdyusd_ApplicationAction', a: '_msdyusd_applicationaction_value', c: 'msdyusd_agentscriptactions', d: 'msdyusd_agentscriptaction' },
			msdyusd_Condition: { a: 'msdyusd_condition' },
			msdyusd_DashboardFrame: { a: 'msdyusd_dashboardframe' },
			msdyusd_Destination: { a: 'msdyusd_destination' },
			msdyusd_Direction: { a: 'msdyusd_direction' },
			msdyusd_Entity: { b: 'msdyusd_Entity', a: '_msdyusd_entity_value', c: 'msdyusd_entityassignments', d: 'msdyusd_entityassignment' },
			msdyusd_EntitySearch: { b: 'msdyusd_EntitySearch', a: '_msdyusd_entitysearch_value', c: 'msdyusd_entitysearchs', d: 'msdyusd_entitysearch' },
			msdyusd_field: { a: 'msdyusd_field' },
			msdyusd_From: { b: 'msdyusd_From', a: '_msdyusd_from_value', c: 'uii_hostedapplications', d: 'uii_hostedapplication' },
			msdyusd_FromSearch: { b: 'msdyusd_FromSearch', a: '_msdyusd_fromsearch_value', c: 'msdyusd_entitysearchs', d: 'msdyusd_entitysearch' },
			msdyusd_HideNavBar: { a: 'msdyusd_hidenavbar' },
			msdyusd_HideRibbon: { a: 'msdyusd_hideribbon' },
			msdyusd_InitiatingActivity: { b: 'msdyusd_InitiatingActivity', a: '_msdyusd_initiatingactivity_value', c: 'msdyusd_entityassignments', d: 'msdyusd_entityassignment' },
			msdyusd_loadarea: { a: 'msdyusd_loadarea' },
			msdyusd_MultipleMatches: { b: 'msdyusd_MultipleMatches', a: '_msdyusd_multiplematches_value', c: 'msdyusd_agentscriptactions', d: 'msdyusd_agentscriptaction' },
			msdyusd_MultipleMatchesDecision: { a: 'msdyusd_multiplematchesdecision' },
			msdyusd_name: { a: 'msdyusd_name' },
			msdyusd_NoMatchDecision: { a: 'msdyusd_nomatchdecision' },
			msdyusd_NoMatchesAction: { b: 'msdyusd_NoMatchesAction', a: '_msdyusd_nomatchesaction_value', c: 'msdyusd_agentscriptactions', d: 'msdyusd_agentscriptaction' },
			msdyusd_Order: { a: 'msdyusd_order' },
			msdyusd_RouteType: { a: 'msdyusd_routetype' },
			msdyusd_showtab: { b: 'msdyusd_showtab', a: '_msdyusd_showtab_value', c: 'uii_hostedapplications', d: 'uii_hostedapplication' },
			msdyusd_SingleMatchAction: { b: 'msdyusd_SingleMatchAction', a: '_msdyusd_singlematchaction_value', c: 'msdyusd_agentscriptactions', d: 'msdyusd_agentscriptaction' },
			msdyusd_SingleMatchDecision: { a: 'msdyusd_singlematchdecision' },
			msdyusd_SourceFrame: { a: 'msdyusd_sourceframe' },
			msdyusd_url: { a: 'msdyusd_url' },
			msdyusd_windowrouteId: { a: 'msdyusd_windowrouteid' },
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
		for (var field in msdyusd_windowroute) {
			var a = msdyusd_windowroute[field].a;
			var b = msdyusd_windowroute[field].b;
			var c = msdyusd_windowroute[field].c;
			var d = msdyusd_windowroute[field].d;
			var g = msdyusd_windowroute[field].g;
			var r = msdyusd_windowroute[field].r;
			msdyusd_windowroute[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyusd_windowroute.Entity = u;
		msdyusd_windowroute.EntityName = 'msdyusd_windowroute';
		msdyusd_windowroute.EntityCollectionName = 'msdyusd_windowroutes';
		msdyusd_windowroute['@odata.etag'] = e['@odata.etag'];
		msdyusd_windowroute.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyusd_windowroute.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyusd_windowroute;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyusd_windowroute = {
		msdyusd_Action : {
			Create_Session: 803750000,
			Default: 803750004,
			In_Place: 803750005,
			None: 803750003,
			Route_Window: 803750002,
			Show_Outside: 803750001
		},
		msdyusd_Destination : {
			Entity_Search: 803750001,
			Tab: 803750000
		},
		msdyusd_Direction : {
			Both: 2,
			Inbound: 1,
			Outbound: 0
		},
		msdyusd_MultipleMatchesDecision : {
			Create_Session_then_Do_Action: 803750002,
			Do_Action: 803750000,
			Next_Rule: 803750001
		},
		msdyusd_NoMatchDecision : {
			Create_Session_then_Do_Action: 803750002,
			Do_Action: 803750000,
			Next_Rule: 803750001
		},
		msdyusd_RouteType : {
			In_Place: 803750003,
			Menu_Chosen: 803750002,
			OnLoad: 803750001,
			Popup: 803750000
		},
		msdyusd_SingleMatchDecision : {
			Create_Session_Load_Match_then_Do_Action: 803750003,
			Create_Session_then_Do_Action: 803750002,
			Do_Action: 803750000,
			Next_Rule: 803750001
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