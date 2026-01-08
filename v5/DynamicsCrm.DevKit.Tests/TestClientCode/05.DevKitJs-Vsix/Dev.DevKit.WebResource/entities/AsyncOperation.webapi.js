'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.AsyncOperationApi = function (e) {
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
		const _asyncoperation = {
			AsyncOperationId: { a: 'asyncoperationid' },
			BreadcrumbId: { a: 'breadcrumbid' },
			CallerOrigin: { a: 'callerorigin' },
			CompletedOn_UtcDateAndTime: { a: 'completedon', r: true, g: 'DateTime' },
			CorrelationId: { a: 'correlationid' },
			CorrelationUpdatedTime_UtcDateAndTime: { a: 'correlationupdatedtime', g: 'DateTime' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Data: { a: 'data' },
			DataBlobId_name: { a: 'datablobid', r: true },
			DependencyToken: { a: 'dependencytoken' },
			Depth: { a: 'depth', g: 'Integer' },
			ErrorCode: { a: 'errorcode', r: true, g: 'Integer' },
			ExecutionTimeSpan: { a: 'executiontimespan', r: true, g: 'Number' },
			ExpanderStartTime_UtcDateAndTime: { a: 'expanderstarttime', g: 'DateTime' },
			FriendlyMessage: { a: 'friendlymessage' },
			HostId: { a: 'hostid' },
			IsWaitingForEvent: { a: 'iswaitingforevent', r: true, g: 'Boolean' },
			Message: { a: 'message', r: true },
			MessageName: { a: 'messagename' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OperationType: { a: 'operationtype', g: 'Integer' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningExtensionId: { b: 'owningextensionid', a: '_owningextensionid_value', c: 'sdkmessageprocessingsteps', d: 'sdkmessageprocessingstep' },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentPluginExecutionId: { a: 'parentpluginexecutionid' },
			PostponeUntil_UtcDateAndTime: { a: 'postponeuntil', g: 'DateTime' },
			RecurrencePattern: { a: 'recurrencepattern' },
			RecurrenceStartTime_UtcDateOnly: { a: 'recurrencestarttime', g: 'DateTime' },
			RequestId: { a: 'requestid' },
			RetainJobHistory: { a: 'retainjobhistory', g: 'Boolean' },
			RetryCount: { a: 'retrycount', r: true, g: 'Integer' },
			RootExecutionContext: { a: 'rootexecutioncontext' },
			Sequence: { a: 'sequence', r: true, g: 'Integer' },
			StartedOn_UtcDateAndTime: { a: 'startedon', r: true, g: 'DateTime' },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			Subtype: { a: 'subtype', r: true, g: 'Integer' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			WorkflowActivationId: { b: 'workflowactivationid', a: '_workflowactivationid_value', c: 'workflows', d: 'workflow' },
			WorkflowIsBlocked: { a: 'workflowisblocked', r: true, g: 'Boolean' },
			WorkflowStageName: { a: 'workflowstagename', r: true },
			WorkflowState: { a: 'workflowstate', r: true },
			Workload: { a: 'workload' }
		};
		if (e === undefined) e = {};
		const u = {};
		const asyncoperation = {};
		asyncoperation.ODataEntity = e;
		asyncoperation.FormattedValue = {};
		for (const field in _asyncoperation) {
			const fieldConfig = _asyncoperation[field];
			webApiField(asyncoperation, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		asyncoperation.Entity = u;
		asyncoperation.EntityName = 'asyncoperation';
		asyncoperation.EntityCollectionName = 'asyncoperations';
		asyncoperation['@odata.etag'] = e?.['@odata.etag'];
		asyncoperation.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		asyncoperation.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return asyncoperation;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AsyncOperation = {
		OperationType: { Activity_Propagation: 6, AI_Builder_Prediction_Events: 190690092, AI_Builder_Training_Events: 190690091, ALM_Anomaly_Detection_Operation: 73, App_Module_Metadata_Operation: 72, Archive_Execution_Async_Operation: 301, Async_Restore_Job: 187, AsyncArchive_Async_Operation: 102, Audit_Partition_Creation: 41, Background_Team_Service_Async_Operation: 106, Bulk_Archive_Operation: 300, Bulk_Delete: 13, Bulk_Delete_File_Attachment: 94, Bulk_Delete_Subprocess: 23, Bulk_Duplicate_Detection: 8, Bulk_Email: 2, Calculate_Organization_Maximum_Storage_Size: 22, Calculate_Organization_Storage_Size: 18, Calculate_Rollup_Field: 57, CallbackRegistration_Expander_Operation: 79, Cancel_Async_Operations_System: 103, Cascade_Assign_All_Async_Operation: 105, Cascade_FlowSession_Permissions_Async_Operation: 100, Cascade_Grant_or_Revoke_Access_Version_Tracking_Async_Operation: 12801, Cascade_Merge_Async_Operation: 89, Cascade_Reparent_DB_Async_Operation: 88, CascadeAssign: 90, CascadeDelete: 91, Catalog_service_asyc_operation_to_poll_for_a_solution_checker_request: 335, Catalog_service_asyc_operation_to_submit_a_solution_checker_request: 336, Catalog_Service_Generate_Package_Async_Operation: 320, Catalog_Service_Install_Request_Async_Operation: 322, Catalog_Service_Submit_Approval_Request_Async_Operation: 321, Check_For_Language_Pack_Updates: 42, Cleanup_inactive_workflow_assemblies: 32, Cleanup_Solution_Components: 71, Collect_Organization_Database_Statistics: 19, Collect_Organization_Statistics: 16, Collection_Organization_Size_Statistics: 20, Convert_Date_And_Time_Behavior: 62, Create_Or_Refresh_Virtual_Entity: 98, Database_log_backup: 26, Database_Tuning: 21, DBCC_SHRINKDATABASE_maintenance_job: 28, DBCC_SHRINKFILE_maintenance_job: 29, DeleteAndPromote_Async_Operation: 207, Deletes_related_Elastic_or_SQL_Table_records_when_an_Elastic_Table_record_is_deleted: 334, Deletes_related_Elastic_Table_records_when_a_SQL_record_is_deleted: 333, Deletion_Service: 14, Denormalization_Async_Operation: 239, Duplicate_Detection_Rule_Publish: 7, Encryption_Health_Check: 53, EntityKey_Index_Creation: 63, Event_Expander_Operation: 92, Execute_Async_Request: 54, Execute_DataProcessing_Configuration: 306, Export_Solution_Async_Operation: 202, FinOps_DB_Sync_Async_Operation: 308, FinOps_Deploy_Custom_Package_Async_Operation: 332, FinOps_Deployment_Async_Operation: 302, FinOps_Unit_Test_Async_Operation: 309, Flow_Notification: 75, Goal_Roll_Up: 40, Import: 5, Import_File_Parse: 3, Import_Sample_Data: 38, Import_Solution_Async_Operation: 203, Import_Solution_Metadata: 93, Import_Subprocess: 17, Import_Translation: 59, ImportTranslation_Async_Operation: 210, Incoming_Email_Processing: 51, Index_Management: 15, Instant_entities_cleanup_operation: 339, Mailbox_Test_Access: 52, Mass_Calculate_Rollup_Field: 58, Matchcode_Update: 12, Migrate_article_content_to_file_storage: 86, Migrate_notes_to_attachments_job: 85, Organization_Full_Text_Catalog_Index: 25, Outgoing_Activity: 50, Post_to_Yammer: 49, Process_Table_For_RecycleBin: 104, Prompt_column_bulk_update_operation: 338, Provision_language_for_user: 201, Provision_Language_Pack: 43, ProvisionLanguage_Async_Operation: 209, PublishAll_Async_Operation: 204, Purge_Archived_Content_Operation: 304, Quick_Campaign: 11, Recurring_Series_Expansion: 35, Refresh_Business_Unit_for_Records_Owned_By_Principal: 95, Refresh_Runtime_Integration_Components_Async_Operation: 250, Regenerate_Entity_Row_Count_Snapshot_Data: 46, Regenerate_Read_Share_Snapshot_Data: 47, Register_Offering_Async_Operation: 305, Reindex_all_indices_maintenance_job: 30, Relationship_Assistant_Cards: 69, Resource_Booking_Sync: 68, Revoke_Inherited_Access: 96, Ribbon_Client_Metadata_Operation: 76, Solution_service_async_operation_to_install_solution_after_app_updates: 337, SQM_Data_Collection: 9, StageAndUpgrade_Async_Operation: 211, Storage_Limit_Notification: 31, Sync_Synapse_Tables_Schema: 307, System_Event: 1, TDS_endpoint_provisioning_new_TVF_functions_and_grant_permission_Async_Operation: 330, Transform_Parse_Data: 4, UninstallSolution_Async_Operation: 208, Update_Contract_States: 27, Update_Entitlement_States: 56, Update_Knowledge_Article_States: 65, Update_Modern_Flow_Async_Operation: 101, Update_Organization_Database: 44, Update_Solution: 45, Update_Statistic_Intervals: 24, Updated_Deactived_On_for_Resolved_Cases_job: 87, Workflow: 10 },
		OwningExtensionTypeCode: { },
		PrimaryEntityType: { },
		RegardingObjectTypeCode: { },
		StateCode: { Completed: 3, Locked: 2, Ready: 0, Suspended: 1 },
		StatusCode: { Canceled: 32, Canceling: 22, Failed: 31, In_Progress: 20, Pausing: 21, Succeeded: 30, Waiting: 10, Waiting_For_Resources: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));