'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.MobileOfflineProfileItemApi = function (e) {
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
		var _mobileofflineprofileitem = {
			CanBeFollowed: { a: 'canbefollowed' },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EntityObjectTypeCode: { a: 'entityobjecttypecode', r: true },
			GetRelatedEntityRecords: { a: 'getrelatedentityrecords' },
			IntroducedVersion: { a: 'introducedversion' },
			IsManaged: { a: 'ismanaged', r: true },
			IsValidated: { a: 'isvalidated', r: true },
			IsVisibleInGrid: { a: 'isvisibleingrid' },
			MobileOfflineProfileItemId: { a: 'mobileofflineprofileitemid' },
			MobileOfflineProfileItemIdUnique: { a: 'mobileofflineprofileitemidunique', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			ProcessId: { a: 'processid' },
			ProfileItemEntityFilter: { a: 'profileitementityfilter' },
			ProfileItemRule: { b: 'profileitemrule', a: '_profileitemrule_value', c: 'savedqueries', d: 'savedquery' },
			PublishedOn_UtcDateAndTime: { a: 'publishedon', r: true },
			RecordDistributionCriteria: { a: 'recorddistributioncriteria' },
			RecordsOwnedByMe: { a: 'recordsownedbyme' },
			RecordsOwnedByMyBusinessUnit: { a: 'recordsownedbymybusinessunit' },
			RecordsOwnedByMyTeam: { a: 'recordsownedbymyteam' },
			RegardingObjectId: { b: 'regardingobjectid', a: '_regardingobjectid_value', c: 'mobileofflineprofiles', d: 'mobileofflineprofile' },
			RelationshipData: { a: 'relationshipdata' },
			SelectedEntityMetadata: { a: 'selectedentitymetadata', r: true },
			SolutionId: { a: 'solutionid', r: true },
			StageId: { a: 'stageid' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			SyncIntervalInMinutes: { a: 'syncintervalinminutes' },
			TraversedPath: { a: 'traversedpath' },
			VersionNumber: { a: 'versionnumber', r: true },
			ViewQuery: { a: 'viewquery' }
		};
		if (e === undefined) e = {};
		var u = {};
		var mobileofflineprofileitem = {};
		mobileofflineprofileitem.ODataEntity = e;
		mobileofflineprofileitem.FormattedValue = {};
		for (var field in _mobileofflineprofileitem) {
			var a = _mobileofflineprofileitem[field].a;
			var b = _mobileofflineprofileitem[field].b;
			var c = _mobileofflineprofileitem[field].c;
			var d = _mobileofflineprofileitem[field].d;
			var g = _mobileofflineprofileitem[field].g;
			var r = _mobileofflineprofileitem[field].r;
			webApiField(mobileofflineprofileitem, field, e, a, b, c, d, r, u, g);
		}
		mobileofflineprofileitem.Entity = u;
		mobileofflineprofileitem.EntityName = 'mobileofflineprofileitem';
		mobileofflineprofileitem.EntityCollectionName = 'mobileofflineprofileitems';
		mobileofflineprofileitem['@odata.etag'] = e['@odata.etag'];
		mobileofflineprofileitem.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mobileofflineprofileitem.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mobileofflineprofileitem;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.MobileOfflineProfileItem = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		RecordDistributionCriteria : {
			All_records: 1,
			Custom_data_filter: 3,
			Download_related_data_only: 0,
			Other_data_filter: 2
		},
		SelectedEntityTypeCode : {
			Account: 1,
			AccountLeads: 16,
			Activity_File_Attachment: 10087,
			Agreement_Business_Process: 10594,
			Appointment: 4201,
			Asset_Category_Template_Association: 10149,
			Asset_Template_Association: 10150,
			Attachment: 1001,
			Bookable_Resource: 1150,
			Bookable_Resource_Booking: 1145,
			Bookable_Resource_Booking_Quick_Note: 10662,
			Booking_Status: 1152,
			Booking_Timestamp: 10591,
			Case: 112,
			Case_to_Work_Order_Business_Process: 10593,
			CFS_IoT_Alert_Process_Flow: 10674,
			Competitor: 123,
			Competitor_Address: 1004,
			Competitor_Product: 1006,
			Connection: 3234,
			Connection_Role: 3231,
			Contact: 2,
			ContactLeads: 22,
			Currency: 9105,
			Customer_Asset: 10151,
			Customer_Asset_Category: 10155,
			Email: 4202,
			Entitlement: 9700,
			Entitlement_Contact: 7272,
			Entitlement_Product: 6363,
			Entitlement_Template_Product: 4545,
			Field_Service_Price_List_Item: 10597,
			Field_Service_Setting: 10598,
			Functional_Location: 10156,
			Geolocation_Settings: 10675,
			Image_Descriptor: 1007,
			Incident_KnowledgeBaseRecord: 9931,
			Incident_Type: 10601,
			Incident_Type_Product: 10603,
			Incident_Type_Resolution: 10667,
			Incident_Type_Service: 10604,
			Incident_Type_Service_Task: 10605,
			Incident_Types_Setup: 10606,
			Inspection_Attachment: 10575,
			Inspection_Response: 10578,
			Inspection_Template: 10574,
			Inspection_Template_Version: 10576,
			Invoice: 1090,
			Invoice_Line: 1091,
			Invoice_Process: 10492,
			IoT_Alert: 10165,
			IoT_Alert_to_Case_Process: 10181,
			IoT_Device: 10166,
			IoT_Device_Category: 10167,
			IoT_Device_Command: 10168,
			IoT_Device_Command_Definition: 10169,
			IoT_Device_Data_History: 10170,
			IoT_Device_Property: 10171,
			IoT_Device_Registration_History: 10172,
			IoT_Property_Definition: 10175,
			IoT_Provider: 10176,
			IoT_Provider_Instance: 10177,
			IoT_Settings: 10178,
			Knowledge_Article: 9953,
			Knowledge_Article_Attachment: 10099,
			Knowledge_Article_Image: 10095,
			Knowledge_Article_Views: 9955,
			Lead: 4,
			Lead_To_Opportunity_Sales_Process: 954,
			LeadCompetitors: 24,
			LeadProduct: 27,
			Note: 5,
			Opportunity: 3,
			Opportunity_Line: 1083,
			Opportunity_Sales_Process: 953,
			OpportunityCompetitors: 25,
			Order: 1088,
			Order_Line: 1089,
			OrganizationDataSyncState: 10114,
			Phone_Call: 4210,
			Phone_To_Case_Process: 952,
			Price_List: 1022,
			Price_List_Item: 1026,
			Priority: 10479,
			Product: 1024,
			Product_Inventory: 10621,
			Product_Relationship: 1028,
			Project_Stages: 10491,
			Property: 1048,
			Property_Asset_Association: 10158,
			Property_Association: 1235,
			Property_Definition: 10157,
			Property_Instance: 1333,
			Property_Log: 10159,
			Property_Option_Set_Item: 1049,
			Property_Template_Association: 10160,
			Purchase_Order_Business_Process: 10592,
			Queue: 2020,
			Queue_Item: 2029,
			Quote: 1084,
			Quote_Line: 1085,
			Resolution: 10670,
			Scheduling_Parameter: 10482,
			Service_Task_Type: 10644,
			SLA_KPI_Instance: 9752,
			Task: 4212,
			Tax_Code: 10646,
			Team: 9,
			Template_For_Properties: 10161,
			Territory: 2013,
			Time_Entry: 10554,
			Time_Off_Request: 10648,
			Time_Source: 10569,
			Unit: 1055,
			Unit_Group: 1056,
			User: 8,
			Warehouse: 10650,
			Work_Order: 10651,
			Work_Order_Business_Process: 10595,
			Work_Order_Incident: 10654,
			Work_Order_Product: 10655,
			Work_Order_Resolution: 10673,
			Work_Order_Service: 10657,
			Work_Order_Service_Task: 10658,
			Work_Order_Substatus: 10659,
			Work_Order_Type: 10660
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