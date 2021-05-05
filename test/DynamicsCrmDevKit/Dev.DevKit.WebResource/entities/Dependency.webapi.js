'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.DependencyApi = function (e) {
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
		var dependency = {
			DependencyId: { a: 'dependencyid', r: true },
			DependencyType: { a: 'dependencytype', r: true },
			DependentComponentBaseSolutionId: { a: 'dependentcomponentbasesolutionid', r: true },
			DependentComponentNodeId: { b: 'dependentcomponentnodeid', a: '_dependentcomponentnodeid_value', c: 'dependencynodes', d: 'dependencynode', r: true },
			DependentComponentObjectId: { a: 'dependentcomponentobjectid', r: true },
			DependentComponentParentId: { a: 'dependentcomponentparentid', r: true },
			DependentComponentType: { a: 'dependentcomponenttype', r: true },
			RequiredComponentBaseSolutionId: { a: 'requiredcomponentbasesolutionid', r: true },
			RequiredComponentIntroducedVersion: { a: 'requiredcomponentintroducedversion', r: true },
			RequiredComponentNodeId: { b: 'requiredcomponentnodeid', a: '_requiredcomponentnodeid_value', c: 'dependencynodes', d: 'dependencynode', r: true },
			RequiredComponentObjectId: { a: 'requiredcomponentobjectid', r: true },
			RequiredComponentParentId: { a: 'requiredcomponentparentid', r: true },
			RequiredComponentType: { a: 'requiredcomponenttype', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in dependency) {
			var a = dependency[field].a;
			var b = dependency[field].b;
			var c = dependency[field].c;
			var d = dependency[field].d;
			var g = dependency[field].g;
			var r = dependency[field].r;
			dependency[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		dependency.Entity = u;
		dependency.EntityName = 'dependency';
		dependency.EntityCollectionName = 'dependencies';
		dependency['@odata.etag'] = e['@odata.etag'];
		dependency.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		dependency.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return dependency;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Dependency = {
		DependencyType : {
			None: 0,
			Published: 2,
			Solution_Internal: 1,
			Unpublished: 4
		},
		DependentComponentType : {
			AI_Configuration: 402,
			AI_Project: 401,
			AI_Project_Type: 400,
			Attachment: 35,
			Attribute: 2,
			Attribute_Image_Configuration: 431,
			Attribute_Lookup_Value: 5,
			Attribute_Map: 47,
			Attribute_Picklist_Value: 4,
			Canvas_App: 300,
			Complex_Control: 64,
			Connection_Role: 63,
			Connector_371: 371,
			Connector_372: 372,
			Contract_Template: 37,
			Convert_Rule: 154,
			Convert_Rule_Item: 155,
			Custom_Control: 66,
			Custom_Control_Default_Config: 68,
			Data_Source_Mapping: 166,
			Display_String: 22,
			Display_String_Map: 23,
			Duplicate_Rule: 44,
			Duplicate_Rule_Condition: 45,
			Email_Template: 36,
			Entity: 1,
			Entity_Analytics_Configuration: 430,
			Entity_Image_Configuration: 432,
			Entity_Key: 14,
			Entity_Map: 46,
			Entity_Relationship: 10,
			Entity_Relationship_Relationships: 12,
			Entity_Relationship_Role: 11,
			Environment_Variable_Definition: 380,
			Environment_Variable_Value: 381,
			Field_Permission: 71,
			Field_Security_Profile: 70,
			Form: 24,
			Hierarchy_Rule: 65,
			Import_Map: 208,
			Index: 18,
			KB_Article_Template: 38,
			Localized_Label: 7,
			Mail_Merge_Template: 39,
			Managed_Property: 13,
			Mobile_Offline_Profile: 161,
			Mobile_Offline_Profile_Item: 162,
			Option_Set: 9,
			Organization: 25,
			Plugin_Assembly: 91,
			Plugin_Type: 90,
			Privilege: 16,
			PrivilegeObjectTypeCode: 17,
			Relationship: 3,
			Relationship_Extra_Condition: 8,
			Report: 31,
			Report_Category: 33,
			Report_Entity: 32,
			Report_Visibility: 34,
			Ribbon_Command: 48,
			Ribbon_Context_Group: 49,
			Ribbon_Customization: 50,
			Ribbon_Diff: 55,
			Ribbon_Rule: 52,
			Ribbon_Tab_To_Command_Map: 53,
			Role: 20,
			Role_Privilege: 21,
			Routing_Rule: 150,
			Routing_Rule_Item: 151,
			Saved_Query: 26,
			Saved_Query_Visualization: 59,
			SDK_Message_Processing_Step: 92,
			SDK_Message_Processing_Step_Image: 93,
			SDKMessage: 201,
			SDKMessageFilter: 202,
			SdkMessagePair: 203,
			SdkMessageRequest: 204,
			SdkMessageRequestField: 205,
			SdkMessageResponse: 206,
			SdkMessageResponseField: 207,
			Service_Endpoint: 95,
			Similarity_Rule: 165,
			Site_Map: 62,
			SLA: 152,
			SLA_Item: 153,
			System_Form: 60,
			View_Attribute: 6,
			Web_Resource: 61,
			WebWizard: 210,
			Workflow: 29
		},
		RequiredComponentType : {
			AI_Configuration: 402,
			AI_Project: 401,
			AI_Project_Type: 400,
			Attachment: 35,
			Attribute: 2,
			Attribute_Image_Configuration: 431,
			Attribute_Lookup_Value: 5,
			Attribute_Map: 47,
			Attribute_Picklist_Value: 4,
			Canvas_App: 300,
			Complex_Control: 64,
			Connection_Role: 63,
			Connector_371: 371,
			Connector_372: 372,
			Contract_Template: 37,
			Convert_Rule: 154,
			Convert_Rule_Item: 155,
			Custom_Control: 66,
			Custom_Control_Default_Config: 68,
			Data_Source_Mapping: 166,
			Display_String: 22,
			Display_String_Map: 23,
			Duplicate_Rule: 44,
			Duplicate_Rule_Condition: 45,
			Email_Template: 36,
			Entity: 1,
			Entity_Analytics_Configuration: 430,
			Entity_Image_Configuration: 432,
			Entity_Key: 14,
			Entity_Map: 46,
			Entity_Relationship: 10,
			Entity_Relationship_Relationships: 12,
			Entity_Relationship_Role: 11,
			Environment_Variable_Definition: 380,
			Environment_Variable_Value: 381,
			Field_Permission: 71,
			Field_Security_Profile: 70,
			Form: 24,
			Hierarchy_Rule: 65,
			Import_Map: 208,
			Index: 18,
			KB_Article_Template: 38,
			Localized_Label: 7,
			Mail_Merge_Template: 39,
			Managed_Property: 13,
			Mobile_Offline_Profile: 161,
			Mobile_Offline_Profile_Item: 162,
			Option_Set: 9,
			Organization: 25,
			Plugin_Assembly: 91,
			Plugin_Type: 90,
			Privilege: 16,
			PrivilegeObjectTypeCode: 17,
			Relationship: 3,
			Relationship_Extra_Condition: 8,
			Report: 31,
			Report_Category: 33,
			Report_Entity: 32,
			Report_Visibility: 34,
			Ribbon_Command: 48,
			Ribbon_Context_Group: 49,
			Ribbon_Customization: 50,
			Ribbon_Diff: 55,
			Ribbon_Rule: 52,
			Ribbon_Tab_To_Command_Map: 53,
			Role: 20,
			Role_Privilege: 21,
			Routing_Rule: 150,
			Routing_Rule_Item: 151,
			Saved_Query: 26,
			Saved_Query_Visualization: 59,
			SDK_Message_Processing_Step: 92,
			SDK_Message_Processing_Step_Image: 93,
			SDKMessage: 201,
			SDKMessageFilter: 202,
			SdkMessagePair: 203,
			SdkMessageRequest: 204,
			SdkMessageRequestField: 205,
			SdkMessageResponse: 206,
			SdkMessageResponseField: 207,
			Service_Endpoint: 95,
			Similarity_Rule: 165,
			Site_Map: 62,
			SLA: 152,
			SLA_Item: 153,
			System_Form: 60,
			View_Attribute: 6,
			Web_Resource: 61,
			WebWizard: 210,
			Workflow: 29
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