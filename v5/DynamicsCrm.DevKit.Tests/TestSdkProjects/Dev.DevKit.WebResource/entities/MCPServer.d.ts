//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMCPServer_Main_Form {
		interface tab_New_Tab_Sections {
			/** New Section */
			New_Section: DevKit.Controls.Section;
		}
		/** New Tab */
		interface tab_New_Tab extends DevKit.Controls.ITab {
			Section: tab_New_Tab_Sections;
		}
		interface Tabs {
			/** New Tab */
			New_Tab: tab_New_Tab;
		}
		interface Body {
			Tab: Tabs;
			/** Audience associated with the MCP Server. */
			Audience: DevKit.Controls.String;
			/** Configurations for the MCP Server */
			Configuration: DevKit.Controls.String;
			/** Description of the MCP Server */
			Description: DevKit.Controls.String;
			/** DisplayName of the MCP Server */
			DisplayName: DevKit.Controls.String;
			/** Instructions for the MCP Server */
			Instructions: DevKit.Controls.String;
			/** Denotes if this MCP server proxies another remote MCP server or not */
			IsRemote: DevKit.Controls.Boolean;
			/** Name of the MCP Server */
			Name: DevKit.Controls.String;
			/** Relative Path */
			RelativePath: DevKit.Controls.String;
			/** Scopes needed for the MCP Server. */
			Scope: DevKit.Controls.String;
			/** The type of server */
			ServerType: DevKit.Controls.OptionSet;
		}
	}
	export class FormMCPServer_Main_Form extends DevKit.IForm {
		/**
		* MCPServer Main Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form MCPServer_Main_Form */
		Body: DevKit.FormMCPServer_Main_Form.Body;
	}
	export class MCPServerApi {
		/**
		* DynamicsCrm.DevKit MCPServerApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Audience associated with the MCP Server. */
		Audience: string | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.MCPServer.ComponentState | null;
		/** Configurations for the MCP Server */
		Configuration: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the MCP Server */
		Description: string | null;
		/** DisplayName of the MCP Server */
		DisplayName: string | null;
		/** Icon */
		EntityImage: string | null;
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		Icon: string | null;
		Icon_Timestamp: number | null;
		Icon_URL: string | null;
		readonly IconId: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Instructions for the MCP Server */
		Instructions: string | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Denotes if this MCP server proxies another remote MCP server or not */
		IsRemote: boolean | null;
		/** Unique identifier for entity instances */
		MCPServerId: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the MCP Server */
		Name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Relative Path */
		RelativePath: string | null;
		/** Scopes needed for the MCP Server. */
		Scope: string | null;
		/** The type of server */
		ServerType: OptionSet.MCPServer.ServerType | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the MCPServer */
		statecode: OptionSet.MCPServer.statecode | null;
		/** Reason for the status of the MCPServer */
		statuscode: OptionSet.MCPServer.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Audience associated with the MCP Server. */
			readonly Audience: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Configurations for the MCP Server */
			readonly Configuration: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the MCP Server */
			readonly Description: string;
			/** DisplayName of the MCP Server */
			readonly DisplayName: string;
			/** Icon */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly Icon: string;
			readonly Icon_Timestamp: string;
			readonly Icon_URL: string;
			readonly IconId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Instructions for the MCP Server */
			readonly Instructions: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Denotes if this MCP server proxies another remote MCP server or not */
			readonly IsRemote: string;
			/** Unique identifier for entity instances */
			readonly MCPServerId: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the MCP Server */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Relative Path */
			readonly RelativePath: string;
			/** Scopes needed for the MCP Server. */
			readonly Scope: string;
			/** The type of server */
			readonly ServerType: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the MCPServer */
			readonly statecode: string;
			/** Reason for the status of the MCPServer */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace MCPServer {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum ServerType {
			/** Agent365 = 0*/
			Agent365 = 0
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}