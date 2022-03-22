//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormService_Information {
		interface tab_general_Sections {
			scheduling: DevKit.Controls.Section;
			scheduling_uci: DevKit.Controls.Section;
		}
		interface tab_required_resources_Sections {
			resources: DevKit.Controls.Section;
		}
		interface tab_required_resources_uci_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_Resource_Requirements_Sections {
			ResourceRequirement: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_required_resources extends DevKit.Controls.ITab {
			Section: tab_required_resources_Sections;
		}
		interface tab_required_resources_uci extends DevKit.Controls.ITab {
			Section: tab_required_resources_uci_Sections;
		}
		interface tab_Resource_Requirements extends DevKit.Controls.ITab {
			Section: tab_Resource_Requirements_Sections;
		}
		interface Tabs {
			general: tab_general;
			required_resources: tab_required_resources;
			required_resources_uci: tab_required_resources_uci;
			Resource_Requirements: tab_Resource_Requirements;
		}
		interface Body {
			Tab: Tabs;
			/** Used in conjunction with granularity to describes when services can be performed in relation to midnight on a given day. */
			AnchorOffset: DevKit.Controls.Integer;
			/** Used in conjunction with granularity to describes when services can be performed in relation to midnight on a given day. */
			AnchorOffset1: DevKit.Controls.Integer;
			/** Description of activity that represents work done to satisfy a customer's need. */
			Description: DevKit.Controls.String;
			/** Duration of the service. */
			Duration: DevKit.Controls.Integer;
			/** Duration of the service. */
			Duration1: DevKit.Controls.Integer;
			/** Describes how often the service is performed. */
			Granularity: DevKit.Controls.String;
			/** Describes how often the service is performed. */
			Granularity1: DevKit.Controls.String;
			IFRAME_RuleTree: DevKit.Controls.IFrame;
			IFRAME_Scheduling: DevKit.Controls.IFrame;
			/** Initial status reason for the service activity. */
			InitialStatusCode: DevKit.Controls.OptionSet;
			/** Information about whether the service can be scheduled. */
			IsSchedulable: DevKit.Controls.Boolean;
			msdyn_SchedulingEngine: DevKit.Controls.OptionSet;
			/** Name of the service. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the resource specification with which the service is associated. */
			ResourceSpecId: DevKit.Controls.Lookup;
			/** Unique identifier of the resource specification with which the service is associated. */
			ResourceSpecId1: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ResourceRequirements: DevKit.Controls.Grid;
		}
	}
	class FormService_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Service_Information */
		Body: DevKit.FormService_Information.Body;
		/** The Process of form Service_Information */
		Process: DevKit.FormService_Information.Process;
		/** The Grid of form Service_Information */
		Grid: DevKit.FormService_Information.Grid;
		/** The SidePanes of form Service_Information */
		SidePanes: DevKit.SidePanes;
	}
	class ServiceApi {
		/**
		* DynamicsCrm.DevKit ServiceApi
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Used in conjunction with granularity to describes when services can be performed in relation to midnight on a given day. */
		AnchorOffset: number;
		/** Unique identifier of the calendar. */
		CalendarId: string;
		/** Unique identifier of the user who created the service. */
		readonly CreatedBy: string;
		/** Date and time when the service was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the service. */
		readonly CreatedOnBehalfBy: string;
		/** Description of activity that represents work done to satisfy a customer's need. */
		Description: string;
		/** Duration of the service. */
		Duration: number;
		/** Describes how often the service is performed. */
		Granularity: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Initial status reason for the service activity. */
		InitialStatusCode: OptionSet.Service.InitialStatusCode;
		/** Information about whether the service can be scheduled. */
		IsSchedulable: boolean;
		/** Information about whether the service is visible to users. */
		IsVisible: boolean;
		/** Unique identifier of the user who last modified the service. */
		readonly ModifiedBy: string;
		/** Date and time when the service was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the service. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for Requirement Group associated with Service. */
		msdyn_RequirementGroupId: string;
		msdyn_SchedulingEngine: OptionSet.Service.msdyn_SchedulingEngine;
		/** Name of the service. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique identifier of the resource specification with which the service is associated. */
		ResourceSpecId: string;
		/** Unique identifier of the associated service. */
		ServiceId: string;
		/** For internal use only. */
		ShowResources: boolean;
		/** Value that is taken from PluginTypeId in the Plugin Type record for the scheduling strategy. This is the ID of the scheduling strategy plug-in associated with the service. */
		StrategyId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace Service {
		enum InitialStatusCode {
			/** 7 */
			Arrived,
			/** 9 */
			Canceled,
			/** 8 */
			Completed,
			/** 6 */
			In_Progress,
			/** 10 */
			No_Show,
			/** 3 */
			Pending,
			/** 1 */
			Requested,
			/** 4 */
			Reserved,
			/** 2 */
			Tentative
		}
		enum msdyn_SchedulingEngine {
			/** 0 */
			Legacy_Scheduling,
			/** 1 */
			Universal_Resource_Scheduling
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}