//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formpowerpagecomponent_Information {
		interface Tabs {
		}
		interface Body {
			/** Content */
			content: DevKit.Controls.String;
			/** File Content column contains portal web files e.g. png, css etc. */
			filecontent: DevKit.Controls.File;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Component Type */
			powerpagecomponenttype: DevKit.Controls.OptionSet;
			/** Power Pages Site id */
			powerpagesiteid: DevKit.Controls.Lookup;
			/** Power Pages Site Language Id */
			powerpagesitelanguageid: DevKit.Controls.Lookup;
			/** Status of the Power Pages Component */
			statecode: DevKit.Controls.OptionSet;
		}
	}
	export class Formpowerpagecomponent_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form powerpagecomponent_Information */
		Body: DevKit.Formpowerpagecomponent_Information.Body;
	}
	export class powerpagecomponentApi {
		/**
		* DynamicsCrm.DevKit powerpagecomponentApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.powerpagecomponent.ComponentState | null;
		content: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** File Content column contains portal web files e.g. png, css etc. */
		readonly filecontent_name: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the custom entity. */
		name: string | null;
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
		/** Unique identifier for entity instances */
		powerpagecomponentId: string | null;
		powerpagecomponenttype: OptionSet.powerpagecomponent.powerpagecomponenttype | null;
		powerpagesiteid: string | null;
		powerpagesitelanguageid: string | null;
		searchcontent: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the Power Pages Component */
		statecode: OptionSet.powerpagecomponent.statecode | null;
		/** Reason for the status of the Power Pages Component */
		statuscode: OptionSet.powerpagecomponent.statuscode | null;
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
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			readonly content: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** File Content column contains portal web files e.g. png, css etc. */
			readonly filecontent_name: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
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
			/** Unique identifier for entity instances */
			readonly powerpagecomponentId: string;
			readonly powerpagecomponenttype: string;
			readonly powerpagesiteid: string;
			readonly powerpagesitelanguageid: string;
			readonly searchcontent: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Power Pages Component */
			readonly statecode: string;
			/** Reason for the status of the Power Pages Component */
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
	namespace powerpagecomponent {
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
		enum powerpagecomponenttype {
			/** Ad_Placement = 26*/
			Ad_Placement = 26,
			/** Advanced_Form = 19*/
			Advanced_Form = 19,
			/** Advanced_Form_Metadata = 21*/
			Advanced_Form_Metadata = 21,
			/** Advanced_Form_Step = 20*/
			Advanced_Form_Step = 20,
			/** Basic_Form = 15*/
			Basic_Form = 15,
			/** Basic_Form_Metadata = 16*/
			Basic_Form_Metadata = 16,
			/** Bot_Consumer = 27*/
			Bot_Consumer = 27,
			/** Cloud_Flow = 33*/
			Cloud_Flow = 33,
			/** Column_Permission = 29*/
			Column_Permission = 29,
			/** Column_Permission_Profile = 28*/
			Column_Permission_Profile = 28,
			/** Content_Snippet = 7*/
			Content_Snippet = 7,
			/** List = 17*/
			List = 17,
			/** Page_Template = 6*/
			Page_Template = 6,
			/** Poll_Placement = 24*/
			Poll_Placement = 24,
			/** Publishing_State = 1*/
			Publishing_State = 1,
			/** Publishing_State_Transition_Rule = 31*/
			Publishing_State_Transition_Rule = 31,
			/** Redirect = 30*/
			Redirect = 30,
			/** Server_Logic = 35*/
			Server_Logic = 35,
			/** Shortcut = 32*/
			Shortcut = 32,
			/** Site_Marker = 13*/
			Site_Marker = 13,
			/** Site_Setting = 9*/
			Site_Setting = 9,
			/** Table_Permission = 18*/
			Table_Permission = 18,
			/** UX_Component = 34*/
			UX_Component = 34,
			/** Web_File = 3*/
			Web_File = 3,
			/** Web_Link = 5*/
			Web_Link = 5,
			/** Web_Link_Set = 4*/
			Web_Link_Set = 4,
			/** Web_Page = 2*/
			Web_Page = 2,
			/** Web_Page_Access_Control_Rule = 10*/
			Web_Page_Access_Control_Rule = 10,
			/** Web_Role = 11*/
			Web_Role = 11,
			/** Web_Template = 8*/
			Web_Template = 8,
			/** Website_Access = 12*/
			Website_Access = 12
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