//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class appactionApi {
		/**
		* DynamicsCrm.DevKit appactionApi
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
		/** Unique identifier for entity instances */
		appactionId: string | null;
		/** Unique identifier for AppModule associated with Modern Command */
		AppModuleId: string | null;
		ButtonAccessibilityText: string | null;
		/** Label Text renders for Modern Command Button */
		ButtonLabelText: string | null;
		/** Order of the Modern Command Button (Depreciated) */
		ButtonSequencePriority: number | null;
		/** Tooltip Description for Modern Command Button */
		ButtonTooltipDescription: string | null;
		/** Tooltip Title for Modern Command Button */
		ButtonTooltipTitle: string | null;
		/** Client Type associated with Modern Command */
		ClientType: Array<OptionSet.appaction.ClientType> | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.appaction.ComponentState | null;
		/** Context scope associated with Modern Command */
		Context: OptionSet.appaction.Context | null;
		/** Context Entity associated with Modern Command */
		ContextEntity: string | null;
		/** Context Name associated with Modern Command */
		ContextValue: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Font Icon for Modern Command Button */
		FontIcon: string | null;
		/** Group Title for Modern Command Group Button */
		GroupTitle: string | null;
		Hidden: boolean | null;
		/** Unique identifier of the Icon Webresource from Webresource entity which used by the associated Modern Command */
		IconWebResourceId: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Flag indicates the Modern Command Button is disabled for end user usage i.e. ribbon equivalent will be shown */
		IsDisabled: boolean | null;
		/** Flag indicates the Modern Command Group Button Title is hidden */
		isGroupTitleHidden: boolean | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Location of the Command bar associated with the Modern Command. */
		Location: OptionSet.appaction.Location | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the AppAction entity. */
		name: string | null;
		/** Name of the Component Library where FX Action stored. */
		OnClickEventFormulaComponentLibrary: string | null;
		/** Unique identifier of the Component Library associated with Modern Command. */
		OnClickEventFormulaComponentLibraryId: string | null;
		/** Name of the Component for FX Modern Command. */
		OnClickEventFormulaComponentName: string | null;
		/** Name of the Function for FX Modern Command. */
		OnClickEventFormulaFunctionName: string | null;
		/** Name of the Function for JS Modern Command. */
		OnClickEventJavaScriptFunctionName: string | null;
		/** Parameters of the Function for JS Modern Command. */
		OnClickEventJavaScriptParameters: string | null;
		/** Unique identifier of the JavaScript WebResource from the Webresource entity which used by associated JS Modern Command. */
		OnClickEventJavaScriptWebResourceId: string | null;
		/** Type of Action associated with Modern Command. */
		OnClickEventType: OptionSet.appaction.OnClickEventType | null;
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/** Origin of App Action. */
		Origin: OptionSet.appaction.Origin | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Unique identifier for Parent Modern Command associated with Modern Command. */
		ParentAppActionId: string | null;
		/** Order of the Modern Command to be Displayed. */
		Sequence: number | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the App Action */
		statecode: OptionSet.appaction.statecode | null;
		/** Reason for the status of the App Action */
		statuscode: OptionSet.appaction.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Type of Modern Command Button */
		Type: OptionSet.appaction.Type | null;
		/** Unique Name of the AppAction */
		UniqueName: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/** Name of the Component Library where FX Visible Rule stored associated with Modern Command. */
		VisibilityFormulaComponentLibrary: string | null;
		/** Unique identifier of the Component Library associated with Modern Command. */
		VisibilityFormulaComponentLibraryId: string | null;
		/** Name of the Component for FX Visible Rule associated with Modern Command. */
		VisibilityFormulaComponentName: string | null;
		/** Name of the Function for FX Visible Rule assoicated with Modern Command. */
		VisibilityFormulaFunctionName: string | null;
		/** Visibily Type of the Modern Command which should be either FX/Classic or None. */
		VisibilityType: OptionSet.appaction.VisibilityType | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier for entity instances */
			readonly appactionId: string;
			/** Unique identifier for AppModule associated with Modern Command */
			readonly AppModuleId: string;
			readonly ButtonAccessibilityText: string;
			/** Label Text renders for Modern Command Button */
			readonly ButtonLabelText: string;
			/** Order of the Modern Command Button (Depreciated) */
			readonly ButtonSequencePriority: string;
			/** Tooltip Description for Modern Command Button */
			readonly ButtonTooltipDescription: string;
			/** Tooltip Title for Modern Command Button */
			readonly ButtonTooltipTitle: string;
			/** Client Type associated with Modern Command */
			readonly ClientType: Array<string>;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Context scope associated with Modern Command */
			readonly Context: string;
			/** Context Entity associated with Modern Command */
			readonly ContextEntity: string;
			/** Context Name associated with Modern Command */
			readonly ContextValue: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Font Icon for Modern Command Button */
			readonly FontIcon: string;
			/** Group Title for Modern Command Group Button */
			readonly GroupTitle: string;
			readonly Hidden: string;
			/** Unique identifier of the Icon Webresource from Webresource entity which used by the associated Modern Command */
			readonly IconWebResourceId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Flag indicates the Modern Command Button is disabled for end user usage i.e. ribbon equivalent will be shown */
			readonly IsDisabled: string;
			/** Flag indicates the Modern Command Group Button Title is hidden */
			readonly isGroupTitleHidden: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Location of the Command bar associated with the Modern Command. */
			readonly Location: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the AppAction entity. */
			readonly name: string;
			/** Name of the Component Library where FX Action stored. */
			readonly OnClickEventFormulaComponentLibrary: string;
			/** Unique identifier of the Component Library associated with Modern Command. */
			readonly OnClickEventFormulaComponentLibraryId: string;
			/** Name of the Component for FX Modern Command. */
			readonly OnClickEventFormulaComponentName: string;
			/** Name of the Function for FX Modern Command. */
			readonly OnClickEventFormulaFunctionName: string;
			/** Name of the Function for JS Modern Command. */
			readonly OnClickEventJavaScriptFunctionName: string;
			/** Parameters of the Function for JS Modern Command. */
			readonly OnClickEventJavaScriptParameters: string;
			/** Unique identifier of the JavaScript WebResource from the Webresource entity which used by associated JS Modern Command. */
			readonly OnClickEventJavaScriptWebResourceId: string;
			/** Type of Action associated with Modern Command. */
			readonly OnClickEventType: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Origin of App Action. */
			readonly Origin: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Unique identifier for Parent Modern Command associated with Modern Command. */
			readonly ParentAppActionId: string;
			/** Order of the Modern Command to be Displayed. */
			readonly Sequence: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the App Action */
			readonly statecode: string;
			/** Reason for the status of the App Action */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Type of Modern Command Button */
			readonly Type: string;
			/** Unique Name of the AppAction */
			readonly UniqueName: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Name of the Component Library where FX Visible Rule stored associated with Modern Command. */
			readonly VisibilityFormulaComponentLibrary: string;
			/** Unique identifier of the Component Library associated with Modern Command. */
			readonly VisibilityFormulaComponentLibraryId: string;
			/** Name of the Component for FX Visible Rule associated with Modern Command. */
			readonly VisibilityFormulaComponentName: string;
			/** Name of the Function for FX Visible Rule assoicated with Modern Command. */
			readonly VisibilityFormulaFunctionName: string;
			/** Visibily Type of the Modern Command which should be either FX/Classic or None. */
			readonly VisibilityType: string;
		}
	}
}
declare namespace OptionSet {
	namespace appaction {
		enum ClientType {
			/** Browser = 0*/
			Browser = 0,
			/** Mail_App = 2*/
			Mail_App = 2,
			/** Mobile = 1*/
			Mobile = 1
		}
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
		enum Context {
			/** All = 0*/
			All = 0,
			/** Entity = 1*/
			Entity = 1
		}
		enum Location {
			/** Associated_Grid = 3*/
			Associated_Grid = 3,
			/** Dashboard = 6*/
			Dashboard = 6,
			/** Form = 0*/
			Form = 0,
			/** Global_Header = 5*/
			Global_Header = 5,
			/** Main_Grid = 1*/
			Main_Grid = 1,
			/** Quick_Form = 4*/
			Quick_Form = 4,
			/** Sub_Grid = 2*/
			Sub_Grid = 2
		}
		enum OnClickEventType {
			/** Formula = 1*/
			Formula = 1,
			/** JavaScript = 2*/
			JavaScript = 2,
			/** None = 0*/
			None = 0
		}
		enum Origin {
			/** Default = 0*/
			Default = 0,
			/** Enhanced_Migrated = 2*/
			Enhanced_Migrated = 2,
			/** Migrated = 1*/
			Migrated = 1
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
		enum Type {
			/** Dropdown_Button = 1*/
			Dropdown_Button = 1,
			/** Group = 3*/
			Group = 3,
			/** Split_Button = 2*/
			Split_Button = 2,
			/** Standard_Button = 0*/
			Standard_Button = 0
		}
		enum VisibilityType {
			/** Classic_Rules = 2*/
			Classic_Rules = 2,
			/** Formula = 1*/
			Formula = 1,
			/** None = 0*/
			None = 0
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