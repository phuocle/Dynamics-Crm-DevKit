//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_iotalert_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab__B4D9BB28_1BD1_4896_AA83_A8CD2A781DDE_Sections {
			AlertDataSection: DevKit.Controls.Section;
			AssetSection: DevKit.Controls.Section;
			Connected_Device_Readings: DevKit.Controls.Section;
			Device_Summary_Visualization: DevKit.Controls.Section;
			HierarchySection: DevKit.Controls.Section;
			SuggestionsSection: DevKit.Controls.Section;
		}
		interface tab_AssetDetailsTab_Sections {
			AssetWorkOrdersSection: DevKit.Controls.Section;
		}
		interface tab_DeviceCommandsTab_Sections {
			DeviceCommandsSection: DevKit.Controls.Section;
		}
		interface tab_DeviceInsightsTab_Sections {
			DeviceInsightsSection: DevKit.Controls.Section;
		}
		interface tab__B4D9BB28_1BD1_4896_AA83_A8CD2A781DDE extends DevKit.Controls.ITab {
			Section: tab__B4D9BB28_1BD1_4896_AA83_A8CD2A781DDE_Sections;
		}
		interface tab_AssetDetailsTab extends DevKit.Controls.ITab {
			Section: tab_AssetDetailsTab_Sections;
		}
		interface tab_DeviceCommandsTab extends DevKit.Controls.ITab {
			Section: tab_DeviceCommandsTab_Sections;
		}
		interface tab_DeviceInsightsTab extends DevKit.Controls.ITab {
			Section: tab_DeviceInsightsTab_Sections;
		}
		interface Tabs {
			_B4D9BB28_1BD1_4896_AA83_A8CD2A781DDE: tab__B4D9BB28_1BD1_4896_AA83_A8CD2A781DDE;
			AssetDetailsTab: tab_AssetDetailsTab;
			DeviceCommandsTab: tab_DeviceCommandsTab;
			DeviceInsightsTab: tab_DeviceInsightsTab;
		}
		interface Body {
			Tab: Tabs;
			/** Data sent from the device about the alert. */
			msdyn_AlertData: DevKit.Controls.String;
			/** Data sent from the device about the alert. */
			msdyn_AlertData_1: DevKit.Controls.String;
			/** The suggested priority score for this alert. */
			msdyn_alertpriorityscore: DevKit.Controls.Integer;
			/** The time the alert was issued. */
			msdyn_AlertTime: DevKit.Controls.DateTime;
			/** The unique reference to the event id on the IoT provider. */
			msdyn_AlertToken: DevKit.Controls.String;
			msdyn_alerttype: DevKit.Controls.OptionSet;
			/** External URL to view more information about the iot alert. */
			msdyn_AlertURL: DevKit.Controls.String;
			/** The asset connected to the IoT device that raised the alert. */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** A description for the alert. */
			msdyn_Description: DevKit.Controls.String;
			/** The IoT device for which this alert was raised. */
			msdyn_Device: DevKit.Controls.Lookup;
			/** The IoT device for which this alert was raised. */
			msdyn_Device_1: DevKit.Controls.Lookup;
			/** The IoT device for which this alert was raised. */
			msdyn_Device_2: DevKit.Controls.Lookup;
			/** The ID of the IoT device that sent the alert. */
			msdyn_DeviceID: DevKit.Controls.String;
			/** Reference to a primary alert. This field is inferred if Primary Alert Token is set. */
			msdyn_ParentAlert: DevKit.Controls.Lookup;
			/** Reference to a previously created primary iot alert */
			msdyn_ParentAlertToken: DevKit.Controls.String;
			/** The suggested incident type for this alert */
			msdyn_suggestedincidenttype: DevKit.Controls.Lookup;
			/** The suggested priority for this alert. */
			msdyn_suggestedpriority: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Reason for the status of the IoT Alert */
			statuscode: DevKit.Controls.OptionSet;
			WebResource_PowerBIAlert: DevKit.Controls.WebResource;
		}
		interface quickForm_AssetWorkOrdersView_Body {
		}
		interface quickForm_AssetWorkOrdersView extends DevKit.Controls.IQuickView {
			Body: quickForm_AssetWorkOrdersView_Body;
		}
		interface QuickForm {
			AssetWorkOrdersView: quickForm_AssetWorkOrdersView;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** The time the alert was issued. */
			msdyn_AlertTime: DevKit.Controls.DateTime;
			/** A description for the alert. */
			msdyn_Description: DevKit.Controls.String;
			/** The IoT device for which this alert was raised. */
			msdyn_Device: DevKit.Controls.Lookup;
		}
		interface ProcessIoT_Alert_to_Case_Process {
			/** The time the alert was issued. */
			msdyn_AlertTime: DevKit.Controls.DateTime;
			/** The asset connected to the IoT device that raised the alert. */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** A description for the alert. */
			msdyn_Description: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			IoT_Alert_to_Case_Process: ProcessIoT_Alert_to_Case_Process;
		}
		interface Grid {
			DeviceCommandsGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_iotalert_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_iotalert_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iotalert_Information */
		Body: DevKit.Formmsdyn_iotalert_Information.Body;
		/** The Header section of form msdyn_iotalert_Information */
		Header: DevKit.Formmsdyn_iotalert_Information.Header;
		/** The QuickForm of form msdyn_iotalert_Information */
		QuickForm: DevKit.Formmsdyn_iotalert_Information.QuickForm;
		/** The Process of form msdyn_iotalert_Information */
		Process: DevKit.Formmsdyn_iotalert_Information.Process;
		/** The Grid of form msdyn_iotalert_Information */
		Grid: DevKit.Formmsdyn_iotalert_Information.Grid;
		/** The SidePanes of form msdyn_iotalert_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_iotalertApi {
		/**
		* DynamicsCrm.DevKit msdyn_iotalertApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Data sent from the device about the alert. */
		msdyn_AlertData: DevKit.WebApi.StringValue;
		/** The suggested priority score for this alert. */
		msdyn_alertpriorityscore: DevKit.WebApi.IntegerValue;
		/** The time the alert was issued. */
		msdyn_AlertTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The unique reference to the event id on the IoT provider. */
		msdyn_AlertToken: DevKit.WebApi.StringValue;
		msdyn_alerttype: DevKit.WebApi.OptionSetValue;
		/** External URL to view more information about the iot alert. */
		msdyn_AlertURL: DevKit.WebApi.StringValue;
		/** Case created for this iot alert. */
		msdyn_case: DevKit.WebApi.LookupValue;
		/** The asset connected to the IoT device that raised the alert. */
		msdyn_CustomerAsset: DevKit.WebApi.LookupValue;
		/** A description for the alert. */
		msdyn_Description: DevKit.WebApi.StringValue;
		/** The IoT device for which this alert was raised. */
		msdyn_Device: DevKit.WebApi.LookupValue;
		/** The ID of the IoT device that sent the alert. */
		msdyn_DeviceID: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_iotalertId: DevKit.WebApi.GuidValue;
		msdyn_LastCommandSent: DevKit.WebApi.LookupValue;
		msdyn_LastCommandSentTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Reference to a primary alert. This field is inferred if Primary Alert Token is set. */
		msdyn_ParentAlert: DevKit.WebApi.LookupValue;
		/** Reference to a previously created primary iot alert */
		msdyn_ParentAlertToken: DevKit.WebApi.StringValue;
		/** The suggested incident type for this alert */
		msdyn_suggestedincidenttype: DevKit.WebApi.LookupValue;
		/** The suggested priority for this alert. */
		msdyn_suggestedpriority: DevKit.WebApi.OptionSetValue;
		/** Work order created for this iot alert. */
		msdyn_Workorder: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Contains the id of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Contains the id of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the IoT Alert */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the IoT Alert */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_iotalert {
		enum msdyn_alerttype {
			/** 192350000 */
			Anomaly,
			/** 192350001 */
			Info,
			/** 192350002 */
			Preventive_Maintenance,
			/** 192350003 */
			Test
		}
		enum msdyn_suggestedpriority {
			/** 192350000 */
			Calculating,
			/** 192350001 */
			High,
			/** 192350002 */
			Low,
			/** 192350003 */
			No_Suggestions
		}
		enum statecode {
			/** 0 */
			Active,
			/** 3 */
			Closed,
			/** 1 */
			Inactive,
			/** 2 */
			InProgress
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 6 */
			Closed,
			/** 3 */
			In_Progress_Case_Created,
			/** 7 */
			In_Progress_Command_Failed,
			/** 5 */
			In_Progress_Command_Sent,
			/** 4 */
			In_Progress_Work_Order_Created,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}