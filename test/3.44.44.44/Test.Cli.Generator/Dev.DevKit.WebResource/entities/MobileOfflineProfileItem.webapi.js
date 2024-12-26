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
			SelectedColumns: { a: 'selectedcolumns' },
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
			AccountLeads: 16,
			Activity_File_Attachment: 10184,
			Agreement_Business_Process: 11657,
			Asset_Category_Template_Association: 10378,
			Asset_Template_Association: 10379,
			Bookable_Resource: 1150,
			Bookable_Resource_Booking: 1145,
			Bookable_Resource_Booking_Quick_Note: 11716,
			Booking_Status: 1152,
			Booking_Timestamp: 11654,
			Case: 112,
			Case_to_Work_Order_Business_Process: 11656,
			CFS_IoT_Alert_Process_Flow: 11734,
			Comparator_Metadata: 11568,
			Competitor_Address: 1004,
			Competitor_Product: 1006,
			Connection_Role: 3231,
			ContactLeads: 22,
			Copilot_knowledge_interaction: 11599,
			Currency: 9105,
			Customer_Asset: 10380,
			Customer_Asset_Category: 10384,
			Entitlement: 9700,
			Entitlement_Contact: 7272,
			Entitlement_Product: 6363,
			Entitlement_Template_Product: 4545,
			Entity_Attachment: 10647,
			EventMainBusinessProcessFlow: 11085,
			Field_Service_Price_List_Item: 11660,
			Field_Service_Setting: 11661,
			Field_Service_Summary_Configuration: 11746,
			Functional_Location: 10385,
			Functional_Location_Type: 10386,
			Functional_Location_Type_Template_Association: 10388,
			Geolocation_Settings: 11735,
			Image_Descriptor: 1007,
			Incident_KnowledgeBaseRecord: 9931,
			Incident_Type: 11664,
			Incident_Type_Product: 11666,
			Incident_Type_Resolution: 11722,
			Incident_Type_Service: 11667,
			Incident_Type_Service_Task: 11668,
			Incident_Types_Setup: 11669,
			Inspection_Attachment: 11627,
			Inspection_Response: 11630,
			Inspection_Template: 11626,
			Inspection_Template_Version: 11628,
			Invoice_Product: 1091,
			IoT_Alert: 10402,
			IoT_Alert_to_Case_Process: 10418,
			IoT_Device: 10403,
			IoT_Device_Category: 10404,
			IoT_Device_Command: 10405,
			IoT_Device_Command_Definition: 10406,
			IoT_Device_Data_History: 10407,
			IoT_Device_Property: 10408,
			IoT_Device_Registration_History: 10409,
			IoT_Property_Definition: 10412,
			IoT_Provider: 10413,
			IoT_Provider_Instance: 10414,
			IoT_Settings: 10415,
			Knowledge_Article: 9953,
			Knowledge_Article_Attachment: 10199,
			Knowledge_Article_Image: 10193,
			Knowledge_Article_Views: 9955,
			Knowledge_Harvest_Job_Record: 11610,
			Lead_to_opportunity: 11198,
			Lead_To_Opportunity_Sales_Process: 954,
			LeadCompetitors: 24,
			LeadProduct: 27,
			Location_Template_Association: 10387,
			MobileSource: 11747,
			msdyn_historicalcaseharvestbatch: 11608,
			msdyn_historicalcaseharvestrun: 11609,
			Not_to_exceed: 11724,
			Opportunity_Line: 1083,
			Opportunity_Sales_Process: 953,
			OpportunityCompetitors: 25,
			Order_Line: 1089,
			OrganizationDataSyncFnoState: 10221,
			OrganizationDataSyncState: 10222,
			Phone_Call: 4210,
			Phone_To_Case_Process: 952,
			Price_List: 1022,
			Price_List_Item: 1026,
			Priority: 11006,
			Product_Inventory: 11683,
			Product_Relationship: 1028,
			Property: 1048,
			Property_Asset_Association: 10390,
			Property_Association: 1235,
			Property_Definition: 10389,
			Property_Instance: 1333,
			Property_Location_Association: 10391,
			Property_Log: 10392,
			Property_Option_Set_Item: 1049,
			Property_Template_Association: 10393,
			Purchase_Order_Business_Process: 11655,
			Queue: 2020,
			Queue_Item: 2029,
			Quote_Line: 1085,
			Resolution: 11727,
			Scheduling_Parameter: 11015,
			Service_Task_Type: 11702,
			SLA_KPI_Instance: 9752,
			Tax_Code: 11639,
			Team: 9,
			Template_For_Properties: 10394,
			Territory: 2013,
			Time_Entry: 11631,
			Time_Off_Request: 11703,
			Time_Source: 11632,
			Trade: 11728,
			Unit: 1055,
			Unit_Group: 1056,
			Warehouse: 11641,
			Work_Order: 11705,
			Work_Order_Business_Process: 11658,
			Work_Order_Incident: 11708,
			Work_order_not_to_exceed: 11732,
			Work_Order_Product: 11709,
			Work_Order_Resolution: 11733,
			Work_Order_Service: 11711,
			Work_Order_Service_Task: 11712,
			Work_Order_Substatus: 11713,
			Work_Order_Type: 11714
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